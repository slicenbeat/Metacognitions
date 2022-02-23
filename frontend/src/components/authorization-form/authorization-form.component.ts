import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.less']
})
export class AuthorizationFormComponent implements OnInit {
  private login: string = '';
  private password: string = '';
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this._createForm();
  }

  private _createForm() {
    this.formGroup = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit() {
  }

  onClick() {
    if (!this.formGroup.valid) {
      alert('Форма невалидна')
    }

  }
}

