import { Component, input, InputSignal } from '@angular/core';
import { WorkExperience } from '../section-b/section-b';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  experience: InputSignal<WorkExperience> = input.required();
}
