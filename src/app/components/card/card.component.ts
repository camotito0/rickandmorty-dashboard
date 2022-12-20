import { Component, Input } from '@angular/core';
import { Result } from '../../models/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() character: any

  constructor() {}

}
