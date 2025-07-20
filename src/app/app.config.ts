import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {  provideHttpClient, withFetch, withJsonpSupport } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment.development';
import { tap } from 'rxjs/operators';
import { ConfigService } from './services/config.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideHttpClient( withFetch(), withJsonpSupport()),
    provideAppInitializer(()=>{
      const configService =inject(ConfigService)
      return configService.load()
    })]
};
