import { Component, input, InputSignal } from '@angular/core';
import { Projects } from '../section-b/section-b';
import {Icons} from '../icons/icons';
@Component({
  selector: 'app-project',
  imports: [
    Icons
  ],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  project: InputSignal<Projects> = input.required();
}
