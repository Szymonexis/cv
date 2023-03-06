import { Component, Input } from '@angular/core';
import { Job, monthNames } from 'src/app/app.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  @Input() jobs?: Job[];

  monthNames = monthNames;
}
