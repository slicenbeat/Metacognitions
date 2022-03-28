import {Component, EventEmitter, Input, Output} from "@angular/core";
import {RecordModel} from "../app/models/record.model";
import {DataService} from "../app/services/data.service";

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less']
})
export class RecordComponent {
  @Input()
  public record!: RecordModel;
  public isEditMode: boolean = false;

  @Output()
  public deleteFlag: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dataService: DataService) {
  }

  onEdit():void {
    this.isEditMode = true;
  }

  onDelete():void {
    this.dataService.deleteRecord(this.record).subscribe(() => this.deleteFlag.emit());
  }

  onSave(event: boolean) {
    this.isEditMode = event;
  }

  onCloseEditMode(event: any) {
    this.isEditMode = false;
  }

}
