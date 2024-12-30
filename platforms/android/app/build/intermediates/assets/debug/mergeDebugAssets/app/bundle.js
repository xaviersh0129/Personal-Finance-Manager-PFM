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

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".visible"],"declarations":[{"type":"declaration","property":"visibility","value":"visible"}]},{"type":"rule","selectors":[".m-1"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".m-2"],"declarations":[{"type":"declaration","property":"margin","value":"8"}]},{"type":"rule","selectors":[".m-4"],"declarations":[{"type":"declaration","property":"margin","value":"16"}]},{"type":"rule","selectors":[".mx-4"],"declarations":[{"type":"declaration","property":"margin-left","value":"16"},{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":[".mb-1"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".ml-2"],"declarations":[{"type":"declaration","property":"margin-left","value":"8"}]},{"type":"rule","selectors":[".mr-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".w-full"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".rounded-xl"],"declarations":[{"type":"declaration","property":"border-radius","value":"12"}]},{"type":"rule","selectors":[".border-b"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1px"}]},{"type":"rule","selectors":[".bg-blue-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(219 234 254 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-blue-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(59 130 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-blue-600"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(37 99 235 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-gray-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(243 244 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-green-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(34 197 94 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-indigo-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(99 102 241 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-purple-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(168 85 247 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-red-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(239 68 68 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".p-6"],"declarations":[{"type":"declaration","property":"padding","value":"24"}]},{"type":"rule","selectors":[".text-right"],"declarations":[{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-lg"],"declarations":[{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-sm"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"line-height","value":"20"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".font-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"700"}]},{"type":"rule","selectors":[".font-medium"],"declarations":[{"type":"declaration","property":"font-weight","value":"500"}]},{"type":"rule","selectors":[".uppercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".text-blue-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(37 99 235 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(75 85 99 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-700"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(55 65 81 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-800"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(31 41 55 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-green-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(22 163 74 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-purple-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(147 51 234 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-red-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(220 38 38 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"#2563eb"},{"type":"declaration","property":"color","value":"#ffffff"}]},{"type":"rule","selectors":["Button"],"declarations":[{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".card"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffffff"},{"type":"declaration","property":"border-radius","value":"12"},{"type":"declaration","property":"margin","value":"8"},{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".list-view"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["Progress"],"declarations":[{"type":"declaration","property":"height","value":"8"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".input-field"],"declarations":[{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"margin","value":"8 0"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e2e8f0"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"background-color","value":"#f8fafc"}]},{"type":"rule","selectors":[".form-label"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"color","value":"#64748b"},{"type":"declaration","property":"margin-bottom","value":"4"}]}],"parsingErrors":[]}}
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
/* harmony export */   onNavigateToLiabilities: () => (/* binding */ onNavigateToLiabilities),
/* harmony export */   onNavigateToMonthlySnapshot: () => (/* binding */ onNavigateToMonthlySnapshot)
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
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Attempting to navigate to Income page');
    try {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)("views/transactions/transaction-list-page", { filterType: 'income' });
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Successfully navigated to Income page');
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Failed to navigate to Income page', error);
    }
}
function onNavigateToExpense(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Attempting to navigate to Expense page');
    try {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)("views/transactions/transaction-list-page", { filterType: 'expense' });
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Successfully navigated to Expense page');
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Failed to navigate to Expense page', error);
    }
}
function onNavigateToAssets(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Attempting to navigate to Assets page');
    try {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)("views/assets/asset-list-page");
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Successfully navigated to Assets page');
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Failed to navigate to Assets page', error);
    }
}
function onNavigateToLiabilities(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Attempting to navigate to Liabilities page');
    try {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)("views/liabilities/liability-list-page");
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Successfully navigated to Liabilities page');
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Failed to navigate to Liabilities page', error);
    }
}
function onNavigateToMonthlySnapshot(args) {
    _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Attempting to navigate to Monthly Snapshot page');
    try {
        (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_1__.navigateToPage)("views/monthly-snapshot/monthly-snapshot-page");
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.debug(TAG, 'Successfully navigated to Monthly Snapshot page');
    }
    catch (error) {
        _utils_logger__WEBPACK_IMPORTED_MODULE_2__.Logger.error(TAG, 'Failed to navigate to Monthly Snapshot page', error);
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
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/transaction-service.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/asset-service.ts");
/* harmony import */ var _services_liability_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/liability-service.ts");
/* harmony import */ var _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/monthly-snapshot-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/formatters.ts");
/* harmony import */ var _utils_financial_calculations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/financial-calculations.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/utils/logger.ts");








const TAG = 'DashboardViewModel';
class DashboardViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_7__.Observable {
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
        this.transactionService = _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService.getInstance();
        this.assetService = _services_asset_service__WEBPACK_IMPORTED_MODULE_1__.AssetService.getInstance();
        this.liabilityService = _services_liability_service__WEBPACK_IMPORTED_MODULE_2__.LiabilityService.getInstance();
        this.monthlySnapshotService = _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_3__.MonthlySnapshotService.getInstance();
        this.calculateFinancials();
    }
    // Existing getters...
    get netWorthFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(this._netWorth);
    }
    get totalIncomeFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(this._totalIncome);
    }
    get totalExpensesFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(this._totalExpenses);
    }
    get totalAssetsFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(this._totalAssets);
    }
    get totalLiabilitiesFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(this._totalLiabilities);
    }
    get cashflowFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(this._cashflow);
    }
    get hourlyRateFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatCurrency)(Math.round(this._hourlyRate * 100) / 100);
    }
    get cashflow() {
        return this._cashflow;
    }
    get sharpeRatioFormatted() {
        return this._sharpeRatio !== null
            ? (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatPercentage)(this._sharpeRatio, false)
            : 'N/A';
    }
    get weightedInterestRateFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatPercentage)(this._weightedInterestRate);
    }
    // New getters for financial ratios
    get dtiFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatPercentage)(this._dti);
    }
    get lrFormatted() {
        return this._lr.toFixed(2);
    }
    get darFormatted() {
        return (0,_utils_formatters__WEBPACK_IMPORTED_MODULE_4__.formatPercentage)(this._dar);
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
            // Calculate net worth
            this._netWorth = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_5__.calculateNetWorth)(assets, liabilities);
            // Calculate monthly cashflow
            this._cashflow = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_5__.calculateMonthlyCashflow)(transactions);
            // Calculate hourly rate
            const totalTimeRequired = this.transactionService.getTotalTimeRequired();
            this._hourlyRate = totalTimeRequired > 0 ? this._totalIncome / totalTimeRequired : 0;
            // Calculate Sharpe Ratio
            this._sharpeRatio = this.monthlySnapshotService.calculateSharpeRatio();
            // Calculate weighted average interest rate
            this._weightedInterestRate = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_5__.calculateWeightedAverageInterestRate)(liabilities);
            // Calculate new financial ratios
            this._dti = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_5__.calculateDTI)(transactions);
            this._lr = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_5__.calculateLR)(assets, transactions);
            this._dar = (0,_utils_financial_calculations__WEBPACK_IMPORTED_MODULE_5__.calculateDAR)(assets, liabilities);
            // Notify all property changes
            this.notifyPropertyChange('netWorthFormatted', this.netWorthFormatted);
            this.notifyPropertyChange('totalIncomeFormatted', this.totalIncomeFormatted);
            this.notifyPropertyChange('totalExpensesFormatted', this.totalExpensesFormatted);
            this.notifyPropertyChange('totalAssetsFormatted', this.totalAssetsFormatted);
            this.notifyPropertyChange('totalLiabilitiesFormatted', this.totalLiabilitiesFormatted);
            this.notifyPropertyChange('cashflowFormatted', this.cashflowFormatted);
            this.notifyPropertyChange('cashflow', this.cashflow);
            this.notifyPropertyChange('hourlyRateFormatted', this.hourlyRateFormatted);
            this.notifyPropertyChange('sharpeRatioFormatted', this.sharpeRatioFormatted);
            this.notifyPropertyChange('weightedInterestRateFormatted', this.weightedInterestRateFormatted);
            this.notifyPropertyChange('dtiFormatted', this.dtiFormatted);
            this.notifyPropertyChange('lrFormatted', this.lrFormatted);
            this.notifyPropertyChange('darFormatted', this.darFormatted);
            _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.debug(TAG, 'Financial calculations completed successfully');
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_6__.Logger.error(TAG, 'Error calculating financials', error);
        }
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
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/logger.ts");





const TAG = 'AddSnapshotViewModel';
class AddSnapshotViewModel extends _base_view_model__WEBPACK_IMPORTED_MODULE_0__.BaseViewModel {
    constructor(existingSnapshot) {
        super();
        this._netAsset = 0;
        this._yearIndex = 2; // Default to current year (middle of the 5-year range)
        this._years = [];
        this._months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        this._snapshotService = _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_2__.MonthlySnapshotService.getInstance();
        this._eventBus = _services_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService.getInstance();
        this._existingSnapshot = existingSnapshot;
        const currentDate = new Date();
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
    get yearIndex() { return this._yearIndex; }
    set yearIndex(value) {
        if (this._yearIndex !== value) {
            this._yearIndex = value;
            this.notifyPropertyChange('yearIndex', value);
        }
    }
    get selectedYear() { return this._years[this._yearIndex]; }
    get selectedMonth() { return this._selectedMonth; }
    set selectedMonth(value) {
        if (this._selectedMonth !== value) {
            this._selectedMonth = value;
            this.notifyPropertyChange('selectedMonth', value);
        }
    }
    get years() { return this._years; }
    get months() { return this._months; }
    get isEditing() { return !!this._existingSnapshot; }
    initializeYears() {
        const currentYear = new Date().getFullYear();
        this._years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
    }
    initializeWithExistingSnapshot(snapshot) {
        this._netAsset = snapshot.netAsset;
        this._yearIndex = this._years.indexOf(snapshot.year);
        this._selectedMonth = snapshot.month;
    }
    onSave() {
        try {
            _utils_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.debug(TAG, 'Attempting to save snapshot');
            if (this._netAsset <= 0) {
                throw new Error('Net asset value must be greater than 0');
            }
            const snapshot = new _models_monthly_snapshot__WEBPACK_IMPORTED_MODULE_1__.MonthlySnapshot({
                ...(this._existingSnapshot && { id: this._existingSnapshot.id }),
                year: this.selectedYear,
                month: this._selectedMonth,
                netAsset: this._netAsset
            });
            if (this._existingSnapshot) {
                this._snapshotService.updateSnapshot(snapshot);
                _utils_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.debug(TAG, `Successfully updated snapshot for ${this._months[this._selectedMonth]} ${this.selectedYear}`);
            }
            else {
                this._snapshotService.addSnapshot(snapshot);
                _utils_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.debug(TAG, `Successfully added snapshot for ${this._months[this._selectedMonth]} ${this.selectedYear}`);
            }
            // Emit event before navigating back
            this._eventBus.emit(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventNames.SNAPSHOT_UPDATED);
            this.goBack();
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_4__.Logger.error(TAG, 'Error saving snapshot', error);
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
        const transaction = this._transactions[args.index];
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Add Liability\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView class=\"bg-gray-100\">\n        <StackLayout class=\"p-4\">\n            <StackLayout class=\"bg-white p-6 rounded-xl elevation-4\">\n                <!-- Name Field -->\n                <Label text=\"Liability Name\" class=\"form-label\" />\n                <TextField hint=\"Enter name\" text=\"{{ name }}\" \n                          class=\"input-field\" />\n                \n                <!-- Amount Field -->\n                <Label text=\"Amount\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter amount\" text=\"{{ amount }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Interest Rate Field -->\n                <Label text=\"Interest Rate (%)\" class=\"form-label mt-4\" />\n                <TextField hint=\"Enter interest rate\" text=\"{{ interestRate }}\" \n                          keyboardType=\"number\"\n                          class=\"input-field\" />\n                \n                <!-- Type Selection -->\n                <Label text=\"Type\" class=\"form-label mt-4\" />\n                <ListPicker items=\"{{ types }}\" \n                           selectedIndex=\"{{ selectedTypeIndex }}\"\n                           class=\"input-field\" />\n            </StackLayout>\n            \n            <!-- Save Button -->\n            <Button text=\"Save Liability\" tap=\"{{ onSave }}\" \n                    class=\"bg-purple-500 text-white font-medium p-4 mt-4 rounded-xl elevation-2\" />\n        </StackLayout>\n    </ScrollView>\n</Page>"
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

/***/ "./app/views/monthly-snapshot/add-snapshot-page.xml":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"{{ isEditing ? 'Edit Snapshot' : 'Add Snapshot' }}\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <StackLayout class=\"bg-gray-100\">\n        <StackLayout class=\"bg-white p-6 m-4 rounded-xl elevation-4\">\n            <!-- Year Selection -->\n            <Label text=\"Year\" class=\"form-label\" />\n            <ListPicker items=\"{{ years }}\" \n                       selectedIndex=\"{{ yearIndex }}\"\n                       class=\"input-field\" />\n\n            <!-- Month Selection -->\n            <Label text=\"Month\" class=\"form-label mt-4\" />\n            <ListPicker items=\"{{ months }}\" \n                       selectedIndex=\"{{ selectedMonth }}\"\n                       class=\"input-field\" />\n\n            <!-- Net Asset Value -->\n            <Label text=\"Net Asset Value\" class=\"form-label mt-4\" />\n            <TextField hint=\"Enter net asset value\" text=\"{{ netAsset }}\" \n                      keyboardType=\"number\"\n                      class=\"input-field\" />\n                      \n            <!-- Save Button - Fixed tap binding -->\n            <Button text=\"{{ isEditing ? 'Update Snapshot' : 'Save Snapshot' }}\" \n                    tap=\"{{ onSave }}\" \n                    class=\"bg-blue-500 text-white font-medium p-4 mt-4 rounded-xl\" />\n        </StackLayout>\n    </StackLayout>\n</Page>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RGQSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ0w7QUFFQztBQUViO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNiO0FBQ0osQ0FBQztBQUFDLCtEQUFlOztJQUViLE1BQU0sS0FBSztBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1hEOztBQUVBLHNDQUFzQyxrQ0FBa0MsVUFBVSxzRUFBc0Usb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsK0RBQStELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsd0RBQXdELEVBQUUsNkRBQTZELEVBQUUsa0ZBQWtGLEVBQUUseUVBQXlFLEVBQUUsd0VBQXdFLEVBQUUsdUVBQXVFLEVBQUUsdURBQXVELEVBQUUsNkRBQTZELEVBQUUsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsOERBQThELEVBQUUsZ0VBQWdFLEVBQUUsc0VBQXNFLEVBQUUsb0VBQW9FLEVBQUUscUVBQXFFLEVBQUUsc0VBQXNFLEVBQUUsa0VBQWtFLEVBQUUsbUVBQW1FLEVBQUUsb0VBQW9FLEVBQUUsaUVBQWlFLEVBQUUsK0RBQStELEVBQUUsaUVBQWlFLEVBQUUsZ0VBQWdFLEVBQUUsZ0VBQWdFLEVBQUUsRUFBRSwwREFBMEQsb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsK0RBQStELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsd0RBQXdELEVBQUUsNkRBQTZELEVBQUUsa0ZBQWtGLEVBQUUseUVBQXlFLEVBQUUsd0VBQXdFLEVBQUUsdUVBQXVFLEVBQUUsdURBQXVELEVBQUUsNkRBQTZELEVBQUUsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsOERBQThELEVBQUUsZ0VBQWdFLEVBQUUsc0VBQXNFLEVBQUUsb0VBQW9FLEVBQUUscUVBQXFFLEVBQUUsc0VBQXNFLEVBQUUsa0VBQWtFLEVBQUUsbUVBQW1FLEVBQUUsb0VBQW9FLEVBQUUsaUVBQWlFLEVBQUUsK0RBQStELEVBQUUsaUVBQWlFLEVBQUUsZ0VBQWdFLEVBQUUsZ0VBQWdFLEVBQUUsRUFBRSx3REFBd0QsK0RBQStELEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxxREFBcUQsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsMERBQTBELEVBQUUsRUFBRSxxREFBcUQsMkRBQTJELEVBQUUsRUFBRSxxREFBcUQsMERBQTBELEVBQUUsRUFBRSx1REFBdUQsdURBQXVELEVBQUUsRUFBRSwyREFBMkQsNERBQTRELEVBQUUsRUFBRSwyREFBMkQsNkRBQTZELEVBQUUsRUFBRSx5REFBeUQsb0VBQW9FLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsd0dBQXdHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsdUdBQXVHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsc0dBQXNHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsd0dBQXdHLEVBQUUsRUFBRSw2REFBNkQsOERBQThELEVBQUUsc0dBQXNHLEVBQUUsRUFBRSw4REFBOEQsOERBQThELEVBQUUsdUdBQXVHLEVBQUUsRUFBRSw4REFBOEQsOERBQThELEVBQUUsdUdBQXVHLEVBQUUsRUFBRSwyREFBMkQsOERBQThELEVBQUUsc0dBQXNHLEVBQUUsRUFBRSx5REFBeUQsOERBQThELEVBQUUsd0dBQXdHLEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxvREFBb0QsdURBQXVELEVBQUUsRUFBRSxvREFBb0QsdURBQXVELEVBQUUsRUFBRSwyREFBMkQsNkRBQTZELEVBQUUsRUFBRSx5REFBeUQseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSwwREFBMEQsNERBQTRELEVBQUUsRUFBRSw0REFBNEQsNERBQTRELEVBQUUsRUFBRSwwREFBMEQscUVBQXFFLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNkZBQTZGLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUs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QWdDLHdLQUF3Syx5UEFBeVAsZUFBZSxnQkFBZ0IsWUFBWSw0TUFBNE0sY0FBYyxzR0FBc0csa0JBQWtCLG1FQUFtRSx5REFBeUQsb0VBQW9FLFdBQVcsb0dBQW9HLHlEQUF5RDtBQUMzK0csaUVBQWUsaUNBQWlDOzs7Ozs7Ozs7QUNIaEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC8gc3luYyBcXC4oeG1sJTdDanMlN0MoIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9hcHAuY3NzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2NvbXBvbmVudHMvY2hhcnRzL2RvbnV0LWNoYXJ0LnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2NvbXBvbmVudHMvY2hhcnRzL2luZGV4LnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2NvbnN0YW50cy9zdG9yYWdlLWtleXMudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvbWFpbi1wYWdlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL21haW4tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9tb2RlbHMvYXNzZXQudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvbW9kZWxzL2ZpbmFuY2lhbC1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvbW9kZWxzL2xpYWJpbGl0eS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9tb2RlbHMvbW9udGhseS1zbmFwc2hvdC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9tb2RlbHMvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvc2VydmljZXMvYXNzZXQtc2VydmljZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9zZXJ2aWNlcy9iYXNlLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvc2VydmljZXMvZXZlbnQtYnVzLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvc2VydmljZXMvbGlhYmlsaXR5LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3NlcnZpY2VzL3JlcG9ydC1zZXJ2aWNlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3V0aWxzL2NoYXJ0LWNvbG9ycy50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC91dGlscy9kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucy50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC91dGlscy9mb3JtYXR0ZXJzLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3V0aWxzL2lvcy1jb2xvci1leHRlbnNpb24udHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdXRpbHMvbG9nZ2VyLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3V0aWxzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL2Jhc2Utdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3LW1vZGVscy9kYXNoYm9hcmQtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS50cyIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnRzIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvYXBwLXJvb3QueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL2NvbXBvbmVudHMvYXNzZXRzL2Fzc2V0LWRpc3RyaWJ1dGlvbi1jaGFydC54bWwiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvY29tcG9uZW50cy91aS9jYXJkLnhtbCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC9jb21wb25lbnRzL3VpL2xpc3QtaXRlbS54bWwiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS54bWwiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vY2V0ZS1wZm0vLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy9zaGFyZWQvbGlzdC1pdGVtLnhtbCIsIndlYnBhY2s6Ly9jZXRlLXBmbS8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtLy4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UueG1sIiwid2VicGFjazovL2NldGUtcGZtL2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAvYXBwLnRzXCIsXG5cdFwiLi9jb21wb25lbnRzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tY2hhcnQueG1sXCI6IFwiLi9hcHAvY29tcG9uZW50cy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLWNoYXJ0LnhtbFwiLFxuXHRcIi4vY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQudHNcIjogXCIuL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydC50c1wiLFxuXHRcIi4vY29tcG9uZW50cy9jaGFydHMvaW5kZXgudHNcIjogXCIuL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9pbmRleC50c1wiLFxuXHRcIi4vY29tcG9uZW50cy91aS9jYXJkLnhtbFwiOiBcIi4vYXBwL2NvbXBvbmVudHMvdWkvY2FyZC54bWxcIixcblx0XCIuL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnhtbFwiOiBcIi4vYXBwL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnhtbFwiLFxuXHRcIi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cy50c1wiOiBcIi4vYXBwL2NvbnN0YW50cy9zdG9yYWdlLWtleXMudHNcIixcblx0XCIuL21haW4tcGFnZS50c1wiOiBcIi4vYXBwL21haW4tcGFnZS50c1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vYXBwL21haW4tcGFnZS54bWxcIixcblx0XCIuL21haW4tdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL21haW4tdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vbW9kZWxzL2Fzc2V0LnRzXCI6IFwiLi9hcHAvbW9kZWxzL2Fzc2V0LnRzXCIsXG5cdFwiLi9tb2RlbHMvZmluYW5jaWFsLXJlcG9ydC50c1wiOiBcIi4vYXBwL21vZGVscy9maW5hbmNpYWwtcmVwb3J0LnRzXCIsXG5cdFwiLi9tb2RlbHMvbGlhYmlsaXR5LnRzXCI6IFwiLi9hcHAvbW9kZWxzL2xpYWJpbGl0eS50c1wiLFxuXHRcIi4vbW9kZWxzL21vbnRobHktc25hcHNob3QudHNcIjogXCIuL2FwcC9tb2RlbHMvbW9udGhseS1zbmFwc2hvdC50c1wiLFxuXHRcIi4vbW9kZWxzL3RyYW5zYWN0aW9uLnRzXCI6IFwiLi9hcHAvbW9kZWxzL3RyYW5zYWN0aW9uLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYXNzZXQtc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9ldmVudC1idXMtc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2V2ZW50LWJ1cy1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3JlcG9ydC1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvcmVwb3J0LXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UudHNcIixcblx0XCIuL3V0aWxzL2NoYXJ0LWNvbG9ycy50c1wiOiBcIi4vYXBwL3V0aWxzL2NoYXJ0LWNvbG9ycy50c1wiLFxuXHRcIi4vdXRpbHMvZGlhbG9nLnRzXCI6IFwiLi9hcHAvdXRpbHMvZGlhbG9nLnRzXCIsXG5cdFwiLi91dGlscy9maW5hbmNpYWwtY2FsY3VsYXRpb25zLnRzXCI6IFwiLi9hcHAvdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucy50c1wiLFxuXHRcIi4vdXRpbHMvZm9ybWF0dGVycy50c1wiOiBcIi4vYXBwL3V0aWxzL2Zvcm1hdHRlcnMudHNcIixcblx0XCIuL3V0aWxzL2lvcy1jb2xvci1leHRlbnNpb24udHNcIjogXCIuL2FwcC91dGlscy9pb3MtY29sb3ItZXh0ZW5zaW9uLnRzXCIsXG5cdFwiLi91dGlscy9sb2dnZXIudHNcIjogXCIuL2FwcC91dGlscy9sb2dnZXIudHNcIixcblx0XCIuL3V0aWxzL25hdmlnYXRpb24udHNcIjogXCIuL2FwcC91dGlscy9uYXZpZ2F0aW9uLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9hc3NldHMvYWRkLWFzc2V0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYWRkLWFzc2V0LXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvYXNzZXRzL2Fzc2V0LWxpc3Qtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Jhc2Utdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2Jhc2Utdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9kYXNoYm9hcmQtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90LXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3Qtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3Qtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9zaGFyZWQvbGlzdC1pdGVtLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3NoYXJlZC9saXN0LWl0ZW0ueG1sXCIsXG5cdFwiLi92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih4bWwlN0NqcyU3Qyg/PCUyMVxcXFwuZFxcXFwuKXRzJTdDcz9jc3MpJFwiOyIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FwcCc7XG5cbnRyeSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N0YXJ0aW5nIGFwcGxpY2F0aW9uIGluaXRpYWxpemF0aW9uJyk7XG4gICAgQXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZhaWxlZCB0byBpbml0aWFsaXplIGFwcGxpY2F0aW9uJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xufSIsIi8qIENTUzJKU09OICovXG5cbmNvbnN0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18gPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiKlwiLFwiOjpiZWZvcmVcIixcIjo6YWZ0ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiOjpiYWNrZHJvcFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudmlzaWJsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZpc2liaWxpdHlcIixcInZhbHVlXCI6XCJ2aXNpYmxlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5teC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tbC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1yLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm10LTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudy1mdWxsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yb3VuZGVkLXhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlci1iXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibHVlLTEwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIxOSAyMzQgMjU0IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsdWUtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoNTkgMTMwIDI0NiAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibHVlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ncmF5LTEwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI0MyAyNDQgMjQ2IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWdyZWVuLTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDM0IDE5NyA5NCAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1pbmRpZ28tNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoOTkgMTAyIDI0MSAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1wdXJwbGUtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTY4IDg1IDI0NyAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1yZWQtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXJpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtMnhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjMyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1zbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtYm9sZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNzAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtbWVkaXVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI1MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudXBwZXJjYXNlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ1cHBlcmNhc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ibHVlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYig3NSA4NSA5OSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS03MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYig1NSA2NSA4MSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS04MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigzMSA0MSA1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JlZW4tNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjIgMTYzIDc0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1wdXJwbGUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTQ3IDUxIDIzNCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcmVkLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIyMCAzOCAzOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMyNTYzZWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjUwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidXBwZXJjYXNlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNhcmRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZmZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubGlzdC12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUHJvZ3Jlc3NcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW5wdXQtZmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UyZThmMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmOGZhZmNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9ybS1sYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjQ3NDhiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiRDpcXFxcRGV2XFxcXFBlcnNvbmFsLUZpbmFuY2UtTWFuYWdlci1QRk1cXFxcYXBwXFxcXGFwcC5jc3NcIilcbiIsImltcG9ydCB7IFZpZXcsIFByb3BlcnR5IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEb251dENoYXJ0RGF0YSB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgcGVyY2VudGFnZTogbnVtYmVyO1xufVxuXG5jb25zdCBkYXRhUHJvcGVydHkgPSBuZXcgUHJvcGVydHk8RG9udXRDaGFydCwgRG9udXRDaGFydERhdGFbXT4oe1xuICAgIG5hbWU6ICdkYXRhJyxcbiAgICBkZWZhdWx0VmFsdWU6IFtdLFxuICAgIHZhbHVlQ2hhbmdlZDogKHRhcmdldCwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHRhcmdldC5vbkRhdGFDaGFuZ2VkKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjbGFzcyBEb251dENoYXJ0IGV4dGVuZHMgVmlldyB7XG4gICAgcHVibGljIGRhdGE6IERvbnV0Q2hhcnREYXRhW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRhdGFDaGFuZ2VkKG9sZFZhbHVlOiBEb251dENoYXJ0RGF0YVtdLCBuZXdWYWx1ZTogRG9udXRDaGFydERhdGFbXSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0TGF5b3V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZU5hdGl2ZVZpZXcoKTogYW55IHtcbiAgICAgICAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgYW5kcm9pZC52aWV3LlZpZXcodGhpcy5fY29udGV4dCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2aWV3LnNldFdpbGxOb3REcmF3KGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIG5ldyBVSVZpZXcoQ0dSZWN0TWFrZSgwLCAwLCAwLCAwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTWVhc3VyZSh3aWR0aE1lYXN1cmVTcGVjOiBudW1iZXIsIGhlaWdodE1lYXN1cmVTcGVjOiBudW1iZXIpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB3aWR0aCA9IFZpZXcubGF5b3V0LmdldE1lYXN1cmVTcGVjU2l6ZSh3aWR0aE1lYXN1cmVTcGVjKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBoZWlnaHQgPSBWaWV3LmxheW91dC5nZXRNZWFzdXJlU3BlY1NpemUoaGVpZ2h0TWVhc3VyZVNwZWMpO1xuICAgICAgICB0aGlzLnNldE1lYXN1cmVkRGltZW5zaW9uKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxheW91dChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlcikge1xuICAgICAgICBzdXBlci5vbkxheW91dChsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMubmF0aXZlVmlldz8uaW52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYXcoY2FudmFzOiBhbnkpIHtcbiAgICAgICAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0FuZHJvaWQoY2FudmFzKTtcbiAgICAgICAgfSBlbHNlIGlmIChnbG9iYWwuaXNJT1MpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2lPUygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3QW5kcm9pZChjYW52YXM6IGFueSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldE1lYXN1cmVkSGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBoZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgKiAwLjg7XG4gICAgICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcmFkaXVzICogMC42O1xuICAgICAgICBjb25zdCBzdHJva2VXaWR0aCA9IHJhZGl1cyAtIGlubmVyUmFkaXVzO1xuXG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBwYWludCA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLlBhaW50KCk7XG4gICAgICAgIHBhaW50LnNldEFudGlBbGlhcyh0cnVlKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBwYWludC5zZXRTdHlsZShhbmRyb2lkLmdyYXBoaWNzLlBhaW50LlN0eWxlLlNUUk9LRSk7XG4gICAgICAgIHBhaW50LnNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoKTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5SZWN0RihcbiAgICAgICAgICAgIGNlbnRlclggLSByYWRpdXMgKyBzdHJva2VXaWR0aCAvIDIsXG4gICAgICAgICAgICBjZW50ZXJZIC0gcmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLFxuICAgICAgICAgICAgY2VudGVyWCArIHJhZGl1cyAtIHN0cm9rZVdpZHRoIC8gMixcbiAgICAgICAgICAgIGNlbnRlclkgKyByYWRpdXMgLSBzdHJva2VXaWR0aCAvIDJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN3ZWVwQW5nbGUgPSAoaXRlbS5wZXJjZW50YWdlIC8gMTAwKSAqIDM2MDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBhaW50LnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcihpdGVtLmNvbG9yKSk7XG4gICAgICAgICAgICBjYW52YXMuZHJhd0FyYyhyZWN0LCBzdGFydEFuZ2xlLCBzd2VlcEFuZ2xlLCBmYWxzZSwgcGFpbnQpO1xuICAgICAgICAgICAgc3RhcnRBbmdsZSArPSBzd2VlcEFuZ2xlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdpT1MoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0TWVhc3VyZWRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IHdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiAqIDAuODtcbiAgICAgICAgY29uc3QgaW5uZXJSYWRpdXMgPSByYWRpdXMgKiAwLjY7XG5cbiAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSAtTWF0aC5QSSAvIDI7XG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2VlcEFuZ2xlID0gKGl0ZW0ucGVyY2VudGFnZSAvIDEwMCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gc3RhcnRBbmdsZSArIHN3ZWVwQW5nbGU7XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBVSUJlemllclBhdGguYmV6aWVyUGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5hZGRBcmNXaXRoQ2VudGVyUmFkaXVzU3RhcnRBbmdsZUVuZEFuZ2xlQ2xvY2t3aXNlKFxuICAgICAgICAgICAgICAgIENHUG9pbnRNYWtlKGNlbnRlclgsIGNlbnRlclkpLFxuICAgICAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYXRoLmFkZEFyY1dpdGhDZW50ZXJSYWRpdXNTdGFydEFuZ2xlRW5kQW5nbGVDbG9ja3dpc2UoXG4gICAgICAgICAgICAgICAgQ0dQb2ludE1ha2UoY2VudGVyWCwgY2VudGVyWSksXG4gICAgICAgICAgICAgICAgaW5uZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5oZXhUb1VJQ29sb3IoaXRlbS5jb2xvcik7XG4gICAgICAgICAgICBjb2xvci5zZXRGaWxsKCk7XG4gICAgICAgICAgICBwYXRoLmZpbGwoKTtcblxuICAgICAgICAgICAgc3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhleFRvVUlDb2xvcihoZXg6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSAvIDI1NTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpIC8gMjU1O1xuICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNikgLyAyNTU7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIFVJQ29sb3IuYWxsb2MoKS5pbml0V2l0aFJlZEdyZWVuQmx1ZUFscGhhKHIsIGcsIGIsIDEpO1xuICAgIH1cbn1cblxuZGF0YVByb3BlcnR5LnJlZ2lzdGVyKERvbnV0Q2hhcnQpOyIsImltcG9ydCB7IFZpZXcgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG4vLyBSZWdpc3RlciBhbGwgY2hhcnQgY29tcG9uZW50c1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ2hhcnRDb21wb25lbnRzKCkge1xuICAgIC8vIFRlbXBvcmFyaWx5IGRpc2FibGUgY2hhcnQgcmVnaXN0cmF0aW9uIHVudGlsIHdlIGZpeCB0aGUgY29yZSBpbXBvcnRzXG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IHJlZ2lzdHJhdGlvbiBkaXNhYmxlZCB0ZW1wb3JhcmlseScpO1xufVxuXG5leHBvcnQgeyBEb251dENoYXJ0IH0gZnJvbSAnLi9kb251dC1jaGFydCc7IiwiZXhwb3J0IGNvbnN0IFN0b3JhZ2VLZXlzID0ge1xuICAgIEFTU0VUUzogJ2Fzc2V0cycsXG4gICAgTElBQklMSVRJRVM6ICdsaWFiaWxpdGllcycsXG4gICAgVFJBTlNBQ1RJT05TOiAndHJhbnNhY3Rpb25zJyxcbn0gYXMgY29uc3Q7IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IERhc2hib2FyZFZpZXdNb2RlbCB9IGZyb20gJy4vdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTWFpblBhZ2UnO1xubGV0IHZpZXdNb2RlbDogRGFzaGJvYXJkVmlld01vZGVsO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBtYWluIHBhZ2UnKTtcbiAgICB2aWV3TW9kZWwgPSBuZXcgRGFzaGJvYXJkVmlld01vZGVsKCk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb0luY29tZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSB0byBJbmNvbWUgcGFnZScpO1xuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZVwiLCB7IGZpbHRlclR5cGU6ICdpbmNvbWUnIH0pO1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IG5hdmlnYXRlZCB0byBJbmNvbWUgcGFnZScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gbmF2aWdhdGUgdG8gSW5jb21lIHBhZ2UnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZVRvRXhwZW5zZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSB0byBFeHBlbnNlIHBhZ2UnKTtcbiAgICB0cnkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2VcIiwgeyBmaWx0ZXJUeXBlOiAnZXhwZW5zZScgfSk7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgbmF2aWdhdGVkIHRvIEV4cGVuc2UgcGFnZScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gbmF2aWdhdGUgdG8gRXhwZW5zZSBwYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb0Fzc2V0cyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSB0byBBc3NldHMgcGFnZScpO1xuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZVwiKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N1Y2Nlc3NmdWxseSBuYXZpZ2F0ZWQgdG8gQXNzZXRzIHBhZ2UnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG5hdmlnYXRlIHRvIEFzc2V0cyBwYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb0xpYWJpbGl0aWVzKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdBdHRlbXB0aW5nIHRvIG5hdmlnYXRlIHRvIExpYWJpbGl0aWVzIHBhZ2UnKTtcbiAgICB0cnkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2VcIik7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgbmF2aWdhdGVkIHRvIExpYWJpbGl0aWVzIHBhZ2UnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG5hdmlnYXRlIHRvIExpYWJpbGl0aWVzIHBhZ2UnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZVRvTW9udGhseVNuYXBzaG90KGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdBdHRlbXB0aW5nIHRvIG5hdmlnYXRlIHRvIE1vbnRobHkgU25hcHNob3QgcGFnZScpO1xuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2VcIik7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgbmF2aWdhdGVkIHRvIE1vbnRobHkgU25hcHNob3QgcGFnZScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gbmF2aWdhdGUgdG8gTW9udGhseSBTbmFwc2hvdCBwYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwcml2YXRlIF9jb3VudGVyOiBudW1iZXI7XG4gIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICB0aGlzLl9jb3VudGVyID0gNDI7XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gIH1cblxuICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICB9XG5cbiAgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9tZXNzYWdlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbWVzc2FnZScsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvblRhcCgpIHtcbiAgICB0aGlzLl9jb3VudGVyLS07XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU1lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuX2NvdW50ZXIgPD0gMCkge1xuICAgICAgdGhpcy5tZXNzYWdlID1cbiAgICAgICAgJ0hvb3JyYWFheSEgWW91IHVubG9ja2VkIHRoZSBOYXRpdmVTY3JpcHQgY2xpY2tlciBhY2hpZXZlbWVudCEnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0aGlzLl9jb3VudGVyfSB0YXBzIGxlZnRgO1xuICAgIH1cblxuICAgIC8vIGxvZyB0aGUgbWVzc2FnZSB0byB0aGUgY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgdHlwZSBBc3NldENhdGVnb3J5ID0gXG4gICAgfCAnUmVhbCBFc3RhdGUnIFxuICAgIHwgJ0J1c2luZXNzJyBcbiAgICB8ICdTdG9ja3MnIFxuICAgIHwgJ0FydCAmIEFudGlxdWl0aWVzJyBcbiAgICB8ICdTYXZpbmcvQ2FzaCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgY2F0ZWdvcnk6IEFzc2V0Q2F0ZWdvcnk7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEFzc2V0Pikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YS5jYXRlZ29yeSB8fCAnU2F2aW5nL0Nhc2gnO1xuICAgICAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAwO1xuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWUgfHwgJyc7XG4gICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgTW9udGhseVJlcG9ydCB7XG4gICAgbW9udGg6IG51bWJlcjtcbiAgICB5ZWFyOiBudW1iZXI7XG4gICAgaW5jb21lOiBudW1iZXI7XG4gICAgZXhwZW5zZXM6IG51bWJlcjtcbiAgICBzYXZpbmdzOiBudW1iZXI7XG4gICAgc2F2aW5nc1JhdGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5hbmNpYWxIZWFsdGhSZXBvcnQge1xuICAgIG5ldFdvcnRoOiBudW1iZXI7XG4gICAgZGVidFRvSW5jb21lUmF0aW86IG51bWJlcjtcbiAgICBtb250aGx5Q2FzaGZsb3c6IG51bWJlcjtcbiAgICBtb250aGx5UmVwb3J0czogTW9udGhseVJlcG9ydFtdO1xufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgdHlwZSBMaWFiaWxpdHlUeXBlID0gJ0xvYW4nIHwgJ0RlYnQvUGF5YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBMaWFiaWxpdHkgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHR5cGU6IExpYWJpbGl0eVR5cGU7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGludGVyZXN0UmF0ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxMaWFiaWxpdHk+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZSB8fCAnTG9hbic7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gZGF0YS5hbW91bnQgfHwgMDtcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lIHx8ICcnO1xuICAgICAgICB0aGlzLmludGVyZXN0UmF0ZSA9IGRhdGEuaW50ZXJlc3RSYXRlIHx8IDA7XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhseVNuYXBzaG90IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB5ZWFyOiBudW1iZXI7XG4gICAgbW9udGg6IG51bWJlcjtcbiAgICBuZXRBc3NldDogbnVtYmVyO1xuICAgIHBlcmNlbnRhZ2VDaGFuZ2U/OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPE1vbnRobHlTbmFwc2hvdD4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMueWVhciA9IGRhdGEueWVhciB8fCBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMubW9udGggPSBkYXRhLm1vbnRoIHx8IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5uZXRBc3NldCA9IGRhdGEubmV0QXNzZXQgfHwgMDtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlQ2hhbmdlID0gZGF0YS5wZXJjZW50YWdlQ2hhbmdlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25UeXBlID0gJ2luY29tZScgfCAnZXhwZW5zZSc7XG5leHBvcnQgdHlwZSBUcmFuc2FjdGlvbkNhdGVnb3J5ID0gXG4gIC8vIEluY29tZSBjYXRlZ29yaWVzXG4gIHwgJ1NhbGFyeScgfCAnQnVzaW5lc3MnIHwgJ1JlbnQnIHwgJ0ludGVyZXN0JyB8ICdSb3lhbHRpZXMnXG4gIC8vIEV4cGVuc2UgY2F0ZWdvcmllc1xuICB8ICdDb25zdW1lciBiYXNrZXQnIHwgJ0hhYml0cycgfCAnQ2FyJyB8ICdSb3V0aW5lJyB8ICdIb3VzaW5nJyB8ICdDcmVkaXQgQ2FyZC9Mb2FuJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0eXBlOiBUcmFuc2FjdGlvblR5cGU7XG4gICAgY2F0ZWdvcnk6IFRyYW5zYWN0aW9uQ2F0ZWdvcnk7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB0aW1lUmVxdWlyZWQ/OiBudW1iZXI7IC8vIEhvdXJzIHJlcXVpcmVkIChvbmx5IGZvciBpbmNvbWUpXG4gICAgbW9udGg6IG51bWJlcjtcbiAgICB5ZWFyOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFRyYW5zYWN0aW9uPikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgdGhpcy50eXBlID0gZGF0YS50eXBlIHx8ICdleHBlbnNlJztcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGRhdGEuY2F0ZWdvcnkgfHwgJ0NvbnN1bWVyIGJhc2tldCc7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gTnVtYmVyKGRhdGEuYW1vdW50IHx8IDApO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICAgICAgdGhpcy50aW1lUmVxdWlyZWQgPSBkYXRhLnR5cGUgPT09ICdpbmNvbWUnID8gTnVtYmVyKGRhdGEudGltZVJlcXVpcmVkIHx8IDEpIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1vbnRoID0gZGF0YS5tb250aCA/PyBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMueWVhciA9IGRhdGEueWVhciA/PyBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzc2V0IH0gZnJvbSAnLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZUtleXMgfSBmcm9tICcuLi9jb25zdGFudHMvc3RvcmFnZS1rZXlzJztcblxuZXhwb3J0IGNsYXNzIEFzc2V0U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPEFzc2V0PiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVEFHID0gJ0Fzc2V0U2VydmljZSc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSBTdG9yYWdlS2V5cy5BU1NFVFM7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBc3NldFNlcnZpY2Uge1xuICAgICAgICBpZiAoIUFzc2V0U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgQXNzZXRTZXJ2aWNlLmluc3RhbmNlID0gbmV3IEFzc2V0U2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBc3NldFNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IEFzc2V0W10ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGRhdGEgPT4gbmV3IEFzc2V0KGRhdGEpKTtcbiAgICB9XG5cbiAgICBhZGRBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGFzc2V0KTtcbiAgICB9XG5cbiAgICB1cGRhdGVBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKGFzc2V0KTtcbiAgICB9XG5cbiAgICBkZWxldGVBc3NldChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbShpZCk7XG4gICAgfVxuXG4gICAgZ2V0QXNzZXRzKCk6IEFzc2V0W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIGdldFRvdGFsQXNzZXRWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYXNzZXQpID0+IHN1bSArIGFzc2V0LnZhbHVlLCAwKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS1zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlU2VydmljZTxUIGV4dGVuZHMgeyBpZDogc3RyaW5nIH0+IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJvdGVjdGVkIGl0ZW1zOiBUW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBUQUc6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgc3RvcmFnZUtleTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UgPSBTdG9yYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxvYWRJdGVtcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBsb2FkSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbm90IHNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0SXRlbTxhbnlbXT4odGhpcy5zdG9yYWdlS2V5LCBbXSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy50cmFuc2Zvcm1Mb2FkZWRJdGVtcyhzYXZlZEl0ZW1zKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYExvYWRlZCAke3RoaXMuaXRlbXMubGVuZ3RofSBpdGVtcyBmcm9tICR7dGhpcy5zdG9yYWdlS2V5fWApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCBgRXJyb3IgbG9hZGluZyBpdGVtcyBmcm9tICR7dGhpcy5zdG9yYWdlS2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzYXZlSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbm90IHNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgdGhpcy5pdGVtcyk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBTYXZlZCAke3RoaXMuaXRlbXMubGVuZ3RofSBpdGVtcyB0byAke3RoaXMuc3RvcmFnZUtleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgYEVycm9yIHNhdmluZyBpdGVtcyB0byAke3RoaXMuc3RvcmFnZUtleX1gLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogVFtdO1xuXG4gICAgcHJvdGVjdGVkIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgJ0Nhbm5vdCBhZGQgaXRlbSB3aXRob3V0IGlkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnNhdmVJdGVtcygpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycsIHRoaXMuaXRlbXMpO1xuICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBBZGRlZCBpdGVtIHdpdGggaWQ6ICR7aXRlbS5pZH1gKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnQ2Fubm90IHVwZGF0ZSBpdGVtIHdpdGhvdXQgaWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KGkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1zKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycsIHRoaXMuaXRlbXMpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKHRoaXMuVEFHLCBgVXBkYXRlZCBpdGVtIHdpdGggaWQ6ICR7aXRlbS5pZH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBkZWxldGVJdGVtKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnQ2Fubm90IGRlbGV0ZSBpdGVtIHdpdGhvdXQgaWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpZCk7XG4gICAgICAgIHRoaXMuc2F2ZUl0ZW1zKCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2l0ZW1zJywgdGhpcy5pdGVtcyk7XG4gICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYERlbGV0ZWQgaXRlbSB3aXRoIGlkOiAke2lkfWApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRJdGVtcygpOiBUW10ge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuaXRlbXNdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEV2ZW50QnVzU2VydmljZSBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFdmVudEJ1c1NlcnZpY2U7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRXZlbnRCdXNTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFFdmVudEJ1c1NlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEV2ZW50QnVzU2VydmljZS5pbnN0YW5jZSA9IG5ldyBFdmVudEJ1c1NlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRXZlbnRCdXNTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGVtaXQoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZnkoeyBldmVudE5hbWUsIG9iamVjdDogdGhpcywgZGF0YSB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudE5hbWVzID0ge1xuICAgIFNOQVBTSE9UX1VQREFURUQ6ICdzbmFwc2hvdFVwZGF0ZWQnXG59IGFzIGNvbnN0OyIsImltcG9ydCB7IExpYWJpbGl0eSB9IGZyb20gJy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Utc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlS2V5cyB9IGZyb20gJy4uL2NvbnN0YW50cy9zdG9yYWdlLWtleXMnO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPExpYWJpbGl0eT4ge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBUQUcgPSAnTGlhYmlsaXR5U2VydmljZSc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSBTdG9yYWdlS2V5cy5MSUFCSUxJVElFUztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IExpYWJpbGl0eVNlcnZpY2Uge1xuICAgICAgICBpZiAoIUxpYWJpbGl0eVNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIExpYWJpbGl0eVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgTGlhYmlsaXR5U2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBMaWFiaWxpdHlTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmFuc2Zvcm1Mb2FkZWRJdGVtcyhpdGVtczogYW55W10pOiBMaWFiaWxpdHlbXSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoZGF0YSA9PiBuZXcgTGlhYmlsaXR5KGRhdGEpKTtcbiAgICB9XG5cbiAgICBhZGRMaWFiaWxpdHkobGlhYmlsaXR5OiBMaWFiaWxpdHkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGxpYWJpbGl0eSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShsaWFiaWxpdHkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUxpYWJpbGl0eShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbShpZCk7XG4gICAgfVxuXG4gICAgZ2V0TGlhYmlsaXRpZXMoKTogTGlhYmlsaXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIGdldFRvdGFsTGlhYmlsaXRpZXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4gc3VtICsgbGlhYmlsaXR5LmFtb3VudCwgMCk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLXNlcnZpY2UnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90IH0gZnJvbSAnLi4vbW9kZWxzL21vbnRobHktc25hcHNob3QnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ01vbnRobHlTbmFwc2hvdFNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhseVNuYXBzaG90U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPE1vbnRobHlTbmFwc2hvdD4ge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBNb250aGx5U25hcHNob3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBUQUcgPSBUQUc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSAnbW9udGhseV9zbmFwc2hvdHMnO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTW9udGhseVNuYXBzaG90U2VydmljZSB7XG4gICAgICAgIGlmICghTW9udGhseVNuYXBzaG90U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgTW9udGhseVNuYXBzaG90U2VydmljZS5pbnN0YW5jZSA9IG5ldyBNb250aGx5U25hcHNob3RTZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IE1vbnRobHlTbmFwc2hvdFtdIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChkYXRhID0+IG5ldyBNb250aGx5U25hcHNob3QoZGF0YSkpO1xuICAgIH1cblxuICAgIGFkZFNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHNuYXBzaG90KTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKHNuYXBzaG90KTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIGRlbGV0ZVNuYXBzaG90KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKGlkKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIGdldFNuYXBzaG90cygpOiBNb250aGx5U25hcHNob3RbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU2hhcnBlUmF0aW8oKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnQ2FsY3VsYXRpbmcgU2hhcnBlIFJhdGlvJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEdldCBwZXJjZW50YWdlIGNoYW5nZXMgYW5kIGZpbHRlciBvdXQgdW5kZWZpbmVkIHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuaXRlbXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gdHlwZW9mIGl0ZW0ucGVyY2VudGFnZUNoYW5nZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ucGVyY2VudGFnZUNoYW5nZSEpO1xuXG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgRm91bmQgJHtjaGFuZ2VzLmxlbmd0aH0gdmFsaWQgcGVyY2VudGFnZSBjaGFuZ2VzYCk7XG5cbiAgICAgICAgICAgIC8vIE5lZWQgYXQgbGVhc3QgMiBkYXRhIHBvaW50cyBmb3IgbWVhbmluZ2Z1bCBjYWxjdWxhdGlvblxuICAgICAgICAgICAgaWYgKGNoYW5nZXMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdJbnN1ZmZpY2llbnQgZGF0YSBwb2ludHMgZm9yIFNoYXJwZSBSYXRpbyBjYWxjdWxhdGlvbicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgYXZlcmFnZSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IGF2ZXJhZ2UgPSBjaGFuZ2VzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC8gY2hhbmdlcy5sZW5ndGg7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgQXZlcmFnZSByZXR1cm46ICR7YXZlcmFnZS50b0ZpeGVkKDIpfSVgKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHN0YW5kYXJkIGRldmlhdGlvblxuICAgICAgICAgICAgY29uc3QgdmFyaWFuY2UgPSBjaGFuZ2VzLnJlZHVjZSgoYSwgYikgPT4gYSArIE1hdGgucG93KGIgLSBhdmVyYWdlLCAyKSwgMCkgLyAoY2hhbmdlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZERldiA9IE1hdGguc3FydCh2YXJpYW5jZSk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3RhbmRhcmQgZGV2aWF0aW9uOiAke3N0ZERldi50b0ZpeGVkKDIpfWApO1xuXG4gICAgICAgICAgICAvLyBBdm9pZCBkaXZpc2lvbiBieSB6ZXJvXG4gICAgICAgICAgICBpZiAoc3RkRGV2ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N0YW5kYXJkIGRldmlhdGlvbiBpcyB6ZXJvLCBjYW5ub3QgY2FsY3VsYXRlIFNoYXJwZSBSYXRpbycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgYW5udWFsaXplZCBTaGFycGUgUmF0aW9cbiAgICAgICAgICAgIGNvbnN0IHNoYXJwZVJhdGlvID0gKGF2ZXJhZ2UgLyBzdGREZXYpICogTWF0aC5zcXJ0KDEyKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBDYWxjdWxhdGVkIFNoYXJwZSBSYXRpbzogJHtzaGFycGVSYXRpby50b0ZpeGVkKDIpfWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gc2hhcnBlUmF0aW87XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgY2FsY3VsYXRpbmcgU2hhcnBlIFJhdGlvJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGN1bGF0ZVBlcmNlbnRhZ2VDaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gU29ydCBzbmFwc2hvdHMgYnkgZGF0ZVxuICAgICAgICAgICAgY29uc3Qgc29ydGVkU25hcHNob3RzID0gWy4uLnRoaXMuaXRlbXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS55ZWFyICE9PSBiLnllYXIpIHJldHVybiBhLnllYXIgLSBiLnllYXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEubW9udGggLSBiLm1vbnRoO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwZXJjZW50YWdlIGNoYW5nZXNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc29ydGVkU25hcHNob3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHNvcnRlZFNuYXBzaG90c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IHNvcnRlZFNuYXBzaG90c1tpIC0gMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZUNoYW5nZSA9ICgoY3VycmVudC5uZXRBc3NldCAtIHByZXZpb3VzLm5ldEFzc2V0KSAvIHByZXZpb3VzLm5ldEFzc2V0KSAqIDEwMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnBlcmNlbnRhZ2VDaGFuZ2UgPSBOdW1iZXIocGVyY2VudGFnZUNoYW5nZS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmlyc3Qgc25hcHNob3QgaGFzIG5vIHBlcmNlbnRhZ2UgY2hhbmdlXG4gICAgICAgICAgICBpZiAoc29ydGVkU25hcHNob3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzb3J0ZWRTbmFwc2hvdHNbMF0ucGVyY2VudGFnZUNoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zYXZlSXRlbXMoKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgY2FsY3VsYXRlZCBwZXJjZW50YWdlIGNoYW5nZXMnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBjYWxjdWxhdGluZyBwZXJjZW50YWdlIGNoYW5nZXMnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zYWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXNzZXRTZXJ2aWNlIH0gZnJvbSAnLi9hc3NldC1zZXJ2aWNlJztcbmltcG9ydCB7IExpYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IEZpbmFuY2lhbEhlYWx0aFJlcG9ydCwgTW9udGhseVJlcG9ydCB9IGZyb20gJy4uL21vZGVscy9maW5hbmNpYWwtcmVwb3J0JztcbmltcG9ydCB7IGNhbGN1bGF0ZU5ldFdvcnRoLCBjYWxjdWxhdGVNb250aGx5Q2FzaGZsb3cgfSBmcm9tICcuLi91dGlscy9maW5hbmNpYWwtY2FsY3VsYXRpb25zJztcblxuZXhwb3J0IGNsYXNzIFJlcG9ydFNlcnZpY2UgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUmVwb3J0U2VydmljZTtcbiAgICBwcml2YXRlIHRyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBsaWFiaWxpdHlTZXJ2aWNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblNlcnZpY2UgPSBUcmFuc2FjdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5hc3NldFNlcnZpY2UgPSBBc3NldFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5saWFiaWxpdHlTZXJ2aWNlID0gTGlhYmlsaXR5U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBSZXBvcnRTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFSZXBvcnRTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBSZXBvcnRTZXJ2aWNlLmluc3RhbmNlID0gbmV3IFJlcG9ydFNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVwb3J0U2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUZpbmFuY2lhbEhlYWx0aFJlcG9ydCgpOiBGaW5hbmNpYWxIZWFsdGhSZXBvcnQge1xuICAgICAgICBjb25zdCBhc3NldHMgPSB0aGlzLmFzc2V0U2VydmljZS5nZXRBc3NldHMoKTtcbiAgICAgICAgY29uc3QgbGlhYmlsaXRpZXMgPSB0aGlzLmxpYWJpbGl0eVNlcnZpY2UuZ2V0TGlhYmlsaXRpZXMoKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuZ2V0VHJhbnNhY3Rpb25zKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtb250aGx5SW5jb21lID0gdHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnaW5jb21lJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApIC8gMTI7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ldFdvcnRoOiBjYWxjdWxhdGVOZXRXb3J0aChhc3NldHMsIGxpYWJpbGl0aWVzKSxcbiAgICAgICAgICAgIGRlYnRUb0luY29tZVJhdGlvOiBtb250aGx5SW5jb21lID4gMCA/IHRoaXMubGlhYmlsaXR5U2VydmljZS5nZXRUb3RhbExpYWJpbGl0aWVzKCkgLyBtb250aGx5SW5jb21lIDogMCxcbiAgICAgICAgICAgIG1vbnRobHlDYXNoZmxvdzogY2FsY3VsYXRlTW9udGhseUNhc2hmbG93KHRyYW5zYWN0aW9ucyksXG4gICAgICAgICAgICBtb250aGx5UmVwb3J0czogdGhpcy5nZW5lcmF0ZU1vbnRobHlSZXBvcnRzKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlTW9udGhseVJlcG9ydHMoKTogTW9udGhseVJlcG9ydFtdIHtcbiAgICAgICAgY29uc3QgcmVwb3J0czogTW9udGhseVJlcG9ydFtdID0gW107XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdlbmVyYXRlIHJlcG9ydHMgZm9yIHRoZSBsYXN0IDEyIG1vbnRoc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgLSBpICsgMTIpICUgMTI7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSAtIE1hdGguZmxvb3IoaSAvIDEyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbW9udGhUcmFuc2FjdGlvbnMgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZVxuICAgICAgICAgICAgICAgIC5nZXRNb250aGx5VHJhbnNhY3Rpb25zKG1vbnRoLCB5ZWFyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW5jb21lID0gbW9udGhUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnaW5jb21lJylcbiAgICAgICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZXhwZW5zZXMgPSBtb250aFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdleHBlbnNlJylcbiAgICAgICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2F2aW5ncyA9IGluY29tZSAtIGV4cGVuc2VzO1xuICAgICAgICAgICAgY29uc3Qgc2F2aW5nc1JhdGUgPSBpbmNvbWUgPiAwID8gKHNhdmluZ3MgLyBpbmNvbWUpICogMTAwIDogMDtcblxuICAgICAgICAgICAgcmVwb3J0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgICAgIGluY29tZSxcbiAgICAgICAgICAgICAgICBleHBlbnNlcyxcbiAgICAgICAgICAgICAgICBzYXZpbmdzLFxuICAgICAgICAgICAgICAgIHNhdmluZ3NSYXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXBvcnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBcHBsaWNhdGlvblNldHRpbmdzIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdTdG9yYWdlU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFN0b3JhZ2VTZXJ2aWNlO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFTdG9yYWdlU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgU3RvcmFnZVNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSBzdG9yZWQgZGF0YSBmb3Iga2V5OiAke2tleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBFcnJvciBzdG9yaW5nIGRhdGEgZm9yIGtleTogJHtrZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJdGVtPFQ+KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCBgRXJyb3IgcmV0cmlldmluZyBkYXRhIGZvciBrZXk6ICR7a2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Uga2V5IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHJlbW92ZWQgZGF0YSBmb3Iga2V5OiAke2tleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBFcnJvciByZW1vdmluZyBkYXRhIGZvciBrZXk6ICR7a2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLmNsZWFyKCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IGNsZWFyZWQgYWxsIHN0b3JhZ2UnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBjbGVhcmluZyBzdG9yYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Utc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlS2V5cyB9IGZyb20gJy4uL2NvbnN0YW50cy9zdG9yYWdlLWtleXMnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPFRyYW5zYWN0aW9uPiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVEFHID0gJ1RyYW5zYWN0aW9uU2VydmljZSc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSBTdG9yYWdlS2V5cy5UUkFOU0FDVElPTlM7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBUcmFuc2FjdGlvblNlcnZpY2Uge1xuICAgICAgICBpZiAoIVRyYW5zYWN0aW9uU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgVHJhbnNhY3Rpb25TZXJ2aWNlLmluc3RhbmNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUcmFuc2FjdGlvblNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IFRyYW5zYWN0aW9uW10ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGRhdGEgPT4gbmV3IFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBhbW91bnQ6IE51bWJlcihkYXRhLmFtb3VudCksXG4gICAgICAgICAgICB0aW1lUmVxdWlyZWQ6IGRhdGEudGltZVJlcXVpcmVkID8gTnVtYmVyKGRhdGEudGltZVJlcXVpcmVkKSA6IHVuZGVmaW5lZFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0TW9udGhseVRyYW5zYWN0aW9ucyhtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiBUcmFuc2FjdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKHQgPT4gdC5tb250aCA9PT0gbW9udGggJiYgdC55ZWFyID09PSB5ZWFyKTtcbiAgICB9XG5cbiAgICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdHJhbnNhY3Rpb24uYW1vdW50ID0gTnVtYmVyKHRyYW5zYWN0aW9uLmFtb3VudCk7XG4gICAgICAgIGlmIChpc05hTih0cmFuc2FjdGlvbi5hbW91bnQpKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdJbnZhbGlkIHRyYW5zYWN0aW9uIGFtb3VudCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0cmFuc2FjdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRyYW5zYWN0aW9uLmFtb3VudCA9IE51bWJlcih0cmFuc2FjdGlvbi5hbW91bnQpO1xuICAgICAgICBpZiAoaXNOYU4odHJhbnNhY3Rpb24uYW1vdW50KSkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnSW52YWxpZCB0cmFuc2FjdGlvbiBhbW91bnQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0odHJhbnNhY3Rpb24pO1xuICAgIH1cblxuICAgIGRlbGV0ZVRyYW5zYWN0aW9uKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBnZXRUcmFuc2FjdGlvbnMoKTogVHJhbnNhY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxJbmNvbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdpbmNvbWUnKVxuICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyBOdW1iZXIodC5hbW91bnQpLCAwKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbEV4cGVuc2VzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnZXhwZW5zZScpXG4gICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIE51bWJlcih0LmFtb3VudCksIDApO1xuICAgIH1cblxuICAgIGdldFRvdGFsVGltZVJlcXVpcmVkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnaW5jb21lJyAmJiB0LnRpbWVSZXF1aXJlZClcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgTnVtYmVyKHQudGltZVJlcXVpcmVkIHx8IDApLCAwKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IENoYXJ0Q29sb3JzID0ge1xuICAgIC8vIEFzc2V0IENhdGVnb3JpZXNcbiAgICBSZWFsRXN0YXRlOiAnIzRDNTFCRicsICAvLyBJbmRpZ29cbiAgICBWZWhpY2xlczogJyM0OEJCNzgnLCAgICAvLyBHcmVlblxuICAgIENhc2g6ICcjNDI5OUUxJywgICAgICAgIC8vIEJsdWVcbiAgICBCdXNpbmVzczogJyNFRDg5MzYnLCAgICAvLyBPcmFuZ2VcbiAgICBTYXZpbmc6ICcjOUY3QUVBJywgICAgICAvLyBQdXJwbGVcbiAgICBTdG9ja3M6ICcjRjU2NTY1JywgICAgICAvLyBSZWRcblxuICAgIC8vIFRyYW5zYWN0aW9uIENhdGVnb3JpZXMgLSBJbmNvbWVcbiAgICBTYWxhcnk6ICcjNDhCQjc4JywgICAgICAvLyBHcmVlblxuICAgICdJbnRlcmVzdC9EaXZpZGVuZHMnOiAnIzlGN0FFQScsIC8vIFB1cnBsZVxuXG4gICAgLy8gVHJhbnNhY3Rpb24gQ2F0ZWdvcmllcyAtIEV4cGVuc2VcbiAgICBIb3VzaW5nOiAnIzRDNTFCRicsICAgICAvLyBJbmRpZ29cbiAgICBUcmFuc3BvcnRhdGlvbjogJyM0OEJCNzgnLCAvLyBHcmVlblxuICAgIEZvb2Q6ICcjNDI5OUUxJywgICAgICAgIC8vIEJsdWVcbiAgICBVdGlsaXRpZXM6ICcjRUQ4OTM2JywgICAvLyBPcmFuZ2VcbiAgICBJbnN1cmFuY2U6ICcjOUY3QUVBJywgICAvLyBQdXJwbGVcbiAgICBIZWFsdGhjYXJlOiAnI0Y1NjU2NScsICAvLyBSZWRcbiAgICBFbnRlcnRhaW5tZW50OiAnIzY2N0VFQScsIC8vIEluZGlnb1xuICAgIExvYW46ICcjRDUzRjhDJywgICAgICAgLy8gUGlua1xuXG4gICAgLy8gTGlhYmlsaXR5IFR5cGVzXG4gICAgU2hvcnRUZXJtOiAnI0Y1NjU2NScsICAgLy8gUmVkXG4gICAgTG9uZ1Rlcm06ICcjNEM1MUJGJyAgICAgLy8gSW5kaWdvXG59OyIsImltcG9ydCB7IERpYWxvZ3MsIERpYWxvZ09wdGlvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkRpYWxvZ09wdGlvbnMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIGFjdGlvbnM6IEFycmF5PHsgaWQ6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1EaWFsb2dPcHRpb25zIGV4dGVuZHMgRGlhbG9nT3B0aW9ucyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgb2tCdXR0b25UZXh0Pzogc3RyaW5nO1xuICAgIGNhbmNlbEJ1dHRvblRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGlhbG9nKG9wdGlvbnM6IEFjdGlvbkRpYWxvZ09wdGlvbnMgfCBDb25maXJtRGlhbG9nT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nIHwgYm9vbGVhbj4ge1xuICAgIGlmICgnYWN0aW9ucycgaW4gb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gRGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLm1lc3NhZ2UsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IG9wdGlvbnMuYWN0aW9ucy5tYXAoYSA9PiBhLnRleHQpXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdDYW5jZWwnKSByZXR1cm4gJ2NhbmNlbCc7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbnMuZmluZChhID0+IGEudGV4dCA9PT0gcmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPyBhY3Rpb24uaWQgOiAnY2FuY2VsJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBEaWFsb2dzLmNvbmZpcm0ob3B0aW9ucyBhcyBEaWFsb2dPcHRpb25zKTtcbn0iLCJpbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gJy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBMaWFiaWxpdHkgfSBmcm9tICcuLi9tb2RlbHMvbGlhYmlsaXR5JztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdGaW5hbmNpYWxDYWxjdWxhdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTmV0V29ydGgoYXNzZXRzOiBBc3NldFtdLCBsaWFiaWxpdGllczogTGlhYmlsaXR5W10pOiBudW1iZXIge1xuICAgIGNvbnN0IHRvdGFsQXNzZXRzID0gYXNzZXRzLnJlZHVjZSgoc3VtLCBhc3NldCkgPT4gc3VtICsgYXNzZXQudmFsdWUsIDApO1xuICAgIGNvbnN0IHRvdGFsTGlhYmlsaXRpZXMgPSBsaWFiaWxpdGllcy5yZWR1Y2UoKHN1bSwgbGlhYmlsaXR5KSA9PiBzdW0gKyBsaWFiaWxpdHkuYW1vdW50LCAwKTtcbiAgICByZXR1cm4gdG90YWxBc3NldHMgLSB0b3RhbExpYWJpbGl0aWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTW9udGhseUNhc2hmbG93KHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSk6IG51bWJlciB7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgY29uc3QgbW9udGhseVRyYW5zYWN0aW9ucyA9IHRyYW5zYWN0aW9ucy5maWx0ZXIodCA9PiBcbiAgICAgICAgdC5tb250aCA9PT0gY3VycmVudE1vbnRoICYmIFxuICAgICAgICB0LnllYXIgPT09IGN1cnJlbnRZZWFyXG4gICAgKTtcblxuICAgIHJldHVybiBtb250aGx5VHJhbnNhY3Rpb25zLnJlZHVjZSgoc3VtLCB0KSA9PiBcbiAgICAgICAgc3VtICsgKHQudHlwZSA9PT0gJ2luY29tZScgPyB0LmFtb3VudCA6IC10LmFtb3VudCksIDBcbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlV2VpZ2h0ZWRBdmVyYWdlSW50ZXJlc3RSYXRlKGxpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXSk6IG51bWJlciB7XG4gICAgY29uc3QgdG90YWxMaWFiaWxpdGllcyA9IGxpYWJpbGl0aWVzLnJlZHVjZSgoc3VtLCBsaWFiaWxpdHkpID0+IHN1bSArIGxpYWJpbGl0eS5hbW91bnQsIDApO1xuICAgIFxuICAgIGlmICh0b3RhbExpYWJpbGl0aWVzID09PSAwKSByZXR1cm4gMDtcblxuICAgIGNvbnN0IHRvdGFsSW50ZXJlc3RQZXJZZWFyID0gbGlhYmlsaXRpZXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4gXG4gICAgICAgIHN1bSArIChsaWFiaWxpdHkuYW1vdW50ICogKGxpYWJpbGl0eS5pbnRlcmVzdFJhdGUgLyAxMDApKSwgMCk7XG5cbiAgICByZXR1cm4gKHRvdGFsSW50ZXJlc3RQZXJZZWFyIC8gdG90YWxMaWFiaWxpdGllcykgKiAxMDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEVEkodHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdKTogbnVtYmVyIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0b3RhbE1vbnRobHlJbnRlcmVzdCA9IHRyYW5zYWN0aW9ucy5yZWR1Y2UoKHN1bSwgdCkgPT4gXG4gICAgICAgICAgICBzdW0gKyAodC5jYXRlZ29yeSA9PT0gJ0NyZWRpdCBDYXJkL0xvYW4nID8gdC5hbW91bnQgOiAwKSwgMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgY29uc3QgdG90YWxNb250aGx5SW5jb21lID0gdHJhbnNhY3Rpb25zLnJlZHVjZSgoc3VtLCB0KSA9PiBcbiAgICAgICAgICAgIHN1bSArICh0LnR5cGUgPT09ICdpbmNvbWUnID8gdC5hbW91bnQgOiAwKSwgMCk7XG5cbiAgICAgICAgaWYgKHRvdGFsTW9udGhseUluY29tZSA9PT0gMCkge1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0RUSSBjYWxjdWxhdGlvbjogVG90YWwgbW9udGhseSBpbmNvbWUgaXMgMCcpO1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRvdGFsTW9udGhseUludGVyZXN0IC8gdG90YWxNb250aGx5SW5jb21lKSAqIDEwMDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgY2FsY3VsYXRpbmcgRFRJJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVMUihhc3NldHM6IEFzc2V0W10sIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSk6IG51bWJlciB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3VycmVudEFzc2V0cyA9IGFzc2V0cy5yZWR1Y2UoKHN1bSwgYXNzZXQpID0+IFxuICAgICAgICAgICAgc3VtICsgKGFzc2V0LmNhdGVnb3J5ID09PSAnU3RvY2tzJyB8fCBhc3NldC5jYXRlZ29yeSA9PT0gJ1NhdmluZy9DYXNoJyA/IGFzc2V0LnZhbHVlIDogMCksIDApO1xuICAgICAgICAgICAgXG4gICAgICAgIGNvbnN0IG1vbnRobHlFeHBlbnNlcyA9IHRyYW5zYWN0aW9ucy5yZWR1Y2UoKHN1bSwgdCkgPT4gXG4gICAgICAgICAgICBzdW0gKyAodC50eXBlID09PSAnZXhwZW5zZScgPyB0LmFtb3VudCA6IDApLCAwKTtcblxuICAgICAgICBpZiAobW9udGhseUV4cGVuc2VzID09PSAwKSB7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnTFIgY2FsY3VsYXRpb246IE1vbnRobHkgZXhwZW5zZXMgYXJlIDAnKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRBc3NldHMgLyBtb250aGx5RXhwZW5zZXM7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGNhbGN1bGF0aW5nIExSJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEQVIoYXNzZXRzOiBBc3NldFtdLCBsaWFiaWxpdGllczogTGlhYmlsaXR5W10pOiBudW1iZXIge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRvdGFsQXNzZXRzID0gYXNzZXRzLnJlZHVjZSgoc3VtLCBhc3NldCkgPT4gc3VtICsgYXNzZXQudmFsdWUsIDApO1xuICAgICAgICBjb25zdCB0b3RhbExpYWJpbGl0aWVzID0gbGlhYmlsaXRpZXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4gc3VtICsgbGlhYmlsaXR5LmFtb3VudCwgMCk7XG5cbiAgICAgICAgaWYgKHRvdGFsQXNzZXRzID09PSAwKSB7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnREFSIGNhbGN1bGF0aW9uOiBUb3RhbCBhc3NldHMgYXJlIDAnKTtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh0b3RhbExpYWJpbGl0aWVzIC8gdG90YWxBc3NldHMpICogMTAwO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBjYWxjdWxhdGluZyBEQVInLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3koYW1vdW50OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIEVuc3VyZSB3ZSdyZSB3b3JraW5nIHdpdGggYSBudW1iZXJcbiAgICBjb25zdCBudW1lcmljQW1vdW50ID0gdHlwZW9mIGFtb3VudCA9PT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KGFtb3VudCkgOiBhbW91bnQ7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIG51bWJlclxuICAgIGlmIChpc05hTihudW1lcmljQW1vdW50KSkge1xuICAgICAgICByZXR1cm4gJyQwLjAwJztcbiAgICB9XG4gICAgXG4gICAgLy8gRm9ybWF0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBhbmQgYWRkIGRvbGxhciBzaWduXG4gICAgcmV0dXJuIGAkJHtudW1lcmljQW1vdW50LnRvRml4ZWQoMil9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcbiAgICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGAke21vbnRofSAke2RheX0sICR7eWVhcn1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBpbmNsdWRlU3ltYm9sOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG4gICAgaWYgKGlzTmFOKG51bWVyaWNWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGluY2x1ZGVTeW1ib2wgPyAnMC4wMCUnIDogJzAuMDAnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bnVtZXJpY1ZhbHVlLnRvRml4ZWQoMil9JHtpbmNsdWRlU3ltYm9sID8gJyUnIDogJyd9YDtcbn0iLCIvLyBAdHMtaWdub3JlXG5pZiAoZ2xvYmFsLmlzSU9TKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFVJQ29sb3IucHJvdG90eXBlLmNvbG9yV2l0aEhleFN0cmluZyA9IGZ1bmN0aW9uKGhleDogc3RyaW5nKTogVUlDb2xvciB7XG4gICAgICAgIGxldCByID0gMCwgZyA9IDAsIGIgPSAwO1xuICAgICAgICBcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHIgPSBwYXJzZUludChoZXguY2hhckF0KDApICsgaGV4LmNoYXJBdCgwKSwgMTYpO1xuICAgICAgICAgICAgZyA9IHBhcnNlSW50KGhleC5jaGFyQXQoMSkgKyBoZXguY2hhckF0KDEpLCAxNik7XG4gICAgICAgICAgICBiID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgyKSArIGhleC5jaGFyQXQoMiksIDE2KTtcbiAgICAgICAgfSBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICByID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygwLCAyKSwgMTYpO1xuICAgICAgICAgICAgZyA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiwgNCksIDE2KTtcbiAgICAgICAgICAgIGIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIFVJQ29sb3IuYWxsb2MoKS5pbml0V2l0aFJlZEdyZWVuQmx1ZUFscGhhKHIvMjU1LCBnLzI1NSwgYi8yNTUsIDEpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgc3RhdGljIGRlYnVnKHRhZzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxvZ01lc3NhZ2UgPSBgWyR7dGFnfV0gJHttZXNzYWdlfWA7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ01lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9nTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBbmRyb2lkICYmIGdsb2JhbC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBBbmRyb2lkIHNwZWNpZmljIGNvZGVcbiAgICAgICAgICAgIGFuZHJvaWQudXRpbC5Mb2cuZCh0YWcsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGVycm9yKHRhZzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGVycm9yPzogRXJyb3IpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbG9nTWVzc2FnZSA9IGBbJHt0YWd9XSBFUlJPUjogJHttZXNzYWdlfWA7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobG9nTWVzc2FnZSk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBbmRyb2lkICYmIGdsb2JhbC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBBbmRyb2lkIHNwZWNpZmljIGNvZGVcbiAgICAgICAgICAgIGFuZHJvaWQudXRpbC5Mb2cuZSh0YWcsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVG9QYWdlKHBhZ2VQYXRoOiBzdHJpbmcsIGNvbnRleHQ/OiBhbnkpOiB2b2lkIHtcbiAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBwYWdlUGF0aCxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgIH0pO1xufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgQXNzZXQsIEFzc2V0Q2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNzZXQnO1xuaW1wb3J0IHsgQXNzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXNzZXQtc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQWRkQXNzZXRWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkQXNzZXRWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZENhdGVnb3J5SW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfY2F0ZWdvcmllczogQXNzZXRDYXRlZ29yeVtdID0gW1xuICAgICAgICAnUmVhbCBFc3RhdGUnLCAnQnVzaW5lc3MnLCAnU3RvY2tzJywgJ0FydCAmIEFudGlxdWl0aWVzJywgJ1NhdmluZy9DYXNoJ1xuICAgIF07XG4gICAgcHJpdmF0ZSBfYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXhpc3RpbmdBc3NldD86IEFzc2V0O1xuXG4gICAgY29uc3RydWN0b3IoZXhpc3RpbmdBc3NldD86IEFzc2V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9leGlzdGluZ0Fzc2V0ID0gZXhpc3RpbmdBc3NldDtcblxuICAgICAgICBpZiAoZXhpc3RpbmdBc3NldCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nQXNzZXQoZXhpc3RpbmdBc3NldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVXaXRoRXhpc3RpbmdBc3NldChhc3NldDogQXNzZXQpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IGFzc2V0Lm5hbWU7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gYXNzZXQudmFsdWU7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IHRoaXMuX2NhdGVnb3JpZXMuaW5kZXhPZihhc3NldC5jYXRlZ29yeSk7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fdmFsdWU7IH1cbiAgICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5fdmFsdWUgIT09IG51bWVyaWNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBudW1lcmljVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd2YWx1ZScsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY2F0ZWdvcmllcygpOiBBc3NldENhdGVnb3J5W10geyByZXR1cm4gdGhpcy5fY2F0ZWdvcmllczsgfVxuICAgIGdldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDsgfVxuICAgIHNldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZENhdGVnb3J5SW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3NldCBuYW1lIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLl92YWx1ZSkgfHwgdGhpcy5fdmFsdWUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXNzZXQgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhc3NldCA9IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nQXNzZXQgJiYgeyBpZDogdGhpcy5fZXhpc3RpbmdBc3NldC5pZCB9KSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLnRyaW0oKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5fdmFsdWUsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuX2NhdGVnb3JpZXNbdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGlzdGluZ0Fzc2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLnVwZGF0ZUFzc2V0KGFzc2V0KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgYXNzZXQ6ICR7YXNzZXQubmFtZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLmFkZEFzc2V0KGFzc2V0KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IGFkZGVkIGFzc2V0OiAke2Fzc2V0Lm5hbWV9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIGFzc2V0JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQXNzZXQsIEFzc2V0Q2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNzZXQnO1xuaW1wb3J0IHsgQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgRG9udXRDaGFydERhdGEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldERpc3RyaWJ1dGlvblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2NoYXJ0RGF0YTogRG9udXRDaGFydERhdGFbXSA9IFtdO1xuXG4gICAgZ2V0IGNoYXJ0RGF0YSgpOiBEb251dENoYXJ0RGF0YVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJ0RGF0YTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGFzc2V0czogQXNzZXRbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0b3RhbCA9IGFzc2V0cy5yZWR1Y2UoKHN1bSwgYXNzZXQpID0+IHN1bSArIGFzc2V0LnZhbHVlLCAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdyb3VwIGFzc2V0cyBieSBjYXRlZ29yeVxuICAgICAgICBjb25zdCBjYXRlZ29yeU1hcCA9IG5ldyBNYXA8QXNzZXRDYXRlZ29yeSwgbnVtYmVyPigpO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChhc3NldCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gY2F0ZWdvcnlNYXAuZ2V0KGFzc2V0LmNhdGVnb3J5KSB8fCAwO1xuICAgICAgICAgICAgY2F0ZWdvcnlNYXAuc2V0KGFzc2V0LmNhdGVnb3J5LCBjdXJyZW50ICsgYXNzZXQudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb252ZXJ0IHRvIGNoYXJ0IGRhdGFcbiAgICAgICAgdGhpcy5fY2hhcnREYXRhID0gQXJyYXkuZnJvbShjYXRlZ29yeU1hcC5lbnRyaWVzKCkpXG4gICAgICAgICAgICAubWFwKChbY2F0ZWdvcnksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IENoYXJ0Q29sb3JzW2NhdGVnb3J5XSxcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKCh2YWx1ZSAvIHRvdGFsKSAqIDEwMCkgOiAwXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2hhcnREYXRhJywgdGhpcy5fY2hhcnREYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gJy4uLy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RpYWxvZyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuaW1wb3J0IHsgQXNzZXREaXN0cmlidXRpb25WaWV3TW9kZWwgfSBmcm9tICcuL2Fzc2V0LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsJztcblxuY29uc3QgVEFHID0gJ0Fzc2V0TGlzdFZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldExpc3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9hc3NldFNlcnZpY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcml2YXRlIF9hc3NldHM6IEFzc2V0W10gPSBbXTtcbiAgICBwcml2YXRlIF9kaXN0cmlidXRpb25WaWV3TW9kZWw6IEFzc2V0RGlzdHJpYnV0aW9uVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Fzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWwgPSBuZXcgQXNzZXREaXN0cmlidXRpb25WaWV3TW9kZWwoKTtcbiAgICAgICAgdGhpcy5sb2FkQXNzZXRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGFzc2V0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fzc2V0cy5tYXAoYXNzZXQgPT4gKHtcbiAgICAgICAgICAgIC4uLmFzc2V0LFxuICAgICAgICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdEN1cnJlbmN5KGFzc2V0LnZhbHVlKVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQXNzZXRzRm9ybWF0dGVkKCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fYXNzZXRTZXJ2aWNlLmdldFRvdGFsQXNzZXRWYWx1ZSgpKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzdHJpYnV0aW9uVmlld01vZGVsKCk6IEFzc2V0RGlzdHJpYnV0aW9uVmlld01vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnUmVmcmVzaGluZyBhc3NldHMgbGlzdCcpO1xuICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgICB9XG5cbiAgICBvbkFkZEFzc2V0KCk6IHZvaWQge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZVwiKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogeyBpbmRleDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0Fzc2V0IGl0ZW0gdGFwcGVkJyk7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gdGhpcy5fYXNzZXRzW2FyZ3MuaW5kZXhdO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiBhc3NldC5uYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogYFZhbHVlOiAke2Zvcm1hdEN1cnJlbmN5KGFzc2V0LnZhbHVlKX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0QXNzZXQoYXNzZXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVBc3NldChhc3NldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBoYW5kbGluZyBpdGVtIHRhcCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQXNzZXRzKCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fYXNzZXRzID0gdGhpcy5fYXNzZXRTZXJ2aWNlLmdldEFzc2V0cygpO1xuICAgICAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsLnVwZGF0ZURhdGEodGhpcy5fYXNzZXRzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Fzc2V0cycsIHRoaXMuYXNzZXRzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsQXNzZXRzRm9ybWF0dGVkJywgdGhpcy50b3RhbEFzc2V0c0Zvcm1hdHRlZCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgTG9hZGVkICR7dGhpcy5fYXNzZXRzLmxlbmd0aH0gYXNzZXRzYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgbG9hZGluZyBhc3NldHMnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGVkaXRBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYEVkaXRpbmcgYXNzZXQ6ICR7YXNzZXQuaWR9YCk7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UnLCB7IGFzc2V0IH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlQXNzZXQoYXNzZXQ6IEFzc2V0KTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBEZWxldGluZyBhc3NldDogJHthc3NldC5pZH1gKTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgYXNzZXQ/JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlLmRlbGV0ZUFzc2V0KGFzc2V0LmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgQXNzZXQgZGVsZXRlZDogJHthc3NldC5pZH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGRlbGV0aW5nIGFzc2V0JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0Jhc2VWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQmFzZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGdvQmFjaygpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0F0dGVtcHRpbmcgdG8gbmF2aWdhdGUgYmFjaycpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS50b3Btb3N0KCk7XG4gICAgICAgICAgICBpZiAoZnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFtZS5nb0JhY2soKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IG5hdmlnYXRlZCBiYWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGcmFtZSBpcyBudWxsLCBjYW5ub3QgbmF2aWdhdGUgYmFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIG5hdmlnYXRpbmcgYmFjaycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXNzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYXNzZXQtc2VydmljZSc7XG5pbXBvcnQgeyBMaWFiaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbGlhYmlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vbnRobHktc25hcHNob3Qtc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0UGVyY2VudGFnZSB9IGZyb20gJy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgXG4gICAgY2FsY3VsYXRlTmV0V29ydGgsIFxuICAgIGNhbGN1bGF0ZU1vbnRobHlDYXNoZmxvdywgXG4gICAgY2FsY3VsYXRlV2VpZ2h0ZWRBdmVyYWdlSW50ZXJlc3RSYXRlLFxuICAgIGNhbGN1bGF0ZURUSSxcbiAgICBjYWxjdWxhdGVMUixcbiAgICBjYWxjdWxhdGVEQVJcbn0gZnJvbSAnLi4vdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnRGFzaGJvYXJkVmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX25ldFdvcnRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RvdGFsSW5jb21lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RvdGFsRXhwZW5zZXM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxBc3NldHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxMaWFiaWxpdGllczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYXNoZmxvdzogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9ob3VybHlSYXRlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3NoYXJwZVJhdGlvOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIF93ZWlnaHRlZEludGVyZXN0UmF0ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9kdGk6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfbHI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfZGFyOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSB0cmFuc2FjdGlvblNlcnZpY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcml2YXRlIGFzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgbGlhYmlsaXR5U2VydmljZTogTGlhYmlsaXR5U2VydmljZTtcbiAgICBwcml2YXRlIG1vbnRobHlTbmFwc2hvdFNlcnZpY2U6IE1vbnRobHlTbmFwc2hvdFNlcnZpY2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50cmFuc2FjdGlvblNlcnZpY2UgPSBUcmFuc2FjdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5hc3NldFNlcnZpY2UgPSBBc3NldFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5saWFiaWxpdHlTZXJ2aWNlID0gTGlhYmlsaXR5U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLm1vbnRobHlTbmFwc2hvdFNlcnZpY2UgPSBNb250aGx5U25hcHNob3RTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlRmluYW5jaWFscygpO1xuICAgIH1cblxuICAgIC8vIEV4aXN0aW5nIGdldHRlcnMuLi5cbiAgICBnZXQgbmV0V29ydGhGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX25ldFdvcnRoKTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxJbmNvbWVGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX3RvdGFsSW5jb21lKTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxFeHBlbnNlc0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fdG90YWxFeHBlbnNlcyk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQXNzZXRzRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl90b3RhbEFzc2V0cyk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX3RvdGFsTGlhYmlsaXRpZXMpO1xuICAgIH1cblxuICAgIGdldCBjYXNoZmxvd0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fY2FzaGZsb3cpO1xuICAgIH1cblxuICAgIGdldCBob3VybHlSYXRlRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeShNYXRoLnJvdW5kKHRoaXMuX2hvdXJseVJhdGUgKiAxMDApIC8gMTAwKTtcbiAgICB9XG5cbiAgICBnZXQgY2FzaGZsb3coKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nhc2hmbG93O1xuICAgIH1cblxuICAgIGdldCBzaGFycGVSYXRpb0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2hhcnBlUmF0aW8gIT09IG51bGwgXG4gICAgICAgICAgICA/IGZvcm1hdFBlcmNlbnRhZ2UodGhpcy5fc2hhcnBlUmF0aW8sIGZhbHNlKVxuICAgICAgICAgICAgOiAnTi9BJztcbiAgICB9XG5cbiAgICBnZXQgd2VpZ2h0ZWRJbnRlcmVzdFJhdGVGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFBlcmNlbnRhZ2UodGhpcy5fd2VpZ2h0ZWRJbnRlcmVzdFJhdGUpO1xuICAgIH1cblxuICAgIC8vIE5ldyBnZXR0ZXJzIGZvciBmaW5hbmNpYWwgcmF0aW9zXG4gICAgZ2V0IGR0aUZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0UGVyY2VudGFnZSh0aGlzLl9kdGkpO1xuICAgIH1cblxuICAgIGdldCBsckZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbHIudG9GaXhlZCgyKTtcbiAgICB9XG5cbiAgICBnZXQgZGFyRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRQZXJjZW50YWdlKHRoaXMuX2Rhcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVGaW5hbmNpYWxzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXNzZXRzID0gdGhpcy5hc3NldFNlcnZpY2UuZ2V0QXNzZXRzKCk7XG4gICAgICAgICAgICBjb25zdCBsaWFiaWxpdGllcyA9IHRoaXMubGlhYmlsaXR5U2VydmljZS5nZXRMaWFiaWxpdGllcygpO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuZ2V0VHJhbnNhY3Rpb25zKCk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0b3RhbHNcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsQXNzZXRzID0gdGhpcy5hc3NldFNlcnZpY2UuZ2V0VG90YWxBc3NldFZhbHVlKCk7XG4gICAgICAgICAgICB0aGlzLl90b3RhbExpYWJpbGl0aWVzID0gdGhpcy5saWFiaWxpdHlTZXJ2aWNlLmdldFRvdGFsTGlhYmlsaXRpZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsSW5jb21lID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuZ2V0VG90YWxJbmNvbWUoKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsRXhwZW5zZXMgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRUb3RhbEV4cGVuc2VzKCk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBuZXQgd29ydGhcbiAgICAgICAgICAgIHRoaXMuX25ldFdvcnRoID0gY2FsY3VsYXRlTmV0V29ydGgoYXNzZXRzLCBsaWFiaWxpdGllcyk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtb250aGx5IGNhc2hmbG93XG4gICAgICAgICAgICB0aGlzLl9jYXNoZmxvdyA9IGNhbGN1bGF0ZU1vbnRobHlDYXNoZmxvdyh0cmFuc2FjdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgaG91cmx5IHJhdGVcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsVGltZVJlcXVpcmVkID0gdGhpcy50cmFuc2FjdGlvblNlcnZpY2UuZ2V0VG90YWxUaW1lUmVxdWlyZWQoKTtcbiAgICAgICAgICAgIHRoaXMuX2hvdXJseVJhdGUgPSB0b3RhbFRpbWVSZXF1aXJlZCA+IDAgPyB0aGlzLl90b3RhbEluY29tZSAvIHRvdGFsVGltZVJlcXVpcmVkIDogMDtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIFNoYXJwZSBSYXRpb1xuICAgICAgICAgICAgdGhpcy5fc2hhcnBlUmF0aW8gPSB0aGlzLm1vbnRobHlTbmFwc2hvdFNlcnZpY2UuY2FsY3VsYXRlU2hhcnBlUmF0aW8oKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHdlaWdodGVkIGF2ZXJhZ2UgaW50ZXJlc3QgcmF0ZVxuICAgICAgICAgICAgdGhpcy5fd2VpZ2h0ZWRJbnRlcmVzdFJhdGUgPSBjYWxjdWxhdGVXZWlnaHRlZEF2ZXJhZ2VJbnRlcmVzdFJhdGUobGlhYmlsaXRpZXMpO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IGZpbmFuY2lhbCByYXRpb3NcbiAgICAgICAgICAgIHRoaXMuX2R0aSA9IGNhbGN1bGF0ZURUSSh0cmFuc2FjdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5fbHIgPSBjYWxjdWxhdGVMUihhc3NldHMsIHRyYW5zYWN0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLl9kYXIgPSBjYWxjdWxhdGVEQVIoYXNzZXRzLCBsaWFiaWxpdGllcyk7XG5cbiAgICAgICAgICAgIC8vIE5vdGlmeSBhbGwgcHJvcGVydHkgY2hhbmdlc1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0V29ydGhGb3JtYXR0ZWQnLCB0aGlzLm5ldFdvcnRoRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsSW5jb21lRm9ybWF0dGVkJywgdGhpcy50b3RhbEluY29tZUZvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbEV4cGVuc2VzRm9ybWF0dGVkJywgdGhpcy50b3RhbEV4cGVuc2VzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsQXNzZXRzRm9ybWF0dGVkJywgdGhpcy50b3RhbEFzc2V0c0Zvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkJywgdGhpcy50b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhc2hmbG93Rm9ybWF0dGVkJywgdGhpcy5jYXNoZmxvd0Zvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYXNoZmxvdycsIHRoaXMuY2FzaGZsb3cpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaG91cmx5UmF0ZUZvcm1hdHRlZCcsIHRoaXMuaG91cmx5UmF0ZUZvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzaGFycGVSYXRpb0Zvcm1hdHRlZCcsIHRoaXMuc2hhcnBlUmF0aW9Gb3JtYXR0ZWQpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnd2VpZ2h0ZWRJbnRlcmVzdFJhdGVGb3JtYXR0ZWQnLCB0aGlzLndlaWdodGVkSW50ZXJlc3RSYXRlRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2R0aUZvcm1hdHRlZCcsIHRoaXMuZHRpRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2xyRm9ybWF0dGVkJywgdGhpcy5sckZvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkYXJGb3JtYXR0ZWQnLCB0aGlzLmRhckZvcm1hdHRlZCk7XG5cbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdGaW5hbmNpYWwgY2FsY3VsYXRpb25zIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBjYWxjdWxhdGluZyBmaW5hbmNpYWxzJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTGlhYmlsaXR5LCBMaWFiaWxpdHlUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpYWJpbGl0eSc7XG5pbXBvcnQgeyBMaWFiaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbGlhYmlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZExpYWJpbGl0eVZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBZGRMaWFiaWxpdHlWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9hbW91bnQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfaW50ZXJlc3RSYXRlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkVHlwZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3R5cGVzOiBMaWFiaWxpdHlUeXBlW10gPSBbJ0xvYW4nLCAnRGVidC9QYXlhYmxlJ107XG4gICAgcHJpdmF0ZSBfbGlhYmlsaXR5U2VydmljZTogTGlhYmlsaXR5U2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ0xpYWJpbGl0eT86IExpYWJpbGl0eTtcblxuICAgIGNvbnN0cnVjdG9yKGV4aXN0aW5nTGlhYmlsaXR5PzogTGlhYmlsaXR5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5ID0gZXhpc3RpbmdMaWFiaWxpdHk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nTGlhYmlsaXR5KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVXaXRoRXhpc3RpbmdMaWFiaWxpdHkoZXhpc3RpbmdMaWFiaWxpdHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplV2l0aEV4aXN0aW5nTGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBsaWFiaWxpdHkubmFtZTtcbiAgICAgICAgdGhpcy5fYW1vdW50ID0gbGlhYmlsaXR5LmFtb3VudDtcbiAgICAgICAgdGhpcy5faW50ZXJlc3RSYXRlID0gbGlhYmlsaXR5LmludGVyZXN0UmF0ZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXggPSB0aGlzLl90eXBlcy5pbmRleE9mKGxpYWJpbGl0eS50eXBlKTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX25hbWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduYW1lJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGFtb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fYW1vdW50OyB9XG4gICAgc2V0IGFtb3VudCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpY1ZhbHVlKSAmJiB0aGlzLl9hbW91bnQgIT09IG51bWVyaWNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYW1vdW50ID0gbnVtZXJpY1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnYW1vdW50JywgbnVtZXJpY1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpbnRlcmVzdFJhdGUoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2ludGVyZXN0UmF0ZTsgfVxuICAgIHNldCBpbnRlcmVzdFJhdGUodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5faW50ZXJlc3RSYXRlICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2ludGVyZXN0UmF0ZScsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdHlwZXMoKTogTGlhYmlsaXR5VHlwZVtdIHsgcmV0dXJuIHRoaXMuX3R5cGVzOyB9XG4gICAgZ2V0IHNlbGVjdGVkVHlwZUluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZFR5cGVJbmRleDsgfVxuICAgIHNldCBzZWxlY3RlZFR5cGVJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZFR5cGVJbmRleCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkVHlwZUluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZFR5cGVJbmRleCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xpYWJpbGl0eSBuYW1lIGlzIHJlcXVpcmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLl9hbW91bnQpIHx8IHRoaXMuX2Ftb3VudCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWFiaWxpdHkgYW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMuX2ludGVyZXN0UmF0ZSkgfHwgdGhpcy5faW50ZXJlc3RSYXRlIDwgMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW50ZXJlc3QgcmF0ZSBtdXN0IGJlIDAgb3IgZ3JlYXRlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaWFiaWxpdHkgPSBuZXcgTGlhYmlsaXR5KHtcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5fZXhpc3RpbmdMaWFiaWxpdHkgJiYgeyBpZDogdGhpcy5fZXhpc3RpbmdMaWFiaWxpdHkuaWQgfSksXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5fbmFtZS50cmltKCksXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLl9hbW91bnQsXG4gICAgICAgICAgICAgICAgaW50ZXJlc3RSYXRlOiB0aGlzLl9pbnRlcmVzdFJhdGUsXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5fdHlwZXNbdGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXhdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGlhYmlsaXR5U2VydmljZS51cGRhdGVMaWFiaWxpdHkobGlhYmlsaXR5KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgbGlhYmlsaXR5OiAke2xpYWJpbGl0eS5uYW1lfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlLmFkZExpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgYWRkZWQgbGlhYmlsaXR5OiAke2xpYWJpbGl0eS5uYW1lfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIHNhdmluZyBsaWFiaWxpdHknLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMaWFiaWxpdHksIExpYWJpbGl0eVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlhYmlsaXR5JztcbmltcG9ydCB7IENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IERvbnV0Q2hhcnREYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQnO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5RGlzdHJpYnV0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfY2hhcnREYXRhOiBEb251dENoYXJ0RGF0YVtdID0gW107XG5cbiAgICBnZXQgY2hhcnREYXRhKCk6IERvbnV0Q2hhcnREYXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhcnREYXRhO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEobGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gbGlhYmlsaXRpZXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4gc3VtICsgbGlhYmlsaXR5LmFtb3VudCwgMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBHcm91cCBsaWFiaWxpdGllcyBieSB0eXBlXG4gICAgICAgIGNvbnN0IHR5cGVNYXAgPSBuZXcgTWFwPExpYWJpbGl0eVR5cGUsIG51bWJlcj4oKTtcbiAgICAgICAgbGlhYmlsaXRpZXMuZm9yRWFjaChsaWFiaWxpdHkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHR5cGVNYXAuZ2V0KGxpYWJpbGl0eS50eXBlKSB8fCAwO1xuICAgICAgICAgICAgdHlwZU1hcC5zZXQobGlhYmlsaXR5LnR5cGUsIGN1cnJlbnQgKyBsaWFiaWxpdHkuYW1vdW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29udmVydCB0byBjaGFydCBkYXRhXG4gICAgICAgIHRoaXMuX2NoYXJ0RGF0YSA9IEFycmF5LmZyb20odHlwZU1hcC5lbnRyaWVzKCkpXG4gICAgICAgICAgICAubWFwKChbdHlwZSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0eXBlLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiB0eXBlID09PSAnRGVidC9QYXlhYmxlJyA/IENoYXJ0Q29sb3JzLlNob3J0VGVybSA6IENoYXJ0Q29sb3JzLkxvbmdUZXJtLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKHZhbHVlIC8gdG90YWwpICogMTAwKSA6IDBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjaGFydERhdGEnLCB0aGlzLl9jaGFydERhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IExpYWJpbGl0eSB9IGZyb20gJy4uLy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZywgQ29uZmlybURpYWxvZ09wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9kaWFsb2cnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcbmltcG9ydCB7IExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCB9IGZyb20gJy4vbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsJztcblxuY29uc3QgVEFHID0gJ0xpYWJpbGl0eUxpc3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5TGlzdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX2xpYWJpbGl0eVNlcnZpY2U6IExpYWJpbGl0eVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfbGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdID0gW107XG4gICAgcHJpdmF0ZSBfZGlzdHJpYnV0aW9uVmlld01vZGVsOiBMaWFiaWxpdHlEaXN0cmlidXRpb25WaWV3TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fbGlhYmlsaXR5U2VydmljZSA9IExpYWJpbGl0eVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsID0gbmV3IExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCgpO1xuICAgICAgICB0aGlzLmxvYWRMaWFiaWxpdGllcygpO1xuICAgIH1cblxuICAgIGdldCBsaWFiaWxpdGllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpYWJpbGl0aWVzLm1hcChsaWFiaWxpdHkgPT4gKHtcbiAgICAgICAgICAgIC4uLmxpYWJpbGl0eSxcbiAgICAgICAgICAgIGZvcm1hdHRlZEFtb3VudDogZm9ybWF0Q3VycmVuY3kobGlhYmlsaXR5LmFtb3VudCksXG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnRlcmVzdFJhdGU6IGZvcm1hdFBlcmNlbnRhZ2UobGlhYmlsaXR5LmludGVyZXN0UmF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fbGlhYmlsaXR5U2VydmljZS5nZXRUb3RhbExpYWJpbGl0aWVzKCkpO1xuICAgIH1cblxuICAgIGdldCBkaXN0cmlidXRpb25WaWV3TW9kZWwoKTogTGlhYmlsaXR5RGlzdHJpYnV0aW9uVmlld01vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnUmVmcmVzaGluZyBsaWFiaWxpdGllcyBsaXN0Jyk7XG4gICAgICAgIHRoaXMubG9hZExpYWJpbGl0aWVzKCk7XG4gICAgfVxuXG4gICAgb25BZGRMaWFiaWxpdHkoKTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlXCIpO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaWFiaWxpdHkgPSB0aGlzLl9saWFiaWxpdGllc1thcmdzLmluZGV4XTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogbGlhYmlsaXR5Lm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQW1vdW50OiAke2Zvcm1hdEN1cnJlbmN5KGxpYWJpbGl0eS5hbW91bnQpfVxcbkludGVyZXN0IFJhdGU6ICR7Zm9ybWF0UGVyY2VudGFnZShsaWFiaWxpdHkuaW50ZXJlc3RSYXRlKX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TGlhYmlsaXR5KGxpYWJpbGl0eSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRMaWFiaWxpdGllcygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2xpYWJpbGl0aWVzID0gdGhpcy5fbGlhYmlsaXR5U2VydmljZS5nZXRMaWFiaWxpdGllcygpO1xuICAgICAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsLnVwZGF0ZURhdGEodGhpcy5fbGlhYmlsaXRpZXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbGlhYmlsaXRpZXMnLCB0aGlzLmxpYWJpbGl0aWVzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQnLCB0aGlzLnRvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYExvYWRlZCAke3RoaXMuX2xpYWJpbGl0aWVzLmxlbmd0aH0gbGlhYmlsaXRpZXNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBsb2FkaW5nIGxpYWJpbGl0aWVzJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0TGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UnLCB7IGxpYWJpbGl0eSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSk6IHZvaWQge1xuICAgICAgICBjb25zdCBkaWFsb2dPcHRpb25zOiBDb25maXJtRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaWFiaWxpdHk/JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHNob3dEaWFsb2coZGlhbG9nT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UuZGVsZXRlTGlhYmlsaXR5KGxpYWJpbGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTGlhYmlsaXRpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3QgfSBmcm9tICcuLi9tb2RlbHMvbW9udGhseS1zbmFwc2hvdCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBzaG93RGlhbG9nIH0gZnJvbSAnLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdNb250aGx5U25hcHNob3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhseVNuYXBzaG90Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfc25hcHNob3RTZXJ2aWNlOiBNb250aGx5U25hcHNob3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgX25ldEFzc2V0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkWWVhcjogbnVtYmVyO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkTW9udGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF95ZWFyczogbnVtYmVyW10gPSBbXTtcbiAgICBwcml2YXRlIF9tb250aHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG4gICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZSA9IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplWWVhcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVZZWFycygpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMuX3llYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gY3VycmVudFllYXIgLSAyICsgaSk7XG4gICAgfVxuXG4gICAgZ2V0IG5ldEFzc2V0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9uZXRBc3NldDsgfVxuICAgIHNldCBuZXRBc3NldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9uZXRBc3NldCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25ldEFzc2V0ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduZXRBc3NldCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZFllYXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkWWVhcjsgfVxuICAgIHNldCBzZWxlY3RlZFllYXIodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRZZWFyICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZFllYXInLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRNb250aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRNb250aDsgfVxuICAgIHNldCBzZWxlY3RlZE1vbnRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkTW9udGggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZE1vbnRoJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHllYXJzKCk6IG51bWJlcltdIHsgcmV0dXJuIHRoaXMuX3llYXJzOyB9XG4gICAgZ2V0IG1vbnRocygpOiBzdHJpbmdbXSB7IHJldHVybiB0aGlzLl9tb250aHM7IH1cblxuICAgIGdldCBzbmFwc2hvdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZ2V0U25hcHNob3RzKClcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEueWVhciAhPT0gYi55ZWFyKSByZXR1cm4gYi55ZWFyIC0gYS55ZWFyO1xuICAgICAgICAgICAgICAgIHJldHVybiBiLm1vbnRoIC0gYS5tb250aDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKHNuYXBzaG90ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uc25hcHNob3QsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogYCR7dGhpcy5fbW9udGhzW3NuYXBzaG90Lm1vbnRoXX0gJHtzbmFwc2hvdC55ZWFyfWAsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTmV0QXNzZXQ6IGZvcm1hdEN1cnJlbmN5KHNuYXBzaG90Lm5ldEFzc2V0KSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRQZXJjZW50YWdlQ2hhbmdlOiBzbmFwc2hvdC5wZXJjZW50YWdlQ2hhbmdlIFxuICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdFBlcmNlbnRhZ2Uoc25hcHNob3QucGVyY2VudGFnZUNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgOiAnTi9BJ1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZXRBc3NldCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXQgYXNzZXQgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBzbmFwc2hvdCBhbHJlYWR5IGV4aXN0cyBmb3Igc2VsZWN0ZWQgbW9udGgveWVhclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZ2V0U25hcHNob3RzKCkuZmluZChcbiAgICAgICAgICAgICAgICBzID0+IHMueWVhciA9PT0gdGhpcy5fc2VsZWN0ZWRZZWFyICYmIHMubW9udGggPT09IHRoaXMuX3NlbGVjdGVkTW9udGhcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NuYXBzaG90IEV4aXN0cycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBIHNuYXBzaG90IGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIG1vbnRoLiBEbyB5b3Ugd2FudCB0byB1cGRhdGUgaXQ/JyxcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnVXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLm5ldEFzc2V0ID0gdGhpcy5fbmV0QXNzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UudXBkYXRlU25hcHNob3QoZXhpc3RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgTW9udGhseVNuYXBzaG90KHtcbiAgICAgICAgICAgICAgICB5ZWFyOiB0aGlzLl9zZWxlY3RlZFllYXIsXG4gICAgICAgICAgICAgICAgbW9udGg6IHRoaXMuX3NlbGVjdGVkTW9udGgsXG4gICAgICAgICAgICAgICAgbmV0QXNzZXQ6IHRoaXMuX25ldEFzc2V0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlLmFkZFNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IHNhdmVkIHNuYXBzaG90Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIHNuYXBzaG90JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IHsgaW5kZXg6IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90ID0gdGhpcy5fc25hcHNob3RTZXJ2aWNlLmdldFNuYXBzaG90cygpW2FyZ3MuaW5kZXhdO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiBgJHt0aGlzLl9tb250aHNbc25hcHNob3QubW9udGhdfSAke3NuYXBzaG90LnllYXJ9YCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBOZXQgQXNzZXQ6ICR7Zm9ybWF0Q3VycmVuY3koc25hcHNob3QubmV0QXNzZXQpfWAsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgeyBpZDogJ2VkaXQnLCB0ZXh0OiAnRWRpdCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnZGVsZXRlJywgdGV4dDogJ0RlbGV0ZScgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0U25hcHNob3Qoc25hcHNob3Q6IE1vbnRobHlTbmFwc2hvdCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFllYXIgPSBzbmFwc2hvdC55ZWFyO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gc25hcHNob3QubW9udGg7XG4gICAgICAgIHRoaXMuX25ldEFzc2V0ID0gc25hcHNob3QubmV0QXNzZXQ7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkWWVhcicsIHRoaXMuX3NlbGVjdGVkWWVhcik7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkTW9udGgnLCB0aGlzLl9zZWxlY3RlZE1vbnRoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0QXNzZXQnLCB0aGlzLl9uZXRBc3NldCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVTbmFwc2hvdChzbmFwc2hvdDogTW9udGhseVNuYXBzaG90KSB7XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtIERlbGV0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHNuYXBzaG90PycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZS5kZWxldGVTbmFwc2hvdChzbmFwc2hvdC5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc25hcHNob3RzJywgdGhpcy5zbmFwc2hvdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5fbmV0QXNzZXQgPSAwO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZFllYXInLCB0aGlzLl9zZWxlY3RlZFllYXIpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZE1vbnRoJywgdGhpcy5fc2VsZWN0ZWRNb250aCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25ldEFzc2V0JywgdGhpcy5fbmV0QXNzZXQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzbmFwc2hvdHMnLCB0aGlzLnNuYXBzaG90cyk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90IH0gZnJvbSAnLi4vLi4vbW9kZWxzL21vbnRobHktc25hcHNob3QnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vbnRobHktc25hcHNob3Qtc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudEJ1c1NlcnZpY2UsIEV2ZW50TmFtZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC1idXMtc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQWRkU25hcHNob3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkU25hcHNob3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9uZXRBc3NldDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF95ZWFySW5kZXg6IG51bWJlciA9IDI7IC8vIERlZmF1bHQgdG8gY3VycmVudCB5ZWFyIChtaWRkbGUgb2YgdGhlIDUteWVhciByYW5nZSlcbiAgICBwcml2YXRlIF9zZWxlY3RlZE1vbnRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfeWVhcnM6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBfbW9udGhzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgXTtcbiAgICBwcml2YXRlIF9zbmFwc2hvdFNlcnZpY2U6IE1vbnRobHlTbmFwc2hvdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXZlbnRCdXM6IEV2ZW50QnVzU2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ1NuYXBzaG90PzogTW9udGhseVNuYXBzaG90O1xuXG4gICAgY29uc3RydWN0b3IoZXhpc3RpbmdTbmFwc2hvdD86IE1vbnRobHlTbmFwc2hvdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UgPSBNb250aGx5U25hcHNob3RTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V2ZW50QnVzID0gRXZlbnRCdXNTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nU25hcHNob3QgPSBleGlzdGluZ1NuYXBzaG90O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVllYXJzKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXhpc3RpbmdTbmFwc2hvdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nU25hcHNob3QoZXhpc3RpbmdTbmFwc2hvdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbmV0QXNzZXQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX25ldEFzc2V0OyB9XG4gICAgc2V0IG5ldEFzc2V0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIHRoaXMuX25ldEFzc2V0ICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25ldEFzc2V0ID0gbnVtZXJpY1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0QXNzZXQnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHllYXJJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5feWVhckluZGV4OyB9XG4gICAgc2V0IHllYXJJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl95ZWFySW5kZXggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl95ZWFySW5kZXggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3llYXJJbmRleCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZFllYXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3llYXJzW3RoaXMuX3llYXJJbmRleF07IH1cblxuICAgIGdldCBzZWxlY3RlZE1vbnRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZE1vbnRoOyB9XG4gICAgc2V0IHNlbGVjdGVkTW9udGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRNb250aCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkTW9udGgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgeWVhcnMoKTogbnVtYmVyW10geyByZXR1cm4gdGhpcy5feWVhcnM7IH1cbiAgICBnZXQgbW9udGhzKCk6IHN0cmluZ1tdIHsgcmV0dXJuIHRoaXMuX21vbnRoczsgfVxuICAgIGdldCBpc0VkaXRpbmcoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuX2V4aXN0aW5nU25hcHNob3Q7IH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVllYXJzKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5feWVhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBpKSA9PiBjdXJyZW50WWVhciAtIDIgKyBpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVXaXRoRXhpc3RpbmdTbmFwc2hvdChzbmFwc2hvdDogTW9udGhseVNuYXBzaG90KSB7XG4gICAgICAgIHRoaXMuX25ldEFzc2V0ID0gc25hcHNob3QubmV0QXNzZXQ7XG4gICAgICAgIHRoaXMuX3llYXJJbmRleCA9IHRoaXMuX3llYXJzLmluZGV4T2Yoc25hcHNob3QueWVhcik7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSBzbmFwc2hvdC5tb250aDtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBzYXZlIHNuYXBzaG90Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZXRBc3NldCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXQgYXNzZXQgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzbmFwc2hvdCA9IG5ldyBNb250aGx5U25hcHNob3Qoe1xuICAgICAgICAgICAgICAgIC4uLih0aGlzLl9leGlzdGluZ1NuYXBzaG90ICYmIHsgaWQ6IHRoaXMuX2V4aXN0aW5nU25hcHNob3QuaWQgfSksXG4gICAgICAgICAgICAgICAgeWVhcjogdGhpcy5zZWxlY3RlZFllYXIsXG4gICAgICAgICAgICAgICAgbW9udGg6IHRoaXMuX3NlbGVjdGVkTW9udGgsXG4gICAgICAgICAgICAgICAgbmV0QXNzZXQ6IHRoaXMuX25ldEFzc2V0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2V4aXN0aW5nU25hcHNob3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UudXBkYXRlU25hcHNob3Qoc25hcHNob3QpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgdXBkYXRlZCBzbmFwc2hvdCBmb3IgJHt0aGlzLl9tb250aHNbdGhpcy5fc2VsZWN0ZWRNb250aF19ICR7dGhpcy5zZWxlY3RlZFllYXJ9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZS5hZGRTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSBhZGRlZCBzbmFwc2hvdCBmb3IgJHt0aGlzLl9tb250aHNbdGhpcy5fc2VsZWN0ZWRNb250aF19ICR7dGhpcy5zZWxlY3RlZFllYXJ9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVtaXQgZXZlbnQgYmVmb3JlIG5hdmlnYXRpbmcgYmFja1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRCdXMuZW1pdChFdmVudE5hbWVzLlNOQVBTSE9UX1VQREFURUQpO1xuICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBzYXZpbmcgc25hcHNob3QnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9udGhseS1zbmFwc2hvdCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50QnVzU2VydmljZSwgRXZlbnROYW1lcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LWJ1cy1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZyB9IGZyb20gJy4uLy4uL3V0aWxzL2RpYWxvZyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTW9udGhseVNuYXBzaG90Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIE1vbnRobHlTbmFwc2hvdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX3NuYXBzaG90U2VydmljZTogTW9udGhseVNuYXBzaG90U2VydmljZTtcbiAgICBwcml2YXRlIF9ldmVudEJ1czogRXZlbnRCdXNTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3NuYXBzaG90czogTW9udGhseVNuYXBzaG90W10gPSBbXTtcbiAgICBwcml2YXRlIF9tb250aHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG4gICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZSA9IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fZXZlbnRCdXMgPSBFdmVudEJ1c1NlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExpc3RlbiBmb3Igc25hcHNob3QgdXBkYXRlc1xuICAgICAgICB0aGlzLl9ldmVudEJ1cy5vbihFdmVudE5hbWVzLlNOQVBTSE9UX1VQREFURUQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFNuYXBzaG90cygpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubG9hZFNuYXBzaG90cygpO1xuICAgIH1cblxuICAgIGdldCBzbmFwc2hvdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbmFwc2hvdHNcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEueWVhciAhPT0gYi55ZWFyKSByZXR1cm4gYi55ZWFyIC0gYS55ZWFyO1xuICAgICAgICAgICAgICAgIHJldHVybiBiLm1vbnRoIC0gYS5tb250aDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKHNuYXBzaG90ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uc25hcHNob3QsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogYCR7dGhpcy5fbW9udGhzW3NuYXBzaG90Lm1vbnRoXX0gJHtzbmFwc2hvdC55ZWFyfWAsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTmV0QXNzZXQ6IGZvcm1hdEN1cnJlbmN5KHNuYXBzaG90Lm5ldEFzc2V0KSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRQZXJjZW50YWdlQ2hhbmdlOiBzbmFwc2hvdC5wZXJjZW50YWdlQ2hhbmdlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRQZXJjZW50YWdlKHNuYXBzaG90LnBlcmNlbnRhZ2VDaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIDogJ04vQSdcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnUmVmcmVzaGluZyBzbmFwc2hvdHMnKTtcbiAgICAgICAgdGhpcy5sb2FkU25hcHNob3RzKCk7XG4gICAgfVxuXG4gICAgb25BZGRTbmFwc2hvdCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQWRkIFNuYXBzaG90IHBhZ2UnKTtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UnKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogeyBpbmRleDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc25hcHNob3QgPSB0aGlzLl9zbmFwc2hvdHNbYXJncy5pbmRleF07XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6IGAke3RoaXMuX21vbnRoc1tzbmFwc2hvdC5tb250aF19ICR7c25hcHNob3QueWVhcn1gLFxuICAgICAgICAgICAgbWVzc2FnZTogYE5ldCBBc3NldDogJHtmb3JtYXRDdXJyZW5jeShzbmFwc2hvdC5uZXRBc3NldCl9YCxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAnZWRpdCcsIHRleHQ6ICdFZGl0JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdkZWxldGUnLCB0ZXh0OiAnRGVsZXRlJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdFNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlU25hcHNob3Qoc25hcHNob3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblVubG9hZGVkKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnQ2xlYW5pbmcgdXAgZXZlbnQgbGlzdGVuZXJzJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50QnVzLm9mZihFdmVudE5hbWVzLlNOQVBTSE9UX1VQREFURUQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNuYXBzaG90cygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX3NuYXBzaG90cyA9IHRoaXMuX3NuYXBzaG90U2VydmljZS5nZXRTbmFwc2hvdHMoKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NuYXBzaG90cycsIHRoaXMuc25hcHNob3RzKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBMb2FkZWQgJHt0aGlzLl9zbmFwc2hvdHMubGVuZ3RofSBzbmFwc2hvdHNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBsb2FkaW5nIHNuYXBzaG90cycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdFNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYEVkaXRpbmcgc25hcHNob3Q6ICR7c25hcHNob3QuaWR9YCk7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC1wYWdlJywgeyBzbmFwc2hvdCB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZVNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYERlbGV0aW5nIHNuYXBzaG90OiAke3NuYXBzaG90LmlkfWApO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzbmFwc2hvdD8nLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZGVsZXRlU25hcHNob3Qoc25hcHNob3QuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFNuYXBzaG90cygpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTbmFwc2hvdCBkZWxldGVkOiAke3NuYXBzaG90LmlkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcmVwb3J0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3ksIGZvcm1hdFBlcmNlbnRhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXR0ZXJzJztcblxuZXhwb3J0IGNsYXNzIEZpbmFuY2lhbEhlYWx0aFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX3JlcG9ydFNlcnZpY2U6IFJlcG9ydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfcmVwb3J0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVwb3J0U2VydmljZSA9IFJlcG9ydFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5sb2FkUmVwb3J0KCk7XG4gICAgfVxuXG4gICAgZ2V0IG5ldFdvcnRoRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9yZXBvcnQubmV0V29ydGgpO1xuICAgIH1cblxuICAgIGdldCBtb250aGx5Q2FzaGZsb3dGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX3JlcG9ydC5tb250aGx5Q2FzaGZsb3cpO1xuICAgIH1cblxuICAgIGdldCBkZWJ0VG9JbmNvbWVSYXRpb0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0UGVyY2VudGFnZSh0aGlzLl9yZXBvcnQuZGVidFRvSW5jb21lUmF0aW8gKiAxMDApO1xuICAgIH1cblxuICAgIGdldCBtb250aGx5UmVwb3J0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcG9ydC5tb250aGx5UmVwb3J0cy5tYXAocmVwb3J0ID0+ICh7XG4gICAgICAgICAgICAuLi5yZXBvcnQsXG4gICAgICAgICAgICBtb250aFllYXI6IGAke25ldyBEYXRlKHJlcG9ydC55ZWFyLCByZXBvcnQubW9udGgpLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyBtb250aDogJ3Nob3J0JywgeWVhcjogJ251bWVyaWMnIH0pfWAsXG4gICAgICAgICAgICBpbmNvbWVGb3JtYXR0ZWQ6IGZvcm1hdEN1cnJlbmN5KHJlcG9ydC5pbmNvbWUpLFxuICAgICAgICAgICAgZXhwZW5zZXNGb3JtYXR0ZWQ6IGZvcm1hdEN1cnJlbmN5KHJlcG9ydC5leHBlbnNlcyksXG4gICAgICAgICAgICBzYXZpbmdzUmF0ZUZvcm1hdHRlZDogZm9ybWF0UGVyY2VudGFnZShyZXBvcnQuc2F2aW5nc1JhdGUpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRSZXBvcnQoKSB7XG4gICAgICAgIHRoaXMuX3JlcG9ydCA9IHRoaXMuX3JlcG9ydFNlcnZpY2UuZ2VuZXJhdGVGaW5hbmNpYWxIZWFsdGhSZXBvcnQoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbW9udGhseVJlcG9ydHMnLCB0aGlzLm1vbnRobHlSZXBvcnRzKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiwgVHJhbnNhY3Rpb25UeXBlLCBUcmFuc2FjdGlvbkNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZFRyYW5zYWN0aW9uVmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEFkZFRyYW5zYWN0aW9uVmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgX2Ftb3VudDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZENhdGVnb3J5SW5kZXg6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdGltZVJlcXVpcmVkOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgX2NhdGVnb3JpZXM6IFRyYW5zYWN0aW9uQ2F0ZWdvcnlbXSA9IFtdO1xuICAgIHByaXZhdGUgX2lzSW5jb21lOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3RyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgX2V4aXN0aW5nVHJhbnNhY3Rpb24/OiBUcmFuc2FjdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKGlzSW5jb21lOiBib29sZWFuLCBleGlzdGluZ1RyYW5zYWN0aW9uPzogVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNJbmNvbWUgPSBpc0luY29tZTtcbiAgICAgICAgdGhpcy5fZXhpc3RpbmdUcmFuc2FjdGlvbiA9IGV4aXN0aW5nVHJhbnNhY3Rpb247XG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzID0gdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG5cbiAgICAgICAgaWYgKGV4aXN0aW5nVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ1RyYW5zYWN0aW9uKGV4aXN0aW5nVHJhbnNhY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplV2l0aEV4aXN0aW5nVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdHJhbnNhY3Rpb24uZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuX2Ftb3VudCA9IE51bWJlcih0cmFuc2FjdGlvbi5hbW91bnQpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggPSB0aGlzLl9jYXRlZ29yaWVzLmluZGV4T2YodHJhbnNhY3Rpb24uY2F0ZWdvcnkpO1xuICAgICAgICBpZiAodHJhbnNhY3Rpb24udHlwZSA9PT0gJ2luY29tZScpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVSZXF1aXJlZCA9IHRyYW5zYWN0aW9uLnRpbWVSZXF1aXJlZCB8fCAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjsgfVxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXNjcmlwdGlvbiAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkZXNjcmlwdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBhbW91bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2Ftb3VudDsgfVxuICAgIHNldCBhbW91bnQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5fYW1vdW50ICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Ftb3VudCA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Ftb3VudCcsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdGltZVJlcXVpcmVkKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl90aW1lUmVxdWlyZWQ7IH1cbiAgICBzZXQgdGltZVJlcXVpcmVkKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIG51bWVyaWNWYWx1ZSA+IDAgJiYgdGhpcy5fdGltZVJlcXVpcmVkICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVSZXF1aXJlZCA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RpbWVSZXF1aXJlZCcsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgY2F0ZWdvcmllcygpOiBUcmFuc2FjdGlvbkNhdGVnb3J5W10geyByZXR1cm4gdGhpcy5fY2F0ZWdvcmllczsgfVxuICAgIGdldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDsgfVxuICAgIHNldCBzZWxlY3RlZENhdGVnb3J5SW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZENhdGVnb3J5SW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaXNJbmNvbWUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9pc0luY29tZTsgfVxuXG4gICAgcHJpdmF0ZSBnZXRDYXRlZ29yaWVzKCk6IFRyYW5zYWN0aW9uQ2F0ZWdvcnlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0luY29tZSBcbiAgICAgICAgICAgID8gWydTYWxhcnknLCAnQnVzaW5lc3MnLCAnUmVudCcsICdJbnRlcmVzdCcsICdSb3lhbHRpZXMnXVxuICAgICAgICAgICAgOiBbJ0NvbnN1bWVyIGJhc2tldCcsICdIYWJpdHMnLCAnQ2FyJywgJ1JvdXRpbmUnLCAnSG91c2luZycsICdDcmVkaXQgQ2FyZC9Mb2FuJ107XG4gICAgfVxuXG4gICAgb25TYXZlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgICAgIC4uLih0aGlzLl9leGlzdGluZ1RyYW5zYWN0aW9uICYmIHsgaWQ6IHRoaXMuX2V4aXN0aW5nVHJhbnNhY3Rpb24uaWQgfSksXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5faXNJbmNvbWUgPyAnaW5jb21lJyA6ICdleHBlbnNlJyxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5fY2F0ZWdvcmllc1t0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXhdLFxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5fYW1vdW50LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLl9kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB0aW1lUmVxdWlyZWQ6IHRoaXMuX2lzSW5jb21lID8gdGhpcy5fdGltZVJlcXVpcmVkIDogdW5kZWZpbmVkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2V4aXN0aW5nVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UudXBkYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgdXBkYXRlZCAke3RoaXMuX2lzSW5jb21lID8gJ2luY29tZScgOiAnZXhwZW5zZSd9IHRyYW5zYWN0aW9uYCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5hZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSBhZGRlZCAke3RoaXMuX2lzSW5jb21lID8gJ2luY29tZScgOiAnZXhwZW5zZSd9IHRyYW5zYWN0aW9uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIHRyYW5zYWN0aW9uJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24sIFRyYW5zYWN0aW9uQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgQ2hhcnRDb2xvcnMgfSBmcm9tICcuLi8uLi91dGlscy9jaGFydC1jb2xvcnMnO1xuaW1wb3J0IHsgRG9udXRDaGFydERhdGEgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydCc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbkRpc3RyaWJ1dGlvblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2NoYXJ0RGF0YTogRG9udXRDaGFydERhdGFbXSA9IFtdO1xuXG4gICAgZ2V0IGNoYXJ0RGF0YSgpOiBEb251dENoYXJ0RGF0YVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJ0RGF0YTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSwgdHlwZTogJ2luY29tZScgfCAnZXhwZW5zZScpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRUcmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSB0eXBlKTtcbiAgICAgICAgY29uc3QgdG90YWwgPSBmaWx0ZXJlZFRyYW5zYWN0aW9ucy5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuICAgICAgICBcbiAgICAgICAgLy8gR3JvdXAgdHJhbnNhY3Rpb25zIGJ5IGNhdGVnb3J5XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TWFwID0gbmV3IE1hcDxUcmFuc2FjdGlvbkNhdGVnb3J5LCBudW1iZXI+KCk7XG4gICAgICAgIGZpbHRlcmVkVHJhbnNhY3Rpb25zLmZvckVhY2godHJhbnNhY3Rpb24gPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGNhdGVnb3J5TWFwLmdldCh0cmFuc2FjdGlvbi5jYXRlZ29yeSkgfHwgMDtcbiAgICAgICAgICAgIGNhdGVnb3J5TWFwLnNldCh0cmFuc2FjdGlvbi5jYXRlZ29yeSwgY3VycmVudCArIHRyYW5zYWN0aW9uLmFtb3VudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gY2hhcnQgZGF0YVxuICAgICAgICB0aGlzLl9jaGFydERhdGEgPSBBcnJheS5mcm9tKGNhdGVnb3J5TWFwLmVudHJpZXMoKSlcbiAgICAgICAgICAgIC5tYXAoKFtjYXRlZ29yeSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogQ2hhcnRDb2xvcnNbY2F0ZWdvcnldIHx8ICcjQ0JENUUwJywgLy8gRGVmYXVsdCBjb2xvciBpZiBub3QgZm91bmRcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKCh2YWx1ZSAvIHRvdGFsKSAqIDEwMCkgOiAwXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2hhcnREYXRhJywgdGhpcy5fY2hhcnREYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZywgQ29uZmlybURpYWxvZ09wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9kaWFsb2cnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uRGlzdHJpYnV0aW9uVmlld01vZGVsIH0gZnJvbSAnLi90cmFuc2FjdGlvbi1kaXN0cmlidXRpb24tdmlldy1tb2RlbCc7XG5cbmNvbnN0IFRBRyA9ICdUcmFuc2FjdGlvbkxpc3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdID0gW107XG4gICAgcHJpdmF0ZSBfZmlsdGVyVHlwZTogJ2luY29tZScgfCAnZXhwZW5zZScgfCB1bmRlZmluZWQ7XG4gICAgcHJpdmF0ZSBfdHJhbnNhY3Rpb25TZXJ2aWNlOiBUcmFuc2FjdGlvblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZGlzdHJpYnV0aW9uVmlld01vZGVsOiBUcmFuc2FjdGlvbkRpc3RyaWJ1dGlvblZpZXdNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKGZpbHRlclR5cGU/OiAnaW5jb21lJyB8ICdleHBlbnNlJykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9maWx0ZXJUeXBlID0gZmlsdGVyVHlwZTtcbiAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlID0gVHJhbnNhY3Rpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbCA9IG5ldyBUcmFuc2FjdGlvbkRpc3RyaWJ1dGlvblZpZXdNb2RlbCgpO1xuICAgICAgICB0aGlzLmxvYWRUcmFuc2FjdGlvbnMoKTtcbiAgICB9XG5cbiAgICBnZXQgZmlsdGVyVHlwZSgpOiAnaW5jb21lJyB8ICdleHBlbnNlJyB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJUeXBlO1xuICAgIH1cblxuICAgIGdldCBkaXN0cmlidXRpb25WaWV3TW9kZWwoKTogVHJhbnNhY3Rpb25EaXN0cmlidXRpb25WaWV3TW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsO1xuICAgIH1cblxuICAgIGdldCB0b3RhbEFtb3VudEZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCB0b3RhbCA9IHRoaXMuX2ZpbHRlclR5cGUgPT09ICdpbmNvbWUnIFxuICAgICAgICAgICAgPyB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UuZ2V0VG90YWxJbmNvbWUoKVxuICAgICAgICAgICAgOiB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UuZ2V0VG90YWxFeHBlbnNlcygpO1xuICAgICAgICByZXR1cm4gYFRvdGFsICR7dGhpcy5fZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnSW5jb21lJyA6ICdFeHBlbnNlcyd9OiAke2Zvcm1hdEN1cnJlbmN5KHRvdGFsKX1gO1xuICAgIH1cblxuICAgIGdldCB0cmFuc2FjdGlvbnMoKSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZFRyYW5zYWN0aW9ucyA9IFsuLi50aGlzLl90cmFuc2FjdGlvbnNdO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlclR5cGUpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkVHJhbnNhY3Rpb25zID0gZmlsdGVyZWRUcmFuc2FjdGlvbnMuZmlsdGVyKHQgPT4gdC50eXBlID09PSB0aGlzLl9maWx0ZXJUeXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFRyYW5zYWN0aW9ucy5tYXAodHJhbnNhY3Rpb24gPT4gKHtcbiAgICAgICAgICAgIC4uLnRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgZm9ybWF0dGVkQW1vdW50OiBmb3JtYXRDdXJyZW5jeSh0cmFuc2FjdGlvbi5hbW91bnQpLFxuICAgICAgICAgICAgaG91cmx5UmF0ZUZvcm1hdHRlZDogdHJhbnNhY3Rpb24udHlwZSA9PT0gJ2luY29tZScgJiYgdHJhbnNhY3Rpb24udGltZVJlcXVpcmVkIFxuICAgICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koTWF0aC5yb3VuZCgodHJhbnNhY3Rpb24uYW1vdW50IC8gdHJhbnNhY3Rpb24udGltZVJlcXVpcmVkKSAqIDEwMCkgLyAxMDApXG4gICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1JlZnJlc2hpbmcgdHJhbnNhY3Rpb25zIGxpc3QnKTtcbiAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgb25BZGRUcmFuc2FjdGlvbigpOiB2b2lkIHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZScsIHsgXG4gICAgICAgICAgICBpc0luY29tZTogdGhpcy5fZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHRoaXMuX3RyYW5zYWN0aW9uc1thcmdzLmluZGV4XTtcbiAgICAgICAgY29uc3QgaG91cmx5UmF0ZSA9IHRyYW5zYWN0aW9uLnR5cGUgPT09ICdpbmNvbWUnICYmIHRyYW5zYWN0aW9uLnRpbWVSZXF1aXJlZFxuICAgICAgICAgICAgPyBgXFxuSG91cmx5IFJhdGU6ICR7Zm9ybWF0Q3VycmVuY3kodHJhbnNhY3Rpb24uYW1vdW50IC8gdHJhbnNhY3Rpb24udGltZVJlcXVpcmVkKX0vaHJgXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbWVzc2FnZTogYEFtb3VudDogJHtmb3JtYXRDdXJyZW5jeSh0cmFuc2FjdGlvbi5hbW91bnQpfSR7aG91cmx5UmF0ZX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFRyYW5zYWN0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9ucyA9IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5nZXRUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9maWx0ZXJUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsLnVwZGF0ZURhdGEodGhpcy5fdHJhbnNhY3Rpb25zLCB0aGlzLl9maWx0ZXJUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RyYW5zYWN0aW9ucycsIHRoaXMudHJhbnNhY3Rpb25zKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsQW1vdW50Rm9ybWF0dGVkJywgdGhpcy50b3RhbEFtb3VudEZvcm1hdHRlZCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgTG9hZGVkICR7dGhpcy5fdHJhbnNhY3Rpb25zLmxlbmd0aH0gdHJhbnNhY3Rpb25zYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgbG9hZGluZyB0cmFuc2FjdGlvbnMnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGVkaXRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZScsIHsgXG4gICAgICAgICAgICBpc0luY29tZTogdHJhbnNhY3Rpb24udHlwZSA9PT0gJ2luY29tZScsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbiBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlhbG9nT3B0aW9uczogQ29uZmlybURpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdHJhbnNhY3Rpb24/JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHNob3dEaWFsb2coZGlhbG9nT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5kZWxldGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZEFzc2V0Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkQXNzZXRWaWV3TW9kZWwoKTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFzc2V0TGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0Fzc2V0TGlzdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBBc3NldCBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQXNzZXRMaXN0Vmlld01vZGVsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0ZWQgdG8gQXNzZXQgTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgQXNzZXRMaXN0Vmlld01vZGVsO1xuICAgIHZpZXdNb2RlbD8ucmVmcmVzaCgpO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQWRkTGlhYmlsaXR5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkTGlhYmlsaXR5Vmlld01vZGVsKCk7XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMaWFiaWxpdHlMaXN0Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3Qtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTGlhYmlsaXR5TGlzdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBMaWFiaWxpdHkgTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGlmICghcGFnZS5iaW5kaW5nQ29udGV4dCkge1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IExpYWJpbGl0eUxpc3RWaWV3TW9kZWwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZWRUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRlZCB0byBMaWFiaWxpdHkgTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgTGlhYmlsaXR5TGlzdFZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWw/LnJlZnJlc2goKTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZFNuYXBzaG90Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3Qtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvbW9udGhseS1zbmFwc2hvdCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQWRkU25hcHNob3RQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQWRkIFNuYXBzaG90IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgZXhpc3RpbmdTbmFwc2hvdCA9IGFyZ3MuY29udGV4dD8uc25hcHNob3QgYXMgTW9udGhseVNuYXBzaG90IHwgdW5kZWZpbmVkO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkU25hcHNob3RWaWV3TW9kZWwoZXhpc3RpbmdTbmFwc2hvdCk7XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3RWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3Qtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTW9udGhseVNuYXBzaG90UGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIE1vbnRobHkgU25hcHNob3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBNb250aGx5U25hcHNob3RWaWV3TW9kZWwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZWRUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRlZCB0byBNb250aGx5IFNuYXBzaG90IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdmlld01vZGVsID0gcGFnZS5iaW5kaW5nQ29udGV4dCBhcyBNb250aGx5U25hcHNob3RWaWV3TW9kZWw7XG4gICAgdmlld01vZGVsPy5yZWZyZXNoKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmxvYWRlZChhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ01vbnRobHkgU25hcHNob3QgcGFnZSB1bmxvYWRlZCcpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBwYWdlLmJpbmRpbmdDb250ZXh0IGFzIE1vbnRobHlTbmFwc2hvdFZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWw/Lm9uVW5sb2FkZWQoKTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZFRyYW5zYWN0aW9uVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5cbmNvbnN0IFRBRyA9ICdBZGRUcmFuc2FjdGlvblBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBBZGQgVHJhbnNhY3Rpb24gcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBpc0luY29tZSA9IGFyZ3MuY29udGV4dD8uaXNJbmNvbWUgPz8gZmFsc2U7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhcmdzLmNvbnRleHQ/LnRyYW5zYWN0aW9uIGFzIFRyYW5zYWN0aW9uIHwgdW5kZWZpbmVkO1xuICAgIFxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQWRkVHJhbnNhY3Rpb25WaWV3TW9kZWwoaXNJbmNvbWUsIHRyYW5zYWN0aW9uKTtcbiAgICBcbiAgICAvLyBTZXQgdGhlIEFjdGlvbkJhciB0aXRsZSBiYXNlZCBvbiB3aGV0aGVyIHdlJ3JlIGVkaXRpbmcgb3IgYWRkaW5nXG4gICAgY29uc3QgYWN0aW9uID0gdHJhbnNhY3Rpb24gPyAnRWRpdCcgOiAnQWRkJztcbiAgICBjb25zdCB0eXBlID0gaXNJbmNvbWUgPyAnSW5jb21lJyA6ICdFeHBlbnNlJztcbiAgICBwYWdlLmFjdGlvbkJhci50aXRsZSA9IGAke2FjdGlvbn0gJHt0eXBlfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nRnJvbShhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgZnJvbSBBZGQgVHJhbnNhY3Rpb24gcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbnVsbDtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ1RyYW5zYWN0aW9uTGlzdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBUcmFuc2FjdGlvbiBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsKGFyZ3MuY29udGV4dD8uZmlsdGVyVHlwZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0ZWQgdG8gVHJhbnNhY3Rpb24gTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsO1xuICAgIHZpZXdNb2RlbD8ucmVmcmVzaCgpO1xufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJtYWluLXBhZ2VcXFwiPlxcbjwvRnJhbWU+XFxuXCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwibS00XFxcIiBcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCI+XFxuICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJnLWdyYXktMTAwIHAtNCByb3VuZGVkLWxnXFxcIj5cXG4gICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgY2hhcnREYXRhIH19XFxcIiBoZWlnaHQ9XFxcIjIwMFxcXCI+XFxuICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJ7eyBsYWJlbCB9fVxcXCIgY2xhc3M9XFxcInRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgcGVyY2VudGFnZSArICclJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT1cXFwie3sgcGVyY2VudGFnZSB9fVxcXCIgbWF4VmFsdWU9XFxcIjEwMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibS0xXFxcIiBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9HcmlkTGF5b3V0PlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XFxuPC9TdGFja0xheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJwLTQgYm9yZGVyLWIgYmctd2hpdGVcXFwiPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgdGl0bGUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtZ3JheS04MDBcXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBhbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwie3sgYW1vdW50Q2xhc3MgfX1cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzdWJ0aXRsZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZXRhaWxzIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbjwvR3JpZExheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInctZnVsbFxcXCI+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXFxcIiB3aWR0aD1cXFwiMzJcXFwiIGhlaWdodD1cXFwiMzJcXFwiIGNsYXNzPVxcXCJtLTJcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2V0ZSBQRk1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkIG1sLTJcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gS2V5IE1ldHJpY3MgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgY2xhc3M9XFxcIm14LTQgbXQtNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTQgbS0xXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgQ2FzaGZsb3dcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjYXNoZmxvd0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInt7IGNhc2hmbG93ID49IDAgPyAndGV4dC1ncmVlbi02MDAgdGV4dC0yeGwgZm9udC1ib2xkJyA6ICd0ZXh0LXJlZC02MDAgdGV4dC0yeGwgZm9udC1ib2xkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNCBtLTFcXFwiIGNvbD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSG91cmx5IFJhdGVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBob3VybHlSYXRlRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIFF1aWNrIEFjdGlvbnMgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm14LTQgbWItNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSU5DT01FXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGVUb0luY29tZVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiRVhQRU5TRVxcXCIgdGFwPVxcXCJvbk5hdmlnYXRlVG9FeHBlbnNlXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFTU0VUU1xcXCIgdGFwPVxcXCJvbk5hdmlnYXRlVG9Bc3NldHNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTElBQklMSVRJRVNcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvTGlhYmlsaXRpZXNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG0tMSByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aGx5IFNuYXBzaG90IEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIk1PTlRITFkgU05BUFNIT1RcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvTW9udGhseVNuYXBzaG90XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgbWItNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcblxcbiAgICAgICAgICAgIDwhLS0gRmluYW5jaWFsIE1ldHJpY3MgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jaWFsIE1ldHJpY3NcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XFxcIi8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IFdvcnRoOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmV0V29ydGhGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGVidC10by1JbmNvbWU6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkdGlGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGlxdWlkaXR5IFJhdGlvOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbHJGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRGVidC10by1Bc3NldDpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRhckZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNsYXNzPVxcXCJtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJXZWlnaHRlZCBJbnRlcmVzdCBSYXRlOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgd2VpZ2h0ZWRJbnRlcmVzdFJhdGVGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTaGFycGUgUmF0aW86XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzaGFycGVSYXRpb0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBZGQgQXNzZXRcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJiZy1ncmF5LTEwMFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gTmFtZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFzc2V0IE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIG5hbWVcXFwiIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBWYWx1ZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlZhbHVlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIHZhbHVlXFxcIiB0ZXh0PVxcXCJ7eyB2YWx1ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gQ2F0ZWdvcnkgU2VsZWN0aW9uIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2F0ZWdvcnlcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBjYXRlZ29yaWVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZENhdGVnb3J5SW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmUgQXNzZXRcXFwiIHRhcD1cXFwie3sgb25TYXZlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtdC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIlxcbiAgICBuYXZpZ2F0ZWRUbz1cXFwibmF2aWdhdGVkVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJiZy1ibHVlLTYwMFxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQXNzZXRzXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gVG90YWwgQXNzZXRzIENhcmQgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYmctYmx1ZS01MDAgbS00IHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgQXNzZXRzXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LXNtIG1iLTFcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRvdGFsQXNzZXRzRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LTJ4bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tIEFzc2V0IERpc3RyaWJ1dGlvbiAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBc3NldCBEaXN0cmlidXRpb25cXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XFxcIiAvPlxcbiAgICAgICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgZGlzdHJpYnV0aW9uVmlld01vZGVsLmNoYXJ0RGF0YSB9fVxcXCI+XFxuICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLil49cXFwiIGNvbG9yPVxcXCJ7eyBjb2xvciB9fVxcXCIgY2xhc3M9XFxcIm1yLTJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcInt7IGxhYmVsIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTcwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgcGVyY2VudGFnZSArICclJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT1cXFwie3sgcGVyY2VudGFnZSB9fVxcXCIgbWF4VmFsdWU9XFxcIjEwMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibS0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gQWRkIEFzc2V0IEJ1dHRvbiAtLT5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJBZGQgQXNzZXRcXFwiIHRhcD1cXFwie3sgb25BZGRBc3NldCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBteC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gQXNzZXQgTGlzdCAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjNcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFzc2V0IExpc3RcXFwiIGNsYXNzPVxcXCJwLTQgdGV4dC14bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBhc3NldHMgfX1cXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCIgY2xhc3M9XFxcImxpc3Qtdmlld1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGQgdGV4dC1ncmF5LTgwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkVmFsdWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1ibHVlLTYwMCBmb250LWJvbGQgdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgY2F0ZWdvcnkgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFkZCBMaWFiaWxpdHlcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJiZy1ncmF5LTEwMFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gTmFtZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxpYWJpbGl0eSBOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBuYW1lXFxcIiB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gQW1vdW50IEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQW1vdW50XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIGFtb3VudFxcXCIgdGV4dD1cXFwie3sgYW1vdW50IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBJbnRlcmVzdCBSYXRlIEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSW50ZXJlc3QgUmF0ZSAoJSlcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgaW50ZXJlc3QgcmF0ZVxcXCIgdGV4dD1cXFwie3sgaW50ZXJlc3RSYXRlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBUeXBlIFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlR5cGVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyB0eXBlcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRUeXBlSW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlNhdmUgTGlhYmlsaXR5XFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtdC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIlxcbiAgICBuYXZpZ2F0ZWRUbz1cXFwibmF2aWdhdGVkVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJiZy1ibHVlLTYwMFxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGlhYmlsaXRpZXNcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG8sICpcXFwiPlxcbiAgICAgICAgPCEtLSBUb3RhbCBMaWFiaWxpdGllcyBDYXJkIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJnLXB1cnBsZS01MDAgbS00IHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgTGlhYmlsaXRpZXNcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxMaWFiaWxpdGllc0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBEaXN0cmlidXRpb24gQ2hhcnQgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHAtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGlhYmlsaXR5IERpc3RyaWJ1dGlvblxcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBkaXN0cmlidXRpb25WaWV3TW9kZWwuY2hhcnREYXRhIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwibWItMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgbGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNzAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJ7eyBwZXJjZW50YWdlICsgJyUnIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwZXJjZW50YWdlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtLTFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBBZGQgQnV0dG9uIC0tPlxcbiAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIHRleHQ9XFxcIkFkZCBMaWFiaWxpdHlcXFwiIHRhcD1cXFwie3sgb25BZGRMaWFiaWxpdHkgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBteC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gTGlhYmlsaXRpZXMgTGlzdCAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjNcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxpYWJpbGl0eSBMaXN0XFxcIiBjbGFzcz1cXFwicC00IHRleHQteGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgbGlhYmlsaXRpZXMgfX1cXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCIgY2xhc3M9XFxcImxpc3Qtdmlld1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGQgdGV4dC1ncmF5LTgwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkQW1vdW50IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcHVycGxlLTYwMCBmb250LWJvbGQgdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdHlwZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZEludGVyZXN0UmF0ZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBpc0VkaXRpbmcgPyAnRWRpdCBTbmFwc2hvdCcgOiAnQWRkIFNuYXBzaG90JyB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy1ncmF5LTEwMFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiBtLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPCEtLSBZZWFyIFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiWWVhclxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IHllYXJzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHllYXJJbmRleCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG5cXG4gICAgICAgICAgICA8IS0tIE1vbnRoIFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTW9udGhcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IG1vbnRocyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZE1vbnRoIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcblxcbiAgICAgICAgICAgIDwhLS0gTmV0IEFzc2V0IFZhbHVlIC0tPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJOZXQgQXNzZXQgVmFsdWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBuZXQgYXNzZXQgdmFsdWVcXFwiIHRleHQ9XFxcInt7IG5ldEFzc2V0IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtIEZpeGVkIHRhcCBiaW5kaW5nIC0tPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwie3sgaXNFZGl0aW5nID8gJ1VwZGF0ZSBTbmFwc2hvdCcgOiAnU2F2ZSBTbmFwc2hvdCcgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBvblNhdmUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bFxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIlxcbiAgICBuYXZpZ2F0ZWRUbz1cXFwibmF2aWdhdGVkVG9cXFwiXFxuICAgIHVubG9hZGVkPVxcXCJ1bmxvYWRlZFxcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJNb250aGx5IFNuYXBzaG90XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gQWRkIEJ1dHRvbiAtLT5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJBZGQgTmV3IFNuYXBzaG90XFxcIiB0YXA9XFxcInt7IG9uQWRkU25hcHNob3QgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuXFxuICAgICAgICA8IS0tIEhpc3RvcnkgU2VjdGlvbiAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNuYXBzaG90IEhpc3RvcnlcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBwLTRcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBzbmFwc2hvdHMgfX1cXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCIgY2xhc3M9XFxcImxpc3Qtdmlld1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkRGF0ZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZE5ldEFzc2V0IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNoYW5nZTpcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRQZXJjZW50YWdlQ2hhbmdlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IHRleHQtc21cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgcGVyY2VudGFnZUNoYW5nZSA+PSAwID8gJyMxMEI5ODEnIDogJyNFRjQ0NDQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiRmluYW5jaWFsIEhlYWx0aFxcXCIgLz5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gT3ZlcnZpZXcgU2VjdGlvbiAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLWJsdWUtMTAwIHAtNCByb3VuZGVkLWxnIG1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jaWFsIE92ZXJ2aWV3XFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IFdvcnRoOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5ldFdvcnRoRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodCBmb250LWJvbGRcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTW9udGhseSBDYXNoZmxvdzpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBtb250aGx5Q2FzaGZsb3dGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJEZWJ0LXRvLUluY29tZTpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZWJ0VG9JbmNvbWVSYXRpb0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aGx5IFJlcG9ydHMgLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgUmVwb3J0c1xcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTJcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBtb250aGx5UmVwb3J0cyB9fVxcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG1vbnRoWWVhciB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHNhdmluZ3NSYXRlRm9ybWF0dGVkIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdJbmNvbWU6ICcgKyBpbmNvbWVGb3JtYXR0ZWQgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnRXhwZW5zZXM6ICcgKyBleHBlbnNlc0Zvcm1hdHRlZCB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkQW1vdW50IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzdWJ0aXRsZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZXRhaWxzIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbjwvR3JpZExheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGluZ0Zyb209XFxcIm5hdmlnYXRpbmdGcm9tXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGlzSW5jb21lID8gJ0FkZCBJbmNvbWUnIDogJ0FkZCBFeHBlbnNlJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcImJnLWdyYXktMTAwXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBkZXNjcmlwdGlvblxcXCIgdGV4dD1cXFwie3sgZGVzY3JpcHRpb24gfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBBbW91bnQgRmllbGQgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBbW91bnRcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgYW1vdW50XFxcIiB0ZXh0PVxcXCJ7eyBhbW91bnQgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIENhdGVnb3J5IFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNhdGVnb3J5XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgY2F0ZWdvcmllcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRDYXRlZ29yeUluZGV4IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gVGltZSBSZXF1aXJlZCAoT25seSBmb3IgSW5jb21lKSAtLT5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHZpc2liaWxpdHk9XFxcInt7IGlzSW5jb21lID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRpbWUgUmVxdWlyZWQgKEhvdXJzKVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgaG91cnMgcmVxdWlyZWRcXFwiIHRleHQ9XFxcInt7IHRpbWVSZXF1aXJlZCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcInt7IGlzSW5jb21lID8gJ1NhdmUgSW5jb21lJyA6ICdTYXZlIEV4cGVuc2UnIH19XFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgaXNJbmNvbWUgPyAnYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgOiAnYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtdC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTInIH19XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGVkVG89XFxcIm5hdmlnYXRlZFRvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ0luY29tZScgOiAnRXhwZW5zZXMnIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gU3VtbWFyeSBDYXJkIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ2JnLWdyZWVuLTUwMCBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTQnIDogJ2JnLXJlZC01MDAgbS00IHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00JyB9fVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ1RvdGFsIEluY29tZScgOiAnVG90YWwgRXhwZW5zZXMnIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbEFtb3VudEZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBEaXN0cmlidXRpb24gQ2hhcnQgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHAtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnSW5jb21lIERpc3RyaWJ1dGlvbicgOiAnRXhwZW5zZSBEaXN0cmlidXRpb24nIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBkaXN0cmlidXRpb25WaWV3TW9kZWwuY2hhcnREYXRhIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwibWItMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgbGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNzAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJ7eyBwZXJjZW50YWdlICsgJyUnIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwZXJjZW50YWdlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtLTFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBBY3Rpb24gQnV0dG9uIC0tPlxcbiAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIHRleHQ9XFxcInt7ICdBZGQgJyArIChmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdJbmNvbWUnIDogJ0V4cGVuc2UnKSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgb25BZGRUcmFuc2FjdGlvbiB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXgtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yJyA6ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgfX1cXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gVHJhbnNhY3Rpb25zIExpc3QgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUcmFuc2FjdGlvbiBIaXN0b3J5XFxcIiBjbGFzcz1cXFwicC00IHRleHQteGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgdHJhbnNhY3Rpb25zIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LXZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRlc2NyaXB0aW9uIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRBbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IHR5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LXJlZC02MDAnIH19IGZvbnQtYm9sZCB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjYXRlZ29yeSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHR5cGUgPT09ICdpbmNvbWUnID8gKGhvdXJseVJhdGVGb3JtYXR0ZWQgKyAnL2hyJykgOiAnJyB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==