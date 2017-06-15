import { Component, OnInit } from '@angular/core';

import { weapon }        from './weapon';
import { weaponService } from './weapon.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  weapons: weapon[] = [];

  constructor(private weaponService: weaponService) { }

  ngOnInit(): void {
    this.weaponService.getweapons()
      .then(weapons => this.weapons = weapons.slice(1, 5));
  }
}
