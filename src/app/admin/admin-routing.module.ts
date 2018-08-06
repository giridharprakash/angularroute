import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [{
  path: '',
  component: OverviewComponent
},
  {
    path: 'users',
    component: UserComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
