import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
//import { ConfigurationComponent } from './configuration/configuration.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'monitoring', component: MonitoringComponent },
  //{ path: 'configuration', component: ConfigurationComponent },
  { path: 'card-detail/:id', component: CardDetailComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
