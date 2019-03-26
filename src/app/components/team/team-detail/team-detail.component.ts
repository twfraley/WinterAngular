import { Component, OnInit } from '@angular/core';
import { TeamDetail } from 'src/app/models/TeamDetail';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/Character';
import { PointValueService } from 'src/app/services/pointValue.service';
import { PointValue } from 'src/app/models/PointValue';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: TeamDetail;
  characters: Character[];
  characterPoints: number;

  constructor(private _activatedRoute: ActivatedRoute, private _teamService: TeamService, private _pointValueService: PointValueService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._teamService.getTeam(routeData.get('id')).subscribe(
        (singleTeam: TeamDetail) => {this.team = singleTeam})
    });

  }

  ownerCheck() {
    return this.team.UserId === localStorage.getItem('userId');
  }

  getCharacterPoints(characterId: number) {
    return this._pointValueService.getPointValueByCharacterId(characterId).subscribe( (pointValue: PointValue) => {pointValue});
  }
}
