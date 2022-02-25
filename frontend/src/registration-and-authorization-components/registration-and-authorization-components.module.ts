import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app/app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../app/modules/material.module";
import {
  RegistrationAndAuthorizationPageComponent
} from "./registration-and-authorization-page/registration-and-authorization-page.component";
import {AuthorizationFormComponent} from "./authorization-form/authorization-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";

@NgModule({
  declarations: [
    RegistrationAndAuthorizationPageComponent,
    AuthorizationFormComponent,
    RegistrationFormComponent
  ],
  exports: [
    RegistrationAndAuthorizationPageComponent,
    AuthorizationFormComponent,
    RegistrationFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class RegistrationAndAuthorizationComponentsModule {
}
