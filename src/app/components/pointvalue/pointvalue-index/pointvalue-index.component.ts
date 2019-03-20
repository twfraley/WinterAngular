import { Component, OnInit } from '@angular/core';
import { PointValueService } from 'src/app/services/pointValue.service';
import { PointValue } from 'src/app/models/PointValue';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-pointvalue-index',
  templateUrl: './pointvalue-index.component.html',
  styleUrls: ['./pointvalue-index.component.css']
})
export class PointValueIndexComponent implements OnInit {

  pointValueColumnNames = ['CharacterId', 'SurvivedEpisode', 'EpisodeAppearance', 'GetKill', 'Death', 'BigKill', 'buttons'];

  constructor(private _pointValueService: PointValueService) { }

  dataSource: MatTableDataSource<PointValue>

  ngOnInit() {
    this._pointValueService.getPointValues().subscribe((pointValues: PointValue[]) => {
      this.dataSource = new MatTableDataSource<PointValue>(pointValues);
    });
  }

}
