import {Component, Input, OnInit} from '@angular/core';
import {RecordModel} from "../app/models/record.model";
import {Router} from "@angular/router";
import {DataService} from "../app/services/data.service";
import {typesPointNotes} from "../app/constants";
import {OkDialogComponent} from "../app/ok-dialog.component/ok-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.less']
})
export class RecordsPageComponent implements OnInit{
  public isCreateRecordComponentVisible: boolean = false;
  public currentPageNumber!: number;
  public maxDate!: Date;
  public startDate!: string;
  public endDate!: string;

  public pagesQuantity!: number;
  public pageNumber: number = 1;

  public records: RecordModel[] = [];

  constructor(private router: Router,
              private dataService: DataService,
              private dialog: MatDialog) {
    this.maxDate = new Date();
  }

  public ngOnInit(): void {
    this.getRecords(0, 4);
  }

  private getRecords(page: number, size: number): void {
    this.records = [];
    this.dataService.getRecords(page, size).subscribe(
      (data) => {
        this.pageNumber = ++data.data.numPage;
        this.pagesQuantity = data.data.countPages;
        this.prepareRecords(data.data.notes);
      }
    );
  }

  public _hideCreateRecordCard(): void {
    setTimeout(() => {
      this.isCreateRecordComponentVisible = false;
    }, 10);
  }

  private prepareRecords(records: any[]): void {
    records.forEach((record) => {
      let newRecord: RecordModel = {
        userName: '',
        thought: '',
        situation: '',
        date: '',
        emotions: [],
        id: 0,
        situationId: 0,
        situationNoteId: 0,
        thoughtId: 0,
        thoughtNoteId: 0
      };

      newRecord.userName = record.username;
      newRecord.date = this.formatDate(record.date);
      newRecord.emotions = record.emotionNotes;
      newRecord.id = record.id;

      record.pointNotes.forEach((pointNote: {content: string; typePointNote: string, id: number, noteId: number}) => {
        if (pointNote.typePointNote.toLowerCase() === typesPointNotes.situationCode) {
          newRecord.situation = pointNote.content;
          newRecord.situationNoteId = pointNote.noteId;
          newRecord.situationId = pointNote.id
        } else {
          newRecord.thought = pointNote.content;
          newRecord.thoughtNoteId = pointNote.noteId;
          newRecord.thoughtId = pointNote.id
        }
      });

      this.records.push(newRecord);
    });
  }

  public _onRecordSaved(): void {
    this.isCreateRecordComponentVisible = false;
    this.showDialog("Запись успешно создана", "Вы можете найти созданную запись на главной странице приложения");
    this.getRecords(0, 4);
  }

  public onRecordDelete(event: any): void {
    this.showDialog("Запись успешно удалена", "")
    this.getRecords(0, 4);
  }

  public _onNextPageClick(): void {
    this.isCreateRecordComponentVisible = false;
    this.getRecords(this.pageNumber, 4);
  }

  public _onPreviousPageClick(): void {
    this.isCreateRecordComponentVisible = false;
    this.getRecords(this.pageNumber - 2, 4);
  }

  public _showCreateRecordComponent(): void {
    this.isCreateRecordComponentVisible = true;
  }

  public _logOut(): void {
    localStorage.removeItem('auth-token');
    this.router.navigateByUrl('/');
  }

  private showDialog(label: string, text: string): void {
    this.dialog.open(OkDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        label: label,
        text: text
      }
    });
  }

  private formatDate(date: string): string {
    let year = "." + date[0] + date[1] + date[2] + date[3]
    let str1 = date.replace(/-/g, '.').replace(/\d\d\d\d./, '');
    return str1 + year
  }

  private dateToStringFormat(date: Date): string {
    let month: string = (date.getMonth() + 1).toString();
    let day: string = date.getDate().toString();

    if (month.length == 1) {
      month = '0' + month;
    }
    if (day.length == 1) {
      day = '0' + day;
    }

    return date.getFullYear().toString() + '-' + month + '-' + day;
  }

  _onStartDateChange(event: any):void {
    if (event.value) {
      this.startDate = this.dateToStringFormat(event.value);
    }
  }

  _onEndDateChange(event: any):void {
    if (event.value) {
      this.endDate = this.dateToStringFormat(event.value);
      this.records = [];
      this.dataService.getRecordsByDates(this.startDate, this.endDate, 0,4).subscribe(
        (data) => {
          if (data.success) {
            this.pageNumber = ++data.data.numPage;
            this.pagesQuantity = data.data.countPages;
            this.prepareRecords(data.data.notes);
          }
        }
      );
    }
  }
}
