import { Component, OnInit } from '@angular/core';
import { PointValueService } from '../../../services/pointValue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PointValue } from 'src/app/models/PointValue';
import { CharacterIndexComponent } from '../../character/character-index/character-index.component';

@Component({
  selector: 'app-pointvalue-delete',
  templateUrl: './pointvalue-delete.component.html',
  styleUrls: ['./pointvalue-delete.component.css']
})
export class PointValueDeleteComponent implements OnInit {

  pointValue: PointValue;

  constructor(private _pointValueService: PointValueService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._pointValueService.getPointValueById(p.get('id')).subscribe((singlePointValue: PointValue) => {
        this.pointValue = singlePointValue;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._pointValueService.deletePointValue(this.pointValue.PointValueId).subscribe(() => {
      this._router.navigate(['/pointvalues']);
    });
  }

}

