import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FsizeDirective } from './fsize.directive';
import { FormComponent } from './form/form.component';
import { FootballDataService } from './football-data.service';
import { AuthService } from './auth.service';
import { PlayersComponent } from './players/players.component';

const appRoutes:Routes = [
  {
    path: 'login',
    component: FormComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FsizeDirective,
    FormComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FootballDataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
