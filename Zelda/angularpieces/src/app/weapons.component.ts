import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { weapon }                from './weapon';
import { weaponService }         from './weapon.service';

@Component({
  selector: 'my-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: [ './weapons.component.css' ]
})
export class weaponsComponent implements OnInit {
  weapons: weapon[];
  selectedweapon: weapon;

  constructor(
    private weaponService: weaponService,
    private router: Router) { }

  getweapons(): void {
    this.weaponService
        .getweapons()
        .then(weapons => this.weapons = weapons);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.weaponService.create(name)
      .then(weapon => {
        this.weapons.push(weapon);
        this.selectedweapon = null;
      });
  }

  delete(weapon: weapon): void {
    this.weaponService
        .delete(weapon.id)
        .then(() => {
          this.weapons = this.weapons.filter(h => h !== weapon);
          if (this.selectedweapon === weapon) { this.selectedweapon = null; }
        });
  }

  ngOnInit(): void {
    this.getweapons();
  }

  onSelect(weapon: weapon): void {
    this.selectedweapon = weapon;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedweapon.id]);
  }
}
