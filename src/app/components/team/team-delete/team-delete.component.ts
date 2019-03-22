import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { TeamDetail } from 'src/app/models/TeamDetail';

@Component({
  selector: 'app-team-delete',
  templateUrl: './team-delete.component.html',
  styleUrls: ['./team-delete.component.css']
})
export class TeamDeleteComponent implements OnInit {

  team: TeamDetail;

  constructor(private _activatedRoute: ActivatedRoute, private _teamService: TeamService, private _router: Router) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._teamService.getTeam(routeData.get('id'))
      .subscribe((singleTeam: TeamDetail) => { this.team = singleTeam})
    });
  }

  deleteTeam() {
    console.log(this.team.TeamId);

    this._teamService.deleteTeam(this.team.TeamId).subscribe(() => {
      this._router.navigate(['/team']);
    })
  }

}
