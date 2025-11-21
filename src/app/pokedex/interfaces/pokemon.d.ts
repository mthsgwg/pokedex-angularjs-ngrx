interface BaseEntity {
  id: number;
  __typename: string;
}

export interface Pokemon extends BaseEntity {
  name: string;
  pokemontypes: PokemonType[];
  pokemonSprites: PokemonSprite[];
}

interface PokemonType extends BaseEntity {
  type: Type[];
}

interface Type extends BaseEntity {
  name: string;
  pokemonformtypes: {};
}

interface PokemonFormType {
  __typename: string;
  pokemonform: PokemonForm;
}

interface PokemonForm extends BaseEntity {
  name: string;
  form_name: string;
  pokemonformsprites: PokemonFormSprites[];
}

interface PokemonFormSprites extends BaseEntity {
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
}

interface PokemonSprite extends BaseEntity {
  sprites: {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  };
}
