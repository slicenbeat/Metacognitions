import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecordsPageComponent} from "../records-page-component/records-page.component";
import {StartPageComponent} from "../start-page/start-page.component";
import {AuthGuard} from "./services/auth-guard";

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'registration', component: StartPageComponent},
  {
    path: 'records',
    component: RecordsPageComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
