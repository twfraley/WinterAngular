import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';
import { CharacterIndexComponent } from './components/character/character-index/character-index.component';
import { CharacterCreateComponent } from './components/character/character-create/character-create.component';
import { CharacterDetailComponent } from './components/character/character-detail/character-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'nav', component: NavComponent },
  { path: 'contact', component: ContactComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home'},
  { path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: RegistrationComponent }
    ]
  },
  { path: 'characters', children: [
    { path: '', component: CharacterIndexComponent },
    { path: 'create', component: CharacterCreateComponent },
    { path: 'detail/:id', component: CharacterDetailComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
