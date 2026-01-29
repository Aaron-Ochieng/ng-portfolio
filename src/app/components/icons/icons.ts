import {Component, input, InputSignal} from '@angular/core';
import {faGolang} from '@fortawesome/free-brands-svg-icons/faGolang';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faGit} from '@fortawesome/free-brands-svg-icons/faGit';
import {faHtml5} from '@fortawesome/free-brands-svg-icons/faHtml5';
import {faJsSquare} from '@fortawesome/free-brands-svg-icons/faJsSquare';
import {faReact} from '@fortawesome/free-brands-svg-icons/faReact';
import {faNodeJs} from '@fortawesome/free-brands-svg-icons/faNodeJs';
import {faDocker} from '@fortawesome/free-brands-svg-icons/faDocker';

@Component({
  selector: 'app-icons',
  imports: [FontAwesomeModule],
  templateUrl: './icons.html'
})
export class Icons {
  name:InputSignal<string> = input.required()
  golang = faGolang
  git = faGit
  html5 = faHtml5
  js=faJsSquare
  react = faReact
  node = faNodeJs
  docker = faDocker
}
