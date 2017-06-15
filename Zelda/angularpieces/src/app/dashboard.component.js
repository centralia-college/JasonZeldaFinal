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
var weapon_service_1 = require("./weapon.service");
var DashboardComponent = (function () {
    function DashboardComponent(weaponService) {
        this.weaponService = weaponService;
        this.weapons = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.weaponService.getweapons()
            .then(function (weapons) { return _this.weapons = weapons.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [weapon_service_1.weaponService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map