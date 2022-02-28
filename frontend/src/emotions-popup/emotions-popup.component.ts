import {Component} from "@angular/core";

@Component({
  selector: 'emotions-popup',
  templateUrl: './emotions-popup.component.html',
  styleUrls: ['./emotions-popup.component.less']
})
export class EmotionsPopupComponent {

  public emotionList = [
    {
      groupName: 'Радость',
      emotions: ["Счастье","Счастье","Счастье","Счастье"]
    },
    {
      groupName: 'Грусть',
      emotions: ["Счастье","Счастье","Счастье","Счастье"]
    },
    {
      groupName: 'Гнев',
      emotions: ["Счастье","Счастье","Счастье","Счастье"]
    },
    {
      groupName: 'Гнев',
      emotions: ["Счастье","Счастье","Счастье","Счастье"]
    },
    {
      groupName: 'Гнев',
      emotions: ["Счастье","Счастье","Счастье","Счастье"]
    },
    {
      groupName: 'Гнев',
      emotions: ["Счастье","Счастье","Счастье","Счастье"]
    },
    {
      groupName: 'Гнев',
      emotions: ["Счастье","Счастье","Счастье","Счастье"]
    },
    {
      groupName: 'Гнев',
      emotions: ["Счастье","Счастье","Счастье","Счастье"]
    },
    {
      groupName: 'Гнев',
      emotions: ["Счастье","Счастье","Счастье","Счастье"]
    },
  ]
  constructor() {
  }

  ngOnInit():void {

  }

  onClose():void {

  }

  onSelectEmotion(event: Event, emotion: string){
    console.log(event)
    console.log(emotion)
  }

  onSave():void {

  }
}
