import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {  provideHttpClient, withFetch, withJsonpSupport } from '@angular/common/http';

import { ConfigService } from './services/config.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideHttpClient( withFetch(), withJsonpSupport()),
    provideAppInitializer(()=>{
      const configService =inject(ConfigService)
      return configService.load()
    })]
};
