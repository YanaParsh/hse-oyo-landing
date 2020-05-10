function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _top_image_top_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./top-image/top-image.component */
    "./src/app/top-image/top-image.component.ts");
    /* harmony import */


    var _differences_differences_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./differences/differences.component */
    "./src/app/differences/differences.component.ts");
    /* harmony import */


    var _feature_pictures_feature_pictures_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feature-pictures/feature-pictures.component */
    "./src/app/feature-pictures/feature-pictures.component.ts");
    /* harmony import */


    var _features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./features/features.component */
    "./src/app/features/features.component.ts");
    /* harmony import */


    var _promo_promo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./promo/promo.component */
    "./src/app/promo/promo.component.ts");
    /* harmony import */


    var _reason_reason_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reason/reason.component */
    "./src/app/reason/reason.component.ts");
    /* harmony import */


    var _fitnes_picture_fitnes_picture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./fitnes-picture/fitnes-picture.component */
    "./src/app/fitnes-picture/fitnes-picture.component.ts");
    /* harmony import */


    var _offer_offer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./offer/offer.component */
    "./src/app/offer/offer.component.ts");
    /* harmony import */


    var _links_links_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./links/links.component */
    "./src/app/links/links.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(changeDetectorRef) {
        _classCallCheck(this, AppComponent);

        this.changeDetectorRef = changeDetectorRef;
        this.title = 'Landing';
      }

      _createClass(AppComponent, [{
        key: "processResize",
        value: function processResize() {
          this.changeDetectorRef.markForCheck();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler() {
            return ctx.processResize();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 9,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-differences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-feature-pictures");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-promo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-reason");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-fitnes-picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-offer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-links");
        }
      },
      directives: [_top_image_top_image_component__WEBPACK_IMPORTED_MODULE_1__["TopImageComponent"], _differences_differences_component__WEBPACK_IMPORTED_MODULE_2__["DifferencesComponent"], _feature_pictures_feature_pictures_component__WEBPACK_IMPORTED_MODULE_3__["FeaturePicturesComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"], _promo_promo_component__WEBPACK_IMPORTED_MODULE_5__["PromoComponent"], _reason_reason_component__WEBPACK_IMPORTED_MODULE_6__["ReasonComponent"], _fitnes_picture_fitnes_picture_component__WEBPACK_IMPORTED_MODULE_7__["FitnesPictureComponent"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_8__["OfferComponent"], _links_links_component__WEBPACK_IMPORTED_MODULE_9__["LinksComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden visible;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.75);\n  background-image: url(\"/assets/second-image.png\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-blend-mode: darken;\n}\n\napp-links[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.buy-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBRUEscUNBQUE7RUFDQSxpREFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiB2aXNpYmxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3NlY29uZC1pbWFnZS5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG59XG5cbmFwcC1saW5rcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV5LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1dmg7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gdmlzaWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3NlY29uZC1pbWFnZS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xufVxuXG5hcHAtbGlua3Mge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1eS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXZoO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        processResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _differences_differences_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./differences/differences.component */
    "./src/app/differences/differences.component.ts");
    /* harmony import */


    var _features_features_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./features/features.component */
    "./src/app/features/features.component.ts");
    /* harmony import */


    var _links_links_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./links/links.component */
    "./src/app/links/links.component.ts");
    /* harmony import */


    var _offer_offer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./offer/offer.component */
    "./src/app/offer/offer.component.ts");
    /* harmony import */


    var _promo_promo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./promo/promo.component */
    "./src/app/promo/promo.component.ts");
    /* harmony import */


    var _reason_reason_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./reason/reason.component */
    "./src/app/reason/reason.component.ts");
    /* harmony import */


    var _top_image_top_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./top-image/top-image.component */
    "./src/app/top-image/top-image.component.ts");
    /* harmony import */


    var _feature_pictures_feature_pictures_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./feature-pictures/feature-pictures.component */
    "./src/app/feature-pictures/feature-pictures.component.ts");
    /* harmony import */


    var _fitnes_picture_fitnes_picture_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./fitnes-picture/fitnes-picture.component */
    "./src/app/fitnes-picture/fitnes-picture.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _top_image_top_image_component__WEBPACK_IMPORTED_MODULE_14__["TopImageComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _links_links_component__WEBPACK_IMPORTED_MODULE_10__["LinksComponent"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_11__["OfferComponent"], _differences_differences_component__WEBPACK_IMPORTED_MODULE_8__["DifferencesComponent"], _promo_promo_component__WEBPACK_IMPORTED_MODULE_12__["PromoComponent"], _reason_reason_component__WEBPACK_IMPORTED_MODULE_13__["ReasonComponent"], _feature_pictures_feature_pictures_component__WEBPACK_IMPORTED_MODULE_15__["FeaturePicturesComponent"], _fitnes_picture_fitnes_picture_component__WEBPACK_IMPORTED_MODULE_16__["FitnesPictureComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _top_image_top_image_component__WEBPACK_IMPORTED_MODULE_14__["TopImageComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_9__["FeaturesComponent"], _links_links_component__WEBPACK_IMPORTED_MODULE_10__["LinksComponent"], _offer_offer_component__WEBPACK_IMPORTED_MODULE_11__["OfferComponent"], _differences_differences_component__WEBPACK_IMPORTED_MODULE_8__["DifferencesComponent"], _promo_promo_component__WEBPACK_IMPORTED_MODULE_12__["PromoComponent"], _reason_reason_component__WEBPACK_IMPORTED_MODULE_13__["ReasonComponent"], _feature_pictures_feature_pictures_component__WEBPACK_IMPORTED_MODULE_15__["FeaturePicturesComponent"], _fitnes_picture_fitnes_picture_component__WEBPACK_IMPORTED_MODULE_16__["FitnesPictureComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/differences/differences.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/differences/differences.component.ts ***!
    \******************************************************/

  /*! exports provided: DifferencesComponent */

  /***/
  function srcAppDifferencesDifferencesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DifferencesComponent", function () {
      return DifferencesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DifferencesComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var difference_r1 = ctx.$implicit;
        var index_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", difference_r1.title, " ");
      }
    }

    var DifferencesComponent = function DifferencesComponent() {
      _classCallCheck(this, DifferencesComponent);

      this.differences = [{
        title: 'SpiraFlex resistance replaces bulky weights and health club equipment'
      }, {
        title: 'Works both sides of muscle groups'
      }, {
        title: 'DoubleFlex activation burns calories faster'
      }, {
        title: 'Ditch the dangerous bands'
      }, {
        title: 'Lightweight and folds up for travel'
      }];
    };

    DifferencesComponent.ɵfac = function DifferencesComponent_Factory(t) {
      return new (t || DifferencesComponent)();
    };

    DifferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DifferencesComponent,
      selectors: [["app-differences"]],
      decls: 5,
      vars: 1,
      consts: [[1, "title-wrapper"], [1, "title"], [1, "difference-list"], ["class", "difference", 4, "ngFor", "ngForOf"], [1, "difference"], [1, "index"], [1, "text"]],
      template: function DifferencesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Why NOVA Gym is better? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DifferencesComponent_div_4_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.differences);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  padding: 16px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background: #1f1f1f;\n}\n\n.difference[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  width: calc(33% - 32px);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex;\n  padding-left: 32px;\n  position: relative;\n  margin: 24px 16px;\n}\n\n.difference-list[_ngcontent-%COMP%] {\n  height: 50vh;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 8vh;\n  font-weight: 100;\n  font-family: \"Montserrat\";\n  line-height: 0.8;\n  color: red;\n  padding: 32px;\n}\n\n.title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.index[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  margin: 0 0 0 8px;\n  font-size: 128px;\n  opacity: 0.3;\n  top: 8px;\n  left: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  font-weight: 600;\n  transform: translateX(-25%);\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvZGlmZmVyZW5jZXMvZGlmZmVyZW5jZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RpZmZlcmVuY2VzL2RpZmZlcmVuY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0dGOztBREFBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDR0Y7O0FEQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNHRjs7QURBQTtFQUNFLG1CQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9kaWZmZXJlbmNlcy9kaWZmZXJlbmNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogIzFmMWYxZjtcbn1cbi5kaWZmZXJlbmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB3aWR0aDogY2FsYygzMyUgLSAzMnB4KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyNHB4IDE2cHg7XG59XG4uZGlmZmVyZW5jZS1saXN0IHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogOHZoO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBsaW5lLWhlaWdodDogMC44O1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nOiAzMnB4O1xufVxuXG4udGl0bGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5kZXgge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMCAwIDAgOHB4O1xuICBmb250LXNpemU6IDEyOHB4O1xuICBvcGFjaXR5OiAwLjM7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAwO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xufVxuIiwiOmhvc3Qge1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjMWYxZjFmO1xufVxuXG4uZGlmZmVyZW5jZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgd2lkdGg6IGNhbGMoMzMlIC0gMzJweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMjRweCAxNnB4O1xufVxuXG4uZGlmZmVyZW5jZS1saXN0IHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogOHZoO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmc6IDMycHg7XG59XG5cbi50aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbmRleCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gIGZvbnQtc2l6ZTogMTI4cHg7XG4gIG9wYWNpdHk6IDAuMztcbiAgdG9wOiA4cHg7XG4gIGxlZnQ6IDA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DifferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-differences',
          templateUrl: './differences.component.html',
          styleUrls: ['./differences.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature-pictures/feature-pictures.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/feature-pictures/feature-pictures.component.ts ***!
    \****************************************************************/

  /*! exports provided: FeaturePicturesComponent */

  /***/
  function srcAppFeaturePicturesFeaturePicturesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturePicturesComponent", function () {
      return FeaturePicturesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FeaturePicturesComponent_img_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", _r0.offsetWidth / ctx_r1.imagesUrls.length * 2);
      }
    }

    var FeaturePicturesComponent = function FeaturePicturesComponent() {
      _classCallCheck(this, FeaturePicturesComponent);

      this.imagesUrls = ['/assets/at-home.jpg', '/assets/at-office.jpg', '/assets/at-travel.jpg', '/assets/outdoors.jpg'];
    };

    FeaturePicturesComponent.ɵfac = function FeaturePicturesComponent_Factory(t) {
      return new (t || FeaturePicturesComponent)();
    };

    FeaturePicturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeaturePicturesComponent,
      selectors: [["app-feature-pictures"]],
      decls: 5,
      vars: 1,
      consts: [[1, "feature-pictures"], ["sectionElement", ""], [1, "title"], [3, "src", "width", 4, "ngFor", "ngForOf"], [3, "src", "width"]],
      template: function FeaturePicturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Train anywhere");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeaturePicturesComponent_img_4_Template, 1, 2, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imagesUrls);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.feature-pictures[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 8px;\n  width: 100%;\n  background: white;\n  font-size: 10vh;\n  height: 12vh;\n  font-weight: 600;\n  font-family: \"Montserrat\";\n  line-height: 0.8;\n  color: black;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvZmVhdHVyZS1waWN0dXJlcy9mZWF0dXJlLXBpY3R1cmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlLXBpY3R1cmVzL2ZlYXR1cmUtcGljdHVyZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUtcGljdHVyZXMvZmVhdHVyZS1waWN0dXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mZWF0dXJlLXBpY3R1cmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHZoO1xuICBoZWlnaHQ6IDEydmg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG5cbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mZWF0dXJlLXBpY3R1cmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHZoO1xuICBoZWlnaHQ6IDEydmg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturePicturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feature-pictures',
          templateUrl: './feature-pictures.component.html',
          styleUrls: ['./feature-pictures.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/features/features.component.ts":
  /*!************************************************!*\
    !*** ./src/app/features/features.component.ts ***!
    \************************************************/

  /*! exports provided: FeaturesComponent */

  /***/
  function srcAppFeaturesFeaturesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function () {
      return FeaturesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function FeaturesComponent_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r1.icon, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", feature_r1.title, " ");
      }
    }

    var FeaturesComponent = function FeaturesComponent() {
      _classCallCheck(this, FeaturesComponent);

      this.features = [{
        title: 'Skip the health club round-trips and fees',
        icon: 'schedule'
      }, {
        title: 'Dublicate the same exercises and results',
        icon: 'fitness_center'
      }, {
        title: 'Build and sculpt all your body',
        icon: 'accessibility_new'
      }, {
        title: 'Proven NASA technology',
        icon: 'public'
      }];
    };

    FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) {
      return new (t || FeaturesComponent)();
    };

    FeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeaturesComponent,
      selectors: [["app-features"]],
      decls: 5,
      vars: 1,
      consts: [[1, "title-wrapper"], [1, "title"], [1, "features-list"], ["class", "feature", 4, "ngFor", "ngForOf"], [1, "feature"], [1, "icon"], [1, "text"]],
      template: function FeaturesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " FEATURES ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeaturesComponent_mat_card_4_Template, 5, 2, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: ["[_nghost-%COMP%] {\n  padding: 16px 32px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-between;\n}\n\n.feature[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.features-list[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  font-weight: 100;\n  font-family: \"Montserrat\";\n  line-height: 0.8;\n  color: red;\n}\n\n.title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 48px;\n  color: red;\n  margin: 0px 16px 0px 8px;\n  font-size: 48px;\n  align-items: center;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvZmVhdHVyZXMvZmVhdHVyZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFFQSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZmVhdHVyZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAwLjEpO1xufVxuLmZlYXR1cmVzLWxpc3Qge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEwdmg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiAwcHggMTZweCAwcHggOHB4O1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbiIsIjpob3N0IHtcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmVhdHVyZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uZmVhdHVyZXMtbGlzdCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTB2aDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBsaW5lLWhlaWdodDogMC44O1xuICBjb2xvcjogcmVkO1xufVxuXG4udGl0bGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogMHB4IDE2cHggMHB4IDhweDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-features',
          templateUrl: './features.component.html',
          styleUrls: ['./features.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/fitnes-picture/fitnes-picture.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/fitnes-picture/fitnes-picture.component.ts ***!
    \************************************************************/

  /*! exports provided: FitnesPictureComponent */

  /***/
  function srcAppFitnesPictureFitnesPictureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FitnesPictureComponent", function () {
      return FitnesPictureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FitnesPictureComponent = /*#__PURE__*/function () {
      function FitnesPictureComponent() {
        _classCallCheck(this, FitnesPictureComponent);
      }

      _createClass(FitnesPictureComponent, [{
        key: "scrollHostIntoView",
        value: function scrollHostIntoView(element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }]);

      return FitnesPictureComponent;
    }();

    FitnesPictureComponent.ɵfac = function FitnesPictureComponent_Factory(t) {
      return new (t || FitnesPictureComponent)();
    };

    FitnesPictureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FitnesPictureComponent,
      selectors: [["app-fitnes-picture"]],
      decls: 5,
      vars: 0,
      consts: [[1, "header"], [1, "title"], ["scrollTarget", ""]],
      template: function FitnesPictureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " GET LEAN & FIT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 2);
        }
      },
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  background-image: url(\"/assets/exercises.png\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-blend-mode: darken;\n  z-index: 2;\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  font-weight: 100;\n  font-family: \"Montserrat\";\n  line-height: 0.8;\n}\n\n.fitnes-pictures[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvZml0bmVzLXBpY3R1cmUvZml0bmVzLXBpY3R1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZpdG5lcy1waWN0dXJlL2ZpdG5lcy1waWN0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2ZpdG5lcy1waWN0dXJlL2ZpdG5lcy1waWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9leGVyY2lzZXMucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xuICB6LWluZGV4OiAyO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udGl0bGUge1xuICBmb250LXNpemU6IDEwdmg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG59XG4uZml0bmVzLXBpY3R1cmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvZXhlcmNpc2VzLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEwdmg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbiAgbGluZS1oZWlnaHQ6IDAuODtcbn1cblxuLmZpdG5lcy1waWN0dXJlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FitnesPictureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-fitnes-picture',
          templateUrl: './fitnes-picture.component.html',
          styleUrls: ['./fitnes-picture.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/links/links.component.ts":
  /*!******************************************!*\
    !*** ./src/app/links/links.component.ts ***!
    \******************************************/

  /*! exports provided: LinksComponent */

  /***/
  function srcAppLinksLinksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LinksComponent", function () {
      return LinksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LinksComponent_a_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "object", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "calc(100% / " + ctx_r0.links.length + ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", item_r1.iconSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
      }
    }

    var LinksComponent = function LinksComponent(domSanitizer) {
      var _this = this;

      _classCallCheck(this, LinksComponent);

      this.domSanitizer = domSanitizer;
      this.links = [{
        title: 'Website',
        url: 'https://www.oyofitness.com/our-team/',
        iconSrc: '/assets/globe-outline.svg',
        color: 'orange'
      }, {
        title: 'Instagram',
        url: 'https://www.instagram.com/oyofitness/',
        iconSrc: '/assets/logo-instagram.svg',
        color: 'purple'
      }, {
        title: 'Facebook',
        url: 'https://www.facebook.com/OYOFitness/',
        iconSrc: '/assets/logo-facebook.svg',
        color: 'orange'
      }, {
        title: 'YouTube',
        url: 'https://www.youtube.com/oyofitness',
        iconSrc: '/assets/logo-youtube.svg',
        color: 'orange'
      }].map(function (item) {
        return Object.assign(Object.assign({}, item), {
          iconSrc: _this.domSanitizer.bypassSecurityTrustResourceUrl(item.iconSrc)
        });
      });
    };

    LinksComponent.ɵfac = function LinksComponent_Factory(t) {
      return new (t || LinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LinksComponent,
      selectors: [["app-links"]],
      decls: 1,
      vars: 1,
      consts: [["class", "link", "target", "_blank", 3, "href", "width", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "link", 3, "href"], [1, "link-content"], ["type", "image/svg+xml", 1, "icon", 3, "data"]],
      template: function LinksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LinksComponent_a_0_Template, 4, 5, "a", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  background-color: #323232;\n  flex-direction: row;\n  align-items: baseline;\n  justify-content: space-evenly;\n}\n\n.link[_ngcontent-%COMP%] {\n  padding: 8px;\n  color: white;\n  text-decoration: none;\n  transition: 0.3s all;\n}\n\n.link[_ngcontent-%COMP%]:hover {\n  background-color: orange;\n}\n\n.link[_ngcontent-%COMP%]   .link-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  color: white;\n  fill: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvbGlua3MvbGlua3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpbmtzL2xpbmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSx3QkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FKOztBRElBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2xpbmtzL2xpbmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmxpbmsge1xuICBwYWRkaW5nOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cblxuICAubGluay1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMyMzIzMjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmxpbmsge1xuICBwYWRkaW5nOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cbi5saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuLmxpbmsgLmxpbmstY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-links',
          templateUrl: './links.component.html',
          styleUrls: ['./links.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/offer/offer.component.ts":
  /*!******************************************!*\
    !*** ./src/app/offer/offer.component.ts ***!
    \******************************************/

  /*! exports provided: OfferComponent */

  /***/
  function srcAppOfferOfferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OfferComponent", function () {
      return OfferComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var OfferComponent = function OfferComponent() {
      _classCallCheck(this, OfferComponent);
    };

    OfferComponent.ɵfac = function OfferComponent_Factory(t) {
      return new (t || OfferComponent)();
    };

    OfferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OfferComponent,
      selectors: [["app-offer"]],
      decls: 8,
      vars: 0,
      consts: [[1, "title-wrapper"], [1, "title"], [1, "button-container"], ["href", "https://www.kickstarter.com/projects/oyo/oyo-nova-gym/description"], ["mat-flat-button", ""], [1, "button-text"]],
      template: function OfferComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ORDER NOW");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Buy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
      styles: ["[_nghost-%COMP%] {\n  padding: 16px 32px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: space-between;\n  height: 50vh;\n  background: white;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  font-weight: 100;\n  font-family: \"Montserrat\";\n  line-height: 0.8;\n  color: black;\n}\n\n.title-wrapper[_ngcontent-%COMP%], .button-container[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-text[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvb2ZmZXIvb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29mZmVyL29mZmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBOztFQUVFLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9vZmZlci9vZmZlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDUwdmg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEwdmg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRpdGxlLXdyYXBwZXIsXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9uLXRleHQge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG4iLCI6aG9zdCB7XG4gIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA1MHZoO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHZoO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRpdGxlLXdyYXBwZXIsXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYnV0dG9uLXRleHQge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OfferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-offer',
          templateUrl: './offer.component.html',
          styleUrls: ['./offer.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/promo/promo.component.ts":
  /*!******************************************!*\
    !*** ./src/app/promo/promo.component.ts ***!
    \******************************************/

  /*! exports provided: PromoComponent */

  /***/
  function srcAppPromoPromoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromoComponent", function () {
      return PromoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PromoComponent_img_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("width", _r0.offsetWidth / ctx_r1.exUrls.length);
      }
    }

    var PromoComponent = function PromoComponent() {
      _classCallCheck(this, PromoComponent);

      this.exUrls = ['/assets/ex-sit.jpg', '/assets/ex-up.jpg', '/assets/ex-down.jpg'];
    };

    PromoComponent.ɵfac = function PromoComponent_Factory(t) {
      return new (t || PromoComponent)();
    };

    PromoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PromoComponent,
      selectors: [["app-promo"]],
      decls: 14,
      vars: 1,
      consts: [[1, "header"], [1, "title"], [1, "logo"], [1, "button-container"], ["href", "https://www.oyofitness.com/videos/"], ["mat-flat-button", ""], [1, "button-text"], [1, "images"], ["sectionElement", ""], [3, "src", "width", 4, "ngFor", "ngForOf"], [3, "src", "width"]],
      template: function PromoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Build a fitnes body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buy now and get 18 weeks of free programs and over 50 workout videos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " WORKOUT VIDEOS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PromoComponent_img_13_Template, 1, 2, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.exUrls);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 55vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: red;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  font-weight: 100;\n  font-family: \"Montserrat\";\n  line-height: 1;\n  align-items: center;\n  justify-content: center;\n}\n\n.title[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: black;\n  align-items: center;\n  justify-content: center;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 7vh;\n  font-weight: 500;\n  font-family: \"Montserrat\";\n  align-items: center;\n  justify-content: center;\n}\n\n.promo-button[_ngcontent-%COMP%] {\n  bottom: -10vh;\n}\n\n.images[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvcHJvbW8vcHJvbW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb21vL3Byb21vLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FERUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0FKOztBRElBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wcm9tby9wcm9tby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHZoO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLmxvZ28ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogN3ZoO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb21vLWJ1dHRvbiB7XG4gIGJvdHRvbTogLTEwdmg7XG59XG5cbi5pbWFnZXMge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTB2aDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udGl0bGUgLmxvZ28ge1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDd2aDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnByb21vLWJ1dHRvbiB7XG4gIGJvdHRvbTogLTEwdmg7XG59XG5cbi5pbWFnZXMge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-promo',
          templateUrl: './promo.component.html',
          styleUrls: ['./promo.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/reason/reason.component.ts":
  /*!********************************************!*\
    !*** ./src/app/reason/reason.component.ts ***!
    \********************************************/

  /*! exports provided: ReasonComponent */

  /***/
  function srcAppReasonReasonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReasonComponent", function () {
      return ReasonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ReasonComponent_mat_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var reason_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reason_r2.icon, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", reason_r2.title, " ");
      }
    }

    var ReasonComponent = /*#__PURE__*/function () {
      function ReasonComponent() {
        _classCallCheck(this, ReasonComponent);

        this.reasons = [{
          title: 'Lowest price',
          icon: 'local_offer'
        }, {
          title: 'Free US shipping',
          icon: 'local_shipping'
        }, {
          title: '30 days return',
          icon: 'settings_back'
        }];
      }

      _createClass(ReasonComponent, [{
        key: "scrollHostIntoView",
        value: function scrollHostIntoView(element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }]);

      return ReasonComponent;
    }();

    ReasonComponent.ɵfac = function ReasonComponent_Factory(t) {
      return new (t || ReasonComponent)();
    };

    ReasonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReasonComponent,
      selectors: [["app-reason"]],
      decls: 11,
      vars: 1,
      consts: [[1, "title-wrapper"], [1, "title"], [1, "reasons-list"], ["class", "reason", 4, "ngFor", "ngForOf"], ["href", "https://www.kickstarter.com/projects/oyo/oyo-nova-gym/description"], ["mat-stroked-button", "", "color", "warn", 1, "buy-button"], [1, "buy-button__content"], ["scrollTarget", ""], [1, "reason"], [1, "icon"], [1, "text"]],
      template: function ReasonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Become a backer now to get: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReasonComponent_mat_card_4_Template, 5, 2, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Buy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", null, 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reasons);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  padding: 16px 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.reason[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.reasons-list[_ngcontent-%COMP%] {\n  height: 50vh;\n  width: 100vh;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  font-weight: 100;\n  font-family: \"Montserrat\";\n  line-height: 0.8;\n  color: red;\n  align-items: center;\n}\n\n.title-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 48px;\n  color: red;\n  margin: 8px;\n  font-size: 48px;\n  align-items: center;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvcmVhc29uL3JlYXNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVhc29uL3JlYXNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDR0Y7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0Y7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvcmVhc29uL3JlYXNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDE2cHggMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucmVhc29uIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogMC4xKTtcbn1cbi5yZWFzb25zLWxpc3Qge1xuICBoZWlnaHQ6IDUwdmg7XG4gIHdpZHRoOiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEwdmg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XG4gIGxpbmUtaGVpZ2h0OiAwLjg7XG4gIGNvbG9yOiByZWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiA4cHg7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogMTZweCAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJlYXNvbiB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLnJlYXNvbnMtbGlzdCB7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTB2aDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBsaW5lLWhlaWdodDogMC44O1xuICBjb2xvcjogcmVkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGl0bGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogOHB4O1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReasonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reason',
          templateUrl: './reason.component.html',
          styleUrls: ['./reason.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/top-image/top-image.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/top-image/top-image.component.ts ***!
    \**************************************************/

  /*! exports provided: TopImageComponent */

  /***/
  function srcAppTopImageTopImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopImageComponent", function () {
      return TopImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var TopImageComponent = /*#__PURE__*/function () {
      function TopImageComponent() {
        _classCallCheck(this, TopImageComponent);
      }

      _createClass(TopImageComponent, [{
        key: "scrollHostIntoView",
        value: function scrollHostIntoView(element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }]);

      return TopImageComponent;
    }();

    TopImageComponent.ɵfac = function TopImageComponent_Factory(t) {
      return new (t || TopImageComponent)();
    };

    TopImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopImageComponent,
      selectors: [["app-top-image"]],
      decls: 10,
      vars: 0,
      consts: [[1, "header"], [1, "title"], [1, "logo"], ["mat-stroked-button", "", "color", "warn", 1, "more-button", 3, "click"], [1, "more-button__content"], ["scrollTarget", ""]],
      template: function TopImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OYO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " NOVA GYM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopImageComponent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

            return ctx.scrollHostIntoView(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", null, 5);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]],
      styles: [".header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.75);\n  background-image: url(\"/assets/Top-image.png\");\n  background-position: center center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-blend-mode: darken;\n  z-index: 2;\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 5vh 5vh #010101;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 10vh;\n  font-weight: 100;\n  font-family: \"Montserrat\";\n  line-height: 0.8;\n}\n\n.title[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 7vh;\n  font-weight: 500;\n  font-family: \"Montserrat\";\n}\n\n.more-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGVuYXBhcnNpbmEvRGVza3RvcC/Qn9GA0L7QtdC60YJVWC9oc2UtcGljby1sYW5kaW5nL3NyYy9hcHAvdG9wLWltYWdlL3RvcC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9wLWltYWdlL3RvcC1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0EsOENBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLDZCQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FESUU7RUFDRSxVQUFBO0FDRko7O0FETUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC90b3AtaW1hZ2UvdG9wLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9Ub3AtaW1hZ2UucG5nJyk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xuICB6LWluZGV4OiAyO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgYm94LXNoYWRvdzogMCA1dmggNXZoICMwMTAxMDE7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTB2aDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcbiAgbGluZS1oZWlnaHQ6IDAuODtcblxuICAubG9nbyB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxufVxuXG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDd2aDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDV2aDtcbn1cbiIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1RvcC1pbWFnZS5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogZGFya2VuO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCA1dmggNXZoICMwMTAxMDE7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTB2aDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xuICBsaW5lLWhlaWdodDogMC44O1xufVxuLnRpdGxlIC5sb2dvIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiA3dmg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDV2aDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-top-image',
          templateUrl: './top-image.component.html',
          styleUrls: ['./top-image.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/elenaparsina/Desktop/ПроектUX/hse-pico-landing/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map