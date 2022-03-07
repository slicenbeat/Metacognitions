import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'ok-dialog',
  templateUrl: './ok-dialog.component.html',
  styleUrls: ['./ok-dialog.component.less']
})
export class OkDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {label: string, text: string}) {
  }
}
