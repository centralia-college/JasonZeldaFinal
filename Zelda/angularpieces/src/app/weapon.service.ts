import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { weapon } from './weapon';

@Injectable()
export class weaponService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private weaponsUrl = 'api/weapons';  // URL to web api

  constructor(private http: Http) { }

  getweapons(): Promise<weapon[]> {
    return this.http.get(this.weaponsUrl)
               .toPromise()
               .then(response => response.json().data as weapon[])
               .catch(this.handleError);
  }


  getweapon(id: number): Promise<weapon> {
    const url = `${this.weaponsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as weapon)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.weaponsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<weapon> {
    return this.http
      .post(this.weaponsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as weapon)
      .catch(this.handleError);
  }

  update(weapon: weapon): Promise<weapon> {
    const url = `${this.weaponsUrl}/${weapon.id}`;
    return this.http
      .put(url, JSON.stringify(weapon), {headers: this.headers})
      .toPromise()
      .then(() => weapon)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

