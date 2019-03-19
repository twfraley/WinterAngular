import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.css']
})
export class CharacterEditComponent implements OnInit {

  character: Character;

  editCharacterForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _characterService: CharacterService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._characterService.getCharacterById(p.get('id')).subscribe((singleCharacter: Character) => {
        this.character = singleCharacter;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }


  createForm() {
    this.editCharacterForm = this._form.group({
      CharacterId: new FormControl(this.character.CharacterId),
      CharacterName: new FormControl(this.character.CharacterName),
      House: new FormControl(this.character.House),
      ImageLink: new FormControl(this.character.ImageLink)
    });
  }

  onSubmit(form) {
    const updateCharacter: Character = {
      CharacterId: form.value.CharacterId,
      CharacterName: form.value.CharacterName,
      House: form.value.House,
      ImageLink: form.value.ImageLink
    };
    this._characterService.updateCharacter(updateCharacter).subscribe(d => {
      this._router.navigate(['/characters']);
    });
  }
}
