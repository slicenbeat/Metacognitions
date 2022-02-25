import {Component} from '@angular/core';

@Component({
  selector: 'records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.less']
})
export class RecordsPageComponent {
  public isCreateRecordComponentVisible: boolean = false;

  constructor() {
  }

  public _showCreateRecordComponent(): void {
    this.isCreateRecordComponentVisible = true;
  }
}
