import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
@Component({
  selector: 'app-main-page',
  imports: [Header, NgOptimizedImage],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage implements AfterViewInit {
  smoother!: ScrollSmoother;
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  initSmoother() {
    this.smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }
  placeOnUpSection(id: string) {
    gsap.to(`#${id}`, {
      marginTop: '-20rem',
      duration: 0.5,
      ease: 'power3',
      scrollTrigger: {
        trigger: `#${id}`,
        start: 'top 70%',
        end: '+=600px',
        scrub: 1,
      },
    });
  }
  pausedScoll(menuOpen: boolean) {
    console.log(menuOpen);

    this.smoother.paused(menuOpen);
  }

  sticky() {
    ScrollTrigger.create({
      trigger: '#deux',
      start: 'top top',
      end: '+=100%',
      pin: '.sticky-content',
    });
  }
  ngAfterViewInit(): void {
    this.initSmoother();
    setTimeout(() => {
      this.heroVideo.nativeElement.muted = true;
      this.heroVideo.nativeElement.play().catch((err) => {
        console.log('Autoplay blocked:', err);
      });
    }, 200);
    // this.placeOnUpSection('deux');
    this.placeOnUpSection('trois');
    this.sticky()
  }
}
