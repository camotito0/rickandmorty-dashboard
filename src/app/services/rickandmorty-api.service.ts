import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { CharacterDetail } from '../models/characterDetail';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyApiService {

  apiURLBase = 'https://rickandmortyapi.com/api/'
  character =  `${this.apiURLBase}character`

  constructor( public http: HttpClient ) { }

  getCharacters():Observable<Character> {
    return this.http.get(this.character).pipe(map((character: any) => {
      return new Character(character);
    }));
  }

  getCharacterById(id:number):Observable<CharacterDetail> {
    return this.http.get(`${this.character}/${id}`).pipe(map((characterDetail: any) => {
      return new CharacterDetail(characterDetail);
    }));
  }

}
