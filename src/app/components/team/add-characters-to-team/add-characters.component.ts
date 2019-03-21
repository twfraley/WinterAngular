import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { TeamCharacterCreate } from 'src/app/models/TeamCharacterCreate';
import { TeamCharacterService } from 'src/app/services/teamCharacter.service';
import { TeamDetail } from 'src/app/models/TeamDetail';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersToTeamComponent implements OnInit {

  team: TeamDetail;
  characters: Character[];
  charactersToAdd: TeamCharacterCreate[];
  
  constructor(private _teamCharacterService: TeamCharacterService) { }

  ngOnInit() {
  }

  select(character: Character){
    let characterItem: TeamCharacterCreate = {
      CharacterId: character.CharacterId,
      TeamId: this.team.TeamId
    }
    this.charactersToAdd.push(characterItem);
  }

  onSubmit(){
    this.charactersToAdd.forEach(element => {
      this._teamCharacterService.createTeamCharacter(element);
    });
  }
}
