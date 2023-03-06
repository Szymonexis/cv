import { Component, Input } from '@angular/core';
import { SoftSkill } from 'src/app/app.component';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss'],
})
export class SoftSkillsComponent {
  @Input() softSkills?: SoftSkill[];
}
