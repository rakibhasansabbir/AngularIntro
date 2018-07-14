import { HelloComponent } from './hello/hello.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myVariable = 'app'; 
  disableVariable = false 
  constructor(){
  
  }

  myFunction(){
    this.disableVariable =!this.disableVariable
    console.log("Function called");
    
  }
  }
