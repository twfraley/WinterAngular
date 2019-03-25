import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

// tslint:disable-next-line: variable-name
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._router.navigate(['']);
  }

}
