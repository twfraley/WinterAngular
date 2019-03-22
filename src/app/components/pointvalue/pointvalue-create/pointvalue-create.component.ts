import { Component, OnInit } from '@angular/core';
import { PointValueService } from '../../../services/pointValue.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/Character';

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

  
  pointValueForm: FormGroup;

  constructor(private _pointValueService: PointValueService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
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

  characters: Characters[] = [
    {name: 'Jon Snow', id: 1},
    {name: 'Sansa Stark', id: 2},
    {name: 'Arya Stark', id: 3},
    {name: 'Bran Stark', id: 4},
    {name: 'The Night King', id: 5},
    {name: 'Tyrion Lannister', id: 6},
    {name: 'Daenerys Targaryen', id: 7},
    {name: 'Gendry', id: 8},
    {name: 'Cersei Lannister', id: 9},
    {name: 'Jaime Lannister', id: 10},
    {name: 'Euron Greyjoy', id: 11},
    {name: 'Theon Greyjoy', id: 12},
    {name: 'Bronn', id: 13},
    {name: 'Jorah Mormont', id: 14},
    {name: 'Sandor Clegane (The Hound)', id: 15},
    {name: 'Gregor Clegane (The Mountain)', id: 16},
    {name: 'Brienne of Tarth', id: 17},
    {name: 'Tormund Giantsbane', id: 18},
    {name: 'Beric Dondarrion', id: 19}
  ];


  onSubmit() {
    this._pointValueService.createPointValue(this.pointValueForm.value).subscribe(data => {
      this._router.navigate(['/pointvalues']);
    });
  }
}
