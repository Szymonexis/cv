import { Component, Input } from '@angular/core';
import { Language, Technology, Tool } from 'src/app/app.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  @Input() showHeader = true;
  @Input() technologies?: Technology[];
  @Input() tools?: Tool[];
  @Input() languages?: Language[];
}
