import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Pokedex } from './pokedex/pokedex';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, Pokedex],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
