import {NgModule} from "@angular/core";
import {EmotionsPopupComponent} from "./emotions-popup.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    EmotionsPopupComponent
  ],
  exports: [
    EmotionsPopupComponent
  ],
    imports: [
        CommonModule
    ]
})
export class EmotionsPopupModule{}
