webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pager_service__ = __webpack_require__("./src/app/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blangpage_blangpage_component__ = __webpack_require__("./src/app/blangpage/blangpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__intents_intent_service__ = __webpack_require__("./src/app/intents/intent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__intents_intents_component__ = __webpack_require__("./src/app/intents/intents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nlp_nlp_component__ = __webpack_require__("./src/app/nlp/nlp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nlp_nlp_service__ = __webpack_require__("./src/app/nlp/nlp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dialog_dialog_component__ = __webpack_require__("./src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_service__ = __webpack_require__("./src/app/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__sdata_sdata_component__ = __webpack_require__("./src/app/sdata/sdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sdata_sdata_form_sdata_form_component__ = __webpack_require__("./src/app/sdata/sdata-form/sdata-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sdata_sdata_service__ = __webpack_require__("./src/app/sdata/sdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__entity_entity_service__ = __webpack_require__("./src/app/entity/entity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__entity_entity_component__ = __webpack_require__("./src/app/entity/entity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__entity_entity_form_entity_form_component__ = __webpack_require__("./src/app/entity/entity-form/entity-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// Intent


// NLP


// Response


// SData



// Entity



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__intents_intents_component__["a" /* IntentsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__nlp_nlp_component__["a" /* NlpComponent */],
                __WEBPACK_IMPORTED_MODULE_10__blangpage_blangpage_component__["a" /* BlangpageComponent */],
                __WEBPACK_IMPORTED_MODULE_15__dialog_dialog_component__["a" /* DialogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__sdata_sdata_component__["a" /* SdataComponent */],
                __WEBPACK_IMPORTED_MODULE_18__sdata_sdata_form_sdata_form_component__["a" /* SdataFormComponent */],
                __WEBPACK_IMPORTED_MODULE_21__entity_entity_component__["a" /* EntityComponent */],
                __WEBPACK_IMPORTED_MODULE_22__entity_entity_form_entity_form_component__["a" /* EntityFormComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_22__entity_entity_form_entity_form_component__["a" /* EntityFormComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__intents_intent_service__["a" /* IntentService */], __WEBPACK_IMPORTED_MODULE_20__entity_entity_service__["a" /* EntityService */], __WEBPACK_IMPORTED_MODULE_16__dialog_dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_14__nlp_nlp_service__["a" /* NlpService */], __WEBPACK_IMPORTED_MODULE_19__sdata_sdata_service__["a" /* SdataService */], __WEBPACK_IMPORTED_MODULE_9__pager_service__["a" /* PagerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intents_intents_component__ = __webpack_require__("./src/app/intents/intents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nlp_nlp_component__ = __webpack_require__("./src/app/nlp/nlp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__ = __webpack_require__("./src/app/dialog/dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blangpage_blangpage_component__ = __webpack_require__("./src/app/blangpage/blangpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sdata_sdata_component__ = __webpack_require__("./src/app/sdata/sdata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sdata_sdata_form_sdata_form_component__ = __webpack_require__("./src/app/sdata/sdata-form/sdata-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entity_entity_component__ = __webpack_require__("./src/app/entity/entity.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', redirectTo: '/intent', pathMatch: 'full' },
    { path: 'intent', component: __WEBPACK_IMPORTED_MODULE_2__intents_intents_component__["a" /* IntentsComponent */], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__blangpage_blangpage_component__["a" /* BlangpageComponent */] },
        ]
    },
    { path: 'entity', component: __WEBPACK_IMPORTED_MODULE_8__entity_entity_component__["a" /* EntityComponent */], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__blangpage_blangpage_component__["a" /* BlangpageComponent */] },
        ]
    },
    { path: 'response', component: __WEBPACK_IMPORTED_MODULE_4__dialog_dialog_component__["a" /* DialogComponent */], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__blangpage_blangpage_component__["a" /* BlangpageComponent */] },
        ]
    },
    { path: 'nlp', component: __WEBPACK_IMPORTED_MODULE_3__nlp_nlp_component__["a" /* NlpComponent */] },
    { path: 'sdata', component: __WEBPACK_IMPORTED_MODULE_6__sdata_sdata_component__["a" /* SdataComponent */] },
    { path: 'dc', component: __WEBPACK_IMPORTED_MODULE_7__sdata_sdata_form_sdata_form_component__["a" /* SdataFormComponent */] }
];
var Routing = /** @class */ (function () {
    function Routing() {
    }
    Routing = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], Routing);
    return Routing;
}());



/***/ }),

/***/ "./src/app/app.setting.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSetting; });
var AppSetting = /** @class */ (function () {
    function AppSetting() {
    }
    //public static API_ENDPOINT='http://localhost:3001/api/';
    AppSetting.API_ENDPOINT = 'https://wink-dsapi.herokuapp.com/api/';
    //public static CLOUDAPI_ENDPOINT='http://ds-api.mybluemix.net/api/';
    AppSetting.CLOUDAPI_ENDPOINT = 'https://wink-dsapi.herokuapp.com/api/';
    return AppSetting;
}());



/***/ }),

/***/ "./src/app/blangpage/blangpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blangpage/blangpage.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blangpage/blangpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlangpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlangpageComponent = /** @class */ (function () {
    function BlangpageComponent() {
    }
    BlangpageComponent.prototype.ngOnInit = function () {
    };
    BlangpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blangpage',
            template: __webpack_require__("./src/app/blangpage/blangpage.component.html"),
            styles: [__webpack_require__("./src/app/blangpage/blangpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlangpageComponent);
    return BlangpageComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-md-5\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n              <h4>Dialogs</h4>\n            </div>\n            <div class=\"col-md-3\">\n              <button class=\"btn btn-link\" (click)=\"onAddItem()\">Add Dialog</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <table class=\"table table-hover\" id=\"myTable\">\n              <thead><tr><th>Intent</th><th></th><th></th><th></th></tr></thead>\n              <tbody>\n              <tr *ngFor=\"let dialog of dialogs; let i = index\" [attr.data-index]=\"i\">\n                <td width=\"20%\">{{ dialog.intent }}</td>\n                <td width=\"10%\">\n                  <a style=\"cursor: pointer\" (click)=\"manageDialog(dialog)\">Response</a>\n                </td>\n                <td width=\"5%\">\n                  <a title=\"Edit\" style=\"cursor: pointer\" (click)=\"onEditItem(dialog)\"><i class=\"glyphicon glyphicon-edit\"></i></a>\n                </td>\n                <td width=\"5%\">\n                  <a title=\"Delete\" style=\"cursor: pointer\" (click)=\"onDeleteDialog(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                </td>\n              </tr>\n              </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"col-md-7\">\n    <div *ngIf=\"dFlag==true\" class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n         <div class=\"row\">\n            <div class=\"col-md-8\">\n              <h4 *ngIf=\"editMode==true\">Edit Dialog</h4>\n              <h4 *ngIf=\"editMode==false\">Add New Dialog</h4>\n            </div>\n          </div>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Intent\" [(ngModel)]=\"editedItem.intent\" class=\"form-control\">\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <button class=\"btn btn-primary\" (click)=\"onSave()\">Save</button>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"rFlag==true\" class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n            <h4>Response - {{editedItem.intent}}</h4>\n          </div>\n          <div class=\"col-md-3\">\n            <button class=\"btn btn-link\" (click)=\"reloadTraining()\">Refresh Training</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel-body\">\n      <form class=\"example-form\" [formGroup]=\"dialogForm\" (ngSubmit)=\"onSaveDialog()\">\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\" placeholder=\"Entity Type\" aria-label=\"Entity Type\" matInput formControlName=\"entityType\" [matAutocomplete]=\"auto\">\n              <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let entity of filteredEntities | async\" [value]=\"entity.entityType\">\n                  {{ entity.entityType }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n          <div class=\"col-md-2\">\n          </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n              <mat-form-field class=\"example-full-width\">\n                  <input type=\"text\" placeholder=\"Response\" aria-label=\"Response\" matInput formControlName=\"response\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"editMode==false\" class=\"col-md-2\">\n                <button class=\"btn btn-primary\" id=\"add-btn\" type=\"submit\">Add</button>\n            </div>\n            <div *ngIf=\"editMode==true\" class=\"col-md-2\">\n                <button class=\"btn btn-primary\" id=\"save-btn\" type=\"submit\">Save</button>\n            </div>\n        </div>\n      </form>\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <table class=\"table table-hover\" id=\"queryTable\">\n              <thead><tr><th>Entity Type</th><th>Response</th><th></th><th></th></tr></thead>\n              <tbody>\n              <tr *ngFor=\"let drec of editedItem.dialog; let i = index\" [attr.data-index]=\"i\">\n                <td width=\"20%\">{{ drec.entityType }}</td>\n                <td width=\"70%\">{{ drec.response }}</td>\n                <td width=\"5%\">\n                  <a title=\"Edit\" style=\"cursor: pointer\" (click)=\"onEditDialog(drec)\"><i class=\"glyphicon glyphicon-edit\"></i></a>\n                </td>\n                <td width=\"5%\">\n                  <a title=\"Delete\" style=\"cursor: pointer\" (click)=\"onDeleteResponse(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dialog/dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Entity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_service__ = __webpack_require__("./src/app/dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Entity = /** @class */ (function () {
    function Entity(entityType) {
        this.entityType = entityType;
    }
    return Entity;
}());

var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogService, router, route, fb) {
        this.dialogService = dialogService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.dFlag = false;
        this.rFlag = false;
        this.editMode = false;
        this.dialogs = [];
        this.entities = [];
        this.filteredItems = [];
        //this.filteredEntities = this.entityCtrl.valueChanges
    }
    DialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        //loading entity data
        this.onGet();
        this.initForm();
        this.subscription = this.dialogService.dialogChanged
            .subscribe(function (m) {
            console.log('Refresh after' + m);
            _this.onSave();
        });
    };
    DialogComponent.prototype.initForm = function () {
        var _this = this;
        this.dialogForm = this.fb.group({
            entityType: ["none", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].nullValidator],
            response: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].nullValidator]
        });
        this.filteredEntities = this.dialogForm.controls['entityType'].valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators_map__["a" /* map */])(function (entity) { return entity ? _this.filterEntity(_this.dialogForm.controls['entityType'].value) : _this.entities.slice(); }));
    };
    DialogComponent.prototype.ngAfterViewInit = function () {
        console.log('In JQuery');
        $(document).ready(function () {
            console.log('In Document Ready');
            $('#myTable tbody tr').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    };
    DialogComponent.prototype.onGet = function () {
        var _this = this;
        this.dialogService.getDialog()
            .subscribe(function (dialogs) { return _this.dialogs = dialogs; }, function (error) { return console.log(error); });
        this.dialogService.getEntity()
            .subscribe(function (entities) {
            _this.entities = entities;
        }, function (error) { return console.log(error); });
    };
    DialogComponent.prototype.filterEntity = function (entityType) {
        return this.entities.filter(function (entity) {
            return entity.entityType.toLowerCase().indexOf(entityType.toLowerCase()) === 0;
        });
    };
    DialogComponent.prototype.onEditItem = function (item) {
        this.editMode = true;
        this.rFlag = false;
        this.editedItem = item;
        this.dFlag = true;
    };
    DialogComponent.prototype.onEditDialog = function (item) {
        this.editMode = true;
        this.dialogItem = item;
        console.log({ "entityType": item.entityType, "response": item.response });
        this.dialogForm.patchValue({ "entityType": item.entityType, "response": item.response });
        //this.entityCtrl.patchValue(item.entityType);
        //this.responseCtrl.patchValue(item.response);
    };
    DialogComponent.prototype.onAddItem = function () {
        this.editMode = false;
        this.rFlag = false;
        this.editedItem = { "intent": "", "dialog": [] };
        this.dFlag = true;
    };
    DialogComponent.prototype.manageDialog = function (item) {
        this.editMode = false;
        this.dFlag = false;
        this.editedItem = item;
        this.dialogItem = { "entityType": "", "response": "" };
        this.rFlag = true;
        this.dialogForm.patchValue({ "entityType": "", "response": "" });
        //this.entityCtrl.patchValue("");
        //this.responseCtrl.patchValue("");    
    };
    DialogComponent.prototype.onSave = function () {
        var _this = this;
        if (this.editMode == false) {
            this.dialogs.push(this.editedItem);
        }
        this.dialogService.saveDialog(this.dialogs)
            .subscribe(function (response) {
            console.log(response);
            _this.dFlag = false;
        }, function (error) { return console.log(error); });
    };
    DialogComponent.prototype.onSaveDialog = function () {
        this.dialogItem.entityType = this.dialogForm.controls['entityType'].value;
        this.dialogItem.response = this.dialogForm.controls['response'].value;
        ;
        if (this.editMode == false) {
            this.editedItem.dialog.push(this.dialogItem);
        }
        this.saveDialogFile();
    };
    DialogComponent.prototype.onDeleteDialog = function (index) {
        this.dialogs.splice(index, 1);
        this.saveDialogFile();
        this.dFlag = false;
        this.rFlag = false;
    };
    DialogComponent.prototype.onDeleteResponse = function (index) {
        this.editedItem.dialog.splice(index, 1);
        this.saveDialogFile();
    };
    DialogComponent.prototype.saveDialogFile = function () {
        var _this = this;
        this.dialogService.saveDialog(this.dialogs)
            .subscribe(function (response) {
            console.log(response);
            _this.dialogItem = { "entityType": "", "response": "" };
            _this.dialogForm.reset();
            _this.editMode = false;
        }, function (error) { return console.log(error); });
    };
    DialogComponent.prototype.reloadTraining = function () {
        this.dialogService.reloadTraining()
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
    };
    DialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-response',
            template: __webpack_require__("./src/app/dialog/dialog.component.html"),
            styles: [__webpack_require__("./src/app/dialog/dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dialog_service__["a" /* DialogService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/dialog/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_setting__ = __webpack_require__("./src/app/app.setting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DialogService = /** @class */ (function () {
    function DialogService(http) {
        this.http = http;
        this.dialogChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    DialogService.prototype.saveDialog = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'dialog', data, { headers: headers });
    };
    DialogService.prototype.getDialog = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'dialog')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    DialogService.prototype.getEntity = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'entity')
            .map(function (response) {
            var data = response.json();
            var entityData = [];
            for (var i = 0; i < data.length; i++) {
                entityData.push({ entityType: data[i].entityType });
            }
            return entityData;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    DialogService.prototype.reloadTraining = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'reload')
            .map(function (response) { return response.json(); });
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/entity/entity-form/entity-form.component.css":
/***/ (function(module, exports) {

module.exports = ".entity-full-width {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/entity/entity-form/entity-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 mat-dialog-title>Entity Form</h3>\n<mat-dialog-content [formGroup]=\"entityForm\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <mat-form-field class=\"entity-full-width\">\n        <input matInput placeholder=\"Entity Type\" formControlName=\"entityType\">\n      </mat-form-field>\n    </div>      \n  </div> \n  <div class=\"row\">\n      <div class=\"col-md-12\">\n        <mat-form-field class=\"entity-full-width\">\n          <input matInput placeholder=\"Repository\" formControlName=\"repository\">\n        </mat-form-field>\n      </div>      \n  </div>\n  <div class=\"row\" *ngIf=\"entityForm.value.repository=='remote'\">\n    <div class=\"col-md-12\">\n      <mat-form-field class=\"entity-full-width\">\n        <input matInput placeholder=\"API Endpoint\" formControlName=\"apiurl\">\n      </mat-form-field>\n    </div>      \n  </div>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button (click)=\"close()\">Close</button>\n  <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\n</mat-dialog-actions>\n<br>"

/***/ }),

/***/ "./src/app/entity/entity-form/entity-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EntityFormComponent = /** @class */ (function () {
    function EntityFormComponent(fb, dialogRef, data) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.formData = { entityType: "", repository: "", apiurl: "" };
        this.formData = data;
    }
    EntityFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    EntityFormComponent.prototype.initForm = function () {
        this.entityForm = this.fb.group({
            entityType: [this.formData.entityType, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].nullValidator],
            repository: [this.formData.repository, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].nullValidator],
            apiurl: [this.formData.apiurl]
        });
    };
    EntityFormComponent.prototype.save = function () {
        this.dialogRef.close(this.entityForm.value);
    };
    EntityFormComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EntityFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-entity-form',
            template: __webpack_require__("./src/app/entity/entity-form/entity-form.component.html"),
            styles: [__webpack_require__("./src/app/entity/entity-form/entity-form.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogRef */], Object])
    ], EntityFormComponent);
    return EntityFormComponent;
}());



/***/ }),

/***/ "./src/app/entity/entity.component.css":
/***/ (function(module, exports) {

module.exports = ".entity-form {\r\n    width: 100%;\r\n  }\r\n  \r\n  .entity-full-width {\r\n    width: 100%;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/entity/entity.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <h4>Entities</h4>\n            </div>\n            <div class=\"col-md-2\">\n              <button class=\"btn btn-link\" (click)=\"onAddItem()\">Add Entity</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <table class=\"table table-hover\" id=\"myTable\">\n              <thead><tr><th>Entity Type</th><th></th><th></th><th></th></tr></thead>\n              <tbody>\n              <tr *ngFor=\"let entity of entities; let i = index\" [attr.data-index]=\"i\">\n                <td width=\"20%\">{{ entity.entityType }}</td>\n                <td width=\"10%\">\n                  <a style=\"cursor: pointer\" (click)=\"manageInput(entity)\">Input</a>\n                </td>\n                <td width=\"5%\">\n                  <a title=\"Edit\" style=\"cursor: pointer\" (click)=\"onEditItem(entity)\"><i class=\"glyphicon glyphicon-edit\"></i></a>\n                </td>\n                <td width=\"5%\">\n                  <a title=\"Delete\" style=\"cursor: pointer\" (click)=\"onDeleteEntity(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                </td>\n              </tr>\n              </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"col-md-5\">\n    <div *ngIf=\"iFlag==true\" class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <h4>Inputs - {{editedItem.entityType}}</h4>\n          </div>\n          <div class=\"col-md-4\">\n            <button class=\"btn btn-link\" (click)=\"reloadTraining()\">Refresh Training</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"panel-body\" *ngIf=\"editedItem.repository=='local'\">\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Your input\" [(ngModel)]=\"inputItem.text\" class=\"form-control\">\n                </div>\n            </div>\n            <div *ngIf=\"editMode==false\" class=\"col-md-2\">\n                <button class=\"btn btn-primary\" (click)=\"onSaveInput()\">Add</button>\n            </div>\n            <div *ngIf=\"editMode==true\" class=\"col-md-2\">\n                <button class=\"btn btn-primary\" (click)=\"onSaveInput()\">Save</button>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <table class=\"table table-hover\" id=\"queryTable\">\n              <tbody>\n              <tr *ngFor=\"let input of editedItem.input; let i = index\" [attr.data-index]=\"i\">\n                <td width=\"90%\">{{ input.text }}</td>\n                <td width=\"5%\">\n                  <a title=\"Edit\" style=\"cursor: pointer\" (click)=\"onEditInput(input)\"><i class=\"glyphicon glyphicon-edit\"></i></a>\n                </td>\n                <td width=\"5%\">\n                  <a title=\"Delete\" style=\"cursor: pointer\" (click)=\"onDeleteEntityInput(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"panel-body\" *ngIf=\"editedItem.repository=='remote'\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <table class=\"table table-hover\" id=\"queryTable\">\n              <thead><tr><th>Remote Entity</th></tr></thead>\n              <tbody>\n              <tr *ngFor=\"let input of remoteEntity; let i = index\" [attr.data-index]=\"i\">\n                <td>{{ input.clsname }}</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/entity/entity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entity_service__ = __webpack_require__("./src/app/entity/entity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entity_form_entity_form_component__ = __webpack_require__("./src/app/entity/entity-form/entity-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntityComponent = /** @class */ (function () {
    function EntityComponent(entityService, router, route, dialog) {
        this.entityService = entityService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.eFlag = false;
        this.iFlag = false;
        this.editMode = false;
        this.remoteEntity = [];
        this.entities = [];
    }
    EntityComponent.prototype.ngOnInit = function () {
        var _this = this;
        //loading entity data
        this.onGet();
        this.subscription = this.entityService.entityChanged
            .subscribe(function (m) {
            console.log('Refresh after' + m);
            _this.onSave();
        });
    };
    EntityComponent.prototype.ngAfterViewInit = function () {
        console.log('In JQuery');
        $(document).ready(function () {
            console.log('In Document Ready');
            $('#myTable tbody tr').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    };
    EntityComponent.prototype.onGet = function () {
        var _this = this;
        this.entityService.getEntity()
            .subscribe(function (entities) { return _this.entities = entities; }, function (error) { return console.log(error); });
    };
    EntityComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogConfig = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogConfig */]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "400px";
        if (this.editMode == true)
            dialogConfig.data = { entityType: this.editedItem.entityType, repository: this.editedItem.repository, apiurl: this.editedItem.apiurl };
        else
            dialogConfig.data = { entityType: "", repository: "", apiurl: "" };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__entity_form_entity_form_component__["a" /* EntityFormComponent */], dialogConfig);
        //this.dialog.open(EntityFormComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.editedItem.entityType = data.entityType;
                _this.editedItem.repository = data.repository;
                _this.editedItem.apiurl = data.apiurl;
                _this.onSave();
            }
            else {
                console.log('No Value Return');
            }
        });
    };
    EntityComponent.prototype.onEditItem = function (item) {
        this.editMode = true;
        //this.iFlag = false;
        this.editedItem = item;
        //this.eFlag = true;
        this.openDialog();
    };
    EntityComponent.prototype.onEditInput = function (item) {
        this.editMode = true;
        this.inputItem = item;
    };
    EntityComponent.prototype.onAddItem = function () {
        this.editMode = false;
        //this.iFlag = false;
        this.editedItem = { entityType: "", repository: "", apiurl: "", input: [] };
        //this.eFlag = true;
        this.openDialog();
    };
    EntityComponent.prototype.manageInput = function (item) {
        var _this = this;
        this.editMode = false;
        this.eFlag = false;
        this.editedItem = item;
        this.inputItem = { "text": "", "id": "", "value": "" };
        this.iFlag = true;
        console.log(this.editedItem.repository + ' - ' + this.editedItem.apiurl);
        if (this.editedItem.repository == 'remote') {
            this.entityService.getRemoteEntity(this.editedItem.apiurl)
                .subscribe(function (entities) { return _this.remoteEntity = entities; }, function (error) { return console.log(error); });
        }
    };
    EntityComponent.prototype.onSave = function () {
        if (this.editMode == false) {
            this.entities.push(this.editedItem);
        }
        this.saveEntityFile();
        this.eFlag = false;
    };
    EntityComponent.prototype.onSaveInput = function () {
        if (this.editMode == false) {
            this.editedItem.input.push(this.inputItem);
        }
        this.saveEntityFile();
    };
    EntityComponent.prototype.onDeleteEntity = function (index) {
        this.entities.splice(index, 1);
        this.saveEntityFile();
        this.eFlag = false;
        this.iFlag = false;
    };
    EntityComponent.prototype.onDeleteEntityInput = function (index) {
        this.editedItem.input.splice(index, 1);
        this.saveEntityFile();
    };
    EntityComponent.prototype.saveEntityFile = function () {
        var _this = this;
        this.entityService.saveEntity(this.entities)
            .subscribe(function (response) {
            console.log(response);
            _this.inputItem = { "text": "", "id": "", "value": "" };
            _this.editMode = false;
        }, function (error) { return console.log(error); });
    };
    EntityComponent.prototype.reloadTraining = function () {
        this.entityService.reloadTraining()
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
    };
    EntityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-entity',
            template: __webpack_require__("./src/app/entity/entity.component.html"),
            styles: [__webpack_require__("./src/app/entity/entity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__entity_service__["a" /* EntityService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], EntityComponent);
    return EntityComponent;
}());



/***/ }),

/***/ "./src/app/entity/entity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_setting__ = __webpack_require__("./src/app/app.setting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EntityService = /** @class */ (function () {
    function EntityService(http) {
        this.http = http;
        this.entityChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    EntityService.prototype.saveEntity = function (entity) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'entity', entity, { headers: headers });
    };
    EntityService.prototype.getEntity = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'entity')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    EntityService.prototype.getRemoteEntity = function (url) {
        return this.http.get(url)
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    EntityService.prototype.reloadTraining = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'reload')
            .map(function (response) { return response.json(); });
    };
    EntityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EntityService);
    return EntityService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Wink Configurator</a>\n    </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/intent\">Intent</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/entity\">Entity</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/response\">Dialog</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/nlp\">Chat Bot</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/sdata\">Sample Data</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/intents/intent.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_setting__ = __webpack_require__("./src/app/app.setting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IntentService = /** @class */ (function () {
    function IntentService(http) {
        this.http = http;
        this.intentChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    IntentService.prototype.addIntent = function (intent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'intent', intent, { headers: headers });
    };
    IntentService.prototype.updateIntent = function (intent, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'intent/' + id, intent, { headers: headers });
    };
    IntentService.prototype.updateResponse = function (intent, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        console.log('response fo intent ' + id + ' is being updated');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'intent/response/' + id, intent, { headers: headers });
    };
    IntentService.prototype.deleteIntent = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'intent/' + id, { headers: headers });
    };
    IntentService.prototype.getIntents = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'intents')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    IntentService.prototype.getIntentResponse = function (title) {
        console.log('Getting Intent Response');
        console.log(title);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'intent/response/' + title)
            .map(function (response) {
            //console.log(response.json());
            var data = response.json();
            console.log(data);
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    IntentService.prototype.saveIntent = function (entity) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'intent', entity, { headers: headers });
    };
    IntentService.prototype.getIntent = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'intent')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    IntentService.prototype.reloadTraining = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'reload')
            .map(function (response) { return response.json(); });
    };
    IntentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], IntentService);
    return IntentService;
}());



/***/ }),

/***/ "./src/app/intents/intents.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/intents/intents.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <h4>Intents</h4>\n            </div>\n            <div class=\"col-md-2\">\n              <button class=\"btn btn-link\" (click)=\"onAddItem()\">Add Intent</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <table class=\"table table-hover\" id=\"myTable\">\n              <thead><tr><th>Title</th><th>Purpose</th><th></th><th></th><th></th><th></th></tr></thead>\n              <tbody>\n              <tr *ngFor=\"let intent of intents; let i = index\" [attr.data-index]=\"i\">\n                <td width=\"20%\">{{ intent.title }}</td>\n                <td width=\"50%\">{{ intent.purpose }}</td>\n                <td width=\"10%\">\n                  <a style=\"cursor: pointer\" (click)=\"manageQuery(intent)\">Query</a>\n                </td>\n                <td width=\"5%\">\n                  <a title=\"Edit\" style=\"cursor: pointer\" (click)=\"onEditItem(intent)\"><i class=\"glyphicon glyphicon-edit\"></i></a>\n                </td>\n                <td width=\"5%\">\n                  <a title=\"Delete\" style=\"cursor: pointer\" (click)=\"onDeleteIntent(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                </td>\n              </tr>\n              </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"col-md-5\">\n    <div *ngIf=\"iFlag==true\" class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n         <div class=\"row\">\n            <div class=\"col-md-8\">\n              <h4 *ngIf=\"editMode==true\">Edit Intent</h4>\n              <h4 *ngIf=\"editMode==false\">Add Intent</h4>\n            </div>\n          </div>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Intent Title\" [(ngModel)]=\"editedItem.title\" class=\"form-control\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Define Purpose\" [(ngModel)]=\"editedItem.purpose\" class=\"form-control\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <button class=\"btn btn-primary\" (click)=\"onSave()\">Save</button>\n            </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"qFlag==true\" class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <h4>{{editedItem.title}} - Query</h4>\n          </div>\n          <div class=\"col-md-4\">\n            <button class=\"btn btn-link\" (click)=\"reloadTraining()\">Refresh Training</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div class=\"form-group\">\n                  <input type=\"text\" placeholder=\"Your query\" [(ngModel)]=\"queryItem.text\" class=\"form-control\">\n                </div>\n            </div>\n            <div *ngIf=\"editMode==false\" class=\"col-md-2\">\n                <button class=\"btn btn-primary\" (click)=\"onSaveQuery()\">Add</button>\n            </div>\n            <div *ngIf=\"editMode==true\" class=\"col-md-2\">\n                <button class=\"btn btn-primary\" (click)=\"onSaveQuery()\">Save</button>\n            </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <table class=\"table table-hover\" id=\"queryTable\">\n              <tbody>\n              <tr *ngFor=\"let q of editedItem.query; let i = index\" [attr.data-index]=\"i\">\n                <td width=\"90%\">{{ q.text }}</td>\n                <td width=\"5%\">\n                  <a title=\"Edit\" style=\"cursor: pointer\" (click)=\"onQueryEdit(q)\"><i class=\"glyphicon glyphicon-edit\"></i></a>\n                </td>\n                <td width=\"5%\">\n                  <a title=\"Delete\" style=\"cursor: pointer\" (click)=\"onDeleteIntentQuery(i)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                </td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/intents/intents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__intent_service__ = __webpack_require__("./src/app/intents/intent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IntentsComponent = /** @class */ (function () {
    function IntentsComponent(intentService, router, route) {
        this.intentService = intentService;
        this.router = router;
        this.route = route;
        this.iFlag = false;
        this.qFlag = false;
        this.editMode = false;
        this.intents = [];
    }
    IntentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //loading users data
        this.onGet();
        this.subscription = this.intentService.intentChanged
            .subscribe(function (m) {
            console.log('Refresh after' + m);
            _this.onGet();
        });
    };
    IntentsComponent.prototype.ngAfterViewInit = function () {
        console.log('In JQuery');
        $(document).ready(function () {
            console.log('In Document Ready');
            $('#myTable tbody tr').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        });
    };
    IntentsComponent.prototype.onGet = function () {
        var _this = this;
        this.intentService.getIntent()
            .subscribe(function (intents) { return _this.intents = intents; }, function (error) { return console.log(error); });
    };
    IntentsComponent.prototype.onEditItem = function (item) {
        this.editMode = true;
        this.qFlag = false;
        this.editedItem = item;
        this.iFlag = true;
    };
    IntentsComponent.prototype.onQueryEdit = function (item) {
        this.editMode = true;
        this.queryItem = item;
    };
    IntentsComponent.prototype.onAddItem = function () {
        this.editMode = false;
        this.qFlag = false;
        this.editedItem = { "title": "", "purpose": "", "query": [] };
        this.iFlag = true;
    };
    IntentsComponent.prototype.manageQuery = function (item) {
        this.editMode = false;
        this.iFlag = false;
        this.editedItem = item;
        this.queryItem = { "text": "" };
        this.qFlag = true;
    };
    IntentsComponent.prototype.onSave = function () {
        if (this.editMode == false) {
            this.intents.push(this.editedItem);
        }
        this.saveIntentFile();
        this.iFlag = false;
    };
    IntentsComponent.prototype.onSaveQuery = function () {
        if (this.editMode == false) {
            this.editedItem.query.push(this.queryItem);
        }
        this.saveIntentFile();
    };
    IntentsComponent.prototype.onDeleteIntent = function (index) {
        this.intents.splice(index, 1);
        this.saveIntentFile();
        this.iFlag = false;
        this.qFlag = false;
    };
    IntentsComponent.prototype.onDeleteIntentQuery = function (index) {
        this.editedItem.query.splice(index, 1);
        this.saveIntentFile();
    };
    IntentsComponent.prototype.saveIntentFile = function () {
        var _this = this;
        this.intentService.saveIntent(this.intents)
            .subscribe(function (response) {
            console.log(response);
            _this.queryItem = { "text": "" };
            _this.editMode = false;
        }, function (error) { return console.log(error); });
    };
    IntentsComponent.prototype.reloadTraining = function () {
        this.intentService.reloadTraining()
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
    };
    IntentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intents',
            template: __webpack_require__("./src/app/intents/intents.component.html"),
            styles: [__webpack_require__("./src/app/intents/intents.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__intent_service__["a" /* IntentService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], IntentsComponent);
    return IntentsComponent;
}());



/***/ }),

/***/ "./src/app/nlp/nlp.component.css":
/***/ (function(module, exports) {

module.exports = ".chatbox {\r\n    width: 500px;\r\n    min-width: 390px;\r\n    height: 600px;\r\n    background: #fff;\r\n    padding: 5px;\r\n    margin: 5px auto;\r\n    -webkit-box-shadow: 0 3px #ccc;\r\n            box-shadow: 0 3px #ccc;\r\n}\r\n\r\n.chatlogs {\r\n    padding: 2px;\r\n    width: 100%;\r\n    height: 450px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.chatlogs::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n.chatlogs::-webkit-scrollbar-thumb {\r\n    border-radius: 5px;\r\n    background: rgba(0,0,0,.1);\r\n}\r\n\r\n.chat {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.chat .user-photo {\r\n    width: 60px;\r\n    height: 60px;\r\n    background: #ccc;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n}\r\n\r\n.chat .user-photo img {\r\n    width: 100%;\r\n}\r\n\r\n.chat .chat-message {\r\n    width: 80%;\r\n    padding: 15px;\r\n    margin: 5px 10px 0;\r\n    border-radius: 10px;\r\n    color: #fff;\r\n    font-size: 14px;\r\n}\r\n\r\n.friend .chat-message {\r\n    background: #1adda4;\r\n}\r\n\r\n.self .chat-message {\r\n    background: #1ddced;\r\n    -webkit-box-ordinal-group: 0;\r\n        -ms-flex-order: -1;\r\n            order: -1;\r\n}\r\n\r\n.jsonlogs {\r\n    padding: 2px;\r\n    width: 100%;\r\n    height: 450px;\r\n    overflow-x: hidden;\r\n    overflow-y: scroll;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.jsonlogs::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n.jsonlogs::-webkit-scrollbar-thumb {\r\n    border-radius: 5px;\r\n    background: rgba(0,0,0,.1);\r\n}"

/***/ }),

/***/ "./src/app/nlp/nlp.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n        <div class=\"chatbox\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"chatlogs\" id=\"mychat\">\n                <div *ngFor=\"let om of outMessages\">\n                    <div *ngIf=\"om.cls=='S'\" class=\"chat self\">\n                      <div class=\"user-photo\"></div>\n                      <p class=\"chat-message\">{{om.txt}}</p>\n                    </div>\n                    <div *ngIf=\"om.cls=='F'\" class=\"chat friend\">\n                      <div class=\"user-photo\"></div>\n                      <p class=\"chat-message\">{{om.txt}}</p>\n                    </div>\n                </div>\n                <br><br><br><br>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n          <form [formGroup]=\"chatForm\" (ngSubmit)=\"predictQuery()\">\n            <div class=\"col-md-10\">\n              <div class=\"form-group\">\n                <input formControlName=\"query\" type=\"text\" placeholder=\"Your the queries\" class=\"form-control\">\n              </div>\n            </div>\n            <div class=\"col-md-2\" align=\"left\">\n                <button class=\"btn btn-primary\" type=\"submit\">Send</button>\n            </div>\n          </form>\n          </div>\n        </div>\n    </div>\n    </div>\n  </div>\n  <div class=\"col-md-5\">\n    <div class=\"panel panel-success\" *ngIf=\"resOutput!=''\">\n      <div class=\"panel-heading\">NLP Output</div>\n      <div class=\"panel-body\">\n        <pre>{{resOutput}}</pre>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/nlp/nlp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NlpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nlp_service__ = __webpack_require__("./src/app/nlp/nlp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intents_intent_service__ = __webpack_require__("./src/app/intents/intent.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NlpComponent = /** @class */ (function () {
    function NlpComponent(nlpService, intentService, fb) {
        this.nlpService = nlpService;
        this.intentService = intentService;
        this.fb = fb;
        //result = {'intent':'', 'response':''};
        this.intentOutput = '';
        this.uintent = 0;
        this.outMessages = [{ "cls": "F", "txt": "Welcome to chat bot" }];
        this.resOutput = '';
    }
    NlpComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.subscription = this.nlpService.nlpChanged
            .subscribe(function () {
            console.log('Refresh after deletion');
        });
    };
    NlpComponent.prototype.ngAfterViewInit = function () {
        console.log('In JQuery');
        var mydiv = $("mychat");
        mydiv.scrollTop(mydiv.prop("scrollHeight"));
    };
    NlpComponent.prototype.scrolltoTop = function () {
        var mydiv = document.getElementById("mychat");
        //mydiv.scrollTop(mydiv.prop("scrollHeight"));
        //alert(mydiv.scrollHeight);
        mydiv.scrollTop = mydiv.scrollHeight;
    };
    NlpComponent.prototype.initForm = function () {
        this.chatForm = this.fb.group({
            query: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    NlpComponent.prototype.predictQuery = function () {
        var _this = this;
        var str = this.chatForm.value.query;
        this.setOutputText(str, 'S');
        this.nlpService.predict({ query: str })
            .subscribe(function (result) {
            _this.intentOutput = result.intent;
            _this.resOutput = JSON.stringify(result, undefined, 2);
            if (_this.intentOutput != 'unknown') {
                _this.uintent = 0;
                //this.setOutputText(this.intentOutput, 'F');
                _this.nlpService.compileResponse(result).subscribe(function (res) {
                    _this.setOutputText(res.response, 'F');
                }, function (error) { return console.log(error); });
            }
            else {
                if (_this.uintent > 0)
                    _this.setOutputText("Sorry, we couln't answer your query, our support staff will get back to you", 'F');
                else {
                    _this.setOutputText("We are unable to understand your, please clarify your ask", 'F');
                    _this.uintent++;
                }
            }
        }, function (error) { return console.log(error); });
        this.chatForm.setValue({
            query: ""
        });
    };
    NlpComponent.prototype.setOutputText = function (str, rtype) {
        this.outMessages.push({ "cls": rtype, "txt": str });
        setTimeout(this.scrolltoTop(), 1000);
        //this.scrolltoTop();
    };
    NlpComponent.prototype.eventHandler = function (keycode, str) {
        //alert(keycode);
        if (keycode == 13) {
            this.predictQuery();
        }
    };
    NlpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nlp',
            template: __webpack_require__("./src/app/nlp/nlp.component.html"),
            styles: [__webpack_require__("./src/app/nlp/nlp.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__nlp_service__["a" /* NlpService */], __WEBPACK_IMPORTED_MODULE_3__intents_intent_service__["a" /* IntentService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], NlpComponent);
    return NlpComponent;
}());



/***/ }),

/***/ "./src/app/nlp/nlp.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NlpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_setting__ = __webpack_require__("./src/app/app.setting.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NlpService = /** @class */ (function () {
    function NlpService(http) {
        this.http = http;
        this.nlpChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    NlpService.prototype.predict = function (query) {
        var body = JSON.stringify(query);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'predict/', body, { headers: headers })
            .map(function (response) {
            var data = response.json();
            console.log(data);
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    NlpService.prototype.compileResponse = function (data) {
        console.log('In compile response');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var entity = this.findEntity(data.entity);
        console.log(entity);
        var userContext = { intent: "undefind", entityType: "none", entityValue: "" };
        if (entity != null) {
            userContext = { intent: data.intent, entityType: entity.entityType, entityValue: entity.value };
        }
        else {
            userContext = { intent: data.intent, entityType: "none", entityValue: "" };
        }
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].API_ENDPOINT + 'dialog/response', userContext, { headers: headers })
            .map(function (response) {
            var data = response.json();
            console.log(data);
            console.log("Entity Value " + userContext.entityValue);
            data.response = data.response.replace("@entity", userContext.entityValue);
            console.log(data);
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    NlpService.prototype.findEntity = function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].entityType) {
                console.log(data[i].entityType);
                return data[i];
            }
        }
        return null;
    };
    NlpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NlpService);
    return NlpService;
}());



/***/ }),

/***/ "./src/app/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = __WEBPACK_IMPORTED_MODULE_0_underscore__["range"](startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "./src/app/sdata/sdata-form/sdata-form.component.css":
/***/ (function(module, exports) {

module.exports = ".querybox {\r\n    height: 200px;\r\n    background: #fff;\r\n    padding: 5px;\r\n    margin: 100px auto;\r\n}"

/***/ }),

/***/ "./src/app/sdata/sdata-form/sdata-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"querybox\">\n<div class=\"row\">\n  <form [formGroup]=\"queryForm\" (ngSubmit)=\"doSave()\">\n    <div class=\"col-md-3\">\n    </div>\n    <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <input formControlName=\"query\" id=\"txtQuery\" type=\"text\" placeholder=\"Your queries\" class=\"form-control\">\n        </div>\n    </div>      \n    <div class=\"col-md-2\">\n        <button class=\"btn btn-primary\" id=\"send-btn\" type=\"submit\">Save</button>\n    </div>\n    <div class=\"col-md-3\">\n    </div>    \n  </form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/sdata/sdata-form/sdata-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdataFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sdata_service__ = __webpack_require__("./src/app/sdata/sdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SdataFormComponent = /** @class */ (function () {
    function SdataFormComponent(sdataService, router, route, fb) {
        this.sdataService = sdataService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.showSaveButton = false;
        //this.startDictation();
    }
    SdataFormComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    SdataFormComponent.prototype.initForm = function () {
        this.queryForm = this.fb.group({
            query: ["", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    };
    SdataFormComponent.prototype.doSave = function () {
        var _this = this;
        //console.log(event);
        this.sdataService.addQuery(this.queryForm.value)
            .subscribe(function (response) {
            console.log(response);
            _this.queryForm.patchValue({
                query: ""
            });
            _this.showSaveButton = false;
        }, function (error) { return console.log(error); });
    };
    SdataFormComponent.prototype.startDictation = function () {
        //this.showSaveButton = false;
        var _this = this;
        this.sdataService.record()
            .subscribe(
        //listener
        function (value) {
            //this.speechData = value;
            console.log(value);
            _this.queryForm.patchValue({
                query: value
            });
            _this.showSaveButton = true;
        }, 
        //errror
        function (err) {
            console.log(err);
            if (err.error == "no-speech") {
                console.log("--restatring service--");
                _this.startDictation();
            }
        }, 
        //completion
        function () {
            _this.showSaveButton = false;
            console.log("--complete--");
            _this.startDictation();
        });
    };
    SdataFormComponent.prototype.ngOnDestroy = function () {
        this.sdataService.DestroySpeechObject();
    };
    SdataFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sdata-form',
            template: __webpack_require__("./src/app/sdata/sdata-form/sdata-form.component.html"),
            styles: [__webpack_require__("./src/app/sdata/sdata-form/sdata-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sdata_service__["a" /* SdataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], SdataFormComponent);
    return SdataFormComponent;
}());



/***/ }),

/***/ "./src/app/sdata/sdata.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sdata/sdata.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"row\">\n  <div class=\"col-md-7\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <div class=\"row\">\n            <div class=\"col-md-10\">\n              <h4>Sample Data</h4>\n            </div>\n            <div class=\"col-md-2\">\n              <button class=\"btn btn-link\" (click)=\"downloadData()\">Download</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"panel-body\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <table class=\"table table-hover\" id=\"myTable\">\n              <thead><tr><th>Regular Statements</th><th></th></tr></thead>\n              <tbody>\n              <tr *ngFor=\"let item of pagedItems\">\n                <td>{{ item.query }}</td>\n                <td>\n                    <a title=\"Delete\" style=\"cursor: pointer\" (click)=\"onDeleteItem(item.id)\"><i class=\"glyphicon glyphicon-trash\"></i></a>\n                </td>\n\n              </tr>\n              </tbody>\n              </table>\n                         <!-- pager -->\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                    <a (click)=\"setPage(1)\">First</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n                </li>\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n                    <a (click)=\"setPage(page)\">{{page}}</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n                </li>\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                    <a (click)=\"setPage(pager.totalPages)\">Last</a>\n                </li>\n            </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sdata/sdata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sdata_service__ = __webpack_require__("./src/app/sdata/sdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pager_service__ = __webpack_require__("./src/app/pager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SdataComponent = /** @class */ (function () {
    function SdataComponent(sdataService, pagerService, router, route) {
        this.sdataService = sdataService;
        this.pagerService = pagerService;
        this.router = router;
        this.route = route;
        // pager object
        this.pager = {};
        this.queries = [];
    }
    SdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getQueryList();
        this.subscription = this.sdataService.queryChanged
            .subscribe(function () {
            console.log('Refresh Query List');
            _this.getQueryList();
        });
    };
    SdataComponent.prototype.getQueryList = function () {
        var _this = this;
        this.sdataService.getQueries()
            .subscribe(function (queries) {
            _this.queries = queries;
            // set items to json response
            _this.allItems = queries;
            // initialize to page 1
            _this.setPage(1);
        }, function (error) { return console.log(error); });
    };
    SdataComponent.prototype.downloadData = function () {
        /*  var options = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: false,
          showTitle: false
          };
          new Angular2Csv(this.queries, 'Sample Data',options);
          //new Angular2Csv(dummyData, 'My Report',options);
          */
    };
    SdataComponent.prototype.onDeleteItem = function (id) {
        var _this = this;
        console.log("Delete item for :- " + id);
        this.sdataService.deleteQuery(id).subscribe(function (response) {
            console.log(response);
            _this.sdataService.queryChanged.next();
        }, function (error) { return console.log(error); });
    };
    SdataComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    SdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sdata',
            template: __webpack_require__("./src/app/sdata/sdata.component.html"),
            styles: [__webpack_require__("./src/app/sdata/sdata.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__sdata_service__["a" /* SdataService */], __WEBPACK_IMPORTED_MODULE_4__pager_service__["a" /* PagerService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SdataComponent);
    return SdataComponent;
}());



/***/ }),

/***/ "./src/app/sdata/sdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_setting__ = __webpack_require__("./src/app/app.setting.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SdataService = /** @class */ (function () {
    function SdataService(http, zone) {
        this.http = http;
        this.zone = zone;
        this.queryChanged = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["b" /* Subject */]();
    }
    SdataService.prototype.record = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            //this.speechRecognition = SpeechRecognition;
            _this.speechRecognition.continuous = true;
            //this.speechRecognition.interimResults = true;
            _this.speechRecognition.lang = 'en-us';
            _this.speechRecognition.maxAlternatives = 1;
            _this.speechRecognition.onresult = function (speech) {
                var term = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("Unrecognized result - Please try again");
                        }
                        else {
                            term = __WEBPACK_IMPORTED_MODULE_6_lodash__["trim"](transcript);
                            console.log("Did you said? -> " + term + " , If not then say something else...");
                        }
                    }
                }
                _this.zone.run(function () {
                    console.log('Go for next statment');
                    observer.next(term);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                observer.complete();
            };
            _this.speechRecognition.start();
            console.log("Say something - We are listening !!!");
        });
    };
    SdataService.prototype.DestroySpeechObject = function () {
        if (this.speechRecognition)
            this.speechRecognition.stop();
    };
    SdataService.prototype.addQuery = function (query) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].CLOUDAPI_ENDPOINT + 'sdata', query, { headers: headers });
    };
    SdataService.prototype.getQueries = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].CLOUDAPI_ENDPOINT + 'sdata')
            .map(function (response) {
            var data = response.json();
            return data;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw('Something went wrong');
        });
    };
    SdataService.prototype.deleteQuery = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
        //   servers,
        //   {headers: headers});
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_5__app_setting__["a" /* AppSetting */].CLOUDAPI_ENDPOINT + 'sdata/' + id, { headers: headers });
    };
    SdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], SdataService);
    return SdataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map