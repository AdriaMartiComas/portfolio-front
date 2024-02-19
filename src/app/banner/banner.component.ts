import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScreenSizeService } from '../_services/screen-size.service';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor(public screenSizeService: ScreenSizeService) {}


}
