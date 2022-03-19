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
  public isEditMode: boolean = false;

  onEdit():void {
    this.isEditMode = true;
  }

  onDelete():void {

  }

  onSave(event: boolean) {
    this.isEditMode = event;
  }

  onCloseEditMode(event: any) {
    this.isEditMode = false;
  }

}
