import { HelloComponent } from './hello/hello.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  records = [
    {
      name: "Tamim Iqbal",
      online: true
    },
    {
      name: "Shakib All Hassan",
      online: false
    },
    {
      name: "Musfiqur Rahim",
      online: true
    }    
  ]
}
