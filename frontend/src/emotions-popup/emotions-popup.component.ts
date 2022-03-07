import {Component, EventEmitter, Input, Output} from "@angular/core";
import {emotionsArray} from "./emotions";

@Component({
  selector: 'emotions-popup',
  templateUrl: './emotions-popup.component.html',
  styleUrls: ['./emotions-popup.component.less']
})
export class EmotionsPopupComponent {

  @Input() public isVisible: boolean = false;
  @Output() closePopup = new EventEmitter<boolean>();
  @Output() sendingEmotions = new EventEmitter<Array<string>>();

  public emotionsList: Array<any> = emotionsArray;
  public selectedEmotions: Array<string> = new Array<string>();

  constructor() {
  }

  ngOnInit():void {

  }

  onClose():void {
    this.isVisible = false;
    this.closePopup.emit(this.isVisible);
  }

  onSelectEmotion(event: Event, emotion: string){
    if (!this.selectedEmotions.includes(emotion)) {
      this.selectedEmotions.push(emotion);
    }
    else {
      this.selectedEmotions = this.selectedEmotions.filter((element) => element !== emotion);
    }
  }

  onSave():void {
    this.isVisible = false;
    this.sendingEmotions.emit((this.selectedEmotions));
    this.closePopup.emit(this.isVisible);
    console.log(this.selectedEmotions)
  }
}
