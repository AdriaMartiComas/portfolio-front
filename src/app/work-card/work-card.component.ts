import { Component, Input } from '@angular/core';
import { WorkComponent } from '../work/work.component';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [WorkComponent],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.css'
})
export class WorkCardComponent {
  @Input() project: Project = {} as Project;
}
