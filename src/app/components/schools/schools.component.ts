import { Component, Input } from '@angular/core';
import { monthNames, School } from 'src/app/app.component';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent {
  @Input() schools?: School[];

  monthNames = monthNames;
}
