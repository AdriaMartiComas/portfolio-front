import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  // constructor(public dialog: MatDialog) {}


  // openDialog() {
  //   this.dialog.open(ProjectModalComponent);
  // }
  @Output() closeEvent = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.el.nativeElement.addEventListener('click', (e: { target: any; }) => {
      if (e.target === this.el.nativeElement) {
        this.close();
      }
    });
  }

  close() {
    this.closeEvent.emit();
  }

}
