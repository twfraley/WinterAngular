import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavComponent } from './components/nav/nav.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
