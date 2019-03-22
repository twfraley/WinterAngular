import { Component, OnInit } from '@angular/core';
import { PointValue } from 'src/app/models/PointValue';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { PointValueService } from 'src/app/services/pointValue.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pointvalue-edit',
  templateUrl: './pointvalue-edit.component.html',
  styleUrls: ['./pointvalue-edit.component.css']
})
export class PointValueEditComponent implements OnInit {

  pointValue: PointValue;

  editPointValueForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _pointValueService: PointValueService,
              private _ar: ActivatedRoute,
              private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._pointValueService.getPointValueById(p.get('id')).subscribe((singlePointValue: PointValue) => {
        this.pointValue = singlePointValue;
        this.createForm();
      });
    });
  }

  ngOnInit() {
    
  }


  createForm() {
    this.editPointValueForm = this._form.group({
      PointValueId: new FormControl(this.pointValue.PointValueId),
      CharacterId: new FormControl(this.pointValue.CharacterId),
      SurvivedEpisode: new FormControl(this.pointValue.SurvivedEpisode),
      EpisodeAppearance: new FormControl(this.pointValue.EpisodeAppearance),
      GetKill: new FormControl(this.pointValue.GetKill),
      Death: new FormControl(this.pointValue.Death),
      BigKill: new FormControl(this.pointValue.BigKill)
    });
  }

  onSubmit(form) {
    const updatePointValue: PointValue = {
      PointValueId: form.value.PointValueId,
      CharacterId: form.value.CharacterId,
      SurvivedEpisode: form.value.SurvivedEpisode,
      EpisodeAppearance: form.value.EpisodeAppearance,
      GetKill: form.value.GetKill,
      Death: form.value.Death,
      BigKill: form.value.BigKill
    };
    
    this._pointValueService.updatePointValues(updatePointValue).subscribe(d => {
      this._router.navigate(['/pointvalues']);
    });
  }
}