import { Component } from '@angular/core';
import { RickandmortyApiService } from 'src/app/services/rickandmorty-api.service';
import { Character, Result } from '../../models/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  characters: Result[] = [];
  options: string[] = []

  constructor( public apiService:RickandmortyApiService) {}

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((resp:Character) => {
      this.characters = resp.results
    })
  }

}
