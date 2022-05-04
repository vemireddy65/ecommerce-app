import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
  index = 0;
  constructor(
    @Inject(DOCUMENT) document: Document
  ) { }

  ngOnInit(): void {
  }
  myNext() {
    const slides = document.querySelectorAll('.slide-container');
   
    // alert('hiiiiiiiii');
    slides[this.index].classList.remove('active');
  this.index = (this.index + 1) % slides.length;
  slides[this.index].classList.add('active');
  }

  prev() {
    const slides = document.querySelectorAll('.slide-container');
   
    slides[this.index].classList.remove('active');
    this.index = (this.index - 1 + slides.length) % slides.length;
    slides[this.index].classList.add('active');
  }
}


