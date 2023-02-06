import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appHighlight]'
})

export class highlightDirective implements OnInit {
    constructor(private hoveringRef: ElementRef) {}

    ngOnInit() {
        this.hoveringRef.nativeElement.style.color = 'blue';
    }
}