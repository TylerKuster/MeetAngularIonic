import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamListDetailPageRoutingModule } from './team-list-detail-routing.module';

import { TeamListDetailPage } from './team-list-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamListDetailPageRoutingModule
  ],
  declarations: [TeamListDetailPage]
})
export class TeamListDetailPageModule {}
