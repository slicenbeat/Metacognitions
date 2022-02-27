import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app/app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../app/modules/material.module";
import {EmotionComponent} from "../emotion-component/emotion.component";
import {RecordComponent} from "./record.component";

@NgModule({
  declarations: [
    EmotionComponent,
    RecordComponent
  ],
  exports: [
    EmotionComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ]
})
export class RecordModule {
}
