import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false,
    animateIn: 'animate__animated animate__fadeIn',
    animateOut: 'animate__animated animate__fadeOut'
  }
  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {id: 1, img: "https://dummyimage.com/350x250/423b42/fff", selected: false},
    {id: 2, img: "https://dummyimage.com/350x250/2a2b7a/fff", selected: false},
    {id: 3, img: "https://dummyimage.com/350x250/1a2b7a/fff", selected: false},
    {id: 4, img: "https://dummyimage.com/350x250/7a2b7a/fff", selected: false},
  ];

  selectTemplate(index: number) {
    this.slides.forEach(slide => {
      slide.selected = false;
    })
    if(!this.slides[index].selected) {
      this.slides[index].selected = true;
    }
  }

  unselectTemplate(index: number) {
    this.slides[index].selected = false;
  }
}
