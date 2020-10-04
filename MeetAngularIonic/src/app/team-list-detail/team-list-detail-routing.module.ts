import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListDetailPage } from './team-list-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TeamListDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamListDetailPageRoutingModule {}
