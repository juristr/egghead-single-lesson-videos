import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';

export interface Person {
  id?: number;
  name: string;
  website?: string;
  twitter?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private reload$ = new Subject();
  private cache$: Observable<Person[]>;

  constructor(private http: HttpClient) {}

  getPeople() {
    if (!this.cache$) {
      console.log('cache empty => refreshing');
      this.cache$ = this.http.get<Person[]>('/assets/people.json').pipe(
        takeUntil(this.reload$),
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  forceReload() {
    this.reload$.next();
    this.cache$ = null;
  }
}
