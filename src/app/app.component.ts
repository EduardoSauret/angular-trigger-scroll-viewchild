import {
  Component,
  ElementRef,
  VERSION,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { ScrollComponent } from './scroll/scroll.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  @ViewChild('scrollComponent') scrollComponent: ScrollComponent;

  scrollDown() {
    this.scrollComponent.scrollDownChild();
  }
}
