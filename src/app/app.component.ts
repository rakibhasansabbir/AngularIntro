
import { Component } from '@angular/core';

interface myData{
  obj: Object
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  records = []

  constructor(){

  }

  ngOnInit(){
    
  }
}
