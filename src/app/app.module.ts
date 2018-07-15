import { HttpClientModule } from '@angular/common/http'
import { RecordsService } from './records.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'data',
          component: DataComponent

        },
        {
          path: '',
          component: HomeComponent
        }
      ]
    )
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
