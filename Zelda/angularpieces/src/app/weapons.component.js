"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var weapon_service_1 = require("./weapon.service");
var weaponsComponent = (function () {
    function weaponsComponent(weaponService, router) {
        this.weaponService = weaponService;
        this.router = router;
    }
    weaponsComponent.prototype.getweapons = function () {
        var _this = this;
        this.weaponService
            .getweapons()
            .then(function (weapons) { return _this.weapons = weapons; });
    };
    weaponsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.weaponService.create(name)
            .then(function (weapon) {
            _this.weapons.push(weapon);
            _this.selectedweapon = null;
        });
    };
    weaponsComponent.prototype.delete = function (weapon) {
        var _this = this;
        this.weaponService
            .delete(weapon.id)
            .then(function () {
            _this.weapons = _this.weapons.filter(function (h) { return h !== weapon; });
            if (_this.selectedweapon === weapon) {
                _this.selectedweapon = null;
            }
        });
    };
    weaponsComponent.prototype.ngOnInit = function () {
        this.getweapons();
    };
    weaponsComponent.prototype.onSelect = function (weapon) {
        this.selectedweapon = weapon;
    };
    weaponsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedweapon.id]);
    };
    return weaponsComponent;
}());
weaponsComponent = __decorate([
    core_1.Component({
        selector: 'my-weapons',
        templateUrl: './weapons.component.html',
        styleUrls: ['./weapons.component.css']
    }),
    __metadata("design:paramtypes", [weapon_service_1.weaponService,
        router_1.Router])
], weaponsComponent);
exports.weaponsComponent = weaponsComponent;
//# sourceMappingURL=weapons.component.js.map