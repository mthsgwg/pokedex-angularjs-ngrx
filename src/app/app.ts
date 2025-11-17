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
export class App implements OnInit {
  protected readonly title = signal('pokedex-angularjs-ngrx');
  protected readonly name = signal('Matheus');

  public myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      myFormControl: new FormControl(''),
    });
  }

  changeName() {
    this.name.set('Novo Nome');
  }

  onSubmit() {
    console.log('Form Control Value', this.myForm?.get('myFormControl')?.value);
  }

  onChange(event: Event) {
    this.name.set((event.target as HTMLInputElement).value);
  }
}
