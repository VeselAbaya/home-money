import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {}

  @HostListener('swipeRight') onNavSwipeRight() {
    if (window.innerWidth <= 500) {
      this.renderer.setStyle(this.elRef.nativeElement, 'left', '0');
      this.renderer.setStyle(this.elRef.nativeElement, 'border-right-width', '0');
    }
  }

  @HostListener('swipeLeft') onNavSwipeLeft() {
    if (window.innerWidth <= 500) {
      this.renderer.setStyle(this.elRef.nativeElement, 'left', '-190px');
      this.renderer.setStyle(this.elRef.nativeElement, 'border-right-width', '30px');
    }
  }
}
