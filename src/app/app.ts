import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionA } from './components/section-a/section-a';
import { SectionB } from './components/section-b/section-b';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SectionA, SectionB],
  templateUrl: './app.html',
})
export class App {}
