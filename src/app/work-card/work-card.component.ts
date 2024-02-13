import { Component, Input } from '@angular/core';
import { WorkComponent } from '../work/work.component';
import { Project } from '../_models/Project';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [WorkComponent, ProjectModalComponent],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.css'
})
export class WorkCardComponent {
  @Input() project: Project = {} as Project;


  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ProjectModalComponent);
  }

}
