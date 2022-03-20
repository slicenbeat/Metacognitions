import {Component, EventEmitter, Input, Output} from "@angular/core";
import {emotionsArray} from "./emotions";
import {EmotionModel} from "../app/models/emotion.model";

@Component({
  selector: 'emotions-popup',
  templateUrl: './emotions-popup.component.html',
  styleUrls: ['./emotions-popup.component.less']
})
export class EmotionsPopupComponent {

  @Input() public isVisible: boolean = false;
  @Input() emotionsFromUserRecord: Array<EmotionModel> = new Array<EmotionModel>();
  @Output() closePopup = new EventEmitter<boolean>();
  @Output() sendingEmotions = new EventEmitter<EmotionModel[]>();

  public emotionsList: Array<any> = emotionsArray;
  public selectedEmotions: EmotionModel[] = new Array<EmotionModel>();
  public selectedEmotionsName: Array<string> = new Array<string>();

  constructor() {
  }

  ngOnInit():void {
    if (this.emotionsFromUserRecord) {
      this.selectedEmotions = this.emotionsFromUserRecord;
      this.selectedEmotionsName = this.emotionsFromUserRecord.map(emotion => emotion.emotionCode);
    }
  }

  onClose():void {
    this.isVisible = false;
    this.closePopup.emit(this.isVisible);
  }

  onSelectEmotion(event: Event, emotion: string){
    const newEmotion: EmotionModel = {emotionCode: emotion};
    if (!this.selectedEmotionsName.includes(newEmotion.emotionCode)) {
      this.selectedEmotions.push(newEmotion);
    }
    else {
      this.selectedEmotionsName = this.selectedEmotionsName.filter((element: string) => element !== newEmotion.emotionCode);
      this.selectedEmotions = this.selectedEmotions.filter((element) => element.emotionCode !== newEmotion.emotionCode);
    }
  }

  public onSave(): void {
    this.isVisible = false;
    this.selectedEmotionsName = this.selectedEmotions.map(emotion => emotion.emotionCode);
    this.sendingEmotions.emit((this.selectedEmotions));
    this.closePopup.emit(this.isVisible);
  }
}
