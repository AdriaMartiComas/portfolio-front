import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  screenSize: 'xsmall' | 'small' | 'medium' | 'large';
  screenSizeChange: Subject<'xsmall' | 'small' | 'medium' | 'large'> = new Subject();

  constructor(private breakpointObserver: BreakpointObserver) {
    this.screenSize = 'large';

    this.breakpointObserver.observe([
      '(max-width: 700px)',
      '(min-width: 700px) and (max-width: 930px)',
      '(min-width: 930px) and (max-width: 1200px)',
      '(min-width: 1200px)'
    ]).subscribe(result => {
      if (result.breakpoints['(max-width: 700px)']) {
        this.updateScreenSize('xsmall');
      } else if (result.breakpoints['(min-width: 700px) and (max-width: 930px)']) {
        this.updateScreenSize('small');
      } else if (result.breakpoints['(min-width: 930px) and (max-width: 1200px)']) {
        this.updateScreenSize('medium');
      } else {
        this.updateScreenSize('large');
      }
    });
  }

  private updateScreenSize(size: 'xsmall' |'small' | 'medium' | 'large') {
    if (this.screenSize !== size) {
      this.screenSize = size;
      this.screenSizeChange.next(size);
    }
  }
}
