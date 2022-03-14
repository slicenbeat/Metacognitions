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

  public pagesQuantity!: number;
  public pageNumber: number = 1;

  public records: RecordModel[] = [];

  constructor(private router: Router,
              private dataService: DataService,
              private dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.getRecords(0, 4);
  }

  private getRecords(page: number, size: number): void {
    this.records = [];
    this.dataService.getRecords(page, size).subscribe(
      (data) => {
        this.pageNumber = ++data.numPage;
        this.pagesQuantity = data.countPages;
        this.prepareRecords(data.notes);
      }
    );
  }

  private prepareRecords(records: any[]): void {
    records.forEach((record) => {
      let newRecord: RecordModel = {
        userName: '',
        thought: '',
        situation: '',
        date: '',
        emotions: []
      };

      newRecord.userName = record.username;
      newRecord.date = this.formatDate(record.date);
      newRecord.emotions = record.emotionNotes;

      record.pointNotes.forEach((pointNote: {content: string; typePointNote: string}) => {
        if (pointNote.typePointNote === typesPointNotes.situationCode) {
          newRecord.situation = pointNote.content;
        } else {
          newRecord.thought = pointNote.content;
        }
      });

      this.records.push(newRecord);
    });
  }

  public _onRecordSaved(): void {
    this.isCreateRecordComponentVisible = false;
    this.showDialog();
    this.getRecords(0, 4);
  }

  public _onNextPageClick(): void {
    this.getRecords(this.pageNumber, 4);
  }

  public _onPreviousPageClick(): void {
    this.getRecords(this.pageNumber - 2, 4);
  }

  public _showCreateRecordComponent(): void {
    this.isCreateRecordComponentVisible = true;
  }

  public _logOut(): void {
    localStorage.removeItem('auth-token');
    this.router.navigateByUrl('/');
  }

  private showDialog(): void {
    this.dialog.open(OkDialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        label: "Запись успешно создана",
        text: "Вы можете найти созданную запись на главной странице приложения"
      }
    });
  }

  private formatDate(date: string): string {
    let year = "." + date[0] + date[1] + date[2] + date[3]
    let str1 = date.replace(/-/g, '.').replace(/\d\d\d\d./, '');
    return str1 + year
  }
}
