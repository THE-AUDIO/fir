import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from "../header/header";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
@Component({
  selector: 'app-main-page',
  imports: [Header],
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
  placeOnUpSection(id:string) {
    gsap.to(`#${id}`, {
      marginTop:"-20rem",
      duration:.5,
      ease:"power3",
      scrollTrigger:{
        trigger:`#${id}`,
        start: "top 70%",
        end: "+=600px",
        scrub: 1,
      }
    });
  }
  ngAfterViewInit(): void {
    this.initSmoother();
    this.placeOnUpSection("deux")
    this.placeOnUpSection("trois")
  }
}
