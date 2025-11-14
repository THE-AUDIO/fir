import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  @ViewChild('menu', { static: false }) menu!: ElementRef;
  @ViewChild('social', { static: false }) social!: ElementRef;
  @ViewChild('new', { static: false }) new!: ElementRef;
  menuOpen = false;
  tl!: gsap.core.Timeline;

  ngAfterViewInit(): void {
    const menuItems = this.menu.nativeElement.querySelectorAll('li');
    const socialItems = this.social.nativeElement.querySelectorAll('p');

    this.tl = gsap.timeline({ paused: true });

    this.tl
      // Animation du bloc menu (scaleY)
      .to(this.menu.nativeElement, {
        scaleY: 1,
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
      })

      // Apparition des liens + social en stagger
      .from(
        [...menuItems, ...socialItems, this.new.nativeElement], // fusion propre
        {
          y: 20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.3,
          ease: 'power3.out',
        },
        '-=0.2'
      );
  }

  toggleMenu() {
    this.menuOpen ? this.tl.reverse() : this.tl.play();
    this.menuOpen = !this.menuOpen;
  }
}
