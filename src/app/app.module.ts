import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './pages/config/config.component';
import { HomeComponent } from './pages/home/home.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { MenuVerticalComponent } from './components/menu-vertical/menu-vertical.component';
import { PrductoComponent } from './components/prducto/prducto.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { IniciarComponent } from './pages/iniciar/iniciar.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    HomeComponent,
    HistorialComponent,
    MenuVerticalComponent,
    PrductoComponent,
    ItemListComponent,
    IniciarComponent,
    InventarioComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
