import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfigComponent } from './pages/config/config.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { IniciarComponent } from './pages/iniciar/iniciar.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component: HomeComponent},
  {path:'config',component: ConfigComponent},
  {path:'history',component: HistorialComponent},
  {path:'inventario',component: InventarioComponent},
  {path:'iniciar',component: IniciarComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
