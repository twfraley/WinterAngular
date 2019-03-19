import { Component, OnInit } from '@angular/core';

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

  isLoggedIn() {
    return localStorage.getItem('isLoggedIn')
  }
}
