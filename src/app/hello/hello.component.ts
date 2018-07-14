import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  i = 0;
  someVar = Math.random()
  doSomething(){
    console.log(`Called ${this.i++} times`);
    
  }

  constructor() { }

  ngOnInit() {
    setInterval(()=> {
      this.someVar = Math.random()
    },50 )
  }

}
