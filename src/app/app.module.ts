import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollComponent } from './scroll/scroll.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ScrollingModule],
  declarations: [AppComponent, HelloComponent, ScrollComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
