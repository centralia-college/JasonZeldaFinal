import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { weaponSearchService } from './weapon-search.service';
import { weapon } from './weapon';

@Component({
  selector: 'weapon-search',
  templateUrl: './weapon-search.component.html',
  styleUrls: [ './weapon-search.component.css' ],
  providers: [weaponSearchService]
})
export class weaponSearchComponent implements OnInit {
  weapons: Observable<weapon[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private weaponSearchService: weaponSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.weapons = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.weaponSearchService.search(term)
        // or the observable of empty weapons if there was no search term
        : Observable.of<weapon[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<weapon[]>([]);
      });
  }

  gotoDetail(weapon: weapon): void {
    let link = ['/detail', weapon.id];
    this.router.navigate(link);
  }
}
