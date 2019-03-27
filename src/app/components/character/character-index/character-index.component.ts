import { Component, OnInit, ViewChild } from '@angular/core';
import { CharacterService } from '../../../services/character.service';
import { Character } from '../../../models/Character';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-character-index',
  templateUrl: './character-index.component.html',
  styleUrls: ['./character-index.component.css']
})
export class CharacterIndexComponent implements OnInit {

  characterColumnNames: string[];

  constructor(private _characterService: CharacterService) { }

  dataSource: MatTableDataSource<Character>;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this._characterService.getCharacters().subscribe((characters: Character[]) => {
      this.dataSource = new MatTableDataSource<Character>(characters);
      this.dataSource.sort = this.sort;
    });
    if (this.authCheck()){
      this.characterColumnNames = ['ImageLink', 'CharacterName', 'House', 'buttons'];
    };
    if (!this.authCheck()){
      this.characterColumnNames = ['ImageLink', 'CharacterName', 'House'];
    };

  }

  authCheck(){
    return (localStorage.getItem('role') === 'SuperAdmin');
  }

  loggedInCheck() {
    return localStorage.getItem('isLoggedIn') === "true";
  }

}
