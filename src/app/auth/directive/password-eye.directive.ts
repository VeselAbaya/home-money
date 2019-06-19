import { Directive, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPasswordEye]'
})
export class PasswordEyeDirective implements OnInit {
  @ViewChild('ng-template') lol;

  constructor(private vcRef: ViewContainerRef,
              private tlRef: TemplateRef<any>,
              private elRef: ElementRef,
              private renderer2: Renderer2) {}

  ngOnInit() {
    const eyeButton = <HTMLButtonElement>this.renderer2.createElement('button');
    const eyeIcon = <HTMLElement>this.renderer2.createElement('i');
    this.renderer2.addClass(eyeIcon, 'fas');
    this.renderer2.addClass(eyeIcon, 'fa-eye');
    this.renderer2.appendChild(eyeButton, eyeIcon);


    this.vcRef.createEmbeddedView(this.tlRef);
  }
}
