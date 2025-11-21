import { Injectable } from '@angular/core';
import { Pokemon } from './interfaces/pokemon';
import { Apollo, gql, TypedDocumentNode } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  constructor(private readonly apollo: Apollo) {}

  // getData() {
  //   this.apollo
  //     .watchQuery({
  //       query: FIND_ALL_POKEMON,
  //     })
  //     .valueChanges.forEach((result) => {
  //       this._loading = result.loading;
  //       this._error = result.error;
  //       if (result.data?.pokemon !== undefined) {
  //         console.log('result', result.data);
  //         this._pokemons = result.data.pokemon.filter(
  //           (pokemon) => pokemon !== undefined
  //         ) as Pokemon[];

  //         this.statusSubject.next({
  //           data: result.data as Pokemon[],
  //           loading: result.loading,
  //           error: result.error,
  //         });
  //       }
  //     });
  // }
}
