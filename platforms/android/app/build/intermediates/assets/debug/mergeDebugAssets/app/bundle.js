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
	"./components/assets/asset-distribution-chart.xml": "./app/components/assets/asset-distribution-chart.xml",
	"./components/charts/donut-chart.ts": "./app/components/charts/donut-chart.ts",
	"./components/charts/index.ts": "./app/components/charts/index.ts",
	"./components/ui/card.xml": "./app/components/ui/card.xml",
	"./components/ui/list-item.xml": "./app/components/ui/list-item.xml",
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
	"./utils/chart-colors.ts": "./app/utils/chart-colors.ts",
	"./utils/dialog.ts": "./app/utils/dialog.ts",
	"./utils/financial-calculations.ts": "./app/utils/financial-calculations.ts",
	"./utils/formatters.ts": "./app/utils/formatters.ts",
	"./utils/ios-color-extension.ts": "./app/utils/ios-color-extension.ts",
	"./utils/logger.ts": "./app/utils/logger.ts",
	"./utils/navigation.ts": "./app/utils/navigation.ts",
	"./view-models/assets/add-asset-view-model.ts": "./app/view-models/assets/add-asset-view-model.ts",
	"./view-models/assets/asset-distribution-view-model.ts": "./app/view-models/assets/asset-distribution-view-model.ts",
	"./view-models/assets/asset-list-view-model.ts": "./app/view-models/assets/asset-list-view-model.ts",
	"./view-models/base-view-model.ts": "./app/view-models/base-view-model.ts",
	"./view-models/dashboard-view-model.ts": "./app/view-models/dashboard-view-model.ts",
	"./view-models/liabilities/add-liability-view-model.ts": "./app/view-models/liabilities/add-liability-view-model.ts",
	"./view-models/liabilities/liability-distribution-view-model.ts": "./app/view-models/liabilities/liability-distribution-view-model.ts",
	"./view-models/liabilities/liability-list-view-model.ts": "./app/view-models/liabilities/liability-list-view-model.ts",
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
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@nativescript/core/application/application.android.js");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/utils/logger.ts");
// Added by app-css-loader



const TAG = 'App';
try {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.debug(TAG, 'Starting application initialization');
    _nativescript_core__WEBPACK_IMPORTED_MODULE_2__.Application.run({ moduleName: 'app-root' });
}
catch (error) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_1__.Logger.error(TAG, 'Failed to initialize application', error);
    throw error;
}


/***/ }),

/***/ "./app/app.css":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".m-1"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".m-2"],"declarations":[{"type":"declaration","property":"margin","value":"8"}]},{"type":"rule","selectors":[".m-4"],"declarations":[{"type":"declaration","property":"margin","value":"16"}]},{"type":"rule","selectors":[".mx-4"],"declarations":[{"type":"declaration","property":"margin-left","value":"16"},{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":[".mb-1"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mr-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".rounded-xl"],"declarations":[{"type":"declaration","property":"border-radius","value":"12"}]},{"type":"rule","selectors":[".border-b"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1px"}]},{"type":"rule","selectors":[".bg-blue-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(219 234 254 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-blue-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(59 130 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-blue-600"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(37 99 235 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-gray-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(243 244 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-green-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(34 197 94 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-purple-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(168 85 247 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-red-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(239 68 68 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".p-6"],"declarations":[{"type":"declaration","property":"padding","value":"24"}]},{"type":"rule","selectors":[".text-right"],"declarations":[{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-lg"],"declarations":[{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-sm"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"line-height","value":"20"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".font-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"700"}]},{"type":"rule","selectors":[".font-medium"],"declarations":[{"type":"declaration","property":"font-weight","value":"500"}]},{"type":"rule","selectors":[".uppercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".text-blue-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(37 99 235 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(75 85 99 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-700"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(55 65 81 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-800"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(31 41 55 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-green-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(22 163 74 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-purple-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(147 51 234 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-red-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(220 38 38 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"#2563eb"},{"type":"declaration","property":"color","value":"#ffffff"}]},{"type":"rule","selectors":["Button"],"declarations":[{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".card"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffffff"},{"type":"declaration","property":"border-radius","value":"12"},{"type":"declaration","property":"margin","value":"8"},{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".list-view"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["Progress"],"declarations":[{"type":"declaration","property":"height","value":"8"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".input-field"],"declarations":[{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"margin","value":"8 0"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e2e8f0"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"background-color","value":"#f8fafc"}]},{"type":"rule","selectors":[".form-label"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"color","value":"#64748b"},{"type":"declaration","property":"margin-bottom","value":"4"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "D:\\Dev\\Personal-Finance-Manager-PFM\\app\\app.css")


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

/***/ "./app/utils/ios-color-extension.ts":
/***/ (() => {

// @ts-ignore
if (false) {}


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
            formattedValue: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatCurrency)(asset.value),
            formattedDate: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatDate)(asset.purchaseDate)
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
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/transaction-service.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/asset-service.ts");
/* harmony import */ var _services_liability_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/liability-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/utils/formatters.ts");





const TAG = 'DashboardViewModel';
class DashboardViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_4__.Observable {
    constructor() {
        super();
        this._netWorth = 0;
        this._totalIncome = 0;
        this._totalExpenses = 0;
        this._totalAssets = 0;
        this._totalLiabilities = 0;
        this._cashflow = 0;
        this.transactionService = _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService.getInstance();
        this.assetService = _services_asset_service__WEBPACK_IMPORTED_MODULE_1__.AssetService.getInstance();
        this.liabilityService = _services_liability_service__WEBPACK_IMPORTED_MODULE_2__.LiabilityService.getInstance();
        this.calculateFinancials();
    }
    get netWorthFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._netWorth);
    }
    get totalIncomeFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._totalIncome);
    }
    get totalExpensesFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._totalExpenses);
    }
    get totalAssetsFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._totalAssets);
    }
    get totalLiabilitiesFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._totalLiabilities);
    }
    get cashflowFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_3__.formatCurrency)(this._cashflow);
    }
    get cashflow() {
        return this._cashflow;
    }
    calculateFinancials() {
        // Calculate totals
        this._totalAssets = this.assetService.getTotalAssetValue();
        this._totalLiabilities = this.liabilityService.getTotalLiabilities();
        this._totalIncome = this.transactionService.getTotalIncome();
        this._totalExpenses = this.transactionService.getTotalExpenses();
        // Calculate net worth
        this._netWorth = this._totalAssets - this._totalLiabilities;
        // Calculate monthly cashflow
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const monthlyTransactions = this.transactionService.getMonthlyTransactions(currentMonth, currentYear);
        const monthlyIncome = monthlyTransactions
            .filter(t => t.type === 'income')
            .reduce((sum, t) => sum + t.amount, 0);
        const monthlyExpenses = monthlyTransactions
            .filter(t => t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0);
        this._cashflow = monthlyIncome - monthlyExpenses;
        // Notify property changes
        this.notifyPropertyChange('netWorthFormatted', this.netWorthFormatted);
        this.notifyPropertyChange('totalIncomeFormatted', this.totalIncomeFormatted);
        this.notifyPropertyChange('totalExpensesFormatted', this.totalExpensesFormatted);
        this.notifyPropertyChange('totalAssetsFormatted', this.totalAssetsFormatted);
        this.notifyPropertyChange('totalLiabilitiesFormatted', this.totalLiabilitiesFormatted);
        this.notifyPropertyChange('cashflowFormatted', this.cashflowFormatted);
        this.notifyPropertyChange('cashflow', this.cashflow);
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
            color: type === 'Short-term' ? _utils_chart_colors__WEBPACK_IMPORTED_MODULE_0__.ChartColors.ShortTerm : _utils_chart_colors__WEBPACK_IMPORTED_MODULE_0__.ChartColors.LongTerm,
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
            formattedDate: (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_2__.formatDate)(transaction.date)
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Frame defaultPage=\"main-page\">\n</Frame>\n"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar title=\"Personal Finance Manager\" class=\"bg-blue-600\">\n        <Label text=\"Finance Manager\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView>\n        <StackLayout class=\"bg-gray-100\">\n            <!-- Net Worth Card -->\n            <GridLayout rows=\"auto, auto\" class=\"bg-white m-4 p-6 rounded-xl elevation-4\">\n                <Label text=\"Net Worth\" class=\"text-gray-600 text-sm mb-1\" row=\"0\" />\n                <Label text=\"{{ netWorthFormatted }}\" class=\"text-2xl font-bold\" row=\"1\" />\n            </GridLayout>\n\n            <!-- Quick Actions -->\n            <GridLayout columns=\"*, *\" rows=\"auto, auto\" class=\"mx-4 mb-4\">\n                <!-- Income & Expense Row -->\n                <Button text=\"INCOME\" tap=\"onNavigateToIncome\" \n                        class=\"bg-green-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"0\" col=\"0\" />\n                <Button text=\"EXPENSE\" tap=\"onNavigateToExpense\" \n                        class=\"bg-red-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"0\" col=\"1\" />\n                \n                <!-- Assets & Liabilities Row -->\n                <Button text=\"ASSETS\" tap=\"onNavigateToAssets\" \n                        class=\"bg-blue-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"1\" col=\"0\" />\n                <Button text=\"LIABILITIES\" tap=\"onNavigateToLiabilities\" \n                        class=\"bg-purple-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"1\" col=\"1\" />\n            </GridLayout>\n\n            <!-- Financial Summary Card -->\n            <StackLayout class=\"bg-white m-4 p-6 rounded-xl elevation-4\">\n                <Label text=\"Financial Summary\" class=\"text-xl font-bold mb-4\" />\n                \n                <!-- Monthly Cashflow -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Monthly Cashflow:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ cashflowFormatted }}\" \n                           class=\"{{ cashflow >= 0 ? 'text-green-600' : 'text-red-600' }} text-right font-bold\" \n                           row=\"0\" col=\"1\" />\n                </GridLayout>\n\n                <!-- Total Income -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Total Income:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ totalIncomeFormatted }}\" class=\"text-green-600 text-right font-bold\" row=\"0\" col=\"1\" />\n                </GridLayout>\n\n                <!-- Total Expenses -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Total Expenses:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ totalExpensesFormatted }}\" class=\"text-red-600 text-right font-bold\" row=\"0\" col=\"1\" />\n                </GridLayout>\n\n                <!-- Total Assets -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Total Assets:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ totalAssetsFormatted }}\" class=\"text-blue-600 text-right font-bold\" row=\"0\" col=\"1\" />\n                </GridLayout>\n\n                <!-- Total Liabilities -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Total Liabilities:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ totalLiabilitiesFormatted }}\" class=\"text-purple-600 text-right font-bold\" row=\"0\" col=\"1\" />\n                </GridLayout>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Add Asset\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout class=\"p-4\">\n            <StackLayout class=\"bg-white p-6 rounded-xl elevation-4\">\n                <!-- Name Field -->\n                <Label text=\"Asset Name\" class=\"form-label\" />\n                <TextField hint=\"Enter name\" text=\"{{ name }}\" \n                          class=\"input-field\" />\n                \n                <!-- Value Field -->\n                <Label text=\"Value\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter value\" text=\"{{ value }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Category Selection -->\n                <Label text=\"Category\" class=\"form-label mt-4\" />\n                <ListPicker items=\"{{ categories }}\" \n                           selectedIndex=\"{{ selectedCategoryIndex }}\"\n                           class=\"input-field\" />\n                \n                <!-- Purchase Date -->\n                <Label text=\"Purchase Date\" class=\"form-label mt-4\" />\n                <DatePicker date=\"{{ purchaseDate }}\" class=\"input-field\" />\n            </StackLayout>\n            \n            <!-- Save Button -->\n            <Button text=\"Save Asset\" tap=\"{{ onSave }}\" \n                    class=\"bg-blue-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatedTo=\"navigatedTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Assets\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout>\n            <!-- Total Assets Card -->\n            <StackLayout class=\"bg-blue-500 m-4 p-6 rounded-xl elevation-4\">\n                <Label text=\"Total Assets\" class=\"text-white text-sm mb-1\" />\n                <Label text=\"{{ totalAssetsFormatted }}\" class=\"text-white text-2xl font-bold\" />\n            </StackLayout>\n            \n            <!-- Asset Distribution -->\n            <StackLayout class=\"bg-white m-4 p-4 rounded-xl elevation-4\">\n                <Label text=\"Asset Distribution\" class=\"text-xl font-bold mb-4\" />\n                <Repeater items=\"{{ distributionViewModel.chartData }}\">\n                    <Repeater.itemTemplate>\n                        <StackLayout class=\"m-2\">\n                            <GridLayout columns=\"auto, *, auto\" class=\"mb-1\">\n                                <Label col=\"0\" text=\"●\" color=\"{{ color }}\" class=\"mr-2\" />\n                                <Label col=\"1\" text=\"{{ label }}\" class=\"text-gray-700\" />\n                                <Label col=\"2\" text=\"{{ percentage + '%' }}\" class=\"text-gray-600\" />\n                            </GridLayout>\n                            <Progress value=\"{{ percentage }}\" maxValue=\"100\" \n                                     color=\"{{ color }}\" class=\"m-1\" />\n                        </StackLayout>\n                    </Repeater.itemTemplate>\n                </Repeater>\n            </StackLayout>\n            \n            <!-- Add Asset Button -->\n            <Button text=\"Add Asset\" tap=\"{{ onAddAsset }}\" \n                    class=\"bg-blue-500 text-white font-medium p-4 mx-4 rounded-xl elevation-2\" />\n            \n            <!-- Asset List -->\n            <StackLayout class=\"bg-white m-4 rounded-xl elevation-4\">\n                <Label text=\"Asset List\" class=\"p-4 text-xl font-bold\" />\n                <ListView items=\"{{ assets }}\" itemTap=\"{{ onItemTap }}\" height=\"400\" class=\"list-view\">\n                    <ListView.itemTemplate>\n                        <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                            <Label text=\"{{ name }}\" row=\"0\" col=\"0\" class=\"font-bold text-gray-800\" />\n                            <Label text=\"{{ formattedValue }}\" row=\"0\" col=\"1\" class=\"text-blue-600 font-bold text-right\" />\n                            <Label text=\"{{ category }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                            <Label text=\"{{ formattedDate }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n                        </GridLayout>\n                    </ListView.itemTemplate>\n                </ListView>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Add Liability\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout class=\"p-4\">\n            <StackLayout class=\"bg-white p-6 rounded-xl elevation-4\">\n                <!-- Name Field -->\n                <Label text=\"Liability Name\" class=\"form-label\" />\n                <TextField hint=\"Enter name\" text=\"{{ name }}\" \n                          class=\"input-field\" />\n                \n                <!-- Amount Field -->\n                <Label text=\"Amount\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter amount\" text=\"{{ amount }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Interest Rate Field -->\n                <Label text=\"Interest Rate (%)\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter interest rate\" text=\"{{ interestRate }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Type Selection -->\n                <Label text=\"Type\" class=\"form-label mt-4\" />\n                <ListPicker items=\"{{ types }}\" \n                           selectedIndex=\"{{ selectedTypeIndex }}\"\n                           class=\"input-field\" />\n                \n                <!-- Due Date -->\n                <Label text=\"Due Date\" class=\"form-label mt-4\" />\n                <DatePicker date=\"{{ dueDate }}\" class=\"input-field\" />\n            </StackLayout>\n            \n            <!-- Save Button -->\n            <Button text=\"Save Liability\" tap=\"{{ onSave }}\" \n                    class=\"bg-purple-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatedTo=\"navigatedTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Liabilities\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout>\n            <!-- Total Liabilities Card -->\n            <StackLayout class=\"bg-purple-500 m-4 p-6 rounded-xl elevation-4\">\n                <Label text=\"Total Liabilities\" class=\"text-white text-sm mb-1\" />\n                <Label text=\"{{ totalLiabilitiesFormatted }}\" class=\"text-white text-2xl font-bold\" />\n            </StackLayout>\n            \n            <!-- Distribution Chart -->\n            <StackLayout class=\"bg-white m-4 p-4 rounded-xl elevation-4\">\n                <Label text=\"Liability Distribution\" class=\"text-xl font-bold mb-4\" />\n                <Repeater items=\"{{ distributionViewModel.chartData }}\">\n                    <Repeater.itemTemplate>\n                        <StackLayout class=\"m-2\">\n                            <GridLayout columns=\"auto, *, auto\" class=\"mb-1\">\n                                <Label col=\"0\" text=\"●\" color=\"{{ color }}\" class=\"mr-2\" />\n                                <Label col=\"1\" text=\"{{ label }}\" class=\"text-gray-700\" />\n                                <Label col=\"2\" text=\"{{ percentage + '%' }}\" class=\"text-gray-600\" />\n                            </GridLayout>\n                            <Progress value=\"{{ percentage }}\" maxValue=\"100\" \n                                     color=\"{{ color }}\" class=\"m-1\" />\n                        </StackLayout>\n                    </Repeater.itemTemplate>\n                </Repeater>\n            </StackLayout>\n            \n            <!-- Add Button -->\n            <Button text=\"Add Liability\" tap=\"{{ onAddLiability }}\" \n                    class=\"bg-purple-500 text-white font-medium p-4 mx-4 rounded-xl elevation-2\" />\n            \n            <!-- Liabilities List -->\n            <StackLayout class=\"bg-white m-4 rounded-xl elevation-4\">\n                <Label text=\"Liability List\" class=\"p-4 text-xl font-bold\" />\n                <ListView items=\"{{ liabilities }}\" itemTap=\"{{ onItemTap }}\" height=\"400\" class=\"list-view\">\n                    <ListView.itemTemplate>\n                        <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                            <Label text=\"{{ name }}\" row=\"0\" col=\"0\" class=\"font-bold text-gray-800\" />\n                            <Label text=\"{{ formattedAmount }}\" row=\"0\" col=\"1\" class=\"text-purple-600 font-bold text-right\" />\n                            <Label text=\"{{ type }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                            <Label text=\"{{ formattedInterestRate }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n                        </GridLayout>\n                    </ListView.itemTemplate>\n                </ListView>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatingFrom=\"navigatingFrom\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"{{ isIncome ? 'Add Income' : 'Add Expense' }}\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout class=\"p-4\">\n            <StackLayout class=\"bg-white p-6 rounded-xl elevation-4\">\n                <!-- Description Field -->\n                <Label text=\"Description\" class=\"form-label\" />\n                <TextField hint=\"Enter description\" text=\"{{ description }}\" \n                          class=\"input-field\" />\n                \n                <!-- Amount Field -->\n                <Label text=\"Amount\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter amount\" text=\"{{ amount }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Category Selection -->\n                <Label text=\"Category\" class=\"form-label mt-4\" />\n                <ListPicker items=\"{{ categories }}\" \n                           selectedIndex=\"{{ selectedCategoryIndex }}\"\n                           class=\"input-field\" />\n                \n                <!-- Date -->\n                <Label text=\"Date\" class=\"form-label mt-4\" />\n                <DatePicker date=\"{{ date }}\" class=\"input-field\" />\n            </StackLayout>\n            \n            <!-- Save Button -->\n            <Button text=\"{{ isIncome ? 'Save Income' : 'Save Expense' }}\" tap=\"{{ onSave }}\" \n                    class=\"{{ isIncome ? 'bg-green-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2' : 'bg-red-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2' }}\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatedTo=\"navigatedTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"{{ filterType === 'income' ? 'Income' : 'Expenses' }}\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout>\n            <!-- Summary Card -->\n            <StackLayout class=\"{{ filterType === 'income' ? 'bg-green-500 m-4 p-6 rounded-xl elevation-4' : 'bg-red-500 m-4 p-6 rounded-xl elevation-4' }}\">\n                <Label text=\"{{ filterType === 'income' ? 'Total Income' : 'Total Expenses' }}\" \n                       class=\"text-white text-sm mb-1\" />\n                <Label text=\"{{ totalAmountFormatted }}\" class=\"text-white text-2xl font-bold\" />\n            </StackLayout>\n            \n            <!-- Distribution Chart -->\n            <StackLayout class=\"bg-white m-4 p-4 rounded-xl elevation-4\">\n                <Label text=\"{{ filterType === 'income' ? 'Income Distribution' : 'Expense Distribution' }}\" \n                       class=\"text-xl font-bold mb-4\" />\n                \n                <Repeater items=\"{{ distributionViewModel.chartData }}\">\n                    <Repeater.itemTemplate>\n                        <StackLayout class=\"m-2\">\n                            <GridLayout columns=\"auto, *, auto\" class=\"mb-1\">\n                                <Label col=\"0\" text=\"●\" color=\"{{ color }}\" class=\"mr-2\" />\n                                <Label col=\"1\" text=\"{{ label }}\" class=\"text-gray-700\" />\n                                <Label col=\"2\" text=\"{{ percentage + '%' }}\" class=\"text-gray-600\" />\n                            </GridLayout>\n                            <Progress value=\"{{ percentage }}\" maxValue=\"100\" \n                                     color=\"{{ color }}\" class=\"m-1\" />\n                        </StackLayout>\n                    </Repeater.itemTemplate>\n                </Repeater>\n            </StackLayout>\n            \n            <!-- Action Button -->\n            <Button text=\"{{ 'Add ' + (filterType === 'income' ? 'Income' : 'Expense') }}\" \n                    tap=\"{{ onAddTransaction }}\" \n                    class=\"{{ filterType === 'income' ? 'bg-green-500 text-white font-medium p-4 mx-4 rounded-xl elevation-2' : 'bg-red-500 text-white font-medium p-4 mx-4 rounded-xl elevation-2' }}\" />\n            \n            <!-- Transactions List -->\n            <StackLayout class=\"bg-white m-4 rounded-xl elevation-4\">\n                <Label text=\"Transaction History\" class=\"p-4 text-xl font-bold\" />\n                <ListView items=\"{{ transactions }}\" itemTap=\"{{ onItemTap }}\" height=\"400\" class=\"list-view\">\n                    <ListView.itemTemplate>\n                        <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                            <Label text=\"{{ description }}\" row=\"0\" col=\"0\" class=\"font-bold text-gray-800\" />\n                            <Label text=\"{{ formattedAmount }}\" row=\"0\" col=\"1\" \n                                   class=\"{{ type === 'income' ? 'text-green-600' : 'text-red-600' }} font-bold text-right\" />\n                            <Label text=\"{{ category }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                            <Label text=\"{{ formattedDate }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n                        </GridLayout>\n                    </ListView.itemTemplate>\n                </ListView>\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztBQ0ZoRDtBQUNBLG1WQUFtVixTQUFTLGdDQUFnQyxrREFBa0QsNE1BQTRNLHdIQUF3SCxzQ0FBc0MsOERBQThELG1HQUFtRyx1QkFBdUIsZ1BBQWdQLDJFQUEyRSx3SEFBd0gsa0NBQWtDLGlRQUFpUSxRQUFRLGlGQUFpRixRQUFRLDBGQUEwRixtQkFBbUIsMkhBQTJILGFBQWEsc0VBQXNFLFFBQVEsb1BBQW9QLDREQUE0RCxrQ0FBa0MsbUJBQW1CLG9DQUFvQyx3S0FBd0ssbVFBQW1RLGVBQWUsZ0JBQWdCLFlBQVksdU9BQXVPLGNBQWMsMEdBQTBHLGtCQUFrQix1RUFBdUUseURBQXlELHdFQUF3RSxXQUFXLHdHQUF3RyxnQkFBZ0I7QUFDcm1ILGlFQUFlLGlDQUFpQzs7Ozs7Ozs7O0FDSGhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC8gc3luYyBcXC4oeG1sJTdDanMlN0MoIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2NvbXBvbmVudHMvY2hhcnRzL2RvbnV0LWNoYXJ0LnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvY29tcG9uZW50cy9jaGFydHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9jb25zdGFudHMvc3RvcmFnZS1rZXlzLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbWFpbi1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbWFpbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbW9kZWxzL2Fzc2V0LnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbW9kZWxzL2ZpbmFuY2lhbC1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9tb2RlbHMvbGlhYmlsaXR5LnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbW9kZWxzL3RyYW5zYWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvYXNzZXQtc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL2Jhc2Utc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvcmVwb3J0LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9zZXJ2aWNlcy9zdG9yYWdlLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdXRpbHMvY2hhcnQtY29sb3JzLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdXRpbHMvZGlhbG9nLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucy50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3V0aWxzL2Zvcm1hdHRlcnMudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC91dGlscy9pb3MtY29sb3ItZXh0ZW5zaW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdXRpbHMvbG9nZ2VyLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdXRpbHMvbmF2aWdhdGlvbi50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hZGQtYXNzZXQtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9iYXNlLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9kYXNoYm9hcmQtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9hcHAtcm9vdC54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9jb21wb25lbnRzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tY2hhcnQueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvY29tcG9uZW50cy91aS9jYXJkLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9zaGFyZWQvbGlzdC1pdGVtLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0L2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAvYXBwLnRzXCIsXG5cdFwiLi9jb21wb25lbnRzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tY2hhcnQueG1sXCI6IFwiLi9hcHAvY29tcG9uZW50cy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLWNoYXJ0LnhtbFwiLFxuXHRcIi4vY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQudHNcIjogXCIuL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydC50c1wiLFxuXHRcIi4vY29tcG9uZW50cy9jaGFydHMvaW5kZXgudHNcIjogXCIuL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9pbmRleC50c1wiLFxuXHRcIi4vY29tcG9uZW50cy91aS9jYXJkLnhtbFwiOiBcIi4vYXBwL2NvbXBvbmVudHMvdWkvY2FyZC54bWxcIixcblx0XCIuL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnhtbFwiOiBcIi4vYXBwL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnhtbFwiLFxuXHRcIi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cy50c1wiOiBcIi4vYXBwL2NvbnN0YW50cy9zdG9yYWdlLWtleXMudHNcIixcblx0XCIuL21haW4tcGFnZS50c1wiOiBcIi4vYXBwL21haW4tcGFnZS50c1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vYXBwL21haW4tcGFnZS54bWxcIixcblx0XCIuL21haW4tdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL21haW4tdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vbW9kZWxzL2Fzc2V0LnRzXCI6IFwiLi9hcHAvbW9kZWxzL2Fzc2V0LnRzXCIsXG5cdFwiLi9tb2RlbHMvZmluYW5jaWFsLXJlcG9ydC50c1wiOiBcIi4vYXBwL21vZGVscy9maW5hbmNpYWwtcmVwb3J0LnRzXCIsXG5cdFwiLi9tb2RlbHMvbGlhYmlsaXR5LnRzXCI6IFwiLi9hcHAvbW9kZWxzL2xpYWJpbGl0eS50c1wiLFxuXHRcIi4vbW9kZWxzL3RyYW5zYWN0aW9uLnRzXCI6IFwiLi9hcHAvbW9kZWxzL3RyYW5zYWN0aW9uLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYXNzZXQtc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9yZXBvcnQtc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3JlcG9ydC1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9zdG9yYWdlLXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9zdG9yYWdlLXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlLnRzXCIsXG5cdFwiLi91dGlscy9jaGFydC1jb2xvcnMudHNcIjogXCIuL2FwcC91dGlscy9jaGFydC1jb2xvcnMudHNcIixcblx0XCIuL3V0aWxzL2RpYWxvZy50c1wiOiBcIi4vYXBwL3V0aWxzL2RpYWxvZy50c1wiLFxuXHRcIi4vdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucy50c1wiOiBcIi4vYXBwL3V0aWxzL2ZpbmFuY2lhbC1jYWxjdWxhdGlvbnMudHNcIixcblx0XCIuL3V0aWxzL2Zvcm1hdHRlcnMudHNcIjogXCIuL2FwcC91dGlscy9mb3JtYXR0ZXJzLnRzXCIsXG5cdFwiLi91dGlscy9pb3MtY29sb3ItZXh0ZW5zaW9uLnRzXCI6IFwiLi9hcHAvdXRpbHMvaW9zLWNvbG9yLWV4dGVuc2lvbi50c1wiLFxuXHRcIi4vdXRpbHMvbG9nZ2VyLnRzXCI6IFwiLi9hcHAvdXRpbHMvbG9nZ2VyLnRzXCIsXG5cdFwiLi91dGlscy9uYXZpZ2F0aW9uLnRzXCI6IFwiLi9hcHAvdXRpbHMvbmF2aWdhdGlvbi50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtbGlzdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9iYXNlLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9iYXNlLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Rhc2hib2FyZC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3Mvc2hhcmVkL2xpc3QtaXRlbS54bWxcIjogXCIuL2FwcC92aWV3cy9zaGFyZWQvbGlzdC1pdGVtLnhtbFwiLFxuXHRcIi4vdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS54bWxcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hcHAgc3luYyByZWN1cnNpdmUgXFxcXC4oeG1sJTdDanMlN0MoPzwlMjFcXFxcLmRcXFxcLil0cyU3Q3M/Y3NzKSRcIjsiLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBcHAnO1xuXG50cnkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdGFydGluZyBhcHBsaWNhdGlvbiBpbml0aWFsaXphdGlvbicpO1xuICAgIEFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6ICdhcHAtcm9vdCcgfSk7XG59IGNhdGNoIChlcnJvcikge1xuICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBhcHBsaWNhdGlvbicsIGVycm9yIGFzIEVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbn0iLCIvKiBDU1MySlNPTiAqL1xuXG5jb25zdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIipcIixcIjo6YmVmb3JlXCIsXCI6OmFmdGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIjo6YmFja2Ryb3BcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5teC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tci0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tdC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yb3VuZGVkLXhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlci1iXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibHVlLTEwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIxOSAyMzQgMjU0IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsdWUtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoNTkgMTMwIDI0NiAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibHVlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ncmF5LTEwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI0MyAyNDQgMjQ2IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWdyZWVuLTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDM0IDE5NyA5NCAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1wdXJwbGUtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTY4IDg1IDI0NyAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1yZWQtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXJpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtMnhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjMyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1zbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtYm9sZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNzAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtbWVkaXVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI1MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudXBwZXJjYXNlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ1cHBlcmNhc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ibHVlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYig3NSA4NSA5OSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS03MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYig1NSA2NSA4MSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS04MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigzMSA0MSA1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JlZW4tNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjIgMTYzIDc0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1wdXJwbGUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTQ3IDUxIDIzNCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcmVkLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIyMCAzOCAzOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMyNTYzZWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjUwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidXBwZXJjYXNlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNhcmRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZmZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubGlzdC12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUHJvZ3Jlc3NcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW5wdXQtZmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UyZThmMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmOGZhZmNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9ybS1sYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjQ3NDhiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiRDpcXFxcRGV2XFxcXFBlcnNvbmFsLUZpbmFuY2UtTWFuYWdlci1QRk1cXFxcYXBwXFxcXGFwcC5jc3NcIilcbiIsImltcG9ydCB7IFZpZXcsIFByb3BlcnR5IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEb251dENoYXJ0RGF0YSB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgcGVyY2VudGFnZTogbnVtYmVyO1xufVxuXG5jb25zdCBkYXRhUHJvcGVydHkgPSBuZXcgUHJvcGVydHk8RG9udXRDaGFydCwgRG9udXRDaGFydERhdGFbXT4oe1xuICAgIG5hbWU6ICdkYXRhJyxcbiAgICBkZWZhdWx0VmFsdWU6IFtdLFxuICAgIHZhbHVlQ2hhbmdlZDogKHRhcmdldCwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHRhcmdldC5vbkRhdGFDaGFuZ2VkKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjbGFzcyBEb251dENoYXJ0IGV4dGVuZHMgVmlldyB7XG4gICAgcHVibGljIGRhdGE6IERvbnV0Q2hhcnREYXRhW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRhdGFDaGFuZ2VkKG9sZFZhbHVlOiBEb251dENoYXJ0RGF0YVtdLCBuZXdWYWx1ZTogRG9udXRDaGFydERhdGFbXSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0TGF5b3V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZU5hdGl2ZVZpZXcoKTogYW55IHtcbiAgICAgICAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgYW5kcm9pZC52aWV3LlZpZXcodGhpcy5fY29udGV4dCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2aWV3LnNldFdpbGxOb3REcmF3KGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIG5ldyBVSVZpZXcoQ0dSZWN0TWFrZSgwLCAwLCAwLCAwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTWVhc3VyZSh3aWR0aE1lYXN1cmVTcGVjOiBudW1iZXIsIGhlaWdodE1lYXN1cmVTcGVjOiBudW1iZXIpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB3aWR0aCA9IFZpZXcubGF5b3V0LmdldE1lYXN1cmVTcGVjU2l6ZSh3aWR0aE1lYXN1cmVTcGVjKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBoZWlnaHQgPSBWaWV3LmxheW91dC5nZXRNZWFzdXJlU3BlY1NpemUoaGVpZ2h0TWVhc3VyZVNwZWMpO1xuICAgICAgICB0aGlzLnNldE1lYXN1cmVkRGltZW5zaW9uKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxheW91dChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlcikge1xuICAgICAgICBzdXBlci5vbkxheW91dChsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMubmF0aXZlVmlldz8uaW52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYXcoY2FudmFzOiBhbnkpIHtcbiAgICAgICAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0FuZHJvaWQoY2FudmFzKTtcbiAgICAgICAgfSBlbHNlIGlmIChnbG9iYWwuaXNJT1MpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2lPUygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3QW5kcm9pZChjYW52YXM6IGFueSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldE1lYXN1cmVkSGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBoZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgKiAwLjg7XG4gICAgICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcmFkaXVzICogMC42O1xuICAgICAgICBjb25zdCBzdHJva2VXaWR0aCA9IHJhZGl1cyAtIGlubmVyUmFkaXVzO1xuXG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBwYWludCA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLlBhaW50KCk7XG4gICAgICAgIHBhaW50LnNldEFudGlBbGlhcyh0cnVlKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBwYWludC5zZXRTdHlsZShhbmRyb2lkLmdyYXBoaWNzLlBhaW50LlN0eWxlLlNUUk9LRSk7XG4gICAgICAgIHBhaW50LnNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoKTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5SZWN0RihcbiAgICAgICAgICAgIGNlbnRlclggLSByYWRpdXMgKyBzdHJva2VXaWR0aCAvIDIsXG4gICAgICAgICAgICBjZW50ZXJZIC0gcmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLFxuICAgICAgICAgICAgY2VudGVyWCArIHJhZGl1cyAtIHN0cm9rZVdpZHRoIC8gMixcbiAgICAgICAgICAgIGNlbnRlclkgKyByYWRpdXMgLSBzdHJva2VXaWR0aCAvIDJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN3ZWVwQW5nbGUgPSAoaXRlbS5wZXJjZW50YWdlIC8gMTAwKSAqIDM2MDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBhaW50LnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcihpdGVtLmNvbG9yKSk7XG4gICAgICAgICAgICBjYW52YXMuZHJhd0FyYyhyZWN0LCBzdGFydEFuZ2xlLCBzd2VlcEFuZ2xlLCBmYWxzZSwgcGFpbnQpO1xuICAgICAgICAgICAgc3RhcnRBbmdsZSArPSBzd2VlcEFuZ2xlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdpT1MoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0TWVhc3VyZWRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IHdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiAqIDAuODtcbiAgICAgICAgY29uc3QgaW5uZXJSYWRpdXMgPSByYWRpdXMgKiAwLjY7XG5cbiAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSAtTWF0aC5QSSAvIDI7XG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2VlcEFuZ2xlID0gKGl0ZW0ucGVyY2VudGFnZSAvIDEwMCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gc3RhcnRBbmdsZSArIHN3ZWVwQW5nbGU7XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBVSUJlemllclBhdGguYmV6aWVyUGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5hZGRBcmNXaXRoQ2VudGVyUmFkaXVzU3RhcnRBbmdsZUVuZEFuZ2xlQ2xvY2t3aXNlKFxuICAgICAgICAgICAgICAgIENHUG9pbnRNYWtlKGNlbnRlclgsIGNlbnRlclkpLFxuICAgICAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYXRoLmFkZEFyY1dpdGhDZW50ZXJSYWRpdXNTdGFydEFuZ2xlRW5kQW5nbGVDbG9ja3dpc2UoXG4gICAgICAgICAgICAgICAgQ0dQb2ludE1ha2UoY2VudGVyWCwgY2VudGVyWSksXG4gICAgICAgICAgICAgICAgaW5uZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5oZXhUb1VJQ29sb3IoaXRlbS5jb2xvcik7XG4gICAgICAgICAgICBjb2xvci5zZXRGaWxsKCk7XG4gICAgICAgICAgICBwYXRoLmZpbGwoKTtcblxuICAgICAgICAgICAgc3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhleFRvVUlDb2xvcihoZXg6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSAvIDI1NTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpIC8gMjU1O1xuICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNikgLyAyNTU7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIFVJQ29sb3IuYWxsb2MoKS5pbml0V2l0aFJlZEdyZWVuQmx1ZUFscGhhKHIsIGcsIGIsIDEpO1xuICAgIH1cbn1cblxuZGF0YVByb3BlcnR5LnJlZ2lzdGVyKERvbnV0Q2hhcnQpOyIsImltcG9ydCB7IFZpZXcgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG4vLyBSZWdpc3RlciBhbGwgY2hhcnQgY29tcG9uZW50c1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ2hhcnRDb21wb25lbnRzKCkge1xuICAgIC8vIFRlbXBvcmFyaWx5IGRpc2FibGUgY2hhcnQgcmVnaXN0cmF0aW9uIHVudGlsIHdlIGZpeCB0aGUgY29yZSBpbXBvcnRzXG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IHJlZ2lzdHJhdGlvbiBkaXNhYmxlZCB0ZW1wb3JhcmlseScpO1xufVxuXG5leHBvcnQgeyBEb251dENoYXJ0IH0gZnJvbSAnLi9kb251dC1jaGFydCc7IiwiZXhwb3J0IGNvbnN0IFN0b3JhZ2VLZXlzID0ge1xuICAgIEFTU0VUUzogJ2Fzc2V0cycsXG4gICAgTElBQklMSVRJRVM6ICdsaWFiaWxpdGllcycsXG4gICAgVFJBTlNBQ1RJT05TOiAndHJhbnNhY3Rpb25zJyxcbn0gYXMgY29uc3Q7IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IERhc2hib2FyZFZpZXdNb2RlbCB9IGZyb20gJy4vdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTWFpblBhZ2UnO1xubGV0IHZpZXdNb2RlbDogRGFzaGJvYXJkVmlld01vZGVsO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBtYWluIHBhZ2UnKTtcbiAgICB2aWV3TW9kZWwgPSBuZXcgRGFzaGJvYXJkVmlld01vZGVsKCk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb0luY29tZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBJbmNvbWUgbGlzdCcpO1xuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZVwiLCB7IGZpbHRlclR5cGU6ICdpbmNvbWUnIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gbmF2aWdhdGUgdG8gSW5jb21lIGxpc3QnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZVRvRXhwZW5zZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBFeHBlbnNlIGxpc3QnKTtcbiAgICB0cnkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2VcIiwgeyBmaWx0ZXJUeXBlOiAnZXhwZW5zZScgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZhaWxlZCB0byBuYXZpZ2F0ZSB0byBFeHBlbnNlIGxpc3QnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZVRvQXNzZXRzKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIEFzc2V0cyBsaXN0Jyk7XG4gICAgdHJ5IHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoXCJ2aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gbmF2aWdhdGUgdG8gQXNzZXRzIGxpc3QnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZVRvTGlhYmlsaXRpZXMoYXJnczogRXZlbnREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gTGlhYmlsaXRpZXMgbGlzdCcpO1xuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG5hdmlnYXRlIHRvIExpYWJpbGl0aWVzIGxpc3QnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZE1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcbiAgcHJpdmF0ZSBfbWVzc2FnZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzLlxuICAgIHRoaXMuX2NvdW50ZXIgPSA0MjtcbiAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgfVxuXG4gIGdldCBtZXNzYWdlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2U7XG4gIH1cblxuICBzZXQgbWVzc2FnZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX21lc3NhZ2UgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9tZXNzYWdlID0gdmFsdWU7XG4gICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdtZXNzYWdlJywgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uVGFwKCkge1xuICAgIHRoaXMuX2NvdW50ZXItLTtcbiAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlTWVzc2FnZSgpIHtcbiAgICBpZiAodGhpcy5fY291bnRlciA8PSAwKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPVxuICAgICAgICAnSG9vcnJhYWF5ISBZb3UgdW5sb2NrZWQgdGhlIE5hdGl2ZVNjcmlwdCBjbGlja2VyIGFjaGlldmVtZW50ISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IGAke3RoaXMuX2NvdW50ZXJ9IHRhcHMgbGVmdGA7XG4gICAgfVxuXG4gICAgLy8gbG9nIHRoZSBtZXNzYWdlIHRvIHRoZSBjb25zb2xlXG4gICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCB0eXBlIEFzc2V0Q2F0ZWdvcnkgPSAnUmVhbCBFc3RhdGUnIHwgJ1ZlaGljbGVzJyB8ICdDYXNoJyB8ICdCdXNpbmVzcycgfCAnU2F2aW5nJyB8ICdTdG9ja3MnO1xuXG5leHBvcnQgY2xhc3MgQXNzZXQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgaWQ6IHN0cmluZztcbiAgY2F0ZWdvcnk6IEFzc2V0Q2F0ZWdvcnk7XG4gIHZhbHVlOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcHVyY2hhc2VEYXRlOiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8QXNzZXQ+KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgIHRoaXMuY2F0ZWdvcnkgPSBkYXRhLmNhdGVnb3J5IHx8ICdDYXNoJztcbiAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAwO1xuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZSB8fCAnJztcbiAgICB0aGlzLnB1cmNoYXNlRGF0ZSA9IGRhdGEucHVyY2hhc2VEYXRlIHx8IG5ldyBEYXRlKCk7XG4gIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIE1vbnRobHlSZXBvcnQge1xuICAgIG1vbnRoOiBudW1iZXI7XG4gICAgeWVhcjogbnVtYmVyO1xuICAgIGluY29tZTogbnVtYmVyO1xuICAgIGV4cGVuc2VzOiBudW1iZXI7XG4gICAgc2F2aW5nczogbnVtYmVyO1xuICAgIHNhdmluZ3NSYXRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluYW5jaWFsSGVhbHRoUmVwb3J0IHtcbiAgICBuZXRXb3J0aDogbnVtYmVyO1xuICAgIGRlYnRUb0luY29tZVJhdGlvOiBudW1iZXI7XG4gICAgbW9udGhseUNhc2hmbG93OiBudW1iZXI7XG4gICAgbW9udGhseVJlcG9ydHM6IE1vbnRobHlSZXBvcnRbXTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IHR5cGUgTGlhYmlsaXR5VHlwZSA9ICdTaG9ydC10ZXJtJyB8ICdMb25nLXRlcm0nO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIGlkOiBzdHJpbmc7XG4gIHR5cGU6IExpYWJpbGl0eVR5cGU7XG4gIGFtb3VudDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIGR1ZURhdGU6IERhdGU7XG4gIGludGVyZXN0UmF0ZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8TGlhYmlsaXR5Pikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGUgfHwgJ1Nob3J0LXRlcm0nO1xuICAgIHRoaXMuYW1vdW50ID0gZGF0YS5hbW91bnQgfHwgMDtcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWUgfHwgJyc7XG4gICAgdGhpcy5kdWVEYXRlID0gZGF0YS5kdWVEYXRlIHx8IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5pbnRlcmVzdFJhdGUgPSBkYXRhLmludGVyZXN0UmF0ZSB8fCAwO1xuICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRyYW5zYWN0aW9uVHlwZSA9ICdpbmNvbWUnIHwgJ2V4cGVuc2UnO1xuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25DYXRlZ29yeSA9IFxuICB8ICdTYWxhcnknIHwgJ1JlYWwgRXN0YXRlJyB8ICdCdXNpbmVzcycgfCAnSW50ZXJlc3QvRGl2aWRlbmRzJyAgLy8gSW5jb21lIGNhdGVnb3JpZXNcbiAgfCAnSG91c2luZycgfCAnVHJhbnNwb3J0YXRpb24nIHwgJ0Zvb2QnIHwgJ1V0aWxpdGllcycgfCAnSW5zdXJhbmNlJyB8ICdIZWFsdGhjYXJlJyB8ICdFbnRlcnRhaW5tZW50JyB8ICdMb2FuJzsgIC8vIEV4cGVuc2UgY2F0ZWdvcmllc1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb24gZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHR5cGU6IFRyYW5zYWN0aW9uVHlwZTtcbiAgICBjYXRlZ29yeTogVHJhbnNhY3Rpb25DYXRlZ29yeTtcbiAgICBhbW91bnQ6IG51bWJlcjtcbiAgICBkYXRlOiBEYXRlO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFRyYW5zYWN0aW9uPikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGUgfHwgJ2V4cGVuc2UnO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YS5jYXRlZ29yeSB8fCAnRm9vZCc7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gTnVtYmVyKGRhdGEuYW1vdW50IHx8IDApO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRhLmRhdGUgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgfVxufSIsImltcG9ydCB7IEFzc2V0IH0gZnJvbSAnLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZUtleXMgfSBmcm9tICcuLi9jb25zdGFudHMvc3RvcmFnZS1rZXlzJztcblxuZXhwb3J0IGNsYXNzIEFzc2V0U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPEFzc2V0PiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVEFHID0gJ0Fzc2V0U2VydmljZSc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSBTdG9yYWdlS2V5cy5BU1NFVFM7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBc3NldFNlcnZpY2Uge1xuICAgICAgICBpZiAoIUFzc2V0U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgQXNzZXRTZXJ2aWNlLmluc3RhbmNlID0gbmV3IEFzc2V0U2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBc3NldFNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IEFzc2V0W10ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGRhdGEgPT4gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBwdXJjaGFzZURhdGU6IG5ldyBEYXRlKGRhdGEucHVyY2hhc2VEYXRlKVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgYWRkQXNzZXQoYXNzZXQ6IEFzc2V0KTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWRkSXRlbShhc3NldCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXNzZXQoYXNzZXQ6IEFzc2V0KTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShhc3NldCk7XG4gICAgfVxuXG4gICAgZGVsZXRlQXNzZXQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oaWQpO1xuICAgIH1cblxuICAgIGdldEFzc2V0cygpOiBBc3NldFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbEFzc2V0VmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGFzc2V0KSA9PiBzdW0gKyBhc3NldC52YWx1ZSwgMCk7XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVNlcnZpY2U8VCBleHRlbmRzIHsgaWQ6IHN0cmluZyB9PiBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByb3RlY3RlZCBpdGVtczogVFtdID0gW107XG4gICAgcHJvdGVjdGVkIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgVEFHOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IHN0b3JhZ2VLZXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlID0gU3RvcmFnZVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5sb2FkSXRlbXMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbG9hZEl0ZW1zKCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3JhZ2VLZXkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Uga2V5IG5vdCBzZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNhdmVkSXRlbXMgPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW08YW55W10+KHRoaXMuc3RvcmFnZUtleSwgW10pO1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMudHJhbnNmb3JtTG9hZGVkSXRlbXMoc2F2ZWRJdGVtcyk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBMb2FkZWQgJHt0aGlzLml0ZW1zLmxlbmd0aH0gaXRlbXMgZnJvbSAke3RoaXMuc3RvcmFnZUtleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgYEVycm9yIGxvYWRpbmcgaXRlbXMgZnJvbSAke3RoaXMuc3RvcmFnZUtleX1gLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2F2ZUl0ZW1zKCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3JhZ2VLZXkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Uga2V5IG5vdCBzZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXksIHRoaXMuaXRlbXMpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKHRoaXMuVEFHLCBgU2F2ZWQgJHt0aGlzLml0ZW1zLmxlbmd0aH0gaXRlbXMgdG8gJHt0aGlzLnN0b3JhZ2VLZXl9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsIGBFcnJvciBzYXZpbmcgaXRlbXMgdG8gJHt0aGlzLnN0b3JhZ2VLZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IFRbXTtcblxuICAgIHByb3RlY3RlZCBhZGRJdGVtKGl0ZW06IFQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdDYW5ub3QgYWRkIGl0ZW0gd2l0aG91dCBpZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgdGhpcy5zYXZlSXRlbXMoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXRlbXMnLCB0aGlzLml0ZW1zKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKHRoaXMuVEFHLCBgQWRkZWQgaXRlbSB3aXRoIGlkOiAke2l0ZW0uaWR9YCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgJ0Nhbm5vdCB1cGRhdGUgaXRlbSB3aXRob3V0IGlkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGl0ZW07XG4gICAgICAgICAgICB0aGlzLnNhdmVJdGVtcygpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXRlbXMnLCB0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYFVwZGF0ZWQgaXRlbSB3aXRoIGlkOiAke2l0ZW0uaWR9YCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGVsZXRlSXRlbShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgJ0Nhbm5vdCBkZWxldGUgaXRlbSB3aXRob3V0IGlkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gaWQpO1xuICAgICAgICB0aGlzLnNhdmVJdGVtcygpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycsIHRoaXMuaXRlbXMpO1xuICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBEZWxldGVkIGl0ZW0gd2l0aCBpZDogJHtpZH1gKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXMoKTogVFtdIHtcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLml0ZW1zXTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTGlhYmlsaXR5IH0gZnJvbSAnLi4vbW9kZWxzL2xpYWJpbGl0eSc7XG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cyc7XG5cbmV4cG9ydCBjbGFzcyBMaWFiaWxpdHlTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2U8TGlhYmlsaXR5PiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IExpYWJpbGl0eVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFRBRyA9ICdMaWFiaWxpdHlTZXJ2aWNlJztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RvcmFnZUtleSA9IFN0b3JhZ2VLZXlzLkxJQUJJTElUSUVTO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTGlhYmlsaXR5U2VydmljZSB7XG4gICAgICAgIGlmICghTGlhYmlsaXR5U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgTGlhYmlsaXR5U2VydmljZS5pbnN0YW5jZSA9IG5ldyBMaWFiaWxpdHlTZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIExpYWJpbGl0eVNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IExpYWJpbGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChkYXRhID0+IG5ldyBMaWFiaWxpdHkoe1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRhdGEuZHVlRGF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFkZExpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEl0ZW0obGlhYmlsaXR5KTtcbiAgICB9XG5cbiAgICB1cGRhdGVMaWFiaWxpdHkobGlhYmlsaXR5OiBMaWFiaWxpdHkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKGxpYWJpbGl0eSk7XG4gICAgfVxuXG4gICAgZGVsZXRlTGlhYmlsaXR5KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBnZXRMaWFiaWxpdGllcygpOiBMaWFiaWxpdHlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxMaWFiaWxpdGllcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgbGlhYmlsaXR5KSA9PiBzdW0gKyBsaWFiaWxpdHkuYW1vdW50LCAwKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zYWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXNzZXRTZXJ2aWNlIH0gZnJvbSAnLi9hc3NldC1zZXJ2aWNlJztcbmltcG9ydCB7IExpYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IEZpbmFuY2lhbEhlYWx0aFJlcG9ydCwgTW9udGhseVJlcG9ydCB9IGZyb20gJy4uL21vZGVscy9maW5hbmNpYWwtcmVwb3J0JztcbmltcG9ydCB7IFxuICAgIGNhbGN1bGF0ZU5ldFdvcnRoLCBcbiAgICBjYWxjdWxhdGVNb250aGx5Q2FzaGZsb3csXG4gICAgY2FsY3VsYXRlRGVidFRvSW5jb21lUmF0aW8gXG59IGZyb20gJy4uL3V0aWxzL2ZpbmFuY2lhbC1jYWxjdWxhdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgUmVwb3J0U2VydmljZSBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBSZXBvcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgdHJhbnNhY3Rpb25TZXJ2aWNlOiBUcmFuc2FjdGlvblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhc3NldFNlcnZpY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcml2YXRlIGxpYWJpbGl0eVNlcnZpY2U6IExpYWJpbGl0eVNlcnZpY2U7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmFzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFJlcG9ydFNlcnZpY2Uge1xuICAgICAgICBpZiAoIVJlcG9ydFNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFJlcG9ydFNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgUmVwb3J0U2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZXBvcnRTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRmluYW5jaWFsSGVhbHRoUmVwb3J0KCk6IEZpbmFuY2lhbEhlYWx0aFJlcG9ydCB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHRoaXMuYXNzZXRTZXJ2aWNlLmdldEFzc2V0cygpO1xuICAgICAgICBjb25zdCBsaWFiaWxpdGllcyA9IHRoaXMubGlhYmlsaXR5U2VydmljZS5nZXRMaWFiaWxpdGllcygpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1vbnRobHlJbmNvbWUgPSB0cmFuc2FjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdpbmNvbWUnKVxuICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMCkgLyAxMjtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV0V29ydGg6IGNhbGN1bGF0ZU5ldFdvcnRoKGFzc2V0cywgbGlhYmlsaXRpZXMpLFxuICAgICAgICAgICAgZGVidFRvSW5jb21lUmF0aW86IGNhbGN1bGF0ZURlYnRUb0luY29tZVJhdGlvKG1vbnRobHlJbmNvbWUsIGxpYWJpbGl0aWVzKSxcbiAgICAgICAgICAgIG1vbnRobHlDYXNoZmxvdzogY2FsY3VsYXRlTW9udGhseUNhc2hmbG93KHRyYW5zYWN0aW9ucyksXG4gICAgICAgICAgICBtb250aGx5UmVwb3J0czogdGhpcy5nZW5lcmF0ZU1vbnRobHlSZXBvcnRzKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlTW9udGhseVJlcG9ydHMoKTogTW9udGhseVJlcG9ydFtdIHtcbiAgICAgICAgY29uc3QgcmVwb3J0czogTW9udGhseVJlcG9ydFtdID0gW107XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdlbmVyYXRlIHJlcG9ydHMgZm9yIHRoZSBsYXN0IDEyIG1vbnRoc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgLSBpICsgMTIpICUgMTI7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSAtIE1hdGguZmxvb3IoaSAvIDEyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbW9udGhUcmFuc2FjdGlvbnMgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZVxuICAgICAgICAgICAgICAgIC5nZXRNb250aGx5VHJhbnNhY3Rpb25zKG1vbnRoLCB5ZWFyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW5jb21lID0gbW9udGhUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnaW5jb21lJylcbiAgICAgICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZXhwZW5zZXMgPSBtb250aFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdleHBlbnNlJylcbiAgICAgICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2F2aW5ncyA9IGluY29tZSAtIGV4cGVuc2VzO1xuICAgICAgICAgICAgY29uc3Qgc2F2aW5nc1JhdGUgPSBpbmNvbWUgPiAwID8gKHNhdmluZ3MgLyBpbmNvbWUpICogMTAwIDogMDtcblxuICAgICAgICAgICAgcmVwb3J0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgICAgIGluY29tZSxcbiAgICAgICAgICAgICAgICBleHBlbnNlcyxcbiAgICAgICAgICAgICAgICBzYXZpbmdzLFxuICAgICAgICAgICAgICAgIHNhdmluZ3NSYXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXBvcnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBcHBsaWNhdGlvblNldHRpbmdzIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdTdG9yYWdlU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFN0b3JhZ2VTZXJ2aWNlO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFTdG9yYWdlU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgU3RvcmFnZVNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSBzdG9yZWQgZGF0YSBmb3Iga2V5OiAke2tleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBFcnJvciBzdG9yaW5nIGRhdGEgZm9yIGtleTogJHtrZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJdGVtPFQ+KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCBgRXJyb3IgcmV0cmlldmluZyBkYXRhIGZvciBrZXk6ICR7a2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Uga2V5IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHJlbW92ZWQgZGF0YSBmb3Iga2V5OiAke2tleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBFcnJvciByZW1vdmluZyBkYXRhIGZvciBrZXk6ICR7a2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLmNsZWFyKCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IGNsZWFyZWQgYWxsIHN0b3JhZ2UnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBjbGVhcmluZyBzdG9yYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Utc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlS2V5cyB9IGZyb20gJy4uL2NvbnN0YW50cy9zdG9yYWdlLWtleXMnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPFRyYW5zYWN0aW9uPiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVEFHID0gJ1RyYW5zYWN0aW9uU2VydmljZSc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSBTdG9yYWdlS2V5cy5UUkFOU0FDVElPTlM7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBUcmFuc2FjdGlvblNlcnZpY2Uge1xuICAgICAgICBpZiAoIVRyYW5zYWN0aW9uU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgVHJhbnNhY3Rpb25TZXJ2aWNlLmluc3RhbmNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUcmFuc2FjdGlvblNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IFRyYW5zYWN0aW9uW10ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGRhdGEgPT4gbmV3IFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBhbW91bnQ6IE51bWJlcihkYXRhLmFtb3VudCksXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRhLmRhdGUpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdHJhbnNhY3Rpb24uYW1vdW50ID0gTnVtYmVyKHRyYW5zYWN0aW9uLmFtb3VudCk7XG4gICAgICAgIGlmIChpc05hTih0cmFuc2FjdGlvbi5hbW91bnQpKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdJbnZhbGlkIHRyYW5zYWN0aW9uIGFtb3VudCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0cmFuc2FjdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRyYW5zYWN0aW9uLmFtb3VudCA9IE51bWJlcih0cmFuc2FjdGlvbi5hbW91bnQpO1xuICAgICAgICBpZiAoaXNOYU4odHJhbnNhY3Rpb24uYW1vdW50KSkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnSW52YWxpZCB0cmFuc2FjdGlvbiBhbW91bnQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0odHJhbnNhY3Rpb24pO1xuICAgIH1cblxuICAgIGRlbGV0ZVRyYW5zYWN0aW9uKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBnZXRUcmFuc2FjdGlvbnMoKTogVHJhbnNhY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgZ2V0TW9udGhseVRyYW5zYWN0aW9ucyhtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiBUcmFuc2FjdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKHQgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25EYXRlID0gdC5kYXRlO1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uRGF0ZS5nZXRNb250aCgpID09PSBtb250aCAmJiBcbiAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhcjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxJbmNvbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdpbmNvbWUnKVxuICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyBOdW1iZXIodC5hbW91bnQpLCAwKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbEV4cGVuc2VzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnZXhwZW5zZScpXG4gICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIE51bWJlcih0LmFtb3VudCksIDApO1xuICAgIH1cbn0iLCJleHBvcnQgY29uc3QgQ2hhcnRDb2xvcnMgPSB7XG4gICAgLy8gQXNzZXQgQ2F0ZWdvcmllc1xuICAgIFJlYWxFc3RhdGU6ICcjNEM1MUJGJywgIC8vIEluZGlnb1xuICAgIFZlaGljbGVzOiAnIzQ4QkI3OCcsICAgIC8vIEdyZWVuXG4gICAgQ2FzaDogJyM0Mjk5RTEnLCAgICAgICAgLy8gQmx1ZVxuICAgIEJ1c2luZXNzOiAnI0VEODkzNicsICAgIC8vIE9yYW5nZVxuICAgIFNhdmluZzogJyM5RjdBRUEnLCAgICAgIC8vIFB1cnBsZVxuICAgIFN0b2NrczogJyNGNTY1NjUnLCAgICAgIC8vIFJlZFxuXG4gICAgLy8gVHJhbnNhY3Rpb24gQ2F0ZWdvcmllcyAtIEluY29tZVxuICAgIFNhbGFyeTogJyM0OEJCNzgnLCAgICAgIC8vIEdyZWVuXG4gICAgJ0ludGVyZXN0L0RpdmlkZW5kcyc6ICcjOUY3QUVBJywgLy8gUHVycGxlXG5cbiAgICAvLyBUcmFuc2FjdGlvbiBDYXRlZ29yaWVzIC0gRXhwZW5zZVxuICAgIEhvdXNpbmc6ICcjNEM1MUJGJywgICAgIC8vIEluZGlnb1xuICAgIFRyYW5zcG9ydGF0aW9uOiAnIzQ4QkI3OCcsIC8vIEdyZWVuXG4gICAgRm9vZDogJyM0Mjk5RTEnLCAgICAgICAgLy8gQmx1ZVxuICAgIFV0aWxpdGllczogJyNFRDg5MzYnLCAgIC8vIE9yYW5nZVxuICAgIEluc3VyYW5jZTogJyM5RjdBRUEnLCAgIC8vIFB1cnBsZVxuICAgIEhlYWx0aGNhcmU6ICcjRjU2NTY1JywgIC8vIFJlZFxuICAgIEVudGVydGFpbm1lbnQ6ICcjNjY3RUVBJywgLy8gSW5kaWdvXG4gICAgTG9hbjogJyNENTNGOEMnLCAgICAgICAvLyBQaW5rXG5cbiAgICAvLyBMaWFiaWxpdHkgVHlwZXNcbiAgICBTaG9ydFRlcm06ICcjRjU2NTY1JywgICAvLyBSZWRcbiAgICBMb25nVGVybTogJyM0QzUxQkYnICAgICAvLyBJbmRpZ29cbn07IiwiaW1wb3J0IHsgRGlhbG9ncywgRGlhbG9nT3B0aW9ucyB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uRGlhbG9nT3B0aW9ucyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgYWN0aW9uczogQXJyYXk8eyBpZDogc3RyaW5nOyB0ZXh0OiBzdHJpbmcgfT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybURpYWxvZ09wdGlvbnMgZXh0ZW5kcyBEaWFsb2dPcHRpb25zIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBva0J1dHRvblRleHQ/OiBzdHJpbmc7XG4gICAgY2FuY2VsQnV0dG9uVGV4dD86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dEaWFsb2cob3B0aW9uczogQWN0aW9uRGlhbG9nT3B0aW9ucyB8IENvbmZpcm1EaWFsb2dPcHRpb25zKTogUHJvbWlzZTxzdHJpbmcgfCBib29sZWFuPiB7XG4gICAgaWYgKCdhY3Rpb25zJyBpbiBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBEaWFsb2dzLmFjdGlvbih7XG4gICAgICAgICAgICB0aXRsZTogb3B0aW9ucy50aXRsZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG9wdGlvbnMubWVzc2FnZSxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgICAgICAgICAgYWN0aW9uczogb3B0aW9ucy5hY3Rpb25zLm1hcChhID0+IGEudGV4dClcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ0NhbmNlbCcpIHJldHVybiAnY2FuY2VsJztcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9ucy5maW5kKGEgPT4gYS50ZXh0ID09PSByZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbiA/IGFjdGlvbi5pZCA6ICdjYW5jZWwnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIERpYWxvZ3MuY29uZmlybShvcHRpb25zIGFzIERpYWxvZ09wdGlvbnMpO1xufSIsImltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSAnLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IExpYWJpbGl0eSB9IGZyb20gJy4uL21vZGVscy9saWFiaWxpdHknO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTmV0V29ydGgoYXNzZXRzOiBBc3NldFtdLCBsaWFiaWxpdGllczogTGlhYmlsaXR5W10pOiBudW1iZXIge1xuICAgIGNvbnN0IHRvdGFsQXNzZXRzID0gYXNzZXRzLnJlZHVjZSgoc3VtLCBhc3NldCkgPT4gc3VtICsgYXNzZXQudmFsdWUsIDApO1xuICAgIGNvbnN0IHRvdGFsTGlhYmlsaXRpZXMgPSBsaWFiaWxpdGllcy5yZWR1Y2UoKHN1bSwgbGlhYmlsaXR5KSA9PiBzdW0gKyBsaWFiaWxpdHkuYW1vdW50LCAwKTtcbiAgICByZXR1cm4gdG90YWxBc3NldHMgLSB0b3RhbExpYWJpbGl0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTW9udGhseUNhc2hmbG93KHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSk6IG51bWJlciB7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgY29uc3QgbW9udGhseVRyYW5zYWN0aW9ucyA9IHRyYW5zYWN0aW9ucy5maWx0ZXIodCA9PiBcbiAgICAgICAgdC5kYXRlLmdldE1vbnRoKCkgPT09IGN1cnJlbnRNb250aCAmJiBcbiAgICAgICAgdC5kYXRlLmdldEZ1bGxZZWFyKCkgPT09IGN1cnJlbnRZZWFyXG4gICAgKTtcblxuICAgIHJldHVybiBtb250aGx5VHJhbnNhY3Rpb25zLnJlZHVjZSgoc3VtLCB0KSA9PiBcbiAgICAgICAgc3VtICsgKHQudHlwZSA9PT0gJ2luY29tZScgPyB0LmFtb3VudCA6IC10LmFtb3VudCksIDBcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRGVidFRvSW5jb21lUmF0aW8oXG4gICAgbW9udGhseUluY29tZTogbnVtYmVyLCBcbiAgICBsaWFiaWxpdGllczogTGlhYmlsaXR5W11cbik6IG51bWJlciB7XG4gICAgY29uc3QgbW9udGhseURlYnRQYXltZW50cyA9IGxpYWJpbGl0aWVzLnJlZHVjZSgoc3VtLCBsaWFiaWxpdHkpID0+IHtcbiAgICAgICAgLy8gU2ltcGxlIG1vbnRobHkgcGF5bWVudCBjYWxjdWxhdGlvblxuICAgICAgICBjb25zdCBtb250aGx5UmF0ZSA9IGxpYWJpbGl0eS5pbnRlcmVzdFJhdGUgLyAxMiAvIDEwMDtcbiAgICAgICAgY29uc3QgbW9udGhzID0gbGlhYmlsaXR5LnR5cGUgPT09ICdTaG9ydC10ZXJtJyA/IDEyIDogMzYwOyAvLyAxIHllYXIgb3IgMzAgeWVhcnNcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IChsaWFiaWxpdHkuYW1vdW50ICogbW9udGhseVJhdGUgKiBNYXRoLnBvdygxICsgbW9udGhseVJhdGUsIG1vbnRocykpIFxuICAgICAgICAgICAgLyAoTWF0aC5wb3coMSArIG1vbnRobHlSYXRlLCBtb250aHMpIC0gMSk7XG4gICAgICAgIHJldHVybiBzdW0gKyBwYXltZW50O1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIG1vbnRobHlEZWJ0UGF5bWVudHMgLyBtb250aGx5SW5jb21lO1xufSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeShhbW91bnQ6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gRW5zdXJlIHdlJ3JlIHdvcmtpbmcgd2l0aCBhIG51bWJlclxuICAgIGNvbnN0IG51bWVyaWNBbW91bnQgPSB0eXBlb2YgYW1vdW50ID09PSAnc3RyaW5nJyA/IHBhcnNlRmxvYXQoYW1vdW50KSA6IGFtb3VudDtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBpdCdzIGEgdmFsaWQgbnVtYmVyXG4gICAgaWYgKGlzTmFOKG51bWVyaWNBbW91bnQpKSB7XG4gICAgICAgIHJldHVybiAnJDAuMDAnO1xuICAgIH1cbiAgICBcbiAgICAvLyBGb3JtYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGFuZCBhZGQgZG9sbGFyIHNpZ25cbiAgICByZXR1cm4gYCQke251bWVyaWNBbW91bnQudG9GaXhlZCgyKX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuICAgIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50YWdlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xuICAgIGlmIChpc05hTihudW1lcmljVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAnMC4wMCUnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bnVtZXJpY1ZhbHVlLnRvRml4ZWQoMil9JWA7XG59IiwiLy8gQHRzLWlnbm9yZVxuaWYgKGdsb2JhbC5pc0lPUykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBVSUNvbG9yLnByb3RvdHlwZS5jb2xvcldpdGhIZXhTdHJpbmcgPSBmdW5jdGlvbihoZXg6IHN0cmluZyk6IFVJQ29sb3Ige1xuICAgICAgICBsZXQgciA9IDAsIGcgPSAwLCBiID0gMDtcbiAgICAgICAgXG4gICAgICAgIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgwKSArIGhleC5jaGFyQXQoMCksIDE2KTtcbiAgICAgICAgICAgIGcgPSBwYXJzZUludChoZXguY2hhckF0KDEpICsgaGV4LmNoYXJBdCgxKSwgMTYpO1xuICAgICAgICAgICAgYiA9IHBhcnNlSW50KGhleC5jaGFyQXQoMikgKyBoZXguY2hhckF0KDIpLCAxNik7XG4gICAgICAgIH0gZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gNikge1xuICAgICAgICAgICAgciA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwgMiksIDE2KTtcbiAgICAgICAgICAgIGcgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDIsIDQpLCAxNik7XG4gICAgICAgICAgICBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZyg0LCA2KSwgMTYpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBVSUNvbG9yLmFsbG9jKCkuaW5pdFdpdGhSZWRHcmVlbkJsdWVBbHBoYShyLzI1NSwgZy8yNTUsIGIvMjU1LCAxKTtcbiAgICB9O1xufSIsImltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIHN0YXRpYyBkZWJ1Zyh0YWc6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsb2dNZXNzYWdlID0gYFske3RhZ31dICR7bWVzc2FnZX1gO1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dNZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiBnbG9iYWwuYW5kcm9pZCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogQW5kcm9pZCBzcGVjaWZpYyBjb2RlXG4gICAgICAgICAgICBhbmRyb2lkLnV0aWwuTG9nLmQodGFnLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBlcnJvcih0YWc6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBlcnJvcj86IEVycm9yKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxvZ01lc3NhZ2UgPSBgWyR7dGFnfV0gRVJST1I6ICR7bWVzc2FnZX1gO1xuICAgICAgICBjb25zb2xlLmVycm9yKGxvZ01lc3NhZ2UpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiBnbG9iYWwuYW5kcm9pZCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogQW5kcm9pZCBzcGVjaWZpYyBjb2RlXG4gICAgICAgICAgICBhbmRyb2lkLnV0aWwuTG9nLmUodGFnLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZVRvUGFnZShwYWdlUGF0aDogc3RyaW5nLCBjb250ZXh0PzogYW55KTogdm9pZCB7XG4gICAgRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgbW9kdWxlTmFtZTogcGFnZVBhdGgsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIGNsZWFySGlzdG9yeTogZmFsc2VcbiAgICB9KTtcbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IEFzc2V0LCBBc3NldENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZEFzc2V0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEFkZEFzc2V0Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfcHVyY2hhc2VEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZENhdGVnb3J5SW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfY2F0ZWdvcmllczogQXNzZXRDYXRlZ29yeVtdID0gW1xuICAgICAgICAnUmVhbCBFc3RhdGUnLCAnVmVoaWNsZXMnLCAnQ2FzaCcsICdCdXNpbmVzcycsICdTYXZpbmcnLCAnU3RvY2tzJ1xuICAgIF07XG4gICAgcHJpdmF0ZSBfYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXhpc3RpbmdBc3NldD86IEFzc2V0O1xuXG4gICAgY29uc3RydWN0b3IoZXhpc3RpbmdBc3NldD86IEFzc2V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9leGlzdGluZ0Fzc2V0ID0gZXhpc3RpbmdBc3NldDtcblxuICAgICAgICBpZiAoZXhpc3RpbmdBc3NldCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nQXNzZXQoZXhpc3RpbmdBc3NldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVXaXRoRXhpc3RpbmdBc3NldChhc3NldDogQXNzZXQpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IGFzc2V0Lm5hbWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gYXNzZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX3B1cmNoYXNlRGF0ZSA9IG5ldyBEYXRlKGFzc2V0LnB1cmNoYXNlRGF0ZSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IHRoaXMuX2NhdGVnb3JpZXMuaW5kZXhPZihhc3NldC5jYXRlZ29yeSk7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5fdmFsdWUgIT09IG51bWVyaWNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBudW1lcmljVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd2YWx1ZScsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgcHVyY2hhc2VEYXRlKCk6IERhdGUgeyByZXR1cm4gdGhpcy5fcHVyY2hhc2VEYXRlOyB9XG4gICAgc2V0IHB1cmNoYXNlRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fcHVyY2hhc2VEYXRlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcHVyY2hhc2VEYXRlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdwdXJjaGFzZURhdGUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY2F0ZWdvcmllcygpOiBBc3NldENhdGVnb3J5W10geyByZXR1cm4gdGhpcy5fY2F0ZWdvcmllczsgfVxuICAgIGdldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDsgfVxuICAgIHNldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZENhdGVnb3J5SW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3NldCBuYW1lIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLl92YWx1ZSkgfHwgdGhpcy5fdmFsdWUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXNzZXQgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhc3NldCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nQXNzZXQgJiYgeyBpZDogdGhpcy5fZXhpc3RpbmdBc3NldC5pZCB9KSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRyaW0oKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuX2NhdGVnb3JpZXNbdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4XSxcbiAgICAgICAgICAgICAgICBwdXJjaGFzZURhdGU6IHRoaXMuX3B1cmNoYXNlRGF0ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGlzdGluZ0Fzc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLnVwZGF0ZUFzc2V0KGFzc2V0KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgYXNzZXQ6ICR7YXNzZXQubmFtZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLmFkZEFzc2V0KGFzc2V0KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IGFkZGVkIGFzc2V0OiAke2Fzc2V0Lm5hbWV9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIGFzc2V0JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQXNzZXQsIEFzc2V0Q2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNzZXQnO1xuaW1wb3J0IHsgQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgRG9udXRDaGFydERhdGEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldERpc3RyaWJ1dGlvblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2NoYXJ0RGF0YTogRG9udXRDaGFydERhdGFbXSA9IFtdO1xuXG4gICAgZ2V0IGNoYXJ0RGF0YSgpOiBEb251dENoYXJ0RGF0YVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJ0RGF0YTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGFzc2V0czogQXNzZXRbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0b3RhbCA9IGFzc2V0cy5yZWR1Y2UoKHN1bSwgYXNzZXQpID0+IHN1bSArIGFzc2V0LnZhbHVlLCAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdyb3VwIGFzc2V0cyBieSBjYXRlZ29yeVxuICAgICAgICBjb25zdCBjYXRlZ29yeU1hcCA9IG5ldyBNYXA8QXNzZXRDYXRlZ29yeSwgbnVtYmVyPigpO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gY2F0ZWdvcnlNYXAuZ2V0KGFzc2V0LmNhdGVnb3J5KSB8fCAwO1xuICAgICAgICAgICAgY2F0ZWdvcnlNYXAuc2V0KGFzc2V0LmNhdGVnb3J5LCBjdXJyZW50ICsgYXNzZXQudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb252ZXJ0IHRvIGNoYXJ0IGRhdGFcbiAgICAgICAgdGhpcy5fY2hhcnREYXRhID0gQXJyYXkuZnJvbShjYXRlZ29yeU1hcC5lbnRyaWVzKCkpXG4gICAgICAgICAgICAubWFwKChbY2F0ZWdvcnksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IENoYXJ0Q29sb3JzW2NhdGVnb3J5XSxcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKCh2YWx1ZSAvIHRvdGFsKSAqIDEwMCkgOiAwXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2hhcnREYXRhJywgdGhpcy5fY2hhcnREYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gJy4uLy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXREYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RpYWxvZyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuaW1wb3J0IHsgQXNzZXREaXN0cmlidXRpb25WaWV3TW9kZWwgfSBmcm9tICcuL2Fzc2V0LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsJztcblxuY29uc3QgVEFHID0gJ0Fzc2V0TGlzdFZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldExpc3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9hc3NldFNlcnZpY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcml2YXRlIF9hc3NldHM6IEFzc2V0W10gPSBbXTtcbiAgICBwcml2YXRlIF9kaXN0cmlidXRpb25WaWV3TW9kZWw6IEFzc2V0RGlzdHJpYnV0aW9uVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWwgPSBuZXcgQXNzZXREaXN0cmlidXRpb25WaWV3TW9kZWwoKTtcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFzc2V0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fzc2V0cy5tYXAoYXNzZXQgPT4gKHtcbiAgICAgICAgICAgIC4uLmFzc2V0LFxuICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdEN1cnJlbmN5KGFzc2V0LnZhbHVlKSxcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGZvcm1hdERhdGUoYXNzZXQucHVyY2hhc2VEYXRlKVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQXNzZXRzRm9ybWF0dGVkKCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fYXNzZXRTZXJ2aWNlLmdldFRvdGFsQXNzZXRWYWx1ZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzdHJpYnV0aW9uVmlld01vZGVsKCk6IEFzc2V0RGlzdHJpYnV0aW9uVmlld01vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnUmVmcmVzaGluZyBhc3NldHMgbGlzdCcpO1xuICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgICB9XG5cbiAgICBvbkFkZEFzc2V0KCk6IHZvaWQge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZVwiKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogeyBpbmRleDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0Fzc2V0IGl0ZW0gdGFwcGVkJyk7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gdGhpcy5fYXNzZXRzW2FyZ3MuaW5kZXhdO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiBhc3NldC5uYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogYFZhbHVlOiAke2Zvcm1hdEN1cnJlbmN5KGFzc2V0LnZhbHVlKX1cXG5QdXJjaGFzZSBEYXRlOiAke2Zvcm1hdERhdGUoYXNzZXQucHVyY2hhc2VEYXRlKX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0QXNzZXQoYXNzZXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVBc3NldChhc3NldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBoYW5kbGluZyBpdGVtIHRhcCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQXNzZXRzKCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fYXNzZXRzID0gdGhpcy5fYXNzZXRTZXJ2aWNlLmdldEFzc2V0cygpO1xuICAgICAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsLnVwZGF0ZURhdGEodGhpcy5fYXNzZXRzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Fzc2V0cycsIHRoaXMuYXNzZXRzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsQXNzZXRzRm9ybWF0dGVkJywgdGhpcy50b3RhbEFzc2V0c0Zvcm1hdHRlZCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgTG9hZGVkICR7dGhpcy5fYXNzZXRzLmxlbmd0aH0gYXNzZXRzYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgbG9hZGluZyBhc3NldHMnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGVkaXRBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYEVkaXRpbmcgYXNzZXQ6ICR7YXNzZXQuaWR9YCk7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UnLCB7IGFzc2V0IH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlQXNzZXQoYXNzZXQ6IEFzc2V0KTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBEZWxldGluZyBhc3NldDogJHthc3NldC5pZH1gKTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYXNzZXQ/JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLmRlbGV0ZUFzc2V0KGFzc2V0LmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgQXNzZXQgZGVsZXRlZDogJHthc3NldC5pZH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGRlbGV0aW5nIGFzc2V0JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jhc2VWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQmFzZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0F0dGVtcHRpbmcgdG8gbmF2aWdhdGUgYmFjaycpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS50b3Btb3N0KCk7XG4gICAgICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFtZS5nb0JhY2soKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IG5hdmlnYXRlZCBiYWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGcmFtZSBpcyBudWxsLCBjYW5ub3QgbmF2aWdhdGUgYmFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIG5hdmlnYXRpbmcgYmFjaycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnRGFzaGJvYXJkVmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX25ldFdvcnRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RvdGFsSW5jb21lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RvdGFsRXhwZW5zZXM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxBc3NldHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxMaWFiaWxpdGllczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYXNoZmxvdzogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBsaWFiaWxpdHlTZXJ2aWNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlID0gVHJhbnNhY3Rpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuYXNzZXRTZXJ2aWNlID0gQXNzZXRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubGlhYmlsaXR5U2VydmljZSA9IExpYWJpbGl0eVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVGaW5hbmNpYWxzKCk7XG4gICAgfVxuXG4gICAgZ2V0IG5ldFdvcnRoRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9uZXRXb3J0aCk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsSW5jb21lRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl90b3RhbEluY29tZSk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsRXhwZW5zZXNGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX3RvdGFsRXhwZW5zZXMpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbEFzc2V0c0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fdG90YWxBc3NldHMpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl90b3RhbExpYWJpbGl0aWVzKTtcbiAgICB9XG5cbiAgICBnZXQgY2FzaGZsb3dGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX2Nhc2hmbG93KTtcbiAgICB9XG5cbiAgICBnZXQgY2FzaGZsb3coKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhc2hmbG93O1xuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlRmluYW5jaWFscygpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRvdGFsc1xuICAgICAgICB0aGlzLl90b3RhbEFzc2V0cyA9IHRoaXMuYXNzZXRTZXJ2aWNlLmdldFRvdGFsQXNzZXRWYWx1ZSgpO1xuICAgICAgICB0aGlzLl90b3RhbExpYWJpbGl0aWVzID0gdGhpcy5saWFiaWxpdHlTZXJ2aWNlLmdldFRvdGFsTGlhYmlsaXRpZXMoKTtcbiAgICAgICAgdGhpcy5fdG90YWxJbmNvbWUgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRUb3RhbEluY29tZSgpO1xuICAgICAgICB0aGlzLl90b3RhbEV4cGVuc2VzID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuZ2V0VG90YWxFeHBlbnNlcygpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBuZXQgd29ydGhcbiAgICAgICAgdGhpcy5fbmV0V29ydGggPSB0aGlzLl90b3RhbEFzc2V0cyAtIHRoaXMuX3RvdGFsTGlhYmlsaXRpZXM7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIG1vbnRobHkgY2FzaGZsb3dcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbnMgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRNb250aGx5VHJhbnNhY3Rpb25zKGN1cnJlbnRNb250aCwgY3VycmVudFllYXIpO1xuXG4gICAgICAgIGNvbnN0IG1vbnRobHlJbmNvbWUgPSBtb250aGx5VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnaW5jb21lJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuXG4gICAgICAgIGNvbnN0IG1vbnRobHlFeHBlbnNlcyA9IG1vbnRobHlUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdleHBlbnNlJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuXG4gICAgICAgIHRoaXMuX2Nhc2hmbG93ID0gbW9udGhseUluY29tZSAtIG1vbnRobHlFeHBlbnNlcztcblxuICAgICAgICAvLyBOb3RpZnkgcHJvcGVydHkgY2hhbmdlc1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduZXRXb3J0aEZvcm1hdHRlZCcsIHRoaXMubmV0V29ydGhGb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbEluY29tZUZvcm1hdHRlZCcsIHRoaXMudG90YWxJbmNvbWVGb3JtYXR0ZWQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbEV4cGVuc2VzRm9ybWF0dGVkJywgdGhpcy50b3RhbEV4cGVuc2VzRm9ybWF0dGVkKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxBc3NldHNGb3JtYXR0ZWQnLCB0aGlzLnRvdGFsQXNzZXRzRm9ybWF0dGVkKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxMaWFiaWxpdGllc0Zvcm1hdHRlZCcsIHRoaXMudG90YWxMaWFiaWxpdGllc0Zvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhc2hmbG93Rm9ybWF0dGVkJywgdGhpcy5jYXNoZmxvd0Zvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhc2hmbG93JywgdGhpcy5jYXNoZmxvdyk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTGlhYmlsaXR5LCBMaWFiaWxpdHlUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpYWJpbGl0eSc7XG5pbXBvcnQgeyBMaWFiaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlhYmlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZExpYWJpbGl0eVZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBZGRMaWFiaWxpdHlWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9hbW91bnQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaW50ZXJlc3RSYXRlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2R1ZURhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkVHlwZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3R5cGVzOiBMaWFiaWxpdHlUeXBlW10gPSBbJ1Nob3J0LXRlcm0nLCAnTG9uZy10ZXJtJ107XG4gICAgcHJpdmF0ZSBfbGlhYmlsaXR5U2VydmljZTogTGlhYmlsaXR5U2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ0xpYWJpbGl0eT86IExpYWJpbGl0eTtcblxuICAgIGNvbnN0cnVjdG9yKGV4aXN0aW5nTGlhYmlsaXR5PzogTGlhYmlsaXR5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5ID0gZXhpc3RpbmdMaWFiaWxpdHk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nTGlhYmlsaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVXaXRoRXhpc3RpbmdMaWFiaWxpdHkoZXhpc3RpbmdMaWFiaWxpdHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplV2l0aEV4aXN0aW5nTGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBsaWFiaWxpdHkubmFtZTtcbiAgICAgICAgdGhpcy5fYW1vdW50ID0gbGlhYmlsaXR5LmFtb3VudDtcbiAgICAgICAgdGhpcy5faW50ZXJlc3RSYXRlID0gbGlhYmlsaXR5LmludGVyZXN0UmF0ZTtcbiAgICAgICAgdGhpcy5fZHVlRGF0ZSA9IG5ldyBEYXRlKGxpYWJpbGl0eS5kdWVEYXRlKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXggPSB0aGlzLl90eXBlcy5pbmRleE9mKGxpYWJpbGl0eS50eXBlKTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX25hbWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduYW1lJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGFtb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fYW1vdW50OyB9XG4gICAgc2V0IGFtb3VudCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpY1ZhbHVlKSAmJiB0aGlzLl9hbW91bnQgIT09IG51bWVyaWNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYW1vdW50ID0gbnVtZXJpY1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnYW1vdW50JywgbnVtZXJpY1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpbnRlcmVzdFJhdGUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2ludGVyZXN0UmF0ZTsgfVxuICAgIHNldCBpbnRlcmVzdFJhdGUodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5faW50ZXJlc3RSYXRlICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2ludGVyZXN0UmF0ZScsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpOiBEYXRlIHsgcmV0dXJuIHRoaXMuX2R1ZURhdGU7IH1cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fZHVlRGF0ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2R1ZURhdGUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdHlwZXMoKTogTGlhYmlsaXR5VHlwZVtdIHsgcmV0dXJuIHRoaXMuX3R5cGVzOyB9XG4gICAgZ2V0IHNlbGVjdGVkVHlwZUluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZFR5cGVJbmRleDsgfVxuICAgIHNldCBzZWxlY3RlZFR5cGVJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFR5cGVJbmRleCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkVHlwZUluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZFR5cGVJbmRleCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpYWJpbGl0eSBuYW1lIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLl9hbW91bnQpIHx8IHRoaXMuX2Ftb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWFiaWxpdHkgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMuX2ludGVyZXN0UmF0ZSkgfHwgdGhpcy5faW50ZXJlc3RSYXRlIDwgMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW50ZXJlc3QgcmF0ZSBtdXN0IGJlIDAgb3IgZ3JlYXRlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaWFiaWxpdHkgPSBuZXcgTGlhYmlsaXR5KHtcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5fZXhpc3RpbmdMaWFiaWxpdHkgJiYgeyBpZDogdGhpcy5fZXhpc3RpbmdMaWFiaWxpdHkuaWQgfSksXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50cmltKCksXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLl9hbW91bnQsXG4gICAgICAgICAgICAgICAgaW50ZXJlc3RSYXRlOiB0aGlzLl9pbnRlcmVzdFJhdGUsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5fdHlwZXNbdGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXhdLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IHRoaXMuX2R1ZURhdGVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZXhpc3RpbmdMaWFiaWxpdHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlLnVwZGF0ZUxpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgdXBkYXRlZCBsaWFiaWxpdHk6ICR7bGlhYmlsaXR5Lm5hbWV9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UuYWRkTGlhYmlsaXR5KGxpYWJpbGl0eSk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSBhZGRlZCBsaWFiaWxpdHk6ICR7bGlhYmlsaXR5Lm5hbWV9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIGxpYWJpbGl0eScsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IExpYWJpbGl0eSwgTGlhYmlsaXR5VHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgRG9udXRDaGFydERhdGEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydCc7XG5cbmV4cG9ydCBjbGFzcyBMaWFiaWxpdHlEaXN0cmlidXRpb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9jaGFydERhdGE6IERvbnV0Q2hhcnREYXRhW10gPSBbXTtcblxuICAgIGdldCBjaGFydERhdGEoKTogRG9udXRDaGFydERhdGFbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFydERhdGE7XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YShsaWFiaWxpdGllczogTGlhYmlsaXR5W10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdG90YWwgPSBsaWFiaWxpdGllcy5yZWR1Y2UoKHN1bSwgbGlhYmlsaXR5KSA9PiBzdW0gKyBsaWFiaWxpdHkuYW1vdW50LCAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdyb3VwIGxpYWJpbGl0aWVzIGJ5IHR5cGVcbiAgICAgICAgY29uc3QgdHlwZU1hcCA9IG5ldyBNYXA8TGlhYmlsaXR5VHlwZSwgbnVtYmVyPigpO1xuICAgICAgICBsaWFiaWxpdGllcy5mb3JFYWNoKGxpYWJpbGl0eSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gdHlwZU1hcC5nZXQobGlhYmlsaXR5LnR5cGUpIHx8IDA7XG4gICAgICAgICAgICB0eXBlTWFwLnNldChsaWFiaWxpdHkudHlwZSwgY3VycmVudCArIGxpYWJpbGl0eS5hbW91bnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb252ZXJ0IHRvIGNoYXJ0IGRhdGFcbiAgICAgICAgdGhpcy5fY2hhcnREYXRhID0gQXJyYXkuZnJvbSh0eXBlTWFwLmVudHJpZXMoKSlcbiAgICAgICAgICAgIC5tYXAoKFt0eXBlLCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IHR5cGUsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IHR5cGUgPT09ICdTaG9ydC10ZXJtJyA/IENoYXJ0Q29sb3JzLlNob3J0VGVybSA6IENoYXJ0Q29sb3JzLkxvbmdUZXJtLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKHZhbHVlIC8gdG90YWwpICogMTAwKSA6IDBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjaGFydERhdGEnLCB0aGlzLl9jaGFydERhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IExpYWJpbGl0eSB9IGZyb20gJy4uLy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZywgQ29uZmlybURpYWxvZ09wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9kaWFsb2cnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcbmltcG9ydCB7IExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCB9IGZyb20gJy4vbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsJztcblxuY29uc3QgVEFHID0gJ0xpYWJpbGl0eUxpc3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5TGlzdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX2xpYWJpbGl0eVNlcnZpY2U6IExpYWJpbGl0eVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfbGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdID0gW107XG4gICAgcHJpdmF0ZSBfZGlzdHJpYnV0aW9uVmlld01vZGVsOiBMaWFiaWxpdHlEaXN0cmlidXRpb25WaWV3TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fbGlhYmlsaXR5U2VydmljZSA9IExpYWJpbGl0eVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsID0gbmV3IExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCgpO1xuICAgICAgICB0aGlzLmxvYWRMaWFiaWxpdGllcygpO1xuICAgIH1cblxuICAgIGdldCBsaWFiaWxpdGllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpYWJpbGl0aWVzLm1hcChsaWFiaWxpdHkgPT4gKHtcbiAgICAgICAgICAgIC4uLmxpYWJpbGl0eSxcbiAgICAgICAgICAgIGZvcm1hdHRlZEFtb3VudDogZm9ybWF0Q3VycmVuY3kobGlhYmlsaXR5LmFtb3VudCksXG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnRlcmVzdFJhdGU6IGZvcm1hdFBlcmNlbnRhZ2UobGlhYmlsaXR5LmludGVyZXN0UmF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fbGlhYmlsaXR5U2VydmljZS5nZXRUb3RhbExpYWJpbGl0aWVzKCkpO1xuICAgIH1cblxuICAgIGdldCBkaXN0cmlidXRpb25WaWV3TW9kZWwoKTogTGlhYmlsaXR5RGlzdHJpYnV0aW9uVmlld01vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnUmVmcmVzaGluZyBsaWFiaWxpdGllcyBsaXN0Jyk7XG4gICAgICAgIHRoaXMubG9hZExpYWJpbGl0aWVzKCk7XG4gICAgfVxuXG4gICAgb25BZGRMaWFiaWxpdHkoKTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlXCIpO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaWFiaWxpdHkgPSB0aGlzLl9saWFiaWxpdGllc1thcmdzLmluZGV4XTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogbGlhYmlsaXR5Lm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQW1vdW50OiAke2Zvcm1hdEN1cnJlbmN5KGxpYWJpbGl0eS5hbW91bnQpfVxcbkludGVyZXN0IFJhdGU6ICR7Zm9ybWF0UGVyY2VudGFnZShsaWFiaWxpdHkuaW50ZXJlc3RSYXRlKX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TGlhYmlsaXR5KGxpYWJpbGl0eSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRMaWFiaWxpdGllcygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2xpYWJpbGl0aWVzID0gdGhpcy5fbGlhYmlsaXR5U2VydmljZS5nZXRMaWFiaWxpdGllcygpO1xuICAgICAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsLnVwZGF0ZURhdGEodGhpcy5fbGlhYmlsaXRpZXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbGlhYmlsaXRpZXMnLCB0aGlzLmxpYWJpbGl0aWVzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQnLCB0aGlzLnRvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYExvYWRlZCAke3RoaXMuX2xpYWJpbGl0aWVzLmxlbmd0aH0gbGlhYmlsaXRpZXNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBsb2FkaW5nIGxpYWJpbGl0aWVzJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0TGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UnLCB7IGxpYWJpbGl0eSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSk6IHZvaWQge1xuICAgICAgICBjb25zdCBkaWFsb2dPcHRpb25zOiBDb25maXJtRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaWFiaWxpdHk/JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHNob3dEaWFsb2coZGlhbG9nT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UuZGVsZXRlTGlhYmlsaXR5KGxpYWJpbGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTGlhYmlsaXRpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgUmVwb3J0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlcG9ydC1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5cbmV4cG9ydCBjbGFzcyBGaW5hbmNpYWxIZWFsdGhWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9yZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3JlcG9ydDogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3JlcG9ydFNlcnZpY2UgPSBSZXBvcnRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubG9hZFJlcG9ydCgpO1xuICAgIH1cblxuICAgIGdldCBuZXRXb3J0aEZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fcmVwb3J0Lm5ldFdvcnRoKTtcbiAgICB9XG5cbiAgICBnZXQgbW9udGhseUNhc2hmbG93Rm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9yZXBvcnQubW9udGhseUNhc2hmbG93KTtcbiAgICB9XG5cbiAgICBnZXQgZGVidFRvSW5jb21lUmF0aW9Gb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFBlcmNlbnRhZ2UodGhpcy5fcmVwb3J0LmRlYnRUb0luY29tZVJhdGlvICogMTAwKTtcbiAgICB9XG5cbiAgICBnZXQgbW9udGhseVJlcG9ydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBvcnQubW9udGhseVJlcG9ydHMubWFwKHJlcG9ydCA9PiAoe1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgbW9udGhZZWFyOiBgJHtuZXcgRGF0ZShyZXBvcnQueWVhciwgcmVwb3J0Lm1vbnRoKS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJyB9KX1gLFxuICAgICAgICAgICAgaW5jb21lRm9ybWF0dGVkOiBmb3JtYXRDdXJyZW5jeShyZXBvcnQuaW5jb21lKSxcbiAgICAgICAgICAgIGV4cGVuc2VzRm9ybWF0dGVkOiBmb3JtYXRDdXJyZW5jeShyZXBvcnQuZXhwZW5zZXMpLFxuICAgICAgICAgICAgc2F2aW5nc1JhdGVGb3JtYXR0ZWQ6IGZvcm1hdFBlcmNlbnRhZ2UocmVwb3J0LnNhdmluZ3NSYXRlKVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkUmVwb3J0KCkge1xuICAgICAgICB0aGlzLl9yZXBvcnQgPSB0aGlzLl9yZXBvcnRTZXJ2aWNlLmdlbmVyYXRlRmluYW5jaWFsSGVhbHRoUmVwb3J0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21vbnRobHlSZXBvcnRzJywgdGhpcy5tb250aGx5UmVwb3J0cyk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24sIFRyYW5zYWN0aW9uVHlwZSwgVHJhbnNhY3Rpb25DYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBZGRUcmFuc2FjdGlvblZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBZGRUcmFuc2FjdGlvblZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX2Rlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9hbW91bnQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRDYXRlZ29yeUluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2NhdGVnb3JpZXM6IFRyYW5zYWN0aW9uQ2F0ZWdvcnlbXSA9IFtdO1xuICAgIHByaXZhdGUgX2lzSW5jb21lOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3RyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgX2V4aXN0aW5nVHJhbnNhY3Rpb24/OiBUcmFuc2FjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGlzSW5jb21lOiBib29sZWFuLCBleGlzdGluZ1RyYW5zYWN0aW9uPzogVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNJbmNvbWUgPSBpc0luY29tZTtcbiAgICAgICAgdGhpcy5fZXhpc3RpbmdUcmFuc2FjdGlvbiA9IGV4aXN0aW5nVHJhbnNhY3Rpb247XG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzID0gdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ1RyYW5zYWN0aW9uKGV4aXN0aW5nVHJhbnNhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplV2l0aEV4aXN0aW5nVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdHJhbnNhY3Rpb24uZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2Ftb3VudCA9IE51bWJlcih0cmFuc2FjdGlvbi5hbW91bnQpO1xuICAgICAgICB0aGlzLl9kYXRlID0gbmV3IERhdGUodHJhbnNhY3Rpb24uZGF0ZSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IHRoaXMuX2NhdGVnb3JpZXMuaW5kZXhPZih0cmFuc2FjdGlvbi5jYXRlZ29yeSk7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjsgfVxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXNjcmlwdGlvbiAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkZXNjcmlwdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBhbW91bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2Ftb3VudDsgfVxuICAgIHNldCBhbW91bnQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5fYW1vdW50ICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Ftb3VudCA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Ftb3VudCcsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGF0ZSgpOiBEYXRlIHsgcmV0dXJuIHRoaXMuX2RhdGU7IH1cbiAgICBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5fZGF0ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2RhdGUnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY2F0ZWdvcmllcygpOiBUcmFuc2FjdGlvbkNhdGVnb3J5W10geyByZXR1cm4gdGhpcy5fY2F0ZWdvcmllczsgfVxuICAgIGdldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDsgfVxuICAgIHNldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZENhdGVnb3J5SW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaXNJbmNvbWUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc0luY29tZTsgfVxuXG4gICAgcHJpdmF0ZSBnZXRDYXRlZ29yaWVzKCk6IFRyYW5zYWN0aW9uQ2F0ZWdvcnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0luY29tZSBcbiAgICAgICAgICAgID8gWydTYWxhcnknLCAnUmVhbCBFc3RhdGUnLCAnQnVzaW5lc3MnLCAnSW50ZXJlc3QvRGl2aWRlbmRzJ11cbiAgICAgICAgICAgIDogWydIb3VzaW5nJywgJ1RyYW5zcG9ydGF0aW9uJywgJ0Zvb2QnLCAnVXRpbGl0aWVzJywgJ0luc3VyYW5jZScsICdIZWFsdGhjYXJlJywgJ0VudGVydGFpbm1lbnQnLCAnTG9hbiddO1xuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5fZXhpc3RpbmdUcmFuc2FjdGlvbiAmJiB7IGlkOiB0aGlzLl9leGlzdGluZ1RyYW5zYWN0aW9uLmlkIH0pLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuX2lzSW5jb21lID8gJ2luY29tZScgOiAnZXhwZW5zZScsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuX2NhdGVnb3JpZXNbdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4XSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuX2Ftb3VudCxcbiAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLl9kYXRlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLl9kZXNjcmlwdGlvblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGlzdGluZ1RyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLnVwZGF0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgJHt0aGlzLl9pc0luY29tZSA/ICdpbmNvbWUnIDogJ2V4cGVuc2UnfSB0cmFuc2FjdGlvbmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UuYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgYWRkZWQgJHt0aGlzLl9pc0luY29tZSA/ICdpbmNvbWUnIDogJ2V4cGVuc2UnfSB0cmFuc2FjdGlvbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIHNhdmluZyB0cmFuc2FjdGlvbicsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvbkNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IERvbnV0Q2hhcnREYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25EaXN0cmlidXRpb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9jaGFydERhdGE6IERvbnV0Q2hhcnREYXRhW10gPSBbXTtcblxuICAgIGdldCBjaGFydERhdGEoKTogRG9udXRDaGFydERhdGFbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFydERhdGE7XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YSh0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10sIHR5cGU6ICdpbmNvbWUnIHwgJ2V4cGVuc2UnKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkVHJhbnNhY3Rpb25zID0gdHJhbnNhY3Rpb25zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gdHlwZSk7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gZmlsdGVyZWRUcmFuc2FjdGlvbnMucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdyb3VwIHRyYW5zYWN0aW9ucyBieSBjYXRlZ29yeVxuICAgICAgICBjb25zdCBjYXRlZ29yeU1hcCA9IG5ldyBNYXA8VHJhbnNhY3Rpb25DYXRlZ29yeSwgbnVtYmVyPigpO1xuICAgICAgICBmaWx0ZXJlZFRyYW5zYWN0aW9ucy5mb3JFYWNoKHRyYW5zYWN0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBjYXRlZ29yeU1hcC5nZXQodHJhbnNhY3Rpb24uY2F0ZWdvcnkpIHx8IDA7XG4gICAgICAgICAgICBjYXRlZ29yeU1hcC5zZXQodHJhbnNhY3Rpb24uY2F0ZWdvcnksIGN1cnJlbnQgKyB0cmFuc2FjdGlvbi5hbW91bnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb252ZXJ0IHRvIGNoYXJ0IGRhdGFcbiAgICAgICAgdGhpcy5fY2hhcnREYXRhID0gQXJyYXkuZnJvbShjYXRlZ29yeU1hcC5lbnRyaWVzKCkpXG4gICAgICAgICAgICAubWFwKChbY2F0ZWdvcnksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IENoYXJ0Q29sb3JzW2NhdGVnb3J5XSB8fCAnI0NCRDVFMCcsIC8vIERlZmF1bHQgY29sb3IgaWYgbm90IGZvdW5kXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgodmFsdWUgLyB0b3RhbCkgKiAxMDApIDogMFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NoYXJ0RGF0YScsIHRoaXMuX2NoYXJ0RGF0YSk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHNob3dEaWFsb2csIENvbmZpcm1EaWFsb2dPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbkRpc3RyaWJ1dGlvblZpZXdNb2RlbCB9IGZyb20gJy4vdHJhbnNhY3Rpb24tZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwnO1xuXG5jb25zdCBUQUcgPSAnVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX3RyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSA9IFtdO1xuICAgIHByaXZhdGUgX2ZpbHRlclR5cGU6ICdpbmNvbWUnIHwgJ2V4cGVuc2UnIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3RyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDogVHJhbnNhY3Rpb25EaXN0cmlidXRpb25WaWV3TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXJUeXBlPzogJ2luY29tZScgfCAnZXhwZW5zZScpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZmlsdGVyVHlwZSA9IGZpbHRlclR5cGU7XG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWwgPSBuZXcgVHJhbnNhY3Rpb25EaXN0cmlidXRpb25WaWV3TW9kZWwoKTtcbiAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgZ2V0IGZpbHRlclR5cGUoKTogJ2luY29tZScgfCAnZXhwZW5zZScgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyVHlwZTtcbiAgICB9XG5cbiAgICBnZXQgZGlzdHJpYnV0aW9uVmlld01vZGVsKCk6IFRyYW5zYWN0aW9uRGlzdHJpYnV0aW9uVmlld01vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxBbW91bnRGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLl9maWx0ZXJUeXBlID09PSAnaW5jb21lJyBcbiAgICAgICAgICAgID8gdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRvdGFsSW5jb21lKClcbiAgICAgICAgICAgIDogdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRvdGFsRXhwZW5zZXMoKTtcbiAgICAgICAgcmV0dXJuIGBUb3RhbCAke3RoaXMuX2ZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ0luY29tZScgOiAnRXhwZW5zZXMnfTogJHtmb3JtYXRDdXJyZW5jeSh0b3RhbCl9YDtcbiAgICB9XG5cbiAgICBnZXQgdHJhbnNhY3Rpb25zKCkge1xuICAgICAgICBsZXQgZmlsdGVyZWRUcmFuc2FjdGlvbnMgPSBbLi4udGhpcy5fdHJhbnNhY3Rpb25zXTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJUeXBlKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFRyYW5zYWN0aW9ucyA9IGZpbHRlcmVkVHJhbnNhY3Rpb25zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gdGhpcy5fZmlsdGVyVHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRUcmFuc2FjdGlvbnMubWFwKHRyYW5zYWN0aW9uID0+ICh7XG4gICAgICAgICAgICAuLi50cmFuc2FjdGlvbixcbiAgICAgICAgICAgIGZvcm1hdHRlZEFtb3VudDogZm9ybWF0Q3VycmVuY3kodHJhbnNhY3Rpb24uYW1vdW50KSxcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGZvcm1hdERhdGUodHJhbnNhY3Rpb24uZGF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdSZWZyZXNoaW5nIHRyYW5zYWN0aW9ucyBsaXN0Jyk7XG4gICAgICAgIHRoaXMubG9hZFRyYW5zYWN0aW9ucygpO1xuICAgIH1cblxuICAgIG9uQWRkVHJhbnNhY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UnLCB7IFxuICAgICAgICAgICAgaXNJbmNvbWU6IHRoaXMuX2ZpbHRlclR5cGUgPT09ICdpbmNvbWUnIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogeyBpbmRleDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLl90cmFuc2FjdGlvbnNbYXJncy5pbmRleF07XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbWVzc2FnZTogYEFtb3VudDogJHtmb3JtYXRDdXJyZW5jeSh0cmFuc2FjdGlvbi5hbW91bnQpfVxcbkRhdGU6ICR7Zm9ybWF0RGF0ZSh0cmFuc2FjdGlvbi5kYXRlKX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFRyYW5zYWN0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9ucyA9IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5nZXRUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9maWx0ZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsLnVwZGF0ZURhdGEodGhpcy5fdHJhbnNhY3Rpb25zLCB0aGlzLl9maWx0ZXJUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RyYW5zYWN0aW9ucycsIHRoaXMudHJhbnNhY3Rpb25zKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsQW1vdW50Rm9ybWF0dGVkJywgdGhpcy50b3RhbEFtb3VudEZvcm1hdHRlZCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgTG9hZGVkICR7dGhpcy5fdHJhbnNhY3Rpb25zLmxlbmd0aH0gdHJhbnNhY3Rpb25zYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgbG9hZGluZyB0cmFuc2FjdGlvbnMnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGVkaXRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZScsIHsgXG4gICAgICAgICAgICBpc0luY29tZTogdHJhbnNhY3Rpb24udHlwZSA9PT0gJ2luY29tZScsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbiBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlhbG9nT3B0aW9uczogQ29uZmlybURpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdHJhbnNhY3Rpb24/JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHNob3dEaWFsb2coZGlhbG9nT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5kZWxldGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZEFzc2V0Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkQXNzZXRWaWV3TW9kZWwoKTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFzc2V0TGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0Fzc2V0TGlzdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBBc3NldCBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQXNzZXRMaXN0Vmlld01vZGVsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0ZWQgdG8gQXNzZXQgTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgQXNzZXRMaXN0Vmlld01vZGVsO1xuICAgIHZpZXdNb2RlbD8ucmVmcmVzaCgpO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQWRkTGlhYmlsaXR5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkTGlhYmlsaXR5Vmlld01vZGVsKCk7XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMaWFiaWxpdHlMaXN0Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3Qtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTGlhYmlsaXR5TGlzdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBMaWFiaWxpdHkgTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGlmICghcGFnZS5iaW5kaW5nQ29udGV4dCkge1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IExpYWJpbGl0eUxpc3RWaWV3TW9kZWwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZWRUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRlZCB0byBMaWFiaWxpdHkgTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgTGlhYmlsaXR5TGlzdFZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWw/LnJlZnJlc2goKTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZFRyYW5zYWN0aW9uVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5cbmNvbnN0IFRBRyA9ICdBZGRUcmFuc2FjdGlvblBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBBZGQgVHJhbnNhY3Rpb24gcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBpc0luY29tZSA9IGFyZ3MuY29udGV4dD8uaXNJbmNvbWUgPz8gZmFsc2U7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhcmdzLmNvbnRleHQ/LnRyYW5zYWN0aW9uIGFzIFRyYW5zYWN0aW9uIHwgdW5kZWZpbmVkO1xuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkVHJhbnNhY3Rpb25WaWV3TW9kZWwoaXNJbmNvbWUsIHRyYW5zYWN0aW9uKTtcbiAgICBcbiAgICAvLyBTZXQgdGhlIEFjdGlvbkJhciB0aXRsZSBiYXNlZCBvbiB3aGV0aGVyIHdlJ3JlIGVkaXRpbmcgb3IgYWRkaW5nXG4gICAgY29uc3QgYWN0aW9uID0gdHJhbnNhY3Rpb24gPyAnRWRpdCcgOiAnQWRkJztcbiAgICBjb25zdCB0eXBlID0gaXNJbmNvbWUgPyAnSW5jb21lJyA6ICdFeHBlbnNlJztcbiAgICBwYWdlLmFjdGlvbkJhci50aXRsZSA9IGAke2FjdGlvbn0gJHt0eXBlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nRnJvbShhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgZnJvbSBBZGQgVHJhbnNhY3Rpb24gcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbnVsbDtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ1RyYW5zYWN0aW9uTGlzdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBUcmFuc2FjdGlvbiBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsKGFyZ3MuY29udGV4dD8uZmlsdGVyVHlwZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0ZWQgdG8gVHJhbnNhY3Rpb24gTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsO1xuICAgIHZpZXdNb2RlbD8ucmVmcmVzaCgpO1xufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJtYWluLXBhZ2VcXFwiPlxcbjwvRnJhbWU+XFxuXCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwibS00XFxcIiBcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJnLWdyYXktMTAwIHAtNCByb3VuZGVkLWxnXFxcIj5cXG4gICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgY2hhcnREYXRhIH19XFxcIiBoZWlnaHQ9XFxcIjIwMFxcXCI+XFxuICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJ7eyBsYWJlbCB9fVxcXCIgY2xhc3M9XFxcInRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgcGVyY2VudGFnZSArICclJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT1cXFwie3sgcGVyY2VudGFnZSB9fVxcXCIgbWF4VmFsdWU9XFxcIjEwMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibS0xXFxcIiBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9HcmlkTGF5b3V0PlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuPC9TdGFja0xheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJwLTQgYm9yZGVyLWIgYmctd2hpdGVcXFwiPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgdGl0bGUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtZ3JheS04MDBcXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBhbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwie3sgYW1vdW50Q2xhc3MgfX1cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzdWJ0aXRsZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZXRhaWxzIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbjwvR3JpZExheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiUGVyc29uYWwgRmluYW5jZSBNYW5hZ2VyXFxcIiBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkZpbmFuY2UgTWFuYWdlclxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLWdyYXktMTAwXFxcIj5cXG4gICAgICAgICAgICA8IS0tIE5ldCBXb3J0aCBDYXJkIC0tPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IFdvcnRoXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIG1iLTFcXFwiIHJvdz1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5ldFdvcnRoRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC0yeGwgZm9udC1ib2xkXFxcIiByb3c9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwhLS0gUXVpY2sgQWN0aW9ucyAtLT5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwibXgtNCBtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBJbmNvbWUgJiBFeHBlbnNlIFJvdyAtLT5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJJTkNPTUVcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvSW5jb21lXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG0tMSByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJFWFBFTlNFXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGVUb0V4cGVuc2VcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG0tMSByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gQXNzZXRzICYgTGlhYmlsaXRpZXMgUm93IC0tPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFTU0VUU1xcXCIgdGFwPVxcXCJvbk5hdmlnYXRlVG9Bc3NldHNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTElBQklMSVRJRVNcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvTGlhYmlsaXRpZXNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG0tMSByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBGaW5hbmNpYWwgU3VtbWFyeSBDYXJkIC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkZpbmFuY2lhbCBTdW1tYXJ5XFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gTW9udGhseSBDYXNoZmxvdyAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgQ2FzaGZsb3c6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgY2FzaGZsb3dGb3JtYXR0ZWQgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBjYXNoZmxvdyA+PSAwID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LXJlZC02MDAnIH19IHRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIFRvdGFsIEluY29tZSAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRvdGFsIEluY29tZTpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbEluY29tZUZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JlZW4tNjAwIHRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIFRvdGFsIEV4cGVuc2VzIC0tPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgRXhwZW5zZXM6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxFeHBlbnNlc0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmVkLTYwMCB0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBUb3RhbCBBc3NldHMgLS0+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNsYXNzPVxcXCJtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUb3RhbCBBc3NldHM6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxBc3NldHNGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWJsdWUtNjAwIHRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIFRvdGFsIExpYWJpbGl0aWVzIC0tPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgTGlhYmlsaXRpZXM6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxMaWFiaWxpdGllc0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcHVycGxlLTYwMCB0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFkZCBBc3NldFxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcImJnLWdyYXktMTAwXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBOYW1lIEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQXNzZXQgTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgbmFtZVxcXCIgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIFZhbHVlIEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVmFsdWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgdmFsdWVcXFwiIHRleHQ9XFxcInt7IHZhbHVlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBDYXRlZ29yeSBTZWxlY3Rpb24gLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDYXRlZ29yeVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IGNhdGVnb3JpZXMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkQ2F0ZWdvcnlJbmRleCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIFB1cmNoYXNlIERhdGUgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJQdXJjaGFzZSBEYXRlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBkYXRlPVxcXCJ7eyBwdXJjaGFzZURhdGUgfX1cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gU2F2ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTYXZlIEFzc2V0XFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXQtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGVkVG89XFxcIm5hdmlnYXRlZFRvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFzc2V0c1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcImJnLWdyYXktMTAwXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICA8IS0tIFRvdGFsIEFzc2V0cyBDYXJkIC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctYmx1ZS01MDAgbS00IHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRvdGFsIEFzc2V0c1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxBc3NldHNGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gQXNzZXQgRGlzdHJpYnV0aW9uIC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHAtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFzc2V0IERpc3RyaWJ1dGlvblxcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgZGlzdHJpYnV0aW9uVmlld01vZGVsLmNoYXJ0RGF0YSB9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8UmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwi4pePXFxcIiBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtci0yXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgbGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNzAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgcGVyY2VudGFnZSArICclJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwZXJjZW50YWdlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibS0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gQWRkIEFzc2V0IEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFkZCBBc3NldFxcXCIgdGFwPVxcXCJ7eyBvbkFkZEFzc2V0IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBteC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBBc3NldCBMaXN0IC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQXNzZXQgTGlzdFxcXCIgY2xhc3M9XFxcInAtNCB0ZXh0LXhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBhc3NldHMgfX1cXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCIgaGVpZ2h0PVxcXCI0MDBcXFwiIGNsYXNzPVxcXCJsaXN0LXZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtZ3JheS04MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRWYWx1ZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWJsdWUtNjAwIGZvbnQtYm9sZCB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgY2F0ZWdvcnkgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkRGF0ZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFkZCBMaWFiaWxpdHlcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJiZy1ncmF5LTEwMFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gTmFtZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxpYWJpbGl0eSBOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBuYW1lXFxcIiB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gQW1vdW50IEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQW1vdW50XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIGFtb3VudFxcXCIgdGV4dD1cXFwie3sgYW1vdW50IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBJbnRlcmVzdCBSYXRlIEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSW50ZXJlc3QgUmF0ZSAoJSlcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgaW50ZXJlc3QgcmF0ZVxcXCIgdGV4dD1cXFwie3sgaW50ZXJlc3RSYXRlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBUeXBlIFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlR5cGVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyB0eXBlcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRUeXBlSW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBEdWUgRGF0ZSAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkR1ZSBEYXRlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBkYXRlPVxcXCJ7eyBkdWVEYXRlIH19XFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIFNhdmUgQnV0dG9uIC0tPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2F2ZSBMaWFiaWxpdHlcXFwiIHRhcD1cXFwie3sgb25TYXZlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiXFxuICAgIG5hdmlnYXRlZFRvPVxcXCJuYXZpZ2F0ZWRUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMaWFiaWxpdGllc1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcImJnLWdyYXktMTAwXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICA8IS0tIFRvdGFsIExpYWJpbGl0aWVzIENhcmQgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIG0tNCBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUb3RhbCBMaWFiaWxpdGllc1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxMaWFiaWxpdGllc0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBEaXN0cmlidXRpb24gQ2hhcnQgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGlhYmlsaXR5IERpc3RyaWJ1dGlvblxcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgZGlzdHJpYnV0aW9uVmlld01vZGVsLmNoYXJ0RGF0YSB9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8UmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwi4pePXFxcIiBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtci0yXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgbGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNzAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgcGVyY2VudGFnZSArICclJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwZXJjZW50YWdlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibS0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gQWRkIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFkZCBMaWFiaWxpdHlcXFwiIHRhcD1cXFwie3sgb25BZGRMaWFiaWxpdHkgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXgtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gTGlhYmlsaXRpZXMgTGlzdCAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxpYWJpbGl0eSBMaXN0XFxcIiBjbGFzcz1cXFwicC00IHRleHQteGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IGxpYWJpbGl0aWVzIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIGhlaWdodD1cXFwiNDAwXFxcIiBjbGFzcz1cXFwibGlzdC12aWV3XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkQW1vdW50IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcHVycGxlLTYwMCBmb250LWJvbGQgdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHR5cGUgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkSW50ZXJlc3RSYXRlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJGaW5hbmNpYWwgSGVhbHRoXFxcIiAvPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXc+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPCEtLSBPdmVydmlldyBTZWN0aW9uIC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctYmx1ZS0xMDAgcC00IHJvdW5kZWQtbGcgbWItNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGaW5hbmNpYWwgT3ZlcnZpZXdcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJOZXQgV29ydGg6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmV0V29ydGhGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJNb250aGx5IENhc2hmbG93OlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG1vbnRobHlDYXNoZmxvd0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkRlYnQtdG8tSW5jb21lOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRlYnRUb0luY29tZVJhdGlvRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodCBmb250LWJvbGRcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIE1vbnRobHkgUmVwb3J0cyAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTW9udGhseSBSZXBvcnRzXFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItMlxcXCIgLz5cXG4gICAgICAgICAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IG1vbnRobHlSZXBvcnRzIH19XFxcIiBoZWlnaHQ9XFxcIjMwMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbW9udGhZZWFyIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgc2F2aW5nc1JhdGVGb3JtYXR0ZWQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgJ0luY29tZTogJyArIGluY29tZUZvcm1hdHRlZCB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdFeHBlbnNlczogJyArIGV4cGVuc2VzRm9ybWF0dGVkIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJwLTQgYm9yZGVyLWJcXFwiPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRBbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodFxcXCIgLz5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IHN1YnRpdGxlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbVxcXCIgLz5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IGRldGFpbHMgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuPC9HcmlkTGF5b3V0PlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIlxcbiAgICBuYXZpZ2F0aW5nRnJvbT1cXFwibmF2aWdhdGluZ0Zyb21cXFwiPlxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJiZy1ibHVlLTYwMFxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXNJbmNvbWUgPyAnQWRkIEluY29tZScgOiAnQWRkIEV4cGVuc2UnIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldyBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8IS0tIERlc2NyaXB0aW9uIEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIGRlc2NyaXB0aW9uXFxcIiB0ZXh0PVxcXCJ7eyBkZXNjcmlwdGlvbiB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIEFtb3VudCBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFtb3VudFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBhbW91bnRcXFwiIHRleHQ9XFxcInt7IGFtb3VudCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gQ2F0ZWdvcnkgU2VsZWN0aW9uIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2F0ZWdvcnlcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBjYXRlZ29yaWVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZENhdGVnb3J5SW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBEYXRlIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgZGF0ZT1cXFwie3sgZGF0ZSB9fVxcXCIgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcInt7IGlzSW5jb21lID8gJ1NhdmUgSW5jb21lJyA6ICdTYXZlIEV4cGVuc2UnIH19XFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgaXNJbmNvbWUgPyAnYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgOiAnYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtdC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTInIH19XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGVkVG89XFxcIm5hdmlnYXRlZFRvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ0luY29tZScgOiAnRXhwZW5zZXMnIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldyBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwhLS0gU3VtbWFyeSBDYXJkIC0tPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwie3sgZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnYmctZ3JlZW4tNTAwIG0tNCBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNCcgOiAnYmctcmVkLTUwMCBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTQnIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ1RvdGFsIEluY29tZScgOiAnVG90YWwgRXhwZW5zZXMnIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRvdGFsQW1vdW50Rm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIERpc3RyaWJ1dGlvbiBDaGFydCAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCBwLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdJbmNvbWUgRGlzdHJpYnV0aW9uJyA6ICdFeHBlbnNlIERpc3RyaWJ1dGlvbicgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8UmVwZWF0ZXIgaXRlbXM9XFxcInt7IGRpc3RyaWJ1dGlvblZpZXdNb2RlbC5jaGFydERhdGEgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJtYi0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcInt7IGxhYmVsIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTcwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcInt7IHBlcmNlbnRhZ2UgKyAnJScgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT1cXFwie3sgcGVyY2VudGFnZSB9fVxcXCIgbWF4VmFsdWU9XFxcIjEwMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyBjb2xvciB9fVxcXCIgY2xhc3M9XFxcIm0tMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIEFjdGlvbiBCdXR0b24gLS0+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJ7eyAnQWRkICcgKyAoZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnSW5jb21lJyA6ICdFeHBlbnNlJykgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBvbkFkZFRyYW5zYWN0aW9uIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXgtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yJyA6ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgfX1cXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBUcmFuc2FjdGlvbnMgTGlzdCAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRyYW5zYWN0aW9uIEhpc3RvcnlcXFwiIGNsYXNzPVxcXCJwLTQgdGV4dC14bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgdHJhbnNhY3Rpb25zIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIGhlaWdodD1cXFwiNDAwXFxcIiBjbGFzcz1cXFwibGlzdC12aWV3XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZXNjcmlwdGlvbiB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGQgdGV4dC1ncmF5LTgwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZEFtb3VudCB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IHR5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LXJlZC02MDAnIH19IGZvbnQtYm9sZCB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgY2F0ZWdvcnkgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkRGF0ZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=