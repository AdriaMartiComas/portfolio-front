import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about-container">
      <div class="about-title">
        <h1>About me</h1>
      </div>
      <div class="text-container">
       <p>Driven by the fascination of discovering and creating, my career extends across varied sectors,
       from the audiovisual world to logistics, leading teams and facing challenges. During the pandemic,
       my initiation into Python led me to explore a universe in programming, merging creativity with technical
       solidity. Simultaneously with my work career, I persist in my self-taught learning, motivated
       by a passionate dedication to programming. </p>
      </div>
    </div>
  `,
  styles: `
    .about-container {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 30px;
    }
    .about-title {
      width: 90px;
      margin: 0 60px 0 0;
    }

    .about-title h1 {
      margin-top: 0;
      margin-bottom: 0;
    }

    .text-container {
  margin-top: 0;
  padding: 0;
  font-weight: lighter;
  letter-spacing: 1px;
  font-size: 1.2em;
  line-height: 1.8em;
}

.text-container p {
  margin-top: 0;
  margin-bottom: 0;

}
      `
})
export class AboutComponent {

}
