import { Component, ElementRef, EventEmitter, Output, Input, Inject, Renderer2 } from '@angular/core';
import { Project } from '../_models/Project';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ScreenSizeService } from '../_services/screen-size.service';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, HeaderComponent],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  currentSlide = 0;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { project: Project },
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    public screenSizeService: ScreenSizeService
  ) { }


  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.data.project.pictures.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.data.project.pictures.length) % this.data.project.pictures.length;
  }



}
