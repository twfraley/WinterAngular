import { Component, OnInit } from '@angular/core';
import { PointValueService } from '../../../services/pointValue.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-point-value-create',
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

  onSubmit() {
    this._pointValueService.createPointValue(this.pointValueForm.value).subscribe(data => {
      this._router.navigate(['/pointvalues']);
    });
  }
}
