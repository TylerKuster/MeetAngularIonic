import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'team-list',
    loadChildren: () => import('./team-list/team-list.module').then( m => m.TeamListPageModule)
  },
  {
    path: '',
    redirectTo: 'team-list',
    pathMatch: 'full'
  },
  {
    path: 'team-list-detail',
    loadChildren: () => import('./team-list-detail/team-list-detail.module').then( m => m.TeamListDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
