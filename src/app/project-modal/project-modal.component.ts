import { Component, ElementRef, EventEmitter, Output, Input, Inject, Renderer2 } from '@angular/core';
import { Project } from '../_models/Project';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  currentSlide = 0;


  constructor(
    public dialogRef: MatDialogRef<ProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { project: Project },
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  // ngOnInit() {
  //   this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  //   this.renderer.setStyle(this.document.body, 'position', 'fixed');


  // }

  // ngOnDestroy() {
  //   this.renderer.setStyle(this.document.body, 'overflow', 'auto');
  //   this.renderer.setStyle(this.document.body, 'position', 'static');


  // }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.data.project.pictures.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.data.project.pictures.length) % this.data.project.pictures.length;
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
