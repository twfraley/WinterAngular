import { Component, OnInit } from '@angular/core';
import { TeamDetail } from 'src/app/models/TeamDetail';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team: TeamDetail;
  characters: Character[];

  constructor(private _activatedRoute: ActivatedRoute, private _teamService: TeamService, private _characterService: CharacterService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._teamService.getTeam(routeData.get('id')).subscribe(
        (singleTeam: TeamDetail) => {this.team = singleTeam})
    });
    
    this._characterService.getCharacters().subscribe((characterList: Character[]) => this.characters = characterList);
  }

}
