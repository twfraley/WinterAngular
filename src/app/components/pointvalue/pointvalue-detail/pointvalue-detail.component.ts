import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PointValue } from 'src/app/models/PointValue';
import { PointValueService } from '../../../services/pointValue.service';

@Component({
  selector: 'app-pointvalue-detail',
  templateUrl: './pointvalue-detail.component.html',
  styleUrls: ['./pointvalue-detail.component.css']
})
export class PointValueDetailComponent implements OnInit {

  pointValue: PointValue;

  constructor(private _activatedRoute: ActivatedRoute, private _pointValueService: PointValueService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._pointValueService.getPointValueById(routeData.get('id')).subscribe((singlePointValue: PointValue) => {
        this.pointValue = singlePointValue;
      });
    });
  }

}
