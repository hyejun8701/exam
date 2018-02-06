import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ZoomDirective } from './zoom.directive';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    ZoomDirective,
    ContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
