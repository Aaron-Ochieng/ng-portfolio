import { Component, signal } from '@angular/core';
import { intro, work, projects } from '../../../data/intro';
import { Card } from '../card/card';
import { Project } from '../project/project';

@Component({
  selector: 'app-section-b',
  imports: [Card, Project],
  templateUrl: './section-b.html',
})
export class SectionB {
  protected readonly intro = signal(intro.intro);
  protected readonly work_experience: WorkExperience[] = work;
  protected readonly done_projects: Projects[] = projects;
}

export interface WorkExperience {
  desc: string[];
  pos: string;
  technology: string[];
  date: string;
  company: string;
  url: string;
}

export interface Projects {
  name: string;
  description: string;
  languages: string[];
  url: string;
}
