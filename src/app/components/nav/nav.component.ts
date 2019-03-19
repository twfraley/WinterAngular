import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  appTitle: string = 'Winter is Coming'
  constructor() { }

  ngOnInit() {
  }
  
  authService: AuthService;

  isLoggedIn() {
    return localStorage.getItem('isLoggedIn')
  }
}
