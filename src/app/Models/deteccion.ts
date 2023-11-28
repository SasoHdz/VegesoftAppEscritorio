import * as cocoSsd from '@tensorflow-models/coco-ssd';


export async function detectar() {
  let currentProductName: string = '';
  let currentProductPrice: string = '';
  let productosConocidos: { [key: string]: string } = await cargarProductosConocidos(); // Tipo para productos conocidos

  let objectDetected: boolean = false;
  let framesWithoutObject: number = 0;
  const framesThreshold: number = 30;

  try {
    const stream: MediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    const videoElement: HTMLVideoElement = document.getElementById('cameraView') as HTMLVideoElement;
    videoElement.srcObject = stream;

    const model: any = await cocoSsd.load(); // Tipo específico para el modelo si es posible

    const detectObjects = async () => {
      try {
        const predictions = await model.detect(videoElement);

        if (predictions.length > 0) {
          const detectedClass: string = predictions[0].class || 'Desconocido';

          if (productosConocidos[detectedClass.toLowerCase()]) {
            if (currentProductName !== detectedClass) {
              currentProductName = detectedClass;
              currentProductName = currentProductName.toUpperCase();
              (document.getElementById('productName') as HTMLInputElement).value = currentProductName;

              currentProductPrice = productosConocidos[currentProductName.toLowerCase()] || '';
              (document.getElementById('productPrice') as HTMLInputElement).value = currentProductPrice;

              objectDetected = true;
              framesWithoutObject = 0;
            }
          }
        } else {
          if (objectDetected) {
            framesWithoutObject++;
            if (framesWithoutObject >= framesThreshold) {
              currentProductName = '';
              currentProductPrice = '';
              (document.getElementById('productName') as HTMLInputElement).value = '';
              (document.getElementById('productPrice') as HTMLInputElement).value = '';
              objectDetected = false;
            }
          }
        }
      } catch (error) {
        console.error('Error al detectar objetos: ', error);
      }

      requestAnimationFrame(detectObjects);
    };

    detectObjects();
  } catch (error) {
    console.error('Error al acceder a la cámara o cargar el modelo COCO-SSD: ', error);
  }
}

export async function cargarProductosConocidos(): Promise<{ [key: string]: string }> {
  try {
    const response = await fetch('http://localhost:3000/productos');
    const data: { [key: string]: string } = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar la lista de productos conocidos: ', error);
    return {};
  }
}
