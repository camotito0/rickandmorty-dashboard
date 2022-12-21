import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RickandmortyApiService } from 'src/app/services/rickandmorty-api.service';
import { Character, Result } from '../../models/character';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  characters: Result[] = [];
  filteredCharacters: Result[] = [];
  characterForm!: FormGroup;

  constructor (
    public apiService:RickandmortyApiService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((resp:Character) => {
      this.characters = resp.results;
      this.filteredCharacters = [...this.characters]
    })

    this.createForm();
  }

  private createForm() {
    this.characterForm = this.fb.group({
      characterName: [],
      status: [],
      gender: []
    })
  }
  /* Rick Sanchez */

  searchCharacter() {
    console.log(this.characterForm.value)
    let filterByName =  this.characterForm.value.characterName ? this.characters.filter(character => character.name === this.characterForm.value.characterName) :  this.characters;
    let filterByGender = filterByName.filter(character => character.gender === this.characterForm.value.gender);
    let filterByStatus = filterByGender.filter(character => character.status === this.characterForm.value.status);
    this.filteredCharacters = filterByStatus
  }

  cleanForm() {
    this.characterForm.reset()
  }

}
