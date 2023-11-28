import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { detectar, } from '../../Models/deteccion';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.scss']
})
export class IniciarComponent implements OnInit {
  @ViewChild('videoElement') videoElement!: ElementRef;

  async ngOnInit() {
    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = this.videoElement.nativeElement as HTMLVideoElement;
      video.srcObject = stream;
      video.play();
      detectar();

    } catch (error) {
      console.error('Error al acceder a la cámara: ', error);
    }
  }


}
