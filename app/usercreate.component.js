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
var user_1 = require('./user');
var project_1 = require('./project');
var address_1 = require('./address');
var user_service_1 = require('./user.service');
var UserCreateComponent = (function () {
    function UserCreateComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserCreateComponent.prototype.createUser = function (user, address, projects) {
        var _this = this;
        if (Object.keys(address).length !== 0) {
            user.address = address;
        }
        if (projects.length !== 0) {
            var projectsArray = projects.filter(function (obj) {
                return Object.keys(obj).length !== 0;
            });
            user.projects = projectsArray;
        }
        this.userService
            .createUser(user)
            .then(function (user) {
            alert("User has been created successfully");
            _this.router.navigate(['/users']);
        }).catch(function (err) {
            alert("User could not be created, please try again!");
        });
    };
    UserCreateComponent.prototype.addProjects = function () {
        this.projects.push({});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserCreateComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', address_1.Address)
    ], UserCreateComponent.prototype, "address", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', project_1.Project)
    ], UserCreateComponent.prototype, "projects", void 0);
    UserCreateComponent = __decorate([
        core_1.Component({
            selector: 'user-create',
            templateUrl: 'app/usercreate.component.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UserCreateComponent);
    return UserCreateComponent;
}());
exports.UserCreateComponent = UserCreateComponent;
//# sourceMappingURL=usercreate.component.js.map