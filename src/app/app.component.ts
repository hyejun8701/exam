import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: any = [
    {
      src: './assets/images/flower.jpg',
      title: 'flower',
      description: 'natural'
    },
    {
      src: './assets/images/flower2.jpg',
      title: 'flower2',
      description: 'natural2'
    },
    {
      src: './assets/images/sunset.jpg'
    }
  ];
}
