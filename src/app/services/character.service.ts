import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = '';

@Injectable()

export class CharacterService {
    constructor(private _http: HttpClient) { }

    getCharacters() {
        return this._http.get(`${ApiUrl}/Characters`, { headers: this.getHeaders() });
    }

    private getHeaders() {
        return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}