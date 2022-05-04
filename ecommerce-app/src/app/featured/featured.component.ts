import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) document: Document
  ) { 
    
  }

  ngOnInit(): void {
    
  }



  click(){
    document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
      image_1.addEventListener('click', () =>{
        const src = image_1.getAttribute('src');
        // document.querySelectorAll('.big-image-1').src = src;
      });
    }); 
  }
}
