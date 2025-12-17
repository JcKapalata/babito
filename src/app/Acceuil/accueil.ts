import { Component, AfterViewInit, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: 'accueil.html',
  styleUrls: ['accueil.css']
})
export class Accueil implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observerOptions = {
      root: null,
      threshold: 0.1, 
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(entry.target, 'visible');
        } else {
          this.renderer.removeClass(entry.target, 'visible');
        }
      });
    }, observerOptions);

    const elements = this.el.nativeElement.querySelectorAll('.slide-left, .slide-right, .animate-fade');
    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
