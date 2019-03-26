import { Component, OnInit } from '@angular/core';
import { PointValueService } from 'src/app/services/pointValue.service';
import { PointValue } from 'src/app/models/PointValue';
import { MatTableDataSource } from '@angular/material';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-pointvalue-index',
  templateUrl: './pointvalue-index.component.html',
  styleUrls: ['./pointvalue-index.component.css']
})
export class PointValueIndexComponent implements OnInit {

  value: boolean = true;
  character: Character;

  pointValueColumnNames = [];

  constructor(private _pointValueService: PointValueService, private _characterService: CharacterService) { }

  characters: Character[];
  dataSource: MatTableDataSource<PointValue>;

  ngOnInit() {
    this._pointValueService.getPointValues().subscribe((pointValues: PointValue[]) => {
      this.dataSource = new MatTableDataSource<PointValue>(pointValues);
    });

    this._characterService.getCharacters().subscribe((characterList: Character[]) => this.characters = characterList);

    if (this.authCheck()){
      this.pointValueColumnNames = ['CharacterId', 'SurvivedEpisode', 'EpisodeAppearance', 'GetKill', 'Death', 'BigKill', 'buttons'];
    }
    if (!this.authCheck()){
      this.pointValueColumnNames = ['CharacterId', 'SurvivedEpisode', 'EpisodeAppearance', 'GetKill', 'Death', 'BigKill'];
    }
  }

  authCheck() {
    return (localStorage.getItem('role') === 'SuperAdmin');
  }

  loggedInCheck() {
    return localStorage.getItem('isLoggedIn') === "true";
  }

}
