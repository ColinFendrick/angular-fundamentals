import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFsize]'
})
export class FsizeDirective {

  constructor(private el: ElementRef) { }
  @Input('appFsize') fontSize: string;

  ngOnInit() {
    this.el.nativeElement.style.fontSize = this.fontSize
  }

}
