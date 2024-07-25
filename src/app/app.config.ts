import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(appRoutes),importProvidersFrom(HttpClientModule)]
};

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];
