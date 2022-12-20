import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, ICharacter } from '../models/character';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyApiService {

  apiURL = 'https://rickandmortyapi.com/api/character'

  constructor( public http: HttpClient ) { }
/*
  getCharacters() {
    return new Character(this.http.get(this.apiURL))
  } */

  getCharacters():Observable<Character> {
    return this.http.get(this.apiURL).pipe(map((character: any) => {
      return new Character(character);
    }));
  }

}
