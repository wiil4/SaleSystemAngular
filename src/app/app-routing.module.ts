import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Security/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'client', component: ClientComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path:'**', component:HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
