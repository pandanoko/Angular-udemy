import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'papayawhip';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    //this.renderer.setStyle(
    //  this.elRef.nativeElement,
    //  'background-color',
    //  'papayawhip'
    //);
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(
    //  this.elRef.nativeElement,
    //  'background-color',
    //  'papayawhip'
    //);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(
    //  this.elRef.nativeElement,
    //  'background-color',
    //  'transparent'
    //);
    this.backgroundColor = this.defaultColor;
  }
}
