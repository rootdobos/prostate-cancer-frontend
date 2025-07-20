import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: any = {};
  constructor(private http: HttpClient) {}
  getConfig() {
    return this.config;
  }
  load() {
    return this.http
      .get('/config.json')
      .pipe(tap((envConfig) => Object.assign(this.config, envConfig)));
  }
}
