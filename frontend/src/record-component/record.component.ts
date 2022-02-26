import {Component, Input} from "@angular/core";

@Component({
  selector: 'record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less']
})
export class RecordComponent {
  @Input() date: string = '22.02.2022';

  emotions: any = [
    {name: 'Радость'},
    {name: 'Восторг'},
    {name: 'Шок'},
    {name: 'Разочарование'},
    {name: 'Грусть'},
    {name: 'Печаль'},
    {name: 'Желание умереть'},
    {name: 'Муки совести'},
    {name: 'Тцос'}
  ]

  onEdit():void {
    console.log('редактируй')
  }

  onDelete():void {
    console.log('удаляй')
  }

}
