import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  RegistrationAndAuthorizationPageComponent
} from "../registration-and-authorization-components/registration-and-authorization-page/registration-and-authorization-page.component";

const routes: Routes = [
  {path: 'registration', component: RegistrationAndAuthorizationPageComponent},
  {path: 'authorization', component: RegistrationAndAuthorizationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
