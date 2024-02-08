import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <p>© 2024 Adrià Martí Comas. All rights reserved. Developed with Angular 17.</p>
  `,
  styles: `

    p {
      margin-right: 1rem;
      padding-bottom: 1rem;
      font-family: 'JetBrains Mono', monospace;
      font-weight: lighter;
      text-align: center;
      }
    `
})
export class FooterComponent {

}
