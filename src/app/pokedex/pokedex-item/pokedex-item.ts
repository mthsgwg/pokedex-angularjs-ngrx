import { italic } from './../../../../node_modules/@colors/colors/index.d';
import { Component, Input, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Pokemon } from '../interfaces/pokemon';

@Component({
  selector: 'pokedex-item',
  imports: [NgStyle],
  templateUrl: './pokedex-item.html',
  styleUrl: './pokedex-item.scss',
})
export class PokedexItem {
  @Input() pokemon!: Pokemon;
  currentStyles: Record<string, string> = {};

  get titleStyles(): Record<string, string> {
    const type = this.pokemon?.pokemontypes?.[0]?.type?.name;
    return pokemonStyles[type]?.title || pokemonStyles['default'].title;
  }

  get subtitleStyles(): Record<string, string> {
    const type = this.pokemon?.pokemontypes?.[0]?.type?.name;
    return pokemonStyles[type]?.subtitle || pokemonStyles['default'].subtitle;
  }

  get cardStyles(): Record<string, string> {
    const type = this.pokemon?.pokemontypes?.[0]?.type?.name;
    return pokemonStyles[type]?.card || pokemonStyles['default'].card;
  }
}

const pokemonStyles: Record<
  string,
  {
    title: Record<string, string>;
    subtitle: Record<string, string>;
    card: Record<string, string>;
  }
> = {
  water: {
    title: {
      color: '#3498db',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(52, 152, 219, 0.3)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#5dade2',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #ebf8ff 0%, #bee3f8 100%)',
      border: '2px solid #3498db',
      boxShadow: '0 4px 8px rgba(52, 152, 219, 0.2)',
    },
  },
  fire: {
    title: {
      color: '#e74c3c',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(231, 76, 60, 0.4)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#f39c12',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%)',
      border: '2px solid #e74c3c',
      boxShadow: '0 4px 8px rgba(231, 76, 60, 0.2)',
    },
  },
  grass: {
    title: {
      color: '#27ae60',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(39, 174, 96, 0.3)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#58d68d',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #f0fff4 0%, #c6f6d5 100%)',
      border: '2px solid #27ae60',
      boxShadow: '0 4px 8px rgba(39, 174, 96, 0.2)',
    },
  },
  electric: {
    title: {
      color: '#f1c40f',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(241, 196, 15, 0.4)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#f39c12',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #fffbf0 0%, #fef5e7 100%)',
      border: '2px solid #f1c40f',
      boxShadow: '0 4px 8px rgba(241, 196, 15, 0.2)',
    },
  },
  psychic: {
    title: {
      color: '#9b59b6',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(155, 89, 182, 0.3)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#bb8fce',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)',
      border: '2px solid #9b59b6',
      boxShadow: '0 4px 8px rgba(155, 89, 182, 0.2)',
    },
  },
  rock: {
    title: {
      color: '#8d6e63',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(141, 110, 99, 0.3)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#a1887f',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #fafafa 0%, #efebe9 100%)',
      border: '2px solid #8d6e63',
      boxShadow: '0 4px 8px rgba(141, 110, 99, 0.2)',
    },
  },
  ice: {
    title: {
      color: '#5dade2',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(93, 173, 226, 0.3)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#85c1e9',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #f8fdff 0%, #e3f2fd 100%)',
      border: '2px solid #5dade2',
      boxShadow: '0 4px 8px rgba(93, 173, 226, 0.2)',
    },
  },
  dragon: {
    title: {
      color: '#8e44ad',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(142, 68, 173, 0.4)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#af7ac5',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #f4f0ff 0%, #ddd6fe 100%)',
      border: '2px solid #8e44ad',
      boxShadow: '0 4px 8px rgba(142, 68, 173, 0.2)',
    },
  },
  dark: {
    title: {
      color: '#34495e',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(52, 73, 94, 0.3)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#5d6d7e',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
      border: '2px solid #34495e',
      boxShadow: '0 4px 8px rgba(52, 73, 94, 0.2)',
    },
  },
  fairy: {
    title: {
      color: '#ec7ea8',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(236, 126, 168, 0.3)',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#f1a3c4',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #fef7f7 0%, #fed7e2 100%)',
      border: '2px solid #ec7ea8',
      boxShadow: '0 4px 8px rgba(236, 126, 168, 0.2)',
    },
  },
  // Estilo padrão para tipos não mapeados
  default: {
    title: {
      color: '#2c3e50',
      fontWeight: 'bold',
      fontSize: '1.2em',
    },
    subtitle: {
      color: '#7f8c8d',
      fontStyle: 'italic',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    card: {
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      border: '2px solid #bdc3c7',
      boxShadow: '0 4px 8px rgba(189, 195, 199, 0.2)',
    },
  },
};
