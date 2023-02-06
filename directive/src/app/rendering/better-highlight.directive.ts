import { 
  Directive,
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
   @Input('appBetterHighlight') highlightColor: string = 'violet';   
  // when ngClass is used with directive then to 
  // use property binding you can make your directive 
  // into a property bind because ngClass also uses square bracket 
  @Input() changeColor: string = 'magenta';

  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;

    // this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', '50px');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'fontSize', '50px');

    this.backgroundColor = this.highlightColor;
    }

  @HostListener('mouseleave') mouseleft(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');

    this.backgroundColor = this.changeColor;
    }

}
