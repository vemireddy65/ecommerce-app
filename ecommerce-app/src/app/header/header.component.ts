import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) document: Document
  ) { }


  ngOnInit(): void {
    

    

  }

onclick (){
  const menu = document.querySelector('#menu-bar');
  const navbar = document.querySelector('.navbar');
    menu?.classList.toggle('fa-times');
    navbar?.classList.toggle('active');
  }

}
