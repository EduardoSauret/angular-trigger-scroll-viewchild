import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'scroll',
  templateUrl: 'scroll.component.html',
  styleUrls: ['scroll.component.scss'],
})
export class ScrollComponent {
  private _shouldScroll: boolean;

  @ViewChild('scrollContainer', { read: ElementRef })
  public scrollContainer: ElementRef<any>;
  public scrollDownChild() {
    this.scrollContainer.nativeElement.scrollTo({ top: 1000 });
    console.log('scroll clicked');
  }
}
