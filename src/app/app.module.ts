import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSortModule,
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
import { TeamCharacterService} from './services/teamCharacter.service';
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
import { PointValueService } from './services/pointValue.service';
import { PointValueComponent } from './components/pointvalue/pointvalue.component';
import { PointValueIndexComponent } from './components/pointvalue/pointvalue-index/pointvalue-index.component';
import { PointValueCreateComponent } from './components/pointvalue/pointvalue-create/pointvalue-create.component';
import { PointValueDetailComponent } from './components/pointvalue/pointvalue-detail/pointvalue-detail.component';
import { PointValueEditComponent } from './components/pointvalue/pointvalue-edit/pointvalue-edit.component';
import { PointValueDeleteComponent } from './components/pointvalue/pointvalue-delete/pointvalue-delete.component';
import { AddCharactersToTeamComponent } from './components/team/add-characters-to-team/add-characters.component';
import { TeamDeleteComponent } from './components/team/team-delete/team-delete.component';

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
    PointValueComponent,
    PointValueIndexComponent,
    PointValueCreateComponent,
    PointValueDetailComponent,
    PointValueEditComponent,
    PointValueDeleteComponent,
    AddCharactersToTeamComponent,
    TeamDeleteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSortModule
  ],
  providers: [
    UserService,
    CharacterService,
    TeamService,
    PointValueService,
    TeamCharacterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
