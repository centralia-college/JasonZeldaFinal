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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var weapon_service_1 = require("./weapon.service");
var weaponDetailComponent = (function () {
    function weaponDetailComponent(weaponService, route, location) {
        this.weaponService = weaponService;
        this.route = route;
        this.location = location;
    }
    weaponDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.weaponService.getweapon(+params['id']); })
            .subscribe(function (weapon) { return _this.weapon = weapon; });
    };
    weaponDetailComponent.prototype.save = function () {
        var _this = this;
        this.weaponService.update(this.weapon)
            .then(function () { return _this.goBack(); });
    };
    weaponDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return weaponDetailComponent;
}());
weaponDetailComponent = __decorate([
    core_1.Component({
        selector: 'weapon-detail',
        templateUrl: './weapon-detail.component.html',
        styleUrls: ['./weapon-detail.component.css']
    }),
    __metadata("design:paramtypes", [weapon_service_1.weaponService,
        router_1.ActivatedRoute,
        common_1.Location])
], weaponDetailComponent);
exports.weaponDetailComponent = weaponDetailComponent;
//# sourceMappingURL=weapon-detail.component.js.map