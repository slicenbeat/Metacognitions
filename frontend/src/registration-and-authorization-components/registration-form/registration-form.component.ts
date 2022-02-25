import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.less']
})
export class RegistrationFormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this._createForm();
  }

  private _createForm() {
    this.formGroup = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      repeatPassword: ['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

}
