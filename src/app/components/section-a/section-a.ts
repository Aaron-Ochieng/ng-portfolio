import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-section-a',
  imports: [RouterOutlet,MatIconModule ],
  templateUrl: './section-a.html',
  styleUrls: ['./section-a.css'],
})
export class SectionA {
  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('dev', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/dev.svg'))
    this.matIconRegistry.addSvgIcon('x', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/x.svg'))
    this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/github.svg'))
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/svg/linkedin.svg'))
   }
}
