import { Component, OnInit } from '@angular/core';
import { PointValueService } from '../../../services/pointValue.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/Character';
import { CharacterService } from 'src/app/services/character.service';

export interface Characters {
  id: number;
  name: string;
}

@Component({
  selector: 'app-pointvalue-create',
  templateUrl: './pointvalue-create.component.html',
  styleUrls: ['./pointvalue-create.component.css']
})

export class PointValueCreateComponent implements OnInit {

  characterSelect: Character[];
  pointValueForm: FormGroup;

  constructor(private _pointValueService: PointValueService, private _characterService: CharacterService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
    this._characterService.getCharacters().subscribe((characterList: Character[]) => this.characterSelect = characterList);
  }

  createForm() {
    this.pointValueForm = this._form.group({
      CharacterId: new FormControl,
      SurvivedEpisode: new FormControl,
      EpisodeAppearance: new FormControl,
      GetKill: new FormControl,
      Death: new FormControl,
      BigKill: new FormControl
    });
  }


  onSubmit() {
    this._pointValueService.createPointValue(this.pointValueForm.value).subscribe(data => {
      this._router.navigate(['/pointvalues']);
    });
  }
}
