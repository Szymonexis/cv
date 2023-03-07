import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: Data = {
    technologies: [
      { name: 'Angular', score: 100 },
      { name: 'Typescipt', score: 100 },
      { name: 'RxJS', score: 100 },
      { name: 'NestJS', score: 80 },
      { name: 'Expo', score: 70 },
      { name: 'React-Native', score: 75 },
      { name: 'React', score: 60 },
      { name: 'Java', score: 40 },
      { name: 'D3', score: 50 },
      { name: 'Bash', score: 50 },
      { name: 'Python', score: 40 },
      { name: 'PostgreSQL', score: 75 },
      { name: 'MongoDB', score: 75 },
    ].sort(({ score: scoreA }, { score: scoreB }) => scoreB - scoreA),

    tools: [
      { name: 'Git', score: 100 },
      { name: 'VS Code', score: 100 },
      { name: 'NeoVim', score: 50 },
      { name: 'Azure', score: 75 },
      { name: 'Jira', score: 75 },
      { name: 'GCP', score: 60 },
      { name: 'Jenkins', score: 40 },
    ].sort(({ score: scoreA }, { score: scoreB }) => scoreB - scoreA),

    languages: [
      { name: 'Polish - native', score: 100 },
      { name: 'English - B2E', score: 95 },
      { name: 'Russian - A1', score: 15 },
    ].sort(({ score: scoreA }, { score: scoreB }) => scoreB - scoreA),

    description: {
      phone: '794 03 03 63',
      email: 'szymonkaszuba3@wp.pl',
      site: 'https://szymon-kaszuba.netlify.app/',
      github: 'https://github.com/Szymonexis',
      linkedin:
        'https://www.linkedin.com/in/szymon-kaszuba-ga%C5%82ka-394599200/',
      text: `
      Hi, My name is Szymon Kaszuba-Gałka, but you can call me Szymon or Simon :) 
      I am a Software Developer and have always had something to do with computers. 
      My father was a mechatronics engineer so I guess I caught the bug from him. 
      My target is to become as good of a software developer as it is possible - I hope 
      I can fulfill that dream with you!`,
    },

    jobs: [
      {
        name: 'Senior Service Desk Agent',
        workplace: 'Fujitsu',
        url: 'https://www.linkedin.com/company/fujitsu/',
        from: new Date(2017, 5),
        to: new Date(2021, 3),
        isCurrent: false,
        description:
          'Worked as a first line support Service Desk Agent for UK, India and Baltic Sea based users.',
        usedTechnologies: [],
        usedTools: ['ServiceNow', 'Oracle', 'DBMS', 'ActiveDirectory'],
      },
      {
        name: 'Software Developer',
        workplace: 'Digimonkeys.com',
        url: 'https://www.linkedin.com/company/digimonkeys-com/',
        from: new Date(2022, 2),
        to: new Date(Date.now()),
        isCurrent: true,
        description:
          '8 months of developement on a all-aspect position for Dr. HairCare app. Since june 2022 - work for WaveMaker (from Angular 7 to Angular 14)',
        usedTechnologies: [
          'React-Native',
          'React (PWA)',
          'Angular',
          'NestJS',
          'PostgreSQL',
        ],
        usedTools: ['Jenkins', 'Metro', 'Jira', 'GCP', 'Azure'],
      },
      {
        name: 'Junior Backend Developer',
        workplace: 'mBank S.A.',
        url: 'https://www.linkedin.com/company/mbank-s-a/',
        from: new Date(2021, 7),
        to: new Date(2022, 1),
        isCurrent: false,
        description:
          'Worked in a team that specialized in administration and developement of the main banking forms system for mBank.',
        usedTechnologies: ['Java', 'Python', 'SQL'],
        usedTools: ['Jenkins', 'Maven', 'Felix', 'Jira', 'Splunk'],
      },
    ].sort(
      ({ from: fromA }, { from: fromB }) => fromB.getTime() - fromA.getTime()
    ),

    schools: [
      {
        name: 'Bachelors Degree',
        school: 'University of Łódź',
        url: 'https://www.linkedin.com/school/unilodz/',
        from: new Date(2019, 8),
        to: new Date(2022, 5),
        isCurrent: false,
        description: 'Graduated with a grade of 4.8',
      },
      {
        name: 'Masters Degree',
        school: 'University of Łódź',
        url: 'https://www.linkedin.com/school/unilodz/',
        from: new Date(2022, 8),
        to: new Date(2024, 5),
        isCurrent: true,
        description:
          'Currently ongoing - learning mainly focuses on AI Networks, Network Administration and WebApps',
      },
    ].sort(
      ({ from: fromA }, { from: fromB }) => fromB.getTime() - fromA.getTime()
    ),
    softSkills: [
      {
        name: 'Team Player & Lone Wolf',
        description:
          'I am a really good team player but I can also carry out solo tasks',
      },
      {
        name: 'Good Communicator',
        description:
          "I don't hasitate when presenting new features to stakeholders and I am able to present problems/issues/ideas, even complex ones, with high efficency, accuracy and preciseness",
      },
      {
        name: 'Open For New Challanges',
        description:
          'I love taking on new challanges - the more complex the problem, the more I am happy when I solve it',
      },
      {
        name: "Flexible",
        description:
          'I can work on any OS, any system, within any time-frame, day or night.',
      },
    ],
    declaration:
      'I hereby confirm that all the information mentioned in this resume is accurate and, I am responsible for their correctness. I sincerely verify the authenticity of all the information mentioned above. I sincerely declare that the facts provided in this resume are true and correct to the best of my knowledge',
    clause:
      'I hereby consent to my personal data being processed for the purpose of considering my application.',
  };
}

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

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
  site: string;
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
