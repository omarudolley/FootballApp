import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompetitionsComponent} from './competitions/competitions.component'
import {MatchesComponent} from './matches/matches.component'
import {MatchDetailComponent} from './match-detail/match-detail.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component:CompetitionsComponent},
  { path: ':competition-name', component:MatchesComponent},
  { path: ':competition-name/:event-name', component: MatchDetailComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
