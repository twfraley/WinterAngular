import { Component, OnInit, ViewChild } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { TeamDetail } from 'src/app/models/TeamDetail';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-team-index',
  templateUrl: './team-index.component.html',
  styleUrls: ['./team-index.component.css']
})
export class TeamIndexComponent implements OnInit {

  teamColumnNames = ['TeamName', 'TotalPoints', 'Characters'];


  constructor(private _teamService: TeamService) { }
  
  dataSource: MatTableDataSource<TeamDetail>

  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit() {
    this._teamService.getTeams().subscribe((teams: TeamDetail[]) => {
      this.dataSource = new MatTableDataSource<TeamDetail>(teams);
      this.dataSource.sort = this.sort;
    });
  }
  
  loggedInCheck() {
    return localStorage.getItem('isLoggedIn') === "true";
  }

}
