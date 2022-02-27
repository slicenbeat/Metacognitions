import {Component, Input} from "@angular/core";
import {RecordModel} from "../app/models/record.model";

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less']
})
export class RecordComponent {
  @Input()
  public record!: RecordModel;

  onEdit():void {
    console.log('редактируй')
  }

  onDelete():void {
    console.log('удаляй')
  }

}
