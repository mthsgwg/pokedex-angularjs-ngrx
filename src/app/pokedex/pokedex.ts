import { Component, inject, OnInit } from '@angular/core';
import { Pokemon } from './interfaces/pokemon';
import { PokedexItem } from './pokedex-item/pokedex-item';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { PokedexService } from './pokedex.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Apollo, gql, TypedDocumentNode } from 'apollo-angular';
import { ObservableQuery } from '@apollo/client';

const FIND_ALL_POKEMON: TypedDocumentNode<{ pokemon: Pokemon[] }> = gql`
  query MyQuery {
    pokemon(offset: 0, limit: 10) {
      name
      id
      pokemontypes {
        id
        type {
          name
          id
          pokemonformtypes {
            pokemonform {
              id
              form_name
              name
              pokemonformsprites {
                id
                sprites
              }
            }
          }
        }
      }
      pokemonsprites {
        sprites
        id
      }
    }
  }
`;

@Component({
  selector: 'app-pokedex',
  imports: [PokedexItem, AsyncPipe, CommonModule],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.scss',
  standalone: true,
})
export class Pokedex implements OnInit {
  private readonly pokedexService = inject(PokedexService);
  private readonly apollo = inject(Apollo);

  private stateSubject = new BehaviorSubject<{
    data: Pokemon[];
    loading: boolean;
    error: any;
  }>({
    data: [],
    loading: true,
    error: null,
  });

  state$ = this.stateSubject.asObservable();
  pokemons$ = this.state$.pipe(map((state) => state.data));
  loading$ = this.state$.pipe(map((state) => state.loading));
  error$ = this.state$.pipe(map((state) => state.error));

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: FIND_ALL_POKEMON,
      })
      .valueChanges.subscribe((result) => {
        this.stateSubject.next({
          data: (result.data?.pokemon || []) as Pokemon[],
          loading: result.loading,
          error: result.error,
        });
      });
  }
}
