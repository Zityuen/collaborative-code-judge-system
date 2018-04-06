webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
// src/app/app.component.ts
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

var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.auth.handleAuthentication();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])('auth')), 
        __metadata('design:paramtypes', [Object])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_problem_list_problem_list_component__ = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_problem_detail_problem_detail_component__ = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_new_problem_new_problem_component__ = __webpack_require__("./src/app/components/new-problem/new-problem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_editor_editor_component__ = __webpack_require__("./src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_collaboration_service__ = __webpack_require__("./src/app/services/collaboration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_search_pipe__ = __webpack_require__("./src/app/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_input_service__ = __webpack_require__("./src/app/services/input.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_problem_list_problem_list_component__["a" /* ProblemListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_new_problem_new_problem_component__["a" /* NewProblemComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_editor_editor_component__["a" /* EditorComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_search_pipe__["a" /* SearchPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */]
            ],
            providers: [{
                    provide: "data",
                    useClass: __WEBPACK_IMPORTED_MODULE_8__services_data_service__["a" /* DataService */]
                }, {
                    provide: "auth",
                    useClass: __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */]
                }, __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */],
                {
                    provide: "authGuard",
                    useClass: __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuardService */]
                },
                __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuardService */],
                {
                    provide: "collaboration",
                    useClass: __WEBPACK_IMPORTED_MODULE_15__services_collaboration_service__["a" /* CollaborationService */]
                },
                {
                    provide: "input",
                    useClass: __WEBPACK_IMPORTED_MODULE_17__services_input_service__["a" /* InputService */]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/app.module.js.map

/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__ = __webpack_require__("./src/app/components/problem-list/problem-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__ = __webpack_require__("./src/app/components/problem-detail/problem-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");





var routes = [
    {
        path: "",
        redirectTo: "problems",
        pathMatch: "full"
    },
    {
        path: "problems",
        component: __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__["a" /* ProblemListComponent */]
    },
    {
        path: "problems/:id",
        component: __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */]
    },
    {
        path: "profile",
        component: __WEBPACK_IMPORTED_MODULE_3__components_profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: "**",
        redirectTo: "problems"
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/app.routes.js.map

/***/ }),

/***/ "./src/app/components/editor/editor.component.css":
/***/ (function(module, exports) {

module.exports = "@media screen {\n  #editor {\n    height: 600px;\n  }\n  .lang-select{\n    width: 100px;\n  }\n  header .btn{\n    margin: 0 5px;\n  }\n  footer .btn{\n    margin: 0 5px;\n  }\n  .editor-footer, .editor-header{\n    margin: 10px 0;\n  }\n\n  .cursor {\n    background: rgba(0, 250, 0, 0.5);\n    z-index: 40;\n    width: 2px!important;\n  }\n}\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <header class=\"editor-header\">\n    <select class=\"form-control pull-left lang-select\" name=\"language\" [(ngModel)]=\"language\" (change)=\"setLanguage(language)\">\n      <option *ngFor=\"let language of languages\" [value]=\"language\">\n        {{language}}\n      </option>\n    </select>\n\n\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n    </button>\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\" id=\"myModelLabel\">Reset</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            You will lose current code in the window, are you sure?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"resetEditor()\">Reset</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"row\">\n    <div id=\"editor\">\n\n    </div>\n  </div>\n\n  <div >\n    <h3 class=\"display-2\">Build Info</h3>\n    <input class=\"form-control\" type=\"text\" placeholder=\"{{output.build}}\" readonly>\n    <h3 class=\"display-2\">Output</h3>\n    <input class=\"form-control\" type=\"text\" placeholder=\"{{output.run}}\" readonly>\n  </div>\n\n\n  <footer class=\"editor-footer\">\n    <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"submit()\">Submit Solution</button>\n  </footer>\n</section>\n"

/***/ }),

/***/ "./src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
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


var EditorComponent = (function () {
    function EditorComponent(collaboration, data, route) {
        this.collaboration = collaboration;
        this.data = data;
        this.route = route;
        this.languages = ['Java', 'C++', 'Python'];
        this.languageModel = {
            'Java': 'java',
            'C++': 'c_cpp',
            'Python': 'python'
        };
        this.language = 'Java';
        this.defaultContent = {
            'Java': "public class Example{\n      public static void main(String[] args){\n        //Type your code here\n      }\n    }",
            'C++': "#include <iostream>\n  using namespace std;\n  int main(){\n  //Type your C++ code here\n      return 0;\n  }",
            'Python': "class Solution:\n    def example():\n        #Write your Python code here"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.resetEditor();
        this.editor.$blockScrolling = Infinity;
        document.getElementsByTagName('textarea')[0].focus();
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        this.editor.on('change', function (e) {
            console.log('editor changes: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
        this.editor.getSession().getSelection().on("changeCursor", function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            console.log('cursor moves: ' + JSON.stringify(cursor));
            _this.collaboration.cursorMove(JSON.stringify(cursor));
        });
        this.collaboration.restoreBuffer();
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.resetEditor = function () {
        this.editor.getSession().setMode('ace/mode/' + this.languageModel[this.language]);
        this.editor.setValue(this.defaultContent[this.language]);
        this.output = '';
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        var userCode = this.editor.getValue();
        var data = {
            user_code: userCode,
            lang: this.language.toLowerCase()
        };
        this.data.buildAndRun(data)
            .then(function (res) { return _this.output = res; });
        // console.log(userCode);
    };
    EditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-editor',
            template: __webpack_require__("./src/app/components/editor/editor.component.html"),
            styles: [__webpack_require__("./src/app/components/editor/editor.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])('collaboration')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])('data')), 
        __metadata('design:paramtypes', [Object, Object, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object])
    ], EditorComponent);
    return EditorComponent;
    var _a;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/editor.component.js.map

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div >\n  <input class=\"form-control\" type=\"text\" placeholder=\"Admin account: admin0@gmail.com   User account: user0@gmail.com  password: 123QWEasd\" readonly>\n </div>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n        <form class=\"navbar-form navbar-left\" (ngSubmit)=\"searchProblem()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Problem\" [formControl]=\"searchBox\">\n          </div>\n        </form>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li>\n            <form class=\"navbar-form\" >\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!auth.isAuthenticated()\" (click)=\"login()\">Sign in</button>\n            </form>\n          </li>\n          <li class=\"dropdown\" *ngIf=\"auth.isAuthenticated()\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{username}}<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/profile\">My Profile</a></li>\n              <li><a href=\"#\">My Favorites</a></li>\n              <li><a href=\"#\">My Submissions</a></li>\n              <li role=\"separator\" class=\"divider\"></li>\n              <li><a href=\"#\" (click)=\"logout()\">Log out</a></li>\n            </ul>\n          </li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
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




var NavbarComponent = (function () {
    function NavbarComponent(auth, input, router) {
        this.auth = auth;
        this.input = input;
        this.router = router;
        this.title = "COJ";
        this.username = "";
        this.searchBox = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.isAuthenticated()) {
            this.username = this.auth.getProfile().nickname;
        }
        this.subscription = this.searchBox.valueChanges.debounceTime(300).subscribe(function (term) {
            _this.input.changeInput(term);
        });
    };
    NavbarComponent.prototype.ngOnDestory = function () {
        this.subscription.unsubscribe();
    };
    NavbarComponent.prototype.searchProblem = function () {
        this.router.navigate(['/problems']);
    };
    NavbarComponent.prototype.login = function () {
        localStorage.setItem('curLocation', window.location.href);
        this.auth.login();
        this.username = this.auth.getProfile().nickname;
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        localStorage.removeItem('curLocation');
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])('auth')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])('input')), 
        __metadata('design:paramtypes', [Object, Object, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/navbar.component.js.map

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authGuard.isAdmin()\">\n  <form #formRef=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemName\">Problem Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"problemName\"\n      name=\"problemName\" required placeholder=\"Enter Problem Name\" [(ngModel)]=\"newProblem.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">Problem Description</label>\n      <textarea type=\"text\" row=\"3\" class=\"form-control\" id=\"problemDesc\"\n                name=\"problemDesc\" required placeholder=\"Enter Problem Description\" [(ngModel)]=\"newProblem.desc\"></textarea>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"difficulty\">Difficulty</label>\n      <select name=\"difficulty\" id=\"difficulty\" class=\"form-control\" [(ngModel)]=\"newProblem.difficulty\">\n        <option *ngFor=\"let difficulty of difficulties\" [value]=\"difficulty\">\n          {{difficulty}}\n        </option>\n      </select>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\" (click)=\"addProblem()\">Add Problem</button>\n      </div>\n    </div>\n  </form>\n  <hr>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-problem/new-problem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProblemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
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

var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: "",
    desc: "",
    difficulty: "Easy"
});
var NewProblemComponent = (function () {
    function NewProblemComponent(data, authGuard) {
        this.data = data;
        this.authGuard = authGuard;
        this.difficulties = ["Easy", "Medium", "Hard", "Super"];
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.data.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error.body); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    NewProblemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-new-problem',
            template: __webpack_require__("./src/app/components/new-problem/new-problem.component.html"),
            styles: [__webpack_require__("./src/app/components/new-problem/new-problem.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])("data")),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])('authGuard')), 
        __metadata('design:paramtypes', [Object, Object])
    ], NewProblemComponent);
    return NewProblemComponent;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/new-problem.component.js.map

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"col-xs-12 col-md-4\">\n    <div>\n      <h2>\n        {{problem.id}}.{{problem.name}}\n      </h2>\n      <p>\n        {{problem.desc}}\n      </p>\n      <br />\n    </div>\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-editor>\n\n    </app-editor>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-detail/problem-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
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


var ProblemDetailComponent = (function () {
    function ProblemDetailComponent(route, data) {
        this.route = route;
        this.data = data;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    ProblemDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-problem-detail',
            template: __webpack_require__("./src/app/components/problem-detail/problem-detail.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-detail/problem-detail.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])("data")), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, Object])
    ], ProblemDetailComponent);
    return ProblemDetailComponent;
    var _a;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/problem-detail.component.js.map

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.css":
/***/ (function(module, exports) {

module.exports = ".difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.diff-easy {\n  background-color: #42ebf4;\n}\n\n.diff-medium {\n  background-color: #92cf5c;\n}\n\n.diff-hard {\n  background-color: #dd0d1e;\n}\n\n.diff-super {\n  background-color: #8d16e2;\n}\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-new-problem></app-new-problem>\n  <div class=\"list-group\">\n  <a class=\"list-group-item\" *ngFor=\"let problem of problems | search: searchTerm\" [routerLink]=\"['/problems', problem.id]\">\n    <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">{{problem.difficulty | uppercase}}</span>\n    <strong class=\"titler\">{{problem.id}}.{{problem.name}}</strong>\n  </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/problem-list/problem-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
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

var ProblemListComponent = (function () {
    function ProblemListComponent(data, input) {
        this.data = data;
        this.input = input;
        this.problems = [];
        this.searchTerm = '';
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
        this.getSearchTerm();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.data.getProblems().subscribe(function (problems) { return _this.problems = problems; });
    };
    ProblemListComponent.prototype.getSearchTerm = function () {
        var _this = this;
        this.subscriptionInput = this.input.getInput().subscribe(function (inputTerm) {
            _this.searchTerm = inputTerm;
        });
    };
    ProblemListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-problem-list',
            template: __webpack_require__("./src/app/components/problem-list/problem-list.component.html"),
            styles: [__webpack_require__("./src/app/components/problem-list/problem-list.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])("data")),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])('input')), 
        __metadata('design:paramtypes', [Object, Object])
    ], ProblemListComponent);
    return ProblemListComponent;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/problem-list.component.js.map

/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ul class=\"nav nav-pills\">\n    <li class=\"active\"><a data-toggle=\"pill\" href=\"#profile\">Personal Information</a></li>\n    <li><a data-toggle=\"pill\" href=\"#password\">Change Password</a></li>\n  </ul>\n  <hr>\n\n  <div class=\"tab-content\">\n    <div id=\"profile\" class=\"tab-pane fade in active\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" id=\"email\"\n               name=\"email\" value=\"{{email}}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"username\">User name</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\"\n               name=\"username\" value=\"{{username}}\">\n      </div>\n    </div>\n    <div id=\"password\" class=\"tab-pane fade\">\n      <form class=\"navbar-form\">\n        <button type=\"button\" class=\"btn btn-large btn-success\" (click)=\"resetPassword()\">Reset password via email</button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
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

var ProfileComponent = (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.email = '';
        this.username = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var profile = this.auth.getProfile();
        this.email = profile.email;
        this.username = profile.nickname;
    };
    ProfileComponent.prototype.resetPassword = function () {
        this.auth.resetPassword();
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])('auth')), 
        __metadata('design:paramtypes', [Object])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/profile.component.js.map

/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (problems, term) {
        return problems.filter(function (problem) { return problem.name.toLowerCase().includes(term); });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Pipe */])({
            name: 'search'
        }), 
        __metadata('design:paramtypes', [])
    ], SearchPipe);
    return SearchPipe;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/search.pipe.js.map

/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
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


var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.isAuthenticated()) {
            return true;
        }
        else {
            //redirect to home page if not logged in
            this.router.navigate(['/problems']);
            return false;
        }
    };
    AuthGuardService.prototype.isAdmin = function () {
        if (this.auth.isAuthenticated() && this.auth.getRoles().includes('Admin')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Inject */])('auth')), 
        __metadata('design:paramtypes', [Object, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/auth-guard.service.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
// src/app/auth/auth.service.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.domain = 'coj503.auth0.com';
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_2_auth0_js__["WebAuth"]({
            clientID: 'K4dCDsl-DHoB3dQoJ9ndbXPDTpdOMT7D',
            domain: this.domain,
            responseType: 'token id_token',
            audience: 'https://coj503.auth0.com/userinfo',
            redirectUri: 'http://52.203.90.19:3000/callback',
            scope: 'openid profile email role app_metadata'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.auth0.client.userInfo(authResult.accessToken, function (error, profile) {
                    _this.setSession(authResult);
                    localStorage.setItem('profile', JSON.stringify(profile));
                    window.location.href = localStorage.getItem('curLocation');
                });
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // this.auth0.client.userInfo(authResult.accessToken, function(err, profile){
        //   if(profile){
        //     var userProfile = JSON.stringify(profile);
        //     localStorage.setItem('profile', userProfile);
        //   }
        // })
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('profile');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // Access Token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('profile'));
    };
    AuthService.prototype.resetPassword = function () {
        var profile = this.getProfile();
        var url = "https://" + this.domain + "/dbconnections/change_password";
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        var body = {
            client_id: 'K4dCDsl-DHoB3dQoJ9ndbXPDTpdOMT7D',
            email: profile.email,
            connection: 'Username-Password-Authentication'
        };
        this.http.post(url, body, headers)
            .toPromise()
            .then(function (res) {
            console.log(res.json());
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService.prototype.getRoles = function () {
        var appData = 'https://coj503-domain.com/app_metadata';
        return this.getProfile()[appData].authorization.roles;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/auth.service.js.map

/***/ }),

/***/ "./src/app/services/collaboration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_colors__ = __webpack_require__("./src/assets/colors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollaborationService = (function () {
    function CollaborationService() {
        this.clientsInfo = {};
        this.clientNum = 0;
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        var _this = this;
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        this.collaborationSocket.on("change", function (delta) {
            console.log('collaboration: editor changes by' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        this.collaborationSocket.on("cursorMove", function (cursor) {
            console.log("cursor move: " + cursor);
            var session = editor.getSession();
            cursor = JSON.parse(cursor);
            var x = cursor['row'];
            var y = cursor['column'];
            var changeClientId = cursor['socketId'];
            console.log(x + ' ' + y + ' ' + changeClientId);
            if (changeClientId in _this.clientsInfo) {
                session.removeMarker(_this.clientsInfo[changeClientId]['marker']);
            }
            else {
                _this.clientsInfo[changeClientId] = {};
                var css = document.createElement('style');
                css.type = "text/css";
                css.innerHTML = ".editor_cursor_" + changeClientId
                    + " {position: absolute; background:" + __WEBPACK_IMPORTED_MODULE_1__assets_colors__["a" /* COLORS */][_this.clientNum] + ";"
                    + " z-index: 100; width: 3px !important; }";
                document.body.appendChild(css);
                _this.clientNum++;
            }
            var Range = ace.require('ace/range').Range;
            var newMarker = session.addMarker(new Range(x, y, x, y + 1), 'editor_cursor_' + changeClientId, true);
            _this.clientsInfo[changeClientId]['marker'] = newMarker;
        });
        //test
        this.collaborationSocket.on("message", function (message) {
            console.log("received: " + message);
        });
    };
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit("change", delta);
    };
    CollaborationService.prototype.cursorMove = function (cursor) {
        this.collaborationSocket.emit("cursorMove", cursor);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit("restoreBuffer");
    };
    CollaborationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], CollaborationService);
    return CollaborationService;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/collaboration.service.js.map

/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.problemsSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get("api/v1/problems")
            .toPromise()
            .then(function (res) {
            _this.problemsSource.next(res.json());
        })
            .catch(this.handleError);
        return this.problemsSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (problem) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('/api/v1/problems', problem, headers)
            .toPromise()
            .then(function (res) {
            _this.getProblems();
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.buildAndRun = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'content-type': 'application/json' });
        return this.http.post('/api/v1/build_and_run', data, headers)
            .toPromise()
            .then(function (res) {
            console.log(res);
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.body || error);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DataService);
    return DataService;
    var _a;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/data.service.js.map

/***/ }),

/***/ "./src/app/services/input.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputService = (function () {
    function InputService() {
        this.inputSubject$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
    }
    InputService.prototype.changeInput = function (term) {
        this.inputSubject$.next(term);
    };
    InputService.prototype.getInput = function () {
        return this.inputSubject$.asObservable();
    };
    InputService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], InputService);
    return InputService;
}());
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/input.service.js.map

/***/ }),

/***/ "./src/assets/colors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
var COLORS = [
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00"
];
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/colors.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ubuntu/collaborative-code-judge-system/oj-client/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map