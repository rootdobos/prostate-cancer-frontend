import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private baseUrl = environment.backend_url
  private http = inject(HttpClient)
  constructor() {
   }

   getSlides():Observable<string[]>{
      var endpoint =[this.baseUrl, "slides"].join('/');
      return this.http.get<string[]>(endpoint);
   };
}
