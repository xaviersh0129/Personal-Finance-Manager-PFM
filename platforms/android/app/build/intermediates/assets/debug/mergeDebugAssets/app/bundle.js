(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app-root.xml": "./app/app-root.xml",
	"./app.css": "./app/app.css",
	"./app.ts": "./app/app.ts",
	"./constants/storage-keys.ts": "./app/constants/storage-keys.ts",
	"./main-page.ts": "./app/main-page.ts",
	"./main-page.xml": "./app/main-page.xml",
	"./main-view-model.ts": "./app/main-view-model.ts",
	"./models/asset.ts": "./app/models/asset.ts",
	"./models/financial-report.ts": "./app/models/financial-report.ts",
	"./models/liability.ts": "./app/models/liability.ts",
	"./models/transaction.ts": "./app/models/transaction.ts",
	"./services/asset-service.ts": "./app/services/asset-service.ts",
	"./services/base-service.ts": "./app/services/base-service.ts",
	"./services/liability-service.ts": "./app/services/liability-service.ts",
	"./services/report-service.ts": "./app/services/report-service.ts",
	"./services/storage-service.ts": "./app/services/storage-service.ts",
	"./services/transaction-service.ts": "./app/services/transaction-service.ts",
	"./utils/dialog.ts": "./app/utils/dialog.ts",
	"./utils/financial-calculations.ts": "./app/utils/financial-calculations.ts",
	"./utils/formatters.ts": "./app/utils/formatters.ts",
	"./utils/logger.ts": "./app/utils/logger.ts",
	"./utils/navigation.ts": "./app/utils/navigation.ts",
	"./view-models/assets/add-asset-view-model.ts": "./app/view-models/assets/add-asset-view-model.ts",
	"./view-models/assets/asset-list-view-model.ts": "./app/view-models/assets/asset-list-view-model.ts",
	"./view-models/base-view-model.ts": "./app/view-models/base-view-model.ts",
	"./view-models/dashboard-view-model.ts": "./app/view-models/dashboard-view-model.ts",
	"./view-models/liabilities/add-liability-view-model.ts": "./app/view-models/liabilities/add-liability-view-model.ts",
	"./view-models/liabilities/liability-list-view-model.ts": "./app/view-models/liabilities/liability-list-view-model.ts",
	"./view-models/reports/financial-health-view-model.ts": "./app/view-models/reports/financial-health-view-model.ts",
	"./view-models/transactions/add-transaction-view-model.ts": "./app/view-models/transactions/add-transaction-view-model.ts",
	"./view-models/transactions/transaction-list-view-model.ts": "./app/view-models/transactions/transaction-list-view-model.ts",
	"./views/assets/add-asset-page.ts": "./app/views/assets/add-asset-page.ts",
	"./views/assets/add-asset-page.xml": "./app/views/assets/add-asset-page.xml",
	"./views/assets/asset-list-page.ts": "./app/views/assets/asset-list-page.ts",
	"./views/assets/asset-list-page.xml": "./app/views/assets/asset-list-page.xml",
	"./views/liabilities/add-liability-page.ts": "./app/views/liabilities/add-liability-page.ts",
	"./views/liabilities/add-liability-page.xml": "./app/views/liabilities/add-liability-page.xml",
	"./views/liabilities/liability-list-page.ts": "./app/views/liabilities/liability-list-page.ts",
	"./views/liabilities/liability-list-page.xml": "./app/views/liabilities/liability-list-page.xml",
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
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/application/application.android.js");
// Added by app-css-loader


_nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Application.run({ moduleName: 'app-root' });


/***/ }),

/***/ "./app/app.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".m-1"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".m-2"],"declarations":[{"type":"declaration","property":"margin","value":"8"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".rounded"],"declarations":[{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".border"],"declarations":[{"type":"declaration","property":"border-width","value":"1px"}]},{"type":"rule","selectors":[".border-b"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1px"}]},{"type":"rule","selectors":[".bg-blue-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(219 234 254 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-blue-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(59 130 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-gray-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(243 244 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-green-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(220 252 231 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-green-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(34 197 94 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-purple-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(243 232 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-purple-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(168 85 247 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-red-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(254 226 226 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-red-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(239 68 68 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".text-right"],"declarations":[{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".text-lg"],"declarations":[{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-sm"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"line-height","value":"20"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".font-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"700"}]},{"type":"rule","selectors":[".text-blue-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(37 99 235 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(75 85 99 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-green-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(22 163 74 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-red-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(220 38 38 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "D:\\Dev\\PFM\\app\\app.css")


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

/***/ "./app/main-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo),
/* harmony export */   onNavigateToAssets: () => (/* binding */ onNavigateToAssets),
/* harmony export */   onNavigateToExpense: () => (/* binding */ onNavigateToExpense),
/* harmony export */   onNavigateToIncome: () => (/* binding */ onNavigateToIncome),
/* harmony export */   onNavigateToLiabilities: () => (/* binding */ onNavigateToLiabilities)
/* harmony export */ });
/* harmony import */ var _view_models_dashboard_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/dashboard-view-model.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/navigation.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/utils/logger.ts");



const TAG = 'MainPage';
let viewModel;
function navigatingTo(args) {
    const page = args.object;
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Navigating to main page');
    viewModel = new _view_models_dashboard_view_model__WEBPACK_IMPORTED_MODULE_0__.DashboardViewModel();
    page.bindingContext = viewModel;
}
function onNavigateToIncome(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Navigating to Income list');
    try {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)("views/transactions/transaction-list-page", { filterType: 'income' });
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Failed to navigate to Income list', error);
    }
}
function onNavigateToExpense(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Navigating to Expense list');
    try {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)("views/transactions/transaction-list-page", { filterType: 'expense' });
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Failed to navigate to Expense list', error);
    }
}
function onNavigateToAssets(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Navigating to Assets list');
    try {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)("views/assets/asset-list-page");
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Failed to navigate to Assets list', error);
    }
}
function onNavigateToLiabilities(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Navigating to Liabilities list');
    try {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)("views/liabilities/liability-list-page");
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Failed to navigate to Liabilities list', error);
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
        this.category = data.category || 'Cash';
        this.value = data.value || 0;
        this.name = data.name || '';
        this.purchaseDate = data.purchaseDate || new Date();
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
        this.type = data.type || 'Short-term';
        this.amount = data.amount || 0;
        this.name = data.name || '';
        this.dueDate = data.dueDate || new Date();
        this.interestRate = data.interestRate || 0;
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
        this.id = data.id || crypto.randomUUID();
        this.type = data.type || 'expense';
        this.category = data.category || 'Food';
        this.amount = Number(data.amount || 0);
        this.date = data.date || new Date();
        this.description = data.description || '';
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
        return items.map(data => new _models_asset__WEBPACK_IMPORTED_MODULE_0__.Asset({
            ...data,
            purchaseDate: new Date(data.purchaseDate)
        }));
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
    loadItems() {
        try {
            if (!this.storageKey) {
                throw new Error('Storage key not set');
            }
            const savedItems = this.storageService.getItem(this.storageKey, []);
            this.items = this.transformLoadedItems(savedItems);
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Loaded ${this.items.length} items from ${this.storageKey}`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, `Error loading items from ${this.storageKey}`, error);
            this.items = [];
        }
    }
    saveItems() {
        try {
            if (!this.storageKey) {
                throw new Error('Storage key not set');
            }
            this.storageService.setItem(this.storageKey, this.items);
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Saved ${this.items.length} items to ${this.storageKey}`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, `Error saving items to ${this.storageKey}`, error);
        }
    }
    addItem(item) {
        if (!item.id) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, 'Cannot add item without id');
            return;
        }
        this.items.push(item);
        this.saveItems();
        this.notifyPropertyChange('items', this.items);
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Added item with id: ${item.id}`);
    }
    updateItem(item) {
        if (!item.id) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, 'Cannot update item without id');
            return;
        }
        const index = this.items.findIndex(i => i.id === item.id);
        if (index !== -1) {
            this.items[index] = item;
            this.saveItems();
            this.notifyPropertyChange('items', this.items);
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Updated item with id: ${item.id}`);
        }
    }
    deleteItem(id) {
        if (!id) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(this.TAG, 'Cannot delete item without id');
            return;
        }
        this.items = this.items.filter(item => item.id !== id);
        this.saveItems();
        this.notifyPropertyChange('items', this.items);
        _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(this.TAG, `Deleted item with id: ${id}`);
    }
    getItems() {
        return [...this.items];
    }
}


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
        return items.map(data => new _models_liability__WEBPACK_IMPORTED_MODULE_0__.Liability({
            ...data,
            dueDate: new Date(data.dueDate)
        }));
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
            debtToIncomeRatio: (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_3__.calculateDebtToIncomeRatio)(monthlyIncome, liabilities),
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
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/application-settings/index.android.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'StorageService';
class StorageService {
    static getInstance() {
        if (!StorageService.instance) {
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }
    setItem(key, value) {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.setString(key, JSON.stringify(value));
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, `Successfully stored data for key: ${key}`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, `Error storing data for key: ${key}`, error);
            throw error;
        }
    }
    getItem(key, defaultValue) {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            const value = _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.getString(key);
            return value ? JSON.parse(value) : defaultValue;
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, `Error retrieving data for key: ${key}`, error);
            return defaultValue;
        }
    }
    removeItem(key) {
        try {
            if (typeof key !== 'string') {
                throw new Error('Storage key must be a string');
            }
            _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.remove(key);
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, `Successfully removed data for key: ${key}`);
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, `Error removing data for key: ${key}`, error);
            throw error;
        }
    }
    clear() {
        try {
            _nativescript_core__WEBPACK_IMPORTED_MODULE_1__.clear();
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.debug(TAG, 'Successfully cleared all storage');
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__.Logger.error(TAG, 'Error clearing storage', error);
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
            date: new Date(data.date)
        }));
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
    getMonthlyTransactions(month, year) {
        return this.items.filter(t => {
            const transactionDate = t.date;
            return transactionDate.getMonth() === month &&
                transactionDate.getFullYear() === year;
        });
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
}


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
/* harmony export */   calculateDebtToIncomeRatio: () => (/* binding */ calculateDebtToIncomeRatio),
/* harmony export */   calculateMonthlyCashflow: () => (/* binding */ calculateMonthlyCashflow),
/* harmony export */   calculateNetWorth: () => (/* binding */ calculateNetWorth)
/* harmony export */ });
function calculateNetWorth(assets, liabilities) {
    const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
    const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.amount, 0);
    return totalAssets - totalLiabilities;
}
function calculateMonthlyCashflow(transactions) {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const monthlyTransactions = transactions.filter(t => t.date.getMonth() === currentMonth &&
        t.date.getFullYear() === currentYear);
    return monthlyTransactions.reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);
}
function calculateDebtToIncomeRatio(monthlyIncome, liabilities) {
    const monthlyDebtPayments = liabilities.reduce((sum, liability) => {
        // Simple monthly payment calculation
        const monthlyRate = liability.interestRate / 12 / 100;
        const months = liability.type === 'Short-term' ? 12 : 360; // 1 year or 30 years
        const payment = (liability.amount * monthlyRate * Math.pow(1 + monthlyRate, months))
            / (Math.pow(1 + monthlyRate, months) - 1);
        return sum + payment;
    }, 0);
    return monthlyDebtPayments / monthlyIncome;
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
function formatPercentage(value) {
    const numericValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numericValue)) {
        return '0.00%';
    }
    return `${numericValue.toFixed(2)}%`;
}


/***/ }),

/***/ "./app/utils/logger.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/platform/common.js");

class Logger {
    static debug(tag, message, ...args) {
        const logMessage = `[${tag}] ${message}`;
        if (args.length > 0) {
            console.log(logMessage, ...args);
        }
        else {
            console.log(logMessage);
        }
        if (_nativescript_core__WEBPACK_IMPORTED_MODULE_0__.isAndroid && global.android) {
            // @ts-ignore: Android specific code
            android.util.Log.d(tag, message);
        }
    }
    static error(tag, message, error) {
        const logMessage = `[${tag}] ERROR: ${message}`;
        console.error(logMessage);
        if (error) {
            console.error(error);
        }
        if (_nativescript_core__WEBPACK_IMPORTED_MODULE_0__.isAndroid && global.android) {
            // @ts-ignore: Android specific code
            android.util.Log.e(tag, message);
        }
    }
}


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
        this._purchaseDate = new Date();
        this._selectedCategoryIndex = 0;
        this._categories = [
            'Real Estate', 'Vehicles', 'Cash', 'Business', 'Saving', 'Stocks'
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
        this._purchaseDate = new Date(asset.purchaseDate);
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
    get purchaseDate() { return this._purchaseDate; }
    set purchaseDate(value) {
        if (this._purchaseDate !== value) {
            this._purchaseDate = value;
            this.notifyPropertyChange('purchaseDate', value);
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
                category: this._categories[this._selectedCategoryIndex],
                purchaseDate: this._purchaseDate
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





const TAG = 'AssetListViewModel';
class AssetListViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor() {
        super();
        this._assets = [];
        this._assetService = _services_asset_service__WEBPACK_IMPORTED_MODULE_1__.AssetService.getInstance();
        this.loadAssets();
    }
    get assets() {
        return this._assets.map(asset => ({
            ...asset,
            formattedValue: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(asset.value),
            formattedDate: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatDate)(asset.purchaseDate)
        }));
    }
    get totalAssetsFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(this._assetService.getTotalAssetValue());
    }
    onAddAsset() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_3__.navigateToPage)("views/assets/add-asset-page");
    }
    onItemTap(args) {
        const asset = this._assets[args.index];
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
            title: asset.name,
            message: `Value: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(asset.value)}\nPurchase Date: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatDate)(asset.purchaseDate)}`,
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
        });
    }
    loadAssets() {
        this._assets = this._assetService.getAssets();
        this.notifyPropertyChange('assets', this.assets);
        this.notifyPropertyChange('totalAssetsFormatted', this.totalAssetsFormatted);
    }
    editAsset(asset) {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_3__.navigateToPage)('views/assets/add-asset-page', { asset });
    }
    deleteAsset(asset) {
        const dialogOptions = {
            title: 'Confirm Delete',
            message: 'Are you sure you want to delete this asset?',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)(dialogOptions).then(result => {
            if (result) {
                this._assetService.deleteAsset(asset.id);
                this.loadAssets();
            }
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
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/core/ui/frame/index.android.js");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/transaction-service.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/asset-service.ts");
/* harmony import */ var _services_liability_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/liability-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/formatters.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/logger.ts");






const TAG = 'DashboardViewModel';
class DashboardViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Observable {
    constructor() {
        super();
        this._netWorth = 0;
        this._monthlyIncome = 0;
        this._monthlyExpenses = 0;
        this._cashflow = 0;
        this.transactionService = _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService.getInstance();
        this.assetService = _services_asset_service__WEBPACK_IMPORTED_MODULE_1__.AssetService.getInstance();
        this.liabilityService = _services_liability_service__WEBPACK_IMPORTED_MODULE_2__.LiabilityService.getInstance();
        this.calculateFinancials();
    }
    get netWorthFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._netWorth);
    }
    get monthlyIncomeFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._monthlyIncome);
    }
    get monthlyExpensesFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._monthlyExpenses);
    }
    get cashflowFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._cashflow);
    }
    onAddIncome() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.debug(TAG, 'Navigating to Add Income page');
        _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Frame.topmost().navigate({
            moduleName: "views/transactions/add-transaction-page",
            context: { isIncome: true }
        });
    }
    onAddExpense() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.debug(TAG, 'Navigating to Add Expense page');
        _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Frame.topmost().navigate({
            moduleName: "views/transactions/add-transaction-page",
            context: { isIncome: false }
        });
    }
    onAddAsset() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.debug(TAG, 'Navigating to Add Asset page');
        _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Frame.topmost().navigate({
            moduleName: "views/assets/add-asset-page"
        });
    }
    onAddLiability() {
        _utils_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.debug(TAG, 'Navigating to Add Liability page');
        _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Frame.topmost().navigate({
            moduleName: "views/liabilities/add-liability-page"
        });
    }
    calculateFinancials() {
        // Calculate net worth
        const totalAssets = this.assetService.getTotalAssetValue();
        const totalLiabilities = this.liabilityService.getTotalLiabilities();
        this._netWorth = totalAssets - totalLiabilities;
        // Calculate monthly income and expenses
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const monthlyTransactions = this.transactionService.getMonthlyTransactions(currentMonth, currentYear);
        this._monthlyIncome = monthlyTransactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);
        this._monthlyExpenses = monthlyTransactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
        this._cashflow = this._monthlyIncome - this._monthlyExpenses;
        // Notify property changes
        this.notifyPropertyChange('netWorthFormatted', this.netWorthFormatted);
        this.notifyPropertyChange('monthlyIncomeFormatted', this.monthlyIncomeFormatted);
        this.notifyPropertyChange('monthlyExpensesFormatted', this.monthlyExpensesFormatted);
        this.notifyPropertyChange('cashflowFormatted', this.cashflowFormatted);
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
        this._dueDate = new Date();
        this._selectedTypeIndex = 0;
        this._types = ['Short-term', 'Long-term'];
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
        this._dueDate = new Date(liability.dueDate);
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
    get dueDate() { return this._dueDate; }
    set dueDate(value) {
        if (this._dueDate !== value) {
            this._dueDate = value;
            this.notifyPropertyChange('dueDate', value);
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
                type: this._types[this._selectedTypeIndex],
                dueDate: this._dueDate
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





const TAG = 'LiabilityListViewModel';
class LiabilityListViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor() {
        super();
        this._liabilities = [];
        this._liabilityService = _services_liability_service__WEBPACK_IMPORTED_MODULE_1__.LiabilityService.getInstance();
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
        this._liabilities = this._liabilityService.getLiabilities();
        this.notifyPropertyChange('liabilities', this.liabilities);
        this.notifyPropertyChange('totalLiabilitiesFormatted', this.totalLiabilitiesFormatted);
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
        this._date = new Date();
        this._selectedCategoryIndex = 0;
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
        this._date = new Date(transaction.date);
        this._selectedCategoryIndex = this._categories.indexOf(transaction.category);
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
    get date() { return this._date; }
    set date(value) {
        if (this._date !== value) {
            this._date = value;
            this.notifyPropertyChange('date', value);
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
            ? ['Salary', 'Real Estate', 'Business', 'Interest/Dividends']
            : ['Housing', 'Transportation', 'Food', 'Utilities', 'Insurance', 'Healthcare', 'Entertainment', 'Loan'];
    }
    onSave() {
        try {
            const transaction = new _models_transaction__WEBPACK_IMPORTED_MODULE_1__.Transaction({
                ...(this._existingTransaction && { id: this._existingTransaction.id }),
                type: this._isIncome ? 'income' : 'expense',
                category: this._categories[this._selectedCategoryIndex],
                amount: this._amount,
                date: this._date,
                description: this._description
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





const TAG = 'TransactionListViewModel';
class TransactionListViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor(filterType) {
        super();
        this._transactions = [];
        this._filterType = filterType;
        this._transactionService = _services_transaction_service__WEBPACK_IMPORTED_MODULE_1__.TransactionService.getInstance();
        this.loadTransactions();
    }
    get filterType() {
        return this._filterType;
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
            formattedDate: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatDate)(transaction.date)
        }));
    }
    onAddTransaction() {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_3__.navigateToPage)('views/transactions/add-transaction-page', {
            isIncome: this._filterType === 'income'
        });
    }
    onItemTap(args) {
        const transaction = this._transactions[args.index];
        (0,_utils_dialog__WEBPACK_IMPORTED_MODULE_4__.showDialog)({
            title: transaction.description,
            message: `Amount: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(transaction.amount)}\nDate: ${(0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatDate)(transaction.date)}`,
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
        this._transactions = this._transactionService.getTransactions();
        this.notifyPropertyChange('transactions', this.transactions);
        this.notifyPropertyChange('totalAmountFormatted', this.totalAmountFormatted);
    }
    editTransaction(transaction) {
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

function navigatingTo(args) {
    const page = args.object;
    page.bindingContext = new _view_models_assets_add_asset_view_model__WEBPACK_IMPORTED_MODULE_0__.AddAssetViewModel();
}


/***/ }),

/***/ "./app/views/assets/asset-list-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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


/***/ }),

/***/ "./app/views/liabilities/add-liability-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_liabilities_add_liability_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/liabilities/add-liability-view-model.ts");

function navigatingTo(args) {
    const page = args.object;
    page.bindingContext = new _view_models_liabilities_add_liability_view_model__WEBPACK_IMPORTED_MODULE_0__.AddLiabilityViewModel();
}


/***/ }),

/***/ "./app/views/liabilities/liability-list-page.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _view_models_transactions_transaction_list_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/view-models/transactions/transaction-list-view-model.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");


const TAG = 'TransactionListPage';
function navigatingTo(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Navigating to Transaction List page');
    const page = args.object;
    const filterType = args.context?.filterType;
    if (!page.bindingContext) {
        page.bindingContext = new _view_models_transactions_transaction_list_view_model__WEBPACK_IMPORTED_MODULE_0__.TransactionListViewModel(filterType);
    }
    // Set the ActionBar title based on the filter type
    page.actionBar.title = filterType === 'income' ? 'Income' : 'Expenses';
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Frame defaultPage=\"main-page\">\n</Frame>\n"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar title=\"Personal Finance Manager\" />\n    \n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <!-- Dashboard Overview -->\n            <StackLayout class=\"bg-blue-100 p-4 rounded-lg mb-4\">\n                <Label text=\"Financial Overview\" class=\"text-xl font-bold mb-2\" />\n                <GridLayout columns=\"*, *\" rows=\"auto, auto\" class=\"mb-2\">\n                    <Label text=\"Net Worth:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ netWorthFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\" />\n                    <Label text=\"Monthly Cashflow:\" class=\"text-gray-600\" row=\"1\" col=\"0\" />\n                    <Label text=\"{{ cashflowFormatted }}\" class=\"text-right font-bold\" row=\"1\" col=\"1\" />\n                </GridLayout>\n            </StackLayout>\n\n            <!-- Main Navigation -->\n            <GridLayout columns=\"*, *\" rows=\"auto, auto\" class=\"mb-4\">\n                <Button text=\"INCOME\" tap=\"onNavigateToIncome\" class=\"m-1 bg-green-500 text-white\" row=\"0\" col=\"0\" />\n                <Button text=\"EXPENSE\" tap=\"onNavigateToExpense\" class=\"m-1 bg-red-500 text-white\" row=\"0\" col=\"1\" />\n                <Button text=\"ASSETS\" tap=\"onNavigateToAssets\" class=\"m-1 bg-blue-500 text-white\" row=\"1\" col=\"0\" />\n                <Button text=\"LIABILITIES\" tap=\"onNavigateToLiabilities\" class=\"m-1 bg-purple-500 text-white\" row=\"1\" col=\"1\" />\n            </GridLayout>\n\n            <!-- Monthly Summary -->\n            <StackLayout class=\"bg-gray-100 p-4 rounded-lg\">\n                <Label text=\"Monthly Summary\" class=\"text-xl font-bold mb-2\" />\n                <GridLayout columns=\"*, *\" rows=\"auto, auto\" class=\"mb-2\">\n                    <Label text=\"Income:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ monthlyIncomeFormatted }}\" class=\"text-right text-green-600 font-bold\" row=\"0\" col=\"1\" />\n                    <Label text=\"Expenses:\" class=\"text-gray-600\" row=\"1\" col=\"0\" />\n                    <Label text=\"{{ monthlyExpensesFormatted }}\" class=\"text-right text-red-600 font-bold\" row=\"1\" col=\"1\" />\n                </GridLayout>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar title=\"Add Asset\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n    </ActionBar>\n    \n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <TextField hint=\"Asset Name\" text=\"{{ name }}\" class=\"mb-4 p-2 border rounded\" />\n            \n            <TextField \n                hint=\"Value\" \n                text=\"{{ value }}\" \n                keyboardType=\"number\" \n                class=\"mb-4 p-2 border rounded\" />\n            \n            <Label text=\"Category\" class=\"mb-2\" />\n            <ListPicker items=\"{{ categories }}\" \n                       selectedIndex=\"{{ selectedCategoryIndex }}\"\n                       class=\"mb-4 p-2 border rounded\" />\n            \n            <DatePicker date=\"{{ purchaseDate }}\" class=\"mb-4\" />\n            \n            <Button text=\"Save\" tap=\"{{ onSave }}\" class=\"p-4 bg-blue-500 text-white rounded-lg\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar title=\"Assets\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n    </ActionBar>\n    \n    <GridLayout rows=\"auto, auto, *\">\n        <Label text=\"{{ 'Total Assets: ' + totalAssetsFormatted }}\" class=\"p-4 text-lg font-bold bg-blue-100\" row=\"0\" />\n        \n        <!-- Add Button -->\n        <Button text=\"Add Asset\" tap=\"{{ onAddAsset }}\" \n                class=\"m-2 p-4 bg-blue-500 text-white rounded-lg\" row=\"1\" />\n        \n        <ListView items=\"{{ assets }}\" row=\"2\" itemTap=\"{{ onItemTap }}\">\n            <ListView.itemTemplate>\n                <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                    <Label text=\"{{ name }}\" row=\"0\" col=\"0\" class=\"font-bold\" />\n                    <Label text=\"{{ formattedValue }}\" row=\"0\" col=\"1\" class=\"text-right text-blue-600\" />\n                    <Label text=\"{{ category }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                    <Label text=\"{{ formattedDate }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n                </GridLayout>\n            </ListView.itemTemplate>\n        </ListView>\n    </GridLayout>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar title=\"Add Liability\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n    </ActionBar>\n    \n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <TextField hint=\"Liability Name\" text=\"{{ name }}\" class=\"mb-4 p-2 border rounded\" />\n            \n            <TextField \n                hint=\"Amount\" \n                text=\"{{ amount }}\" \n                keyboardType=\"number\" \n                class=\"mb-4 p-2 border rounded\" />\n            \n            <TextField \n                hint=\"Interest Rate (%)\" \n                text=\"{{ interestRate }}\" \n                keyboardType=\"number\" \n                class=\"mb-4 p-2 border rounded\" />\n            \n            <Label text=\"Type\" class=\"mb-2\" />\n            <ListPicker items=\"{{ types }}\" \n                       selectedIndex=\"{{ selectedTypeIndex }}\"\n                       class=\"mb-4 p-2 border rounded\" />\n            \n            <DatePicker date=\"{{ dueDate }}\" class=\"mb-4\" />\n            \n            <Button text=\"Save\" tap=\"{{ onSave }}\" class=\"p-4 bg-purple-500 text-white rounded-lg\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar title=\"Liabilities\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n    </ActionBar>\n    \n    <GridLayout rows=\"auto, auto, *\">\n        <Label text=\"{{ 'Total Liabilities: ' + totalLiabilitiesFormatted }}\" class=\"p-4 text-lg font-bold bg-purple-100\" row=\"0\" />\n        \n        <!-- Add Button -->\n        <Button text=\"Add Liability\" tap=\"{{ onAddLiability }}\" \n                class=\"m-2 p-4 bg-purple-500 text-white rounded-lg\" row=\"1\" />\n        \n        <ListView items=\"{{ liabilities }}\" row=\"2\" itemTap=\"{{ onItemTap }}\">\n            <ListView.itemTemplate>\n                <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                    <Label text=\"{{ name }}\" row=\"0\" col=\"0\" class=\"font-bold\" />\n                    <Label text=\"{{ formattedAmount }}\" row=\"0\" col=\"1\" class=\"text-right text-red-600\" />\n                    <Label text=\"{{ type }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                    <Label text=\"{{ formattedInterestRate }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n                </GridLayout>\n            </ListView.itemTemplate>\n        </ListView>\n    </GridLayout>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatingFrom=\"navigatingFrom\">\n    <ActionBar>\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n    </ActionBar>\n    \n    <ScrollView>\n        <StackLayout class=\"p-4\">\n            <TextField hint=\"Description\" text=\"{{ description }}\" class=\"mb-4 p-2 border rounded\" />\n            \n            <TextField \n                hint=\"Amount\" \n                text=\"{{ amount }}\" \n                keyboardType=\"number\" \n                class=\"mb-4 p-2 border rounded\" />\n            \n            <Label text=\"Category\" class=\"mb-2\" />\n            <ListPicker items=\"{{ categories }}\" \n                       selectedIndex=\"{{ selectedCategoryIndex }}\"\n                       class=\"mb-4 p-2 border rounded\" />\n            \n            <DatePicker date=\"{{ date }}\" class=\"mb-4\" />\n            \n            <Button text=\"Save\" tap=\"{{ onSave }}\" \n                    class=\"{{ 'p-4 text-white rounded-lg ' + (isIncome ? 'bg-green-500' : 'bg-red-500') }}\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar>\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n    </ActionBar>\n    \n    <GridLayout rows=\"auto, auto, *\">\n        <!-- Total Section -->\n        <Label text=\"{{ totalAmountFormatted }}\" \n               class=\"{{ filterType === 'income' ? 'p-4 text-lg font-bold bg-green-100' : 'p-4 text-lg font-bold bg-red-100' }}\" \n               row=\"0\" />\n        \n        <!-- Add Button -->\n        <Button text=\"{{ 'Add ' + (filterType === 'income' ? 'Income' : 'Expense') }}\" \n                tap=\"{{ onAddTransaction }}\" \n                class=\"{{ filterType === 'income' ? 'm-2 p-4 bg-green-500 text-white rounded-lg' : 'm-2 p-4 bg-red-500 text-white rounded-lg' }}\" \n                row=\"1\" />\n        \n        <!-- Transactions List -->\n        <ListView items=\"{{ transactions }}\" row=\"2\" itemTap=\"{{ onItemTap }}\">\n            <ListView.itemTemplate>\n                <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                    <Label text=\"{{ description }}\" row=\"0\" col=\"0\" class=\"font-bold\" />\n                    <Label text=\"{{ formattedAmount }}\" row=\"0\" col=\"1\" \n                           class=\"text-right {{ type === 'income' ? 'text-green-600' : 'text-red-600' }}\" />\n                    <Label text=\"{{ category }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                    <Label text=\"{{ formattedDate }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n                </GridLayout>\n            </ListView.itemTemplate>\n        </ListView>\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUMsaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBLDRTQUE0UyxTQUFTLGlHQUFpRyxvREFBb0Qsc0pBQXNKLGlCQUFpQixnSUFBZ0ksY0FBYywwQkFBMEIsWUFBWSw0S0FBNEssT0FBTyxvRkFBb0Ysa0JBQWtCLGtHQUFrRyxPQUFPLGdHQUFnRyx3QkFBd0I7QUFDL3hDLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNGaEQ7QUFDQSw0cUJBQTRxQixvQkFBb0IsMk5BQTJOLDJCQUEyQix5TkFBeU4sNkJBQTZCLCtRQUErUSxpQkFBaUIsdU1BQXVNLFlBQVksd0ZBQXdGLHVCQUF1Qix5RkFBeUYsK0JBQStCLG9HQUFvRyxtQ0FBbUM7QUFDN2dFLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNGaEQ7QUFDQSwwTEFBMEwsT0FBTyxvRUFBb0Usa0JBQWtCLHFFQUFxRSxXQUFXLGdGQUFnRixVQUFVO0FBQ2pjLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNGaEQ7QUFDQSxtVUFBbVUsU0FBUyw0SUFBNEksY0FBYyw0SUFBNEksU0FBUyw4TUFBOE0sYUFBYSwrQ0FBK0Msd0JBQXdCLGlIQUFpSCxPQUFPLCtFQUErRSxTQUFTLG9DQUFvQyw0RUFBNEU7QUFDN3RDLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNGaEQ7QUFDQSxzUkFBc1IsU0FBUyxpSUFBaUksdUJBQXVCLCtCQUErQixzR0FBc0csbUdBQW1HLDREQUE0RCw4QkFBOEIsbUJBQW1CLGdDQUFnQyxzSEFBc0gsOEdBQThHLGVBQWUsMEJBQTBCLFlBQVksNEtBQTRLLGNBQWMsb0ZBQW9GLGtCQUFrQiwwRUFBMEUsd0RBQXdELDRDQUE0QyxXQUFXLGdHQUFnRyxnQkFBZ0I7QUFDOW9ELGlFQUFlLGlDQUFpQzs7Ozs7Ozs7O0FDSGhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC8gc3luYyBcXC4oeG1sJTdDanMlN0MoIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2NvbnN0YW50cy9zdG9yYWdlLWtleXMudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9tYWluLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9tYWluLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9tb2RlbHMvYXNzZXQudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9tb2RlbHMvZmluYW5jaWFsLXJlcG9ydC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21vZGVscy9saWFiaWxpdHkudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9tb2RlbHMvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvbGlhYmlsaXR5LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9zZXJ2aWNlcy9yZXBvcnQtc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC91dGlscy9kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC91dGlscy9maW5hbmNpYWwtY2FsY3VsYXRpb25zLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdXRpbHMvZm9ybWF0dGVycy50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3V0aWxzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3V0aWxzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYWRkLWFzc2V0LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvYmFzZS12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLXJvb3QueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3NoYXJlZC9saXN0LWl0ZW0ueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvZXh0ZXJuYWwgY29tbW9uanMgXCJ+L3BhY2thZ2UuanNvblwiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC9hcHAuY3NzXCIsXG5cdFwiLi9hcHAudHNcIjogXCIuL2FwcC9hcHAudHNcIixcblx0XCIuL2NvbnN0YW50cy9zdG9yYWdlLWtleXMudHNcIjogXCIuL2FwcC9jb25zdGFudHMvc3RvcmFnZS1rZXlzLnRzXCIsXG5cdFwiLi9tYWluLXBhZ2UudHNcIjogXCIuL2FwcC9tYWluLXBhZ2UudHNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL2FwcC9tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC9tYWluLXZpZXctbW9kZWwudHNcIixcblx0XCIuL21vZGVscy9hc3NldC50c1wiOiBcIi4vYXBwL21vZGVscy9hc3NldC50c1wiLFxuXHRcIi4vbW9kZWxzL2ZpbmFuY2lhbC1yZXBvcnQudHNcIjogXCIuL2FwcC9tb2RlbHMvZmluYW5jaWFsLXJlcG9ydC50c1wiLFxuXHRcIi4vbW9kZWxzL2xpYWJpbGl0eS50c1wiOiBcIi4vYXBwL21vZGVscy9saWFiaWxpdHkudHNcIixcblx0XCIuL21vZGVscy90cmFuc2FjdGlvbi50c1wiOiBcIi4vYXBwL21vZGVscy90cmFuc2FjdGlvbi50c1wiLFxuXHRcIi4vc2VydmljZXMvYXNzZXQtc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL2Jhc2Utc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2Jhc2Utc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvbGlhYmlsaXR5LXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvcmVwb3J0LXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9yZXBvcnQtc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvc3RvcmFnZS1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvc3RvcmFnZS1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS50c1wiLFxuXHRcIi4vdXRpbHMvZGlhbG9nLnRzXCI6IFwiLi9hcHAvdXRpbHMvZGlhbG9nLnRzXCIsXG5cdFwiLi91dGlscy9maW5hbmNpYWwtY2FsY3VsYXRpb25zLnRzXCI6IFwiLi9hcHAvdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucy50c1wiLFxuXHRcIi4vdXRpbHMvZm9ybWF0dGVycy50c1wiOiBcIi4vYXBwL3V0aWxzL2Zvcm1hdHRlcnMudHNcIixcblx0XCIuL3V0aWxzL2xvZ2dlci50c1wiOiBcIi4vYXBwL3V0aWxzL2xvZ2dlci50c1wiLFxuXHRcIi4vdXRpbHMvbmF2aWdhdGlvbi50c1wiOiBcIi4vYXBwL3V0aWxzL25hdmlnYXRpb24udHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Fzc2V0cy9hZGQtYXNzZXQtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hZGQtYXNzZXQtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvYXNzZXRzL2Fzc2V0LWxpc3Qtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Jhc2Utdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2Jhc2Utdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9kYXNoYm9hcmQtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC9saXN0LWl0ZW0ueG1sXCI6IFwiLi9hcHAvdmlld3Mvc2hhcmVkL2xpc3QtaXRlbS54bWxcIixcblx0XCIuL3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UueG1sXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXBwIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHhtbCU3Q2pzJTdDKD88JTIxXFxcXC5kXFxcXC4pdHMlN0NzP2NzcykkXCI7IiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5BcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xuIiwiLyogQ1NTMkpTT04gKi9cblxuY29uc3QgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIqXCIsXCI6OmJlZm9yZVwiLFwiOjphZnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCI6OmJhY2tkcm9wXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucm91bmRlZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3JkZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxcHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9yZGVyLWJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsdWUtMTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjE5IDIzNCAyNTQgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctYmx1ZS01MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYig1OSAxMzAgMjQ2IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWdyYXktMTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjQzIDI0NCAyNDYgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctZ3JlZW4tMTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjIwIDI1MiAyMzEgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctZ3JlZW4tNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMzQgMTk3IDk0IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXB1cnBsZS0xMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyNDMgMjMyIDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1wdXJwbGUtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTY4IDg1IDI0NyAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1yZWQtMTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU0IDIyNiAyMjYgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctcmVkLTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIzOSA2OCA2OCAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1yaWdodFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJyaWdodFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWxnXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtc21cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC14bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb250LWJvbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjcwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWJsdWUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMzcgOTkgMjM1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ncmF5LTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDc1IDg1IDk5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ncmVlbi02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyMiAxNjMgNzQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXJlZC02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyMjAgMzggMzggLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19XG5leHBvcnQgZGVmYXVsdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fXG5jb25zdCB7IGFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcbmFkZFRhZ2dlZEFkZGl0aW9uYWxDU1MoX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fXywgXCJEOlxcXFxEZXZcXFxcUEZNXFxcXGFwcFxcXFxhcHAuY3NzXCIpXG4iLCJleHBvcnQgY29uc3QgU3RvcmFnZUtleXMgPSB7XG4gICAgQVNTRVRTOiAnYXNzZXRzJyxcbiAgICBMSUFCSUxJVElFUzogJ2xpYWJpbGl0aWVzJyxcbiAgICBUUkFOU0FDVElPTlM6ICd0cmFuc2FjdGlvbnMnLFxufSBhcyBjb25zdDsiLCJpbXBvcnQgeyBFdmVudERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkVmlld01vZGVsIH0gZnJvbSAnLi92aWV3LW1vZGVscy9kYXNoYm9hcmQtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4vdXRpbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdNYWluUGFnZSc7XG5sZXQgdmlld01vZGVsOiBEYXNoYm9hcmRWaWV3TW9kZWw7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIG1haW4gcGFnZScpO1xuICAgIHZpZXdNb2RlbCA9IG5ldyBEYXNoYm9hcmRWaWV3TW9kZWwoKTtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdmlld01vZGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZVRvSW5jb21lKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIEluY29tZSBsaXN0Jyk7XG4gICAgdHJ5IHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoXCJ2aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlXCIsIHsgZmlsdGVyVHlwZTogJ2luY29tZScgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZhaWxlZCB0byBuYXZpZ2F0ZSB0byBJbmNvbWUgbGlzdCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlVG9FeHBlbnNlKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIEV4cGVuc2UgbGlzdCcpO1xuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZVwiLCB7IGZpbHRlclR5cGU6ICdleHBlbnNlJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG5hdmlnYXRlIHRvIEV4cGVuc2UgbGlzdCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlVG9Bc3NldHMoYXJnczogRXZlbnREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQXNzZXRzIGxpc3QnKTtcbiAgICB0cnkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2VcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZhaWxlZCB0byBuYXZpZ2F0ZSB0byBBc3NldHMgbGlzdCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlVG9MaWFiaWxpdGllcyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBMaWFiaWxpdGllcyBsaXN0Jyk7XG4gICAgdHJ5IHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoXCJ2aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gbmF2aWdhdGUgdG8gTGlhYmlsaXRpZXMgbGlzdCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHJpdmF0ZSBfY291bnRlcjogbnVtYmVyO1xuICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgdGhpcy5fY291bnRlciA9IDQyO1xuICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICB9XG5cbiAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuXG4gIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21lc3NhZ2UnLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25UYXAoKSB7XG4gICAgdGhpcy5fY291bnRlci0tO1xuICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVNZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLl9jb3VudGVyIDw9IDApIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9XG4gICAgICAgICdIb29ycmFhYXkhIFlvdSB1bmxvY2tlZCB0aGUgTmF0aXZlU2NyaXB0IGNsaWNrZXIgYWNoaWV2ZW1lbnQhJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXNzYWdlID0gYCR7dGhpcy5fY291bnRlcn0gdGFwcyBsZWZ0YDtcbiAgICB9XG5cbiAgICAvLyBsb2cgdGhlIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IHR5cGUgQXNzZXRDYXRlZ29yeSA9ICdSZWFsIEVzdGF0ZScgfCAnVmVoaWNsZXMnIHwgJ0Nhc2gnIHwgJ0J1c2luZXNzJyB8ICdTYXZpbmcnIHwgJ1N0b2Nrcyc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldCBleHRlbmRzIE9ic2VydmFibGUge1xuICBpZDogc3RyaW5nO1xuICBjYXRlZ29yeTogQXNzZXRDYXRlZ29yeTtcbiAgdmFsdWU6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwdXJjaGFzZURhdGU6IERhdGU7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxBc3NldD4pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGRhdGEuY2F0ZWdvcnkgfHwgJ0Nhc2gnO1xuICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlIHx8IDA7XG4gICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lIHx8ICcnO1xuICAgIHRoaXMucHVyY2hhc2VEYXRlID0gZGF0YS5wdXJjaGFzZURhdGUgfHwgbmV3IERhdGUoKTtcbiAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgTW9udGhseVJlcG9ydCB7XG4gICAgbW9udGg6IG51bWJlcjtcbiAgICB5ZWFyOiBudW1iZXI7XG4gICAgaW5jb21lOiBudW1iZXI7XG4gICAgZXhwZW5zZXM6IG51bWJlcjtcbiAgICBzYXZpbmdzOiBudW1iZXI7XG4gICAgc2F2aW5nc1JhdGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5hbmNpYWxIZWFsdGhSZXBvcnQge1xuICAgIG5ldFdvcnRoOiBudW1iZXI7XG4gICAgZGVidFRvSW5jb21lUmF0aW86IG51bWJlcjtcbiAgICBtb250aGx5Q2FzaGZsb3c6IG51bWJlcjtcbiAgICBtb250aGx5UmVwb3J0czogTW9udGhseVJlcG9ydFtdO1xufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgdHlwZSBMaWFiaWxpdHlUeXBlID0gJ1Nob3J0LXRlcm0nIHwgJ0xvbmctdGVybSc7XG5cbmV4cG9ydCBjbGFzcyBMaWFiaWxpdHkgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogTGlhYmlsaXR5VHlwZTtcbiAgYW1vdW50OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgZHVlRGF0ZTogRGF0ZTtcbiAgaW50ZXJlc3RSYXRlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxMaWFiaWxpdHk+KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZSB8fCAnU2hvcnQtdGVybSc7XG4gICAgdGhpcy5hbW91bnQgPSBkYXRhLmFtb3VudCB8fCAwO1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZSB8fCAnJztcbiAgICB0aGlzLmR1ZURhdGUgPSBkYXRhLmR1ZURhdGUgfHwgbmV3IERhdGUoKTtcbiAgICB0aGlzLmludGVyZXN0UmF0ZSA9IGRhdGEuaW50ZXJlc3RSYXRlIHx8IDA7XG4gIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25UeXBlID0gJ2luY29tZScgfCAnZXhwZW5zZSc7XG5leHBvcnQgdHlwZSBUcmFuc2FjdGlvbkNhdGVnb3J5ID0gXG4gIHwgJ1NhbGFyeScgfCAnUmVhbCBFc3RhdGUnIHwgJ0J1c2luZXNzJyB8ICdJbnRlcmVzdC9EaXZpZGVuZHMnICAvLyBJbmNvbWUgY2F0ZWdvcmllc1xuICB8ICdIb3VzaW5nJyB8ICdUcmFuc3BvcnRhdGlvbicgfCAnRm9vZCcgfCAnVXRpbGl0aWVzJyB8ICdJbnN1cmFuY2UnIHwgJ0hlYWx0aGNhcmUnIHwgJ0VudGVydGFpbm1lbnQnIHwgJ0xvYW4nOyAgLy8gRXhwZW5zZSBjYXRlZ29yaWVzXG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbiBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdHlwZTogVHJhbnNhY3Rpb25UeXBlO1xuICAgIGNhdGVnb3J5OiBUcmFuc2FjdGlvbkNhdGVnb3J5O1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIGRhdGU6IERhdGU7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VHJhbnNhY3Rpb24+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZSB8fCAnZXhwZW5zZSc7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBkYXRhLmNhdGVnb3J5IHx8ICdGb29kJztcbiAgICAgICAgdGhpcy5hbW91bnQgPSBOdW1iZXIoZGF0YS5hbW91bnQgfHwgMCk7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGEuZGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICB9XG59IiwiaW1wb3J0IHsgQXNzZXQgfSBmcm9tICcuLi9tb2RlbHMvYXNzZXQnO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Utc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlS2V5cyB9IGZyb20gJy4uL2NvbnN0YW50cy9zdG9yYWdlLWtleXMnO1xuXG5leHBvcnQgY2xhc3MgQXNzZXRTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2U8QXNzZXQ+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXNzZXRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBUQUcgPSAnQXNzZXRTZXJ2aWNlJztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RvcmFnZUtleSA9IFN0b3JhZ2VLZXlzLkFTU0VUUztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IEFzc2V0U2VydmljZSB7XG4gICAgICAgIGlmICghQXNzZXRTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBBc3NldFNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgQXNzZXRTZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFzc2V0U2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogQXNzZXRbXSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoZGF0YSA9PiBuZXcgQXNzZXQoe1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIHB1cmNoYXNlRGF0ZTogbmV3IERhdGUoZGF0YS5wdXJjaGFzZURhdGUpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhZGRBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGFzc2V0KTtcbiAgICB9XG5cbiAgICB1cGRhdGVBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKGFzc2V0KTtcbiAgICB9XG5cbiAgICBkZWxldGVBc3NldChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbShpZCk7XG4gICAgfVxuXG4gICAgZ2V0QXNzZXRzKCk6IEFzc2V0W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIGdldFRvdGFsQXNzZXRWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYXNzZXQpID0+IHN1bSArIGFzc2V0LnZhbHVlLCAwKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS1zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlU2VydmljZTxUIGV4dGVuZHMgeyBpZDogc3RyaW5nIH0+IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJvdGVjdGVkIGl0ZW1zOiBUW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBUQUc6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgc3RvcmFnZUtleTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UgPSBTdG9yYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxvYWRJdGVtcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBsb2FkSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbm90IHNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0SXRlbTxhbnlbXT4odGhpcy5zdG9yYWdlS2V5LCBbXSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy50cmFuc2Zvcm1Mb2FkZWRJdGVtcyhzYXZlZEl0ZW1zKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYExvYWRlZCAke3RoaXMuaXRlbXMubGVuZ3RofSBpdGVtcyBmcm9tICR7dGhpcy5zdG9yYWdlS2V5fWApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCBgRXJyb3IgbG9hZGluZyBpdGVtcyBmcm9tICR7dGhpcy5zdG9yYWdlS2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzYXZlSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbm90IHNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgdGhpcy5pdGVtcyk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBTYXZlZCAke3RoaXMuaXRlbXMubGVuZ3RofSBpdGVtcyB0byAke3RoaXMuc3RvcmFnZUtleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgYEVycm9yIHNhdmluZyBpdGVtcyB0byAke3RoaXMuc3RvcmFnZUtleX1gLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogVFtdO1xuXG4gICAgcHJvdGVjdGVkIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgJ0Nhbm5vdCBhZGQgaXRlbSB3aXRob3V0IGlkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnNhdmVJdGVtcygpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycsIHRoaXMuaXRlbXMpO1xuICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBBZGRlZCBpdGVtIHdpdGggaWQ6ICR7aXRlbS5pZH1gKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnQ2Fubm90IHVwZGF0ZSBpdGVtIHdpdGhvdXQgaWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KGkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1zKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycsIHRoaXMuaXRlbXMpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKHRoaXMuVEFHLCBgVXBkYXRlZCBpdGVtIHdpdGggaWQ6ICR7aXRlbS5pZH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBkZWxldGVJdGVtKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnQ2Fubm90IGRlbGV0ZSBpdGVtIHdpdGhvdXQgaWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpZCk7XG4gICAgICAgIHRoaXMuc2F2ZUl0ZW1zKCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2l0ZW1zJywgdGhpcy5pdGVtcyk7XG4gICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYERlbGV0ZWQgaXRlbSB3aXRoIGlkOiAke2lkfWApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRJdGVtcygpOiBUW10ge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuaXRlbXNdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBMaWFiaWxpdHkgfSBmcm9tICcuLi9tb2RlbHMvbGlhYmlsaXR5JztcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZUtleXMgfSBmcm9tICcuLi9jb25zdGFudHMvc3RvcmFnZS1rZXlzJztcblxuZXhwb3J0IGNsYXNzIExpYWJpbGl0eVNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZTxMaWFiaWxpdHk+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTGlhYmlsaXR5U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVEFHID0gJ0xpYWJpbGl0eVNlcnZpY2UnO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBzdG9yYWdlS2V5ID0gU3RvcmFnZUtleXMuTElBQklMSVRJRVM7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMaWFiaWxpdHlTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFMaWFiaWxpdHlTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBMaWFiaWxpdHlTZXJ2aWNlLmluc3RhbmNlID0gbmV3IExpYWJpbGl0eVNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTGlhYmlsaXR5U2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogTGlhYmlsaXR5W10ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGRhdGEgPT4gbmV3IExpYWJpbGl0eSh7XG4gICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGF0YS5kdWVEYXRlKVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYWRkTGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShsaWFiaWxpdHkpO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0obGlhYmlsaXR5KTtcbiAgICB9XG5cbiAgICBkZWxldGVMaWFiaWxpdHkoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oaWQpO1xuICAgIH1cblxuICAgIGdldExpYWJpbGl0aWVzKCk6IExpYWJpbGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbExpYWJpbGl0aWVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBsaWFiaWxpdHkpID0+IHN1bSArIGxpYWJpbGl0eS5hbW91bnQsIDApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gJy4vdHJhbnNhY3Rpb24tc2VydmljZSc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuL2Fzc2V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4vbGlhYmlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0IHsgRmluYW5jaWFsSGVhbHRoUmVwb3J0LCBNb250aGx5UmVwb3J0IH0gZnJvbSAnLi4vbW9kZWxzL2ZpbmFuY2lhbC1yZXBvcnQnO1xuaW1wb3J0IHsgXG4gICAgY2FsY3VsYXRlTmV0V29ydGgsIFxuICAgIGNhbGN1bGF0ZU1vbnRobHlDYXNoZmxvdyxcbiAgICBjYWxjdWxhdGVEZWJ0VG9JbmNvbWVSYXRpbyBcbn0gZnJvbSAnLi4vdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRTZXJ2aWNlIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFJlcG9ydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSB0cmFuc2FjdGlvblNlcnZpY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcml2YXRlIGFzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgbGlhYmlsaXR5U2VydmljZTogTGlhYmlsaXR5U2VydmljZTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlID0gVHJhbnNhY3Rpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuYXNzZXRTZXJ2aWNlID0gQXNzZXRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubGlhYmlsaXR5U2VydmljZSA9IExpYWJpbGl0eVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUmVwb3J0U2VydmljZSB7XG4gICAgICAgIGlmICghUmVwb3J0U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUmVwb3J0U2VydmljZS5pbnN0YW5jZSA9IG5ldyBSZXBvcnRTZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlcG9ydFNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVGaW5hbmNpYWxIZWFsdGhSZXBvcnQoKTogRmluYW5jaWFsSGVhbHRoUmVwb3J0IHtcbiAgICAgICAgY29uc3QgYXNzZXRzID0gdGhpcy5hc3NldFNlcnZpY2UuZ2V0QXNzZXRzKCk7XG4gICAgICAgIGNvbnN0IGxpYWJpbGl0aWVzID0gdGhpcy5saWFiaWxpdHlTZXJ2aWNlLmdldExpYWJpbGl0aWVzKCk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRyYW5zYWN0aW9ucygpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbW9udGhseUluY29tZSA9IHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2luY29tZScpXG4gICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKSAvIDEyO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXRXb3J0aDogY2FsY3VsYXRlTmV0V29ydGgoYXNzZXRzLCBsaWFiaWxpdGllcyksXG4gICAgICAgICAgICBkZWJ0VG9JbmNvbWVSYXRpbzogY2FsY3VsYXRlRGVidFRvSW5jb21lUmF0aW8obW9udGhseUluY29tZSwgbGlhYmlsaXRpZXMpLFxuICAgICAgICAgICAgbW9udGhseUNhc2hmbG93OiBjYWxjdWxhdGVNb250aGx5Q2FzaGZsb3codHJhbnNhY3Rpb25zKSxcbiAgICAgICAgICAgIG1vbnRobHlSZXBvcnRzOiB0aGlzLmdlbmVyYXRlTW9udGhseVJlcG9ydHMoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2VuZXJhdGVNb250aGx5UmVwb3J0cygpOiBNb250aGx5UmVwb3J0W10ge1xuICAgICAgICBjb25zdCByZXBvcnRzOiBNb250aGx5UmVwb3J0W10gPSBbXTtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gR2VuZXJhdGUgcmVwb3J0cyBmb3IgdGhlIGxhc3QgMTIgbW9udGhzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSAoY3VycmVudERhdGUuZ2V0TW9udGgoKSAtIGkgKyAxMikgJSAxMjtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpIC0gTWF0aC5mbG9vcihpIC8gMTIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb250aFRyYW5zYWN0aW9ucyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmdldE1vbnRobHlUcmFuc2FjdGlvbnMobW9udGgsIHllYXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBpbmNvbWUgPSBtb250aFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdpbmNvbWUnKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlcyA9IG1vbnRoVHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2V4cGVuc2UnKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzYXZpbmdzID0gaW5jb21lIC0gZXhwZW5zZXM7XG4gICAgICAgICAgICBjb25zdCBzYXZpbmdzUmF0ZSA9IGluY29tZSA+IDAgPyAoc2F2aW5ncyAvIGluY29tZSkgKiAxMDAgOiAwO1xuXG4gICAgICAgICAgICByZXBvcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIG1vbnRoLFxuICAgICAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICAgICAgaW5jb21lLFxuICAgICAgICAgICAgICAgIGV4cGVuc2VzLFxuICAgICAgICAgICAgICAgIHNhdmluZ3MsXG4gICAgICAgICAgICAgICAgc2F2aW5nc1JhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcG9ydHM7XG4gICAgfVxufSIsImltcG9ydCB7IEFwcGxpY2F0aW9uU2V0dGluZ3MgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ1N0b3JhZ2VTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogU3RvcmFnZVNlcnZpY2U7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU3RvcmFnZVNlcnZpY2Uge1xuICAgICAgICBpZiAoIVN0b3JhZ2VTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBTdG9yYWdlU2VydmljZS5pbnN0YW5jZSA9IG5ldyBTdG9yYWdlU2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdG9yYWdlU2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzZXRJdGVtPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yYWdlIGtleSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHN0b3JlZCBkYXRhIGZvciBrZXk6ICR7a2V5fWApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgYEVycm9yIHN0b3JpbmcgZGF0YSBmb3Iga2V5OiAke2tleX1gLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEl0ZW08VD4oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yYWdlIGtleSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBFcnJvciByZXRyaWV2aW5nIGRhdGEgZm9yIGtleTogJHtrZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoa2V5KTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgcmVtb3ZlZCBkYXRhIGZvciBrZXk6ICR7a2V5fWApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgYEVycm9yIHJlbW92aW5nIGRhdGEgZm9yIGtleTogJHtrZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MuY2xlYXIoKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgY2xlYXJlZCBhbGwgc3RvcmFnZScpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGNsZWFyaW5nIHN0b3JhZ2UnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25TZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2U8VHJhbnNhY3Rpb24+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBUQUcgPSAnVHJhbnNhY3Rpb25TZXJ2aWNlJztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RvcmFnZUtleSA9IFN0b3JhZ2VLZXlzLlRSQU5TQUNUSU9OUztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFRyYW5zYWN0aW9uU2VydmljZSB7XG4gICAgICAgIGlmICghVHJhbnNhY3Rpb25TZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBUcmFuc2FjdGlvblNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgVHJhbnNhY3Rpb25TZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uU2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogVHJhbnNhY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoZGF0YSA9PiBuZXcgVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGRhdGEuYW1vdW50KSxcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGEuZGF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbik6IHZvaWQge1xuICAgICAgICB0cmFuc2FjdGlvbi5hbW91bnQgPSBOdW1iZXIodHJhbnNhY3Rpb24uYW1vdW50KTtcbiAgICAgICAgaWYgKGlzTmFOKHRyYW5zYWN0aW9uLmFtb3VudCkpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgJ0ludmFsaWQgdHJhbnNhY3Rpb24gYW1vdW50Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRJdGVtKHRyYW5zYWN0aW9uKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdHJhbnNhY3Rpb24uYW1vdW50ID0gTnVtYmVyKHRyYW5zYWN0aW9uLmFtb3VudCk7XG4gICAgICAgIGlmIChpc05hTih0cmFuc2FjdGlvbi5hbW91bnQpKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdJbnZhbGlkIHRyYW5zYWN0aW9uIGFtb3VudCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbSh0cmFuc2FjdGlvbik7XG4gICAgfVxuXG4gICAgZGVsZXRlVHJhbnNhY3Rpb24oaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oaWQpO1xuICAgIH1cblxuICAgIGdldFRyYW5zYWN0aW9ucygpOiBUcmFuc2FjdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBnZXRNb250aGx5VHJhbnNhY3Rpb25zKG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcik6IFRyYW5zYWN0aW9uW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIodCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbkRhdGUgPSB0LmRhdGU7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25EYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoICYmIFxuICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uRGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbEluY29tZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1xuICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2luY29tZScpXG4gICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIE51bWJlcih0LmFtb3VudCksIDApO1xuICAgIH1cblxuICAgIGdldFRvdGFsRXhwZW5zZXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdleHBlbnNlJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgTnVtYmVyKHQuYW1vdW50KSwgMCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpYWxvZ3MsIERpYWxvZ09wdGlvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkRpYWxvZ09wdGlvbnMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIGFjdGlvbnM6IEFycmF5PHsgaWQ6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1EaWFsb2dPcHRpb25zIGV4dGVuZHMgRGlhbG9nT3B0aW9ucyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgb2tCdXR0b25UZXh0Pzogc3RyaW5nO1xuICAgIGNhbmNlbEJ1dHRvblRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGlhbG9nKG9wdGlvbnM6IEFjdGlvbkRpYWxvZ09wdGlvbnMgfCBDb25maXJtRGlhbG9nT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nIHwgYm9vbGVhbj4ge1xuICAgIGlmICgnYWN0aW9ucycgaW4gb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gRGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLm1lc3NhZ2UsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IG9wdGlvbnMuYWN0aW9ucy5tYXAoYSA9PiBhLnRleHQpXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdDYW5jZWwnKSByZXR1cm4gJ2NhbmNlbCc7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbnMuZmluZChhID0+IGEudGV4dCA9PT0gcmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPyBhY3Rpb24uaWQgOiAnY2FuY2VsJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBEaWFsb2dzLmNvbmZpcm0ob3B0aW9ucyBhcyBEaWFsb2dPcHRpb25zKTtcbn0iLCJpbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gJy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBMaWFiaWxpdHkgfSBmcm9tICcuLi9tb2RlbHMvbGlhYmlsaXR5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5ldFdvcnRoKGFzc2V0czogQXNzZXRbXSwgbGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbEFzc2V0cyA9IGFzc2V0cy5yZWR1Y2UoKHN1bSwgYXNzZXQpID0+IHN1bSArIGFzc2V0LnZhbHVlLCAwKTtcbiAgICBjb25zdCB0b3RhbExpYWJpbGl0aWVzID0gbGlhYmlsaXRpZXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4gc3VtICsgbGlhYmlsaXR5LmFtb3VudCwgMCk7XG4gICAgcmV0dXJuIHRvdGFsQXNzZXRzIC0gdG90YWxMaWFiaWxpdGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1vbnRobHlDYXNoZmxvdyh0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10pOiBudW1iZXIge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnMuZmlsdGVyKHQgPT4gXG4gICAgICAgIHQuZGF0ZS5nZXRNb250aCgpID09PSBjdXJyZW50TW9udGggJiYgXG4gICAgICAgIHQuZGF0ZS5nZXRGdWxsWWVhcigpID09PSBjdXJyZW50WWVhclxuICAgICk7XG5cbiAgICByZXR1cm4gbW9udGhseVRyYW5zYWN0aW9ucy5yZWR1Y2UoKHN1bSwgdCkgPT4gXG4gICAgICAgIHN1bSArICh0LnR5cGUgPT09ICdpbmNvbWUnID8gdC5hbW91bnQgOiAtdC5hbW91bnQpLCAwXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURlYnRUb0luY29tZVJhdGlvKFxuICAgIG1vbnRobHlJbmNvbWU6IG51bWJlciwgXG4gICAgbGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdXG4pOiBudW1iZXIge1xuICAgIGNvbnN0IG1vbnRobHlEZWJ0UGF5bWVudHMgPSBsaWFiaWxpdGllcy5yZWR1Y2UoKHN1bSwgbGlhYmlsaXR5KSA9PiB7XG4gICAgICAgIC8vIFNpbXBsZSBtb250aGx5IHBheW1lbnQgY2FsY3VsYXRpb25cbiAgICAgICAgY29uc3QgbW9udGhseVJhdGUgPSBsaWFiaWxpdHkuaW50ZXJlc3RSYXRlIC8gMTIgLyAxMDA7XG4gICAgICAgIGNvbnN0IG1vbnRocyA9IGxpYWJpbGl0eS50eXBlID09PSAnU2hvcnQtdGVybScgPyAxMiA6IDM2MDsgLy8gMSB5ZWFyIG9yIDMwIHllYXJzXG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSAobGlhYmlsaXR5LmFtb3VudCAqIG1vbnRobHlSYXRlICogTWF0aC5wb3coMSArIG1vbnRobHlSYXRlLCBtb250aHMpKSBcbiAgICAgICAgICAgIC8gKE1hdGgucG93KDEgKyBtb250aGx5UmF0ZSwgbW9udGhzKSAtIDEpO1xuICAgICAgICByZXR1cm4gc3VtICsgcGF5bWVudDtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBtb250aGx5RGVidFBheW1lbnRzIC8gbW9udGhseUluY29tZTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3koYW1vdW50OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIEVuc3VyZSB3ZSdyZSB3b3JraW5nIHdpdGggYSBudW1iZXJcbiAgICBjb25zdCBudW1lcmljQW1vdW50ID0gdHlwZW9mIGFtb3VudCA9PT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KGFtb3VudCkgOiBhbW91bnQ7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIG51bWJlclxuICAgIGlmIChpc05hTihudW1lcmljQW1vdW50KSkge1xuICAgICAgICByZXR1cm4gJyQwLjAwJztcbiAgICB9XG4gICAgXG4gICAgLy8gRm9ybWF0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBhbmQgYWRkIGRvbGxhciBzaWduXG4gICAgcmV0dXJuIGAkJHtudW1lcmljQW1vdW50LnRvRml4ZWQoMil9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcbiAgICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGAke21vbnRofSAke2RheX0sICR7eWVhcn1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW1lcmljVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBpZiAoaXNOYU4obnVtZXJpY1ZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJzAuMDAlJztcbiAgICB9XG4gICAgcmV0dXJuIGAke251bWVyaWNWYWx1ZS50b0ZpeGVkKDIpfSVgO1xufSIsImltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIHN0YXRpYyBkZWJ1Zyh0YWc6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsb2dNZXNzYWdlID0gYFske3RhZ31dICR7bWVzc2FnZX1gO1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dNZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiBnbG9iYWwuYW5kcm9pZCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogQW5kcm9pZCBzcGVjaWZpYyBjb2RlXG4gICAgICAgICAgICBhbmRyb2lkLnV0aWwuTG9nLmQodGFnLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBlcnJvcih0YWc6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBlcnJvcj86IEVycm9yKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxvZ01lc3NhZ2UgPSBgWyR7dGFnfV0gRVJST1I6ICR7bWVzc2FnZX1gO1xuICAgICAgICBjb25zb2xlLmVycm9yKGxvZ01lc3NhZ2UpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiBnbG9iYWwuYW5kcm9pZCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogQW5kcm9pZCBzcGVjaWZpYyBjb2RlXG4gICAgICAgICAgICBhbmRyb2lkLnV0aWwuTG9nLmUodGFnLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVRvUGFnZShwYWdlUGF0aDogc3RyaW5nLCBjb250ZXh0PzogYW55KTogdm9pZCB7XG4gICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogcGFnZVBhdGgsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IEFzc2V0LCBBc3NldENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZEFzc2V0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEFkZEFzc2V0Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfcHVyY2hhc2VEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZENhdGVnb3J5SW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfY2F0ZWdvcmllczogQXNzZXRDYXRlZ29yeVtdID0gW1xuICAgICAgICAnUmVhbCBFc3RhdGUnLCAnVmVoaWNsZXMnLCAnQ2FzaCcsICdCdXNpbmVzcycsICdTYXZpbmcnLCAnU3RvY2tzJ1xuICAgIF07XG4gICAgcHJpdmF0ZSBfYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXhpc3RpbmdBc3NldD86IEFzc2V0O1xuXG4gICAgY29uc3RydWN0b3IoZXhpc3RpbmdBc3NldD86IEFzc2V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9leGlzdGluZ0Fzc2V0ID0gZXhpc3RpbmdBc3NldDtcblxuICAgICAgICBpZiAoZXhpc3RpbmdBc3NldCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nQXNzZXQoZXhpc3RpbmdBc3NldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVXaXRoRXhpc3RpbmdBc3NldChhc3NldDogQXNzZXQpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IGFzc2V0Lm5hbWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gYXNzZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX3B1cmNoYXNlRGF0ZSA9IG5ldyBEYXRlKGFzc2V0LnB1cmNoYXNlRGF0ZSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IHRoaXMuX2NhdGVnb3JpZXMuaW5kZXhPZihhc3NldC5jYXRlZ29yeSk7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5fdmFsdWUgIT09IG51bWVyaWNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBudW1lcmljVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd2YWx1ZScsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgcHVyY2hhc2VEYXRlKCk6IERhdGUgeyByZXR1cm4gdGhpcy5fcHVyY2hhc2VEYXRlOyB9XG4gICAgc2V0IHB1cmNoYXNlRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fcHVyY2hhc2VEYXRlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcHVyY2hhc2VEYXRlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdwdXJjaGFzZURhdGUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY2F0ZWdvcmllcygpOiBBc3NldENhdGVnb3J5W10geyByZXR1cm4gdGhpcy5fY2F0ZWdvcmllczsgfVxuICAgIGdldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDsgfVxuICAgIHNldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZENhdGVnb3J5SW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3NldCBuYW1lIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLl92YWx1ZSkgfHwgdGhpcy5fdmFsdWUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXNzZXQgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhc3NldCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nQXNzZXQgJiYgeyBpZDogdGhpcy5fZXhpc3RpbmdBc3NldC5pZCB9KSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRyaW0oKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuX2NhdGVnb3JpZXNbdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4XSxcbiAgICAgICAgICAgICAgICBwdXJjaGFzZURhdGU6IHRoaXMuX3B1cmNoYXNlRGF0ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGlzdGluZ0Fzc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLnVwZGF0ZUFzc2V0KGFzc2V0KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgYXNzZXQ6ICR7YXNzZXQubmFtZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLmFkZEFzc2V0KGFzc2V0KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IGFkZGVkIGFzc2V0OiAke2Fzc2V0Lm5hbWV9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIGFzc2V0JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgQXNzZXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNzZXQnO1xuaW1wb3J0IHsgQXNzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXNzZXQtc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHNob3dEaWFsb2csIENvbmZpcm1EaWFsb2dPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBc3NldExpc3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQXNzZXRMaXN0Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfYXNzZXRzOiBBc3NldFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlID0gQXNzZXRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgIH1cblxuICAgIGdldCBhc3NldHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hc3NldHMubWFwKGFzc2V0ID0+ICh7XG4gICAgICAgICAgICAuLi5hc3NldCxcbiAgICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBmb3JtYXRDdXJyZW5jeShhc3NldC52YWx1ZSksXG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBmb3JtYXREYXRlKGFzc2V0LnB1cmNoYXNlRGF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbEFzc2V0c0Zvcm1hdHRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX2Fzc2V0U2VydmljZS5nZXRUb3RhbEFzc2V0VmFsdWUoKSk7XG4gICAgfVxuXG4gICAgb25BZGRBc3NldCgpIHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoXCJ2aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2VcIik7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IHsgaW5kZXg6IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gdGhpcy5fYXNzZXRzW2FyZ3MuaW5kZXhdO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiBhc3NldC5uYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogYFZhbHVlOiAke2Zvcm1hdEN1cnJlbmN5KGFzc2V0LnZhbHVlKX1cXG5QdXJjaGFzZSBEYXRlOiAke2Zvcm1hdERhdGUoYXNzZXQucHVyY2hhc2VEYXRlKX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0QXNzZXQoYXNzZXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVBc3NldChhc3NldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAgICAgdGhpcy5fYXNzZXRzID0gdGhpcy5fYXNzZXRTZXJ2aWNlLmdldEFzc2V0cygpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdhc3NldHMnLCB0aGlzLmFzc2V0cyk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsQXNzZXRzRm9ybWF0dGVkJywgdGhpcy50b3RhbEFzc2V0c0Zvcm1hdHRlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0QXNzZXQoYXNzZXQ6IEFzc2V0KSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UnLCB7IGFzc2V0IH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlQXNzZXQoYXNzZXQ6IEFzc2V0KSB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ09wdGlvbnM6IENvbmZpcm1EaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtIERlbGV0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGFzc2V0PycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfTtcblxuICAgICAgICBzaG93RGlhbG9nKGRpYWxvZ09wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UuZGVsZXRlQXNzZXQoYXNzZXQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jhc2VWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQmFzZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0F0dGVtcHRpbmcgdG8gbmF2aWdhdGUgYmFjaycpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS50b3Btb3N0KCk7XG4gICAgICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFtZS5nb0JhY2soKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IG5hdmlnYXRlZCBiYWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGcmFtZSBpcyBudWxsLCBjYW5ub3QgbmF2aWdhdGUgYmFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIG5hdmlnYXRpbmcgYmFjaycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnRGFzaGJvYXJkVmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX25ldFdvcnRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX21vbnRobHlJbmNvbWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfbW9udGhseUV4cGVuc2VzOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2Nhc2hmbG93OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgdHJhbnNhY3Rpb25TZXJ2aWNlOiBUcmFuc2FjdGlvblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhc3NldFNlcnZpY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcml2YXRlIGxpYWJpbGl0eVNlcnZpY2U6IExpYWJpbGl0eVNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblNlcnZpY2UgPSBUcmFuc2FjdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5hc3NldFNlcnZpY2UgPSBBc3NldFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5saWFiaWxpdHlTZXJ2aWNlID0gTGlhYmlsaXR5U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZUZpbmFuY2lhbHMoKTtcbiAgICB9XG5cbiAgICBnZXQgbmV0V29ydGhGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX25ldFdvcnRoKTtcbiAgICB9XG5cbiAgICBnZXQgbW9udGhseUluY29tZUZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fbW9udGhseUluY29tZSk7XG4gICAgfVxuXG4gICAgZ2V0IG1vbnRobHlFeHBlbnNlc0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fbW9udGhseUV4cGVuc2VzKTtcbiAgICB9XG5cbiAgICBnZXQgY2FzaGZsb3dGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX2Nhc2hmbG93KTtcbiAgICB9XG5cbiAgICBvbkFkZEluY29tZSgpIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQWRkIEluY29tZSBwYWdlJyk7XG4gICAgICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBcInZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZVwiLFxuICAgICAgICAgICAgY29udGV4dDogeyBpc0luY29tZTogdHJ1ZSB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQWRkRXhwZW5zZSgpIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQWRkIEV4cGVuc2UgcGFnZScpO1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2VcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgaXNJbmNvbWU6IGZhbHNlIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25BZGRBc3NldCgpIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQWRkIEFzc2V0IHBhZ2UnKTtcbiAgICAgICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwidmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25BZGRMaWFiaWxpdHkoKSB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIEFkZCBMaWFiaWxpdHkgcGFnZScpO1xuICAgICAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2VcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGN1bGF0ZUZpbmFuY2lhbHMoKSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBuZXQgd29ydGhcbiAgICAgICAgY29uc3QgdG90YWxBc3NldHMgPSB0aGlzLmFzc2V0U2VydmljZS5nZXRUb3RhbEFzc2V0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgdG90YWxMaWFiaWxpdGllcyA9IHRoaXMubGlhYmlsaXR5U2VydmljZS5nZXRUb3RhbExpYWJpbGl0aWVzKCk7XG4gICAgICAgIHRoaXMuX25ldFdvcnRoID0gdG90YWxBc3NldHMgLSB0b3RhbExpYWJpbGl0aWVzO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBtb250aGx5IGluY29tZSBhbmQgZXhwZW5zZXNcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbnMgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRNb250aGx5VHJhbnNhY3Rpb25zKGN1cnJlbnRNb250aCwgY3VycmVudFllYXIpO1xuXG4gICAgICAgIHRoaXMuX21vbnRobHlJbmNvbWUgPSBtb250aGx5VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnaW5jb21lJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuXG4gICAgICAgIHRoaXMuX21vbnRobHlFeHBlbnNlcyA9IG1vbnRobHlUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdleHBlbnNlJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuXG4gICAgICAgIHRoaXMuX2Nhc2hmbG93ID0gdGhpcy5fbW9udGhseUluY29tZSAtIHRoaXMuX21vbnRobHlFeHBlbnNlcztcblxuICAgICAgICAvLyBOb3RpZnkgcHJvcGVydHkgY2hhbmdlc1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduZXRXb3J0aEZvcm1hdHRlZCcsIHRoaXMubmV0V29ydGhGb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdtb250aGx5SW5jb21lRm9ybWF0dGVkJywgdGhpcy5tb250aGx5SW5jb21lRm9ybWF0dGVkKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbW9udGhseUV4cGVuc2VzRm9ybWF0dGVkJywgdGhpcy5tb250aGx5RXhwZW5zZXNGb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYXNoZmxvd0Zvcm1hdHRlZCcsIHRoaXMuY2FzaGZsb3dGb3JtYXR0ZWQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IExpYWJpbGl0eSwgTGlhYmlsaXR5VHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBZGRMaWFiaWxpdHlWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkTGlhYmlsaXR5Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfYW1vdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2ludGVyZXN0UmF0ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9kdWVEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZFR5cGVJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF90eXBlczogTGlhYmlsaXR5VHlwZVtdID0gWydTaG9ydC10ZXJtJywgJ0xvbmctdGVybSddO1xuICAgIHByaXZhdGUgX2xpYWJpbGl0eVNlcnZpY2U6IExpYWJpbGl0eVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXhpc3RpbmdMaWFiaWxpdHk/OiBMaWFiaWxpdHk7XG5cbiAgICBjb25zdHJ1Y3RvcihleGlzdGluZ0xpYWJpbGl0eT86IExpYWJpbGl0eSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlID0gTGlhYmlsaXR5U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9leGlzdGluZ0xpYWJpbGl0eSA9IGV4aXN0aW5nTGlhYmlsaXR5O1xuXG4gICAgICAgIGlmIChleGlzdGluZ0xpYWJpbGl0eSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nTGlhYmlsaXR5KGV4aXN0aW5nTGlhYmlsaXR5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ0xpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbGlhYmlsaXR5Lm5hbWU7XG4gICAgICAgIHRoaXMuX2Ftb3VudCA9IGxpYWJpbGl0eS5hbW91bnQ7XG4gICAgICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IGxpYWJpbGl0eS5pbnRlcmVzdFJhdGU7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBuZXcgRGF0ZShsaWFiaWxpdHkuZHVlRGF0ZSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVHlwZUluZGV4ID0gdGhpcy5fdHlwZXMuaW5kZXhPZihsaWFiaWxpdHkudHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBhbW91bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2Ftb3VudDsgfVxuICAgIHNldCBhbW91bnQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5fYW1vdW50ICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Ftb3VudCA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Ftb3VudCcsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaW50ZXJlc3RSYXRlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9pbnRlcmVzdFJhdGU7IH1cbiAgICBzZXQgaW50ZXJlc3RSYXRlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIHRoaXMuX2ludGVyZXN0UmF0ZSAhPT0gbnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcmVzdFJhdGUgPSBudW1lcmljVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpbnRlcmVzdFJhdGUnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKTogRGF0ZSB7IHJldHVybiB0aGlzLl9kdWVEYXRlOyB9XG4gICAgc2V0IGR1ZURhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2R1ZURhdGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkdWVEYXRlJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHR5cGVzKCk6IExpYWJpbGl0eVR5cGVbXSB7IHJldHVybiB0aGlzLl90eXBlczsgfVxuICAgIGdldCBzZWxlY3RlZFR5cGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXg7IH1cbiAgICBzZXQgc2VsZWN0ZWRUeXBlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZFR5cGVJbmRleCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRUeXBlSW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWFiaWxpdHkgbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5fYW1vdW50KSB8fCB0aGlzLl9hbW91bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGlhYmlsaXR5IGFtb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLl9pbnRlcmVzdFJhdGUpIHx8IHRoaXMuX2ludGVyZXN0UmF0ZSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVyZXN0IHJhdGUgbXVzdCBiZSAwIG9yIGdyZWF0ZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlhYmlsaXR5ID0gbmV3IExpYWJpbGl0eSh7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5ICYmIHsgaWQ6IHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5LmlkIH0pLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUudHJpbSgpLFxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5fYW1vdW50LFxuICAgICAgICAgICAgICAgIGludGVyZXN0UmF0ZTogdGhpcy5faW50ZXJlc3RSYXRlLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuX3R5cGVzW3RoaXMuX3NlbGVjdGVkVHlwZUluZGV4XSxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiB0aGlzLl9kdWVEYXRlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGlhYmlsaXR5U2VydmljZS51cGRhdGVMaWFiaWxpdHkobGlhYmlsaXR5KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgbGlhYmlsaXR5OiAke2xpYWJpbGl0eS5uYW1lfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlLmFkZExpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgYWRkZWQgbGlhYmlsaXR5OiAke2xpYWJpbGl0eS5uYW1lfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIHNhdmluZyBsaWFiaWxpdHknLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMaWFiaWxpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlhYmlsaXR5JztcbmltcG9ydCB7IExpYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0UGVyY2VudGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHNob3dEaWFsb2csIENvbmZpcm1EaWFsb2dPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdMaWFiaWxpdHlMaXN0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIExpYWJpbGl0eUxpc3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9saWFiaWxpdHlTZXJ2aWNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2xpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubG9hZExpYWJpbGl0aWVzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGxpYWJpbGl0aWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlhYmlsaXRpZXMubWFwKGxpYWJpbGl0eSA9PiAoe1xuICAgICAgICAgICAgLi4ubGlhYmlsaXR5LFxuICAgICAgICAgICAgZm9ybWF0dGVkQW1vdW50OiBmb3JtYXRDdXJyZW5jeShsaWFiaWxpdHkuYW1vdW50KSxcbiAgICAgICAgICAgIGZvcm1hdHRlZEludGVyZXN0UmF0ZTogZm9ybWF0UGVyY2VudGFnZShsaWFiaWxpdHkuaW50ZXJlc3RSYXRlKVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQoKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9saWFiaWxpdHlTZXJ2aWNlLmdldFRvdGFsTGlhYmlsaXRpZXMoKSk7XG4gICAgfVxuXG4gICAgb25BZGRMaWFiaWxpdHkoKSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlXCIpO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSkge1xuICAgICAgICBjb25zdCBsaWFiaWxpdHkgPSB0aGlzLl9saWFiaWxpdGllc1thcmdzLmluZGV4XTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogbGlhYmlsaXR5Lm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQW1vdW50OiAke2Zvcm1hdEN1cnJlbmN5KGxpYWJpbGl0eS5hbW91bnQpfVxcbkludGVyZXN0IFJhdGU6ICR7Zm9ybWF0UGVyY2VudGFnZShsaWFiaWxpdHkuaW50ZXJlc3RSYXRlKX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TGlhYmlsaXR5KGxpYWJpbGl0eSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRMaWFiaWxpdGllcygpIHtcbiAgICAgICAgdGhpcy5fbGlhYmlsaXRpZXMgPSB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlLmdldExpYWJpbGl0aWVzKCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2xpYWJpbGl0aWVzJywgdGhpcy5saWFiaWxpdGllcyk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQnLCB0aGlzLnRvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdExpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlJywgeyBsaWFiaWxpdHkgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVMaWFiaWxpdHkobGlhYmlsaXR5OiBMaWFiaWxpdHkpIHtcbiAgICAgICAgY29uc3QgZGlhbG9nT3B0aW9uczogQ29uZmlybURpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlhYmlsaXR5PycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfTtcblxuICAgICAgICBzaG93RGlhbG9nKGRpYWxvZ09wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlLmRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHkuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZExpYWJpbGl0aWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFJlcG9ydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXBvcnQtc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0UGVyY2VudGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuXG5leHBvcnQgY2xhc3MgRmluYW5jaWFsSGVhbHRoVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfcmVwb3J0U2VydmljZTogUmVwb3J0U2VydmljZTtcbiAgICBwcml2YXRlIF9yZXBvcnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9yZXBvcnRTZXJ2aWNlID0gUmVwb3J0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxvYWRSZXBvcnQoKTtcbiAgICB9XG5cbiAgICBnZXQgbmV0V29ydGhGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX3JlcG9ydC5uZXRXb3J0aCk7XG4gICAgfVxuXG4gICAgZ2V0IG1vbnRobHlDYXNoZmxvd0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fcmVwb3J0Lm1vbnRobHlDYXNoZmxvdyk7XG4gICAgfVxuXG4gICAgZ2V0IGRlYnRUb0luY29tZVJhdGlvRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRQZXJjZW50YWdlKHRoaXMuX3JlcG9ydC5kZWJ0VG9JbmNvbWVSYXRpbyAqIDEwMCk7XG4gICAgfVxuXG4gICAgZ2V0IG1vbnRobHlSZXBvcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVwb3J0Lm1vbnRobHlSZXBvcnRzLm1hcChyZXBvcnQgPT4gKHtcbiAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgIG1vbnRoWWVhcjogYCR7bmV3IERhdGUocmVwb3J0LnllYXIsIHJlcG9ydC5tb250aCkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycgfSl9YCxcbiAgICAgICAgICAgIGluY29tZUZvcm1hdHRlZDogZm9ybWF0Q3VycmVuY3kocmVwb3J0LmluY29tZSksXG4gICAgICAgICAgICBleHBlbnNlc0Zvcm1hdHRlZDogZm9ybWF0Q3VycmVuY3kocmVwb3J0LmV4cGVuc2VzKSxcbiAgICAgICAgICAgIHNhdmluZ3NSYXRlRm9ybWF0dGVkOiBmb3JtYXRQZXJjZW50YWdlKHJlcG9ydC5zYXZpbmdzUmF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFJlcG9ydCgpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0ID0gdGhpcy5fcmVwb3J0U2VydmljZS5nZW5lcmF0ZUZpbmFuY2lhbEhlYWx0aFJlcG9ydCgpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdtb250aGx5UmVwb3J0cycsIHRoaXMubW9udGhseVJlcG9ydHMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvblR5cGUsIFRyYW5zYWN0aW9uQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQWRkVHJhbnNhY3Rpb25WaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkVHJhbnNhY3Rpb25WaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfYW1vdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYXRlZ29yaWVzOiBUcmFuc2FjdGlvbkNhdGVnb3J5W10gPSBbXTtcbiAgICBwcml2YXRlIF9pc0luY29tZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF90cmFuc2FjdGlvblNlcnZpY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ1RyYW5zYWN0aW9uPzogVHJhbnNhY3Rpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihpc0luY29tZTogYm9vbGVhbiwgZXhpc3RpbmdUcmFuc2FjdGlvbj86IFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2lzSW5jb21lID0gaXNJbmNvbWU7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nVHJhbnNhY3Rpb24gPSBleGlzdGluZ1RyYW5zYWN0aW9uO1xuICAgICAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UgPSBUcmFuc2FjdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcyA9IHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1RyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVXaXRoRXhpc3RpbmdUcmFuc2FjdGlvbihleGlzdGluZ1RyYW5zYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbikge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9hbW91bnQgPSBOdW1iZXIodHJhbnNhY3Rpb24uYW1vdW50KTtcbiAgICAgICAgdGhpcy5fZGF0ZSA9IG5ldyBEYXRlKHRyYW5zYWN0aW9uLmRhdGUpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggPSB0aGlzLl9jYXRlZ29yaWVzLmluZGV4T2YodHJhbnNhY3Rpb24uY2F0ZWdvcnkpO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247IH1cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fZGVzY3JpcHRpb24gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnZGVzY3JpcHRpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgYW1vdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9hbW91bnQ7IH1cbiAgICBzZXQgYW1vdW50KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIHRoaXMuX2Ftb3VudCAhPT0gbnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hbW91bnQgPSBudW1lcmljVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdhbW91bnQnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRhdGUoKTogRGF0ZSB7IHJldHVybiB0aGlzLl9kYXRlOyB9XG4gICAgc2V0IGRhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2RhdGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kYXRlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkYXRlJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGNhdGVnb3JpZXMoKTogVHJhbnNhY3Rpb25DYXRlZ29yeVtdIHsgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXM7IH1cbiAgICBnZXQgc2VsZWN0ZWRDYXRlZ29yeUluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXg7IH1cbiAgICBzZXQgc2VsZWN0ZWRDYXRlZ29yeUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRDYXRlZ29yeUluZGV4JywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGlzSW5jb21lKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNJbmNvbWU7IH1cblxuICAgIHByaXZhdGUgZ2V0Q2F0ZWdvcmllcygpOiBUcmFuc2FjdGlvbkNhdGVnb3J5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNJbmNvbWUgXG4gICAgICAgICAgICA/IFsnU2FsYXJ5JywgJ1JlYWwgRXN0YXRlJywgJ0J1c2luZXNzJywgJ0ludGVyZXN0L0RpdmlkZW5kcyddXG4gICAgICAgICAgICA6IFsnSG91c2luZycsICdUcmFuc3BvcnRhdGlvbicsICdGb29kJywgJ1V0aWxpdGllcycsICdJbnN1cmFuY2UnLCAnSGVhbHRoY2FyZScsICdFbnRlcnRhaW5tZW50JywgJ0xvYW4nXTtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nVHJhbnNhY3Rpb24gJiYgeyBpZDogdGhpcy5fZXhpc3RpbmdUcmFuc2FjdGlvbi5pZCB9KSxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLl9pc0luY29tZSA/ICdpbmNvbWUnIDogJ2V4cGVuc2UnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLl9jYXRlZ29yaWVzW3RoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleF0sXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLl9hbW91bnQsXG4gICAgICAgICAgICAgICAgZGF0ZTogdGhpcy5fZGF0ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5fZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZXhpc3RpbmdUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS51cGRhdGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSB1cGRhdGVkICR7dGhpcy5faXNJbmNvbWUgPyAnaW5jb21lJyA6ICdleHBlbnNlJ30gdHJhbnNhY3Rpb25gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IGFkZGVkICR7dGhpcy5faXNJbmNvbWUgPyAnaW5jb21lJyA6ICdleHBlbnNlJ30gdHJhbnNhY3Rpb25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBzYXZpbmcgdHJhbnNhY3Rpb24nLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXREYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZywgQ29uZmlybURpYWxvZ09wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9kaWFsb2cnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ1RyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbkxpc3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF90cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10gPSBbXTtcbiAgICBwcml2YXRlIF9maWx0ZXJUeXBlOiAnaW5jb21lJyB8ICdleHBlbnNlJyB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF90cmFuc2FjdGlvblNlcnZpY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKGZpbHRlclR5cGU/OiAnaW5jb21lJyB8ICdleHBlbnNlJykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9maWx0ZXJUeXBlID0gZmlsdGVyVHlwZTtcbiAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlID0gVHJhbnNhY3Rpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubG9hZFRyYW5zYWN0aW9ucygpO1xuICAgIH1cblxuICAgIGdldCBmaWx0ZXJUeXBlKCk6ICdpbmNvbWUnIHwgJ2V4cGVuc2UnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQW1vdW50Rm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5fZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgXG4gICAgICAgICAgICA/IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5nZXRUb3RhbEluY29tZSgpXG4gICAgICAgICAgICA6IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5nZXRUb3RhbEV4cGVuc2VzKCk7XG4gICAgICAgIHJldHVybiBgVG90YWwgJHt0aGlzLl9maWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdJbmNvbWUnIDogJ0V4cGVuc2VzJ306ICR7Zm9ybWF0Q3VycmVuY3kodG90YWwpfWA7XG4gICAgfVxuXG4gICAgZ2V0IHRyYW5zYWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkVHJhbnNhY3Rpb25zID0gWy4uLnRoaXMuX3RyYW5zYWN0aW9uc107XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fZmlsdGVyVHlwZSkge1xuICAgICAgICAgICAgZmlsdGVyZWRUcmFuc2FjdGlvbnMgPSBmaWx0ZXJlZFRyYW5zYWN0aW9ucy5maWx0ZXIodCA9PiB0LnR5cGUgPT09IHRoaXMuX2ZpbHRlclR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkVHJhbnNhY3Rpb25zLm1hcCh0cmFuc2FjdGlvbiA9PiAoe1xuICAgICAgICAgICAgLi4udHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBmb3JtYXR0ZWRBbW91bnQ6IGZvcm1hdEN1cnJlbmN5KHRyYW5zYWN0aW9uLmFtb3VudCksXG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBmb3JtYXREYXRlKHRyYW5zYWN0aW9uLmRhdGUpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvbkFkZFRyYW5zYWN0aW9uKCkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlJywgeyBcbiAgICAgICAgICAgIGlzSW5jb21lOiB0aGlzLl9maWx0ZXJUeXBlID09PSAnaW5jb21lJyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IHsgaW5kZXg6IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5fdHJhbnNhY3Rpb25zW2FyZ3MuaW5kZXhdO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBBbW91bnQ6ICR7Zm9ybWF0Q3VycmVuY3kodHJhbnNhY3Rpb24uYW1vdW50KX1cXG5EYXRlOiAke2Zvcm1hdERhdGUodHJhbnNhY3Rpb24uZGF0ZSl9YCxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAnZWRpdCcsIHRleHQ6ICdFZGl0JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdkZWxldGUnLCB0ZXh0OiAnRGVsZXRlJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRUcmFuc2FjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9ucyA9IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5nZXRUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndHJhbnNhY3Rpb25zJywgdGhpcy50cmFuc2FjdGlvbnMpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbEFtb3VudEZvcm1hdHRlZCcsIHRoaXMudG90YWxBbW91bnRGb3JtYXR0ZWQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbikge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlJywgeyBcbiAgICAgICAgICAgIGlzSW5jb21lOiB0cmFuc2FjdGlvbi50eXBlID09PSAnaW5jb21lJyxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbikge1xuICAgICAgICBjb25zdCBkaWFsb2dPcHRpb25zOiBDb25maXJtRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0cmFuc2FjdGlvbj8nLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH07XG5cbiAgICAgICAgc2hvd0RpYWxvZyhkaWFsb2dPcHRpb25zKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmRlbGV0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQWRkQXNzZXRWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9hc3NldHMvYWRkLWFzc2V0LXZpZXctbW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBZGRBc3NldFZpZXdNb2RlbCgpO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQXNzZXRMaXN0Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvYXNzZXRzL2Fzc2V0LWxpc3Qtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQXNzZXRMaXN0UGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIEFzc2V0IExpc3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBc3NldExpc3RWaWV3TW9kZWwoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBZGRMaWFiaWxpdHlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXZpZXctbW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBZGRMaWFiaWxpdHlWaWV3TW9kZWwoKTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IExpYWJpbGl0eUxpc3RWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdMaWFiaWxpdHlMaXN0UGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIExpYWJpbGl0eSBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgTGlhYmlsaXR5TGlzdFZpZXdNb2RlbCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZFRyYW5zYWN0aW9uVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5cbmNvbnN0IFRBRyA9ICdBZGRUcmFuc2FjdGlvblBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBBZGQgVHJhbnNhY3Rpb24gcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBpc0luY29tZSA9IGFyZ3MuY29udGV4dD8uaXNJbmNvbWUgPz8gZmFsc2U7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhcmdzLmNvbnRleHQ/LnRyYW5zYWN0aW9uIGFzIFRyYW5zYWN0aW9uIHwgdW5kZWZpbmVkO1xuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkVHJhbnNhY3Rpb25WaWV3TW9kZWwoaXNJbmNvbWUsIHRyYW5zYWN0aW9uKTtcbiAgICBcbiAgICAvLyBTZXQgdGhlIEFjdGlvbkJhciB0aXRsZSBiYXNlZCBvbiB3aGV0aGVyIHdlJ3JlIGVkaXRpbmcgb3IgYWRkaW5nXG4gICAgY29uc3QgYWN0aW9uID0gdHJhbnNhY3Rpb24gPyAnRWRpdCcgOiAnQWRkJztcbiAgICBjb25zdCB0eXBlID0gaXNJbmNvbWUgPyAnSW5jb21lJyA6ICdFeHBlbnNlJztcbiAgICBwYWdlLmFjdGlvbkJhci50aXRsZSA9IGAke2FjdGlvbn0gJHt0eXBlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nRnJvbShhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgZnJvbSBBZGQgVHJhbnNhY3Rpb24gcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbnVsbDtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ1RyYW5zYWN0aW9uTGlzdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBUcmFuc2FjdGlvbiBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgZmlsdGVyVHlwZSA9IGFyZ3MuY29udGV4dD8uZmlsdGVyVHlwZTtcbiAgICBcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBUcmFuc2FjdGlvbkxpc3RWaWV3TW9kZWwoZmlsdGVyVHlwZSk7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBBY3Rpb25CYXIgdGl0bGUgYmFzZWQgb24gdGhlIGZpbHRlciB0eXBlXG4gICAgcGFnZS5hY3Rpb25CYXIudGl0bGUgPSBmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdJbmNvbWUnIDogJ0V4cGVuc2VzJztcbn0iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwibWFpbi1wYWdlXFxcIj5cXG48L0ZyYW1lPlxcblwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJQZXJzb25hbCBGaW5hbmNlIE1hbmFnZXJcXFwiIC8+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8IS0tIERhc2hib2FyZCBPdmVydmlldyAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLWJsdWUtMTAwIHAtNCByb3VuZGVkLWxnIG1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jaWFsIE92ZXJ2aWV3XFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk5ldCBXb3J0aDpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuZXRXb3J0aEZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJNb250aGx5IENhc2hmbG93OlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGNhc2hmbG93Rm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodCBmb250LWJvbGRcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIE1haW4gTmF2aWdhdGlvbiAtLT5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSU5DT01FXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGVUb0luY29tZVxcXCIgY2xhc3M9XFxcIm0tMSBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiRVhQRU5TRVxcXCIgdGFwPVxcXCJvbk5hdmlnYXRlVG9FeHBlbnNlXFxcIiBjbGFzcz1cXFwibS0xIGJnLXJlZC01MDAgdGV4dC13aGl0ZVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQVNTRVRTXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGVUb0Fzc2V0c1xcXCIgY2xhc3M9XFxcIm0tMSBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJMSUFCSUxJVElFU1xcXCIgdGFwPVxcXCJvbk5hdmlnYXRlVG9MaWFiaWxpdGllc1xcXCIgY2xhc3M9XFxcIm0tMSBiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGVcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIE1vbnRobHkgU3VtbWFyeSAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLWdyYXktMTAwIHAtNCByb3VuZGVkLWxnXFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgU3VtbWFyeVxcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTJcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosICpcXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJJbmNvbWU6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbW9udGhseUluY29tZUZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgdGV4dC1ncmVlbi02MDAgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJFeHBlbnNlczpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBtb250aGx5RXhwZW5zZXNGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IHRleHQtcmVkLTYwMCBmb250LWJvbGRcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkFkZCBBc3NldFxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJBc3NldCBOYW1lXFxcIiB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBjbGFzcz1cXFwibWItNCBwLTIgYm9yZGVyIHJvdW5kZWRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFRleHRGaWVsZCBcXG4gICAgICAgICAgICAgICAgaGludD1cXFwiVmFsdWVcXFwiIFxcbiAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyB2YWx1ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIiBcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgcC0yIGJvcmRlciByb3VuZGVkXFxcIiAvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDYXRlZ29yeVxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IGNhdGVnb3JpZXMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRDYXRlZ29yeUluZGV4IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgcC0yIGJvcmRlciByb3VuZGVkXFxcIiAvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxEYXRlUGlja2VyIGRhdGU9XFxcInt7IHB1cmNoYXNlRGF0ZSB9fVxcXCIgY2xhc3M9XFxcIm1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTYXZlXFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgY2xhc3M9XFxcInAtNCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGdcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJBc3NldHNcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG8sICpcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdUb3RhbCBBc3NldHM6ICcgKyB0b3RhbEFzc2V0c0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInAtNCB0ZXh0LWxnIGZvbnQtYm9sZCBiZy1ibHVlLTEwMFxcXCIgcm93PVxcXCIwXFxcIiAvPlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tIEFkZCBCdXR0b24gLS0+XFxuICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFkZCBBc3NldFxcXCIgdGFwPVxcXCJ7eyBvbkFkZEFzc2V0IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcIm0tMiBwLTQgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXFxcIiByb3c9XFxcIjFcXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgYXNzZXRzIH19XFxcIiByb3c9XFxcIjJcXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCI+XFxuICAgICAgICAgICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkVmFsdWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodCB0ZXh0LWJsdWUtNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGNhdGVnb3J5IH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWREYXRlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJBZGQgTGlhYmlsaXR5XFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkxpYWJpbGl0eSBOYW1lXFxcIiB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBjbGFzcz1cXFwibWItNCBwLTIgYm9yZGVyIHJvdW5kZWRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFRleHRGaWVsZCBcXG4gICAgICAgICAgICAgICAgaGludD1cXFwiQW1vdW50XFxcIiBcXG4gICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgYW1vdW50IH19XFxcIiBcXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCBwLTIgYm9yZGVyIHJvdW5kZWRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFRleHRGaWVsZCBcXG4gICAgICAgICAgICAgICAgaGludD1cXFwiSW50ZXJlc3QgUmF0ZSAoJSlcXFwiIFxcbiAgICAgICAgICAgICAgICB0ZXh0PVxcXCJ7eyBpbnRlcmVzdFJhdGUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtYi00IHAtMiBib3JkZXIgcm91bmRlZFxcXCIgLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVHlwZVxcXCIgY2xhc3M9XFxcIm1iLTJcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IHR5cGVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkVHlwZUluZGV4IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm1iLTQgcC0yIGJvcmRlciByb3VuZGVkXFxcIiAvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxEYXRlUGlja2VyIGRhdGU9XFxcInt7IGR1ZURhdGUgfX1cXFwiIGNsYXNzPVxcXCJtYi00XFxcIiAvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2F2ZVxcXCIgdGFwPVxcXCJ7eyBvblNhdmUgfX1cXFwiIGNsYXNzPVxcXCJwLTQgYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGdcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJMaWFiaWxpdGllc1xcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgKlxcXCI+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ1RvdGFsIExpYWJpbGl0aWVzOiAnICsgdG90YWxMaWFiaWxpdGllc0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInAtNCB0ZXh0LWxnIGZvbnQtYm9sZCBiZy1wdXJwbGUtMTAwXFxcIiByb3c9XFxcIjBcXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gQWRkIEJ1dHRvbiAtLT5cXG4gICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQWRkIExpYWJpbGl0eVxcXCIgdGFwPVxcXCJ7eyBvbkFkZExpYWJpbGl0eSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtLTIgcC00IGJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnXFxcIiByb3c9XFxcIjFcXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgbGlhYmlsaXRpZXMgfX1cXFwiIHJvdz1cXFwiMlxcXCIgaXRlbVRhcD1cXFwie3sgb25JdGVtVGFwIH19XFxcIj5cXG4gICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRBbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodCB0ZXh0LXJlZC02MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdHlwZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkSW50ZXJlc3RSYXRlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJGaW5hbmNpYWwgSGVhbHRoXFxcIiAvPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPCEtLSBPdmVydmlldyBTZWN0aW9uIC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctYmx1ZS0xMDAgcC00IHJvdW5kZWQtbGcgbWItNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGaW5hbmNpYWwgT3ZlcnZpZXdcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJOZXQgV29ydGg6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmV0V29ydGhGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJNb250aGx5IENhc2hmbG93OlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG1vbnRobHlDYXNoZmxvd0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkRlYnQtdG8tSW5jb21lOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRlYnRUb0luY29tZVJhdGlvRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodCBmb250LWJvbGRcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIE1vbnRobHkgUmVwb3J0cyAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTW9udGhseSBSZXBvcnRzXFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItMlxcXCIgLz5cXG4gICAgICAgICAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IG1vbnRobHlSZXBvcnRzIH19XFxcIiBoZWlnaHQ9XFxcIjMwMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbW9udGhZZWFyIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgc2F2aW5nc1JhdGVGb3JtYXR0ZWQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ0luY29tZTogJyArIGluY29tZUZvcm1hdHRlZCB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdFeHBlbnNlczogJyArIGV4cGVuc2VzRm9ybWF0dGVkIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJwLTQgYm9yZGVyLWJcXFwiPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRBbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgLz5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IHN1YnRpdGxlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbVxcXCIgLz5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IGRldGFpbHMgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuPC9HcmlkTGF5b3V0PlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIlxcbiAgICBuYXZpZ2F0aW5nRnJvbT1cXFwibmF2aWdhdGluZ0Zyb21cXFwiPlxcbiAgICA8QWN0aW9uQmFyPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRGVzY3JpcHRpb25cXFwiIHRleHQ9XFxcInt7IGRlc2NyaXB0aW9uIH19XFxcIiBjbGFzcz1cXFwibWItNCBwLTIgYm9yZGVyIHJvdW5kZWRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFRleHRGaWVsZCBcXG4gICAgICAgICAgICAgICAgaGludD1cXFwiQW1vdW50XFxcIiBcXG4gICAgICAgICAgICAgICAgdGV4dD1cXFwie3sgYW1vdW50IH19XFxcIiBcXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCBwLTIgYm9yZGVyIHJvdW5kZWRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNhdGVnb3J5XFxcIiBjbGFzcz1cXFwibWItMlxcXCIgLz5cXG4gICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgY2F0ZWdvcmllcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZENhdGVnb3J5SW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItNCBwLTIgYm9yZGVyIHJvdW5kZWRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPERhdGVQaWNrZXIgZGF0ZT1cXFwie3sgZGF0ZSB9fVxcXCIgY2xhc3M9XFxcIm1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTYXZlXFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgJ3AtNCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgJyArIChpc0luY29tZSA/ICdiZy1ncmVlbi01MDAnIDogJ2JnLXJlZC01MDAnKSB9fVxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgKlxcXCI+XFxuICAgICAgICA8IS0tIFRvdGFsIFNlY3Rpb24gLS0+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxBbW91bnRGb3JtYXR0ZWQgfX1cXFwiIFxcbiAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdwLTQgdGV4dC1sZyBmb250LWJvbGQgYmctZ3JlZW4tMTAwJyA6ICdwLTQgdGV4dC1sZyBmb250LWJvbGQgYmctcmVkLTEwMCcgfX1cXFwiIFxcbiAgICAgICAgICAgICAgIHJvdz1cXFwiMFxcXCIgLz5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBBZGQgQnV0dG9uIC0tPlxcbiAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJ7eyAnQWRkICcgKyAoZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnSW5jb21lJyA6ICdFeHBlbnNlJykgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICB0YXA9XFxcInt7IG9uQWRkVHJhbnNhY3Rpb24gfX1cXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnbS0yIHAtNCBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnJyA6ICdtLTIgcC00IGJnLXJlZC01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnJyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIHJvdz1cXFwiMVxcXCIgLz5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBUcmFuc2FjdGlvbnMgTGlzdCAtLT5cXG4gICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgdHJhbnNhY3Rpb25zIH19XFxcIiByb3c9XFxcIjJcXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCI+XFxuICAgICAgICAgICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZGVzY3JpcHRpb24gfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZEFtb3VudCB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IHt7IHR5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LXJlZC02MDAnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGNhdGVnb3J5IH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWREYXRlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==