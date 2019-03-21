import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { UserService } from './shared/user.service';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TeamService } from 'src/app/services/team.service';
import { CharacterService } from './services/character.service';
import { CharacterIndexComponent } from './components/character/character-index/character-index.component';
import { CharacterCreateComponent } from './components/character/character-create/character-create.component';
import { CharacterDetailComponent } from './components/character/character-detail/character-detail.component';
import { CharacterEditComponent } from './components/character/character-edit/character-edit.component';
import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { CharacterDeleteComponent } from './components/character/character-delete/character-delete.component';
import { TeamIndexComponent } from './components/team/team-index/team-index.component';
import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamEditComponent } from './components/team/team-edit/team-edit.component';
import { TeamDetailComponent } from './components/team/team-detail/team-detail.component';
import { AddCharactersToTeamComponent } from './components/team/add-characters-to-team/add-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    CharacterIndexComponent,
    CharacterCreateComponent,
    CharacterDetailComponent,
    CharacterEditComponent,
    LoginComponent,
    LogoutComponent,
    CharacterDeleteComponent,
    TeamIndexComponent,
    TeamCreateComponent,
    TeamEditComponent,
    TeamDetailComponent,
    AddCharactersToTeamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    UserService,
    CharacterService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
