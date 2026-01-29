import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faDev, faGithub, faLinkedin, faSquareXTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-section-a',
  imports: [RouterOutlet,FontAwesomeModule],
  templateUrl: './section-a.html',
})
export class SectionA {
  github = faGithub
  fadev = faDev
  linkedin = faLinkedin
  x = faSquareXTwitter
}
