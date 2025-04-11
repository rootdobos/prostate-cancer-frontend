import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { WsiListResponse } from '../models/wsi-list-response';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private baseUrl = environment.backend_url
  private http = inject(HttpClient)
  constructor() {
   }

   getSlides():Observable<WsiListResponse>{
      var endpoint =[this.baseUrl, "slides"].join('/');
      return this.http.get<WsiListResponse>(endpoint);
   };

   callSlideProcessing(slideID:string){
      console.log(slideID)
   }
}
