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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var userlist_component_1 = require('./userlist.component');
var userlistobs_component_1 = require('./userlistobs.component');
var userdetail_component_1 = require('./userdetail.component');
var userupdate_component_1 = require('./userupdate.component');
var usercreate_component_1 = require('./usercreate.component');
var forms_1 = require('@angular/forms');
var user_service_1 = require('./user.service');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule, http_1.HttpModule, http_1.JsonpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: 'users',
                        pathMatch: 'full'
                    },
                    {
                        path: 'detail/:id',
                        component: userdetail_component_1.UserDetailComponent
                    },
                    {
                        path: 'users/observable',
                        component: userlistobs_component_1.UserListObsComponent
                    },
                    {
                        path: 'update/:id',
                        component: userupdate_component_1.UserUpdateComponent
                    },
                    {
                        path: 'users',
                        component: userlist_component_1.UserListComponent
                    },
                    {
                        path: 'users/create',
                        component: usercreate_component_1.UserCreateComponent
                    }
                ])
            ],
            declarations: [app_component_1.AppComponent, userlistobs_component_1.UserListObsComponent, userlist_component_1.UserListComponent, userdetail_component_1.UserDetailComponent, usercreate_component_1.UserCreateComponent, userupdate_component_1.UserUpdateComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                user_service_1.UserService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map