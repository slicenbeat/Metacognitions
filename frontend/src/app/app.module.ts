import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material.module";
import {RecordModule} from "../record-component/record.module";
import {StartPageComponent} from "../start-page/start-page.component";
import {RecordsPageComponent} from "../records-page-component/records-page.component";
import {AuthorizationFormComponent} from "../registration-and-authorization-components/authorization-form/authorization-form.component";
import {RegistrationFormComponent} from "../registration-and-authorization-components/registration-form/registration-form.component";
import {RegistrationAndAuthorizationPageComponent} from "../registration-and-authorization-components/registration-and-authorization-page/registration-and-authorization-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateRecordComponent} from "../create-record-component/create-record.component";
import {EmotionsPopupComponent} from "../emotions-popup/emotions-popup.component";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./services/data.service";
import {OkDialogComponent} from "./ok-dialog.component/ok-dialog.component";
import {AuthGuard} from "./services/auth-guard";

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    RecordsPageComponent,
    RegistrationFormComponent,
    AuthorizationFormComponent,
    RegistrationAndAuthorizationPageComponent,
    CreateRecordComponent,
    EmotionsPopupComponent,
    OkDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RecordModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    DataService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
