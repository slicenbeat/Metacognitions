import {Component, Input} from "@angular/core";

@Component({
  selector: 'emotion',
  templateUrl: './emotion.component.html',
  styleUrls: ['./emotion.component.less']
})
export class EmotionComponent {
  @Input() emotionName: string = '';
}
