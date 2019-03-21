import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { TeamCharacterCreate } from 'src/app/models/TeamCharacterCreate';
import { TeamCharacterService } from 'src/app/services/teamCharacter.service';
import { TeamDetail } from 'src/app/models/TeamDetail';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})

export class AddCharactersToTeamComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _teamCharacterService: TeamCharacterService, private _teamService: TeamService, private _characterService: CharacterService) { }

  team: TeamDetail;
  characters: Character[];
  charactersOnTeam: Character[];

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._teamService.getTeam(routeData.get('id')).subscribe(
        (singleTeam: TeamDetail) => this.team = singleTeam
      );
    });

    this._characterService.getCharacters().subscribe(
      (characters: Character[]) =>
        this.characters = characters
    );

  }

  onSubmit(character: Character) {
    let teamCharacter: TeamCharacterCreate = {
      CharacterId: character.CharacterId,
      TeamId: this.team.TeamId
    }

    this._teamCharacterService.createTeamCharacter(teamCharacter);
    console.log(teamCharacter);
  }
}
