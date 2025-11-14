import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
  encapsulation: ViewEncapsulation.None, // <-- AJOUT ICI !
})
export class MainPage implements AfterViewInit {
  initSmoother() {
    let smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }
  ngAfterViewInit(): void {
    this.initSmoother();
  }
}
