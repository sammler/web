import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as md5 from 'md5';

@Directive({
  selector: '[gravatar]'
})
export class GravatarDirective implements OnInit, OnChanges {

  @Input('email') email: string;
  @Input('size') size: number = 36;
  @Input('fallback') fallback: string = 'mm';

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.setUrlGravatar(this.email);
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  setUrlGravatar(email: string) {
    this.elementRef.nativeElement.src = `//www.gravatar.com/avatar/${md5(email)}?s=${this.size}`;
  }
}
