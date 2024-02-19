import { ProjectsService } from './../_services/projects.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkCardComponent } from '../work-card/work-card.component';
import { Project } from '../_models/Project';
import { ScreenSizeService } from '../_services/screen-size.service';


@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, WorkCardComponent],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  projects = {} as Project[];

  constructor(private projectsService: ProjectsService,
    public screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.GetProjects();
  }
}

