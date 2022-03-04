import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../app/services/auth.service";

@Component({
  selector: 'authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.less']
})
export class AuthorizationFormComponent {
  formGroup!: FormGroup;
  public authErrorVisible: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
    this._createForm();
  }

  private _createForm() {
    this.formGroup = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public _onClick(): void {
    this.authService.login({
      name: this.formGroup.value.login,
      password: this.formGroup.value.password
    }).subscribe(
      () => {
        this.authErrorVisible = false;
        if (localStorage.getItem('auth-token')) {
          this.router.navigateByUrl('/records');
        }
      },
      error => {
        this.authErrorVisible = true;
      }
    )
  }
}

