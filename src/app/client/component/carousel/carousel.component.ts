import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  current = 0;
  img_list = [
    '../../../../assets/assest/banners/1.png',
    '../../../../assets/assest/banners/2.png',
    '../../../../assets/assest/banners/3.png',
    '../../../../assets/assest/banners/4.png',
  ];

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 10000);
  }

}

