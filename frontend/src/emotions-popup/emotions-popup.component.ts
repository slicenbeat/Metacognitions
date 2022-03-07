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
  @Output() closePopup = new EventEmitter<boolean>();
  @Output() sendingEmotions = new EventEmitter<EmotionModel[]>();

  public emotionsList: Array<any> = emotionsArray;
  public selectedEmotions: EmotionModel[] = new Array<EmotionModel>();

  constructor() {
  }

  ngOnInit():void {

  }

  onClose():void {
    this.isVisible = false;
    this.closePopup.emit(this.isVisible);
  }

  onSelectEmotion(event: Event, emotion: string){
    const newEmotion: EmotionModel = {emotionCode: emotion};
    if (!this.selectedEmotions.includes(newEmotion)) {
      this.selectedEmotions.push(newEmotion);
    }
    else {
      this.selectedEmotions = this.selectedEmotions.filter((element) => element !== newEmotion);
    }
  }

  public onSave(): void {
    this.isVisible = false;
    this.sendingEmotions.emit((this.selectedEmotions));
    this.closePopup.emit(this.isVisible);
  }
}
