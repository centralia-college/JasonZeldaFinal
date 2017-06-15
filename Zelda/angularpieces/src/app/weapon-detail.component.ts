import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { weapon }        from './weapon';
import { weaponService } from './weapon.service';

@Component({
  selector: 'weapon-detail',
  templateUrl: './weapon-detail.component.html',
  styleUrls: [ './weapon-detail.component.css' ]
})
export class weaponDetailComponent implements OnInit {
  weapon: weapon;

  constructor(
    private weaponService: weaponService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.weaponService.getweapon(+params['id']))
      .subscribe(weapon => this.weapon = weapon);
  }

  save(): void {
    this.weaponService.update(this.weapon)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
