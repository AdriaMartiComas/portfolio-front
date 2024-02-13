import { Component, Input } from '@angular/core';
import { WorkComponent } from '../work/work.component';
import { Project } from '../_models/Project';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-work-card',
  standalone: true,
  imports: [WorkComponent, ProjectModalComponent],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.css'
})
export class WorkCardComponent {
  @Input() project: Project = {} as Project;


  constructor(public dialog: MatDialog, private projectsService: ProjectsService) {}

  openDialog(id: number) {
    const project = this.projectsService.GetProjectById(id);
    const dialogRef = this.dialog.open(ProjectModalComponent, {
      data: { project: project }
    });
  }

}
