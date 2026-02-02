import { Component, input, InputSignal } from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-icons',
  imports: [MatIconModule],
  templateUrl: './icons.html',
  styleUrls: ['./icons.css']
})
export class Icons {
  name: InputSignal<string> = input.required()


  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('golang', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/golang.svg'))
    this.matIconRegistry.addSvgIcon('c', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/c.svg'))
    this.matIconRegistry.addSvgIcon('figma', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/figma.svg'))
    this.matIconRegistry.addSvgIcon('bash', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/bash.svg'))
    this.matIconRegistry.addSvgIcon('git', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/git.svg'))
    this.matIconRegistry.addSvgIcon('graphql', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/graphql.svg'))
    this.matIconRegistry.addSvgIcon('mongo', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/mongo.svg'))
    this.matIconRegistry.addSvgIcon('next', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/nextjs.svg'))
    this.matIconRegistry.addSvgIcon('sqlite', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/sqlite3.svg'))
    this.matIconRegistry.addSvgIcon('python', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/python.svg'))
    this.matIconRegistry.addSvgIcon('flutter', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/flutter.svg'))
    this.matIconRegistry.addSvgIcon('javascript', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/javascript.svg'))
    this.matIconRegistry.addSvgIcon('html', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/html.svg'))
    this.matIconRegistry.addSvgIcon('bash', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/bash.svg'))
    this.matIconRegistry.addSvgIcon('react', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/react.svg'))
    this.matIconRegistry.addSvgIcon('make', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/make.svg'))
    this.matIconRegistry.addSvgIcon('docker', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/docker.svg'))
    this.matIconRegistry.addSvgIcon('node', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/node.svg'))
    this.matIconRegistry.addSvgIcon('dev', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/dev.svg'))
    this.matIconRegistry.addSvgIcon('x', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/x.svg'))
    this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/github.svg'))
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/linkedin.svg'))
    this.matIconRegistry.addSvgIcon('ai', this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/ai.svg'))
  }
}
