import {Component, Input} from "@angular/core";

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less']
})
export class RecordComponent {
  @Input() date: string = '22.02.2022';
}
