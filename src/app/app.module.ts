import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './pages/config/config.component';
import { HomeComponent } from './pages/home/home.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { PrductoComponent } from './components/prducto/prducto.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemListComponent2 } from './components/item-list-venta/item-list.component';
import { IniciarComponent } from './pages/iniciar/iniciar.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CampoFormComponent } from './components/campo-form/campo-form.component';
import { ButtonSuccessComponent } from './components/button-success/button-success.component';
import { ButtonStopComponent } from './components/button-stop/button-stop.component';
import { ItemVentaComponent } from './components/item-venta/item-venta.component';
import { ItemInventarioComponent } from './components/item-inventario/item-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HomeComponent,
    HistorialComponent,
    MenuVerticalComponent,
    PrductoComponent,
    ItemListComponent,
    ItemListComponent2,
    IniciarComponent,
    InventarioComponent,
    HeaderComponent,
    LayoutComponent,
    CampoFormComponent,
    ButtonSuccessComponent,
    ButtonStopComponent,
    ItemVentaComponent,
    ItemInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
