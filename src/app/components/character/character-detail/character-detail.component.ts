import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/Character';
import { CharacterService } from '../../../services/character.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: Character;

  constructor(private _activatedRoute: ActivatedRoute, private _characterService: CharacterService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._characterService.getCharacterById(routeData.get('id')).subscribe((singleCharacter: Character) => {
        this.character = singleCharacter;
      });
    });
  }

}
