import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData(){
    return [
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
      },
      {
        name: "Rakib Hasan Sabbir",
        online: false
      }  
    ]
  }
}
