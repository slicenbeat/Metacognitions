import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmotionModel} from "../app/models/emotion.model";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";

@Component({
  selector: 'create-record-component',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.less']
})
export class CreateRecordComponent {
  public formGroup!: FormGroup;
  public emotions!: EmotionModel[];
  public date: Date | null = null;
  public maxDate!: Date;
  public isVisiblePopup: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this._createForm();
    this.emotions = [
      {name: 'Радость'},
      {name: 'Восторг'},
      {name: 'Шок'},
      {name: 'Разочарование'},
      {name: 'Грусть'},
      {name: 'Печаль'},
      {name: 'Желание умереть'},
      {name: 'Муки совести'}
    ];
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

  public onClosePopup(event: any):void {
    this.isVisiblePopup = event;
  }
}
