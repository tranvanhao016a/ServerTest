import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  counter: number = 1;

  // slides: any[] = new Array(4).fill({id: -1, src: '', title: '', subtitle: ''});
  // constructor() {}

  ngOnInit(): void{
    this.startImageSlider();

  //   this.slides[0] = {
  //     id: 0,
  //     title: 'Web developer',
  //   };
  //   this.slides[1] = {
  //     id: 1,
  //     title: 'English',
  //   }
  //   this.slides[2] = {
  //     id: 2,
  //     src: './assets/img/vue.jpg',
  //     title: 'Math',
     
  //   }
  //   this.slides[3] = {
  //     id: 2,
  //     title: 'Computer science',

  //   }
  // }
  
  }

  startImageSlider() {
    setInterval(() => {
      const imgElement = document.getElementById('img' + this.counter) as HTMLInputElement;
      if (imgElement) {
          imgElement.checked = true;
      }
      
      this.counter++;

      if (this.counter > 4) {
          this.counter = 1;
      }
    }, 4000);
  }
}