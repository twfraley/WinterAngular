import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PointValueCreate } from '../models/PointValueCreate';
import { PointValueEdit } from '../models/PointValueEdit';

const ApiUrl = 'https://westerosfantasyleague.azurewebsites.net/api';

@Injectable()

export class CharacterService {
    constructor(private _http: HttpClient) { }

    getPointValues() {
        return this._http.get(`${ApiUrl}/PointValues/All`, { headers: this.getHeaders() });
    }

    getPointValueById(id: string, pointValueId: number) {
        return this._http.get(`${ApiUrl}/PointValues/Single/${id}?pointValueId=${pointValueId}`, { headers: this.getHeaders() });
    }

    createPointValue(pointValue: PointValueCreate) {
        return this._http.post(`${ApiUrl}/Values`, pointValue, {headers: this.getHeaders() });
    }

    updatePointValues(pointValue: PointValueEdit) {
        return this._http.put(`${ApiUrl}Values`, pointValue, {headers: this.getHeaders() });
    }

    deletePointValue(id: number) {
        return this._http.delete(`${ApiUrl}/Values/${id}`, { headers: this.getHeaders() });
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}