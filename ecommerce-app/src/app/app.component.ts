import { Component, Renderer2 } from '@angular/core';


 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-app';
  constructor(private renderer: Renderer2) {
    
  }
 
  ngOnInit() {
    // next1
    // alert('hii2');
    // next();
    const script = this.renderer.createElement('script');
    script.src = `src/assets/js/script.js`;
    this.renderer.appendChild(document.head, script);
  }


}
