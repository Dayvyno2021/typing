import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = faker.lorem.sentence();
  enteredText = '';

  onInput(event: Event) {
    const parsedValue = (<HTMLInputElement>event.target).value;
    this.enteredText = parsedValue;
  }

  compare(randomLetter:string, enteredLetter:string) {
    return !enteredLetter? 'has-text-grey-light': randomLetter===enteredLetter && enteredLetter? 'has-text-success':'has-text-danger'
  }
}
