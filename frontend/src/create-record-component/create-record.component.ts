import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'create-record-component',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.less']
})
export class CreateRecordComponent {
  public formGroup!: FormGroup;
  public date: Date | null = null;
  public maxDate!: Date;
  public isVisiblePopup: boolean = false;
  public selectedEmotions!: Array<string>;

  constructor(private formBuilder: FormBuilder) {
    this._createForm();
    this.maxDate = new Date();
  }

  private _createForm(): void {
    this.formGroup = this.formBuilder.group({
      situation: ['', [Validators.required]],
      thoughts: ['', [Validators.required]]
    })
  }

  public _onDateChange(event: MatDatepickerInputEvent<Date>): void {
    this.date = event.value;
  }

  public onPlusButtonClick():void {
    this.isVisiblePopup = true;
  }

  public onClosePopup(event: boolean):void {
    this.isVisiblePopup = event;
  }

  public getSelectedEmotions(event: Array<string>):void {
    this.selectedEmotions = event;
    console.log(this.selectedEmotions);
  }
}
