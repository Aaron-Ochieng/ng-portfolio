import { Component, input, InputSignal } from '@angular/core';
import { WorkExperience } from '../section-b/section-b';
import {Icons} from '../icons/icons';

@Component({
  selector: 'app-card',
  imports: [
    Icons
  ],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  experience: InputSignal<WorkExperience> = input.required();
}
