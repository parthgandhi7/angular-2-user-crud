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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var UserUpdateComponent = (function () {
    function UserUpdateComponent(userService, route, router) {
        this.userService = userService;
        this.route = route;
        this.router = router;
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this.route.params.forEach(function (params) {
            id = +params['id'];
        });
        this.userService.getUser(id)
            .then(function (user) {
            console.log("user", user);
            _this.user = user;
        });
    };
    UserUpdateComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.userService
            .updateUser(user, user.id)
            .then(function (user) {
            alert("User has been updated successfully");
            _this.router.navigate(['/users']);
        }).catch(function (err) {
            alert("User could not be updated, please try again!");
        });
    };
    UserUpdateComponent = __decorate([
        core_1.Component({
            selector: 'user-update',
            templateUrl: 'app/userupdate.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
    ], UserUpdateComponent);
    return UserUpdateComponent;
}());
exports.UserUpdateComponent = UserUpdateComponent;
//# sourceMappingURL=userupdate.component.js.map