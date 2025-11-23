import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.html',
  styleUrls: ['./acceuil.css']
})
export class Acceuil {
  @HostListener('window:scroll', [])
  onScroll() {
    const elements = document.querySelectorAll('.slide-left, .slide-right, .animate-fade');

    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
}
