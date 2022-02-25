import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.less']
})
export class AuthorizationFormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router) {
    this._createForm();
  }

  private _createForm() {
    this.formGroup = this.formBuilder.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

  onClick() {
    if (!this.formGroup.valid) {
      console.log('Форма невалидна')
    }
  }
}

