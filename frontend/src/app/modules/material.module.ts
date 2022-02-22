import {NgModule} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: []
})
export class MaterialModule {
}
