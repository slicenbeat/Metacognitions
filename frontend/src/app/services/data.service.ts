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
    return this.httpClient.post<any>(HostAddress + '/note', {
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
}
