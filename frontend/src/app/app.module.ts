import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material.module";
import {RegistrationAndAuthorizationComponentsModule} from "../registration-and-authorization-components/registration-and-authorization-components.module";
import {RecordModule} from "../record-component/record.module";

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
        RecordModule,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
