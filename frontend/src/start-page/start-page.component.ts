import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.less']
})
export class StartPageComponent {

  constructor(public router: Router) {
  }

}
