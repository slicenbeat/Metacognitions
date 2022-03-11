import {Component, OnInit, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../app/services/auth.service";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.less']
})
export class RegistrationFormComponent {
  formGroup!: FormGroup;

  @ViewChild("regButton")
  public regButton!: MatButton;

  public errorMessage: string = '';
  public authErrorMessageVisible: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    this._createForm();
  }

  private _createForm() {
    this.formGroup = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    })
  }

  public _isPasswordsTheSame(): boolean {
    if (this.formGroup.value.password != this.formGroup.value.repeatPassword && this.formGroup.get('repeatPassword')?.touched) {
      this.errorMessage = 'Пароли не совпадают';
      return false;
    } else return true;
  }

  public _onSubmitForm(): void {
    this.authService.register({
      name: this.formGroup.value.login,
      password: this.formGroup.value.password
    }).subscribe(
      () => {
        this.formGroup.reset();
        this.errorMessage = '';
        // this.showDialog();
      },
      error => {
        this.showAuthErrorMessage();
      }
    );
  }

  private showAuthErrorMessage(): void {
    this.errorMessage = 'Имя ' + this.formGroup.value.login + ' уже зарегистрировано';
    this.authErrorMessageVisible = true;
  }

}
