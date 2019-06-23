import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('navigation') nav: ElementRef;

  constructor(private renderer: Renderer2) {}

  onNavSwipeRight() {
    if (window.innerWidth <= 500) {
      this.renderer.setStyle(this.nav.nativeElement, 'left', '0');
      this.renderer.setStyle(this.nav.nativeElement, 'border-right-width', '0');
    }
  }

  onNavSwipeLeft() {
    if (window.innerWidth <= 500) {
      this.renderer.setStyle(this.nav.nativeElement, 'left', '-190px');
      this.renderer.setStyle(this.nav.nativeElement, 'border-right-width', '30px');
    }
  }
}
