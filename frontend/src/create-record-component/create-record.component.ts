import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RecordModel} from "../app/models/record.model";
import {AuthService} from "../app/services/auth.service";
import {EmotionModel} from "../app/models/emotion.model";
import {DataService} from "../app/services/data.service";

@Component({
  selector: 'create-record-component',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.less']
})
export class CreateRecordComponent {
  public formGroup!: FormGroup;
  public date!: Date;
  public maxDate!: Date;
  public isVisiblePopup: boolean = false;
  public selectedEmotions: EmotionModel[] = [];
  private createdRecord: RecordModel = {
    date: '',
    emotions: [],
    situation: '',
    thought: '',
    userName: ''
  };

  @Output()
  public _onRecordSaved: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private dataService: DataService) {
    this._createForm();
    this.maxDate = new Date();
  }

  private _createForm(): void {
    this.formGroup = this.formBuilder.group({
      situation: ['', [Validators.required]],
      thoughts: ['', [Validators.required]]
    })
  }

  public _onDateChange(event: any): void {
    this.date = event.value;
  }

  public onPlusButtonClick(): void {
    this.isVisiblePopup = true;
  }

  public onClosePopup(event: boolean): void {
    this.isVisiblePopup = event;
  }

  public getSelectedEmotions(event: EmotionModel[]): void {
    this.selectedEmotions = event;
  }

  public _onRecordSave(): void {
    this.createdRecord.userName = this.authService.getDecodedName();
    this.createdRecord.date = this.dateToStringFormat(this.date);
    this.createdRecord.situation = this.formGroup.value.situation;
    this.createdRecord.thought = this.formGroup.value.thoughts;
    this.createdRecord.emotions = this.selectedEmotions;

    this.dataService.saveRecord(this.createdRecord)
      .subscribe(
        (data) => {
          this.formGroup.reset();
          this._onRecordSaved.emit(data);
        }
      );
  }

  private dateToStringFormat(date: Date): string {
    let month: string = (date.getMonth() + 1).toString();
    let day: string = date.getDate().toString();

    if (month.length == 1) {
      month = '0' + month;
    }
    if (day.length == 1) {
      day = '0' + day;
    }

    return date.getFullYear().toString() + '-' + month + '-' + day;
  }
}
