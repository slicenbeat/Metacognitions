import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material.module";
import {RegistrationAndAuthorizationComponentsModule} from "../registration-and-authorization-components/registration-and-authorization-components.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RegistrationAndAuthorizationComponentsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
