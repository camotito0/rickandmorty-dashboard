import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickandmortyApiService } from '../../services/rickandmorty-api.service';
import { CharacterDetail } from '../../models/characterDetail';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent {
  id: number = 0
  character!: CharacterDetail

  constructor(
    private route: ActivatedRoute,
    public apiService: RickandmortyApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    this.apiService.getCharacterById(this.id).subscribe((resp: CharacterDetail) => {
        this.character = resp
        console.log(this.character)
    })
  }
}
