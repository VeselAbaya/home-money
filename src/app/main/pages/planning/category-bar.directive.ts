import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { ICategory } from '../records/service/category.interface';

@Directive({
  selector: '[appCategoryBar]'
})
export class CategoryBarDirective implements OnInit {
  @Input('appCategoryBar') category: ICategory;
  progress: number;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2) {}

  ngOnInit() {
    this.setProgress();
    this.setColor();
  }

  private setProgress() {
    const currentCosts = this.category.currentCosts > 0 ? this.category.currentCosts : 0;
    const periodLimit = this.category.periodLimit;
    if (!this.category.periodLimit || currentCosts > periodLimit) {
      this.progress = 100;
    }
    else {
      this.progress = currentCosts / periodLimit * 100;
    }

    this.renderer.setStyle(
      this.elRef.nativeElement, 'width', `${this.progress}%`
    );
  }

  private setColor() {
    if (!this.category.periodLimit) {
      return;
    }

    const green = '#5cb85c';
    const yellow = '#f0ad4e';
    const red = '#f44f44';
    if (this.progress <= 33.3) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', green);
    }
    else if (this.progress <= 66.6) {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', yellow);
    }
    else {
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', red);
    }
  }
}
