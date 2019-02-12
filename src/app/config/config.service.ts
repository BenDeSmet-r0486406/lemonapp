import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConfigService {
  constructor(private http: Http) { }

  url = 'https://itunes.apple.com/search?term='

  getConfig(input): Observable<any>  {
    return this.http.get(this.url + input + '&entity=song');
  }
}
