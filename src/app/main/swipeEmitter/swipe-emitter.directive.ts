import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appSwipeEmitter]'
})
export class SwipeEmitterDirective {
  @Output() swipeLeft: EventEmitter<void> = new EventEmitter();
  @Output() swipeRight: EventEmitter<void> = new EventEmitter();

  x1: number = null;
  y1: number = null;
  x2: number = null;
  y2: number = null;

  @HostListener('touchstart', ['$event.touches']) onTouchStart(touches: TouchList) {
    this.x1 = touches[0].clientX;
    this.y1 = touches[0].clientY;
  }

  @HostListener('touchmove', ['$event.touches']) onTouchMove(touches: TouchList) {
    if (!this.x1 || !this.y1) {
      return;
    }

    this.x2 = touches[0].clientX;
    this.y2 = touches[0].clientY;

    const xDiff = this.x2 - this.x1;
    const yDiff = this.y2 - this.y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { // if it was horisontal swipe
      if (xDiff > 0) {
        this.swipeRight.emit();
      }
      else if (xDiff < 0) {
        this.swipeLeft.emit();
      }
    }

    // reset, so it will have been null until next touchstart
    this.x1 = null;
    this.y1 = null;
  }
}
