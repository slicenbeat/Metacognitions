import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {RecordModel} from "../models/record.model";
import {HostAddress} from "../constants";
import {typesPointNotes} from "../constants";
import {Injectable} from "@angular/core";

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient,
              private authService: AuthService) {

  }

  public saveRecord(record: RecordModel): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.httpClient.post<any>(`${HostAddress}/note`, {
        username: record.userName,
        date: record.date,
        pointNotes: [
          {
            content: record.situation,
            typePointNote: typesPointNotes.situationCode
          },
          {
            content: record.thought,
            typePointNote: typesPointNotes.thoughtCode
          }
        ],
        emotionNotes: record.emotions
      },
      {
        headers: headers
      });

  }

  public getRecords(page: number, size: number): Observable<any> {
    const userName: string = this.authService.getDecodedName();
    const headers = new HttpHeaders();
    headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.httpClient.get<any>(`${HostAddress}/note/${userName}/notes?page=${page}&size=${size}&sort=dateOfCreate,desc`);
  }

  public editRecord(record: RecordModel): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.httpClient.put<any>(`${HostAddress}/note`, {
        id: record.id,
        username: record.userName,
        date: record.date,
        pointNotes: [
          {
            noteId: record.situationNoteId,
            id: record.situationId,
            content: record.situation,
            typePointNote: typesPointNotes.situationCode
          },
          {
            noteId: record.thoughtNoteId,
            id: record.thoughtId,
            content: record.thought,
            typePointNote: typesPointNotes.thoughtCode
          }
        ],
        emotionNotes: record.emotions
      },
      {
        headers: headers
      });
  }

  public deleteRecord(record: RecordModel): Observable<any> {
    return this.httpClient.delete<any>(`${HostAddress}/note/${record.id}`);
  }

  public getRecordsByDates(dateStart: string, dateEnd: string, page: number, size: number): Observable<any> {
    const userName: string = this.authService.getDecodedName();
    return this.httpClient.get<any>(`${HostAddress}/note/${userName}/notes/filter?start=${dateStart}&end=${dateEnd}&page=${page}&size=${size}&sort=dateOfCreate,desc`)
  }
}
