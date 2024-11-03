import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroUsuariosScreenComponent } from './screens/registro-usuarios-screen/registro-usuarios-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AdminScreenComponent } from './services/admin-screen/admin-screen.component';
import { AlumnosScreenComponent } from './services/alumnos-screen/alumnos-screen.component';
import { MaestrosScreenComponent } from './services/maestros-screen/maestros-screen.component';

const routes: Routes = [
  //Pantalla principal del login
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro-usuarios', component: RegistroUsuariosScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'alumnos', component: AlumnosScreenComponent, pathMatch: 'full' },
  { path: 'maestros', component: MaestrosScreenComponent, pathMatch: 'full' },
  { path: 'administrador', component: AdminScreenComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
