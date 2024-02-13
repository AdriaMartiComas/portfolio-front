import { Component, ElementRef, EventEmitter, Output, Input, Inject, Renderer2 } from '@angular/core';
import { Project } from '../_models/Project';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  currentSlide = 0;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { project: Project },
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }


  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.data.project.pictures.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.data.project.pictures.length) % this.data.project.pictures.length;
  }



}
