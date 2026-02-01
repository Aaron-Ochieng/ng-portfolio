import {Component, input, InputSignal} from '@angular/core';
import {WorkExperience} from '../section-b/section-b';
import {Card} from '../card/card';
import {work} from '../../../data/intro';

@Component({
  selector: 'app-experience',
  imports: [
    Card
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experience:InputSignal<WorkExperience[]> = input.required();
  protected readonly work_experience = work;
}
