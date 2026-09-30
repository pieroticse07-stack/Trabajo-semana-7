import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio';
import { ProductosComponent } from './components/productos/productos';
import { NosotrosComponent } from './components/nosotros/nosotros';
import { FormularioComponent } from './components/formulario/formulario';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '**', redirectTo: '' }
];