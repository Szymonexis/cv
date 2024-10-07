import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    const languages = {
      'en-US': 'en-US',
      'pl-PL': 'pl-PL',
    } as const;

    const language = languages['pl-PL'];
    // const language = languages['en-US'];

    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
  }

  data: Data = {
    technologies: [
      { name: 'Angular', score: 100 },
      { name: 'Typescript', score: 100 },
      { name: 'RxJS', score: 100 },
      { name: 'NestJS', score: 90 },
      { name: 'React-Native', score: 85 },
      { name: 'React', score: 70 },
      { name: 'Java', score: 50 },
      { name: 'C', score: 50 },
      { name: 'D3', score: 80 },
      { name: 'Bash', score: 60 },
      { name: 'Python', score: 85 },
      { name: 'PostgreSQL', score: 85 },
      { name: 'MongoDB', score: 85 },
    ]

      .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
      .sort(({ score: scoreA }, { score: scoreB }) => scoreB - scoreA),

    tools: [
      { name: 'Git', score: 100 },
      { name: 'VS Code', score: 100 },
      { name: 'Azure', score: 75 },
      { name: 'Jira', score: 75 },
      { name: 'GCP', score: 80 },
      { name: 'Jenkins', score: 40 },
    ]
      .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
      .sort(({ score: scoreA }, { score: scoreB }) => scoreB - scoreA),

    languages: [
      { name: 'languages.polish', score: 100 },
      { name: 'languages.english', score: 90 },
    ]
      .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
      .sort(({ score: scoreA }, { score: scoreB }) => scoreB - scoreA),

    description: {
      phone: '+48 794 03 03 63',
      email: 'szymonkaszubagalka.innovio@gmail.com',
      github: 'https://github.com/Szymonexis',
      linkedin:
        'https://www.linkedin.com/in/szymon-kaszuba-ga%C5%82ka-394599200/',
      text: 'aboutMe.description',
    },

    jobs: [
      {
        name: 'jobs.items.0.name',
        workplace: 'Fujitsu',
        url: 'https://www.linkedin.com/company/fujitsu/',
        from: new Date(2017, 5),
        to: new Date(2021, 3),
        isCurrent: false,
        description: 'jobs.items.0.description',
        usedTechnologies: [],
        usedTools: ['ServiceNow', 'Oracle', 'DBMS', 'ActiveDirectory'],
      },
      {
        name: 'jobs.items.1.name',
        workplace: 'Digimonkeys.com',
        url: 'https://www.linkedin.com/company/digimonkeys-com/',
        from: new Date(2022, 2),
        to: new Date(Date.now()),
        isCurrent: true,
        description: 'jobs.items.1.description',
        usedTechnologies: [
          'React-Native',
          'React (PWA)',
          'Angular (7 - 18)',
          'NestJS',
          'PostgreSQL',
          'D3',
          'RxJS',
          'ChartJS',
          'WebSockets',
        ],
        usedTools: ['Jenkins', 'Metro', 'Jira', 'GCP', 'Azure'],
      },
      {
        name: 'jobs.items.2.name',
        workplace: 'mBank S.A.',
        url: 'https://www.linkedin.com/company/mbank-s-a/',
        from: new Date(2021, 7),
        to: new Date(2022, 1),
        isCurrent: false,
        description: 'jobs.items.2.description',
        usedTechnologies: ['Java', 'Python', 'SQL'],
        usedTools: ['Jenkins', 'Maven', 'Felix', 'Jira', 'Splunk'],
      },
      {
        name: 'jobs.items.3.name',
        workplace: 'WPP plc.',
        url: 'https://www.linkedin.com/company/wpp/',
        from: new Date(2022, 5),
        to: new Date(Date.now()),
        isCurrent: true,
        description: 'jobs.items.3.description',
        usedTechnologies: [
          'Angular (7 - 18)',
          'Webpack',
          'D3',
          'RxJS',
          'Signals',
          'WebSockets',
          'Module Federation',
        ],
        usedTools: ['GCP', 'Kubernetes', 'GitLab', 'Azure'],
      },
    ]
      .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
      .sort(
        ({ from: fromA }, { from: fromB }) => fromB.getTime() - fromA.getTime()
      ),

    schools: [
      {
        name: 'school.items.0.name',
        school: 'school.items.0.school',
        description: this.translateService.instant(
          'school.items.0.description'
        ),
        url: 'https://www.linkedin.com/school/unilodz/',
        from: new Date(2019, 8),
        to: new Date(2022, 5),
        isCurrent: false,
      },
      {
        name: 'school.items.1.name',
        school: 'school.items.1.school',
        description: this.translateService.instant(
          'school.items.1.description'
        ),
        url: 'https://www.linkedin.com/school/unilodz/',
        from: new Date(2022, 8),
        to: new Date(2024, 5),
        isCurrent: true,
      },
    ]
      .sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB))
      .sort(
        ({ from: fromA }, { from: fromB }) => fromB.getTime() - fromA.getTime()
      ),
    softSkills: [
      {
        name: 'softSkills.items.0.name',
        description: this.translateService.instant(
          'softSkills.items.0.description'
        ),
      },
      {
        name: 'softSkills.items.1.name',
        description: this.translateService.instant(
          'softSkills.items.1.description'
        ),
      },
      {
        name: 'softSkills.items.2.name',
        description: this.translateService.instant(
          'softSkills.items.2.description'
        ),
      },
      {
        name: 'softSkills.items.3.name',
        description: this.translateService.instant(
          'softSkills.items.3.description'
        ),
      },
    ].sort(({ name: nameA }, { name: nameB }) => nameA.localeCompare(nameB)),
    declaration: 'declaration',
    clause: 'clause',
  };
}

export const monthNames = new Array(12)
  .fill(0)
  .map((_, i) => `monthNames.${i}`);

export interface Data {
  technologies: Technology[];
  tools: Tool[];
  languages: Language[];
  description: Description;
  jobs: Job[];
  schools: School[];
  softSkills: SoftSkill[];
  declaration: string;
  clause: string;
}

export interface Technology {
  score: number;
  name: string;
}

export interface Tool {
  score: number;
  name: string;
}

export interface Language {
  score: number;
  name: string;
}

export interface Description {
  phone: string;
  email: string;
  site?: string;
  github: string;
  linkedin: string;
  text: string;
}

export interface Job {
  name: string;
  workplace: string;
  url: string;
  from: Date;
  to: Date;
  isCurrent: boolean;
  description: string;
  usedTechnologies: string[];
  usedTools: string[];
}

export interface School {
  name: string;
  school: string;
  url: string;
  from: Date;
  to: Date;
  isCurrent: boolean;
  description: string;
}

export interface SoftSkill {
  name: string;
  description: string;
}
