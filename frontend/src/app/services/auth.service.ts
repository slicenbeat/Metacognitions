import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserModel} from "../models/user.model";
import {HostAddress} from "../constants";

@Injectable()
export class AuthService {
  private token!: string;
  private jwtHelper = new JwtHelperService();
  public userName!: string;

  constructor(private httpClient: HttpClient) {
    this.token = localStorage.getItem('auth-token') || '';
  }

  public setUserName(name: string): void {
    this.userName = name;
  }

  public getUserName(): string {
    return this.userName;
  }

  public register(user: UserModel): Observable<boolean> {
    return this.httpClient.post<boolean>(HostAddress + '/register', {
      username: user.name,
      password: user.password
    });
  }

  public login(user: UserModel): Observable<{ jwtToken: string }> {
    return this.httpClient.post<{ jwtToken: string }>(HostAddress + '/auth', {
      username: user.name,
      password: user.password
    })
      .pipe(
        tap(
          ({jwtToken}) => {
            localStorage.setItem('auth-token', jwtToken);
            this.setToken(jwtToken);
            this.userName = this.getDecodedName();
          }
        )
      );
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }

  public getDecodedName() {
    return this.jwtHelper.decodeToken(this.token).sub;
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('auth-token');
  }
}
