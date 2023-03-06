import { Component, Input } from '@angular/core';
import { Description } from 'src/app/app.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent {
  @Input() description?: Description;
}
