import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http'
import { RecordsService } from './records.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'admin',
          component: AdminComponent,
          canActivate: [AuthGuard]
        },
        {
          path: '',
          component: HomeComponent

        }
      ]
    )
  ],
  providers: [RecordsService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
