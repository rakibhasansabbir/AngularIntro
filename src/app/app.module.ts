import { RecordsService } from './records.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
