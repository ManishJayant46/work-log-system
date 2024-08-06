import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
//import { ConfigurationComponent } from './configuration/configuration.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { JobdetailComponent } from './jobdetail/jobdetail.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MonitoringComponent,
    //ConfigurationComponent,
    CardDetailComponent,
    JobdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
