import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../../services/character.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-create',
  templateUrl: './character-create.component.html',
  styleUrls: ['./character-create.component.css']
})
export class CharacterCreateComponent implements OnInit {

  characterForm: FormGroup;

  constructor(private _characterService: CharacterService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.characterForm = this._form.group({
      CharacterName: new FormControl,
      House: new FormControl,
      ImageLink: new FormControl
    });
  }

  onSubmit() {
    this._characterService.createCharacter(this.characterForm.value).subscribe(data => {
      this._router.navigate(['/characters']);
    });
  }
}
