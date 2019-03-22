import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  teamForm: FormGroup;

  constructor(private _teamService: TeamService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.teamForm = this._form.group({
      TeamName: new FormControl
    })
  }

  onSubmit() {
    this._teamService.createTeam(this.teamForm.value).subscribe( data => {
      this._router.navigate(['/team']);
    })
  }
}
