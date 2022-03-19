import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmotionModel} from "../app/models/emotion.model";
import {RecordModel} from "../app/models/record.model";

@Component({
  selector: 'record-editing-component',
  templateUrl: './record-editing.component.html',
  styleUrls: ['./record-editing.component.less']
})
export class RecordEditingComponent {
  public formGroup!: FormGroup;
  public maxDate!: Date;
  public isVisiblePopup: boolean = false;

  @Output()
  public onCloseEditMode: EventEmitter<boolean> = new EventEmitter<boolean>();
  public selectedEmotions!: EmotionModel[];

  @Input()
  public record!: RecordModel;

  @Output()
  private onHideCreateRecordCard: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit():void {
    this.selectedEmotions = this.record.emotions;
    this._createForm();
    this.maxDate = new Date();
  }

  private _createForm(): void {
    this.formGroup = this.formBuilder.group({
      situation: [this.record.situation, [Validators.required]],
      thoughts: [this.record.thought, [Validators.required]],
      date: [new Date(this.record.date)]
    })
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

  public onSave() {
    this.onCloseEditMode.emit(false);
  }

  public _hideEditingRecordCard(): void {
    this.onHideCreateRecordCard.emit();
  }


}
