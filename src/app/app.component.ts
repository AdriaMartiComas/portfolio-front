import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from './banner2/banner2.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { ScreenSizeService } from './_services/screen-size.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,
    HeaderComponent, BannerComponent,
    Banner2Component, AboutComponent,
    WorkComponent, ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(public screenSizeService: ScreenSizeService) {}

  ngOnInit() {
    this.screenSizeService.screenSizeChange.subscribe(size => {
      console.log('Scereen size: ', size);
    });
  }
}
