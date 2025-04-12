import { HttpClient } from '@angular/common/http';
import {
  computed,
  inject,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { BehaviorSubject, concatMap, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { WsiListResponse } from '../models/wsi-list-response';
import { AttentionResult } from '../models/attention-result';

@Injectable({
  providedIn: 'root',
})
export class SlideService {
  private baseUrl = environment.backend_url;
  private http = inject(HttpClient);
  private selectedSlide: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  private isAnalyzing = new BehaviorSubject(false);
  private label: BehaviorSubject<number | null> = new BehaviorSubject<
    number | null
  >(null);

  private result: WritableSignal<AttentionResult | null> = signal(null);

  getSlides(): Observable<WsiListResponse> {
    var endpoint = [this.baseUrl, 'slides/'].join('/');
    return this.http.get<WsiListResponse>(endpoint);
  }

  callSlideProcessing() {
    this.isAnalyzing.next(true);
    this.label.next(null);
    var endpoint = [this.baseUrl, 'tiles', 'extract'].join('/');
    return this.http
      .get(endpoint, {
        params: { slideId: this.selectedSlide.value ?? '' },
      })
      .pipe(
        concatMap((response) => {
          var endpoint = [this.baseUrl, 'tiles', 'encode'].join('/');
          return this.http.get(endpoint, {
            params: { slideId: this.selectedSlide.value ?? '' },
          });
        }),
        concatMap((response) => {
          var endpoint = [this.baseUrl, 'tiles', 'get_attention_scores'].join(
            '/'
          );
          return this.http.get<AttentionResult>(endpoint, {
            params: { slideId: this.selectedSlide.value ?? '' },
          });
        })
      )
      .subscribe((res: AttentionResult) => {
        this.isAnalyzing.next(false);
        this.result.set(res);
        this.label.next(this.result()?.label ?? null);
      });
  }
  setSelectedSlide(slideID: string | null) {
    this.selectedSlide.next(slideID);
  }
  getSelectedSlide() {
    return this.selectedSlide;
  }
  getIsAnalyzing() {
    return this.isAnalyzing;
  }
  getLabel() {
    return this.label;
  }
  setLabel(newLabel: number) {
    if (this.label.value != null) {
      this.label.next(newLabel);
    }
  }
  getProbalities() {
    return computed(() => this.result()?.probabilities ?? null);
  }
}
