import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <p>
      © 2024 Adrià Martí Comas. All rights reserved. Developed with Angular 17.
    </p>
    <a href="https://github.com/AdriaMartiComas/portfolio.git" target="_blank">
      <button>View code</button>
    </a>
  `,
  styles: `
    :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
    p {
      margin-right: 1rem;
      font-weight: lighter;
      text-align: center;
      }

button {
  color: black;
  text-decoration: none;
  font-family: inherit;
  font-weight: 400;
  font-size: 1.2rem;
  letter-spacing: -0.025em;
  border-radius: 50px;
  padding: 5px 10px;
  background: none;
  border: none;
  transition: background-color 0.5s ease;
  cursor: pointer;
}

button:hover {
  border-radius: 50px;
  padding: 5px 10px;
  background-color: yellow;
}
    `,
})
export class FooterComponent {}
