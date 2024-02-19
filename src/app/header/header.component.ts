import { Component } from '@angular/core';
import { ScreenSizeService } from '../_services/screen-size.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(public screenSizeService: ScreenSizeService) {}

  closeMenu() {
   setTimeout(() => {
     this.isMenuOpen = false;
   }, 100);
  }
}
