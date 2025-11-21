import { Component, Input } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'pokedex-item',
  imports: [],
  templateUrl: './pokedex-item.html',
  styleUrl: './pokedex-item.scss',
})
export class PokedexItem {
  @Input() pokemon!: Pokemon;
}
