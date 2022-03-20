import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app/app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "../app/modules/material.module";
import {EmotionComponent} from "../emotion-component/emotion.component";
import {RecordComponent} from "./record.component";
import {RecordEditingComponent} from "../record-editing-component/record-editing.component";
import {ReactiveFormsModule} from "@angular/forms";
import {EmotionsPopupModule} from "../emotions-popup/emotions-popup.module";

@NgModule({
  declarations: [
    EmotionComponent,
    RecordComponent,
    RecordEditingComponent
  ],
  exports: [
    EmotionComponent,
    RecordComponent,
    RecordEditingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    EmotionsPopupModule
  ]
})
export class RecordModule {
}
