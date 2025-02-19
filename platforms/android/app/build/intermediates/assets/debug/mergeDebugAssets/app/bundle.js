(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app-root.ts": "./app/app-root.ts",
	"./app-root.xml": "./app/app-root.xml",
	"./app.css": "./app/app.css",
	"./app.ts": "./app/app.ts",
	"./components/assets/asset-distribution-chart.xml": "./app/components/assets/asset-distribution-chart.xml",
	"./components/charts/donut-chart.ts": "./app/components/charts/donut-chart.ts",
	"./components/charts/index.ts": "./app/components/charts/index.ts",
	"./components/ui/card.xml": "./app/components/ui/card.xml",
	"./components/ui/list-item.xml": "./app/components/ui/list-item.xml",
	"./constants/storage-keys.ts": "./app/constants/storage-keys.ts",
	"./database/database-config.ts": "./app/database/database-config.ts",
	"./database/db-service.ts": "./app/database/db-service.ts",
	"./database/file-system.ts": "./app/database/file-system.ts",
	"./database/migrations/index.ts": "./app/database/migrations/index.ts",
	"./database/sqlite-helper.ts": "./app/database/sqlite-helper.ts",
	"./database/transaction-manager.ts": "./app/database/transaction-manager.ts",
	"./main-page.ts": "./app/main-page.ts",
	"./main-page.xml": "./app/main-page.xml",
	"./main-view-model.ts": "./app/main-view-model.ts",
	"./models/asset.ts": "./app/models/asset.ts",
	"./models/financial-report.ts": "./app/models/financial-report.ts",
	"./models/liability.ts": "./app/models/liability.ts",
	"./models/monthly-snapshot.ts": "./app/models/monthly-snapshot.ts",
	"./models/transaction.ts": "./app/models/transaction.ts",
	"./services/asset-service.ts": "./app/services/asset-service.ts",
	"./services/base-service.ts": "./app/services/base-service.ts",
	"./services/event-bus-service.ts": "./app/services/event-bus-service.ts",
	"./services/liability-service.ts": "./app/services/liability-service.ts",
	"./services/monthly-snapshot-service.ts": "./app/services/monthly-snapshot-service.ts",
	"./services/report-service.ts": "./app/services/report-service.ts",
	"./services/storage-service.ts": "./app/services/storage-service.ts",
	"./services/transaction-service.ts": "./app/services/transaction-service.ts",
	"./utils/chart-colors.ts": "./app/utils/chart-colors.ts",
	"./utils/dialog.ts": "./app/utils/dialog.ts",
	"./utils/financial-calculations.ts": "./app/utils/financial-calculations.ts",
	"./utils/formatters.ts": "./app/utils/formatters.ts",
	"./utils/ios-color-extension.ts": "./app/utils/ios-color-extension.ts",
	"./utils/logger-interface.ts": "./app/utils/logger-interface.ts",
	"./utils/logger.ts": "./app/utils/logger.ts",
	"./utils/navigation.ts": "./app/utils/navigation.ts",
	"./utils/platform/android-logger.ts": "./app/utils/platform/android-logger.ts",
	"./utils/platform/console-logger.ts": "./app/utils/platform/console-logger.ts",
	"./view-models/assets/add-asset-view-model.ts": "./app/view-models/assets/add-asset-view-model.ts",
	"./view-models/assets/asset-distribution-view-model.ts": "./app/view-models/assets/asset-distribution-view-model.ts",
	"./view-models/assets/asset-list-view-model.ts": "./app/view-models/assets/asset-list-view-model.ts",
	"./view-models/base-view-model.ts": "./app/view-models/base-view-model.ts",
	"./view-models/dashboard-view-model.ts": "./app/view-models/dashboard-view-model.ts",
	"./view-models/liabilities/add-liability-view-model.ts": "./app/view-models/liabilities/add-liability-view-model.ts",
	"./view-models/liabilities/liability-distribution-view-model.ts": "./app/view-models/liabilities/liability-distribution-view-model.ts",
	"./view-models/liabilities/liability-list-view-model.ts": "./app/view-models/liabilities/liability-list-view-model.ts",
	"./view-models/monthly-snapshot-view-model.ts": "./app/view-models/monthly-snapshot-view-model.ts",
	"./view-models/monthly-snapshot/add-snapshot-view-model.ts": "./app/view-models/monthly-snapshot/add-snapshot-view-model.ts",
	"./view-models/monthly-snapshot/monthly-snapshot-view-model.ts": "./app/view-models/monthly-snapshot/monthly-snapshot-view-model.ts",
	"./view-models/reports/financial-health-view-model.ts": "./app/view-models/reports/financial-health-view-model.ts",
	"./view-models/transactions/add-transaction-view-model.ts": "./app/view-models/transactions/add-transaction-view-model.ts",
	"./view-models/transactions/transaction-distribution-view-model.ts": "./app/view-models/transactions/transaction-distribution-view-model.ts",
	"./view-models/transactions/transaction-list-view-model.ts": "./app/view-models/transactions/transaction-list-view-model.ts",
	"./views/assets/add-asset-page.ts": "./app/views/assets/add-asset-page.ts",
	"./views/assets/add-asset-page.xml": "./app/views/assets/add-asset-page.xml",
	"./views/assets/asset-list-page.ts": "./app/views/assets/asset-list-page.ts",
	"./views/assets/asset-list-page.xml": "./app/views/assets/asset-list-page.xml",
	"./views/liabilities/add-liability-page.ts": "./app/views/liabilities/add-liability-page.ts",
	"./views/liabilities/add-liability-page.xml": "./app/views/liabilities/add-liability-page.xml",
	"./views/liabilities/liability-list-page.ts": "./app/views/liabilities/liability-list-page.ts",
	"./views/liabilities/liability-list-page.xml": "./app/views/liabilities/liability-list-page.xml",
	"./views/main-page.ts": "./app/views/main-page.ts",
	"./views/main-page.xml": "./app/views/main-page.xml",
	"./views/monthly-snapshot/add-snapshot-page.ts": "./app/views/monthly-snapshot/add-snapshot-page.ts",
	"./views/monthly-snapshot/add-snapshot-page.xml": "./app/views/monthly-snapshot/add-snapshot-page.xml",
	"./views/monthly-snapshot/monthly-snapshot-page.ts": "./app/views/monthly-snapshot/monthly-snapshot-page.ts",
	"./views/monthly-snapshot/monthly-snapshot-page.xml": "./app/views/monthly-snapshot/monthly-snapshot-page.xml",
	"./views/reports/financial-health-page.xml": "./app/views/reports/financial-health-page.xml",
	"./views/shared/list-item.xml": "./app/views/shared/list-item.xml",
	"./views/transactions/add-transaction-page.ts": "./app/views/transactions/add-transaction-page.ts",
	"./views/transactions/add-transaction-page.xml": "./app/views/transactions/add-transaction-page.xml",
	"./views/transactions/transaction-list-page.ts": "./app/views/transactions/transaction-list-page.ts",
	"./views/transactions/transaction-list-page.xml": "./app/views/transactions/transaction-list-page.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$";

/***/ }),

/***/ "./app/app.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/app.css");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@nativescript/core/application/application.android.js");
/* harmony import */ var _database_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/database/db-service.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/logger.ts");
// Added by app-css-loader




const TAG = 'App';
_nativescript_core__WEBPACK_IMPORTED_MODULE_3__.Application.on(_nativescript_core__WEBPACK_IMPORTED_MODULE_3__.Application.launchEvent, async () => {
    try {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Starting application initialization');
        // Initialize database first
        const dbService = _database_db_service__WEBPACK_IMPORTED_MODULE_1__.DatabaseService.getInstance();
        await dbService.initialize();
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Database initialized successfully');
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Fatal error during app initialization', error);
    }
});
// Handle app suspension
_nativescript_core__WEBPACK_IMPORTED_MODULE_3__.Application.on(_nativescript_core__WEBPACK_IMPORTED_MODULE_3__.Application.suspendEvent, () => {
    try {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Application suspending, closing database...');
        const dbService = _database_db_service__WEBPACK_IMPORTED_MODULE_1__.DatabaseService.getInstance();
        dbService.close();
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Error during app suspension', error);
    }
});
_nativescript_core__WEBPACK_IMPORTED_MODULE_3__.Application.run({ moduleName: 'app-root' });


/***/ }),

/***/ "./app/app.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".visible"],"declarations":[{"type":"declaration","property":"visibility","value":"visible"}]},{"type":"rule","selectors":[".m-1"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".m-2"],"declarations":[{"type":"declaration","property":"margin","value":"8"}]},{"type":"rule","selectors":[".m-4"],"declarations":[{"type":"declaration","property":"margin","value":"16"}]},{"type":"rule","selectors":[".mx-4"],"declarations":[{"type":"declaration","property":"margin-left","value":"16"},{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":[".mb-1"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".ml-2"],"declarations":[{"type":"declaration","property":"margin-left","value":"8"}]},{"type":"rule","selectors":[".mr-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".w-full"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".rounded-xl"],"declarations":[{"type":"declaration","property":"border-radius","value":"12"}]},{"type":"rule","selectors":[".border-b"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1px"}]},{"type":"rule","selectors":[".bg-blue-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(219 234 254 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-blue-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(59 130 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-blue-600"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(37 99 235 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-gray-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(243 244 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-green-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(34 197 94 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-indigo-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(99 102 241 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-purple-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(168 85 247 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-red-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(239 68 68 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".p-6"],"declarations":[{"type":"declaration","property":"padding","value":"24"}]},{"type":"rule","selectors":[".text-right"],"declarations":[{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-lg"],"declarations":[{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-sm"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"line-height","value":"20"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".font-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"700"}]},{"type":"rule","selectors":[".font-medium"],"declarations":[{"type":"declaration","property":"font-weight","value":"500"}]},{"type":"rule","selectors":[".uppercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".text-blue-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(37 99 235 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(75 85 99 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-700"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(55 65 81 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-800"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(31 41 55 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-green-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(22 163 74 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-purple-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(147 51 234 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-red-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(220 38 38 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"#2563eb"},{"type":"declaration","property":"color","value":"#ffffff"}]},{"type":"rule","selectors":["Button"],"declarations":[{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".card"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffffff"},{"type":"declaration","property":"border-radius","value":"12"},{"type":"declaration","property":"margin","value":"8"},{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".list-view"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["Progress"],"declarations":[{"type":"declaration","property":"height","value":"8"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".input-field"],"declarations":[{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"margin","value":"8 0"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e2e8f0"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"background-color","value":"#f8fafc"}]},{"type":"rule","selectors":[".form-label"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"color","value":"#64748b"},{"type":"declaration","property":"margin-bottom","value":"4"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "D:\\Dev\\Personal-Finance-Manager-PFM\\app\\app.css")


/***/ }),

/***/ "./app/app-root.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onLoaded: () => (/* binding */ onLoaded)
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/logger.ts");

const TAG = 'AppRoot';
function onLoaded(args) {
    try {
        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, 'App root loaded');
        const frame = args.object;
        frame.navigate({
            moduleName: 'views/main-page',
            clearHistory: true
        });
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, 'Error in onLoaded', error);
    }
}


/***/ }),

/***/ "./app/components/charts/donut-chart.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DonutChart: () => (/* binding */ DonutChart)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/ui/core/properties/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/ui/core/view/index.android.js");

const dataProperty = new _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Property({
    name: 'data',
    defaultValue: [],
    valueChanged: (target, oldValue, newValue) => {
        target.onDataChanged(oldValue, newValue);
    }
});
class DonutChart extends _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.View {
    constructor() {
        super();
        this.data = [];
    }
    onDataChanged(oldValue, newValue) {
        this.data = newValue;
        this.requestLayout();
    }
    createNativeView() {
        if (true) {
            // @ts-ignore
            const view = new android.view.View(this._context);
            // @ts-ignore
            view.setWillNotDraw(false);
            return view;
        }
        // @ts-ignore
        return new UIView(CGRectMake(0, 0, 0, 0));
    }
    onMeasure(widthMeasureSpec, heightMeasureSpec) {
        // @ts-ignore
        const width = _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.View.layout.getMeasureSpecSize(widthMeasureSpec);
        // @ts-ignore
        const height = _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.View.layout.getMeasureSpecSize(heightMeasureSpec);
        this.setMeasuredDimension(width, height);
    }
    onLayout(left, top, right, bottom) {
        super.onLayout(left, top, right, bottom);
        // @ts-ignore
        this.nativeView?.invalidate();
    }
    onDraw(canvas) {
        if (true) {
            this.drawAndroid(canvas);
        }
        else {}
    }
    drawAndroid(canvas) {
        const width = this.getMeasuredWidth();
        const height = this.getMeasuredHeight();
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 * 0.8;
        const innerRadius = radius * 0.6;
        const strokeWidth = radius - innerRadius;
        let startAngle = 0;
        // @ts-ignore
        const paint = new android.graphics.Paint();
        paint.setAntiAlias(true);
        // @ts-ignore
        paint.setStyle(android.graphics.Paint.Style.STROKE);
        paint.setStrokeWidth(strokeWidth);
        // @ts-ignore
        const rect = new android.graphics.RectF(centerX - radius + strokeWidth / 2, centerY - radius + strokeWidth / 2, centerX + radius - strokeWidth / 2, centerY + radius - strokeWidth / 2);
        this.data.forEach(item => {
            const sweepAngle = (item.percentage / 100) * 360;
            // @ts-ignore
            paint.setColor(android.graphics.Color.parseColor(item.color));
            canvas.drawArc(rect, startAngle, sweepAngle, false, paint);
            startAngle += sweepAngle;
        });
    }
    drawiOS() {
        const width = this.getMeasuredWidth();
        const height = this.getMeasuredHeight();
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 * 0.8;
        const innerRadius = radius * 0.6;
        let startAngle = -Math.PI / 2;
        this.data.forEach(item => {
            const sweepAngle = (item.percentage / 100) * Math.PI * 2;
            const endAngle = startAngle + sweepAngle;
            // @ts-ignore
            const path = UIBezierPath.bezierPath();
            path.addArcWithCenterRadiusStartAngleEndAngleClockwise(CGPointMake(centerX, centerY), radius, startAngle, endAngle, true);
            path.addArcWithCenterRadiusStartAngleEndAngleClockwise(CGPointMake(centerX, centerY), innerRadius, endAngle, startAngle, false);
            path.closePath();
            const color = this.hexToUIColor(item.color);
            color.setFill();
            path.fill();
            startAngle = endAngle;
        });
    }
    hexToUIColor(hex) {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        // @ts-ignore
        return UIColor.alloc().initWithRedGreenBlueAlpha(r, g, b, 1);
    }
}
dataProperty.register(DonutChart);


/***/ }),

/***/ "./app/components/charts/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DonutChart: () => (/* reexport safe */ _donut_chart__WEBPACK_IMPORTED_MODULE_0__.DonutChart),
/* harmony export */   registerChartComponents: () => (/* binding */ registerChartComponents)
/* harmony export */ });
/* harmony import */ var _donut_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/components/charts/donut-chart.ts");
// Register all chart components
function registerChartComponents() {
    // Temporarily disable chart registration until we fix the core imports
    console.log('Chart registration disabled temporarily');
}



/***/ }),

/***/ "./app/constants/storage-keys.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageKeys: () => (/* binding */ StorageKeys)
/* harmony export */ });
const StorageKeys = {
    ASSETS: 'assets',
    LIABILITIES: 'liabilities',
    TRANSACTIONS: 'transactions',
};


/***/ }),

/***/ "./app/database/database-config.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DATABASE_CONFIG: () => (/* binding */ DATABASE_CONFIG)
/* harmony export */ });
const DATABASE_CONFIG = {
    name: 'cetepfm.db',
    version: 1,
    // SQLITE_OPEN_CREATE | SQLITE_OPEN_READWRITE | SQLITE_OPEN_FULLMUTEX
    createFlags: 0x00000004 | 0x00000002 | 0x00010000,
    // Use DELETE mode for maximum durability
    journalMode: 'DELETE',
    // Configure pragmas for better durability
    pragmas: [
        'PRAGMA synchronous = FULL;',
        'PRAGMA journal_mode = DELETE;',
        'PRAGMA foreign_keys = ON;',
        'PRAGMA temp_store = MEMORY;',
        'PRAGMA page_size = 4096;',
        'PRAGMA cache_size = 2000;',
        'PRAGMA locking_mode = NORMAL;'
    ]
};


/***/ }),

/***/ "./app/database/db-service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatabaseService: () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var nativescript_sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-sqlite/sqlite.js");
/* harmony import */ var nativescript_sqlite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_sqlite__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/database/migrations/index.ts");
/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/database/database-config.ts");
/* harmony import */ var _file_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/database/file-system.ts");
/* harmony import */ var _transaction_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/database/transaction-manager.ts");






const TAG = 'DatabaseService';
class DatabaseService {
    constructor() {
        this.database = null;
        this.initializationPromise = null;
        const documentsPath = _file_system__WEBPACK_IMPORTED_MODULE_4__.FileSystem.getDocumentsPath();
        this.dbPath = `${documentsPath}/${_database_config__WEBPACK_IMPORTED_MODULE_3__.DATABASE_CONFIG.name}`;
        // Ensure database directory exists
        _file_system__WEBPACK_IMPORTED_MODULE_4__.FileSystem.ensureDirectoryExists(documentsPath);
    }
    static getInstance() {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService();
        }
        return DatabaseService.instance;
    }
    async initialize() {
        if (this.initializationPromise) {
            return this.initializationPromise;
        }
        this.initializationPromise = this.initializeDatabase();
        return this.initializationPromise;
    }
    async initializeDatabase() {
        try {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Opening SQLite connection...');
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, `Database path: ${this.dbPath}`);
            this.database = await new nativescript_sqlite__WEBPACK_IMPORTED_MODULE_0__(this.dbPath, {
                createFlags: _database_config__WEBPACK_IMPORTED_MODULE_3__.DATABASE_CONFIG.createFlags,
                journalMode: _database_config__WEBPACK_IMPORTED_MODULE_3__.DATABASE_CONFIG.journalMode,
                version: _database_config__WEBPACK_IMPORTED_MODULE_3__.DATABASE_CONFIG.version
            });
            await this.configureDatabasePragmas();
            await this.runMigrations();
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Database initialization completed successfully');
        }
        catch (error) {
            this.initializationPromise = null;
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, 'Database initialization failed', error);
            throw error;
        }
    }
    async configureDatabasePragmas() {
        for (const pragma of _database_config__WEBPACK_IMPORTED_MODULE_3__.DATABASE_CONFIG.pragmas) {
            await this.database.execSQL(pragma);
        }
    }
    async runMigrations() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Running database migrations...');
        const migrations = await (0,_migrations__WEBPACK_IMPORTED_MODULE_2__.getMigrationQueries)();
        for (const query of migrations) {
            const transaction = new _transaction_manager__WEBPACK_IMPORTED_MODULE_5__.DbTransaction(this.database);
            await transaction.execute(query);
        }
    }
    async execute(query, params = []) {
        await this.ensureConnection();
        try {
            await this.database.execSQL(query, params);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, `Failed to execute query: ${query}`, error);
            throw error;
        }
    }
    async select(query, params = []) {
        await this.ensureConnection();
        try {
            return await this.database.all(query, params);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, `Failed to execute select query: ${query}`, error);
            throw error;
        }
    }
    async ensureConnection() {
        if (!this.database) {
            await this.initialize();
        }
    }
    async close() {
        if (this.database) {
            try {
                await this.database.execSQL('PRAGMA synchronous = FULL;');
                await this.database.close();
                this.database = null;
                this.initializationPromise = null;
                _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Database connection closed successfully');
            }
            catch (error) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, 'Failed to close database connection', error);
                throw error;
            }
        }
    }
}


/***/ }),

/***/ "./app/database/file-system.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSystem: () => (/* binding */ FileSystem)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/file-system/index.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'FileSystem';
class FileSystem {
    static ensureDirectoryExists(path) {
        try {
            if (!_nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Folder.exists(path)) {
                // Create folder using the static create method
                _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Folder.fromPath(path);
                _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, `Created directory: ${path}`);
            }
            else {
                _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, `Directory already exists: ${path}`);
            }
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, `Failed to ensure directory exists: ${path}`, error);
            throw error;
        }
    }
    static getDocumentsPath() {
        return _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.knownFolders.documents().path;
    }
}


/***/ }),

/***/ "./app/database/migrations/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMigrationQueries: () => (/* binding */ getMigrationQueries)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/file-system/index.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'Migrations';
async function getMigrationQueries() {
    try {
        // Get the migrations folder path
        const migrationsFolder = _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.knownFolders.currentApp().getFolder('database/migrations');
        const initialSchemaFile = migrationsFolder.getFile('001_initial_schema.sql');
        // Read the migration file content
        const content = await initialSchemaFile.readText();
        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, 'Successfully loaded migration queries');
        return [content];
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, 'Failed to load migrations', error);
        throw error;
    }
}


/***/ }),

/***/ "./app/database/sqlite-helper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLiteHelper: () => (/* binding */ SQLiteHelper)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/file-system/index.js");
/* harmony import */ var nativescript_sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/nativescript-sqlite/sqlite.js");
/* harmony import */ var nativescript_sqlite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_sqlite__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");



const TAG = 'SQLiteHelper';
class SQLiteHelper {
    constructor(dbName) {
        this.database = null;
        this.connectionPromise = null;
        this.dbPath = `${_nativescript_core__WEBPACK_IMPORTED_MODULE_2__.knownFolders.documents().path}/${dbName}`;
    }
    async open() {
        // If already connecting, return existing promise
        if (this.connectionPromise) {
            return this.connectionPromise;
        }
        // Create new connection promise
        this.connectionPromise = this.openDatabase();
        return this.connectionPromise;
    }
    async openDatabase() {
        try {
            if (!this.database) {
                this.database = await new nativescript_sqlite__WEBPACK_IMPORTED_MODULE_0__(this.dbPath);
                _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Database connection opened successfully');
            }
        }
        catch (error) {
            this.connectionPromise = null;
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, 'Failed to open database connection', error);
            throw error;
        }
    }
    async execute(query, params = []) {
        await this.ensureConnection();
        try {
            await this.database.execSQL(query, params);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, `Failed to execute query: ${query}`, error);
            throw error;
        }
    }
    async select(query, params = []) {
        await this.ensureConnection();
        try {
            return await this.database.all(query, params);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, `Failed to execute select query: ${query}`, error);
            throw error;
        }
    }
    async ensureConnection() {
        if (!this.database) {
            await this.open();
        }
    }
    async close() {
        if (this.database) {
            try {
                await this.database.close();
                this.database = null;
                this.connectionPromise = null;
                _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Database connection closed successfully');
            }
            catch (error) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, 'Failed to close database connection', error);
                throw error;
            }
        }
    }
}


/***/ }),

/***/ "./app/database/transaction-manager.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DbTransaction: () => (/* binding */ DbTransaction)
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/logger.ts");

const TAG = 'DbTransaction';
class DbTransaction {
    constructor(database) {
        this.database = database;
    }
    async execute(query) {
        await this.database.execSQL('BEGIN TRANSACTION');
        try {
            await this.database.execSQL(query);
            await this.database.execSQL('COMMIT');
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, 'Transaction completed successfully');
        }
        catch (error) {
            await this.database.execSQL('ROLLBACK');
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, 'Transaction failed, rolling back', error);
            throw error;
        }
    }
}


/***/ }),

/***/ "./app/main-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_dashboard_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/dashboard-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'MainPage';
function navigatingTo(args) {
    try {
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating to main page');
        const page = args.object;
        page.bindingContext = new _view_models_dashboard_view_model__WEBPACK_IMPORTED_MODULE_0__.DashboardViewModel();
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, 'Error in navigatingTo', error);
    }
}


/***/ }),

/***/ "./app/main-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HelloWorldModel: () => (/* binding */ HelloWorldModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");

class HelloWorldModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor() {
        super();
        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value);
        }
    }
    onTap() {
        this._counter--;
        this.updateMessage();
    }
    updateMessage() {
        if (this._counter <= 0) {
            this.message =
                'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        }
        else {
            this.message = `${this._counter} taps left`;
        }
        // log the message to the console
        console.log(this.message);
    }
}


/***/ }),

/***/ "./app/models/asset.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Asset: () => (/* binding */ Asset)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");

class Asset extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor(data) {
        super();
        this.id = data.id || crypto.randomUUID();
        this.category = data.category || 'Saving/Cash';
        this.value = data.value || 0;
        this.name = data.name || '';
    }
}


/***/ }),

/***/ "./app/models/financial-report.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./app/models/liability.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Liability: () => (/* binding */ Liability)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");

class Liability extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor(data) {
        super();
        this.id = data.id || crypto.randomUUID();
        this.type = data.type || 'Loan';
        this.amount = data.amount || 0;
        this.name = data.name || '';
        this.interestRate = data.interestRate || 0;
    }
}


/***/ }),

/***/ "./app/models/monthly-snapshot.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthlySnapshot: () => (/* binding */ MonthlySnapshot)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");

class MonthlySnapshot extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor(data) {
        super();
        this.id = data.id || crypto.randomUUID();
        const date = new Date();
        this.year = data.year || date.getFullYear();
        this.month = data.month || date.getMonth();
        this.netAsset = data.netAsset || 0;
        this.percentageChange = data.percentageChange;
    }
}


/***/ }),

/***/ "./app/models/transaction.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Transaction: () => (/* binding */ Transaction)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");

class Transaction extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor(data) {
        super();
        const date = new Date();
        this.id = data.id || crypto.randomUUID();
        this.type = data.type || 'expense';
        this.category = data.category || 'Consumer basket';
        this.amount = Number(data.amount || 0);
        this.description = data.description || '';
        this.timeRequired = data.type === 'income' ? Number(data.timeRequired || 1) : undefined;
        this.month = data.month ?? date.getMonth();
        this.year = data.year ?? date.getFullYear();
    }
}


/***/ }),

/***/ "./app/services/asset-service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetService: () => (/* binding */ AssetService)
/* harmony export */ });
/* harmony import */ var _models_asset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/models/asset.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/base-service.ts");
/* harmony import */ var _constants_storage_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/constants/storage-keys.ts");



class AssetService extends _base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor() {
        super();
        this.TAG = 'AssetService';
        this.storageKey = _constants_storage_keys__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.ASSETS;
    }
    static getInstance() {
        if (!AssetService.instance) {
            AssetService.instance = new AssetService();
        }
        return AssetService.instance;
    }
    transformLoadedItems(items) {
        return items.map(data => new _models_asset__WEBPACK_IMPORTED_MODULE_0__.Asset(data));
    }
    addAsset(asset) {
        this.addItem(asset);
    }
    updateAsset(asset) {
        this.updateItem(asset);
    }
    deleteAsset(id) {
        this.deleteItem(id);
    }
    getAssets() {
        return this.getItems();
    }
    getTotalAssetValue() {
        return this.items.reduce((sum, asset) => sum + asset.value, 0);
    }
}


/***/ }),

/***/ "./app/services/base-service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/storage-service.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");



class BaseService extends _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Observable {
    constructor() {
        super();
        this.items = [];
        this.storageService = _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService.getInstance();
        this.loadItems();
    }
    async loadItems() {
        try {
            if (!this.storageKey) {
                throw new Error('Storage key not set');
            }
            const savedItems = await this.storageService.getItem(this.storageKey, []);
            this.items = this.transformLoadedItems(savedItems);
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Loaded ${this.items.length} items from ${this.storageKey}`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, `Error loading items from ${this.storageKey}`, error);
            this.items = [];
        }
    }
    async saveItems() {
        try {
            if (!this.storageKey) {
                throw new Error('Storage key not set');
            }
            await this.storageService.setItem(this.storageKey, this.items);
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Saved ${this.items.length} items to ${this.storageKey}`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, `Error saving items to ${this.storageKey}`, error);
        }
    }
    async addItem(item) {
        if (!item.id) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, 'Cannot add item without id');
            return;
        }
        this.items.push(item);
        await this.saveItems();
        this.notifyPropertyChange('items', this.items);
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Added item with id: ${item.id}`);
    }
    async updateItem(item) {
        if (!item.id) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, 'Cannot update item without id');
            return;
        }
        const index = this.items.findIndex(i => i.id === item.id);
        if (index !== -1) {
            this.items[index] = item;
            await this.saveItems();
            this.notifyPropertyChange('items', this.items);
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Updated item with id: ${item.id}`);
        }
    }
    async deleteItem(id) {
        if (!id) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, 'Cannot delete item without id');
            return;
        }
        this.items = this.items.filter(item => item.id !== id);
        await this.saveItems();
        this.notifyPropertyChange('items', this.items);
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Deleted item with id: ${id}`);
    }
    getItems() {
        return [...this.items];
    }
}


/***/ }),

/***/ "./app/services/event-bus-service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventBusService: () => (/* binding */ EventBusService),
/* harmony export */   EventNames: () => (/* binding */ EventNames)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");

class EventBusService extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    static getInstance() {
        if (!EventBusService.instance) {
            EventBusService.instance = new EventBusService();
        }
        return EventBusService.instance;
    }
    emit(eventName, data) {
        this.notify({ eventName, object: this, data });
    }
}
const EventNames = {
    SNAPSHOT_UPDATED: 'snapshotUpdated'
};


/***/ }),

/***/ "./app/services/liability-service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiabilityService: () => (/* binding */ LiabilityService)
/* harmony export */ });
/* harmony import */ var _models_liability__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/models/liability.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/base-service.ts");
/* harmony import */ var _constants_storage_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/constants/storage-keys.ts");



class LiabilityService extends _base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor() {
        super();
        this.TAG = 'LiabilityService';
        this.storageKey = _constants_storage_keys__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.LIABILITIES;
    }
    static getInstance() {
        if (!LiabilityService.instance) {
            LiabilityService.instance = new LiabilityService();
        }
        return LiabilityService.instance;
    }
    transformLoadedItems(items) {
        return items.map(data => new _models_liability__WEBPACK_IMPORTED_MODULE_0__.Liability(data));
    }
    addLiability(liability) {
        this.addItem(liability);
    }
    updateLiability(liability) {
        this.updateItem(liability);
    }
    deleteLiability(id) {
        this.deleteItem(id);
    }
    getLiabilities() {
        return this.getItems();
    }
    getTotalLiabilities() {
        return this.items.reduce((sum, liability) => sum + liability.amount, 0);
    }
}


/***/ }),

/***/ "./app/services/monthly-snapshot-service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthlySnapshotService: () => (/* binding */ MonthlySnapshotService)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/base-service.ts");
/* harmony import */ var _models_monthly_snapshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/models/monthly-snapshot.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/logger.ts");



const TAG = 'MonthlySnapshotService';
class MonthlySnapshotService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
    constructor() {
        super();
        this.TAG = TAG;
        this.storageKey = 'monthly_snapshots';
    }
    static getInstance() {
        if (!MonthlySnapshotService.instance) {
            MonthlySnapshotService.instance = new MonthlySnapshotService();
        }
        return MonthlySnapshotService.instance;
    }
    transformLoadedItems(items) {
        return items.map(data => new _models_monthly_snapshot__WEBPACK_IMPORTED_MODULE_1__.MonthlySnapshot(data));
    }
    addSnapshot(snapshot) {
        this.addItem(snapshot);
        this.calculatePercentageChanges();
    }
    updateSnapshot(snapshot) {
        this.updateItem(snapshot);
        this.calculatePercentageChanges();
    }
    deleteSnapshot(id) {
        this.deleteItem(id);
        this.calculatePercentageChanges();
    }
    getSnapshots() {
        return this.getItems();
    }
    calculateSharpeRatio() {
        try {
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Calculating Sharpe Ratio');
            // Get percentage changes and filter out undefined values
            const changes = this.items
                .filter(item => typeof item.percentageChange === 'number')
                .map(item => item.percentageChange);
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, `Found ${changes.length} valid percentage changes`);
            // Need at least 2 data points for meaningful calculation
            if (changes.length < 2) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Insufficient data points for Sharpe Ratio calculation');
                return null;
            }
            // Calculate average return
            const average = changes.reduce((a, b) => a + b, 0) / changes.length;
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, `Average return: ${average.toFixed(2)}%`);
            // Calculate standard deviation
            const variance = changes.reduce((a, b) => a + Math.pow(b - average, 2), 0) / (changes.length - 1);
            const stdDev = Math.sqrt(variance);
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, `Standard deviation: ${stdDev.toFixed(2)}`);
            // Avoid division by zero
            if (stdDev === 0) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Standard deviation is zero, cannot calculate Sharpe Ratio');
                return null;
            }
            // Calculate annualized Sharpe Ratio
            const sharpeRatio = (average / stdDev) * Math.sqrt(12);
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, `Calculated Sharpe Ratio: ${sharpeRatio.toFixed(2)}`);
            return sharpeRatio;
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Error calculating Sharpe Ratio', error);
            return null;
        }
    }
    calculatePercentageChanges() {
        try {
            // Sort snapshots by date
            const sortedSnapshots = [...this.items].sort((a, b) => {
                if (a.year !== b.year)
                    return a.year - b.year;
                return a.month - b.month;
            });
            // Calculate percentage changes
            for (let i = 1; i < sortedSnapshots.length; i++) {
                const current = sortedSnapshots[i];
                const previous = sortedSnapshots[i - 1];
                const percentageChange = ((current.netAsset - previous.netAsset) / previous.netAsset) * 100;
                current.percentageChange = Number(percentageChange.toFixed(2));
            }
            // First snapshot has no percentage change
            if (sortedSnapshots.length > 0) {
                sortedSnapshots[0].percentageChange = undefined;
            }
            this.saveItems();
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Successfully calculated percentage changes');
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Error calculating percentage changes', error);
        }
    }
}


/***/ }),

/***/ "./app/services/report-service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportService: () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/transaction-service.ts");
/* harmony import */ var _asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/asset-service.ts");
/* harmony import */ var _liability_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/liability-service.ts");
/* harmony import */ var _utils_financial_calculations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/financial-calculations.ts");





class ReportService extends _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Observable {
    constructor() {
        super();
        this.transactionService = _transaction_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService.getInstance();
        this.assetService = _asset_service__WEBPACK_IMPORTED_MODULE_1__.AssetService.getInstance();
        this.liabilityService = _liability_service__WEBPACK_IMPORTED_MODULE_2__.LiabilityService.getInstance();
    }
    static getInstance() {
        if (!ReportService.instance) {
            ReportService.instance = new ReportService();
        }
        return ReportService.instance;
    }
    generateFinancialHealthReport() {
        const assets = this.assetService.getAssets();
        const liabilities = this.liabilityService.getLiabilities();
        const transactions = this.transactionService.getTransactions();
        const monthlyIncome = transactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0) / 12;
        return {
            netWorth: (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_3__.calculateNetWorth)(assets, liabilities),
            debtToIncomeRatio: monthlyIncome > 0 ? this.liabilityService.getTotalLiabilities() / monthlyIncome : 0,
            monthlyCashflow: (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_3__.calculateMonthlyCashflow)(transactions),
            monthlyReports: this.generateMonthlyReports()
        };
    }
    generateMonthlyReports() {
        const reports = [];
        const currentDate = new Date();
        // Generate reports for the last 12 months
        for (let i = 0; i < 12; i++) {
            const month = (currentDate.getMonth() - i + 12) % 12;
            const year = currentDate.getFullYear() - Math.floor(i / 12);
            const monthTransactions = this.transactionService
                .getMonthlyTransactions(month, year);
            const income = monthTransactions
                .filter(t => t.type === 'income')
                .reduce((sum, t) => sum + t.amount, 0);
            const expenses = monthTransactions
                .filter(t => t.type === 'expense')
                .reduce((sum, t) => sum + t.amount, 0);
            const savings = income - expenses;
            const savingsRate = income > 0 ? (savings / income) * 100 : 0;
            reports.push({
                month,
                year,
                income,
                expenses,
                savings,
                savingsRate
            });
        }
        return reports;
    }
}


/***/ }),

/***/ "./app/services/storage-service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _database_db_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/database/db-service.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'StorageService';
class StorageService {
    constructor() {
        this.db = _database_db_service__WEBPACK_IMPORTED_MODULE_0__.DatabaseService.getInstance();
    }
    static getInstance() {
        if (!StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }
    async setItem(key, value) {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            const jsonValue = JSON.stringify(value);
            await this.db.execute('INSERT OR REPLACE INTO app_storage (key, value) VALUES (?, ?)', [key, jsonValue]);
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, `Successfully stored data for key: ${key}`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, `Error storing data for key: ${key}`, error);
            throw error;
        }
    }
    async getItem(key, defaultValue) {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            const results = await this.db.select('SELECT value FROM app_storage WHERE key = ?', [key]);
            if (results.length > 0) {
                return JSON.parse(results[0].value);
            }
            return defaultValue;
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, `Error retrieving data for key: ${key}`, error);
            return defaultValue;
        }
    }
    async removeItem(key) {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            await this.db.execute('DELETE FROM app_storage WHERE key = ?', [key]);
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, `Successfully removed data for key: ${key}`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, `Error removing data for key: ${key}`, error);
            throw error;
        }
    }
    async clear() {
        try {
            await this.db.execute('DELETE FROM app_storage');
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Successfully cleared all storage');
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, 'Error clearing storage', error);
            throw error;
        }
    }
}


/***/ }),

/***/ "./app/services/transaction-service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionService: () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var _models_transaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/models/transaction.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/base-service.ts");
/* harmony import */ var _constants_storage_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/constants/storage-keys.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/logger.ts");




class TransactionService extends _base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
    constructor() {
        super();
        this.TAG = 'TransactionService';
        this.storageKey = _constants_storage_keys__WEBPACK_IMPORTED_MODULE_2__.StorageKeys.TRANSACTIONS;
    }
    static getInstance() {
        if (!TransactionService.instance) {
            TransactionService.instance = new TransactionService();
        }
        return TransactionService.instance;
    }
    transformLoadedItems(items) {
        return items.map(data => new _models_transaction__WEBPACK_IMPORTED_MODULE_0__.Transaction({
            ...data,
            amount: Number(data.amount),
            timeRequired: data.timeRequired ? Number(data.timeRequired) : undefined
        }));
    }
    getMonthlyTransactions(month, year) {
        return this.items.filter(t => t.month === month && t.year === year);
    }
    addTransaction(transaction) {
        transaction.amount = Number(transaction.amount);
        if (isNaN(transaction.amount)) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.error(this.TAG, 'Invalid transaction amount');
            return;
        }
        this.addItem(transaction);
    }
    updateTransaction(transaction) {
        transaction.amount = Number(transaction.amount);
        if (isNaN(transaction.amount)) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.error(this.TAG, 'Invalid transaction amount');
            return;
        }
        this.updateItem(transaction);
    }
    deleteTransaction(id) {
        this.deleteItem(id);
    }
    getTransactions() {
        return this.getItems();
    }
    getTotalIncome() {
        return this.items
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + Number(t.amount), 0);
    }
    getTotalExpenses() {
        return this.items
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + Number(t.amount), 0);
    }
    getTotalTimeRequired() {
        return this.items
            .filter(t => t.type === 'income' && t.timeRequired)
            .reduce((sum, t) => sum + Number(t.timeRequired || 0), 0);
    }
}


/***/ }),

/***/ "./app/utils/chart-colors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartColors: () => (/* binding */ ChartColors)
/* harmony export */ });
const ChartColors = {
    // Asset Categories
    RealEstate: '#4C51BF', // Indigo
    Vehicles: '#48BB78', // Green
    Cash: '#4299E1', // Blue
    Business: '#ED8936', // Orange
    Saving: '#9F7AEA', // Purple
    Stocks: '#F56565', // Red
    // Transaction Categories - Income
    Salary: '#48BB78', // Green
    'Interest/Dividends': '#9F7AEA', // Purple
    // Transaction Categories - Expense
    Housing: '#4C51BF', // Indigo
    Transportation: '#48BB78', // Green
    Food: '#4299E1', // Blue
    Utilities: '#ED8936', // Orange
    Insurance: '#9F7AEA', // Purple
    Healthcare: '#F56565', // Red
    Entertainment: '#667EEA', // Indigo
    Loan: '#D53F8C', // Pink
    // Liability Types
    ShortTerm: '#F56565', // Red
    LongTerm: '#4C51BF' // Indigo
};


/***/ }),

/***/ "./app/utils/dialog.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showDialog: () => (/* binding */ showDialog)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/ui/dialogs/index.android.js");

function showDialog(options) {
    if ('actions' in options) {
        return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Dialogs.action({
            title: options.title,
            message: options.message,
            cancelButtonText: 'Cancel',
            actions: options.actions.map(a => a.text)
        }).then(result => {
            if (result === 'Cancel')
                return 'cancel';
            const action = options.actions.find(a => a.text === result);
            return action ? action.id : 'cancel';
        });
    }
    return _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Dialogs.confirm(options);
}


/***/ }),

/***/ "./app/utils/financial-calculations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDAR: () => (/* binding */ calculateDAR),
/* harmony export */   calculateDTI: () => (/* binding */ calculateDTI),
/* harmony export */   calculateLR: () => (/* binding */ calculateLR),
/* harmony export */   calculateMonthlyCashflow: () => (/* binding */ calculateMonthlyCashflow),
/* harmony export */   calculateNetWorth: () => (/* binding */ calculateNetWorth),
/* harmony export */   calculateWeightedAverageInterestRate: () => (/* binding */ calculateWeightedAverageInterestRate)
/* harmony export */ });
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/logger.ts");

const TAG = 'FinancialCalculations';
function calculateNetWorth(assets, liabilities) {
    const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
    const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.amount, 0);
    return totalAssets - totalLiabilities;
}
function calculateMonthlyCashflow(transactions) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const monthlyTransactions = transactions.filter(t => t.month === currentMonth &&
        t.year === currentYear);
    return monthlyTransactions.reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);
}
function calculateWeightedAverageInterestRate(liabilities) {
    const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.amount, 0);
    if (totalLiabilities === 0)
        return 0;
    const totalInterestPerYear = liabilities.reduce((sum, liability) => sum + (liability.amount * (liability.interestRate / 100)), 0);
    return (totalInterestPerYear / totalLiabilities) * 100;
}
function calculateDTI(transactions) {
    try {
        const totalMonthlyInterest = transactions.reduce((sum, t) => sum + (t.category === 'Credit Card/Loan' ? t.amount : 0), 0);
        const totalMonthlyIncome = transactions.reduce((sum, t) => sum + (t.type === 'income' ? t.amount : 0), 0);
        if (totalMonthlyIncome === 0) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, 'DTI calculation: Total monthly income is 0');
            return 0;
        }
        return (totalMonthlyInterest / totalMonthlyIncome) * 100;
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, 'Error calculating DTI', error);
        return 0;
    }
}
function calculateLR(assets, transactions) {
    try {
        const currentAssets = assets.reduce((sum, asset) => sum + (asset.category === 'Stocks' || asset.category === 'Saving/Cash' ? asset.value : 0), 0);
        const monthlyExpenses = transactions.reduce((sum, t) => sum + (t.type === 'expense' ? t.amount : 0), 0);
        if (monthlyExpenses === 0) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, 'LR calculation: Monthly expenses are 0');
            return 0;
        }
        return currentAssets / monthlyExpenses;
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, 'Error calculating LR', error);
        return 0;
    }
}
function calculateDAR(assets, liabilities) {
    try {
        const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
        const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.amount, 0);
        if (totalAssets === 0) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, 'DAR calculation: Total assets are 0');
            return 0;
        }
        return (totalLiabilities / totalAssets) * 100;
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, 'Error calculating DAR', error);
        return 0;
    }
}


/***/ }),

/***/ "./app/utils/formatters.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatCurrency: () => (/* binding */ formatCurrency),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatPercentage: () => (/* binding */ formatPercentage)
/* harmony export */ });
function formatCurrency(amount) {
    // Ensure we're working with a number
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    // Check if it's a valid number
    if (isNaN(numericAmount)) {
        return '$0.00';
    }
    // Format with 2 decimal places and add dollar sign
    return `$${numericAmount.toFixed(2)}`;
}
function formatDate(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        return 'Invalid Date';
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}
function formatPercentage(value, includeSymbol = true) {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numericValue)) {
        return includeSymbol ? '0.00%' : '0.00';
    }
    return `${numericValue.toFixed(2)}${includeSymbol ? '%' : ''}`;
}


/***/ }),

/***/ "./app/utils/ios-color-extension.ts":
/***/ (() => {

// @ts-ignore
if (false) {}


/***/ }),

/***/ "./app/utils/logger-interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./app/utils/logger.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/platform/common.js");
/* harmony import */ var _platform_android_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/platform/android-logger.ts");
/* harmony import */ var _platform_console_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/platform/console-logger.ts");



class LoggerService {
    constructor() {
        this.androidLogger = new _platform_android_logger__WEBPACK_IMPORTED_MODULE_0__.AndroidLogger();
        this.consoleLogger = new _platform_console_logger__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger();
    }
    debug(tag, message, ...args) {
        this.consoleLogger.debug(tag, message, ...args);
        if (_nativescript_core__WEBPACK_IMPORTED_MODULE_2__.isAndroid) {
            this.androidLogger.debug(tag, message);
        }
    }
    error(tag, message, error) {
        this.consoleLogger.error(tag, message, error);
        if (_nativescript_core__WEBPACK_IMPORTED_MODULE_2__.isAndroid) {
            this.androidLogger.error(tag, message);
        }
    }
}
const Logger = new LoggerService();


/***/ }),

/***/ "./app/utils/navigation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigateToPage: () => (/* binding */ navigateToPage)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.android.js");

function navigateToPage(pagePath, context) {
    _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Frame.topmost().navigate({
        moduleName: pagePath,
        context: context,
        clearHistory: false
    });
}


/***/ }),

/***/ "./app/utils/platform/android-logger.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AndroidLogger: () => (/* binding */ AndroidLogger)
/* harmony export */ });
class AndroidLogger {
    debug(tag, message) {
        if (global.android && android.util) {
            android.util.Log.d(tag, message);
        }
    }
    error(tag, message) {
        if (global.android && android.util) {
            android.util.Log.e(tag, message);
        }
    }
}


/***/ }),

/***/ "./app/utils/platform/console-logger.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleLogger: () => (/* binding */ ConsoleLogger)
/* harmony export */ });
class ConsoleLogger {
    debug(tag, message, ...args) {
        const logMessage = `[${tag}] ${message}`;
        console.log(logMessage, ...args);
    }
    error(tag, message, error) {
        const logMessage = `[${tag}] ERROR: ${message}`;
        console.error(logMessage);
        if (error) {
            console.error(error);
        }
    }
}


/***/ }),

/***/ "./app/view-models/assets/add-asset-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddAssetViewModel: () => (/* binding */ AddAssetViewModel)
/* harmony export */ });
/* harmony import */ var _base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/base-view-model.ts");
/* harmony import */ var _models_asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/models/asset.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/asset-service.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/logger.ts");




const TAG = 'AddAssetViewModel';
class AddAssetViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor(existingAsset) {
        super();
        this._name = '';
        this._value = 0;
        this._selectedCategoryIndex = 0;
        this._categories = [
            'Real Estate', 'Business', 'Stocks', 'Art & Antiquities', 'Saving/Cash'
        ];
        this._assetService = _services_asset_service__WEBPACK_IMPORTED_MODULE_2__.AssetService.getInstance();
        this._existingAsset = existingAsset;
        if (existingAsset) {
            this.initializeWithExistingAsset(existingAsset);
        }
    }
    initializeWithExistingAsset(asset) {
        this._name = asset.name;
        this._value = asset.value;
        this._selectedCategoryIndex = this._categories.indexOf(asset.category);
    }
    get name() { return this._name; }
    set name(value) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange('name', value);
        }
    }
    get value() { return this._value; }
    set value(value) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._value !== numericValue) {
            this._value = numericValue;
            this.notifyPropertyChange('value', numericValue);
        }
    }
    get categories() { return this._categories; }
    get selectedCategoryIndex() { return this._selectedCategoryIndex; }
    set selectedCategoryIndex(value) {
        if (this._selectedCategoryIndex !== value) {
            this._selectedCategoryIndex = value;
            this.notifyPropertyChange('selectedCategoryIndex', value);
        }
    }
    onSave() {
        try {
            if (!this._name.trim()) {
                throw new Error('Asset name is required');
            }
            if (isNaN(this._value) || this._value <= 0) {
                throw new Error('Asset value must be greater than 0');
            }
            const asset = new _models_asset__WEBPACK_IMPORTED_MODULE_1__.Asset({
                ...(this._existingAsset && { id: this._existingAsset.id }),
                name: this._name.trim(),
                value: this._value,
                category: this._categories[this._selectedCategoryIndex]
            });
            if (this._existingAsset) {
                this._assetService.updateAsset(asset);
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.debug(TAG, `Successfully updated asset: ${asset.name}`);
            }
            else {
                this._assetService.addAsset(asset);
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.debug(TAG, `Successfully added asset: ${asset.name}`);
            }
            this.goBack();
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.error(TAG, 'Error saving asset', error);
        }
    }
}


/***/ }),

/***/ "./app/view-models/assets/asset-distribution-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetDistributionViewModel: () => (/* binding */ AssetDistributionViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _utils_chart_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/chart-colors.ts");


class AssetDistributionViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Observable {
    constructor() {
        super(...arguments);
        this._chartData = [];
    }
    get chartData() {
        return this._chartData;
    }
    updateData(assets) {
        const total = assets.reduce((sum, asset) => sum + asset.value, 0);
        // Group assets by category
        const categoryMap = new Map();
        assets.forEach(asset => {
            const current = categoryMap.get(asset.category) || 0;
            categoryMap.set(asset.category, current + asset.value);
        });
        // Convert to chart data
        this._chartData = Array.from(categoryMap.entries())
            .map(([category, value]) => ({
            label: category,
            value,
            color: _utils_chart_colors__WEBPACK_IMPORTED_MODULE_0__.ChartColors[category],
            percentage: total > 0 ? Math.round((value / total) * 100) : 0
        }))
            .sort((a, b) => b.value - a.value);
        this.notifyPropertyChange('chartData', this._chartData);
    }
}


/***/ }),

/***/ "./app/view-models/assets/asset-list-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AssetListViewModel: () => (/* binding */ AssetListViewModel)
/* harmony export */ });
/* harmony import */ var _base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/base-view-model.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/asset-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/formatters.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/navigation.ts");
/* harmony import */ var _utils_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/dialog.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/logger.ts");
/* harmony import */ var _asset_distribution_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/view-models/assets/asset-distribution-view-model.ts");







const TAG = 'AssetListViewModel';
class AssetListViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor() {
        super();
        this._assets = [];
        this._assetService = _services_asset_service__WEBPACK_IMPORTED_MODULE_1__.AssetService.getInstance();
        this._distributionViewModel = new _asset_distribution_view_model__WEBPACK_IMPORTED_MODULE_6__.AssetDistributionViewModel();
        this.loadAssets();
    }
    get assets() {
        return this._assets.map(asset => ({
            ...asset,
            formattedValue: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(asset.value)
        }));
    }
    get totalAssetsFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(this._assetService.getTotalAssetValue());
    }
    get distributionViewModel() {
        return this._distributionViewModel;
    }
    refresh() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, 'Refreshing assets list');
        this.loadAssets();
    }
    onAddAsset() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_3__.navigateToPage)("views/assets/add-asset-page");
    }
    onItemTap(args) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, 'Asset item tapped');
        const asset = this._assets[args.index];
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
            title: asset.name,
            message: `Value: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(asset.value)}`,
            actions: [
                { id: 'edit', text: 'Edit' },
                { id: 'delete', text: 'Delete' }
            ]
        }).then(result => {
            if (result === 'edit') {
                this.editAsset(asset);
            }
            else if (result === 'delete') {
                this.deleteAsset(asset);
            }
        }).catch(error => {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(TAG, 'Error handling item tap', error);
        });
    }
    loadAssets() {
        try {
            this._assets = this._assetService.getAssets();
            this._distributionViewModel.updateData(this._assets);
            this.notifyPropertyChange('assets', this.assets);
            this.notifyPropertyChange('totalAssetsFormatted', this.totalAssetsFormatted);
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, `Loaded ${this._assets.length} assets`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(TAG, 'Error loading assets', error);
        }
    }
    editAsset(asset) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, `Editing asset: ${asset.id}`);
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_3__.navigateToPage)('views/assets/add-asset-page', { asset });
    }
    deleteAsset(asset) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, `Deleting asset: ${asset.id}`);
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this asset?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then(result => {
            if (result) {
                this._assetService.deleteAsset(asset.id);
                this.loadAssets();
                _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, `Asset deleted: ${asset.id}`);
            }
        }).catch(error => {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(TAG, 'Error deleting asset', error);
        });
    }
}


/***/ }),

/***/ "./app/view-models/base-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseViewModel: () => (/* binding */ BaseViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.android.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'BaseViewModel';
class BaseViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Observable {
    goBack() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, 'Attempting to navigate back');
        try {
            const frame = _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Frame.topmost();
            if (frame) {
                frame.goBack();
                _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, 'Successfully navigated back');
            }
            else {
                _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, 'Frame is null, cannot navigate back');
            }
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, 'Error navigating back', error);
        }
    }
}


/***/ }),

/***/ "./app/view-models/dashboard-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardViewModel: () => (/* binding */ DashboardViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/navigation.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/transaction-service.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/asset-service.ts");
/* harmony import */ var _services_liability_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/liability-service.ts");
/* harmony import */ var _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/services/monthly-snapshot-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/formatters.ts");
/* harmony import */ var _utils_financial_calculations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/utils/financial-calculations.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/utils/logger.ts");









const TAG = 'DashboardViewModel';
class DashboardViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_8__.Observable {
    constructor() {
        super();
        this._netWorth = 0;
        this._totalIncome = 0;
        this._totalExpenses = 0;
        this._totalAssets = 0;
        this._totalLiabilities = 0;
        this._cashflow = 0;
        this._hourlyRate = 0;
        this._sharpeRatio = null;
        this._weightedInterestRate = 0;
        this._dti = 0;
        this._lr = 0;
        this._dar = 0;
        this.transactionService = _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__.TransactionService.getInstance();
        this.assetService = _services_asset_service__WEBPACK_IMPORTED_MODULE_2__.AssetService.getInstance();
        this.liabilityService = _services_liability_service__WEBPACK_IMPORTED_MODULE_3__.LiabilityService.getInstance();
        this.monthlySnapshotService = _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_4__.MonthlySnapshotService.getInstance();
        this.calculateFinancials();
    }
    // Navigation methods
    onNavigateToIncome() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_0__.navigateToPage)('views/transactions/transaction-list-page', { filterType: 'income' });
    }
    onNavigateToExpense() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_0__.navigateToPage)('views/transactions/transaction-list-page', { filterType: 'expense' });
    }
    onNavigateToAssets() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_0__.navigateToPage)('views/assets/asset-list-page');
    }
    onNavigateToLiabilities() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_0__.navigateToPage)('views/liabilities/liability-list-page');
    }
    onNavigateToMonthlySnapshot() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_0__.navigateToPage)('views/monthly-snapshot/monthly-snapshot-page');
    }
    // Formatted getters
    get netWorthFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_5__.formatCurrency)(this._netWorth);
    }
    get cashflowFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_5__.formatCurrency)(this._cashflow);
    }
    get hourlyRateFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_5__.formatCurrency)(Math.round(this._hourlyRate * 100) / 100);
    }
    get cashflow() {
        return this._cashflow;
    }
    get sharpeRatioFormatted() {
        return this._sharpeRatio !== null
            ? (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_5__.formatPercentage)(this._sharpeRatio, false)
            : 'N/A';
    }
    get weightedInterestRateFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_5__.formatPercentage)(this._weightedInterestRate);
    }
    get dtiFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_5__.formatPercentage)(this._dti);
    }
    get lrFormatted() {
        return this._lr.toFixed(2);
    }
    get darFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_5__.formatPercentage)(this._dar);
    }
    calculateFinancials() {
        try {
            const assets = this.assetService.getAssets();
            const liabilities = this.liabilityService.getLiabilities();
            const transactions = this.transactionService.getTransactions();
            // Calculate totals
            this._totalAssets = this.assetService.getTotalAssetValue();
            this._totalLiabilities = this.liabilityService.getTotalLiabilities();
            this._totalIncome = this.transactionService.getTotalIncome();
            this._totalExpenses = this.transactionService.getTotalExpenses();
            // Calculate metrics
            this._netWorth = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_6__.calculateNetWorth)(assets, liabilities);
            this._cashflow = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_6__.calculateMonthlyCashflow)(transactions);
            const totalTimeRequired = this.transactionService.getTotalTimeRequired();
            this._hourlyRate = totalTimeRequired > 0 ? this._totalIncome / totalTimeRequired : 0;
            this._sharpeRatio = this.monthlySnapshotService.calculateSharpeRatio();
            this._weightedInterestRate = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_6__.calculateWeightedAverageInterestRate)(liabilities);
            this._dti = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_6__.calculateDTI)(transactions);
            this._lr = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_6__.calculateLR)(assets, transactions);
            this._dar = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_6__.calculateDAR)(assets, liabilities);
            // Notify property changes
            this.notifyPropertyChanges();
            _utils_logger__WEBPACK_IMPORTED_MODULE_7__.Logger.debug(TAG, 'Financial calculations completed successfully');
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_7__.Logger.error(TAG, 'Error calculating financials', error);
        }
    }
    notifyPropertyChanges() {
        this.notifyPropertyChange('netWorthFormatted', this.netWorthFormatted);
        this.notifyPropertyChange('cashflowFormatted', this.cashflowFormatted);
        this.notifyPropertyChange('cashflow', this.cashflow);
        this.notifyPropertyChange('hourlyRateFormatted', this.hourlyRateFormatted);
        this.notifyPropertyChange('sharpeRatioFormatted', this.sharpeRatioFormatted);
        this.notifyPropertyChange('weightedInterestRateFormatted', this.weightedInterestRateFormatted);
        this.notifyPropertyChange('dtiFormatted', this.dtiFormatted);
        this.notifyPropertyChange('lrFormatted', this.lrFormatted);
        this.notifyPropertyChange('darFormatted', this.darFormatted);
    }
}


/***/ }),

/***/ "./app/view-models/liabilities/add-liability-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddLiabilityViewModel: () => (/* binding */ AddLiabilityViewModel)
/* harmony export */ });
/* harmony import */ var _base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/base-view-model.ts");
/* harmony import */ var _models_liability__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/models/liability.ts");
/* harmony import */ var _services_liability_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/liability-service.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/logger.ts");




const TAG = 'AddLiabilityViewModel';
class AddLiabilityViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor(existingLiability) {
        super();
        this._name = '';
        this._amount = 0;
        this._interestRate = 0;
        this._selectedTypeIndex = 0;
        this._types = ['Loan', 'Debt/Payable'];
        this._liabilityService = _services_liability_service__WEBPACK_IMPORTED_MODULE_2__.LiabilityService.getInstance();
        this._existingLiability = existingLiability;
        if (existingLiability) {
            this.initializeWithExistingLiability(existingLiability);
        }
    }
    initializeWithExistingLiability(liability) {
        this._name = liability.name;
        this._amount = liability.amount;
        this._interestRate = liability.interestRate;
        this._selectedTypeIndex = this._types.indexOf(liability.type);
    }
    get name() { return this._name; }
    set name(value) {
        if (this._name !== value) {
            this._name = value;
            this.notifyPropertyChange('name', value);
        }
    }
    get amount() { return this._amount; }
    set amount(value) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._amount !== numericValue) {
            this._amount = numericValue;
            this.notifyPropertyChange('amount', numericValue);
        }
    }
    get interestRate() { return this._interestRate; }
    set interestRate(value) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._interestRate !== numericValue) {
            this._interestRate = numericValue;
            this.notifyPropertyChange('interestRate', numericValue);
        }
    }
    get types() { return this._types; }
    get selectedTypeIndex() { return this._selectedTypeIndex; }
    set selectedTypeIndex(value) {
        if (this._selectedTypeIndex !== value) {
            this._selectedTypeIndex = value;
            this.notifyPropertyChange('selectedTypeIndex', value);
        }
    }
    get isEditing() { return !!this._existingLiability; }
    onSave() {
        try {
            if (!this._name.trim()) {
                throw new Error('Liability name is required');
            }
            if (isNaN(this._amount) || this._amount <= 0) {
                throw new Error('Liability amount must be greater than 0');
            }
            if (isNaN(this._interestRate) || this._interestRate < 0) {
                throw new Error('Interest rate must be 0 or greater');
            }
            const liability = new _models_liability__WEBPACK_IMPORTED_MODULE_1__.Liability({
                ...(this._existingLiability && { id: this._existingLiability.id }),
                name: this._name.trim(),
                amount: this._amount,
                interestRate: this._interestRate,
                type: this._types[this._selectedTypeIndex]
            });
            if (this._existingLiability) {
                this._liabilityService.updateLiability(liability);
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.debug(TAG, `Successfully updated liability: ${liability.name}`);
            }
            else {
                this._liabilityService.addLiability(liability);
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.debug(TAG, `Successfully added liability: ${liability.name}`);
            }
            this.goBack();
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.error(TAG, 'Error saving liability', error);
        }
    }
}


/***/ }),

/***/ "./app/view-models/liabilities/liability-distribution-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiabilityDistributionViewModel: () => (/* binding */ LiabilityDistributionViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _utils_chart_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/chart-colors.ts");


class LiabilityDistributionViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Observable {
    constructor() {
        super(...arguments);
        this._chartData = [];
    }
    get chartData() {
        return this._chartData;
    }
    updateData(liabilities) {
        const total = liabilities.reduce((sum, liability) => sum + liability.amount, 0);
        // Group liabilities by type
        const typeMap = new Map();
        liabilities.forEach(liability => {
            const current = typeMap.get(liability.type) || 0;
            typeMap.set(liability.type, current + liability.amount);
        });
        // Convert to chart data
        this._chartData = Array.from(typeMap.entries())
            .map(([type, value]) => ({
            label: type,
            value,
            color: type === 'Debt/Payable' ? _utils_chart_colors__WEBPACK_IMPORTED_MODULE_0__.ChartColors.ShortTerm : _utils_chart_colors__WEBPACK_IMPORTED_MODULE_0__.ChartColors.LongTerm,
            percentage: total > 0 ? Math.round((value / total) * 100) : 0
        }))
            .sort((a, b) => b.value - a.value);
        this.notifyPropertyChange('chartData', this._chartData);
    }
}


/***/ }),

/***/ "./app/view-models/liabilities/liability-list-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LiabilityListViewModel: () => (/* binding */ LiabilityListViewModel)
/* harmony export */ });
/* harmony import */ var _base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/base-view-model.ts");
/* harmony import */ var _services_liability_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/liability-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/formatters.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/navigation.ts");
/* harmony import */ var _utils_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/dialog.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/logger.ts");
/* harmony import */ var _liability_distribution_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/view-models/liabilities/liability-distribution-view-model.ts");







const TAG = 'LiabilityListViewModel';
class LiabilityListViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor() {
        super();
        this._liabilities = [];
        this._liabilityService = _services_liability_service__WEBPACK_IMPORTED_MODULE_1__.LiabilityService.getInstance();
        this._distributionViewModel = new _liability_distribution_view_model__WEBPACK_IMPORTED_MODULE_6__.LiabilityDistributionViewModel();
        this.loadLiabilities();
    }
    get liabilities() {
        return this._liabilities.map(liability => ({
            ...liability,
            formattedAmount: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(liability.amount),
            formattedInterestRate: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatPercentage)(liability.interestRate)
        }));
    }
    get totalLiabilitiesFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(this._liabilityService.getTotalLiabilities());
    }
    get distributionViewModel() {
        return this._distributionViewModel;
    }
    refresh() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, 'Refreshing liabilities list');
        this.loadLiabilities();
    }
    onAddLiability() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_3__.navigateToPage)("views/liabilities/add-liability-page");
    }
    onItemTap(args) {
        const liability = this._liabilities[args.index];
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
            title: liability.name,
            message: `Amount: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(liability.amount)}\nInterest Rate: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatPercentage)(liability.interestRate)}`,
            actions: [
                { id: 'edit', text: 'Edit' },
                { id: 'delete', text: 'Delete' }
            ]
        }).then(result => {
            if (result === 'edit') {
                this.editLiability(liability);
            }
            else if (result === 'delete') {
                this.deleteLiability(liability);
            }
        });
    }
    loadLiabilities() {
        try {
            this._liabilities = this._liabilityService.getLiabilities();
            this._distributionViewModel.updateData(this._liabilities);
            this.notifyPropertyChange('liabilities', this.liabilities);
            this.notifyPropertyChange('totalLiabilitiesFormatted', this.totalLiabilitiesFormatted);
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, `Loaded ${this._liabilities.length} liabilities`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(TAG, 'Error loading liabilities', error);
        }
    }
    editLiability(liability) {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_3__.navigateToPage)('views/liabilities/add-liability-page', { liability });
    }
    deleteLiability(liability) {
        const dialogOptions = {
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this liability?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)(dialogOptions).then(result => {
            if (result) {
                this._liabilityService.deleteLiability(liability.id);
                this.loadLiabilities();
            }
        });
    }
}


/***/ }),

/***/ "./app/view-models/monthly-snapshot-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthlySnapshotViewModel: () => (/* binding */ MonthlySnapshotViewModel)
/* harmony export */ });
/* harmony import */ var _base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/base-view-model.ts");
/* harmony import */ var _models_monthly_snapshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/models/monthly-snapshot.ts");
/* harmony import */ var _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/monthly-snapshot-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/formatters.ts");
/* harmony import */ var _utils_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/dialog.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/logger.ts");






const TAG = 'MonthlySnapshotViewModel';
class MonthlySnapshotViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor() {
        super();
        this._netAsset = 0;
        this._years = [];
        this._months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this._snapshotService = _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_2__.MonthlySnapshotService.getInstance();
        const currentDate = new Date();
        this._selectedYear = currentDate.getFullYear();
        this._selectedMonth = currentDate.getMonth();
        this.initializeYears();
    }
    initializeYears() {
        const currentYear = new Date().getFullYear();
        this._years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
    }
    get netAsset() { return this._netAsset; }
    set netAsset(value) {
        if (this._netAsset !== value) {
            this._netAsset = value;
            this.notifyPropertyChange('netAsset', value);
        }
    }
    get selectedYear() { return this._selectedYear; }
    set selectedYear(value) {
        if (this._selectedYear !== value) {
            this._selectedYear = value;
            this.notifyPropertyChange('selectedYear', value);
        }
    }
    get selectedMonth() { return this._selectedMonth; }
    set selectedMonth(value) {
        if (this._selectedMonth !== value) {
            this._selectedMonth = value;
            this.notifyPropertyChange('selectedMonth', value);
        }
    }
    get years() { return this._years; }
    get months() { return this._months; }
    get snapshots() {
        return this._snapshotService.getSnapshots()
            .sort((a, b) => {
            if (a.year !== b.year)
                return b.year - a.year;
            return b.month - a.month;
        })
            .map(snapshot => ({
            ...snapshot,
            formattedDate: `${this._months[snapshot.month]} ${snapshot.year}`,
            formattedNetAsset: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(snapshot.netAsset),
            formattedPercentageChange: snapshot.percentageChange
                ? (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatPercentage)(snapshot.percentageChange)
                : 'N/A'
        }));
    }
    onSave() {
        try {
            if (this._netAsset <= 0) {
                throw new Error('Net asset value must be greater than 0');
            }
            // Check if snapshot already exists for selected month/year
            const existing = this._snapshotService.getSnapshots().find(s => s.year === this._selectedYear && s.month === this._selectedMonth);
            if (existing) {
                (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
                    title: 'Snapshot Exists',
                    message: 'A snapshot already exists for this month. Do you want to update it?',
                    okButtonText: 'Update',
                    cancelButtonText: 'Cancel'
                }).then(result => {
                    if (result) {
                        existing.netAsset = this._netAsset;
                        this._snapshotService.updateSnapshot(existing);
                        this.resetForm();
                    }
                });
                return;
            }
            const snapshot = new _models_monthly_snapshot__WEBPACK_IMPORTED_MODULE_1__.MonthlySnapshot({
                year: this._selectedYear,
                month: this._selectedMonth,
                netAsset: this._netAsset
            });
            this._snapshotService.addSnapshot(snapshot);
            this.resetForm();
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, 'Successfully saved snapshot');
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(TAG, 'Error saving snapshot', error);
        }
    }
    onItemTap(args) {
        const snapshot = this._snapshotService.getSnapshots()[args.index];
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
            title: `${this._months[snapshot.month]} ${snapshot.year}`,
            message: `Net Asset: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(snapshot.netAsset)}`,
            actions: [
                { id: 'edit', text: 'Edit' },
                { id: 'delete', text: 'Delete' }
            ]
        }).then(result => {
            if (result === 'edit') {
                this.editSnapshot(snapshot);
            }
            else if (result === 'delete') {
                this.deleteSnapshot(snapshot);
            }
        });
    }
    editSnapshot(snapshot) {
        this._selectedYear = snapshot.year;
        this._selectedMonth = snapshot.month;
        this._netAsset = snapshot.netAsset;
        this.notifyPropertyChange('selectedYear', this._selectedYear);
        this.notifyPropertyChange('selectedMonth', this._selectedMonth);
        this.notifyPropertyChange('netAsset', this._netAsset);
    }
    deleteSnapshot(snapshot) {
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this snapshot?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then(result => {
            if (result) {
                this._snapshotService.deleteSnapshot(snapshot.id);
                this.notifyPropertyChange('snapshots', this.snapshots);
            }
        });
    }
    resetForm() {
        const currentDate = new Date();
        this._selectedYear = currentDate.getFullYear();
        this._selectedMonth = currentDate.getMonth();
        this._netAsset = 0;
        this.notifyPropertyChange('selectedYear', this._selectedYear);
        this.notifyPropertyChange('selectedMonth', this._selectedMonth);
        this.notifyPropertyChange('netAsset', this._netAsset);
        this.notifyPropertyChange('snapshots', this.snapshots);
    }
}


/***/ }),

/***/ "./app/view-models/monthly-snapshot/add-snapshot-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddSnapshotViewModel: () => (/* binding */ AddSnapshotViewModel)
/* harmony export */ });
/* harmony import */ var _base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/base-view-model.ts");
/* harmony import */ var _models_monthly_snapshot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/models/monthly-snapshot.ts");
/* harmony import */ var _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/monthly-snapshot-service.ts");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/event-bus-service.ts");
/* harmony import */ var _utils_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/dialog.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/logger.ts");






const TAG = 'AddSnapshotViewModel';
class AddSnapshotViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor(existingSnapshot) {
        super();
        this._netAsset = 0;
        this._years = [];
        this._months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this._snapshotService = _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_2__.MonthlySnapshotService.getInstance();
        this._eventBus = _services_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService.getInstance();
        this._existingSnapshot = existingSnapshot;
        const currentDate = new Date();
        this._selectedYear = currentDate.getFullYear();
        this._selectedMonth = currentDate.getMonth();
        this.initializeYears();
        if (existingSnapshot) {
            this.initializeWithExistingSnapshot(existingSnapshot);
        }
    }
    get netAsset() { return this._netAsset; }
    set netAsset(value) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._netAsset !== numericValue) {
            this._netAsset = numericValue;
            this.notifyPropertyChange('netAsset', numericValue);
        }
    }
    get selectedYear() { return this._selectedYear; }
    set selectedYear(value) {
        if (this._selectedYear !== value) {
            this._selectedYear = value;
            this.notifyPropertyChange('selectedYear', value);
        }
    }
    get selectedMonth() { return this._selectedMonth; }
    set selectedMonth(value) {
        if (this._selectedMonth !== value) {
            this._selectedMonth = value;
            this.notifyPropertyChange('selectedMonth', value);
        }
    }
    get years() { return this._years; }
    get months() { return this._months; }
    initializeYears() {
        const currentYear = new Date().getFullYear();
        this._years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
    }
    initializeWithExistingSnapshot(snapshot) {
        this._netAsset = snapshot.netAsset;
        this._selectedYear = snapshot.year;
        this._selectedMonth = snapshot.month;
    }
    async onSave() {
        try {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, 'Attempting to save snapshot');
            if (isNaN(this._netAsset)) {
                throw new Error('Please enter a valid number for net asset value');
            }
            const existing = this._snapshotService.getSnapshots().find(s => s.year === this._selectedYear &&
                s.month === this._selectedMonth &&
                (!this._existingSnapshot || s.id !== this._existingSnapshot.id));
            if (existing) {
                const result = await (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
                    title: 'Snapshot Exists',
                    message: 'A snapshot already exists for this month. Do you want to update it?',
                    okButtonText: 'Update',
                    cancelButtonText: 'Cancel'
                });
                if (!result) {
                    return;
                }
            }
            const snapshot = new _models_monthly_snapshot__WEBPACK_IMPORTED_MODULE_1__.MonthlySnapshot({
                ...(this._existingSnapshot && { id: this._existingSnapshot.id }),
                year: this._selectedYear,
                month: this._selectedMonth,
                netAsset: this._netAsset
            });
            if (this._existingSnapshot) {
                this._snapshotService.updateSnapshot(snapshot);
                _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, `Successfully updated snapshot for ${this._months[this._selectedMonth]} ${this._selectedYear}`);
            }
            else {
                this._snapshotService.addSnapshot(snapshot);
                _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, `Successfully added snapshot for ${this._months[this._selectedMonth]} ${this._selectedYear}`);
            }
            this._eventBus.emit(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventNames.SNAPSHOT_UPDATED);
            this.goBack();
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(TAG, 'Error saving snapshot', error);
            await (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
                title: 'Error',
                message: error instanceof Error ? error.message : 'Failed to save snapshot',
                okButtonText: 'OK'
            });
        }
    }
}


/***/ }),

/***/ "./app/view-models/monthly-snapshot/monthly-snapshot-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MonthlySnapshotViewModel: () => (/* binding */ MonthlySnapshotViewModel)
/* harmony export */ });
/* harmony import */ var _base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/base-view-model.ts");
/* harmony import */ var _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/monthly-snapshot-service.ts");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/event-bus-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/formatters.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/navigation.ts");
/* harmony import */ var _utils_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/dialog.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/utils/logger.ts");







const TAG = 'MonthlySnapshotViewModel';
class MonthlySnapshotViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor() {
        super();
        this._snapshots = [];
        this._months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this._snapshotService = _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_1__.MonthlySnapshotService.getInstance();
        this._eventBus = _services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__.EventBusService.getInstance();
        // Listen for snapshot updates
        this._eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__.EventNames.SNAPSHOT_UPDATED, () => {
            this.loadSnapshots();
        });
        this.loadSnapshots();
    }
    get snapshots() {
        return this._snapshots
            .sort((a, b) => {
            if (a.year !== b.year)
                return b.year - a.year;
            return b.month - a.month;
        })
            .map(snapshot => ({
            ...snapshot,
            formattedDate: `${this._months[snapshot.month]} ${snapshot.year}`,
            formattedNetAsset: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(snapshot.netAsset),
            formattedPercentageChange: snapshot.percentageChange !== undefined
                ? (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatPercentage)(snapshot.percentageChange)
                : 'N/A'
        }));
    }
    refresh() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(TAG, 'Refreshing snapshots');
        this.loadSnapshots();
    }
    onAddSnapshot() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(TAG, 'Navigating to Add Snapshot page');
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_4__.navigateToPage)('views/monthly-snapshot/add-snapshot-page');
    }
    onItemTap(args) {
        const snapshot = this._snapshots[args.index];
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_5__.showDialog)({
            title: `${this._months[snapshot.month]} ${snapshot.year}`,
            message: `Net Asset: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(snapshot.netAsset)}`,
            actions: [
                { id: 'edit', text: 'Edit' },
                { id: 'delete', text: 'Delete' }
            ]
        }).then(result => {
            if (result === 'edit') {
                this.editSnapshot(snapshot);
            }
            else if (result === 'delete') {
                this.deleteSnapshot(snapshot);
            }
        });
    }
    onUnloaded() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(TAG, 'Cleaning up event listeners');
        this._eventBus.off(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_2__.EventNames.SNAPSHOT_UPDATED);
    }
    loadSnapshots() {
        try {
            this._snapshots = this._snapshotService.getSnapshots();
            this.notifyPropertyChange('snapshots', this.snapshots);
            _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(TAG, `Loaded ${this._snapshots.length} snapshots`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.error(TAG, 'Error loading snapshots', error);
        }
    }
    editSnapshot(snapshot) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(TAG, `Editing snapshot: ${snapshot.id}`);
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_4__.navigateToPage)('views/monthly-snapshot/add-snapshot-page', { snapshot });
    }
    deleteSnapshot(snapshot) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(TAG, `Deleting snapshot: ${snapshot.id}`);
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_5__.showDialog)({
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this snapshot?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then(result => {
            if (result) {
                this._snapshotService.deleteSnapshot(snapshot.id);
                this.loadSnapshots();
                _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(TAG, `Snapshot deleted: ${snapshot.id}`);
            }
        });
    }
}


/***/ }),

/***/ "./app/view-models/reports/financial-health-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinancialHealthViewModel: () => (/* binding */ FinancialHealthViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _services_report_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/report-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/formatters.ts");



class FinancialHealthViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Observable {
    constructor() {
        super();
        this._reportService = _services_report_service__WEBPACK_IMPORTED_MODULE_0__.ReportService.getInstance();
        this.loadReport();
    }
    get netWorthFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_1__.formatCurrency)(this._report.netWorth);
    }
    get monthlyCashflowFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_1__.formatCurrency)(this._report.monthlyCashflow);
    }
    get debtToIncomeRatioFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_1__.formatPercentage)(this._report.debtToIncomeRatio * 100);
    }
    get monthlyReports() {
        return this._report.monthlyReports.map(report => ({
            ...report,
            monthYear: `${new Date(report.year, report.month).toLocaleString('default', { month: 'short', year: 'numeric' })}`,
            incomeFormatted: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_1__.formatCurrency)(report.income),
            expensesFormatted: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_1__.formatCurrency)(report.expenses),
            savingsRateFormatted: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_1__.formatPercentage)(report.savingsRate)
        }));
    }
    loadReport() {
        this._report = this._reportService.generateFinancialHealthReport();
        this.notifyPropertyChange('monthlyReports', this.monthlyReports);
    }
}


/***/ }),

/***/ "./app/view-models/transactions/add-transaction-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddTransactionViewModel: () => (/* binding */ AddTransactionViewModel)
/* harmony export */ });
/* harmony import */ var _base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/base-view-model.ts");
/* harmony import */ var _models_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/models/transaction.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/transaction-service.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/logger.ts");




const TAG = 'AddTransactionViewModel';
class AddTransactionViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor(isIncome, existingTransaction) {
        super();
        this._description = '';
        this._amount = 0;
        this._selectedCategoryIndex = 0;
        this._timeRequired = 1;
        this._categories = [];
        this._isIncome = isIncome;
        this._existingTransaction = existingTransaction;
        this._transactionService = _services_transaction_service__WEBPACK_IMPORTED_MODULE_2__.TransactionService.getInstance();
        this._categories = this.getCategories();
        if (existingTransaction) {
            this.initializeWithExistingTransaction(existingTransaction);
        }
    }
    initializeWithExistingTransaction(transaction) {
        this._description = transaction.description;
        this._amount = Number(transaction.amount);
        this._selectedCategoryIndex = this._categories.indexOf(transaction.category);
        if (transaction.type === 'income') {
            this._timeRequired = transaction.timeRequired || 1;
        }
    }
    get description() { return this._description; }
    set description(value) {
        if (this._description !== value) {
            this._description = value;
            this.notifyPropertyChange('description', value);
        }
    }
    get amount() { return this._amount; }
    set amount(value) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && this._amount !== numericValue) {
            this._amount = numericValue;
            this.notifyPropertyChange('amount', numericValue);
        }
    }
    get timeRequired() { return this._timeRequired; }
    set timeRequired(value) {
        const numericValue = Number(value);
        if (!isNaN(numericValue) && numericValue > 0 && this._timeRequired !== numericValue) {
            this._timeRequired = numericValue;
            this.notifyPropertyChange('timeRequired', numericValue);
        }
    }
    get categories() { return this._categories; }
    get selectedCategoryIndex() { return this._selectedCategoryIndex; }
    set selectedCategoryIndex(value) {
        if (this._selectedCategoryIndex !== value) {
            this._selectedCategoryIndex = value;
            this.notifyPropertyChange('selectedCategoryIndex', value);
        }
    }
    get isIncome() { return this._isIncome; }
    getCategories() {
        return this._isIncome
            ? ['Salary', 'Business', 'Rent', 'Interest', 'Royalties']
            : ['Consumer basket', 'Habits', 'Car', 'Routine', 'Housing', 'Credit Card/Loan'];
    }
    onSave() {
        try {
            const transaction = new _models_transaction__WEBPACK_IMPORTED_MODULE_1__.Transaction({
                ...(this._existingTransaction && { id: this._existingTransaction.id }),
                type: this._isIncome ? 'income' : 'expense',
                category: this._categories[this._selectedCategoryIndex],
                amount: this._amount,
                description: this._description,
                timeRequired: this._isIncome ? this._timeRequired : undefined
            });
            if (this._existingTransaction) {
                this._transactionService.updateTransaction(transaction);
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.debug(TAG, `Successfully updated ${this._isIncome ? 'income' : 'expense'} transaction`);
            }
            else {
                this._transactionService.addTransaction(transaction);
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.debug(TAG, `Successfully added ${this._isIncome ? 'income' : 'expense'} transaction`);
            }
            this.goBack();
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_3__.Logger.error(TAG, 'Error saving transaction', error);
        }
    }
}


/***/ }),

/***/ "./app/view-models/transactions/transaction-distribution-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionDistributionViewModel: () => (/* binding */ TransactionDistributionViewModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _utils_chart_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/chart-colors.ts");


class TransactionDistributionViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Observable {
    constructor() {
        super(...arguments);
        this._chartData = [];
    }
    get chartData() {
        return this._chartData;
    }
    updateData(transactions, type) {
        const filteredTransactions = transactions.filter(t => t.type === type);
        const total = filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
        // Group transactions by category
        const categoryMap = new Map();
        filteredTransactions.forEach(transaction => {
            const current = categoryMap.get(transaction.category) || 0;
            categoryMap.set(transaction.category, current + transaction.amount);
        });
        // Convert to chart data
        this._chartData = Array.from(categoryMap.entries())
            .map(([category, value]) => ({
            label: category,
            value,
            color: _utils_chart_colors__WEBPACK_IMPORTED_MODULE_0__.ChartColors[category] || '#CBD5E0', // Default color if not found
            percentage: total > 0 ? Math.round((value / total) * 100) : 0
        }))
            .sort((a, b) => b.value - a.value);
        this.notifyPropertyChange('chartData', this._chartData);
    }
}


/***/ }),

/***/ "./app/view-models/transactions/transaction-list-view-model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionListViewModel: () => (/* binding */ TransactionListViewModel)
/* harmony export */ });
/* harmony import */ var _base_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/base-view-model.ts");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/transaction-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/formatters.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/navigation.ts");
/* harmony import */ var _utils_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/dialog.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/logger.ts");
/* harmony import */ var _transaction_distribution_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/view-models/transactions/transaction-distribution-view-model.ts");







const TAG = 'TransactionListViewModel';
class TransactionListViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor(filterType) {
        super();
        this._transactions = [];
        this._filterType = filterType;
        this._transactionService = _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__.TransactionService.getInstance();
        this._distributionViewModel = new _transaction_distribution_view_model__WEBPACK_IMPORTED_MODULE_6__.TransactionDistributionViewModel();
        this.loadTransactions();
    }
    get filterType() {
        return this._filterType;
    }
    get distributionViewModel() {
        return this._distributionViewModel;
    }
    get totalAmountFormatted() {
        const total = this._filterType === 'income'
            ? this._transactionService.getTotalIncome()
            : this._transactionService.getTotalExpenses();
        return `Total ${this._filterType === 'income' ? 'Income' : 'Expenses'}: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(total)}`;
    }
    get transactions() {
        let filteredTransactions = [...this._transactions];
        if (this._filterType) {
            filteredTransactions = filteredTransactions.filter(t => t.type === this._filterType);
        }
        return filteredTransactions.map(transaction => ({
            ...transaction,
            formattedAmount: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(transaction.amount),
            hourlyRateFormatted: transaction.type === 'income' && transaction.timeRequired
                ? (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(Math.round((transaction.amount / transaction.timeRequired) * 100) / 100)
                : ''
        }));
    }
    refresh() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, 'Refreshing transactions list');
        this.loadTransactions();
    }
    onAddTransaction() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_3__.navigateToPage)('views/transactions/add-transaction-page', {
            isIncome: this._filterType === 'income'
        });
    }
    onItemTap(args) {
        const transaction = this._transactions.filter(t => t.type === this._filterType)[args.index];
        const hourlyRate = transaction.type === 'income' && transaction.timeRequired
            ? `\nHourly Rate: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(transaction.amount / transaction.timeRequired)}/hr`
            : '';
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
            title: transaction.description,
            message: `Amount: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(transaction.amount)}${hourlyRate}`,
            actions: [
                { id: 'edit', text: 'Edit' },
                { id: 'delete', text: 'Delete' }
            ]
        }).then(result => {
            if (result === 'edit') {
                this.editTransaction(transaction);
            }
            else if (result === 'delete') {
                this.deleteTransaction(transaction);
            }
        });
    }
    loadTransactions() {
        try {
            this._transactions = this._transactionService.getTransactions();
            if (this._filterType) {
                this._distributionViewModel.updateData(this._transactions, this._filterType);
            }
            this.notifyPropertyChange('transactions', this.transactions);
            this.notifyPropertyChange('totalAmountFormatted', this.totalAmountFormatted);
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, `Loaded ${this._transactions.length} transactions`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(TAG, 'Error loading transactions', error);
        }
    }
    editTransaction(transaction) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, `Editing transaction: ${transaction.id}`);
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_3__.navigateToPage)('views/transactions/add-transaction-page', {
            isIncome: transaction.type === 'income',
            transaction
        });
    }
    deleteTransaction(transaction) {
        const dialogOptions = {
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this transaction?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)(dialogOptions).then(result => {
            if (result) {
                this._transactionService.deleteTransaction(transaction.id);
                this.loadTransactions();
            }
        });
    }
}


/***/ }),

/***/ "./app/views/assets/add-asset-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_assets_add_asset_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/assets/add-asset-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'AddAssetPage';
function navigatingTo(args) {
    const page = args.object;
    const existingAsset = args.context?.asset;
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, existingAsset ? 'Editing existing asset' : 'Adding new asset');
    page.bindingContext = new _view_models_assets_add_asset_view_model__WEBPACK_IMPORTED_MODULE_0__.AddAssetViewModel(existingAsset);
    // Update the ActionBar title based on whether we're editing or adding
    const actionBarTitle = existingAsset ? 'Edit Asset' : 'Add Asset';
    page.actionBar.title = actionBarTitle;
}


/***/ }),

/***/ "./app/views/assets/asset-list-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatedTo: () => (/* binding */ navigatedTo),
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_assets_asset_list_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/assets/asset-list-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'AssetListPage';
function navigatingTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating to Asset List page');
    const page = args.object;
    if (!page.bindingContext) {
        page.bindingContext = new _view_models_assets_asset_list_view_model__WEBPACK_IMPORTED_MODULE_0__.AssetListViewModel();
    }
}
function navigatedTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigated to Asset List page');
    const page = args.object;
    const viewModel = page.bindingContext;
    viewModel?.refresh();
}


/***/ }),

/***/ "./app/views/liabilities/add-liability-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_liabilities_add_liability_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/liabilities/add-liability-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'AddLiabilityPage';
function navigatingTo(args) {
    const page = args.object;
    const existingLiability = args.context?.liability;
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, existingLiability ? 'Editing existing liability' : 'Adding new liability');
    page.bindingContext = new _view_models_liabilities_add_liability_view_model__WEBPACK_IMPORTED_MODULE_0__.AddLiabilityViewModel(existingLiability);
    // Update the ActionBar title based on whether we're editing or adding
    const actionBarTitle = existingLiability ? 'Edit Liability' : 'Add Liability';
    page.actionBar.title = actionBarTitle;
}


/***/ }),

/***/ "./app/views/liabilities/liability-list-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatedTo: () => (/* binding */ navigatedTo),
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_liabilities_liability_list_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/liabilities/liability-list-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'LiabilityListPage';
function navigatingTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating to Liability List page');
    const page = args.object;
    if (!page.bindingContext) {
        page.bindingContext = new _view_models_liabilities_liability_list_view_model__WEBPACK_IMPORTED_MODULE_0__.LiabilityListViewModel();
    }
}
function navigatedTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigated to Liability List page');
    const page = args.object;
    const viewModel = page.bindingContext;
    viewModel?.refresh();
}


/***/ }),

/***/ "./app/views/main-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_dashboard_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/dashboard-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'MainPage';
function navigatingTo(args) {
    try {
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating to main page');
        const page = args.object;
        page.bindingContext = new _view_models_dashboard_view_model__WEBPACK_IMPORTED_MODULE_0__.DashboardViewModel();
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, 'Error in navigatingTo', error);
    }
}


/***/ }),

/***/ "./app/views/monthly-snapshot/add-snapshot-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_monthly_snapshot_add_snapshot_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/monthly-snapshot/add-snapshot-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'AddSnapshotPage';
function navigatingTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating to Add Snapshot page');
    const page = args.object;
    const existingSnapshot = args.context?.snapshot;
    page.bindingContext = new _view_models_monthly_snapshot_add_snapshot_view_model__WEBPACK_IMPORTED_MODULE_0__.AddSnapshotViewModel(existingSnapshot);
}


/***/ }),

/***/ "./app/views/monthly-snapshot/monthly-snapshot-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatedTo: () => (/* binding */ navigatedTo),
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo),
/* harmony export */   unloaded: () => (/* binding */ unloaded)
/* harmony export */ });
/* harmony import */ var _view_models_monthly_snapshot_monthly_snapshot_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/monthly-snapshot/monthly-snapshot-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'MonthlySnapshotPage';
function navigatingTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating to Monthly Snapshot page');
    const page = args.object;
    if (!page.bindingContext) {
        page.bindingContext = new _view_models_monthly_snapshot_monthly_snapshot_view_model__WEBPACK_IMPORTED_MODULE_0__.MonthlySnapshotViewModel();
    }
}
function navigatedTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigated to Monthly Snapshot page');
    const page = args.object;
    const viewModel = page.bindingContext;
    viewModel?.refresh();
}
function unloaded(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Monthly Snapshot page unloaded');
    const page = args.object;
    const viewModel = page.bindingContext;
    viewModel?.onUnloaded();
}


/***/ }),

/***/ "./app/views/transactions/add-transaction-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingFrom: () => (/* binding */ navigatingFrom),
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_transactions_add_transaction_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/transactions/add-transaction-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'AddTransactionPage';
function navigatingTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating to Add Transaction page');
    const page = args.object;
    const isIncome = args.context?.isIncome ?? false;
    const transaction = args.context?.transaction;
    page.bindingContext = new _view_models_transactions_add_transaction_view_model__WEBPACK_IMPORTED_MODULE_0__.AddTransactionViewModel(isIncome, transaction);
    // Set the ActionBar title based on whether we're editing or adding
    const action = transaction ? 'Edit' : 'Add';
    const type = isIncome ? 'Income' : 'Expense';
    page.actionBar.title = `${action} ${type}`;
}
function navigatingFrom(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating from Add Transaction page');
    const page = args.object;
    page.bindingContext = null;
}


/***/ }),

/***/ "./app/views/transactions/transaction-list-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatedTo: () => (/* binding */ navigatedTo),
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_transactions_transaction_list_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/transactions/transaction-list-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'TransactionListPage';
function navigatingTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating to Transaction List page');
    const page = args.object;
    if (!page.bindingContext) {
        page.bindingContext = new _view_models_transactions_transaction_list_view_model__WEBPACK_IMPORTED_MODULE_0__.TransactionListViewModel(args.context?.filterType);
    }
}
function navigatedTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigated to Transaction List page');
    const page = args.object;
    const viewModel = page.bindingContext;
    viewModel?.refresh();
}


/***/ }),

/***/ "./app/app-root.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Frame xmlns=\"http://schemas.nativescript.org/tns.xsd\" loaded=\"onLoaded\">\n</Frame>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/assets/asset-distribution-chart.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<GridLayout rows=\"auto, auto\" class=\"m-4\" \n    xmlns=\"http://schemas.nativescript.org/tns.xsd\">\n    <GridLayout row=\"0\" class=\"bg-gray-100 p-4 rounded-lg\">\n        <Repeater items=\"{{ chartData }}\" height=\"200\">\n            <Repeater.itemTemplate>\n                <StackLayout class=\"p-2\">\n                    <GridLayout columns=\"auto, *, auto\" class=\"mb-2\">\n                        <Label col=\"0\" text=\"●\" color=\"{{ color }}\" class=\"mr-2\" />\n                        <Label col=\"1\" text=\"{{ label }}\" class=\"text-sm\" />\n                        <Label col=\"2\" text=\"{{ percentage + '%' }}\" class=\"text-sm text-right\" />\n                    </GridLayout>\n                    <Progress value=\"{{ percentage }}\" maxValue=\"100\" \n                             class=\"m-1\" color=\"{{ color }}\" />\n                </StackLayout>\n            </Repeater.itemTemplate>\n        </Repeater>\n    </GridLayout>\n</GridLayout>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/ui/card.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<StackLayout class=\"bg-white m-4 p-4 rounded-xl elevation-4\">\n    <ng-content></ng-content>\n</StackLayout>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/components/ui/list-item.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b bg-white\">\n    <Label text=\"{{ title }}\" row=\"0\" col=\"0\" class=\"font-bold text-gray-800\" />\n    <Label text=\"{{ amount }}\" row=\"0\" col=\"1\" class=\"{{ amountClass }}\" />\n    <Label text=\"{{ subtitle }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n    <Label text=\"{{ details }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n</GridLayout>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/main-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <GridLayout columns=\"auto, *\" class=\"w-full\">\n            <Image src=\"~/assets/images/logo.png\" width=\"32\" height=\"32\" class=\"m-2\" col=\"0\" />\n            <Label text=\"Cete PFM\" class=\"text-white text-lg font-bold ml-2\" col=\"1\" />\n        </GridLayout>\n    </ActionBar>\n    \n    <ScrollView>\n        <StackLayout class=\"bg-gray-100\">\n            <!-- Key Metrics -->\n            <GridLayout columns=\"*, *\" class=\"mx-4 mt-4\">\n                <StackLayout class=\"bg-white p-6 rounded-xl elevation-4 m-1\" col=\"0\">\n                    <Label text=\"Monthly Cashflow\" class=\"text-gray-600 text-sm mb-1\" />\n                    <Label text=\"{{ cashflowFormatted }}\" class=\"{{ cashflow >= 0 ? 'text-green-600 text-2xl font-bold' : 'text-red-600 text-2xl font-bold' }}\" />\n                </StackLayout>\n                <StackLayout class=\"bg-white p-6 rounded-xl elevation-4 m-1\" col=\"1\">\n                    <Label text=\"Hourly Rate\" class=\"text-gray-600 text-sm mb-1\" />\n                    <Label text=\"{{ hourlyRateFormatted }}\" class=\"text-2xl font-bold\" />\n                </StackLayout>\n            </GridLayout>\n\n            <!-- Quick Actions -->\n            <GridLayout columns=\"*, *\" rows=\"auto, auto\" class=\"mx-4 mb-4\">\n                <Button text=\"INCOME\" tap=\"onNavigateToIncome\" \n                        class=\"bg-green-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"0\" col=\"0\" />\n                <Button text=\"EXPENSE\" tap=\"onNavigateToExpense\" \n                        class=\"bg-red-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"0\" col=\"1\" />\n                \n                <Button text=\"ASSETS\" tap=\"onNavigateToAssets\" \n                        class=\"bg-blue-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"1\" col=\"0\" />\n                <Button text=\"LIABILITIES\" tap=\"onNavigateToLiabilities\" \n                        class=\"bg-purple-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"1\" col=\"1\" />\n            </GridLayout>\n\n            <!-- Monthly Snapshot Button -->\n            <Button text=\"MONTHLY SNAPSHOT\" tap=\"onNavigateToMonthlySnapshot\" \n                    class=\"bg-indigo-500 text-white font-medium p-4 mx-4 mb-4 rounded-xl elevation-2\" />\n\n            <!-- Financial Metrics -->\n            <StackLayout class=\"bg-white m-4 p-6 rounded-xl elevation-4\">\n                <Label text=\"Financial Metrics\" class=\"text-xl font-bold mb-4\"/>\n                \n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Net Worth:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ netWorthFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Debt-to-Income:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ dtiFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Liquidity Ratio:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ lrFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Debt-to-Asset:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ darFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Weighted Interest Rate:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ weightedInterestRateFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\">\n                    <Label text=\"Sharpe Ratio:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ sharpeRatioFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/assets/add-asset-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Add Asset\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout class=\"p-4\">\n            <StackLayout class=\"bg-white p-6 rounded-xl elevation-4\">\n                <!-- Name Field -->\n                <Label text=\"Asset Name\" class=\"form-label\" />\n                <TextField hint=\"Enter name\" text=\"{{ name }}\" \n                          class=\"input-field\" />\n                \n                <!-- Value Field -->\n                <Label text=\"Value\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter value\" text=\"{{ value }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Category Selection -->\n                <Label text=\"Category\" class=\"form-label mt-4\" />\n                <ListPicker items=\"{{ categories }}\" \n                           selectedIndex=\"{{ selectedCategoryIndex }}\"\n                           class=\"input-field\" />\n            </StackLayout>\n            \n            <!-- Save Button -->\n            <Button text=\"Save Asset\" tap=\"{{ onSave }}\" \n                    class=\"bg-blue-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/assets/asset-list-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatedTo=\"navigatedTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Assets\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <GridLayout rows=\"auto, auto, auto, *\">\n        <!-- Total Assets Card -->\n        <StackLayout row=\"0\" class=\"bg-blue-500 m-4 p-6 rounded-xl elevation-4\">\n            <Label text=\"Total Assets\" class=\"text-white text-sm mb-1\" />\n            <Label text=\"{{ totalAssetsFormatted }}\" class=\"text-white text-2xl font-bold\" />\n        </StackLayout>\n        \n        <!-- Asset Distribution -->\n        <StackLayout row=\"1\" class=\"bg-white m-4 p-4 rounded-xl elevation-4\">\n            <Label text=\"Asset Distribution\" class=\"text-xl font-bold mb-4\" />\n            <Repeater items=\"{{ distributionViewModel.chartData }}\">\n                <Repeater.itemTemplate>\n                    <StackLayout class=\"m-2\">\n                        <GridLayout columns=\"auto, *, auto\" class=\"mb-1\">\n                            <Label col=\"0\" text=\"●\" color=\"{{ color }}\" class=\"mr-2\" />\n                            <Label col=\"1\" text=\"{{ label }}\" class=\"text-gray-700\" />\n                            <Label col=\"2\" text=\"{{ percentage + '%' }}\" class=\"text-gray-600\" />\n                        </GridLayout>\n                        <Progress value=\"{{ percentage }}\" maxValue=\"100\" \n                                 color=\"{{ color }}\" class=\"m-1\" />\n                    </StackLayout>\n                </Repeater.itemTemplate>\n            </Repeater>\n        </StackLayout>\n        \n        <!-- Add Asset Button -->\n        <Button row=\"2\" text=\"Add Asset\" tap=\"{{ onAddAsset }}\" \n                class=\"bg-blue-500 text-white font-medium p-4 mx-4 rounded-xl elevation-2\" />\n        \n        <!-- Asset List -->\n        <StackLayout row=\"3\" class=\"bg-white m-4 rounded-xl elevation-4\">\n            <Label text=\"Asset List\" class=\"p-4 text-xl font-bold\" />\n            <ListView items=\"{{ assets }}\" itemTap=\"{{ onItemTap }}\" class=\"list-view\">\n                <ListView.itemTemplate>\n                    <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                        <Label text=\"{{ name }}\" row=\"0\" col=\"0\" class=\"font-bold text-gray-800\" />\n                        <Label text=\"{{ formattedValue }}\" row=\"0\" col=\"1\" class=\"text-blue-600 font-bold text-right\" />\n                        <Label text=\"{{ category }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                    </GridLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/liabilities/add-liability-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"{{ isEditing ? 'Edit Liability' : 'Add Liability' }}\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout class=\"p-4\">\n            <StackLayout class=\"bg-white p-6 rounded-xl elevation-4\">\n                <!-- Name Field -->\n                <Label text=\"Liability Name\" class=\"form-label\" />\n                <TextField hint=\"Enter name\" text=\"{{ name }}\" \n                          class=\"input-field\" />\n                \n                <!-- Amount Field -->\n                <Label text=\"Amount\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter amount\" text=\"{{ amount }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Interest Rate Field -->\n                <Label text=\"Interest Rate (%)\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter interest rate\" text=\"{{ interestRate }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Type Selection -->\n                <Label text=\"Type\" class=\"form-label mt-4\" />\n                <ListPicker items=\"{{ types }}\" \n                           selectedIndex=\"{{ selectedTypeIndex }}\"\n                           class=\"input-field\" />\n            </StackLayout>\n            \n            <!-- Save Button -->\n            <Button text=\"{{ isEditing ? 'Update Liability' : 'Save Liability' }}\" tap=\"{{ onSave }}\" \n                    class=\"bg-purple-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/liabilities/liability-list-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatedTo=\"navigatedTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Liabilities\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <GridLayout rows=\"auto, auto, auto, *\">\n        <!-- Total Liabilities Card -->\n        <StackLayout row=\"0\" class=\"bg-purple-500 m-4 p-6 rounded-xl elevation-4\">\n            <Label text=\"Total Liabilities\" class=\"text-white text-sm mb-1\" />\n            <Label text=\"{{ totalLiabilitiesFormatted }}\" class=\"text-white text-2xl font-bold\" />\n        </StackLayout>\n        \n        <!-- Distribution Chart -->\n        <StackLayout row=\"1\" class=\"bg-white m-4 p-4 rounded-xl elevation-4\">\n            <Label text=\"Liability Distribution\" class=\"text-xl font-bold mb-4\" />\n            <Repeater items=\"{{ distributionViewModel.chartData }}\">\n                <Repeater.itemTemplate>\n                    <StackLayout class=\"m-2\">\n                        <GridLayout columns=\"auto, *, auto\" class=\"mb-1\">\n                            <Label col=\"0\" text=\"●\" color=\"{{ color }}\" class=\"mr-2\" />\n                            <Label col=\"1\" text=\"{{ label }}\" class=\"text-gray-700\" />\n                            <Label col=\"2\" text=\"{{ percentage + '%' }}\" class=\"text-gray-600\" />\n                        </GridLayout>\n                        <Progress value=\"{{ percentage }}\" maxValue=\"100\" \n                                 color=\"{{ color }}\" class=\"m-1\" />\n                    </StackLayout>\n                </Repeater.itemTemplate>\n            </Repeater>\n        </StackLayout>\n        \n        <!-- Add Button -->\n        <Button row=\"2\" text=\"Add Liability\" tap=\"{{ onAddLiability }}\" \n                class=\"bg-purple-500 text-white font-medium p-4 mx-4 rounded-xl elevation-2\" />\n        \n        <!-- Liabilities List -->\n        <StackLayout row=\"3\" class=\"bg-white m-4 rounded-xl elevation-4\">\n            <Label text=\"Liability List\" class=\"p-4 text-xl font-bold\" />\n            <ListView items=\"{{ liabilities }}\" itemTap=\"{{ onItemTap }}\" class=\"list-view\">\n                <ListView.itemTemplate>\n                    <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                        <Label text=\"{{ name }}\" row=\"0\" col=\"0\" class=\"font-bold text-gray-800\" />\n                        <Label text=\"{{ formattedAmount }}\" row=\"0\" col=\"1\" class=\"text-purple-600 font-bold text-right\" />\n                        <Label text=\"{{ type }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                        <Label text=\"{{ formattedInterestRate }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n                    </GridLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/main-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <Label text=\"Cete PFM\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView>\n        <StackLayout class=\"bg-gray-100\">\n            <!-- Key Metrics -->\n            <GridLayout columns=\"*, *\" class=\"mx-4 mt-4\">\n                <StackLayout class=\"bg-white p-6 rounded-xl elevation-4 m-1\" col=\"0\">\n                    <Label text=\"Monthly Cashflow\" class=\"text-gray-600 text-sm mb-1\" />\n                    <Label text=\"{{ cashflowFormatted }}\" \n                           class=\"{{ cashflow >= 0 ? 'text-green-600 text-2xl font-bold' : 'text-red-600 text-2xl font-bold' }}\" />\n                </StackLayout>\n                <StackLayout class=\"bg-white p-6 rounded-xl elevation-4 m-1\" col=\"1\">\n                    <Label text=\"Hourly Rate\" class=\"text-gray-600 text-sm mb-1\" />\n                    <Label text=\"{{ hourlyRateFormatted }}\" class=\"text-2xl font-bold\" />\n                </StackLayout>\n            </GridLayout>\n\n            <!-- Quick Actions -->\n            <GridLayout columns=\"*, *\" rows=\"auto, auto\" class=\"mx-4 mb-4\">\n                <Button text=\"INCOME\" tap=\"{{ onNavigateToIncome }}\" \n                        class=\"bg-green-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"0\" col=\"0\" />\n                <Button text=\"EXPENSE\" tap=\"{{ onNavigateToExpense }}\" \n                        class=\"bg-red-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"0\" col=\"1\" />\n                \n                <Button text=\"ASSETS\" tap=\"{{ onNavigateToAssets }}\" \n                        class=\"bg-blue-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"1\" col=\"0\" />\n                <Button text=\"LIABILITIES\" tap=\"{{ onNavigateToLiabilities }}\" \n                        class=\"bg-purple-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"1\" col=\"1\" />\n            </GridLayout>\n\n            <!-- Monthly Snapshot Button -->\n            <Button text=\"MONTHLY SNAPSHOT\" tap=\"{{ onNavigateToMonthlySnapshot }}\" \n                    class=\"bg-indigo-500 text-white font-medium p-4 mx-4 mb-4 rounded-xl elevation-2\" />\n\n            <!-- Financial Metrics -->\n            <StackLayout class=\"bg-white m-4 p-6 rounded-xl elevation-4\">\n                <Label text=\"Financial Metrics\" class=\"text-xl font-bold mb-4\"/>\n                \n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Net Worth:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ netWorthFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Debt-to-Income:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ dtiFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Liquidity Ratio:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ lrFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Debt-to-Asset:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ darFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Weighted Interest Rate:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ weightedInterestRateFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n\n                <GridLayout columns=\"*, auto\" rows=\"auto\">\n                    <Label text=\"Sharpe Ratio:\" class=\"text-gray-600\" row=\"0\" col=\"0\"/>\n                    <Label text=\"{{ sharpeRatioFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\"/>\n                </GridLayout>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/monthly-snapshot/add-snapshot-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"{{ isEditing ? 'Edit Snapshot' : 'Add Snapshot' }}\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <StackLayout class=\"bg-gray-100\">\n        <StackLayout class=\"bg-white p-6 m-4 rounded-xl elevation-4\">\n            <!-- Year Selection -->\n            <Label text=\"Year\" class=\"form-label\" />\n            <ListPicker items=\"{{ years }}\" \n                       selectedIndex=\"{{ yearIndex }}\"\n                       class=\"input-field\" />\n\n            <!-- Month Selection -->\n            <Label text=\"Month\" class=\"form-label mt-4\" />\n            <ListPicker items=\"{{ months }}\" \n                       selectedIndex=\"{{ selectedMonth }}\"\n                       class=\"input-field\" />\n\n            <!-- Net Asset Value -->\n            <Label text=\"Net Asset Value\" class=\"form-label mt-4\" />\n            <TextField hint=\"Enter net asset value\" text=\"{{ netAsset }}\" \n                      keyboardType=\"number\"\n                      class=\"input-field\" />\n                      \n            <!-- Save Button -->\n            <Button text=\"{{ isEditing ? 'Update' : 'Save' }}\" \n                    tap=\"{{ onSave }}\"\n                    class=\"bg-blue-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2\" />\n        </StackLayout>\n    </StackLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/monthly-snapshot/monthly-snapshot-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatedTo=\"navigatedTo\"\n    unloaded=\"unloaded\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Monthly Snapshot\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <GridLayout rows=\"auto, *\">\n        <!-- Add Button -->\n        <Button row=\"0\" text=\"Add New Snapshot\" tap=\"{{ onAddSnapshot }}\" \n                class=\"bg-blue-500 text-white font-medium p-4 m-4 rounded-xl elevation-2\" />\n\n        <!-- History Section -->\n        <StackLayout row=\"1\" class=\"bg-white m-4 rounded-xl elevation-4\">\n            <Label text=\"Snapshot History\" class=\"text-xl font-bold p-4\" />\n            <ListView items=\"{{ snapshots }}\" itemTap=\"{{ onItemTap }}\" class=\"list-view\">\n                <ListView.itemTemplate>\n                    <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                        <Label text=\"{{ formattedDate }}\" row=\"0\" col=\"0\" class=\"font-bold\" />\n                        <Label text=\"{{ formattedNetAsset }}\" row=\"0\" col=\"1\" class=\"text-right\" />\n                        <Label text=\"Change:\" row=\"1\" col=\"0\" class=\"text-sm text-gray-600\" />\n                        <Label text=\"{{ formattedPercentageChange }}\" row=\"1\" col=\"1\" \n                               class=\"text-right text-sm\" \n                               color=\"{{ percentageChange >= 0 ? '#10B981' : '#EF4444' }}\" />\n                    </GridLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/reports/financial-health-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar title=\"Financial Health\" />\n    \n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <!-- Overview Section -->\n            <StackLayout class=\"bg-blue-100 p-4 rounded-lg mb-4\">\n                <Label text=\"Financial Overview\" class=\"text-xl font-bold mb-2\" />\n                <GridLayout columns=\"*, *\" rows=\"auto, auto, auto\">\n                    <Label text=\"Net Worth:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ netWorthFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\" />\n                    \n                    <Label text=\"Monthly Cashflow:\" class=\"text-gray-600\" row=\"1\" col=\"0\" />\n                    <Label text=\"{{ monthlyCashflowFormatted }}\" class=\"text-right font-bold\" row=\"1\" col=\"1\" />\n                    \n                    <Label text=\"Debt-to-Income:\" class=\"text-gray-600\" row=\"2\" col=\"0\" />\n                    <Label text=\"{{ debtToIncomeRatioFormatted }}\" class=\"text-right font-bold\" row=\"2\" col=\"1\" />\n                </GridLayout>\n            </StackLayout>\n\n            <!-- Monthly Reports -->\n            <Label text=\"Monthly Reports\" class=\"text-xl font-bold mb-2\" />\n            <ListView items=\"{{ monthlyReports }}\" height=\"300\">\n                <ListView.itemTemplate>\n                    <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                        <Label text=\"{{ monthYear }}\" row=\"0\" col=\"0\" class=\"font-bold\" />\n                        <Label text=\"{{ savingsRateFormatted }}\" row=\"0\" col=\"1\" class=\"text-right\" />\n                        <Label text=\"{{ 'Income: ' + incomeFormatted }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                        <Label text=\"{{ 'Expenses: ' + expensesFormatted }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n                    </GridLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </ScrollView>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/shared/list-item.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n    <Label text=\"{{ name }}\" row=\"0\" col=\"0\" class=\"font-bold\" />\n    <Label text=\"{{ formattedAmount }}\" row=\"0\" col=\"1\" class=\"text-right\" />\n    <Label text=\"{{ subtitle }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n    <Label text=\"{{ details }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n</GridLayout>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/transactions/add-transaction-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatingFrom=\"navigatingFrom\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"{{ isIncome ? 'Add Income' : 'Add Expense' }}\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout class=\"p-4\">\n            <StackLayout class=\"bg-white p-6 rounded-xl elevation-4\">\n                <!-- Description Field -->\n                <Label text=\"Description\" class=\"form-label\" />\n                <TextField hint=\"Enter description\" text=\"{{ description }}\" \n                          class=\"input-field\" />\n                \n                <!-- Amount Field -->\n                <Label text=\"Amount\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter amount\" text=\"{{ amount }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Category Selection -->\n                <Label text=\"Category\" class=\"form-label mt-4\" />\n                <ListPicker items=\"{{ categories }}\" \n                           selectedIndex=\"{{ selectedCategoryIndex }}\"\n                           class=\"input-field\" />\n                \n                <!-- Time Required (Only for Income) -->\n                <StackLayout visibility=\"{{ isIncome ? 'visible' : 'collapsed' }}\">\n                    <Label text=\"Time Required (Hours)\" class=\"form-label mt-4\" />\n                    <TextField hint=\"Enter hours required\" text=\"{{ timeRequired }}\" \n                              keyboardType=\"number\"\n                              class=\"input-field\" />\n                </StackLayout>\n            </StackLayout>\n            \n            <!-- Save Button -->\n            <Button text=\"{{ isIncome ? 'Save Income' : 'Save Expense' }}\" tap=\"{{ onSave }}\" \n                    class=\"{{ isIncome ? 'bg-green-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2' : 'bg-red-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2' }}\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "./app/views/transactions/transaction-list-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatedTo=\"navigatedTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"{{ filterType === 'income' ? 'Income' : 'Expenses' }}\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <GridLayout rows=\"auto, auto, auto, *\">\n        <!-- Summary Card -->\n        <StackLayout row=\"0\" class=\"{{ filterType === 'income' ? 'bg-green-500 m-4 p-6 rounded-xl elevation-4' : 'bg-red-500 m-4 p-6 rounded-xl elevation-4' }}\">\n            <Label text=\"{{ filterType === 'income' ? 'Total Income' : 'Total Expenses' }}\" \n                   class=\"text-white text-sm mb-1\" />\n            <Label text=\"{{ totalAmountFormatted }}\" class=\"text-white text-2xl font-bold\" />\n        </StackLayout>\n        \n        <!-- Distribution Chart -->\n        <StackLayout row=\"1\" class=\"bg-white m-4 p-4 rounded-xl elevation-4\">\n            <Label text=\"{{ filterType === 'income' ? 'Income Distribution' : 'Expense Distribution' }}\" \n                   class=\"text-xl font-bold mb-4\" />\n            \n            <Repeater items=\"{{ distributionViewModel.chartData }}\">\n                <Repeater.itemTemplate>\n                    <StackLayout class=\"m-2\">\n                        <GridLayout columns=\"auto, *, auto\" class=\"mb-1\">\n                            <Label col=\"0\" text=\"●\" color=\"{{ color }}\" class=\"mr-2\" />\n                            <Label col=\"1\" text=\"{{ label }}\" class=\"text-gray-700\" />\n                            <Label col=\"2\" text=\"{{ percentage + '%' }}\" class=\"text-gray-600\" />\n                        </GridLayout>\n                        <Progress value=\"{{ percentage }}\" maxValue=\"100\" \n                                 color=\"{{ color }}\" class=\"m-1\" />\n                    </StackLayout>\n                </Repeater.itemTemplate>\n            </Repeater>\n        </StackLayout>\n        \n        <!-- Action Button -->\n        <Button row=\"2\" text=\"{{ 'Add ' + (filterType === 'income' ? 'Income' : 'Expense') }}\" \n                tap=\"{{ onAddTransaction }}\" \n                class=\"{{ filterType === 'income' ? 'bg-green-500 text-white font-medium p-4 mx-4 rounded-xl elevation-2' : 'bg-red-500 text-white font-medium p-4 mx-4 rounded-xl elevation-2' }}\" />\n        \n        <!-- Transactions List -->\n        <StackLayout row=\"3\" class=\"bg-white m-4 rounded-xl elevation-4\">\n            <Label text=\"Transaction History\" class=\"p-4 text-xl font-bold\" />\n            <ListView items=\"{{ transactions }}\" itemTap=\"{{ onItemTap }}\" class=\"list-view\">\n                <ListView.itemTemplate>\n                    <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                        <Label text=\"{{ description }}\" row=\"0\" col=\"0\" class=\"font-bold text-gray-800\" />\n                        <Label text=\"{{ formattedAmount }}\" row=\"0\" col=\"1\" \n                               class=\"{{ type === 'income' ? 'text-green-600' : 'text-red-600' }} font-bold text-right\" />\n                        <Label text=\"{{ category }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                        <Label text=\"{{ type === 'income' ? (hourlyRateFormatted + '/hr') : '' }}\" row=\"1\" col=\"1\" \n                               class=\"text-gray-600 text-sm text-right\" />\n                    </GridLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


/***/ }),

/***/ "nativescript-sqlite-commercial":
/***/ ((module) => {

"use strict";
module.exports = require("nativescript-sqlite-commercial");

/***/ }),

/***/ "nativescript-sqlite-commercial/commercial-multi":
/***/ ((module) => {

"use strict";
module.exports = require("nativescript-sqlite-commercial/commercial-multi");

/***/ }),

/***/ "nativescript-sqlite-encrypted":
/***/ ((module) => {

"use strict";
module.exports = require("nativescript-sqlite-encrypted");

/***/ }),

/***/ "nativescript-sqlite-sync":
/***/ ((module) => {

"use strict";
module.exports = require("nativescript-sqlite-sync");

/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

"use strict";
module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/webpack/dist/stubs/virtual-entry-typescript.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./app/app.ts"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/index.android.js"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/activity.android.js")));
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ZoRDtBQUNBLG1WQUFtVixTQUFTLGdDQUFnQyxrREFBa0QsOExBQThMLHdIQUF3SCxrQ0FBa0MsOERBQThELDJGQUEyRix1QkFBdUIsc09BQXNPLDJFQUEyRSw0R0FBNEcsa0NBQWtDLGlQQUFpUCxRQUFRLDZFQUE2RSxRQUFRLHNGQUFzRixtQkFBbUIsbUhBQW1ILGFBQWEsa0VBQWtFLFFBQVEsa09BQWtPLDREQUE0RCw4QkFBOEIsbUJBQW1CLGdDQUFnQyx3S0FBd0sseVBBQXlQLGVBQWUsZ0JBQWdCLFlBQVksNE1BQTRNLGNBQWMsc0dBQXNHLGtCQUFrQixtRUFBbUUseURBQXlELG9FQUFvRSxXQUFXLG9HQUFvRyx5REFBeUQ7QUFDMytHLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7O0FDSGhEOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvIHN5bmMgXFwuKHhtbCU3Q2pzJTdDKCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9hcHAtcm9vdC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9jb25zdGFudHMvc3RvcmFnZS1rZXlzLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2RhdGFiYXNlL2RhdGFiYXNlLWNvbmZpZy50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9kYXRhYmFzZS9kYi1zZXJ2aWNlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2RhdGFiYXNlL2ZpbGUtc3lzdGVtLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2RhdGFiYXNlL21pZ3JhdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvZGF0YWJhc2Uvc3FsaXRlLWhlbHBlci50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9kYXRhYmFzZS90cmFuc2FjdGlvbi1tYW5hZ2VyLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL21haW4tcGFnZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9tYWluLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvbW9kZWxzL2Fzc2V0LnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL21vZGVscy9maW5hbmNpYWwtcmVwb3J0LnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL21vZGVscy9saWFiaWxpdHkudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvbW9kZWxzL21vbnRobHktc25hcHNob3QudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvbW9kZWxzL3RyYW5zYWN0aW9uLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3NlcnZpY2VzL2V2ZW50LWJ1cy1zZXJ2aWNlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3NlcnZpY2VzL21vbnRobHktc25hcHNob3Qtc2VydmljZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9zZXJ2aWNlcy9yZXBvcnQtc2VydmljZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9zZXJ2aWNlcy9zdG9yYWdlLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC91dGlscy9jaGFydC1jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdXRpbHMvZGlhbG9nLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3V0aWxzL2ZpbmFuY2lhbC1jYWxjdWxhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdXRpbHMvZm9ybWF0dGVycy50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC91dGlscy9pb3MtY29sb3ItZXh0ZW5zaW9uLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3V0aWxzL2xvZ2dlci1pbnRlcmZhY2UudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdXRpbHMvbG9nZ2VyLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3V0aWxzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdXRpbHMvcGxhdGZvcm0vYW5kcm9pZC1sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdXRpbHMvcGxhdGZvcm0vY29uc29sZS1sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL2Jhc2Utdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3LW1vZGVscy9kYXNoYm9hcmQtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL21haW4tcGFnZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC1wYWdlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9jb21wb25lbnRzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tY2hhcnQueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2NvbXBvbmVudHMvdWkvY2FyZC54bWwiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvY29tcG9uZW50cy91aS9saXN0LWl0ZW0ueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9zaGFyZWQvbGlzdC1pdGVtLnhtbCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtL2V4dGVybmFsIGNvbW1vbmpzIFwibmF0aXZlc2NyaXB0LXNxbGl0ZS1jb21tZXJjaWFsXCIiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vZXh0ZXJuYWwgY29tbW9uanMgXCJuYXRpdmVzY3JpcHQtc3FsaXRlLWNvbW1lcmNpYWwvY29tbWVyY2lhbC1tdWx0aVwiIiwid2VicGFjazovL2NldGUtcGZtL2V4dGVybmFsIGNvbW1vbmpzIFwibmF0aXZlc2NyaXB0LXNxbGl0ZS1lbmNyeXB0ZWRcIiIsIndlYnBhY2s6Ly9jZXRlLXBmbS9leHRlcm5hbCBjb21tb25qcyBcIm5hdGl2ZXNjcmlwdC1zcWxpdGUtc3luY1wiIiwid2VicGFjazovL2NldGUtcGZtL2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QudHNcIjogXCIuL2FwcC9hcHAtcm9vdC50c1wiLFxuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAvYXBwLnRzXCIsXG5cdFwiLi9jb21wb25lbnRzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tY2hhcnQueG1sXCI6IFwiLi9hcHAvY29tcG9uZW50cy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLWNoYXJ0LnhtbFwiLFxuXHRcIi4vY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQudHNcIjogXCIuL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydC50c1wiLFxuXHRcIi4vY29tcG9uZW50cy9jaGFydHMvaW5kZXgudHNcIjogXCIuL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9pbmRleC50c1wiLFxuXHRcIi4vY29tcG9uZW50cy91aS9jYXJkLnhtbFwiOiBcIi4vYXBwL2NvbXBvbmVudHMvdWkvY2FyZC54bWxcIixcblx0XCIuL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnhtbFwiOiBcIi4vYXBwL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnhtbFwiLFxuXHRcIi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cy50c1wiOiBcIi4vYXBwL2NvbnN0YW50cy9zdG9yYWdlLWtleXMudHNcIixcblx0XCIuL2RhdGFiYXNlL2RhdGFiYXNlLWNvbmZpZy50c1wiOiBcIi4vYXBwL2RhdGFiYXNlL2RhdGFiYXNlLWNvbmZpZy50c1wiLFxuXHRcIi4vZGF0YWJhc2UvZGItc2VydmljZS50c1wiOiBcIi4vYXBwL2RhdGFiYXNlL2RiLXNlcnZpY2UudHNcIixcblx0XCIuL2RhdGFiYXNlL2ZpbGUtc3lzdGVtLnRzXCI6IFwiLi9hcHAvZGF0YWJhc2UvZmlsZS1zeXN0ZW0udHNcIixcblx0XCIuL2RhdGFiYXNlL21pZ3JhdGlvbnMvaW5kZXgudHNcIjogXCIuL2FwcC9kYXRhYmFzZS9taWdyYXRpb25zL2luZGV4LnRzXCIsXG5cdFwiLi9kYXRhYmFzZS9zcWxpdGUtaGVscGVyLnRzXCI6IFwiLi9hcHAvZGF0YWJhc2Uvc3FsaXRlLWhlbHBlci50c1wiLFxuXHRcIi4vZGF0YWJhc2UvdHJhbnNhY3Rpb24tbWFuYWdlci50c1wiOiBcIi4vYXBwL2RhdGFiYXNlL3RyYW5zYWN0aW9uLW1hbmFnZXIudHNcIixcblx0XCIuL21haW4tcGFnZS50c1wiOiBcIi4vYXBwL21haW4tcGFnZS50c1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vYXBwL21haW4tcGFnZS54bWxcIixcblx0XCIuL21haW4tdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL21haW4tdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vbW9kZWxzL2Fzc2V0LnRzXCI6IFwiLi9hcHAvbW9kZWxzL2Fzc2V0LnRzXCIsXG5cdFwiLi9tb2RlbHMvZmluYW5jaWFsLXJlcG9ydC50c1wiOiBcIi4vYXBwL21vZGVscy9maW5hbmNpYWwtcmVwb3J0LnRzXCIsXG5cdFwiLi9tb2RlbHMvbGlhYmlsaXR5LnRzXCI6IFwiLi9hcHAvbW9kZWxzL2xpYWJpbGl0eS50c1wiLFxuXHRcIi4vbW9kZWxzL21vbnRobHktc25hcHNob3QudHNcIjogXCIuL2FwcC9tb2RlbHMvbW9udGhseS1zbmFwc2hvdC50c1wiLFxuXHRcIi4vbW9kZWxzL3RyYW5zYWN0aW9uLnRzXCI6IFwiLi9hcHAvbW9kZWxzL3RyYW5zYWN0aW9uLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYXNzZXQtc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9ldmVudC1idXMtc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2V2ZW50LWJ1cy1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3JlcG9ydC1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvcmVwb3J0LXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UudHNcIixcblx0XCIuL3V0aWxzL2NoYXJ0LWNvbG9ycy50c1wiOiBcIi4vYXBwL3V0aWxzL2NoYXJ0LWNvbG9ycy50c1wiLFxuXHRcIi4vdXRpbHMvZGlhbG9nLnRzXCI6IFwiLi9hcHAvdXRpbHMvZGlhbG9nLnRzXCIsXG5cdFwiLi91dGlscy9maW5hbmNpYWwtY2FsY3VsYXRpb25zLnRzXCI6IFwiLi9hcHAvdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucy50c1wiLFxuXHRcIi4vdXRpbHMvZm9ybWF0dGVycy50c1wiOiBcIi4vYXBwL3V0aWxzL2Zvcm1hdHRlcnMudHNcIixcblx0XCIuL3V0aWxzL2lvcy1jb2xvci1leHRlbnNpb24udHNcIjogXCIuL2FwcC91dGlscy9pb3MtY29sb3ItZXh0ZW5zaW9uLnRzXCIsXG5cdFwiLi91dGlscy9sb2dnZXItaW50ZXJmYWNlLnRzXCI6IFwiLi9hcHAvdXRpbHMvbG9nZ2VyLWludGVyZmFjZS50c1wiLFxuXHRcIi4vdXRpbHMvbG9nZ2VyLnRzXCI6IFwiLi9hcHAvdXRpbHMvbG9nZ2VyLnRzXCIsXG5cdFwiLi91dGlscy9uYXZpZ2F0aW9uLnRzXCI6IFwiLi9hcHAvdXRpbHMvbmF2aWdhdGlvbi50c1wiLFxuXHRcIi4vdXRpbHMvcGxhdGZvcm0vYW5kcm9pZC1sb2dnZXIudHNcIjogXCIuL2FwcC91dGlscy9wbGF0Zm9ybS9hbmRyb2lkLWxvZ2dlci50c1wiLFxuXHRcIi4vdXRpbHMvcGxhdGZvcm0vY29uc29sZS1sb2dnZXIudHNcIjogXCIuL2FwcC91dGlscy9wbGF0Zm9ybS9jb25zb2xlLWxvZ2dlci50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtbGlzdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9iYXNlLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9iYXNlLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Rhc2hib2FyZC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL21haW4tcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL21haW4tcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvbWFpbi1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL21haW4tcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3QtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3QtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3Mvc2hhcmVkL2xpc3QtaXRlbS54bWxcIjogXCIuL2FwcC92aWV3cy9zaGFyZWQvbGlzdC1pdGVtLnhtbFwiLFxuXHRcIi4vdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS54bWxcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hcHAgc3luYyByZWN1cnNpdmUgXFxcXC4oeG1sJTdDanMlN0MoPzwlMjFcXFxcLmRcXFxcLil0cyU3Q3M/Y3NzKSRcIjsiLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBEYXRhYmFzZVNlcnZpY2UgfSBmcm9tICcuL2RhdGFiYXNlL2RiLXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQXBwJztcblxuQXBwbGljYXRpb24ub24oQXBwbGljYXRpb24ubGF1bmNoRXZlbnQsIGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3RhcnRpbmcgYXBwbGljYXRpb24gaW5pdGlhbGl6YXRpb24nKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEluaXRpYWxpemUgZGF0YWJhc2UgZmlyc3RcbiAgICAgICAgY29uc3QgZGJTZXJ2aWNlID0gRGF0YWJhc2VTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGF3YWl0IGRiU2VydmljZS5pbml0aWFsaXplKCk7XG4gICAgICAgIFxuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnRGF0YWJhc2UgaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZhdGFsIGVycm9yIGR1cmluZyBhcHAgaW5pdGlhbGl6YXRpb24nLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufSk7XG5cbi8vIEhhbmRsZSBhcHAgc3VzcGVuc2lvblxuQXBwbGljYXRpb24ub24oQXBwbGljYXRpb24uc3VzcGVuZEV2ZW50LCAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0FwcGxpY2F0aW9uIHN1c3BlbmRpbmcsIGNsb3NpbmcgZGF0YWJhc2UuLi4nKTtcbiAgICAgICAgY29uc3QgZGJTZXJ2aWNlID0gRGF0YWJhc2VTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGRiU2VydmljZS5jbG9zZSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBkdXJpbmcgYXBwIHN1c3BlbnNpb24nLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufSk7XG5cbkFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6ICdhcHAtcm9vdCcgfSk7IiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIqXCIsXCI6OmJlZm9yZVwiLFwiOjphZnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCI6OmJhY2tkcm9wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi52aXNpYmxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidmlzaWJpbGl0eVwiLFwidmFsdWVcIjpcInZpc2libGVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0xXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm14LTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1sLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubXItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubXQtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi53LWZ1bGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucm91bmRlZC1sZ1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJvdW5kZWQteGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMTJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9yZGVyLWJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsdWUtMTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjE5IDIzNCAyNTQgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctYmx1ZS01MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYig1OSAxMzAgMjQ2IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsdWUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWdyYXktMTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjQzIDI0NCAyNDYgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctZ3JlZW4tNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMzQgMTk3IDk0IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWluZGlnby01MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYig5OSAxMDIgMjQxIC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXB1cnBsZS01MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigxNjggODUgMjQ3IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXJlZC01MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyMzkgNjggNjggLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC02XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcmlnaHRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwicmlnaHRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC0yeGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1sZ1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXNtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQteGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC1ib2xkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI3MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC1tZWRpdW1cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjUwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi51cHBlcmNhc2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInVwcGVyY2FzZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWJsdWUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ncmF5LTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDc1IDg1IDk5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ncmF5LTcwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDU1IDY1IDgxIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ncmF5LTgwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ncmVlbi02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyMiAxNjMgNzQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXB1cnBsZS02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigxNDcgNTEgMjM0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1yZWQtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjIwIDM4IDM4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC13aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJBY3Rpb25CYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzI1NjNlYlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZmZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ1cHBlcmNhc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY2FyZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZmZmZmZmXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5saXN0LXZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwidHJhbnNwYXJlbnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJQcm9ncmVzc1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5pbnB1dC1maWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjggMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTJlOGYwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2Y4ZmFmY1wifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb3JtLWxhYmVsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM2NDc0OGJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19XG5leHBvcnQgZGVmYXVsdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fXG5jb25zdCB7IGFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcbmFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MoX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXywgXCJEOlxcXFxEZXZcXFxcUGVyc29uYWwtRmluYW5jZS1NYW5hZ2VyLVBGTVxcXFxhcHBcXFxcYXBwLmNzc1wiKVxuIiwiaW1wb3J0IHsgRXZlbnREYXRhLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBcHBSb290JztcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIHRyeSB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdBcHAgcm9vdCBsb2FkZWQnKTtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBhcmdzLm9iamVjdCBhcyBGcmFtZTtcbiAgICAgICAgZnJhbWUubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3ZpZXdzL21haW4tcGFnZScsXG4gICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGluIG9uTG9hZGVkJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBWaWV3LCBQcm9wZXJ0eSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9udXRDaGFydERhdGEge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIHBlcmNlbnRhZ2U6IG51bWJlcjtcbn1cblxuY29uc3QgZGF0YVByb3BlcnR5ID0gbmV3IFByb3BlcnR5PERvbnV0Q2hhcnQsIERvbnV0Q2hhcnREYXRhW10+KHtcbiAgICBuYW1lOiAnZGF0YScsXG4gICAgZGVmYXVsdFZhbHVlOiBbXSxcbiAgICB2YWx1ZUNoYW5nZWQ6ICh0YXJnZXQsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICB0YXJnZXQub25EYXRhQ2hhbmdlZChvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY2xhc3MgRG9udXRDaGFydCBleHRlbmRzIFZpZXcge1xuICAgIHB1YmxpYyBkYXRhOiBEb251dENoYXJ0RGF0YVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRhQ2hhbmdlZChvbGRWYWx1ZTogRG9udXRDaGFydERhdGFbXSwgbmV3VmFsdWU6IERvbnV0Q2hhcnREYXRhW10pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMucmVxdWVzdExheW91dCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVOYXRpdmVWaWV3KCk6IGFueSB7XG4gICAgICAgIGlmIChnbG9iYWwuaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IGFuZHJvaWQudmlldy5WaWV3KHRoaXMuX2NvbnRleHQpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmlldy5zZXRXaWxsTm90RHJhdyhmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBuZXcgVUlWaWV3KENHUmVjdE1ha2UoMCwgMCwgMCwgMCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1lYXN1cmUod2lkdGhNZWFzdXJlU3BlYzogbnVtYmVyLCBoZWlnaHRNZWFzdXJlU3BlYzogbnVtYmVyKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3Qgd2lkdGggPSBWaWV3LmxheW91dC5nZXRNZWFzdXJlU3BlY1NpemUod2lkdGhNZWFzdXJlU3BlYyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gVmlldy5sYXlvdXQuZ2V0TWVhc3VyZVNwZWNTaXplKGhlaWdodE1lYXN1cmVTcGVjKTtcbiAgICAgICAgdGhpcy5zZXRNZWFzdXJlZERpbWVuc2lvbih3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MYXlvdXQobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIub25MYXlvdXQobGVmdCwgdG9wLCByaWdodCwgYm90dG9tKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm5hdGl2ZVZpZXc/LmludmFsaWRhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmF3KGNhbnZhczogYW55KSB7XG4gICAgICAgIGlmIChnbG9iYWwuaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdBbmRyb2lkKGNhbnZhcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLmlzSU9TKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdpT1MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd0FuZHJvaWQoY2FudmFzOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRNZWFzdXJlZEhlaWdodCgpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyICogMC44O1xuICAgICAgICBjb25zdCBpbm5lclJhZGl1cyA9IHJhZGl1cyAqIDAuNjtcbiAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGggPSByYWRpdXMgLSBpbm5lclJhZGl1cztcblxuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcGFpbnQgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5QYWludCgpO1xuICAgICAgICBwYWludC5zZXRBbnRpQWxpYXModHJ1ZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGFpbnQuc2V0U3R5bGUoYW5kcm9pZC5ncmFwaGljcy5QYWludC5TdHlsZS5TVFJPS0UpO1xuICAgICAgICBwYWludC5zZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aCk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByZWN0ID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuUmVjdEYoXG4gICAgICAgICAgICBjZW50ZXJYIC0gcmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLFxuICAgICAgICAgICAgY2VudGVyWSAtIHJhZGl1cyArIHN0cm9rZVdpZHRoIC8gMixcbiAgICAgICAgICAgIGNlbnRlclggKyByYWRpdXMgLSBzdHJva2VXaWR0aCAvIDIsXG4gICAgICAgICAgICBjZW50ZXJZICsgcmFkaXVzIC0gc3Ryb2tlV2lkdGggLyAyXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2VlcEFuZ2xlID0gKGl0ZW0ucGVyY2VudGFnZSAvIDEwMCkgKiAzNjA7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwYWludC5zZXRDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IoaXRlbS5jb2xvcikpO1xuICAgICAgICAgICAgY2FudmFzLmRyYXdBcmMocmVjdCwgc3RhcnRBbmdsZSwgc3dlZXBBbmdsZSwgZmFsc2UsIHBhaW50KTtcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgKz0gc3dlZXBBbmdsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3aU9TKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldE1lYXN1cmVkSGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBoZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgKiAwLjg7XG4gICAgICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcmFkaXVzICogMC42O1xuXG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gLU1hdGguUEkgLyAyO1xuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3dlZXBBbmdsZSA9IChpdGVtLnBlcmNlbnRhZ2UgLyAxMDApICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICBjb25zdCBlbmRBbmdsZSA9IHN0YXJ0QW5nbGUgKyBzd2VlcEFuZ2xlO1xuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gVUlCZXppZXJQYXRoLmJlemllclBhdGgoKTtcbiAgICAgICAgICAgIHBhdGguYWRkQXJjV2l0aENlbnRlclJhZGl1c1N0YXJ0QW5nbGVFbmRBbmdsZUNsb2Nrd2lzZShcbiAgICAgICAgICAgICAgICBDR1BvaW50TWFrZShjZW50ZXJYLCBjZW50ZXJZKSxcbiAgICAgICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGF0aC5hZGRBcmNXaXRoQ2VudGVyUmFkaXVzU3RhcnRBbmdsZUVuZEFuZ2xlQ2xvY2t3aXNlKFxuICAgICAgICAgICAgICAgIENHUG9pbnRNYWtlKGNlbnRlclgsIGNlbnRlclkpLFxuICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzLFxuICAgICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuaGV4VG9VSUNvbG9yKGl0ZW0uY29sb3IpO1xuICAgICAgICAgICAgY29sb3Iuc2V0RmlsbCgpO1xuICAgICAgICAgICAgcGF0aC5maWxsKCk7XG5cbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgPSBlbmRBbmdsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoZXhUb1VJQ29sb3IoaGV4OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNikgLyAyNTU7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KSAvIDI1NTtcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpIC8gMjU1O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBVSUNvbG9yLmFsbG9jKCkuaW5pdFdpdGhSZWRHcmVlbkJsdWVBbHBoYShyLCBnLCBiLCAxKTtcbiAgICB9XG59XG5cbmRhdGFQcm9wZXJ0eS5yZWdpc3RlcihEb251dENoYXJ0KTsiLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuLy8gUmVnaXN0ZXIgYWxsIGNoYXJ0IGNvbXBvbmVudHNcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNoYXJ0Q29tcG9uZW50cygpIHtcbiAgICAvLyBUZW1wb3JhcmlseSBkaXNhYmxlIGNoYXJ0IHJlZ2lzdHJhdGlvbiB1bnRpbCB3ZSBmaXggdGhlIGNvcmUgaW1wb3J0c1xuICAgIGNvbnNvbGUubG9nKCdDaGFydCByZWdpc3RyYXRpb24gZGlzYWJsZWQgdGVtcG9yYXJpbHknKTtcbn1cblxuZXhwb3J0IHsgRG9udXRDaGFydCB9IGZyb20gJy4vZG9udXQtY2hhcnQnOyIsImV4cG9ydCBjb25zdCBTdG9yYWdlS2V5cyA9IHtcbiAgICBBU1NFVFM6ICdhc3NldHMnLFxuICAgIExJQUJJTElUSUVTOiAnbGlhYmlsaXRpZXMnLFxuICAgIFRSQU5TQUNUSU9OUzogJ3RyYW5zYWN0aW9ucycsXG59IGFzIGNvbnN0OyIsImV4cG9ydCBjb25zdCBEQVRBQkFTRV9DT05GSUcgPSB7XG4gICAgbmFtZTogJ2NldGVwZm0uZGInLFxuICAgIHZlcnNpb246IDEsXG4gICAgLy8gU1FMSVRFX09QRU5fQ1JFQVRFIHwgU1FMSVRFX09QRU5fUkVBRFdSSVRFIHwgU1FMSVRFX09QRU5fRlVMTE1VVEVYXG4gICAgY3JlYXRlRmxhZ3M6IDB4MDAwMDAwMDQgfCAweDAwMDAwMDAyIHwgMHgwMDAxMDAwMCxcbiAgICAvLyBVc2UgREVMRVRFIG1vZGUgZm9yIG1heGltdW0gZHVyYWJpbGl0eVxuICAgIGpvdXJuYWxNb2RlOiAnREVMRVRFJyxcbiAgICAvLyBDb25maWd1cmUgcHJhZ21hcyBmb3IgYmV0dGVyIGR1cmFiaWxpdHlcbiAgICBwcmFnbWFzOiBbXG4gICAgICAgICdQUkFHTUEgc3luY2hyb25vdXMgPSBGVUxMOycsXG4gICAgICAgICdQUkFHTUEgam91cm5hbF9tb2RlID0gREVMRVRFOycsXG4gICAgICAgICdQUkFHTUEgZm9yZWlnbl9rZXlzID0gT047JyxcbiAgICAgICAgJ1BSQUdNQSB0ZW1wX3N0b3JlID0gTUVNT1JZOycsXG4gICAgICAgICdQUkFHTUEgcGFnZV9zaXplID0gNDA5NjsnLFxuICAgICAgICAnUFJBR01BIGNhY2hlX3NpemUgPSAyMDAwOycsXG4gICAgICAgICdQUkFHTUEgbG9ja2luZ19tb2RlID0gTk9STUFMOydcbiAgICBdXG59OyIsImltcG9ydCAqIGFzIFNxbGl0ZSBmcm9tICduYXRpdmVzY3JpcHQtc3FsaXRlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBnZXRNaWdyYXRpb25RdWVyaWVzIH0gZnJvbSAnLi9taWdyYXRpb25zJztcbmltcG9ydCB7IERBVEFCQVNFX0NPTkZJRyB9IGZyb20gJy4vZGF0YWJhc2UtY29uZmlnJztcbmltcG9ydCB7IEZpbGVTeXN0ZW0gfSBmcm9tICcuL2ZpbGUtc3lzdGVtJztcbmltcG9ydCB7IERiVHJhbnNhY3Rpb24gfSBmcm9tICcuL3RyYW5zYWN0aW9uLW1hbmFnZXInO1xuXG5jb25zdCBUQUcgPSAnRGF0YWJhc2VTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIERhdGFiYXNlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IERhdGFiYXNlU2VydmljZTtcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGJQYXRoOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpbml0aWFsaXphdGlvblByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbDtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50c1BhdGggPSBGaWxlU3lzdGVtLmdldERvY3VtZW50c1BhdGgoKTtcbiAgICAgICAgdGhpcy5kYlBhdGggPSBgJHtkb2N1bWVudHNQYXRofS8ke0RBVEFCQVNFX0NPTkZJRy5uYW1lfWA7XG4gICAgICAgIFxuICAgICAgICAvLyBFbnN1cmUgZGF0YWJhc2UgZGlyZWN0b3J5IGV4aXN0c1xuICAgICAgICBGaWxlU3lzdGVtLmVuc3VyZURpcmVjdG9yeUV4aXN0cyhkb2N1bWVudHNQYXRoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRGF0YWJhc2VTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFEYXRhYmFzZVNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIERhdGFiYXNlU2VydmljZS5pbnN0YW5jZSA9IG5ldyBEYXRhYmFzZVNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRGF0YWJhc2VTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRpYWxpemUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemF0aW9uUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbGl6YXRpb25Qcm9taXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXphdGlvblByb21pc2UgPSB0aGlzLmluaXRpYWxpemVEYXRhYmFzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsaXphdGlvblByb21pc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0aWFsaXplRGF0YWJhc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnT3BlbmluZyBTUUxpdGUgY29ubmVjdGlvbi4uLicpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYERhdGFiYXNlIHBhdGg6ICR7dGhpcy5kYlBhdGh9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UgPSBhd2FpdCBuZXcgU3FsaXRlKHRoaXMuZGJQYXRoLCB7XG4gICAgICAgICAgICAgICAgY3JlYXRlRmxhZ3M6IERBVEFCQVNFX0NPTkZJRy5jcmVhdGVGbGFncyxcbiAgICAgICAgICAgICAgICBqb3VybmFsTW9kZTogREFUQUJBU0VfQ09ORklHLmpvdXJuYWxNb2RlLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IERBVEFCQVNFX0NPTkZJRy52ZXJzaW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jb25maWd1cmVEYXRhYmFzZVByYWdtYXMoKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucnVuTWlncmF0aW9ucygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnRGF0YWJhc2UgaW5pdGlhbGl6YXRpb24gY29tcGxldGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXphdGlvblByb21pc2UgPSBudWxsO1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0RhdGFiYXNlIGluaXRpYWxpemF0aW9uIGZhaWxlZCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBjb25maWd1cmVEYXRhYmFzZVByYWdtYXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGZvciAoY29uc3QgcHJhZ21hIG9mIERBVEFCQVNFX0NPTkZJRy5wcmFnbWFzKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRhdGFiYXNlLmV4ZWNTUUwocHJhZ21hKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcnVuTWlncmF0aW9ucygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1J1bm5pbmcgZGF0YWJhc2UgbWlncmF0aW9ucy4uLicpO1xuICAgICAgICBjb25zdCBtaWdyYXRpb25zID0gYXdhaXQgZ2V0TWlncmF0aW9uUXVlcmllcygpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChjb25zdCBxdWVyeSBvZiBtaWdyYXRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBEYlRyYW5zYWN0aW9uKHRoaXMuZGF0YWJhc2UpO1xuICAgICAgICAgICAgYXdhaXQgdHJhbnNhY3Rpb24uZXhlY3V0ZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBleGVjdXRlKHF1ZXJ5OiBzdHJpbmcsIHBhcmFtczogYW55W10gPSBbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmVuc3VyZUNvbm5lY3Rpb24oKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGF0YWJhc2UuZXhlY1NRTChxdWVyeSwgcGFyYW1zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBGYWlsZWQgdG8gZXhlY3V0ZSBxdWVyeTogJHtxdWVyeX1gLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNlbGVjdDxUID0gYW55PihxdWVyeTogc3RyaW5nLCBwYXJhbXM6IGFueVtdID0gW10pOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBhd2FpdCB0aGlzLmVuc3VyZUNvbm5lY3Rpb24oKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRhdGFiYXNlLmFsbChxdWVyeSwgcGFyYW1zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBGYWlsZWQgdG8gZXhlY3V0ZSBzZWxlY3QgcXVlcnk6ICR7cXVlcnl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGVuc3VyZUNvbm5lY3Rpb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhYmFzZSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YWJhc2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5kYXRhYmFzZS5leGVjU1FMKCdQUkFHTUEgc3luY2hyb25vdXMgPSBGVUxMOycpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZGF0YWJhc2UuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemF0aW9uUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0RhdGFiYXNlIGNvbm5lY3Rpb24gY2xvc2VkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIGNsb3NlIGRhdGFiYXNlIGNvbm5lY3Rpb24nLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsga25vd25Gb2xkZXJzLCBGb2xkZXIgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0ZpbGVTeXN0ZW0nO1xuXG5leHBvcnQgY2xhc3MgRmlsZVN5c3RlbSB7XG4gICAgc3RhdGljIGVuc3VyZURpcmVjdG9yeUV4aXN0cyhwYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghRm9sZGVyLmV4aXN0cyhwYXRoKSkge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBmb2xkZXIgdXNpbmcgdGhlIHN0YXRpYyBjcmVhdGUgbWV0aG9kXG4gICAgICAgICAgICAgICAgRm9sZGVyLmZyb21QYXRoKHBhdGgpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBDcmVhdGVkIGRpcmVjdG9yeTogJHtwYXRofWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgRGlyZWN0b3J5IGFscmVhZHkgZXhpc3RzOiAke3BhdGh9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCBgRmFpbGVkIHRvIGVuc3VyZSBkaXJlY3RvcnkgZXhpc3RzOiAke3BhdGh9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0RG9jdW1lbnRzUGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4ga25vd25Gb2xkZXJzLmRvY3VtZW50cygpLnBhdGg7XG4gICAgfVxufSIsImltcG9ydCB7IEZpbGUsIGtub3duRm9sZGVycyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTWlncmF0aW9ucyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNaWdyYXRpb25RdWVyaWVzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICB0cnkge1xuICAgICAgICAvLyBHZXQgdGhlIG1pZ3JhdGlvbnMgZm9sZGVyIHBhdGhcbiAgICAgICAgY29uc3QgbWlncmF0aW9uc0ZvbGRlciA9IGtub3duRm9sZGVycy5jdXJyZW50QXBwKCkuZ2V0Rm9sZGVyKCdkYXRhYmFzZS9taWdyYXRpb25zJyk7XG4gICAgICAgIGNvbnN0IGluaXRpYWxTY2hlbWFGaWxlID0gbWlncmF0aW9uc0ZvbGRlci5nZXRGaWxlKCcwMDFfaW5pdGlhbF9zY2hlbWEuc3FsJyk7XG4gICAgICAgIFxuICAgICAgICAvLyBSZWFkIHRoZSBtaWdyYXRpb24gZmlsZSBjb250ZW50XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBpbml0aWFsU2NoZW1hRmlsZS5yZWFkVGV4dCgpO1xuICAgICAgICBcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N1Y2Nlc3NmdWxseSBsb2FkZWQgbWlncmF0aW9uIHF1ZXJpZXMnKTtcbiAgICAgICAgcmV0dXJuIFtjb250ZW50XTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIGxvYWQgbWlncmF0aW9ucycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufSIsImltcG9ydCB7IGtub3duRm9sZGVycyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgKiBhcyBTcWxpdGUgZnJvbSAnbmF0aXZlc2NyaXB0LXNxbGl0ZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnU1FMaXRlSGVscGVyJztcblxuZXhwb3J0IGNsYXNzIFNRTGl0ZUhlbHBlciB7XG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55ID0gbnVsbDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRiUGF0aDogc3RyaW5nO1xuICAgIHByaXZhdGUgY29ubmVjdGlvblByb21pc2U6IFByb21pc2U8dm9pZD4gfCBudWxsID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGRiTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZGJQYXRoID0gYCR7a25vd25Gb2xkZXJzLmRvY3VtZW50cygpLnBhdGh9LyR7ZGJOYW1lfWA7XG4gICAgfVxuXG4gICAgYXN5bmMgb3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBjb25uZWN0aW5nLCByZXR1cm4gZXhpc3RpbmcgcHJvbWlzZVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblByb21pc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgbmV3IGNvbm5lY3Rpb24gcHJvbWlzZVxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25Qcm9taXNlID0gdGhpcy5vcGVuRGF0YWJhc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblByb21pc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvcGVuRGF0YWJhc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YWJhc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlID0gYXdhaXQgbmV3IFNxbGl0ZSh0aGlzLmRiUGF0aCk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0RhdGFiYXNlIGNvbm5lY3Rpb24gb3BlbmVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uUHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG9wZW4gZGF0YWJhc2UgY29ubmVjdGlvbicsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZXhlY3V0ZShxdWVyeTogc3RyaW5nLCBwYXJhbXM6IGFueVtdID0gW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5lbnN1cmVDb25uZWN0aW9uKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRhdGFiYXNlLmV4ZWNTUUwocXVlcnksIHBhcmFtcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCBgRmFpbGVkIHRvIGV4ZWN1dGUgcXVlcnk6ICR7cXVlcnl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZWxlY3Q8VCA9IGFueT4ocXVlcnk6IHN0cmluZywgcGFyYW1zOiBhbnlbXSA9IFtdKTogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5lbnN1cmVDb25uZWN0aW9uKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kYXRhYmFzZS5hbGwocXVlcnksIHBhcmFtcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCBgRmFpbGVkIHRvIGV4ZWN1dGUgc2VsZWN0IHF1ZXJ5OiAke3F1ZXJ5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBlbnN1cmVDb25uZWN0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIXRoaXMuZGF0YWJhc2UpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICh0aGlzLmRhdGFiYXNlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZGF0YWJhc2UuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25Qcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnRGF0YWJhc2UgY29ubmVjdGlvbiBjbG9zZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gY2xvc2UgZGF0YWJhc2UgY29ubmVjdGlvbicsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnRGJUcmFuc2FjdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBEYlRyYW5zYWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGFiYXNlOiBhbnkpIHt9XG5cbiAgICBhc3luYyBleGVjdXRlKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kYXRhYmFzZS5leGVjU1FMKCdCRUdJTiBUUkFOU0FDVElPTicpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5kYXRhYmFzZS5leGVjU1FMKHF1ZXJ5KTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGF0YWJhc2UuZXhlY1NRTCgnQ09NTUlUJyk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnVHJhbnNhY3Rpb24gY29tcGxldGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5kYXRhYmFzZS5leGVjU1FMKCdST0xMQkFDSycpO1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ1RyYW5zYWN0aW9uIGZhaWxlZCwgcm9sbGluZyBiYWNrJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IERhc2hib2FyZFZpZXdNb2RlbCB9IGZyb20gJy4vdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTWFpblBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIHRyeSB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIG1haW4gcGFnZScpO1xuICAgICAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgRGFzaGJvYXJkVmlld01vZGVsKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGluIG5hdmlnYXRpbmdUbycsIGVycm9yIGFzIEVycm9yKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHJpdmF0ZSBfY291bnRlcjogbnVtYmVyO1xuICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgdGhpcy5fY291bnRlciA9IDQyO1xuICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICB9XG5cbiAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuXG4gIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21lc3NhZ2UnLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25UYXAoKSB7XG4gICAgdGhpcy5fY291bnRlci0tO1xuICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVNZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLl9jb3VudGVyIDw9IDApIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9XG4gICAgICAgICdIb29ycmFhYXkhIFlvdSB1bmxvY2tlZCB0aGUgTmF0aXZlU2NyaXB0IGNsaWNrZXIgYWNoaWV2ZW1lbnQhJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXNzYWdlID0gYCR7dGhpcy5fY291bnRlcn0gdGFwcyBsZWZ0YDtcbiAgICB9XG5cbiAgICAvLyBsb2cgdGhlIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IHR5cGUgQXNzZXRDYXRlZ29yeSA9IFxuICAgIHwgJ1JlYWwgRXN0YXRlJyBcbiAgICB8ICdCdXNpbmVzcycgXG4gICAgfCAnU3RvY2tzJyBcbiAgICB8ICdBcnQgJiBBbnRpcXVpdGllcycgXG4gICAgfCAnU2F2aW5nL0Nhc2gnO1xuXG5leHBvcnQgY2xhc3MgQXNzZXQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGNhdGVnb3J5OiBBc3NldENhdGVnb3J5O1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxBc3NldD4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGRhdGEuY2F0ZWdvcnkgfHwgJ1NhdmluZy9DYXNoJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWUgfHwgMDtcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lIHx8ICcnO1xuICAgIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIE1vbnRobHlSZXBvcnQge1xuICAgIG1vbnRoOiBudW1iZXI7XG4gICAgeWVhcjogbnVtYmVyO1xuICAgIGluY29tZTogbnVtYmVyO1xuICAgIGV4cGVuc2VzOiBudW1iZXI7XG4gICAgc2F2aW5nczogbnVtYmVyO1xuICAgIHNhdmluZ3NSYXRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluYW5jaWFsSGVhbHRoUmVwb3J0IHtcbiAgICBuZXRXb3J0aDogbnVtYmVyO1xuICAgIGRlYnRUb0luY29tZVJhdGlvOiBudW1iZXI7XG4gICAgbW9udGhseUNhc2hmbG93OiBudW1iZXI7XG4gICAgbW9udGhseVJlcG9ydHM6IE1vbnRobHlSZXBvcnRbXTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IHR5cGUgTGlhYmlsaXR5VHlwZSA9ICdMb2FuJyB8ICdEZWJ0L1BheWFibGUnO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0eXBlOiBMaWFiaWxpdHlUeXBlO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpbnRlcmVzdFJhdGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8TGlhYmlsaXR5Pikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGUgfHwgJ0xvYW4nO1xuICAgICAgICB0aGlzLmFtb3VudCA9IGRhdGEuYW1vdW50IHx8IDA7XG4gICAgICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZSB8fCAnJztcbiAgICAgICAgdGhpcy5pbnRlcmVzdFJhdGUgPSBkYXRhLmludGVyZXN0UmF0ZSB8fCAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1vbnRobHlTbmFwc2hvdCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgeWVhcjogbnVtYmVyO1xuICAgIG1vbnRoOiBudW1iZXI7XG4gICAgbmV0QXNzZXQ6IG51bWJlcjtcbiAgICBwZXJjZW50YWdlQ2hhbmdlPzogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxNb250aGx5U25hcHNob3Q+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnllYXIgPSBkYXRhLnllYXIgfHwgZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLm1vbnRoID0gZGF0YS5tb250aCB8fCBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMubmV0QXNzZXQgPSBkYXRhLm5ldEFzc2V0IHx8IDA7XG4gICAgICAgIHRoaXMucGVyY2VudGFnZUNoYW5nZSA9IGRhdGEucGVyY2VudGFnZUNoYW5nZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRyYW5zYWN0aW9uVHlwZSA9ICdpbmNvbWUnIHwgJ2V4cGVuc2UnO1xuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25DYXRlZ29yeSA9IFxuICAvLyBJbmNvbWUgY2F0ZWdvcmllc1xuICB8ICdTYWxhcnknIHwgJ0J1c2luZXNzJyB8ICdSZW50JyB8ICdJbnRlcmVzdCcgfCAnUm95YWx0aWVzJ1xuICAvLyBFeHBlbnNlIGNhdGVnb3JpZXNcbiAgfCAnQ29uc3VtZXIgYmFza2V0JyB8ICdIYWJpdHMnIHwgJ0NhcicgfCAnUm91dGluZScgfCAnSG91c2luZycgfCAnQ3JlZGl0IENhcmQvTG9hbic7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbiBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdHlwZTogVHJhbnNhY3Rpb25UeXBlO1xuICAgIGNhdGVnb3J5OiBUcmFuc2FjdGlvbkNhdGVnb3J5O1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgdGltZVJlcXVpcmVkPzogbnVtYmVyOyAvLyBIb3VycyByZXF1aXJlZCAob25seSBmb3IgaW5jb21lKVxuICAgIG1vbnRoOiBudW1iZXI7XG4gICAgeWVhcjogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxUcmFuc2FjdGlvbj4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZSB8fCAnZXhwZW5zZSc7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBkYXRhLmNhdGVnb3J5IHx8ICdDb25zdW1lciBiYXNrZXQnO1xuICAgICAgICB0aGlzLmFtb3VudCA9IE51bWJlcihkYXRhLmFtb3VudCB8fCAwKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICAgIHRoaXMudGltZVJlcXVpcmVkID0gZGF0YS50eXBlID09PSAnaW5jb21lJyA/IE51bWJlcihkYXRhLnRpbWVSZXF1aXJlZCB8fCAxKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5tb250aCA9IGRhdGEubW9udGggPz8gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLnllYXIgPSBkYXRhLnllYXIgPz8gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3NldCB9IGZyb20gJy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cyc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZTxBc3NldD4ge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFRBRyA9ICdBc3NldFNlcnZpY2UnO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBzdG9yYWdlS2V5ID0gU3RvcmFnZUtleXMuQVNTRVRTO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXNzZXRTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFBc3NldFNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEFzc2V0U2VydmljZS5pbnN0YW5jZSA9IG5ldyBBc3NldFNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXNzZXRTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmFuc2Zvcm1Mb2FkZWRJdGVtcyhpdGVtczogYW55W10pOiBBc3NldFtdIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChkYXRhID0+IG5ldyBBc3NldChkYXRhKSk7XG4gICAgfVxuXG4gICAgYWRkQXNzZXQoYXNzZXQ6IEFzc2V0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShhc3NldCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXNzZXQoYXNzZXQ6IEFzc2V0KTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShhc3NldCk7XG4gICAgfVxuXG4gICAgZGVsZXRlQXNzZXQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oaWQpO1xuICAgIH1cblxuICAgIGdldEFzc2V0cygpOiBBc3NldFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbEFzc2V0VmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGFzc2V0KSA9PiBzdW0gKyBhc3NldC52YWx1ZSwgMCk7XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVNlcnZpY2U8VCBleHRlbmRzIHsgaWQ6IHN0cmluZyB9PiBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByb3RlY3RlZCBpdGVtczogVFtdID0gW107XG4gICAgcHJvdGVjdGVkIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgVEFHOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IHN0b3JhZ2VLZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlID0gU3RvcmFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5sb2FkSXRlbXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgbG9hZEl0ZW1zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3JhZ2VLZXkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Uga2V5IG5vdCBzZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSBhd2FpdCB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW08YW55W10+KHRoaXMuc3RvcmFnZUtleSwgW10pO1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMudHJhbnNmb3JtTG9hZGVkSXRlbXMoc2F2ZWRJdGVtcyk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBMb2FkZWQgJHt0aGlzLml0ZW1zLmxlbmd0aH0gaXRlbXMgZnJvbSAke3RoaXMuc3RvcmFnZUtleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgYEVycm9yIGxvYWRpbmcgaXRlbXMgZnJvbSAke3RoaXMuc3RvcmFnZUtleX1gLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgc2F2ZUl0ZW1zKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3JhZ2VLZXkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Uga2V5IG5vdCBzZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIHRoaXMuaXRlbXMpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKHRoaXMuVEFHLCBgU2F2ZWQgJHt0aGlzLml0ZW1zLmxlbmd0aH0gaXRlbXMgdG8gJHt0aGlzLnN0b3JhZ2VLZXl9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsIGBFcnJvciBzYXZpbmcgaXRlbXMgdG8gJHt0aGlzLnN0b3JhZ2VLZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IFRbXTtcblxuICAgIHByb3RlY3RlZCBhc3luYyBhZGRJdGVtKGl0ZW06IFQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdDYW5ub3QgYWRkIGl0ZW0gd2l0aG91dCBpZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlSXRlbXMoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXRlbXMnLCB0aGlzLml0ZW1zKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKHRoaXMuVEFHLCBgQWRkZWQgaXRlbSB3aXRoIGlkOiAke2l0ZW0uaWR9YCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHVwZGF0ZUl0ZW0oaXRlbTogVCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgJ0Nhbm5vdCB1cGRhdGUgaXRlbSB3aXRob3V0IGlkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGl0ZW07XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVJdGVtcygpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXRlbXMnLCB0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYFVwZGF0ZWQgaXRlbSB3aXRoIGlkOiAke2l0ZW0uaWR9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgZGVsZXRlSXRlbShpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgJ0Nhbm5vdCBkZWxldGUgaXRlbSB3aXRob3V0IGlkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpO1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVJdGVtcygpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycsIHRoaXMuaXRlbXMpO1xuICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBEZWxldGVkIGl0ZW0gd2l0aCBpZDogJHtpZH1gKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXMoKTogVFtdIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLml0ZW1zXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBFdmVudEJ1c1NlcnZpY2UgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRXZlbnRCdXNTZXJ2aWNlO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IEV2ZW50QnVzU2VydmljZSB7XG4gICAgICAgIGlmICghRXZlbnRCdXNTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBFdmVudEJ1c1NlcnZpY2UuaW5zdGFuY2UgPSBuZXcgRXZlbnRCdXNTZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEV2ZW50QnVzU2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBlbWl0KGV2ZW50TmFtZTogc3RyaW5nLCBkYXRhPzogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMubm90aWZ5KHsgZXZlbnROYW1lLCBvYmplY3Q6IHRoaXMsIGRhdGEgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgRXZlbnROYW1lcyA9IHtcbiAgICBTTkFQU0hPVF9VUERBVEVEOiAnc25hcHNob3RVcGRhdGVkJ1xufSBhcyBjb25zdDsiLCJpbXBvcnQgeyBMaWFiaWxpdHkgfSBmcm9tICcuLi9tb2RlbHMvbGlhYmlsaXR5JztcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZUtleXMgfSBmcm9tICcuLi9jb25zdGFudHMvc3RvcmFnZS1rZXlzJztcblxuZXhwb3J0IGNsYXNzIExpYWJpbGl0eVNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZTxMaWFiaWxpdHk+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTGlhYmlsaXR5U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVEFHID0gJ0xpYWJpbGl0eVNlcnZpY2UnO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBzdG9yYWdlS2V5ID0gU3RvcmFnZUtleXMuTElBQklMSVRJRVM7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMaWFiaWxpdHlTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFMaWFiaWxpdHlTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBMaWFiaWxpdHlTZXJ2aWNlLmluc3RhbmNlID0gbmV3IExpYWJpbGl0eVNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTGlhYmlsaXR5U2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogTGlhYmlsaXR5W10ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGRhdGEgPT4gbmV3IExpYWJpbGl0eShkYXRhKSk7XG4gICAgfVxuXG4gICAgYWRkTGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShsaWFiaWxpdHkpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0obGlhYmlsaXR5KTtcbiAgICB9XG5cbiAgICBkZWxldGVMaWFiaWxpdHkoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oaWQpO1xuICAgIH1cblxuICAgIGdldExpYWJpbGl0aWVzKCk6IExpYWJpbGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbExpYWJpbGl0aWVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBsaWFiaWxpdHkpID0+IHN1bSArIGxpYWJpbGl0eS5hbW91bnQsIDApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS1zZXJ2aWNlJztcbmltcG9ydCB7IE1vbnRobHlTbmFwc2hvdCB9IGZyb20gJy4uL21vZGVscy9tb250aGx5LXNuYXBzaG90JztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdNb250aGx5U25hcHNob3RTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE1vbnRobHlTbmFwc2hvdFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZTxNb250aGx5U25hcHNob3Q+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTW9udGhseVNuYXBzaG90U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVEFHID0gVEFHO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBzdG9yYWdlS2V5ID0gJ21vbnRobHlfc25hcHNob3RzJztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IE1vbnRobHlTbmFwc2hvdFNlcnZpY2Uge1xuICAgICAgICBpZiAoIU1vbnRobHlTbmFwc2hvdFNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgTW9udGhseVNuYXBzaG90U2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNb250aGx5U25hcHNob3RTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmFuc2Zvcm1Mb2FkZWRJdGVtcyhpdGVtczogYW55W10pOiBNb250aGx5U25hcHNob3RbXSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoZGF0YSA9PiBuZXcgTW9udGhseVNuYXBzaG90KGRhdGEpKTtcbiAgICB9XG5cbiAgICBhZGRTbmFwc2hvdChzbmFwc2hvdDogTW9udGhseVNuYXBzaG90KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShzbmFwc2hvdCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVTbmFwc2hvdChzbmFwc2hvdDogTW9udGhseVNuYXBzaG90KTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShzbmFwc2hvdCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBkZWxldGVTbmFwc2hvdChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbShpZCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlUGVyY2VudGFnZUNoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBnZXRTbmFwc2hvdHMoKTogTW9udGhseVNuYXBzaG90W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVNoYXJwZVJhdGlvKCk6IG51bWJlciB8IG51bGwge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0NhbGN1bGF0aW5nIFNoYXJwZSBSYXRpbycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBHZXQgcGVyY2VudGFnZSBjaGFuZ2VzIGFuZCBmaWx0ZXIgb3V0IHVuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLml0ZW1zXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IHR5cGVvZiBpdGVtLnBlcmNlbnRhZ2VDaGFuZ2UgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLnBlcmNlbnRhZ2VDaGFuZ2UhKTtcblxuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYEZvdW5kICR7Y2hhbmdlcy5sZW5ndGh9IHZhbGlkIHBlcmNlbnRhZ2UgY2hhbmdlc2ApO1xuXG4gICAgICAgICAgICAvLyBOZWVkIGF0IGxlYXN0IDIgZGF0YSBwb2ludHMgZm9yIG1lYW5pbmdmdWwgY2FsY3VsYXRpb25cbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnSW5zdWZmaWNpZW50IGRhdGEgcG9pbnRzIGZvciBTaGFycGUgUmF0aW8gY2FsY3VsYXRpb24nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGF2ZXJhZ2UgcmV0dXJuXG4gICAgICAgICAgICBjb25zdCBhdmVyYWdlID0gY2hhbmdlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKSAvIGNoYW5nZXMubGVuZ3RoO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYEF2ZXJhZ2UgcmV0dXJuOiAke2F2ZXJhZ2UudG9GaXhlZCgyKX0lYCk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBzdGFuZGFyZCBkZXZpYXRpb25cbiAgICAgICAgICAgIGNvbnN0IHZhcmlhbmNlID0gY2hhbmdlcy5yZWR1Y2UoKGEsIGIpID0+IGEgKyBNYXRoLnBvdyhiIC0gYXZlcmFnZSwgMiksIDApIC8gKGNoYW5nZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBjb25zdCBzdGREZXYgPSBNYXRoLnNxcnQodmFyaWFuY2UpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN0YW5kYXJkIGRldmlhdGlvbjogJHtzdGREZXYudG9GaXhlZCgyKX1gKTtcblxuICAgICAgICAgICAgLy8gQXZvaWQgZGl2aXNpb24gYnkgemVyb1xuICAgICAgICAgICAgaWYgKHN0ZERldiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdGFuZGFyZCBkZXZpYXRpb24gaXMgemVybywgY2Fubm90IGNhbGN1bGF0ZSBTaGFycGUgUmF0aW8nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGFubnVhbGl6ZWQgU2hhcnBlIFJhdGlvXG4gICAgICAgICAgICBjb25zdCBzaGFycGVSYXRpbyA9IChhdmVyYWdlIC8gc3RkRGV2KSAqIE1hdGguc3FydCgxMik7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgQ2FsY3VsYXRlZCBTaGFycGUgUmF0aW86ICR7c2hhcnBlUmF0aW8udG9GaXhlZCgyKX1gKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHNoYXJwZVJhdGlvO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGNhbGN1bGF0aW5nIFNoYXJwZSBSYXRpbycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVQZXJjZW50YWdlQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFNvcnQgc25hcHNob3RzIGJ5IGRhdGVcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZFNuYXBzaG90cyA9IFsuLi50aGlzLml0ZW1zXS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEueWVhciAhPT0gYi55ZWFyKSByZXR1cm4gYS55ZWFyIC0gYi55ZWFyO1xuICAgICAgICAgICAgICAgIHJldHVybiBhLm1vbnRoIC0gYi5tb250aDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgcGVyY2VudGFnZSBjaGFuZ2VzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNvcnRlZFNuYXBzaG90cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBzb3J0ZWRTbmFwc2hvdHNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXMgPSBzb3J0ZWRTbmFwc2hvdHNbaSAtIDFdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VDaGFuZ2UgPSAoKGN1cnJlbnQubmV0QXNzZXQgLSBwcmV2aW91cy5uZXRBc3NldCkgLyBwcmV2aW91cy5uZXRBc3NldCkgKiAxMDA7XG4gICAgICAgICAgICAgICAgY3VycmVudC5wZXJjZW50YWdlQ2hhbmdlID0gTnVtYmVyKHBlcmNlbnRhZ2VDaGFuZ2UudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IHNuYXBzaG90IGhhcyBubyBwZXJjZW50YWdlIGNoYW5nZVxuICAgICAgICAgICAgaWYgKHNvcnRlZFNuYXBzaG90cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc29ydGVkU25hcHNob3RzWzBdLnBlcmNlbnRhZ2VDaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1zKCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IGNhbGN1bGF0ZWQgcGVyY2VudGFnZSBjaGFuZ2VzJyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgY2FsY3VsYXRpbmcgcGVyY2VudGFnZSBjaGFuZ2VzJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2FjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4vYXNzZXQtc2VydmljZSc7XG5pbXBvcnQgeyBMaWFiaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi9saWFiaWxpdHktc2VydmljZSc7XG5pbXBvcnQgeyBGaW5hbmNpYWxIZWFsdGhSZXBvcnQsIE1vbnRobHlSZXBvcnQgfSBmcm9tICcuLi9tb2RlbHMvZmluYW5jaWFsLXJlcG9ydCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVOZXRXb3J0aCwgY2FsY3VsYXRlTW9udGhseUNhc2hmbG93IH0gZnJvbSAnLi4vdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRTZXJ2aWNlIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFJlcG9ydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSB0cmFuc2FjdGlvblNlcnZpY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcml2YXRlIGFzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgbGlhYmlsaXR5U2VydmljZTogTGlhYmlsaXR5U2VydmljZTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlID0gVHJhbnNhY3Rpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuYXNzZXRTZXJ2aWNlID0gQXNzZXRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubGlhYmlsaXR5U2VydmljZSA9IExpYWJpbGl0eVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUmVwb3J0U2VydmljZSB7XG4gICAgICAgIGlmICghUmVwb3J0U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUmVwb3J0U2VydmljZS5pbnN0YW5jZSA9IG5ldyBSZXBvcnRTZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlcG9ydFNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVGaW5hbmNpYWxIZWFsdGhSZXBvcnQoKTogRmluYW5jaWFsSGVhbHRoUmVwb3J0IHtcbiAgICAgICAgY29uc3QgYXNzZXRzID0gdGhpcy5hc3NldFNlcnZpY2UuZ2V0QXNzZXRzKCk7XG4gICAgICAgIGNvbnN0IGxpYWJpbGl0aWVzID0gdGhpcy5saWFiaWxpdHlTZXJ2aWNlLmdldExpYWJpbGl0aWVzKCk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRyYW5zYWN0aW9ucygpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbW9udGhseUluY29tZSA9IHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2luY29tZScpXG4gICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKSAvIDEyO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXRXb3J0aDogY2FsY3VsYXRlTmV0V29ydGgoYXNzZXRzLCBsaWFiaWxpdGllcyksXG4gICAgICAgICAgICBkZWJ0VG9JbmNvbWVSYXRpbzogbW9udGhseUluY29tZSA+IDAgPyB0aGlzLmxpYWJpbGl0eVNlcnZpY2UuZ2V0VG90YWxMaWFiaWxpdGllcygpIC8gbW9udGhseUluY29tZSA6IDAsXG4gICAgICAgICAgICBtb250aGx5Q2FzaGZsb3c6IGNhbGN1bGF0ZU1vbnRobHlDYXNoZmxvdyh0cmFuc2FjdGlvbnMpLFxuICAgICAgICAgICAgbW9udGhseVJlcG9ydHM6IHRoaXMuZ2VuZXJhdGVNb250aGx5UmVwb3J0cygpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZU1vbnRobHlSZXBvcnRzKCk6IE1vbnRobHlSZXBvcnRbXSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydHM6IE1vbnRobHlSZXBvcnRbXSA9IFtdO1xuICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBHZW5lcmF0ZSByZXBvcnRzIGZvciB0aGUgbGFzdCAxMiBtb250aHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IChjdXJyZW50RGF0ZS5nZXRNb250aCgpIC0gaSArIDEyKSAlIDEyO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkgLSBNYXRoLmZsb29yKGkgLyAxMik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoVHJhbnNhY3Rpb25zID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2VcbiAgICAgICAgICAgICAgICAuZ2V0TW9udGhseVRyYW5zYWN0aW9ucyhtb250aCwgeWVhcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGluY29tZSA9IG1vbnRoVHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2luY29tZScpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGV4cGVuc2VzID0gbW9udGhUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnZXhwZW5zZScpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHNhdmluZ3MgPSBpbmNvbWUgLSBleHBlbnNlcztcbiAgICAgICAgICAgIGNvbnN0IHNhdmluZ3NSYXRlID0gaW5jb21lID4gMCA/IChzYXZpbmdzIC8gaW5jb21lKSAqIDEwMCA6IDA7XG5cbiAgICAgICAgICAgIHJlcG9ydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbW9udGgsXG4gICAgICAgICAgICAgICAgeWVhcixcbiAgICAgICAgICAgICAgICBpbmNvbWUsXG4gICAgICAgICAgICAgICAgZXhwZW5zZXMsXG4gICAgICAgICAgICAgICAgc2F2aW5ncyxcbiAgICAgICAgICAgICAgICBzYXZpbmdzUmF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVwb3J0cztcbiAgICB9XG59IiwiaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YWJhc2UvZGItc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnU3RvcmFnZVNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBTdG9yYWdlU2VydmljZTtcbiAgICBwcml2YXRlIGRiOiBEYXRhYmFzZVNlcnZpY2U7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRiID0gRGF0YWJhc2VTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFTdG9yYWdlU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgU3RvcmFnZVNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBqc29uVmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRiLmV4ZWN1dGUoXG4gICAgICAgICAgICAgICAgJ0lOU0VSVCBPUiBSRVBMQUNFIElOVE8gYXBwX3N0b3JhZ2UgKGtleSwgdmFsdWUpIFZBTFVFUyAoPywgPyknLFxuICAgICAgICAgICAgICAgIFtrZXksIGpzb25WYWx1ZV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgc3RvcmVkIGRhdGEgZm9yIGtleTogJHtrZXl9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCBgRXJyb3Igc3RvcmluZyBkYXRhIGZvciBrZXk6ICR7a2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0SXRlbTxUPihrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBUKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Uga2V5IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHRoaXMuZGIuc2VsZWN0PHt2YWx1ZTogc3RyaW5nfT4oXG4gICAgICAgICAgICAgICAgJ1NFTEVDVCB2YWx1ZSBGUk9NIGFwcF9zdG9yYWdlIFdIRVJFIGtleSA9ID8nLFxuICAgICAgICAgICAgICAgIFtrZXldXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVzdWx0c1swXS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgYEVycm9yIHJldHJpZXZpbmcgZGF0YSBmb3Iga2V5OiAke2tleX1gLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yYWdlIGtleSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGIuZXhlY3V0ZShcbiAgICAgICAgICAgICAgICAnREVMRVRFIEZST00gYXBwX3N0b3JhZ2UgV0hFUkUga2V5ID0gPycsXG4gICAgICAgICAgICAgICAgW2tleV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgcmVtb3ZlZCBkYXRhIGZvciBrZXk6ICR7a2V5fWApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgYEVycm9yIHJlbW92aW5nIGRhdGEgZm9yIGtleTogJHtrZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGIuZXhlY3V0ZSgnREVMRVRFIEZST00gYXBwX3N0b3JhZ2UnKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgY2xlYXJlZCBhbGwgc3RvcmFnZScpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGNsZWFyaW5nIHN0b3JhZ2UnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25TZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2U8VHJhbnNhY3Rpb24+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBUQUcgPSAnVHJhbnNhY3Rpb25TZXJ2aWNlJztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RvcmFnZUtleSA9IFN0b3JhZ2VLZXlzLlRSQU5TQUNUSU9OUztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFRyYW5zYWN0aW9uU2VydmljZSB7XG4gICAgICAgIGlmICghVHJhbnNhY3Rpb25TZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBUcmFuc2FjdGlvblNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgVHJhbnNhY3Rpb25TZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uU2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogVHJhbnNhY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoZGF0YSA9PiBuZXcgVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGRhdGEuYW1vdW50KSxcbiAgICAgICAgICAgIHRpbWVSZXF1aXJlZDogZGF0YS50aW1lUmVxdWlyZWQgPyBOdW1iZXIoZGF0YS50aW1lUmVxdWlyZWQpIDogdW5kZWZpbmVkXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXRNb250aGx5VHJhbnNhY3Rpb25zKG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcik6IFRyYW5zYWN0aW9uW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIodCA9PiB0Lm1vbnRoID09PSBtb250aCAmJiB0LnllYXIgPT09IHllYXIpO1xuICAgIH1cblxuICAgIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbik6IHZvaWQge1xuICAgICAgICB0cmFuc2FjdGlvbi5hbW91bnQgPSBOdW1iZXIodHJhbnNhY3Rpb24uYW1vdW50KTtcbiAgICAgICAgaWYgKGlzTmFOKHRyYW5zYWN0aW9uLmFtb3VudCkpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgJ0ludmFsaWQgdHJhbnNhY3Rpb24gYW1vdW50Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRJdGVtKHRyYW5zYWN0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdHJhbnNhY3Rpb24uYW1vdW50ID0gTnVtYmVyKHRyYW5zYWN0aW9uLmFtb3VudCk7XG4gICAgICAgIGlmIChpc05hTih0cmFuc2FjdGlvbi5hbW91bnQpKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdJbnZhbGlkIHRyYW5zYWN0aW9uIGFtb3VudCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbSh0cmFuc2FjdGlvbik7XG4gICAgfVxuXG4gICAgZGVsZXRlVHJhbnNhY3Rpb24oaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oaWQpO1xuICAgIH1cblxuICAgIGdldFRyYW5zYWN0aW9ucygpOiBUcmFuc2FjdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbEluY29tZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1xuICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2luY29tZScpXG4gICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIE51bWJlcih0LmFtb3VudCksIDApO1xuICAgIH1cblxuICAgIGdldFRvdGFsRXhwZW5zZXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdleHBlbnNlJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgTnVtYmVyKHQuYW1vdW50KSwgMCk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxUaW1lUmVxdWlyZWQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdpbmNvbWUnICYmIHQudGltZVJlcXVpcmVkKVxuICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyBOdW1iZXIodC50aW1lUmVxdWlyZWQgfHwgMCksIDApO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQ2hhcnRDb2xvcnMgPSB7XG4gICAgLy8gQXNzZXQgQ2F0ZWdvcmllc1xuICAgIFJlYWxFc3RhdGU6ICcjNEM1MUJGJywgIC8vIEluZGlnb1xuICAgIFZlaGljbGVzOiAnIzQ4QkI3OCcsICAgIC8vIEdyZWVuXG4gICAgQ2FzaDogJyM0Mjk5RTEnLCAgICAgICAgLy8gQmx1ZVxuICAgIEJ1c2luZXNzOiAnI0VEODkzNicsICAgIC8vIE9yYW5nZVxuICAgIFNhdmluZzogJyM5RjdBRUEnLCAgICAgIC8vIFB1cnBsZVxuICAgIFN0b2NrczogJyNGNTY1NjUnLCAgICAgIC8vIFJlZFxuXG4gICAgLy8gVHJhbnNhY3Rpb24gQ2F0ZWdvcmllcyAtIEluY29tZVxuICAgIFNhbGFyeTogJyM0OEJCNzgnLCAgICAgIC8vIEdyZWVuXG4gICAgJ0ludGVyZXN0L0RpdmlkZW5kcyc6ICcjOUY3QUVBJywgLy8gUHVycGxlXG5cbiAgICAvLyBUcmFuc2FjdGlvbiBDYXRlZ29yaWVzIC0gRXhwZW5zZVxuICAgIEhvdXNpbmc6ICcjNEM1MUJGJywgICAgIC8vIEluZGlnb1xuICAgIFRyYW5zcG9ydGF0aW9uOiAnIzQ4QkI3OCcsIC8vIEdyZWVuXG4gICAgRm9vZDogJyM0Mjk5RTEnLCAgICAgICAgLy8gQmx1ZVxuICAgIFV0aWxpdGllczogJyNFRDg5MzYnLCAgIC8vIE9yYW5nZVxuICAgIEluc3VyYW5jZTogJyM5RjdBRUEnLCAgIC8vIFB1cnBsZVxuICAgIEhlYWx0aGNhcmU6ICcjRjU2NTY1JywgIC8vIFJlZFxuICAgIEVudGVydGFpbm1lbnQ6ICcjNjY3RUVBJywgLy8gSW5kaWdvXG4gICAgTG9hbjogJyNENTNGOEMnLCAgICAgICAvLyBQaW5rXG5cbiAgICAvLyBMaWFiaWxpdHkgVHlwZXNcbiAgICBTaG9ydFRlcm06ICcjRjU2NTY1JywgICAvLyBSZWRcbiAgICBMb25nVGVybTogJyM0QzUxQkYnICAgICAvLyBJbmRpZ29cbn07IiwiaW1wb3J0IHsgRGlhbG9ncywgRGlhbG9nT3B0aW9ucyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRGlhbG9nT3B0aW9ucyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgYWN0aW9uczogQXJyYXk8eyBpZDogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybURpYWxvZ09wdGlvbnMgZXh0ZW5kcyBEaWFsb2dPcHRpb25zIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBva0J1dHRvblRleHQ/OiBzdHJpbmc7XG4gICAgY2FuY2VsQnV0dG9uVGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEaWFsb2cob3B0aW9uczogQWN0aW9uRGlhbG9nT3B0aW9ucyB8IENvbmZpcm1EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmcgfCBib29sZWFuPiB7XG4gICAgaWYgKCdhY3Rpb25zJyBpbiBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBEaWFsb2dzLmFjdGlvbih7XG4gICAgICAgICAgICB0aXRsZTogb3B0aW9ucy50aXRsZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMubWVzc2FnZSxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgYWN0aW9uczogb3B0aW9ucy5hY3Rpb25zLm1hcChhID0+IGEudGV4dClcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ0NhbmNlbCcpIHJldHVybiAnY2FuY2VsJztcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9ucy5maW5kKGEgPT4gYS50ZXh0ID09PSByZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbiA/IGFjdGlvbi5pZCA6ICdjYW5jZWwnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIERpYWxvZ3MuY29uZmlybShvcHRpb25zIGFzIERpYWxvZ09wdGlvbnMpO1xufSIsImltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSAnLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IExpYWJpbGl0eSB9IGZyb20gJy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0ZpbmFuY2lhbENhbGN1bGF0aW9ucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOZXRXb3J0aChhc3NldHM6IEFzc2V0W10sIGxpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXSk6IG51bWJlciB7XG4gICAgY29uc3QgdG90YWxBc3NldHMgPSBhc3NldHMucmVkdWNlKChzdW0sIGFzc2V0KSA9PiBzdW0gKyBhc3NldC52YWx1ZSwgMCk7XG4gICAgY29uc3QgdG90YWxMaWFiaWxpdGllcyA9IGxpYWJpbGl0aWVzLnJlZHVjZSgoc3VtLCBsaWFiaWxpdHkpID0+IHN1bSArIGxpYWJpbGl0eS5hbW91bnQsIDApO1xuICAgIHJldHVybiB0b3RhbEFzc2V0cyAtIHRvdGFsTGlhYmlsaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNb250aGx5Q2FzaGZsb3codHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdKTogbnVtYmVyIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICBjb25zdCBtb250aGx5VHJhbnNhY3Rpb25zID0gdHJhbnNhY3Rpb25zLmZpbHRlcih0ID0+IFxuICAgICAgICB0Lm1vbnRoID09PSBjdXJyZW50TW9udGggJiYgXG4gICAgICAgIHQueWVhciA9PT0gY3VycmVudFllYXJcbiAgICApO1xuXG4gICAgcmV0dXJuIG1vbnRobHlUcmFuc2FjdGlvbnMucmVkdWNlKChzdW0sIHQpID0+IFxuICAgICAgICBzdW0gKyAodC50eXBlID09PSAnaW5jb21lJyA/IHQuYW1vdW50IDogLXQuYW1vdW50KSwgMFxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVXZWlnaHRlZEF2ZXJhZ2VJbnRlcmVzdFJhdGUobGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbExpYWJpbGl0aWVzID0gbGlhYmlsaXRpZXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4gc3VtICsgbGlhYmlsaXR5LmFtb3VudCwgMCk7XG4gICAgXG4gICAgaWYgKHRvdGFsTGlhYmlsaXRpZXMgPT09IDApIHJldHVybiAwO1xuXG4gICAgY29uc3QgdG90YWxJbnRlcmVzdFBlclllYXIgPSBsaWFiaWxpdGllcy5yZWR1Y2UoKHN1bSwgbGlhYmlsaXR5KSA9PiBcbiAgICAgICAgc3VtICsgKGxpYWJpbGl0eS5hbW91bnQgKiAobGlhYmlsaXR5LmludGVyZXN0UmF0ZSAvIDEwMCkpLCAwKTtcblxuICAgIHJldHVybiAodG90YWxJbnRlcmVzdFBlclllYXIgLyB0b3RhbExpYWJpbGl0aWVzKSAqIDEwMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURUSSh0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10pOiBudW1iZXIge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvdGFsTW9udGhseUludGVyZXN0ID0gdHJhbnNhY3Rpb25zLnJlZHVjZSgoc3VtLCB0KSA9PiBcbiAgICAgICAgICAgIHN1bSArICh0LmNhdGVnb3J5ID09PSAnQ3JlZGl0IENhcmQvTG9hbicgPyB0LmFtb3VudCA6IDApLCAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICBjb25zdCB0b3RhbE1vbnRobHlJbmNvbWUgPSB0cmFuc2FjdGlvbnMucmVkdWNlKChzdW0sIHQpID0+IFxuICAgICAgICAgICAgc3VtICsgKHQudHlwZSA9PT0gJ2luY29tZScgPyB0LmFtb3VudCA6IDApLCAwKTtcblxuICAgICAgICBpZiAodG90YWxNb250aGx5SW5jb21lID09PSAwKSB7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnRFRJIGNhbGN1bGF0aW9uOiBUb3RhbCBtb250aGx5IGluY29tZSBpcyAwJyk7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodG90YWxNb250aGx5SW50ZXJlc3QgLyB0b3RhbE1vbnRobHlJbmNvbWUpICogMTAwO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBjYWxjdWxhdGluZyBEVEknLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUxSKGFzc2V0czogQXNzZXRbXSwgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdKTogbnVtYmVyIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjdXJyZW50QXNzZXRzID0gYXNzZXRzLnJlZHVjZSgoc3VtLCBhc3NldCkgPT4gXG4gICAgICAgICAgICBzdW0gKyAoYXNzZXQuY2F0ZWdvcnkgPT09ICdTdG9ja3MnIHx8IGFzc2V0LmNhdGVnb3J5ID09PSAnU2F2aW5nL0Nhc2gnID8gYXNzZXQudmFsdWUgOiAwKSwgMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgbW9udGhseUV4cGVuc2VzID0gdHJhbnNhY3Rpb25zLnJlZHVjZSgoc3VtLCB0KSA9PiBcbiAgICAgICAgICAgIHN1bSArICh0LnR5cGUgPT09ICdleHBlbnNlJyA/IHQuYW1vdW50IDogMCksIDApO1xuXG4gICAgICAgIGlmIChtb250aGx5RXhwZW5zZXMgPT09IDApIHtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdMUiBjYWxjdWxhdGlvbjogTW9udGhseSBleHBlbnNlcyBhcmUgMCcpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudEFzc2V0cyAvIG1vbnRobHlFeHBlbnNlcztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgY2FsY3VsYXRpbmcgTFInLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURBUihhc3NldHM6IEFzc2V0W10sIGxpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXSk6IG51bWJlciB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdG90YWxBc3NldHMgPSBhc3NldHMucmVkdWNlKChzdW0sIGFzc2V0KSA9PiBzdW0gKyBhc3NldC52YWx1ZSwgMCk7XG4gICAgICAgIGNvbnN0IHRvdGFsTGlhYmlsaXRpZXMgPSBsaWFiaWxpdGllcy5yZWR1Y2UoKHN1bSwgbGlhYmlsaXR5KSA9PiBzdW0gKyBsaWFiaWxpdHkuYW1vdW50LCAwKTtcblxuICAgICAgICBpZiAodG90YWxBc3NldHMgPT09IDApIHtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdEQVIgY2FsY3VsYXRpb246IFRvdGFsIGFzc2V0cyBhcmUgMCcpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRvdGFsTGlhYmlsaXRpZXMgLyB0b3RhbEFzc2V0cykgKiAxMDA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGNhbGN1bGF0aW5nIERBUicsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeShhbW91bnQ6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gRW5zdXJlIHdlJ3JlIHdvcmtpbmcgd2l0aCBhIG51bWJlclxuICAgIGNvbnN0IG51bWVyaWNBbW91bnQgPSB0eXBlb2YgYW1vdW50ID09PSAnc3RyaW5nJyA/IHBhcnNlRmxvYXQoYW1vdW50KSA6IGFtb3VudDtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBpdCdzIGEgdmFsaWQgbnVtYmVyXG4gICAgaWYgKGlzTmFOKG51bWVyaWNBbW91bnQpKSB7XG4gICAgICAgIHJldHVybiAnJDAuMDAnO1xuICAgIH1cbiAgICBcbiAgICAvLyBGb3JtYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGFuZCBhZGQgZG9sbGFyIHNpZ25cbiAgICByZXR1cm4gYCQke251bWVyaWNBbW91bnQudG9GaXhlZCgyKX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuICAgIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50YWdlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGluY2x1ZGVTeW1ib2w6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW1lcmljVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBpZiAoaXNOYU4obnVtZXJpY1ZhbHVlKSkge1xuICAgICAgICByZXR1cm4gaW5jbHVkZVN5bWJvbCA/ICcwLjAwJScgOiAnMC4wMCc7XG4gICAgfVxuICAgIHJldHVybiBgJHtudW1lcmljVmFsdWUudG9GaXhlZCgyKX0ke2luY2x1ZGVTeW1ib2wgPyAnJScgOiAnJ31gO1xufSIsIi8vIEB0cy1pZ25vcmVcbmlmIChnbG9iYWwuaXNJT1MpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgVUlDb2xvci5wcm90b3R5cGUuY29sb3JXaXRoSGV4U3RyaW5nID0gZnVuY3Rpb24oaGV4OiBzdHJpbmcpOiBVSUNvbG9yIHtcbiAgICAgICAgbGV0IHIgPSAwLCBnID0gMCwgYiA9IDA7XG4gICAgICAgIFxuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgciA9IHBhcnNlSW50KGhleC5jaGFyQXQoMCkgKyBoZXguY2hhckF0KDApLCAxNik7XG4gICAgICAgICAgICBnID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgxKSArIGhleC5jaGFyQXQoMSksIDE2KTtcbiAgICAgICAgICAgIGIgPSBwYXJzZUludChoZXguY2hhckF0KDIpICsgaGV4LmNoYXJBdCgyKSwgMTYpO1xuICAgICAgICB9IGVsc2UgaWYgKGhleC5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgIHIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNik7XG4gICAgICAgICAgICBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpO1xuICAgICAgICAgICAgYiA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCwgNiksIDE2KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gVUlDb2xvci5hbGxvYygpLmluaXRXaXRoUmVkR3JlZW5CbHVlQWxwaGEoci8yNTUsIGcvMjU1LCBiLzI1NSwgMSk7XG4gICAgfTtcbn0iLCJleHBvcnQgaW50ZXJmYWNlIExvZ2dlciB7XG4gICAgZGVidWcodGFnOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkO1xuICAgIGVycm9yKHRhZzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGVycm9yPzogRXJyb3IpOiB2b2lkO1xufSIsImltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBbmRyb2lkTG9nZ2VyIH0gZnJvbSAnLi9wbGF0Zm9ybS9hbmRyb2lkLWxvZ2dlcic7XG5pbXBvcnQgeyBDb25zb2xlTG9nZ2VyIH0gZnJvbSAnLi9wbGF0Zm9ybS9jb25zb2xlLWxvZ2dlcic7XG5pbXBvcnQgeyBMb2dnZXIgYXMgTG9nZ2VySW50ZXJmYWNlIH0gZnJvbSAnLi9sb2dnZXItaW50ZXJmYWNlJztcblxuY2xhc3MgTG9nZ2VyU2VydmljZSB7XG4gICAgcHJpdmF0ZSBhbmRyb2lkTG9nZ2VyOiBMb2dnZXJJbnRlcmZhY2U7XG4gICAgcHJpdmF0ZSBjb25zb2xlTG9nZ2VyOiBMb2dnZXJJbnRlcmZhY2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbmRyb2lkTG9nZ2VyID0gbmV3IEFuZHJvaWRMb2dnZXIoKTtcbiAgICAgICAgdGhpcy5jb25zb2xlTG9nZ2VyID0gbmV3IENvbnNvbGVMb2dnZXIoKTtcbiAgICB9XG5cbiAgICBkZWJ1Zyh0YWc6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnNvbGVMb2dnZXIuZGVidWcodGFnLCBtZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5hbmRyb2lkTG9nZ2VyLmRlYnVnKHRhZywgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvcih0YWc6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBlcnJvcj86IEVycm9yKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29uc29sZUxvZ2dlci5lcnJvcih0YWcsIG1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5hbmRyb2lkTG9nZ2VyLmVycm9yKHRhZywgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBMb2dnZXIgPSBuZXcgTG9nZ2VyU2VydmljZSgpOyIsImltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVG9QYWdlKHBhZ2VQYXRoOiBzdHJpbmcsIGNvbnRleHQ/OiBhbnkpOiB2b2lkIHtcbiAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBwYWdlUGF0aCxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgIH0pO1xufSIsImltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlci1pbnRlcmZhY2UnO1xuXG5kZWNsYXJlIGNvbnN0IGFuZHJvaWQ6IGFueTtcblxuZXhwb3J0IGNsYXNzIEFuZHJvaWRMb2dnZXIgaW1wbGVtZW50cyBMb2dnZXIge1xuICAgIGRlYnVnKHRhZzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKGdsb2JhbC5hbmRyb2lkICYmIGFuZHJvaWQudXRpbCkge1xuICAgICAgICAgICAgYW5kcm9pZC51dGlsLkxvZy5kKHRhZywgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlcnJvcih0YWc6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmIChnbG9iYWwuYW5kcm9pZCAmJiBhbmRyb2lkLnV0aWwpIHtcbiAgICAgICAgICAgIGFuZHJvaWQudXRpbC5Mb2cuZSh0YWcsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL2xvZ2dlci1pbnRlcmZhY2UnO1xuXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZ2dlciBpbXBsZW1lbnRzIExvZ2dlciB7XG4gICAgZGVidWcodGFnOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbG9nTWVzc2FnZSA9IGBbJHt0YWd9XSAke21lc3NhZ2V9YDtcbiAgICAgICAgY29uc29sZS5sb2cobG9nTWVzc2FnZSwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgZXJyb3IodGFnOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgZXJyb3I/OiBFcnJvcik6IHZvaWQge1xuICAgICAgICBjb25zdCBsb2dNZXNzYWdlID0gYFske3RhZ31dIEVSUk9SOiAke21lc3NhZ2V9YDtcbiAgICAgICAgY29uc29sZS5lcnJvcihsb2dNZXNzYWdlKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IEFzc2V0LCBBc3NldENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZEFzc2V0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEFkZEFzc2V0Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRDYXRlZ29yeUluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2NhdGVnb3JpZXM6IEFzc2V0Q2F0ZWdvcnlbXSA9IFtcbiAgICAgICAgJ1JlYWwgRXN0YXRlJywgJ0J1c2luZXNzJywgJ1N0b2NrcycsICdBcnQgJiBBbnRpcXVpdGllcycsICdTYXZpbmcvQ2FzaCdcbiAgICBdO1xuICAgIHByaXZhdGUgX2Fzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2V4aXN0aW5nQXNzZXQ/OiBBc3NldDtcblxuICAgIGNvbnN0cnVjdG9yKGV4aXN0aW5nQXNzZXQ/OiBBc3NldCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UgPSBBc3NldFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fZXhpc3RpbmdBc3NldCA9IGV4aXN0aW5nQXNzZXQ7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nQXNzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ0Fzc2V0KGV4aXN0aW5nQXNzZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplV2l0aEV4aXN0aW5nQXNzZXQoYXNzZXQ6IEFzc2V0KSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBhc3NldC5uYW1lO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IGFzc2V0LnZhbHVlO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggPSB0aGlzLl9jYXRlZ29yaWVzLmluZGV4T2YoYXNzZXQuY2F0ZWdvcnkpO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG4gICAgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25hbWUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3ZhbHVlOyB9XG4gICAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIHRoaXMuX3ZhbHVlICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gbnVtZXJpY1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndmFsdWUnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGNhdGVnb3JpZXMoKTogQXNzZXRDYXRlZ29yeVtdIHsgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXM7IH1cbiAgICBnZXQgc2VsZWN0ZWRDYXRlZ29yeUluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXg7IH1cbiAgICBzZXQgc2VsZWN0ZWRDYXRlZ29yeUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRDYXRlZ29yeUluZGV4JywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TYXZlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXNzZXQgbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5fdmFsdWUpIHx8IHRoaXMuX3ZhbHVlIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fzc2V0IHZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYXNzZXQgPSBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgICAgIC4uLih0aGlzLl9leGlzdGluZ0Fzc2V0ICYmIHsgaWQ6IHRoaXMuX2V4aXN0aW5nQXNzZXQuaWQgfSksXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50cmltKCksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuX3ZhbHVlLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLl9jYXRlZ29yaWVzW3RoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleF1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZXhpc3RpbmdBc3NldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZS51cGRhdGVBc3NldChhc3NldCk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSB1cGRhdGVkIGFzc2V0OiAke2Fzc2V0Lm5hbWV9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZS5hZGRBc3NldChhc3NldCk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSBhZGRlZCBhc3NldDogJHthc3NldC5uYW1lfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIHNhdmluZyBhc3NldCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFzc2V0LCBBc3NldENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IERvbnV0Q2hhcnREYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQnO1xuXG5leHBvcnQgY2xhc3MgQXNzZXREaXN0cmlidXRpb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9jaGFydERhdGE6IERvbnV0Q2hhcnREYXRhW10gPSBbXTtcblxuICAgIGdldCBjaGFydERhdGEoKTogRG9udXRDaGFydERhdGFbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFydERhdGE7XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YShhc3NldHM6IEFzc2V0W10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdG90YWwgPSBhc3NldHMucmVkdWNlKChzdW0sIGFzc2V0KSA9PiBzdW0gKyBhc3NldC52YWx1ZSwgMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBHcm91cCBhc3NldHMgYnkgY2F0ZWdvcnlcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlNYXAgPSBuZXcgTWFwPEFzc2V0Q2F0ZWdvcnksIG51bWJlcj4oKTtcbiAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGNhdGVnb3J5TWFwLmdldChhc3NldC5jYXRlZ29yeSkgfHwgMDtcbiAgICAgICAgICAgIGNhdGVnb3J5TWFwLnNldChhc3NldC5jYXRlZ29yeSwgY3VycmVudCArIGFzc2V0LnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29udmVydCB0byBjaGFydCBkYXRhXG4gICAgICAgIHRoaXMuX2NoYXJ0RGF0YSA9IEFycmF5LmZyb20oY2F0ZWdvcnlNYXAuZW50cmllcygpKVxuICAgICAgICAgICAgLm1hcCgoW2NhdGVnb3J5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBDaGFydENvbG9yc1tjYXRlZ29yeV0sXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgodmFsdWUgLyB0b3RhbCkgKiAxMDApIDogMFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NoYXJ0RGF0YScsIHRoaXMuX2NoYXJ0RGF0YSk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgQXNzZXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNzZXQnO1xuaW1wb3J0IHsgQXNzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXNzZXQtc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHNob3dEaWFsb2cgfSBmcm9tICcuLi8uLi91dGlscy9kaWFsb2cnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcbmltcG9ydCB7IEFzc2V0RGlzdHJpYnV0aW9uVmlld01vZGVsIH0gZnJvbSAnLi9hc3NldC1kaXN0cmlidXRpb24tdmlldy1tb2RlbCc7XG5cbmNvbnN0IFRBRyA9ICdBc3NldExpc3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQXNzZXRMaXN0Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfYXNzZXRzOiBBc3NldFtdID0gW107XG4gICAgcHJpdmF0ZSBfZGlzdHJpYnV0aW9uVmlld01vZGVsOiBBc3NldERpc3RyaWJ1dGlvblZpZXdNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UgPSBBc3NldFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsID0gbmV3IEFzc2V0RGlzdHJpYnV0aW9uVmlld01vZGVsKCk7XG4gICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgIH1cblxuICAgIGdldCBhc3NldHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hc3NldHMubWFwKGFzc2V0ID0+ICh7XG4gICAgICAgICAgICAuLi5hc3NldCxcbiAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBmb3JtYXRDdXJyZW5jeShhc3NldC52YWx1ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbEFzc2V0c0Zvcm1hdHRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX2Fzc2V0U2VydmljZS5nZXRUb3RhbEFzc2V0VmFsdWUoKSk7XG4gICAgfVxuXG4gICAgZ2V0IGRpc3RyaWJ1dGlvblZpZXdNb2RlbCgpOiBBc3NldERpc3RyaWJ1dGlvblZpZXdNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWw7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1JlZnJlc2hpbmcgYXNzZXRzIGxpc3QnKTtcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKCk7XG4gICAgfVxuXG4gICAgb25BZGRBc3NldCgpOiB2b2lkIHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoXCJ2aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2VcIik7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IHsgaW5kZXg6IG51bWJlciB9KTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdBc3NldCBpdGVtIHRhcHBlZCcpO1xuICAgICAgICBjb25zdCBhc3NldCA9IHRoaXMuX2Fzc2V0c1thcmdzLmluZGV4XTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogYXNzZXQubmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBWYWx1ZTogJHtmb3JtYXRDdXJyZW5jeShhc3NldC52YWx1ZSl9YCxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAnZWRpdCcsIHRleHQ6ICdFZGl0JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdkZWxldGUnLCB0ZXh0OiAnRGVsZXRlJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdEFzc2V0KGFzc2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQXNzZXQoYXNzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgaGFuZGxpbmcgaXRlbSB0YXAnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEFzc2V0cygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2Fzc2V0cyA9IHRoaXMuX2Fzc2V0U2VydmljZS5nZXRBc3NldHMoKTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbC51cGRhdGVEYXRhKHRoaXMuX2Fzc2V0cyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdhc3NldHMnLCB0aGlzLmFzc2V0cyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbEFzc2V0c0Zvcm1hdHRlZCcsIHRoaXMudG90YWxBc3NldHNGb3JtYXR0ZWQpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYExvYWRlZCAke3RoaXMuX2Fzc2V0cy5sZW5ndGh9IGFzc2V0c2ApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGxvYWRpbmcgYXNzZXRzJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0QXNzZXQoYXNzZXQ6IEFzc2V0KTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBFZGl0aW5nIGFzc2V0OiAke2Fzc2V0LmlkfWApO1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlJywgeyBhc3NldCB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZUFzc2V0KGFzc2V0OiBBc3NldCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgRGVsZXRpbmcgYXNzZXQ6ICR7YXNzZXQuaWR9YCk7XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtIERlbGV0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGFzc2V0PycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZS5kZWxldGVBc3NldChhc3NldC5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQXNzZXRzKCk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYEFzc2V0IGRlbGV0ZWQ6ICR7YXNzZXQuaWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBkZWxldGluZyBhc3NldCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUsIEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdCYXNlVmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEJhc2VWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBnb0JhY2soKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdBdHRlbXB0aW5nIHRvIG5hdmlnYXRlIGJhY2snKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUudG9wbW9zdCgpO1xuICAgICAgICAgICAgaWYgKGZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZnJhbWUuZ29CYWNrKCk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N1Y2Nlc3NmdWxseSBuYXZpZ2F0ZWQgYmFjaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRnJhbWUgaXMgbnVsbCwgY2Fubm90IG5hdmlnYXRlIGJhY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBuYXZpZ2F0aW5nIGJhY2snLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZSc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlJztcbmltcG9ydCB7IExpYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZSc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBcbiAgICBjYWxjdWxhdGVOZXRXb3J0aCwgXG4gICAgY2FsY3VsYXRlTW9udGhseUNhc2hmbG93LCBcbiAgICBjYWxjdWxhdGVXZWlnaHRlZEF2ZXJhZ2VJbnRlcmVzdFJhdGUsXG4gICAgY2FsY3VsYXRlRFRJLFxuICAgIGNhbGN1bGF0ZUxSLFxuICAgIGNhbGN1bGF0ZURBUlxufSBmcm9tICcuLi91dGlscy9maW5hbmNpYWwtY2FsY3VsYXRpb25zJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdEYXNoYm9hcmRWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfbmV0V29ydGg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxJbmNvbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxFeHBlbnNlczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF90b3RhbEFzc2V0czogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF90b3RhbExpYWJpbGl0aWVzOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2Nhc2hmbG93OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2hvdXJseVJhdGU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc2hhcnBlUmF0aW86IG51bWJlciB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgX3dlaWdodGVkSW50ZXJlc3RSYXRlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2R0aTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9scjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9kYXI6IG51bWJlciA9IDA7XG5cbiAgICBwcml2YXRlIHRyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBsaWFiaWxpdHlTZXJ2aWNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuICAgIHByaXZhdGUgbW9udGhseVNuYXBzaG90U2VydmljZTogTW9udGhseVNuYXBzaG90U2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmFzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubW9udGhseVNuYXBzaG90U2VydmljZSA9IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVGaW5hbmNpYWxzKCk7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvbiBtZXRob2RzXG4gICAgb25OYXZpZ2F0ZVRvSW5jb21lKCkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZScsIHsgZmlsdGVyVHlwZTogJ2luY29tZScgfSk7XG4gICAgfVxuXG4gICAgb25OYXZpZ2F0ZVRvRXhwZW5zZSgpIHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UnLCB7IGZpbHRlclR5cGU6ICdleHBlbnNlJyB9KTtcbiAgICB9XG5cbiAgICBvbk5hdmlnYXRlVG9Bc3NldHMoKSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlJyk7XG4gICAgfVxuXG4gICAgb25OYXZpZ2F0ZVRvTGlhYmlsaXRpZXMoKSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlJyk7XG4gICAgfVxuXG4gICAgb25OYXZpZ2F0ZVRvTW9udGhseVNuYXBzaG90KCkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2UnKTtcbiAgICB9XG5cbiAgICAvLyBGb3JtYXR0ZWQgZ2V0dGVyc1xuICAgIGdldCBuZXRXb3J0aEZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fbmV0V29ydGgpO1xuICAgIH1cblxuICAgIGdldCBjYXNoZmxvd0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fY2FzaGZsb3cpO1xuICAgIH1cblxuICAgIGdldCBob3VybHlSYXRlRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeShNYXRoLnJvdW5kKHRoaXMuX2hvdXJseVJhdGUgKiAxMDApIC8gMTAwKTtcbiAgICB9XG5cbiAgICBnZXQgY2FzaGZsb3coKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhc2hmbG93O1xuICAgIH1cblxuICAgIGdldCBzaGFycGVSYXRpb0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcnBlUmF0aW8gIT09IG51bGwgXG4gICAgICAgICAgICA/IGZvcm1hdFBlcmNlbnRhZ2UodGhpcy5fc2hhcnBlUmF0aW8sIGZhbHNlKVxuICAgICAgICAgICAgOiAnTi9BJztcbiAgICB9XG5cbiAgICBnZXQgd2VpZ2h0ZWRJbnRlcmVzdFJhdGVGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFBlcmNlbnRhZ2UodGhpcy5fd2VpZ2h0ZWRJbnRlcmVzdFJhdGUpO1xuICAgIH1cblxuICAgIGdldCBkdGlGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFBlcmNlbnRhZ2UodGhpcy5fZHRpKTtcbiAgICB9XG5cbiAgICBnZXQgbHJGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xyLnRvRml4ZWQoMik7XG4gICAgfVxuXG4gICAgZ2V0IGRhckZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0UGVyY2VudGFnZSh0aGlzLl9kYXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlRmluYW5jaWFscygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0cyA9IHRoaXMuYXNzZXRTZXJ2aWNlLmdldEFzc2V0cygpO1xuICAgICAgICAgICAgY29uc3QgbGlhYmlsaXRpZXMgPSB0aGlzLmxpYWJpbGl0eVNlcnZpY2UuZ2V0TGlhYmlsaXRpZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRyYW5zYWN0aW9ucygpO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdG90YWxzXG4gICAgICAgICAgICB0aGlzLl90b3RhbEFzc2V0cyA9IHRoaXMuYXNzZXRTZXJ2aWNlLmdldFRvdGFsQXNzZXRWYWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy5fdG90YWxMaWFiaWxpdGllcyA9IHRoaXMubGlhYmlsaXR5U2VydmljZS5nZXRUb3RhbExpYWJpbGl0aWVzKCk7XG4gICAgICAgICAgICB0aGlzLl90b3RhbEluY29tZSA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRvdGFsSW5jb21lKCk7XG4gICAgICAgICAgICB0aGlzLl90b3RhbEV4cGVuc2VzID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuZ2V0VG90YWxFeHBlbnNlcygpO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbWV0cmljc1xuICAgICAgICAgICAgdGhpcy5fbmV0V29ydGggPSBjYWxjdWxhdGVOZXRXb3J0aChhc3NldHMsIGxpYWJpbGl0aWVzKTtcbiAgICAgICAgICAgIHRoaXMuX2Nhc2hmbG93ID0gY2FsY3VsYXRlTW9udGhseUNhc2hmbG93KHRyYW5zYWN0aW9ucyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsVGltZVJlcXVpcmVkID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuZ2V0VG90YWxUaW1lUmVxdWlyZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX2hvdXJseVJhdGUgPSB0b3RhbFRpbWVSZXF1aXJlZCA+IDAgPyB0aGlzLl90b3RhbEluY29tZSAvIHRvdGFsVGltZVJlcXVpcmVkIDogMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fc2hhcnBlUmF0aW8gPSB0aGlzLm1vbnRobHlTbmFwc2hvdFNlcnZpY2UuY2FsY3VsYXRlU2hhcnBlUmF0aW8oKTtcbiAgICAgICAgICAgIHRoaXMuX3dlaWdodGVkSW50ZXJlc3RSYXRlID0gY2FsY3VsYXRlV2VpZ2h0ZWRBdmVyYWdlSW50ZXJlc3RSYXRlKGxpYWJpbGl0aWVzKTtcbiAgICAgICAgICAgIHRoaXMuX2R0aSA9IGNhbGN1bGF0ZURUSSh0cmFuc2FjdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5fbHIgPSBjYWxjdWxhdGVMUihhc3NldHMsIHRyYW5zYWN0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLl9kYXIgPSBjYWxjdWxhdGVEQVIoYXNzZXRzLCBsaWFiaWxpdGllcyk7XG5cbiAgICAgICAgICAgIC8vIE5vdGlmeSBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlcygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnRmluYW5jaWFsIGNhbGN1bGF0aW9ucyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgY2FsY3VsYXRpbmcgZmluYW5jaWFscycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbm90aWZ5UHJvcGVydHlDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduZXRXb3J0aEZvcm1hdHRlZCcsIHRoaXMubmV0V29ydGhGb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYXNoZmxvd0Zvcm1hdHRlZCcsIHRoaXMuY2FzaGZsb3dGb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYXNoZmxvdycsIHRoaXMuY2FzaGZsb3cpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdob3VybHlSYXRlRm9ybWF0dGVkJywgdGhpcy5ob3VybHlSYXRlRm9ybWF0dGVkKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2hhcnBlUmF0aW9Gb3JtYXR0ZWQnLCB0aGlzLnNoYXJwZVJhdGlvRm9ybWF0dGVkKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnd2VpZ2h0ZWRJbnRlcmVzdFJhdGVGb3JtYXR0ZWQnLCB0aGlzLndlaWdodGVkSW50ZXJlc3RSYXRlRm9ybWF0dGVkKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnZHRpRm9ybWF0dGVkJywgdGhpcy5kdGlGb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdsckZvcm1hdHRlZCcsIHRoaXMubHJGb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkYXJGb3JtYXR0ZWQnLCB0aGlzLmRhckZvcm1hdHRlZCk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTGlhYmlsaXR5LCBMaWFiaWxpdHlUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpYWJpbGl0eSc7XG5pbXBvcnQgeyBMaWFiaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlhYmlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZExpYWJpbGl0eVZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBZGRMaWFiaWxpdHlWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9hbW91bnQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaW50ZXJlc3RSYXRlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkVHlwZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3R5cGVzOiBMaWFiaWxpdHlUeXBlW10gPSBbJ0xvYW4nLCAnRGVidC9QYXlhYmxlJ107XG4gICAgcHJpdmF0ZSBfbGlhYmlsaXR5U2VydmljZTogTGlhYmlsaXR5U2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ0xpYWJpbGl0eT86IExpYWJpbGl0eTtcblxuICAgIGNvbnN0cnVjdG9yKGV4aXN0aW5nTGlhYmlsaXR5PzogTGlhYmlsaXR5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5ID0gZXhpc3RpbmdMaWFiaWxpdHk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nTGlhYmlsaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVXaXRoRXhpc3RpbmdMaWFiaWxpdHkoZXhpc3RpbmdMaWFiaWxpdHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplV2l0aEV4aXN0aW5nTGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBsaWFiaWxpdHkubmFtZTtcbiAgICAgICAgdGhpcy5fYW1vdW50ID0gbGlhYmlsaXR5LmFtb3VudDtcbiAgICAgICAgdGhpcy5faW50ZXJlc3RSYXRlID0gbGlhYmlsaXR5LmludGVyZXN0UmF0ZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXggPSB0aGlzLl90eXBlcy5pbmRleE9mKGxpYWJpbGl0eS50eXBlKTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX25hbWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduYW1lJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGFtb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fYW1vdW50OyB9XG4gICAgc2V0IGFtb3VudCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpY1ZhbHVlKSAmJiB0aGlzLl9hbW91bnQgIT09IG51bWVyaWNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYW1vdW50ID0gbnVtZXJpY1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnYW1vdW50JywgbnVtZXJpY1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpbnRlcmVzdFJhdGUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2ludGVyZXN0UmF0ZTsgfVxuICAgIHNldCBpbnRlcmVzdFJhdGUodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5faW50ZXJlc3RSYXRlICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2ludGVyZXN0UmF0ZScsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdHlwZXMoKTogTGlhYmlsaXR5VHlwZVtdIHsgcmV0dXJuIHRoaXMuX3R5cGVzOyB9XG4gICAgZ2V0IHNlbGVjdGVkVHlwZUluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZFR5cGVJbmRleDsgfVxuICAgIHNldCBzZWxlY3RlZFR5cGVJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFR5cGVJbmRleCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkVHlwZUluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZFR5cGVJbmRleCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc0VkaXRpbmcoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5OyB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWFiaWxpdHkgbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5fYW1vdW50KSB8fCB0aGlzLl9hbW91bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGlhYmlsaXR5IGFtb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLl9pbnRlcmVzdFJhdGUpIHx8IHRoaXMuX2ludGVyZXN0UmF0ZSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVyZXN0IHJhdGUgbXVzdCBiZSAwIG9yIGdyZWF0ZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlhYmlsaXR5ID0gbmV3IExpYWJpbGl0eSh7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5ICYmIHsgaWQ6IHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5LmlkIH0pLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUudHJpbSgpLFxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5fYW1vdW50LFxuICAgICAgICAgICAgICAgIGludGVyZXN0UmF0ZTogdGhpcy5faW50ZXJlc3RSYXRlLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuX3R5cGVzW3RoaXMuX3NlbGVjdGVkVHlwZUluZGV4XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGlzdGluZ0xpYWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UudXBkYXRlTGlhYmlsaXR5KGxpYWJpbGl0eSk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSB1cGRhdGVkIGxpYWJpbGl0eTogJHtsaWFiaWxpdHkubmFtZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGlhYmlsaXR5U2VydmljZS5hZGRMaWFiaWxpdHkobGlhYmlsaXR5KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IGFkZGVkIGxpYWJpbGl0eTogJHtsaWFiaWxpdHkubmFtZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBzYXZpbmcgbGlhYmlsaXR5JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTGlhYmlsaXR5LCBMaWFiaWxpdHlUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpYWJpbGl0eSc7XG5pbXBvcnQgeyBDaGFydENvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBEb251dENoYXJ0RGF0YSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hhcnRzL2RvbnV0LWNoYXJ0JztcblxuZXhwb3J0IGNsYXNzIExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2NoYXJ0RGF0YTogRG9udXRDaGFydERhdGFbXSA9IFtdO1xuXG4gICAgZ2V0IGNoYXJ0RGF0YSgpOiBEb251dENoYXJ0RGF0YVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJ0RGF0YTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGxpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0b3RhbCA9IGxpYWJpbGl0aWVzLnJlZHVjZSgoc3VtLCBsaWFiaWxpdHkpID0+IHN1bSArIGxpYWJpbGl0eS5hbW91bnQsIDApO1xuICAgICAgICBcbiAgICAgICAgLy8gR3JvdXAgbGlhYmlsaXRpZXMgYnkgdHlwZVxuICAgICAgICBjb25zdCB0eXBlTWFwID0gbmV3IE1hcDxMaWFiaWxpdHlUeXBlLCBudW1iZXI+KCk7XG4gICAgICAgIGxpYWJpbGl0aWVzLmZvckVhY2gobGlhYmlsaXR5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0eXBlTWFwLmdldChsaWFiaWxpdHkudHlwZSkgfHwgMDtcbiAgICAgICAgICAgIHR5cGVNYXAuc2V0KGxpYWJpbGl0eS50eXBlLCBjdXJyZW50ICsgbGlhYmlsaXR5LmFtb3VudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gY2hhcnQgZGF0YVxuICAgICAgICB0aGlzLl9jaGFydERhdGEgPSBBcnJheS5mcm9tKHR5cGVNYXAuZW50cmllcygpKVxuICAgICAgICAgICAgLm1hcCgoW3R5cGUsIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdHlwZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogdHlwZSA9PT0gJ0RlYnQvUGF5YWJsZScgPyBDaGFydENvbG9ycy5TaG9ydFRlcm0gOiBDaGFydENvbG9ycy5Mb25nVGVybSxcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKCh2YWx1ZSAvIHRvdGFsKSAqIDEwMCkgOiAwXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2hhcnREYXRhJywgdGhpcy5fY2hhcnREYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMaWFiaWxpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlhYmlsaXR5JztcbmltcG9ydCB7IExpYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0UGVyY2VudGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHNob3dEaWFsb2csIENvbmZpcm1EaWFsb2dPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBMaWFiaWxpdHlEaXN0cmlidXRpb25WaWV3TW9kZWwgfSBmcm9tICcuL2xpYWJpbGl0eS1kaXN0cmlidXRpb24tdmlldy1tb2RlbCc7XG5cbmNvbnN0IFRBRyA9ICdMaWFiaWxpdHlMaXN0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIExpYWJpbGl0eUxpc3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9saWFiaWxpdHlTZXJ2aWNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2xpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXSA9IFtdO1xuICAgIHByaXZhdGUgX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDogTGlhYmlsaXR5RGlzdHJpYnV0aW9uVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbCA9IG5ldyBMaWFiaWxpdHlEaXN0cmlidXRpb25WaWV3TW9kZWwoKTtcbiAgICAgICAgdGhpcy5sb2FkTGlhYmlsaXRpZXMoKTtcbiAgICB9XG5cbiAgICBnZXQgbGlhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saWFiaWxpdGllcy5tYXAobGlhYmlsaXR5ID0+ICh7XG4gICAgICAgICAgICAuLi5saWFiaWxpdHksXG4gICAgICAgICAgICBmb3JtYXR0ZWRBbW91bnQ6IGZvcm1hdEN1cnJlbmN5KGxpYWJpbGl0eS5hbW91bnQpLFxuICAgICAgICAgICAgZm9ybWF0dGVkSW50ZXJlc3RSYXRlOiBmb3JtYXRQZXJjZW50YWdlKGxpYWJpbGl0eS5pbnRlcmVzdFJhdGUpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxMaWFiaWxpdGllc0Zvcm1hdHRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UuZ2V0VG90YWxMaWFiaWxpdGllcygpKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzdHJpYnV0aW9uVmlld01vZGVsKCk6IExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWw7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1JlZnJlc2hpbmcgbGlhYmlsaXRpZXMgbGlzdCcpO1xuICAgICAgICB0aGlzLmxvYWRMaWFiaWxpdGllcygpO1xuICAgIH1cblxuICAgIG9uQWRkTGlhYmlsaXR5KCk6IHZvaWQge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZVwiKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogeyBpbmRleDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGlhYmlsaXR5ID0gdGhpcy5fbGlhYmlsaXRpZXNbYXJncy5pbmRleF07XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6IGxpYWJpbGl0eS5uYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogYEFtb3VudDogJHtmb3JtYXRDdXJyZW5jeShsaWFiaWxpdHkuYW1vdW50KX1cXG5JbnRlcmVzdCBSYXRlOiAke2Zvcm1hdFBlcmNlbnRhZ2UobGlhYmlsaXR5LmludGVyZXN0UmF0ZSl9YCxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAnZWRpdCcsIHRleHQ6ICdFZGl0JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdkZWxldGUnLCB0ZXh0OiAnRGVsZXRlJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdExpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVMaWFiaWxpdHkobGlhYmlsaXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkTGlhYmlsaXRpZXMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9saWFiaWxpdGllcyA9IHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UuZ2V0TGlhYmlsaXRpZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbC51cGRhdGVEYXRhKHRoaXMuX2xpYWJpbGl0aWVzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2xpYWJpbGl0aWVzJywgdGhpcy5saWFiaWxpdGllcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkJywgdGhpcy50b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBMb2FkZWQgJHt0aGlzLl9saWFiaWxpdGllcy5sZW5ndGh9IGxpYWJpbGl0aWVzYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgbG9hZGluZyBsaWFiaWxpdGllcycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdExpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSk6IHZvaWQge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlJywgeyBsaWFiaWxpdHkgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVMaWFiaWxpdHkobGlhYmlsaXR5OiBMaWFiaWxpdHkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlhbG9nT3B0aW9uczogQ29uZmlybURpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlhYmlsaXR5PycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfTtcblxuICAgICAgICBzaG93RGlhbG9nKGRpYWxvZ09wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlLmRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHkuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZExpYWJpbGl0aWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90IH0gZnJvbSAnLi4vbW9kZWxzL21vbnRobHktc25hcHNob3QnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vbnRobHktc25hcHNob3Qtc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0UGVyY2VudGFnZSB9IGZyb20gJy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgc2hvd0RpYWxvZyB9IGZyb20gJy4uL3V0aWxzL2RpYWxvZyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTW9udGhseVNuYXBzaG90Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIE1vbnRobHlTbmFwc2hvdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX3NuYXBzaG90U2VydmljZTogTW9udGhseVNuYXBzaG90U2VydmljZTtcbiAgICBwcml2YXRlIF9uZXRBc3NldDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZFllYXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zZWxlY3RlZE1vbnRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfeWVhcnM6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBfbW9udGhzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UgPSBNb250aGx5U25hcHNob3RTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVllYXJzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplWWVhcnMoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLl95ZWFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGkpID0+IGN1cnJlbnRZZWFyIC0gMiArIGkpO1xuICAgIH1cblxuICAgIGdldCBuZXRBc3NldCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbmV0QXNzZXQ7IH1cbiAgICBzZXQgbmV0QXNzZXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fbmV0QXNzZXQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXRBc3NldCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0QXNzZXQnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRZZWFyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZFllYXI7IH1cbiAgICBzZXQgc2VsZWN0ZWRZZWFyKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkWWVhciAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkWWVhciA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRZZWFyJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkTW9udGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkTW9udGg7IH1cbiAgICBzZXQgc2VsZWN0ZWRNb250aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZE1vbnRoICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRNb250aCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB5ZWFycygpOiBudW1iZXJbXSB7IHJldHVybiB0aGlzLl95ZWFyczsgfVxuICAgIGdldCBtb250aHMoKTogc3RyaW5nW10geyByZXR1cm4gdGhpcy5fbW9udGhzOyB9XG5cbiAgICBnZXQgc25hcHNob3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc25hcHNob3RTZXJ2aWNlLmdldFNuYXBzaG90cygpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnllYXIgIT09IGIueWVhcikgcmV0dXJuIGIueWVhciAtIGEueWVhcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5tb250aCAtIGEubW9udGg7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChzbmFwc2hvdCA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnNuYXBzaG90LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGAke3RoaXMuX21vbnRoc1tzbmFwc2hvdC5tb250aF19ICR7c25hcHNob3QueWVhcn1gLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZE5ldEFzc2V0OiBmb3JtYXRDdXJyZW5jeShzbmFwc2hvdC5uZXRBc3NldCksXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUGVyY2VudGFnZUNoYW5nZTogc25hcHNob3QucGVyY2VudGFnZUNoYW5nZSBcbiAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRQZXJjZW50YWdlKHNuYXBzaG90LnBlcmNlbnRhZ2VDaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIDogJ04vQSdcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmV0QXNzZXQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0IGFzc2V0IHZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc25hcHNob3QgYWxyZWFkeSBleGlzdHMgZm9yIHNlbGVjdGVkIG1vbnRoL3llYXJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5fc25hcHNob3RTZXJ2aWNlLmdldFNuYXBzaG90cygpLmZpbmQoXG4gICAgICAgICAgICAgICAgcyA9PiBzLnllYXIgPT09IHRoaXMuX3NlbGVjdGVkWWVhciAmJiBzLm1vbnRoID09PSB0aGlzLl9zZWxlY3RlZE1vbnRoXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTbmFwc2hvdCBFeGlzdHMnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQSBzbmFwc2hvdCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBtb250aC4gRG8geW91IHdhbnQgdG8gdXBkYXRlIGl0PycsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ1VwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5uZXRBc3NldCA9IHRoaXMuX25ldEFzc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlLnVwZGF0ZVNuYXBzaG90KGV4aXN0aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IE1vbnRobHlTbmFwc2hvdCh7XG4gICAgICAgICAgICAgICAgeWVhcjogdGhpcy5fc2VsZWN0ZWRZZWFyLFxuICAgICAgICAgICAgICAgIG1vbnRoOiB0aGlzLl9zZWxlY3RlZE1vbnRoLFxuICAgICAgICAgICAgICAgIG5ldEFzc2V0OiB0aGlzLl9uZXRBc3NldFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZS5hZGRTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N1Y2Nlc3NmdWxseSBzYXZlZCBzbmFwc2hvdCcpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIHNhdmluZyBzbmFwc2hvdCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSkge1xuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IHRoaXMuX3NuYXBzaG90U2VydmljZS5nZXRTbmFwc2hvdHMoKVthcmdzLmluZGV4XTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogYCR7dGhpcy5fbW9udGhzW3NuYXBzaG90Lm1vbnRoXX0gJHtzbmFwc2hvdC55ZWFyfWAsXG4gICAgICAgICAgICBtZXNzYWdlOiBgTmV0IEFzc2V0OiAke2Zvcm1hdEN1cnJlbmN5KHNuYXBzaG90Lm5ldEFzc2V0KX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0U25hcHNob3Qoc25hcHNob3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdFNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyID0gc25hcHNob3QueWVhcjtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IHNuYXBzaG90Lm1vbnRoO1xuICAgICAgICB0aGlzLl9uZXRBc3NldCA9IHNuYXBzaG90Lm5ldEFzc2V0O1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZFllYXInLCB0aGlzLl9zZWxlY3RlZFllYXIpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZE1vbnRoJywgdGhpcy5fc2VsZWN0ZWRNb250aCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25ldEFzc2V0JywgdGhpcy5fbmV0QXNzZXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlU25hcHNob3Qoc25hcHNob3Q6IE1vbnRobHlTbmFwc2hvdCkge1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzbmFwc2hvdD8nLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZGVsZXRlU25hcHNob3Qoc25hcHNob3QuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NuYXBzaG90cycsIHRoaXMuc25hcHNob3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMuX25ldEFzc2V0ID0gMDtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRZZWFyJywgdGhpcy5fc2VsZWN0ZWRZZWFyKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRNb250aCcsIHRoaXMuX3NlbGVjdGVkTW9udGgpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduZXRBc3NldCcsIHRoaXMuX25ldEFzc2V0KTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc25hcHNob3RzJywgdGhpcy5zbmFwc2hvdHMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IE1vbnRobHlTbmFwc2hvdCB9IGZyb20gJy4uLy4uL21vZGVscy9tb250aGx5LXNuYXBzaG90JztcbmltcG9ydCB7IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRCdXNTZXJ2aWNlLCBFdmVudE5hbWVzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQtYnVzLXNlcnZpY2UnO1xuaW1wb3J0IHsgc2hvd0RpYWxvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RpYWxvZyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQWRkU25hcHNob3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkU25hcHNob3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9uZXRBc3NldDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZFllYXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zZWxlY3RlZE1vbnRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfeWVhcnM6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBfbW9udGhzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgXTtcbiAgICBwcml2YXRlIF9zbmFwc2hvdFNlcnZpY2U6IE1vbnRobHlTbmFwc2hvdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXZlbnRCdXM6IEV2ZW50QnVzU2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ1NuYXBzaG90PzogTW9udGhseVNuYXBzaG90O1xuXG4gICAgY29uc3RydWN0b3IoZXhpc3RpbmdTbmFwc2hvdD86IE1vbnRobHlTbmFwc2hvdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UgPSBNb250aGx5U25hcHNob3RTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V2ZW50QnVzID0gRXZlbnRCdXNTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nU25hcHNob3QgPSBleGlzdGluZ1NuYXBzaG90O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVllYXJzKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXhpc3RpbmdTbmFwc2hvdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nU25hcHNob3QoZXhpc3RpbmdTbmFwc2hvdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbmV0QXNzZXQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX25ldEFzc2V0OyB9XG4gICAgc2V0IG5ldEFzc2V0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIHRoaXMuX25ldEFzc2V0ICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25ldEFzc2V0ID0gbnVtZXJpY1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0QXNzZXQnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkWWVhcigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRZZWFyOyB9XG4gICAgc2V0IHNlbGVjdGVkWWVhcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFllYXIgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZFllYXIgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkWWVhcicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZE1vbnRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZE1vbnRoOyB9XG4gICAgc2V0IHNlbGVjdGVkTW9udGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRNb250aCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkTW9udGgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgeWVhcnMoKTogbnVtYmVyW10geyByZXR1cm4gdGhpcy5feWVhcnM7IH1cbiAgICBnZXQgbW9udGhzKCk6IHN0cmluZ1tdIHsgcmV0dXJuIHRoaXMuX21vbnRoczsgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplWWVhcnMoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLl95ZWFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGkpID0+IGN1cnJlbnRZZWFyIC0gMiArIGkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ1NuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpIHtcbiAgICAgICAgdGhpcy5fbmV0QXNzZXQgPSBzbmFwc2hvdC5uZXRBc3NldDtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyID0gc25hcHNob3QueWVhcjtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IHNuYXBzaG90Lm1vbnRoO1xuICAgIH1cblxuICAgIGFzeW5jIG9uU2F2ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdBdHRlbXB0aW5nIHRvIHNhdmUgc25hcHNob3QnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMuX25ldEFzc2V0KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIGEgdmFsaWQgbnVtYmVyIGZvciBuZXQgYXNzZXQgdmFsdWUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZ2V0U25hcHNob3RzKCkuZmluZChcbiAgICAgICAgICAgICAgICBzID0+IHMueWVhciA9PT0gdGhpcy5fc2VsZWN0ZWRZZWFyICYmIFxuICAgICAgICAgICAgICAgICAgICAgcy5tb250aCA9PT0gdGhpcy5fc2VsZWN0ZWRNb250aCAmJlxuICAgICAgICAgICAgICAgICAgICAgKCF0aGlzLl9leGlzdGluZ1NuYXBzaG90IHx8IHMuaWQgIT09IHRoaXMuX2V4aXN0aW5nU25hcHNob3QuaWQpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTbmFwc2hvdCBFeGlzdHMnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQSBzbmFwc2hvdCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBtb250aC4gRG8geW91IHdhbnQgdG8gdXBkYXRlIGl0PycsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ1VwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBNb250aGx5U25hcHNob3Qoe1xuICAgICAgICAgICAgICAgIC4uLih0aGlzLl9leGlzdGluZ1NuYXBzaG90ICYmIHsgaWQ6IHRoaXMuX2V4aXN0aW5nU25hcHNob3QuaWQgfSksXG4gICAgICAgICAgICAgICAgeWVhcjogdGhpcy5fc2VsZWN0ZWRZZWFyLFxuICAgICAgICAgICAgICAgIG1vbnRoOiB0aGlzLl9zZWxlY3RlZE1vbnRoLFxuICAgICAgICAgICAgICAgIG5ldEFzc2V0OiB0aGlzLl9uZXRBc3NldFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGlzdGluZ1NuYXBzaG90KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlLnVwZGF0ZVNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgc25hcHNob3QgZm9yICR7dGhpcy5fbW9udGhzW3RoaXMuX3NlbGVjdGVkTW9udGhdfSAke3RoaXMuX3NlbGVjdGVkWWVhcn1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlLmFkZFNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IGFkZGVkIHNuYXBzaG90IGZvciAke3RoaXMuX21vbnRoc1t0aGlzLl9zZWxlY3RlZE1vbnRoXX0gJHt0aGlzLl9zZWxlY3RlZFllYXJ9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2V2ZW50QnVzLmVtaXQoRXZlbnROYW1lcy5TTkFQU0hPVF9VUERBVEVEKTtcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIHNuYXBzaG90JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgYXdhaXQgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdFcnJvcicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNhdmUgc25hcHNob3QnLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09LJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9udGhseS1zbmFwc2hvdCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50QnVzU2VydmljZSwgRXZlbnROYW1lcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LWJ1cy1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RpYWxvZyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTW9udGhseVNuYXBzaG90Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIE1vbnRobHlTbmFwc2hvdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX3NuYXBzaG90U2VydmljZTogTW9udGhseVNuYXBzaG90U2VydmljZTtcbiAgICBwcml2YXRlIF9ldmVudEJ1czogRXZlbnRCdXNTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3NuYXBzaG90czogTW9udGhseVNuYXBzaG90W10gPSBbXTtcbiAgICBwcml2YXRlIF9tb250aHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG4gICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZSA9IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fZXZlbnRCdXMgPSBFdmVudEJ1c1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExpc3RlbiBmb3Igc25hcHNob3QgdXBkYXRlc1xuICAgICAgICB0aGlzLl9ldmVudEJ1cy5vbihFdmVudE5hbWVzLlNOQVBTSE9UX1VQREFURUQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFNuYXBzaG90cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubG9hZFNuYXBzaG90cygpO1xuICAgIH1cblxuICAgIGdldCBzbmFwc2hvdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbmFwc2hvdHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEueWVhciAhPT0gYi55ZWFyKSByZXR1cm4gYi55ZWFyIC0gYS55ZWFyO1xuICAgICAgICAgICAgICAgIHJldHVybiBiLm1vbnRoIC0gYS5tb250aDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKHNuYXBzaG90ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uc25hcHNob3QsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogYCR7dGhpcy5fbW9udGhzW3NuYXBzaG90Lm1vbnRoXX0gJHtzbmFwc2hvdC55ZWFyfWAsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTmV0QXNzZXQ6IGZvcm1hdEN1cnJlbmN5KHNuYXBzaG90Lm5ldEFzc2V0KSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRQZXJjZW50YWdlQ2hhbmdlOiBzbmFwc2hvdC5wZXJjZW50YWdlQ2hhbmdlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRQZXJjZW50YWdlKHNuYXBzaG90LnBlcmNlbnRhZ2VDaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIDogJ04vQSdcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnUmVmcmVzaGluZyBzbmFwc2hvdHMnKTtcbiAgICAgICAgdGhpcy5sb2FkU25hcHNob3RzKCk7XG4gICAgfVxuXG4gICAgb25BZGRTbmFwc2hvdCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQWRkIFNuYXBzaG90IHBhZ2UnKTtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UnKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogeyBpbmRleDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc25hcHNob3QgPSB0aGlzLl9zbmFwc2hvdHNbYXJncy5pbmRleF07XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6IGAke3RoaXMuX21vbnRoc1tzbmFwc2hvdC5tb250aF19ICR7c25hcHNob3QueWVhcn1gLFxuICAgICAgICAgICAgbWVzc2FnZTogYE5ldCBBc3NldDogJHtmb3JtYXRDdXJyZW5jeShzbmFwc2hvdC5uZXRBc3NldCl9YCxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAnZWRpdCcsIHRleHQ6ICdFZGl0JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdkZWxldGUnLCB0ZXh0OiAnRGVsZXRlJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdFNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU25hcHNob3Qoc25hcHNob3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblVubG9hZGVkKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnQ2xlYW5pbmcgdXAgZXZlbnQgbGlzdGVuZXJzJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50QnVzLm9mZihFdmVudE5hbWVzLlNOQVBTSE9UX1VQREFURUQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNuYXBzaG90cygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX3NuYXBzaG90cyA9IHRoaXMuX3NuYXBzaG90U2VydmljZS5nZXRTbmFwc2hvdHMoKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NuYXBzaG90cycsIHRoaXMuc25hcHNob3RzKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBMb2FkZWQgJHt0aGlzLl9zbmFwc2hvdHMubGVuZ3RofSBzbmFwc2hvdHNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBsb2FkaW5nIHNuYXBzaG90cycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdFNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYEVkaXRpbmcgc25hcHNob3Q6ICR7c25hcHNob3QuaWR9YCk7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC1wYWdlJywgeyBzbmFwc2hvdCB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZVNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYERlbGV0aW5nIHNuYXBzaG90OiAke3NuYXBzaG90LmlkfWApO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzbmFwc2hvdD8nLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZGVsZXRlU25hcHNob3Qoc25hcHNob3QuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNuYXBzaG90cygpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTbmFwc2hvdCBkZWxldGVkOiAke3NuYXBzaG90LmlkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVwb3J0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3ksIGZvcm1hdFBlcmNlbnRhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXR0ZXJzJztcblxuZXhwb3J0IGNsYXNzIEZpbmFuY2lhbEhlYWx0aFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX3JlcG9ydFNlcnZpY2U6IFJlcG9ydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfcmVwb3J0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVwb3J0U2VydmljZSA9IFJlcG9ydFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5sb2FkUmVwb3J0KCk7XG4gICAgfVxuXG4gICAgZ2V0IG5ldFdvcnRoRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9yZXBvcnQubmV0V29ydGgpO1xuICAgIH1cblxuICAgIGdldCBtb250aGx5Q2FzaGZsb3dGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX3JlcG9ydC5tb250aGx5Q2FzaGZsb3cpO1xuICAgIH1cblxuICAgIGdldCBkZWJ0VG9JbmNvbWVSYXRpb0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0UGVyY2VudGFnZSh0aGlzLl9yZXBvcnQuZGVidFRvSW5jb21lUmF0aW8gKiAxMDApO1xuICAgIH1cblxuICAgIGdldCBtb250aGx5UmVwb3J0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcG9ydC5tb250aGx5UmVwb3J0cy5tYXAocmVwb3J0ID0+ICh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBtb250aFllYXI6IGAke25ldyBEYXRlKHJlcG9ydC55ZWFyLCByZXBvcnQubW9udGgpLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH0pfWAsXG4gICAgICAgICAgICBpbmNvbWVGb3JtYXR0ZWQ6IGZvcm1hdEN1cnJlbmN5KHJlcG9ydC5pbmNvbWUpLFxuICAgICAgICAgICAgZXhwZW5zZXNGb3JtYXR0ZWQ6IGZvcm1hdEN1cnJlbmN5KHJlcG9ydC5leHBlbnNlcyksXG4gICAgICAgICAgICBzYXZpbmdzUmF0ZUZvcm1hdHRlZDogZm9ybWF0UGVyY2VudGFnZShyZXBvcnQuc2F2aW5nc1JhdGUpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRSZXBvcnQoKSB7XG4gICAgICAgIHRoaXMuX3JlcG9ydCA9IHRoaXMuX3JlcG9ydFNlcnZpY2UuZ2VuZXJhdGVGaW5hbmNpYWxIZWFsdGhSZXBvcnQoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbW9udGhseVJlcG9ydHMnLCB0aGlzLm1vbnRobHlSZXBvcnRzKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiwgVHJhbnNhY3Rpb25UeXBlLCBUcmFuc2FjdGlvbkNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZFRyYW5zYWN0aW9uVmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEFkZFRyYW5zYWN0aW9uVmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgX2Ftb3VudDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZENhdGVnb3J5SW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdGltZVJlcXVpcmVkOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX2NhdGVnb3JpZXM6IFRyYW5zYWN0aW9uQ2F0ZWdvcnlbXSA9IFtdO1xuICAgIHByaXZhdGUgX2lzSW5jb21lOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3RyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgX2V4aXN0aW5nVHJhbnNhY3Rpb24/OiBUcmFuc2FjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGlzSW5jb21lOiBib29sZWFuLCBleGlzdGluZ1RyYW5zYWN0aW9uPzogVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNJbmNvbWUgPSBpc0luY29tZTtcbiAgICAgICAgdGhpcy5fZXhpc3RpbmdUcmFuc2FjdGlvbiA9IGV4aXN0aW5nVHJhbnNhY3Rpb247XG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzID0gdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ1RyYW5zYWN0aW9uKGV4aXN0aW5nVHJhbnNhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplV2l0aEV4aXN0aW5nVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdHJhbnNhY3Rpb24uZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2Ftb3VudCA9IE51bWJlcih0cmFuc2FjdGlvbi5hbW91bnQpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggPSB0aGlzLl9jYXRlZ29yaWVzLmluZGV4T2YodHJhbnNhY3Rpb24uY2F0ZWdvcnkpO1xuICAgICAgICBpZiAodHJhbnNhY3Rpb24udHlwZSA9PT0gJ2luY29tZScpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVSZXF1aXJlZCA9IHRyYW5zYWN0aW9uLnRpbWVSZXF1aXJlZCB8fCAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjsgfVxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXNjcmlwdGlvbiAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkZXNjcmlwdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBhbW91bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2Ftb3VudDsgfVxuICAgIHNldCBhbW91bnQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5fYW1vdW50ICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Ftb3VudCA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Ftb3VudCcsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdGltZVJlcXVpcmVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl90aW1lUmVxdWlyZWQ7IH1cbiAgICBzZXQgdGltZVJlcXVpcmVkKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIG51bWVyaWNWYWx1ZSA+IDAgJiYgdGhpcy5fdGltZVJlcXVpcmVkICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVSZXF1aXJlZCA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RpbWVSZXF1aXJlZCcsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY2F0ZWdvcmllcygpOiBUcmFuc2FjdGlvbkNhdGVnb3J5W10geyByZXR1cm4gdGhpcy5fY2F0ZWdvcmllczsgfVxuICAgIGdldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDsgfVxuICAgIHNldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZENhdGVnb3J5SW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaXNJbmNvbWUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc0luY29tZTsgfVxuXG4gICAgcHJpdmF0ZSBnZXRDYXRlZ29yaWVzKCk6IFRyYW5zYWN0aW9uQ2F0ZWdvcnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0luY29tZSBcbiAgICAgICAgICAgID8gWydTYWxhcnknLCAnQnVzaW5lc3MnLCAnUmVudCcsICdJbnRlcmVzdCcsICdSb3lhbHRpZXMnXVxuICAgICAgICAgICAgOiBbJ0NvbnN1bWVyIGJhc2tldCcsICdIYWJpdHMnLCAnQ2FyJywgJ1JvdXRpbmUnLCAnSG91c2luZycsICdDcmVkaXQgQ2FyZC9Mb2FuJ107XG4gICAgfVxuXG4gICAgb25TYXZlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgICAgIC4uLih0aGlzLl9leGlzdGluZ1RyYW5zYWN0aW9uICYmIHsgaWQ6IHRoaXMuX2V4aXN0aW5nVHJhbnNhY3Rpb24uaWQgfSksXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5faXNJbmNvbWUgPyAnaW5jb21lJyA6ICdleHBlbnNlJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5fY2F0ZWdvcmllc1t0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXhdLFxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5fYW1vdW50LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLl9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB0aW1lUmVxdWlyZWQ6IHRoaXMuX2lzSW5jb21lID8gdGhpcy5fdGltZVJlcXVpcmVkIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2V4aXN0aW5nVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UudXBkYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgdXBkYXRlZCAke3RoaXMuX2lzSW5jb21lID8gJ2luY29tZScgOiAnZXhwZW5zZSd9IHRyYW5zYWN0aW9uYCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5hZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSBhZGRlZCAke3RoaXMuX2lzSW5jb21lID8gJ2luY29tZScgOiAnZXhwZW5zZSd9IHRyYW5zYWN0aW9uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIHRyYW5zYWN0aW9uJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24sIFRyYW5zYWN0aW9uQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgRG9udXRDaGFydERhdGEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydCc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbkRpc3RyaWJ1dGlvblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2NoYXJ0RGF0YTogRG9udXRDaGFydERhdGFbXSA9IFtdO1xuXG4gICAgZ2V0IGNoYXJ0RGF0YSgpOiBEb251dENoYXJ0RGF0YVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJ0RGF0YTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSwgdHlwZTogJ2luY29tZScgfCAnZXhwZW5zZScpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRUcmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSB0eXBlKTtcbiAgICAgICAgY29uc3QgdG90YWwgPSBmaWx0ZXJlZFRyYW5zYWN0aW9ucy5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuICAgICAgICBcbiAgICAgICAgLy8gR3JvdXAgdHJhbnNhY3Rpb25zIGJ5IGNhdGVnb3J5XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TWFwID0gbmV3IE1hcDxUcmFuc2FjdGlvbkNhdGVnb3J5LCBudW1iZXI+KCk7XG4gICAgICAgIGZpbHRlcmVkVHJhbnNhY3Rpb25zLmZvckVhY2godHJhbnNhY3Rpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGNhdGVnb3J5TWFwLmdldCh0cmFuc2FjdGlvbi5jYXRlZ29yeSkgfHwgMDtcbiAgICAgICAgICAgIGNhdGVnb3J5TWFwLnNldCh0cmFuc2FjdGlvbi5jYXRlZ29yeSwgY3VycmVudCArIHRyYW5zYWN0aW9uLmFtb3VudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gY2hhcnQgZGF0YVxuICAgICAgICB0aGlzLl9jaGFydERhdGEgPSBBcnJheS5mcm9tKGNhdGVnb3J5TWFwLmVudHJpZXMoKSlcbiAgICAgICAgICAgIC5tYXAoKFtjYXRlZ29yeSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogQ2hhcnRDb2xvcnNbY2F0ZWdvcnldIHx8ICcjQ0JENUUwJywgLy8gRGVmYXVsdCBjb2xvciBpZiBub3QgZm91bmRcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKCh2YWx1ZSAvIHRvdGFsKSAqIDEwMCkgOiAwXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2hhcnREYXRhJywgdGhpcy5fY2hhcnREYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZywgQ29uZmlybURpYWxvZ09wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9kaWFsb2cnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uRGlzdHJpYnV0aW9uVmlld01vZGVsIH0gZnJvbSAnLi90cmFuc2FjdGlvbi1kaXN0cmlidXRpb24tdmlldy1tb2RlbCc7XG5cbmNvbnN0IFRBRyA9ICdUcmFuc2FjdGlvbkxpc3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdID0gW107XG4gICAgcHJpdmF0ZSBfZmlsdGVyVHlwZTogJ2luY29tZScgfCAnZXhwZW5zZScgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfdHJhbnNhY3Rpb25TZXJ2aWNlOiBUcmFuc2FjdGlvblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZGlzdHJpYnV0aW9uVmlld01vZGVsOiBUcmFuc2FjdGlvbkRpc3RyaWJ1dGlvblZpZXdNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKGZpbHRlclR5cGU/OiAnaW5jb21lJyB8ICdleHBlbnNlJykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9maWx0ZXJUeXBlID0gZmlsdGVyVHlwZTtcbiAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlID0gVHJhbnNhY3Rpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbCA9IG5ldyBUcmFuc2FjdGlvbkRpc3RyaWJ1dGlvblZpZXdNb2RlbCgpO1xuICAgICAgICB0aGlzLmxvYWRUcmFuc2FjdGlvbnMoKTtcbiAgICB9XG5cbiAgICBnZXQgZmlsdGVyVHlwZSgpOiAnaW5jb21lJyB8ICdleHBlbnNlJyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJUeXBlO1xuICAgIH1cblxuICAgIGdldCBkaXN0cmlidXRpb25WaWV3TW9kZWwoKTogVHJhbnNhY3Rpb25EaXN0cmlidXRpb25WaWV3TW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsO1xuICAgIH1cblxuICAgIGdldCB0b3RhbEFtb3VudEZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMuX2ZpbHRlclR5cGUgPT09ICdpbmNvbWUnIFxuICAgICAgICAgICAgPyB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UuZ2V0VG90YWxJbmNvbWUoKVxuICAgICAgICAgICAgOiB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UuZ2V0VG90YWxFeHBlbnNlcygpO1xuICAgICAgICByZXR1cm4gYFRvdGFsICR7dGhpcy5fZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnSW5jb21lJyA6ICdFeHBlbnNlcyd9OiAke2Zvcm1hdEN1cnJlbmN5KHRvdGFsKX1gO1xuICAgIH1cblxuICAgIGdldCB0cmFuc2FjdGlvbnMoKSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZFRyYW5zYWN0aW9ucyA9IFsuLi50aGlzLl90cmFuc2FjdGlvbnNdO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlclR5cGUpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkVHJhbnNhY3Rpb25zID0gZmlsdGVyZWRUcmFuc2FjdGlvbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSB0aGlzLl9maWx0ZXJUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFRyYW5zYWN0aW9ucy5tYXAodHJhbnNhY3Rpb24gPT4gKHtcbiAgICAgICAgICAgIC4uLnRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgZm9ybWF0dGVkQW1vdW50OiBmb3JtYXRDdXJyZW5jeSh0cmFuc2FjdGlvbi5hbW91bnQpLFxuICAgICAgICAgICAgaG91cmx5UmF0ZUZvcm1hdHRlZDogdHJhbnNhY3Rpb24udHlwZSA9PT0gJ2luY29tZScgJiYgdHJhbnNhY3Rpb24udGltZVJlcXVpcmVkIFxuICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koTWF0aC5yb3VuZCgodHJhbnNhY3Rpb24uYW1vdW50IC8gdHJhbnNhY3Rpb24udGltZVJlcXVpcmVkKSAqIDEwMCkgLyAxMDApXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1JlZnJlc2hpbmcgdHJhbnNhY3Rpb25zIGxpc3QnKTtcbiAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgb25BZGRUcmFuc2FjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZScsIHsgXG4gICAgICAgICAgICBpc0luY29tZTogdGhpcy5fZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuX3RyYW5zYWN0aW9ucy5maWx0ZXIodCA9PiB0LnR5cGUgPT09IHRoaXMuX2ZpbHRlclR5cGUpW2FyZ3MuaW5kZXhdO1xuICAgICAgICBjb25zdCBob3VybHlSYXRlID0gdHJhbnNhY3Rpb24udHlwZSA9PT0gJ2luY29tZScgJiYgdHJhbnNhY3Rpb24udGltZVJlcXVpcmVkXG4gICAgICAgICAgICA/IGBcXG5Ib3VybHkgUmF0ZTogJHtmb3JtYXRDdXJyZW5jeSh0cmFuc2FjdGlvbi5hbW91bnQgLyB0cmFuc2FjdGlvbi50aW1lUmVxdWlyZWQpfS9ocmBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogdHJhbnNhY3Rpb24uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBtZXNzYWdlOiBgQW1vdW50OiAke2Zvcm1hdEN1cnJlbmN5KHRyYW5zYWN0aW9uLmFtb3VudCl9JHtob3VybHlSYXRlfWAsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgeyBpZDogJ2VkaXQnLCB0ZXh0OiAnRWRpdCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnZGVsZXRlJywgdGV4dDogJ0RlbGV0ZScgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkVHJhbnNhY3Rpb25zKCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25zID0gdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRyYW5zYWN0aW9ucygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbHRlclR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWwudXBkYXRlRGF0YSh0aGlzLl90cmFuc2FjdGlvbnMsIHRoaXMuX2ZpbHRlclR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndHJhbnNhY3Rpb25zJywgdGhpcy50cmFuc2FjdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxBbW91bnRGb3JtYXR0ZWQnLCB0aGlzLnRvdGFsQW1vdW50Rm9ybWF0dGVkKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBMb2FkZWQgJHt0aGlzLl90cmFuc2FjdGlvbnMubGVuZ3RofSB0cmFuc2FjdGlvbnNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBsb2FkaW5nIHRyYW5zYWN0aW9ucycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbik6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgRWRpdGluZyB0cmFuc2FjdGlvbjogJHt0cmFuc2FjdGlvbi5pZH1gKTtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZScsIHsgXG4gICAgICAgICAgICBpc0luY29tZTogdHJhbnNhY3Rpb24udHlwZSA9PT0gJ2luY29tZScsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbiBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlhbG9nT3B0aW9uczogQ29uZmlybURpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdHJhbnNhY3Rpb24/JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHNob3dEaWFsb2coZGlhbG9nT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5kZWxldGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZEFzc2V0Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsJztcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBZGRBc3NldFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgZXhpc3RpbmdBc3NldCA9IGFyZ3MuY29udGV4dD8uYXNzZXQgYXMgQXNzZXQgfCB1bmRlZmluZWQ7XG4gICAgXG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgZXhpc3RpbmdBc3NldCA/ICdFZGl0aW5nIGV4aXN0aW5nIGFzc2V0JyA6ICdBZGRpbmcgbmV3IGFzc2V0Jyk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBZGRBc3NldFZpZXdNb2RlbChleGlzdGluZ0Fzc2V0KTtcbiAgICBcbiAgICAvLyBVcGRhdGUgdGhlIEFjdGlvbkJhciB0aXRsZSBiYXNlZCBvbiB3aGV0aGVyIHdlJ3JlIGVkaXRpbmcgb3IgYWRkaW5nXG4gICAgY29uc3QgYWN0aW9uQmFyVGl0bGUgPSBleGlzdGluZ0Fzc2V0ID8gJ0VkaXQgQXNzZXQnIDogJ0FkZCBBc3NldCc7XG4gICAgcGFnZS5hY3Rpb25CYXIudGl0bGUgPSBhY3Rpb25CYXJUaXRsZTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFzc2V0TGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0Fzc2V0TGlzdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBBc3NldCBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQXNzZXRMaXN0Vmlld01vZGVsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0ZWQgdG8gQXNzZXQgTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgQXNzZXRMaXN0Vmlld01vZGVsO1xuICAgIHZpZXdNb2RlbD8ucmVmcmVzaCgpO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQWRkTGlhYmlsaXR5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsJztcbmltcG9ydCB7IExpYWJpbGl0eSB9IGZyb20gJy4uLy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZExpYWJpbGl0eVBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgZXhpc3RpbmdMaWFiaWxpdHkgPSBhcmdzLmNvbnRleHQ/LmxpYWJpbGl0eSBhcyBMaWFiaWxpdHkgfCB1bmRlZmluZWQ7XG4gICAgXG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgZXhpc3RpbmdMaWFiaWxpdHkgPyAnRWRpdGluZyBleGlzdGluZyBsaWFiaWxpdHknIDogJ0FkZGluZyBuZXcgbGlhYmlsaXR5Jyk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBZGRMaWFiaWxpdHlWaWV3TW9kZWwoZXhpc3RpbmdMaWFiaWxpdHkpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSB0aGUgQWN0aW9uQmFyIHRpdGxlIGJhc2VkIG9uIHdoZXRoZXIgd2UncmUgZWRpdGluZyBvciBhZGRpbmdcbiAgICBjb25zdCBhY3Rpb25CYXJUaXRsZSA9IGV4aXN0aW5nTGlhYmlsaXR5ID8gJ0VkaXQgTGlhYmlsaXR5JyA6ICdBZGQgTGlhYmlsaXR5JztcbiAgICBwYWdlLmFjdGlvbkJhci50aXRsZSA9IGFjdGlvbkJhclRpdGxlO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTGlhYmlsaXR5TGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0xpYWJpbGl0eUxpc3RQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gTGlhYmlsaXR5IExpc3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBMaWFiaWxpdHlMaXN0Vmlld01vZGVsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0ZWQgdG8gTGlhYmlsaXR5IExpc3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBwYWdlLmJpbmRpbmdDb250ZXh0IGFzIExpYWJpbGl0eUxpc3RWaWV3TW9kZWw7XG4gICAgdmlld01vZGVsPy5yZWZyZXNoKCk7XG59IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IERhc2hib2FyZFZpZXdNb2RlbCB9IGZyb20gJy4uL3ZpZXctbW9kZWxzL2Rhc2hib2FyZC12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdNYWluUGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gbWFpbiBwYWdlJyk7XG4gICAgICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBEYXNoYm9hcmRWaWV3TW9kZWwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgaW4gbmF2aWdhdGluZ1RvJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZFNuYXBzaG90Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3Qtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9udGhseS1zbmFwc2hvdCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQWRkU25hcHNob3RQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQWRkIFNuYXBzaG90IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgZXhpc3RpbmdTbmFwc2hvdCA9IGFyZ3MuY29udGV4dD8uc25hcHNob3QgYXMgTW9udGhseVNuYXBzaG90IHwgdW5kZWZpbmVkO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkU25hcHNob3RWaWV3TW9kZWwoZXhpc3RpbmdTbmFwc2hvdCk7XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3RWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3Qtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTW9udGhseVNuYXBzaG90UGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIE1vbnRobHkgU25hcHNob3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBNb250aGx5U25hcHNob3RWaWV3TW9kZWwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZWRUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRlZCB0byBNb250aGx5IFNuYXBzaG90IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdmlld01vZGVsID0gcGFnZS5iaW5kaW5nQ29udGV4dCBhcyBNb250aGx5U25hcHNob3RWaWV3TW9kZWw7XG4gICAgdmlld01vZGVsPy5yZWZyZXNoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmxvYWRlZChhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ01vbnRobHkgU25hcHNob3QgcGFnZSB1bmxvYWRlZCcpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBwYWdlLmJpbmRpbmdDb250ZXh0IGFzIE1vbnRobHlTbmFwc2hvdFZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWw/Lm9uVW5sb2FkZWQoKTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZFRyYW5zYWN0aW9uVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5cbmNvbnN0IFRBRyA9ICdBZGRUcmFuc2FjdGlvblBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBBZGQgVHJhbnNhY3Rpb24gcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBpc0luY29tZSA9IGFyZ3MuY29udGV4dD8uaXNJbmNvbWUgPz8gZmFsc2U7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhcmdzLmNvbnRleHQ/LnRyYW5zYWN0aW9uIGFzIFRyYW5zYWN0aW9uIHwgdW5kZWZpbmVkO1xuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkVHJhbnNhY3Rpb25WaWV3TW9kZWwoaXNJbmNvbWUsIHRyYW5zYWN0aW9uKTtcbiAgICBcbiAgICAvLyBTZXQgdGhlIEFjdGlvbkJhciB0aXRsZSBiYXNlZCBvbiB3aGV0aGVyIHdlJ3JlIGVkaXRpbmcgb3IgYWRkaW5nXG4gICAgY29uc3QgYWN0aW9uID0gdHJhbnNhY3Rpb24gPyAnRWRpdCcgOiAnQWRkJztcbiAgICBjb25zdCB0eXBlID0gaXNJbmNvbWUgPyAnSW5jb21lJyA6ICdFeHBlbnNlJztcbiAgICBwYWdlLmFjdGlvbkJhci50aXRsZSA9IGAke2FjdGlvbn0gJHt0eXBlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nRnJvbShhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgZnJvbSBBZGQgVHJhbnNhY3Rpb24gcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbnVsbDtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ1RyYW5zYWN0aW9uTGlzdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBUcmFuc2FjdGlvbiBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsKGFyZ3MuY29udGV4dD8uZmlsdGVyVHlwZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0ZWQgdG8gVHJhbnNhY3Rpb24gTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsO1xuICAgIHZpZXdNb2RlbD8ucmVmcmVzaCgpO1xufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPEZyYW1lIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIGxvYWRlZD1cXFwib25Mb2FkZWRcXFwiPlxcbjwvRnJhbWU+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwibS00XFxcIiBcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJnLWdyYXktMTAwIHAtNCByb3VuZGVkLWxnXFxcIj5cXG4gICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgY2hhcnREYXRhIH19XFxcIiBoZWlnaHQ9XFxcIjIwMFxcXCI+XFxuICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJ7eyBsYWJlbCB9fVxcXCIgY2xhc3M9XFxcInRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgcGVyY2VudGFnZSArICclJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT1cXFwie3sgcGVyY2VudGFnZSB9fVxcXCIgbWF4VmFsdWU9XFxcIjEwMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibS0xXFxcIiBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9HcmlkTGF5b3V0PlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuPC9TdGFja0xheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJwLTQgYm9yZGVyLWIgYmctd2hpdGVcXFwiPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgdGl0bGUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtZ3JheS04MDBcXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBhbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwie3sgYW1vdW50Q2xhc3MgfX1cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzdWJ0aXRsZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZXRhaWxzIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbjwvR3JpZExheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInctZnVsbFxcXCI+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXFxcIiB3aWR0aD1cXFwiMzJcXFwiIGhlaWdodD1cXFwiMzJcXFwiIGNsYXNzPVxcXCJtLTJcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2V0ZSBQRk1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkIG1sLTJcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gS2V5IE1ldHJpY3MgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgY2xhc3M9XFxcIm14LTQgbXQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTQgbS0xXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgQ2FzaGZsb3dcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjYXNoZmxvd0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInt7IGNhc2hmbG93ID49IDAgPyAndGV4dC1ncmVlbi02MDAgdGV4dC0yeGwgZm9udC1ib2xkJyA6ICd0ZXh0LXJlZC02MDAgdGV4dC0yeGwgZm9udC1ib2xkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNCBtLTFcXFwiIGNvbD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSG91cmx5IFJhdGVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBob3VybHlSYXRlRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIFF1aWNrIEFjdGlvbnMgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm14LTQgbWItNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSU5DT01FXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGVUb0luY29tZVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiRVhQRU5TRVxcXCIgdGFwPVxcXCJvbk5hdmlnYXRlVG9FeHBlbnNlXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFTU0VUU1xcXCIgdGFwPVxcXCJvbk5hdmlnYXRlVG9Bc3NldHNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTElBQklMSVRJRVNcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvTGlhYmlsaXRpZXNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG0tMSByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aGx5IFNuYXBzaG90IEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIk1PTlRITFkgU05BUFNIT1RcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvTW9udGhseVNuYXBzaG90XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgbWItNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcblxcbiAgICAgICAgICAgIDwhLS0gRmluYW5jaWFsIE1ldHJpY3MgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jaWFsIE1ldHJpY3NcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IFdvcnRoOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmV0V29ydGhGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGVidC10by1JbmNvbWU6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkdGlGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGlxdWlkaXR5IFJhdGlvOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbHJGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGVidC10by1Bc3NldDpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRhckZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNsYXNzPVxcXCJtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJXZWlnaHRlZCBJbnRlcmVzdCBSYXRlOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgd2VpZ2h0ZWRJbnRlcmVzdFJhdGVGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTaGFycGUgUmF0aW86XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzaGFycGVSYXRpb0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBZGQgQXNzZXRcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJiZy1ncmF5LTEwMFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gTmFtZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFzc2V0IE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIG5hbWVcXFwiIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBWYWx1ZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlZhbHVlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIHZhbHVlXFxcIiB0ZXh0PVxcXCJ7eyB2YWx1ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gQ2F0ZWdvcnkgU2VsZWN0aW9uIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2F0ZWdvcnlcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBjYXRlZ29yaWVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZENhdGVnb3J5SW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmUgQXNzZXRcXFwiIHRhcD1cXFwie3sgb25TYXZlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtdC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIlxcbiAgICBuYXZpZ2F0ZWRUbz1cXFwibmF2aWdhdGVkVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJiZy1ibHVlLTYwMFxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQXNzZXRzXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gVG90YWwgQXNzZXRzIENhcmQgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYmctYmx1ZS01MDAgbS00IHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgQXNzZXRzXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LXNtIG1iLTFcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRvdGFsQXNzZXRzRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tIEFzc2V0IERpc3RyaWJ1dGlvbiAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBc3NldCBEaXN0cmlidXRpb25cXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XFxcIiAvPlxcbiAgICAgICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgZGlzdHJpYnV0aW9uVmlld01vZGVsLmNoYXJ0RGF0YSB9fVxcXCI+XFxuICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLil49cXFwiIGNvbG9yPVxcXCJ7eyBjb2xvciB9fVxcXCIgY2xhc3M9XFxcIm1yLTJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcInt7IGxhYmVsIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTcwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgcGVyY2VudGFnZSArICclJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT1cXFwie3sgcGVyY2VudGFnZSB9fVxcXCIgbWF4VmFsdWU9XFxcIjEwMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibS0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gQWRkIEFzc2V0IEJ1dHRvbiAtLT5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJBZGQgQXNzZXRcXFwiIHRhcD1cXFwie3sgb25BZGRBc3NldCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBteC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gQXNzZXQgTGlzdCAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjNcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFzc2V0IExpc3RcXFwiIGNsYXNzPVxcXCJwLTQgdGV4dC14bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBhc3NldHMgfX1cXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCIgY2xhc3M9XFxcImxpc3Qtdmlld1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGQgdGV4dC1ncmF5LTgwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkVmFsdWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1ibHVlLTYwMCBmb250LWJvbGQgdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgY2F0ZWdvcnkgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGlzRWRpdGluZyA/ICdFZGl0IExpYWJpbGl0eScgOiAnQWRkIExpYWJpbGl0eScgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJiZy1ncmF5LTEwMFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gTmFtZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxpYWJpbGl0eSBOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBuYW1lXFxcIiB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gQW1vdW50IEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQW1vdW50XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIGFtb3VudFxcXCIgdGV4dD1cXFwie3sgYW1vdW50IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBJbnRlcmVzdCBSYXRlIEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSW50ZXJlc3QgUmF0ZSAoJSlcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgaW50ZXJlc3QgcmF0ZVxcXCIgdGV4dD1cXFwie3sgaW50ZXJlc3RSYXRlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBUeXBlIFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlR5cGVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyB0eXBlcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRUeXBlSW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcInt7IGlzRWRpdGluZyA/ICdVcGRhdGUgTGlhYmlsaXR5JyA6ICdTYXZlIExpYWJpbGl0eScgfX1cXFwiIHRhcD1cXFwie3sgb25TYXZlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiXFxuICAgIG5hdmlnYXRlZFRvPVxcXCJuYXZpZ2F0ZWRUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMaWFiaWxpdGllc1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgKlxcXCI+XFxuICAgICAgICA8IS0tIFRvdGFsIExpYWJpbGl0aWVzIENhcmQgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYmctcHVycGxlLTUwMCBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUb3RhbCBMaWFiaWxpdGllc1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tIERpc3RyaWJ1dGlvbiBDaGFydCAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMaWFiaWxpdHkgRGlzdHJpYnV0aW9uXFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItNFxcXCIgLz5cXG4gICAgICAgICAgICA8UmVwZWF0ZXIgaXRlbXM9XFxcInt7IGRpc3RyaWJ1dGlvblZpZXdNb2RlbC5jaGFydERhdGEgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8UmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJtYi0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwi4pePXFxcIiBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtci0yXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJ7eyBsYWJlbCB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS03MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcInt7IHBlcmNlbnRhZ2UgKyAnJScgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgdmFsdWU9XFxcInt7IHBlcmNlbnRhZ2UgfX1cXFwiIG1heFZhbHVlPVxcXCIxMDBcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyBjb2xvciB9fVxcXCIgY2xhc3M9XFxcIm0tMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvUmVwZWF0ZXI+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tIEFkZCBCdXR0b24gLS0+XFxuICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgdGV4dD1cXFwiQWRkIExpYWJpbGl0eVxcXCIgdGFwPVxcXCJ7eyBvbkFkZExpYWJpbGl0eSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgLz5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBMaWFiaWxpdGllcyBMaXN0IC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiM1xcXCIgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGlhYmlsaXR5IExpc3RcXFwiIGNsYXNzPVxcXCJwLTQgdGV4dC14bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBsaWFiaWxpdGllcyB9fVxcXCIgaXRlbVRhcD1cXFwie3sgb25JdGVtVGFwIH19XFxcIiBjbGFzcz1cXFwibGlzdC12aWV3XFxcIj5cXG4gICAgICAgICAgICAgICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJwLTQgYm9yZGVyLWJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRBbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1wdXJwbGUtNjAwIGZvbnQtYm9sZCB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0eXBlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkSW50ZXJlc3RSYXRlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNldGUgUEZNXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gS2V5IE1ldHJpY3MgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgY2xhc3M9XFxcIm14LTQgbXQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTQgbS0xXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgQ2FzaGZsb3dcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjYXNoZmxvd0Zvcm1hdHRlZCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IGNhc2hmbG93ID49IDAgPyAndGV4dC1ncmVlbi02MDAgdGV4dC0yeGwgZm9udC1ib2xkJyA6ICd0ZXh0LXJlZC02MDAgdGV4dC0yeGwgZm9udC1ib2xkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNCBtLTFcXFwiIGNvbD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSG91cmx5IFJhdGVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBob3VybHlSYXRlRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIFF1aWNrIEFjdGlvbnMgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm14LTQgbWItNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSU5DT01FXFxcIiB0YXA9XFxcInt7IG9uTmF2aWdhdGVUb0luY29tZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiRVhQRU5TRVxcXCIgdGFwPVxcXCJ7eyBvbk5hdmlnYXRlVG9FeHBlbnNlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFTU0VUU1xcXCIgdGFwPVxcXCJ7eyBvbk5hdmlnYXRlVG9Bc3NldHMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTElBQklMSVRJRVNcXFwiIHRhcD1cXFwie3sgb25OYXZpZ2F0ZVRvTGlhYmlsaXRpZXMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG0tMSByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aGx5IFNuYXBzaG90IEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIk1PTlRITFkgU05BUFNIT1RcXFwiIHRhcD1cXFwie3sgb25OYXZpZ2F0ZVRvTW9udGhseVNuYXBzaG90IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgbWItNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcblxcbiAgICAgICAgICAgIDwhLS0gRmluYW5jaWFsIE1ldHJpY3MgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jaWFsIE1ldHJpY3NcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IFdvcnRoOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmV0V29ydGhGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGVidC10by1JbmNvbWU6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkdGlGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGlxdWlkaXR5IFJhdGlvOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbHJGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGVidC10by1Bc3NldDpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRhckZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNsYXNzPVxcXCJtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJXZWlnaHRlZCBJbnRlcmVzdCBSYXRlOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgd2VpZ2h0ZWRJbnRlcmVzdFJhdGVGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTaGFycGUgUmF0aW86XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzaGFycGVSYXRpb0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpc0VkaXRpbmcgPyAnRWRpdCBTbmFwc2hvdCcgOiAnQWRkIFNuYXBzaG90JyB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy1ncmF5LTEwMFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiBtLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPCEtLSBZZWFyIFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiWWVhclxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IHllYXJzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHllYXJJbmRleCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG5cXG4gICAgICAgICAgICA8IS0tIE1vbnRoIFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTW9udGhcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IG1vbnRocyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZE1vbnRoIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcblxcbiAgICAgICAgICAgIDwhLS0gTmV0IEFzc2V0IFZhbHVlIC0tPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJOZXQgQXNzZXQgVmFsdWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBuZXQgYXNzZXQgdmFsdWVcXFwiIHRleHQ9XFxcInt7IG5ldEFzc2V0IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcInt7IGlzRWRpdGluZyA/ICdVcGRhdGUnIDogJ1NhdmUnIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgb25TYXZlIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIlxcbiAgICBuYXZpZ2F0ZWRUbz1cXFwibmF2aWdhdGVkVG9cXFwiXFxuICAgIHVubG9hZGVkPVxcXCJ1bmxvYWRlZFxcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJNb250aGx5IFNuYXBzaG90XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gQWRkIEJ1dHRvbiAtLT5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJBZGQgTmV3IFNuYXBzaG90XFxcIiB0YXA9XFxcInt7IG9uQWRkU25hcHNob3QgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuXFxuICAgICAgICA8IS0tIEhpc3RvcnkgU2VjdGlvbiAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNuYXBzaG90IEhpc3RvcnlcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBwLTRcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBzbmFwc2hvdHMgfX1cXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCIgY2xhc3M9XFxcImxpc3Qtdmlld1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkRGF0ZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZE5ldEFzc2V0IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNoYW5nZTpcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRQZXJjZW50YWdlQ2hhbmdlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IHRleHQtc21cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgcGVyY2VudGFnZUNoYW5nZSA+PSAwID8gJyMxMEI5ODEnIDogJyNFRjQ0NDQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiRmluYW5jaWFsIEhlYWx0aFxcXCIgLz5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gT3ZlcnZpZXcgU2VjdGlvbiAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLWJsdWUtMTAwIHAtNCByb3VuZGVkLWxnIG1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jaWFsIE92ZXJ2aWV3XFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IFdvcnRoOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5ldFdvcnRoRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodCBmb250LWJvbGRcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTW9udGhseSBDYXNoZmxvdzpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBtb250aGx5Q2FzaGZsb3dGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJEZWJ0LXRvLUluY29tZTpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZWJ0VG9JbmNvbWVSYXRpb0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aGx5IFJlcG9ydHMgLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgUmVwb3J0c1xcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTJcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBtb250aGx5UmVwb3J0cyB9fVxcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG1vbnRoWWVhciB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHNhdmluZ3NSYXRlRm9ybWF0dGVkIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdJbmNvbWU6ICcgKyBpbmNvbWVGb3JtYXR0ZWQgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnRXhwZW5zZXM6ICcgKyBleHBlbnNlc0Zvcm1hdHRlZCB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkQW1vdW50IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzdWJ0aXRsZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZXRhaWxzIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbjwvR3JpZExheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGluZ0Zyb209XFxcIm5hdmlnYXRpbmdGcm9tXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGlzSW5jb21lID8gJ0FkZCBJbmNvbWUnIDogJ0FkZCBFeHBlbnNlJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcImJnLWdyYXktMTAwXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBkZXNjcmlwdGlvblxcXCIgdGV4dD1cXFwie3sgZGVzY3JpcHRpb24gfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBBbW91bnQgRmllbGQgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBbW91bnRcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgYW1vdW50XFxcIiB0ZXh0PVxcXCJ7eyBhbW91bnQgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIENhdGVnb3J5IFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNhdGVnb3J5XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgY2F0ZWdvcmllcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRDYXRlZ29yeUluZGV4IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gVGltZSBSZXF1aXJlZCAoT25seSBmb3IgSW5jb21lKSAtLT5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHZpc2liaWxpdHk9XFxcInt7IGlzSW5jb21lID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRpbWUgUmVxdWlyZWQgKEhvdXJzKVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgaG91cnMgcmVxdWlyZWRcXFwiIHRleHQ9XFxcInt7IHRpbWVSZXF1aXJlZCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcInt7IGlzSW5jb21lID8gJ1NhdmUgSW5jb21lJyA6ICdTYXZlIEV4cGVuc2UnIH19XFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgaXNJbmNvbWUgPyAnYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgOiAnYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtdC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTInIH19XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGVkVG89XFxcIm5hdmlnYXRlZFRvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ0luY29tZScgOiAnRXhwZW5zZXMnIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gU3VtbWFyeSBDYXJkIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ2JnLWdyZWVuLTUwMCBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTQnIDogJ2JnLXJlZC01MDAgbS00IHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00JyB9fVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ1RvdGFsIEluY29tZScgOiAnVG90YWwgRXhwZW5zZXMnIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbEFtb3VudEZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBEaXN0cmlidXRpb24gQ2hhcnQgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHAtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnSW5jb21lIERpc3RyaWJ1dGlvbicgOiAnRXhwZW5zZSBEaXN0cmlidXRpb24nIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBkaXN0cmlidXRpb25WaWV3TW9kZWwuY2hhcnREYXRhIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwibWItMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgbGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNzAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJ7eyBwZXJjZW50YWdlICsgJyUnIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwZXJjZW50YWdlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtLTFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBBY3Rpb24gQnV0dG9uIC0tPlxcbiAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIHRleHQ9XFxcInt7ICdBZGQgJyArIChmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdJbmNvbWUnIDogJ0V4cGVuc2UnKSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgb25BZGRUcmFuc2FjdGlvbiB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXgtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yJyA6ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgfX1cXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gVHJhbnNhY3Rpb25zIExpc3QgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUcmFuc2FjdGlvbiBIaXN0b3J5XFxcIiBjbGFzcz1cXFwicC00IHRleHQteGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgdHJhbnNhY3Rpb25zIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LXZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRlc2NyaXB0aW9uIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRBbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IHR5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LXJlZC02MDAnIH19IGZvbnQtYm9sZCB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjYXRlZ29yeSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHR5cGUgPT09ICdpbmNvbWUnID8gKGhvdXJseVJhdGVGb3JtYXR0ZWQgKyAnL2hyJykgOiAnJyB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1zcWxpdGUtY29tbWVyY2lhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlLWNvbW1lcmNpYWwvY29tbWVyY2lhbC1tdWx0aVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlLWVuY3J5cHRlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtc3FsaXRlLXN5bmNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwifi9wYWNrYWdlLmpzb25cIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9