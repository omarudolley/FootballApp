import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//HttpClientModule
import { HttpClientModule } from '@angular/common/http';

//Router Model
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { MatchesComponent } from './matches/matches.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { PaginateComponent } from './matches/paginate/paginate.component';
import { TodayPipe } from './shared/today.pipe';
import { TimeToGoPipe } from './shared/time-to-go.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CompetitionsComponent,
    MatchesComponent,
    MatchDetailComponent,
    PaginateComponent,
    TodayPipe,
    TimeToGoPipe,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
