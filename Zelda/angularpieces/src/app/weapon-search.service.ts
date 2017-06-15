import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { weapon }           from './weapon';

@Injectable()
export class weaponSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<weapon[]> {
    return this.http
               .get(`app/weapons/?name=${term}`)
               .map(response => response.json().data as weapon[]);
  }
}
