import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { TeamCharacterCreate } from 'src/app/models/TeamCharacterCreate';
import { TeamCharacterService } from 'src/app/services/teamCharacter.service';
import { TeamDetail } from 'src/app/models/TeamDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})

export class AddCharactersToTeamComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _teamCharacterService: TeamCharacterService, private _teamService: TeamService, private _characterService: CharacterService) { }

  _team: TeamDetail;
  _notTeam: TeamDetail;
  _charactersNotOnTeam: Character[];

  ngOnInit() {
    this.fetchData();
  }

  addCharacter(character: Character) {
    let teamCharacter: TeamCharacterCreate = {
      CharacterId: character.CharacterId,
      TeamId: this._team.TeamId
    }

    this._teamCharacterService.createTeamCharacter(teamCharacter).subscribe(() => { this.fetchData() })
  }

  removeFromTeam(character:Character) {
    this._teamCharacterService.deleteTeamCharacter(character.CharacterId, this._team.TeamId).subscribe(() => {this.fetchData() })
  }

  fetchData() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._teamService.getTeam(routeData.get('id')).subscribe(
        (singleTeam: TeamDetail) => this._team = singleTeam);
    });
    
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._teamService.getAllButTeam(routeData.get('id')).subscribe(
        (characters: Character[]) => this._charactersNotOnTeam = characters);
    });
  }

}
