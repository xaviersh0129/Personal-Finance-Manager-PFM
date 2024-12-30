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

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".visible"],"declarations":[{"type":"declaration","property":"visibility","value":"visible"}]},{"type":"rule","selectors":[".m-1"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".m-2"],"declarations":[{"type":"declaration","property":"margin","value":"8"}]},{"type":"rule","selectors":[".m-4"],"declarations":[{"type":"declaration","property":"margin","value":"16"}]},{"type":"rule","selectors":[".mx-4"],"declarations":[{"type":"declaration","property":"margin-left","value":"16"},{"type":"declaration","property":"margin-right","value":"16"}]},{"type":"rule","selectors":[".mb-1"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mr-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".rounded-xl"],"declarations":[{"type":"declaration","property":"border-radius","value":"12"}]},{"type":"rule","selectors":[".border-b"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1px"}]},{"type":"rule","selectors":[".bg-blue-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(219 234 254 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-blue-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(59 130 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-blue-600"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(37 99 235 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-gray-100"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(243 244 246 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-green-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(34 197 94 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-indigo-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(99 102 241 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-purple-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(168 85 247 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-red-500"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(239 68 68 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".p-6"],"declarations":[{"type":"declaration","property":"padding","value":"24"}]},{"type":"rule","selectors":[".text-right"],"declarations":[{"type":"declaration","property":"text-align","value":"right"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-lg"],"declarations":[{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-sm"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"line-height","value":"20"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".font-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"700"}]},{"type":"rule","selectors":[".font-medium"],"declarations":[{"type":"declaration","property":"font-weight","value":"500"}]},{"type":"rule","selectors":[".uppercase"],"declarations":[{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".text-blue-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(37 99 235 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(75 85 99 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-700"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(55 65 81 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-800"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(31 41 55 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-green-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(22 163 74 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-purple-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(147 51 234 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-red-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(220 38 38 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"#2563eb"},{"type":"declaration","property":"color","value":"#ffffff"}]},{"type":"rule","selectors":["Button"],"declarations":[{"type":"declaration","property":"font-weight","value":"500"},{"type":"declaration","property":"text-transform","value":"uppercase"}]},{"type":"rule","selectors":[".card"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffffff"},{"type":"declaration","property":"border-radius","value":"12"},{"type":"declaration","property":"margin","value":"8"},{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".list-view"],"declarations":[{"type":"declaration","property":"background-color","value":"transparent"}]},{"type":"rule","selectors":["Progress"],"declarations":[{"type":"declaration","property":"height","value":"8"},{"type":"declaration","property":"border-radius","value":"4"}]},{"type":"rule","selectors":[".input-field"],"declarations":[{"type":"declaration","property":"padding","value":"12"},{"type":"declaration","property":"margin","value":"8 0"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-color","value":"#e2e8f0"},{"type":"declaration","property":"border-radius","value":"8"},{"type":"declaration","property":"background-color","value":"#f8fafc"}]},{"type":"rule","selectors":[".form-label"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"color","value":"#64748b"},{"type":"declaration","property":"margin-bottom","value":"4"}]}],"parsingErrors":[]}}
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
    const monthlyTransactions = transactions.filter(t => t.month === currentMonth &&
        t.year === currentYear);
    return monthlyTransactions.reduce((sum, t) => sum + (t.type === 'income' ? t.amount : -t.amount), 0);
}
function calculateDebtToIncomeRatio(monthlyIncome, liabilities) {
    const monthlyDebtPayments = liabilities.reduce((sum, liability) => {
        // Simple monthly payment calculation
        const monthlyRate = liability.interestRate / 12 / 100;
        const months = liability.type === 'Debt/Payable' ? 12 : 360; // 1 year or 30 years
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
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");
/* harmony import */ var _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/services/transaction-service.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/services/asset-service.ts");
/* harmony import */ var _services_liability_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/services/liability-service.ts");
/* harmony import */ var _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/services/monthly-snapshot-service.ts");
/* harmony import */ var _utils_formatters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/utils/formatters.ts");
/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/utils/logger.ts");







const TAG = 'DashboardViewModel';
class DashboardViewModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_6__.Observable {
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
        this.transactionService = _services_transaction_service__WEBPACK_IMPORTED_MODULE_0__.TransactionService.getInstance();
        this.assetService = _services_asset_service__WEBPACK_IMPORTED_MODULE_1__.AssetService.getInstance();
        this.liabilityService = _services_liability_service__WEBPACK_IMPORTED_MODULE_2__.LiabilityService.getInstance();
        this.monthlySnapshotService = _services_monthly_snapshot_service__WEBPACK_IMPORTED_MODULE_3__.MonthlySnapshotService.getInstance();
        this.calculateFinancials();
    }
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
    calculateFinancials() {
        try {
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
            // Calculate hourly rate
            const totalTimeRequired = this.transactionService.getTotalTimeRequired();
            this._hourlyRate = totalTimeRequired > 0 ? this._totalIncome / totalTimeRequired : 0;
            // Calculate Sharpe Ratio
            this._sharpeRatio = this.monthlySnapshotService.calculateSharpeRatio();
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
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.debug(TAG, 'Financial calculations completed successfully');
        }
        catch (error) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__.Logger.error(TAG, 'Error calculating financials', error);
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar title=\"Personal Finance Manager\" class=\"bg-blue-600\">\n        <Label text=\"Finance Manager\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <ScrollView>\n        <StackLayout class=\"bg-gray-100\">\n            <!-- Cashflow & Hourly Rate -->\n            <GridLayout columns=\"*, *\" class=\"mx-4 mt-4\">\n                <StackLayout class=\"bg-white p-6 rounded-xl elevation-4 m-1\" col=\"0\">\n                    <Label text=\"Cashflow\" class=\"text-gray-600 text-sm mb-1\" />\n                    <Label text=\"{{ cashflowFormatted }}\" class=\"{{ cashflow >= 0 ? 'text-green-600 text-2xl font-bold' : 'text-red-600 text-2xl font-bold' }}\" />\n                </StackLayout>\n                <StackLayout class=\"bg-white p-6 rounded-xl elevation-4 m-1\" col=\"1\">\n                    <Label text=\"Hourly Rate\" class=\"text-gray-600 text-sm mb-1\" />\n                    <Label text=\"{{ hourlyRateFormatted }}\" class=\"text-2xl font-bold\" />\n                </StackLayout>\n            </GridLayout>\n\n            <!-- Quick Actions -->\n            <GridLayout columns=\"*, *\" rows=\"auto, auto\" class=\"mx-4 mb-4\">\n                <!-- Income & Expense Row -->\n                <Button text=\"INCOME\" tap=\"onNavigateToIncome\" \n                        class=\"bg-green-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"0\" col=\"0\" />\n                <Button text=\"EXPENSE\" tap=\"onNavigateToExpense\" \n                        class=\"bg-red-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"0\" col=\"1\" />\n                \n                <!-- Assets & Liabilities Row -->\n                <Button text=\"ASSETS\" tap=\"onNavigateToAssets\" \n                        class=\"bg-blue-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"1\" col=\"0\" />\n                <Button text=\"LIABILITIES\" tap=\"onNavigateToLiabilities\" \n                        class=\"bg-purple-500 text-white font-medium p-4 m-1 rounded-xl elevation-2\" \n                        row=\"1\" col=\"1\" />\n            </GridLayout>\n\n            <!-- Monthly Snapshot Button -->\n            <Button text=\"MONTHLY SNAPSHOT\" tap=\"onNavigateToMonthlySnapshot\" \n                    class=\"bg-indigo-500 text-white font-medium p-4 mx-4 mb-4 rounded-xl elevation-2\" />\n\n            <!-- Financial Summary Card -->\n            <StackLayout class=\"bg-white m-4 p-6 rounded-xl elevation-4\">\n                <Label text=\"Financial Summary\" class=\"text-xl font-bold mb-4\" />\n                \n                <!-- Net Worth -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Net Worth:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ netWorthFormatted }}\" class=\"text-right font-bold\" row=\"0\" col=\"1\" />\n                </GridLayout>\n\n                <!-- Total Income -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Total Income:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ totalIncomeFormatted }}\" class=\"text-green-600 text-right font-bold\" row=\"0\" col=\"1\" />\n                </GridLayout>\n\n                <!-- Total Expenses -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Total Expenses:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ totalExpensesFormatted }}\" class=\"text-red-600 text-right font-bold\" row=\"0\" col=\"1\" />\n                </GridLayout>\n\n                <!-- Total Assets -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\" class=\"mb-4\">\n                    <Label text=\"Total Assets:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ totalAssetsFormatted }}\" class=\"text-blue-600 text-right font-bold\" row=\"0\" col=\"1\" />\n                </GridLayout>\n\n                <!-- Total Liabilities -->\n                <GridLayout columns=\"*, auto\" rows=\"auto\">\n                    <Label text=\"Total Liabilities:\" class=\"text-gray-600\" row=\"0\" col=\"0\" />\n                    <Label text=\"{{ totalLiabilitiesFormatted }}\" class=\"text-purple-600 text-right font-bold\" row=\"0\" col=\"1\" />\n                </GridLayout>\n            </StackLayout>\n\n            <!-- Sharpe Ratio Card -->\n            <StackLayout class=\"bg-white m-4 p-6 rounded-xl elevation-4\">\n                <Label text=\"Sharpe Ratio\" class=\"text-xl font-bold mb-4\" />\n                <Label text=\"{{ sharpeRatioFormatted }}\" class=\"text-2xl font-bold\" />\n            </StackLayout>\n        </StackLayout>\n    </ScrollView>\n</Page>"
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"{{ isEditing ? 'Edit Snapshot' : 'Add Snapshot' }}\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <StackLayout class=\"bg-gray-100\">\n        <StackLayout class=\"bg-white p-6 m-4 rounded-xl elevation-4\">\n            <!-- Year Selection -->\n            <Label text=\"Year\" class=\"form-label\" />\n            <ListPicker items=\"{{ years }}\" \n                       selectedIndex=\"{{ yearIndex }}\"\n                       class=\"input-field\" />\n\n            <!-- Month Selection -->\n            <Label text=\"Month\" class=\"form-label mt-4\" />\n            <ListPicker items=\"{{ months }}\" \n                       selectedIndex=\"{{ selectedMonth }}\"\n                       class=\"input-field\" />\n\n            <!-- Net Asset Value -->\n            <Label text=\"Net Asset Value\" class=\"form-label mt-4\" />\n            <TextField hint=\"Enter net asset value\" text=\"{{ netAsset }}\" \n                      keyboardType=\"number\"\n                      class=\"input-field\" />\n                      \n            <Button text=\"{{ isEditing ? 'Update Snapshot' : 'Save Snapshot' }}\" \n                    tap=\"{{ onSave }}\" \n                    class=\"bg-blue-500 text-white font-medium p-4 mt-4 rounded-xl\" />\n        </StackLayout>\n    </StackLayout>\n</Page>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RGQSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ0w7QUFFQztBQUViO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNiO0FBQ0osQ0FBQztBQUFDLCtEQUFlOztJQUViLE1BQU0sS0FBSztBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1hEOztBQUVBLHNDQUFzQyxrQ0FBa0MsVUFBVSxzRUFBc0Usb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsK0RBQStELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsd0RBQXdELEVBQUUsNkRBQTZELEVBQUUsa0ZBQWtGLEVBQUUseUVBQXlFLEVBQUUsd0VBQXdFLEVBQUUsdUVBQXVFLEVBQUUsdURBQXVELEVBQUUsNkRBQTZELEVBQUUsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsOERBQThELEVBQUUsZ0VBQWdFLEVBQUUsc0VBQXNFLEVBQUUsb0VBQW9FLEVBQUUscUVBQXFFLEVBQUUsc0VBQXNFLEVBQUUsa0VBQWtFLEVBQUUsbUVBQW1FLEVBQUUsb0VBQW9FLEVBQUUsaUVBQWlFLEVBQUUsK0RBQStELEVBQUUsaUVBQWlFLEVBQUUsZ0VBQWdFLEVBQUUsZ0VBQWdFLEVBQUUsRUFBRSwwREFBMEQsb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsK0RBQStELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsd0RBQXdELEVBQUUsNkRBQTZELEVBQUUsa0ZBQWtGLEVBQUUseUVBQXlFLEVBQUUsd0VBQXdFLEVBQUUsdUVBQXVFLEVBQUUsdURBQXVELEVBQUUsNkRBQTZELEVBQUUsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsOERBQThELEVBQUUsZ0VBQWdFLEVBQUUsc0VBQXNFLEVBQUUsb0VBQW9FLEVBQUUscUVBQXFFLEVBQUUsc0VBQXNFLEVBQUUsa0VBQWtFLEVBQUUsbUVBQW1FLEVBQUUsb0VBQW9FLEVBQUUsaUVBQWlFLEVBQUUsK0RBQStELEVBQUUsaUVBQWlFLEVBQUUsZ0VBQWdFLEVBQUUsZ0VBQWdFLEVBQUUsRUFBRSx3REFBd0QsK0RBQStELEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxxREFBcUQsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsMkRBQTJELEVBQUUsRUFBRSxxREFBcUQsMERBQTBELEVBQUUsRUFBRSwyREFBMkQsNERBQTRELEVBQUUsRUFBRSwyREFBMkQsNkRBQTZELEVBQUUsRUFBRSx5REFBeUQsb0VBQW9FLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsd0dBQXdHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsdUdBQXVHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsc0dBQXNHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsd0dBQXdHLEVBQUUsRUFBRSw2REFBNkQsOERBQThELEVBQUUsc0dBQXNHLEVBQUUsRUFBRSw4REFBOEQsOERBQThELEVBQUUsdUdBQXVHLEVBQUUsRUFBRSw4REFBOEQsOERBQThELEVBQUUsdUdBQXVHLEVBQUUsRUFBRSwyREFBMkQsOERBQThELEVBQUUsc0dBQXNHLEVBQUUsRUFBRSx5REFBeUQsOERBQThELEVBQUUsd0dBQXdHLEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxvREFBb0QsdURBQXVELEVBQUUsRUFBRSxvREFBb0QsdURBQXVELEVBQUUsRUFBRSwyREFBMkQsNkRBQTZELEVBQUUsRUFBRSx5REFBeUQseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSwwREFBMEQsNERBQTRELEVBQUUsRUFBRSw0REFBNEQsNERBQTRELEVBQUUsRUFBRSwwREFBMEQscUVBQXFFLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNkZBQTZGLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSwrREFBK0Qs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QUFnQyx3S0FBd0sseVBBQXlQLGVBQWUsZ0JBQWdCLFlBQVksNE1BQTRNLGNBQWMsc0dBQXNHLGtCQUFrQixtRUFBbUUseURBQXlELG9FQUFvRSxXQUFXLG9HQUFvRyx5REFBeUQ7QUFDMytHLGlFQUFlLGlDQUFpQzs7Ozs7Ozs7O0FDSGhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC8gc3luYyBcXC4oeG1sJTdDanMlN0MoIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2NvbXBvbmVudHMvY2hhcnRzL2RvbnV0LWNoYXJ0LnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvY29tcG9uZW50cy9jaGFydHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9jb25zdGFudHMvc3RvcmFnZS1rZXlzLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbWFpbi1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbWFpbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbW9kZWxzL2Fzc2V0LnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbW9kZWxzL2ZpbmFuY2lhbC1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9tb2RlbHMvbGlhYmlsaXR5LnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbW9kZWxzL21vbnRobHktc25hcHNob3QudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9tb2RlbHMvdHJhbnNhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvZXZlbnQtYnVzLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL21vbnRobHktc25hcHNob3Qtc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL3JlcG9ydC1zZXJ2aWNlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvc3RvcmFnZS1zZXJ2aWNlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3V0aWxzL2NoYXJ0LWNvbG9ycy50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3V0aWxzL2RpYWxvZy50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3V0aWxzL2ZpbmFuY2lhbC1jYWxjdWxhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC91dGlscy9mb3JtYXR0ZXJzLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdXRpbHMvaW9zLWNvbG9yLWV4dGVuc2lvbi50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3V0aWxzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3V0aWxzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYWRkLWFzc2V0LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvYmFzZS12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLXJvb3QueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvY29tcG9uZW50cy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLWNoYXJ0LnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2NvbXBvbmVudHMvdWkvY2FyZC54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9jb21wb25lbnRzL3VpL2xpc3QtaXRlbS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9tYWluLXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9zaGFyZWQvbGlzdC1pdGVtLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0L2V4dGVybmFsIGNvbW1vbmpzIFwifi9wYWNrYWdlLmpzb25cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAvYXBwLXJvb3QueG1sXCIsXG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAvYXBwLmNzc1wiLFxuXHRcIi4vYXBwLnRzXCI6IFwiLi9hcHAvYXBwLnRzXCIsXG5cdFwiLi9jb21wb25lbnRzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tY2hhcnQueG1sXCI6IFwiLi9hcHAvY29tcG9uZW50cy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLWNoYXJ0LnhtbFwiLFxuXHRcIi4vY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQudHNcIjogXCIuL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydC50c1wiLFxuXHRcIi4vY29tcG9uZW50cy9jaGFydHMvaW5kZXgudHNcIjogXCIuL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9pbmRleC50c1wiLFxuXHRcIi4vY29tcG9uZW50cy91aS9jYXJkLnhtbFwiOiBcIi4vYXBwL2NvbXBvbmVudHMvdWkvY2FyZC54bWxcIixcblx0XCIuL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnhtbFwiOiBcIi4vYXBwL2NvbXBvbmVudHMvdWkvbGlzdC1pdGVtLnhtbFwiLFxuXHRcIi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cy50c1wiOiBcIi4vYXBwL2NvbnN0YW50cy9zdG9yYWdlLWtleXMudHNcIixcblx0XCIuL21haW4tcGFnZS50c1wiOiBcIi4vYXBwL21haW4tcGFnZS50c1wiLFxuXHRcIi4vbWFpbi1wYWdlLnhtbFwiOiBcIi4vYXBwL21haW4tcGFnZS54bWxcIixcblx0XCIuL21haW4tdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL21haW4tdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vbW9kZWxzL2Fzc2V0LnRzXCI6IFwiLi9hcHAvbW9kZWxzL2Fzc2V0LnRzXCIsXG5cdFwiLi9tb2RlbHMvZmluYW5jaWFsLXJlcG9ydC50c1wiOiBcIi4vYXBwL21vZGVscy9maW5hbmNpYWwtcmVwb3J0LnRzXCIsXG5cdFwiLi9tb2RlbHMvbGlhYmlsaXR5LnRzXCI6IFwiLi9hcHAvbW9kZWxzL2xpYWJpbGl0eS50c1wiLFxuXHRcIi4vbW9kZWxzL21vbnRobHktc25hcHNob3QudHNcIjogXCIuL2FwcC9tb2RlbHMvbW9udGhseS1zbmFwc2hvdC50c1wiLFxuXHRcIi4vbW9kZWxzL3RyYW5zYWN0aW9uLnRzXCI6IFwiLi9hcHAvbW9kZWxzL3RyYW5zYWN0aW9uLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYXNzZXQtc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvYmFzZS1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9ldmVudC1idXMtc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2V2ZW50LWJ1cy1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3JlcG9ydC1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvcmVwb3J0LXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UudHNcIixcblx0XCIuL3V0aWxzL2NoYXJ0LWNvbG9ycy50c1wiOiBcIi4vYXBwL3V0aWxzL2NoYXJ0LWNvbG9ycy50c1wiLFxuXHRcIi4vdXRpbHMvZGlhbG9nLnRzXCI6IFwiLi9hcHAvdXRpbHMvZGlhbG9nLnRzXCIsXG5cdFwiLi91dGlscy9maW5hbmNpYWwtY2FsY3VsYXRpb25zLnRzXCI6IFwiLi9hcHAvdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucy50c1wiLFxuXHRcIi4vdXRpbHMvZm9ybWF0dGVycy50c1wiOiBcIi4vYXBwL3V0aWxzL2Zvcm1hdHRlcnMudHNcIixcblx0XCIuL3V0aWxzL2lvcy1jb2xvci1leHRlbnNpb24udHNcIjogXCIuL2FwcC91dGlscy9pb3MtY29sb3ItZXh0ZW5zaW9uLnRzXCIsXG5cdFwiLi91dGlscy9sb2dnZXIudHNcIjogXCIuL2FwcC91dGlscy9sb2dnZXIudHNcIixcblx0XCIuL3V0aWxzL25hdmlnYXRpb24udHNcIjogXCIuL2FwcC91dGlscy9uYXZpZ2F0aW9uLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9hc3NldHMvYWRkLWFzc2V0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYWRkLWFzc2V0LXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvYXNzZXRzL2Fzc2V0LWxpc3Qtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Jhc2Utdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2Jhc2Utdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9kYXNoYm9hcmQtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90LXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3Qtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1kaXN0cmlidXRpb24tdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3Qtdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9zaGFyZWQvbGlzdC1pdGVtLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3NoYXJlZC9saXN0LWl0ZW0ueG1sXCIsXG5cdFwiLi92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlLnhtbFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2FwcCBzeW5jIHJlY3Vyc2l2ZSBcXFxcLih4bWwlN0NqcyU3Qyg/PCUyMVxcXFwuZFxcXFwuKXRzJTdDcz9jc3MpJFwiOyIsImltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FwcCc7XG5cbnRyeSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N0YXJ0aW5nIGFwcGxpY2F0aW9uIGluaXRpYWxpemF0aW9uJyk7XG4gICAgQXBwbGljYXRpb24ucnVuKHsgbW9kdWxlTmFtZTogJ2FwcC1yb290JyB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZhaWxlZCB0byBpbml0aWFsaXplIGFwcGxpY2F0aW9uJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xufSIsIi8qIENTUzJKU09OICovXG5cbmNvbnN0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18gPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiKlwiLFwiOjpiZWZvcmVcIixcIjo6YWZ0ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiOjpiYWNrZHJvcFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudmlzaWJsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZpc2liaWxpdHlcIixcInZhbHVlXCI6XCJ2aXNpYmxlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5teC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tci0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tdC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yb3VuZGVkLXhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlci1iXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWJvdHRvbS13aWR0aFwiLFwidmFsdWVcIjpcIjFweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibHVlLTEwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIxOSAyMzQgMjU0IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWJsdWUtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoNTkgMTMwIDI0NiAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibHVlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ncmF5LTEwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI0MyAyNDQgMjQ2IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWdyZWVuLTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDM0IDE5NyA5NCAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1pbmRpZ28tNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoOTkgMTAyIDI0MSAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1wdXJwbGUtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTY4IDg1IDI0NyAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1yZWQtNTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIyNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXJpZ2h0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcInJpZ2h0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtMnhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjMyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1zbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtYm9sZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNzAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvbnQtbWVkaXVtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI1MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudXBwZXJjYXNlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC10cmFuc2Zvcm1cIixcInZhbHVlXCI6XCJ1cHBlcmNhc2VcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ibHVlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDM3IDk5IDIzNSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYig3NSA4NSA5OSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS03MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYig1NSA2NSA4MSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS04MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigzMSA0MSA1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JlZW4tNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjIgMTYzIDc0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1wdXJwbGUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTQ3IDUxIDIzNCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcmVkLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIyMCAzOCAzOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiMyNTYzZWJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiNmZmZmZmZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjUwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidXBwZXJjYXNlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNhcmRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZmZmZlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubGlzdC12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiUHJvZ3Jlc3NcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW5wdXQtZmllbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4IDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2UyZThmMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmOGZhZmNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9ybS1sYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNjQ3NDhiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiRDpcXFxcRGV2XFxcXFBlcnNvbmFsLUZpbmFuY2UtTWFuYWdlci1QRk1cXFxcYXBwXFxcXGFwcC5jc3NcIilcbiIsImltcG9ydCB7IFZpZXcsIFByb3BlcnR5IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBEb251dENoYXJ0RGF0YSB7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgcGVyY2VudGFnZTogbnVtYmVyO1xufVxuXG5jb25zdCBkYXRhUHJvcGVydHkgPSBuZXcgUHJvcGVydHk8RG9udXRDaGFydCwgRG9udXRDaGFydERhdGFbXT4oe1xuICAgIG5hbWU6ICdkYXRhJyxcbiAgICBkZWZhdWx0VmFsdWU6IFtdLFxuICAgIHZhbHVlQ2hhbmdlZDogKHRhcmdldCwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHRhcmdldC5vbkRhdGFDaGFuZ2VkKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBjbGFzcyBEb251dENoYXJ0IGV4dGVuZHMgVmlldyB7XG4gICAgcHVibGljIGRhdGE6IERvbnV0Q2hhcnREYXRhW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRhdGFDaGFuZ2VkKG9sZFZhbHVlOiBEb251dENoYXJ0RGF0YVtdLCBuZXdWYWx1ZTogRG9udXRDaGFydERhdGFbXSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0TGF5b3V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZU5hdGl2ZVZpZXcoKTogYW55IHtcbiAgICAgICAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgYW5kcm9pZC52aWV3LlZpZXcodGhpcy5fY29udGV4dCk7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB2aWV3LnNldFdpbGxOb3REcmF3KGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybiB2aWV3O1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIG5ldyBVSVZpZXcoQ0dSZWN0TWFrZSgwLCAwLCAwLCAwKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTWVhc3VyZSh3aWR0aE1lYXN1cmVTcGVjOiBudW1iZXIsIGhlaWdodE1lYXN1cmVTcGVjOiBudW1iZXIpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB3aWR0aCA9IFZpZXcubGF5b3V0LmdldE1lYXN1cmVTcGVjU2l6ZSh3aWR0aE1lYXN1cmVTcGVjKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBoZWlnaHQgPSBWaWV3LmxheW91dC5nZXRNZWFzdXJlU3BlY1NpemUoaGVpZ2h0TWVhc3VyZVNwZWMpO1xuICAgICAgICB0aGlzLnNldE1lYXN1cmVkRGltZW5zaW9uKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkxheW91dChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlcikge1xuICAgICAgICBzdXBlci5vbkxheW91dChsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20pO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRoaXMubmF0aXZlVmlldz8uaW52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkRyYXcoY2FudmFzOiBhbnkpIHtcbiAgICAgICAgaWYgKGdsb2JhbC5pc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0FuZHJvaWQoY2FudmFzKTtcbiAgICAgICAgfSBlbHNlIGlmIChnbG9iYWwuaXNJT1MpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2lPUygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3QW5kcm9pZChjYW52YXM6IGFueSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldE1lYXN1cmVkSGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBoZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgKiAwLjg7XG4gICAgICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcmFkaXVzICogMC42O1xuICAgICAgICBjb25zdCBzdHJva2VXaWR0aCA9IHJhZGl1cyAtIGlubmVyUmFkaXVzO1xuXG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gMDtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBwYWludCA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLlBhaW50KCk7XG4gICAgICAgIHBhaW50LnNldEFudGlBbGlhcyh0cnVlKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBwYWludC5zZXRTdHlsZShhbmRyb2lkLmdyYXBoaWNzLlBhaW50LlN0eWxlLlNUUk9LRSk7XG4gICAgICAgIHBhaW50LnNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoKTtcblxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHJlY3QgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5SZWN0RihcbiAgICAgICAgICAgIGNlbnRlclggLSByYWRpdXMgKyBzdHJva2VXaWR0aCAvIDIsXG4gICAgICAgICAgICBjZW50ZXJZIC0gcmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLFxuICAgICAgICAgICAgY2VudGVyWCArIHJhZGl1cyAtIHN0cm9rZVdpZHRoIC8gMixcbiAgICAgICAgICAgIGNlbnRlclkgKyByYWRpdXMgLSBzdHJva2VXaWR0aCAvIDJcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN3ZWVwQW5nbGUgPSAoaXRlbS5wZXJjZW50YWdlIC8gMTAwKSAqIDM2MDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBhaW50LnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IucGFyc2VDb2xvcihpdGVtLmNvbG9yKSk7XG4gICAgICAgICAgICBjYW52YXMuZHJhd0FyYyhyZWN0LCBzdGFydEFuZ2xlLCBzd2VlcEFuZ2xlLCBmYWxzZSwgcGFpbnQpO1xuICAgICAgICAgICAgc3RhcnRBbmdsZSArPSBzd2VlcEFuZ2xlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRyYXdpT1MoKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuZ2V0TWVhc3VyZWRIZWlnaHQoKTtcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IHdpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGhlaWdodCAvIDI7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiAqIDAuODtcbiAgICAgICAgY29uc3QgaW5uZXJSYWRpdXMgPSByYWRpdXMgKiAwLjY7XG5cbiAgICAgICAgbGV0IHN0YXJ0QW5nbGUgPSAtTWF0aC5QSSAvIDI7XG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2VlcEFuZ2xlID0gKGl0ZW0ucGVyY2VudGFnZSAvIDEwMCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICAgIGNvbnN0IGVuZEFuZ2xlID0gc3RhcnRBbmdsZSArIHN3ZWVwQW5nbGU7XG5cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBVSUJlemllclBhdGguYmV6aWVyUGF0aCgpO1xuICAgICAgICAgICAgcGF0aC5hZGRBcmNXaXRoQ2VudGVyUmFkaXVzU3RhcnRBbmdsZUVuZEFuZ2xlQ2xvY2t3aXNlKFxuICAgICAgICAgICAgICAgIENHUG9pbnRNYWtlKGNlbnRlclgsIGNlbnRlclkpLFxuICAgICAgICAgICAgICAgIHJhZGl1cyxcbiAgICAgICAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYXRoLmFkZEFyY1dpdGhDZW50ZXJSYWRpdXNTdGFydEFuZ2xlRW5kQW5nbGVDbG9ja3dpc2UoXG4gICAgICAgICAgICAgICAgQ0dQb2ludE1ha2UoY2VudGVyWCwgY2VudGVyWSksXG4gICAgICAgICAgICAgICAgaW5uZXJSYWRpdXMsXG4gICAgICAgICAgICAgICAgZW5kQW5nbGUsXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHBhdGguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5oZXhUb1VJQ29sb3IoaXRlbS5jb2xvcik7XG4gICAgICAgICAgICBjb2xvci5zZXRGaWxsKCk7XG4gICAgICAgICAgICBwYXRoLmZpbGwoKTtcblxuICAgICAgICAgICAgc3RhcnRBbmdsZSA9IGVuZEFuZ2xlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhleFRvVUlDb2xvcihoZXg6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KSAvIDI1NTtcbiAgICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpIC8gMjU1O1xuICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNikgLyAyNTU7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIFVJQ29sb3IuYWxsb2MoKS5pbml0V2l0aFJlZEdyZWVuQmx1ZUFscGhhKHIsIGcsIGIsIDEpO1xuICAgIH1cbn1cblxuZGF0YVByb3BlcnR5LnJlZ2lzdGVyKERvbnV0Q2hhcnQpOyIsImltcG9ydCB7IFZpZXcgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG4vLyBSZWdpc3RlciBhbGwgY2hhcnQgY29tcG9uZW50c1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ2hhcnRDb21wb25lbnRzKCkge1xuICAgIC8vIFRlbXBvcmFyaWx5IGRpc2FibGUgY2hhcnQgcmVnaXN0cmF0aW9uIHVudGlsIHdlIGZpeCB0aGUgY29yZSBpbXBvcnRzXG4gICAgY29uc29sZS5sb2coJ0NoYXJ0IHJlZ2lzdHJhdGlvbiBkaXNhYmxlZCB0ZW1wb3JhcmlseScpO1xufVxuXG5leHBvcnQgeyBEb251dENoYXJ0IH0gZnJvbSAnLi9kb251dC1jaGFydCc7IiwiZXhwb3J0IGNvbnN0IFN0b3JhZ2VLZXlzID0ge1xuICAgIEFTU0VUUzogJ2Fzc2V0cycsXG4gICAgTElBQklMSVRJRVM6ICdsaWFiaWxpdGllcycsXG4gICAgVFJBTlNBQ1RJT05TOiAndHJhbnNhY3Rpb25zJyxcbn0gYXMgY29uc3Q7IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IERhc2hib2FyZFZpZXdNb2RlbCB9IGZyb20gJy4vdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTWFpblBhZ2UnO1xubGV0IHZpZXdNb2RlbDogRGFzaGJvYXJkVmlld01vZGVsO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBtYWluIHBhZ2UnKTtcbiAgICB2aWV3TW9kZWwgPSBuZXcgRGFzaGJvYXJkVmlld01vZGVsKCk7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZpZXdNb2RlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb0luY29tZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSB0byBJbmNvbWUgcGFnZScpO1xuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZVwiLCB7IGZpbHRlclR5cGU6ICdpbmNvbWUnIH0pO1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IG5hdmlnYXRlZCB0byBJbmNvbWUgcGFnZScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gbmF2aWdhdGUgdG8gSW5jb21lIHBhZ2UnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZVRvRXhwZW5zZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSB0byBFeHBlbnNlIHBhZ2UnKTtcbiAgICB0cnkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2VcIiwgeyBmaWx0ZXJUeXBlOiAnZXhwZW5zZScgfSk7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgbmF2aWdhdGVkIHRvIEV4cGVuc2UgcGFnZScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gbmF2aWdhdGUgdG8gRXhwZW5zZSBwYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb0Fzc2V0cyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSB0byBBc3NldHMgcGFnZScpO1xuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZVwiKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N1Y2Nlc3NmdWxseSBuYXZpZ2F0ZWQgdG8gQXNzZXRzIHBhZ2UnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG5hdmlnYXRlIHRvIEFzc2V0cyBwYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb0xpYWJpbGl0aWVzKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdBdHRlbXB0aW5nIHRvIG5hdmlnYXRlIHRvIExpYWJpbGl0aWVzIHBhZ2UnKTtcbiAgICB0cnkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2VcIik7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgbmF2aWdhdGVkIHRvIExpYWJpbGl0aWVzIHBhZ2UnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG5hdmlnYXRlIHRvIExpYWJpbGl0aWVzIHBhZ2UnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0ZVRvTW9udGhseVNuYXBzaG90KGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdBdHRlbXB0aW5nIHRvIG5hdmlnYXRlIHRvIE1vbnRobHkgU25hcHNob3QgcGFnZScpO1xuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2VcIik7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgbmF2aWdhdGVkIHRvIE1vbnRobHkgU25hcHNob3QgcGFnZScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gbmF2aWdhdGUgdG8gTW9udGhseSBTbmFwc2hvdCBwYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICBwcml2YXRlIF9jb3VudGVyOiBudW1iZXI7XG4gIHByaXZhdGUgX21lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICB0aGlzLl9jb3VudGVyID0gNDI7XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gIH1cblxuICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tZXNzYWdlO1xuICB9XG5cbiAgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl9tZXNzYWdlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbWVzc2FnZSA9IHZhbHVlO1xuICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbWVzc2FnZScsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvblRhcCgpIHtcbiAgICB0aGlzLl9jb3VudGVyLS07XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU1lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuX2NvdW50ZXIgPD0gMCkge1xuICAgICAgdGhpcy5tZXNzYWdlID1cbiAgICAgICAgJ0hvb3JyYWFheSEgWW91IHVubG9ja2VkIHRoZSBOYXRpdmVTY3JpcHQgY2xpY2tlciBhY2hpZXZlbWVudCEnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBgJHt0aGlzLl9jb3VudGVyfSB0YXBzIGxlZnRgO1xuICAgIH1cblxuICAgIC8vIGxvZyB0aGUgbWVzc2FnZSB0byB0aGUgY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgdHlwZSBBc3NldENhdGVnb3J5ID0gXG4gICAgfCAnUmVhbCBFc3RhdGUnIFxuICAgIHwgJ0J1c2luZXNzJyBcbiAgICB8ICdTdG9ja3MnIFxuICAgIHwgJ0FydCAmIEFudGlxdWl0aWVzJyBcbiAgICB8ICdTYXZpbmcvQ2FzaCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgY2F0ZWdvcnk6IEFzc2V0Q2F0ZWdvcnk7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEFzc2V0Pikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YS5jYXRlZ29yeSB8fCAnU2F2aW5nL0Nhc2gnO1xuICAgICAgICB0aGlzLnZhbHVlID0gZGF0YS52YWx1ZSB8fCAwO1xuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWUgfHwgJyc7XG4gICAgfVxufSIsImV4cG9ydCBpbnRlcmZhY2UgTW9udGhseVJlcG9ydCB7XG4gICAgbW9udGg6IG51bWJlcjtcbiAgICB5ZWFyOiBudW1iZXI7XG4gICAgaW5jb21lOiBudW1iZXI7XG4gICAgZXhwZW5zZXM6IG51bWJlcjtcbiAgICBzYXZpbmdzOiBudW1iZXI7XG4gICAgc2F2aW5nc1JhdGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5hbmNpYWxIZWFsdGhSZXBvcnQge1xuICAgIG5ldFdvcnRoOiBudW1iZXI7XG4gICAgZGVidFRvSW5jb21lUmF0aW86IG51bWJlcjtcbiAgICBtb250aGx5Q2FzaGZsb3c6IG51bWJlcjtcbiAgICBtb250aGx5UmVwb3J0czogTW9udGhseVJlcG9ydFtdO1xufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgdHlwZSBMaWFiaWxpdHlUeXBlID0gJ0xvYW4nIHwgJ0RlYnQvUGF5YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBMaWFiaWxpdHkgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHR5cGU6IExpYWJpbGl0eVR5cGU7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGludGVyZXN0UmF0ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxMaWFiaWxpdHk+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZSB8fCAnTG9hbic7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gZGF0YS5hbW91bnQgfHwgMDtcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lIHx8ICcnO1xuICAgICAgICB0aGlzLmludGVyZXN0UmF0ZSA9IGRhdGEuaW50ZXJlc3RSYXRlIHx8IDA7XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhseVNuYXBzaG90IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB5ZWFyOiBudW1iZXI7XG4gICAgbW9udGg6IG51bWJlcjtcbiAgICBuZXRBc3NldDogbnVtYmVyO1xuICAgIHBlcmNlbnRhZ2VDaGFuZ2U/OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPE1vbnRobHlTbmFwc2hvdD4pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMueWVhciA9IGRhdGEueWVhciB8fCBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMubW9udGggPSBkYXRhLm1vbnRoIHx8IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5uZXRBc3NldCA9IGRhdGEubmV0QXNzZXQgfHwgMDtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlQ2hhbmdlID0gZGF0YS5wZXJjZW50YWdlQ2hhbmdlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25UeXBlID0gJ2luY29tZScgfCAnZXhwZW5zZSc7XG5leHBvcnQgdHlwZSBUcmFuc2FjdGlvbkNhdGVnb3J5ID0gXG4gIC8vIEluY29tZSBjYXRlZ29yaWVzXG4gIHwgJ1NhbGFyeScgfCAnQnVzaW5lc3MnIHwgJ1JlbnQnIHwgJ0ludGVyZXN0JyB8ICdSb3lhbHRpZXMnXG4gIC8vIEV4cGVuc2UgY2F0ZWdvcmllc1xuICB8ICdDb25zdW1lciBiYXNrZXQnIHwgJ0hhYml0cycgfCAnQ2FyJyB8ICdSb3V0aW5lJyB8ICdIb3VzaW5nJyB8ICdDcmVkaXQgQ2FyZC9Mb2FuJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0eXBlOiBUcmFuc2FjdGlvblR5cGU7XG4gICAgY2F0ZWdvcnk6IFRyYW5zYWN0aW9uQ2F0ZWdvcnk7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB0aW1lUmVxdWlyZWQ/OiBudW1iZXI7IC8vIEhvdXJzIHJlcXVpcmVkIChvbmx5IGZvciBpbmNvbWUpXG4gICAgbW9udGg6IG51bWJlcjtcbiAgICB5ZWFyOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFRyYW5zYWN0aW9uPikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5pZCA9IGRhdGEuaWQgfHwgY3J5cHRvLnJhbmRvbVVVSUQoKTtcbiAgICAgICAgdGhpcy50eXBlID0gZGF0YS50eXBlIHx8ICdleHBlbnNlJztcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGRhdGEuY2F0ZWdvcnkgfHwgJ0NvbnN1bWVyIGJhc2tldCc7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gTnVtYmVyKGRhdGEuYW1vdW50IHx8IDApO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbiB8fCAnJztcbiAgICAgICAgdGhpcy50aW1lUmVxdWlyZWQgPSBkYXRhLnR5cGUgPT09ICdpbmNvbWUnID8gTnVtYmVyKGRhdGEudGltZVJlcXVpcmVkIHx8IDEpIDogdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm1vbnRoID0gZGF0YS5tb250aCA/PyBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMueWVhciA9IGRhdGEueWVhciA/PyBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzc2V0IH0gZnJvbSAnLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLXNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmFnZUtleXMgfSBmcm9tICcuLi9jb25zdGFudHMvc3RvcmFnZS1rZXlzJztcblxuZXhwb3J0IGNsYXNzIEFzc2V0U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPEFzc2V0PiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVEFHID0gJ0Fzc2V0U2VydmljZSc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSBTdG9yYWdlS2V5cy5BU1NFVFM7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBBc3NldFNlcnZpY2Uge1xuICAgICAgICBpZiAoIUFzc2V0U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgQXNzZXRTZXJ2aWNlLmluc3RhbmNlID0gbmV3IEFzc2V0U2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBc3NldFNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IEFzc2V0W10ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGRhdGEgPT4gbmV3IEFzc2V0KGRhdGEpKTtcbiAgICB9XG5cbiAgICBhZGRBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGFzc2V0KTtcbiAgICB9XG5cbiAgICB1cGRhdGVBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKGFzc2V0KTtcbiAgICB9XG5cbiAgICBkZWxldGVBc3NldChpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbShpZCk7XG4gICAgfVxuXG4gICAgZ2V0QXNzZXRzKCk6IEFzc2V0W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIGdldFRvdGFsQXNzZXRWYWx1ZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgYXNzZXQpID0+IHN1bSArIGFzc2V0LnZhbHVlLCAwKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS1zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlU2VydmljZTxUIGV4dGVuZHMgeyBpZDogc3RyaW5nIH0+IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJvdGVjdGVkIGl0ZW1zOiBUW10gPSBbXTtcbiAgICBwcm90ZWN0ZWQgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBUQUc6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVhZG9ubHkgc3RvcmFnZUtleTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UgPSBTdG9yYWdlU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxvYWRJdGVtcygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBsb2FkSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbm90IHNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2F2ZWRJdGVtcyA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0SXRlbTxhbnlbXT4odGhpcy5zdG9yYWdlS2V5LCBbXSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy50cmFuc2Zvcm1Mb2FkZWRJdGVtcyhzYXZlZEl0ZW1zKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYExvYWRlZCAke3RoaXMuaXRlbXMubGVuZ3RofSBpdGVtcyBmcm9tICR7dGhpcy5zdG9yYWdlS2V5fWApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCBgRXJyb3IgbG9hZGluZyBpdGVtcyBmcm9tICR7dGhpcy5zdG9yYWdlS2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzYXZlSXRlbXMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmFnZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbm90IHNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXRJdGVtKHRoaXMuc3RvcmFnZUtleSwgdGhpcy5pdGVtcyk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBTYXZlZCAke3RoaXMuaXRlbXMubGVuZ3RofSBpdGVtcyB0byAke3RoaXMuc3RvcmFnZUtleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgYEVycm9yIHNhdmluZyBpdGVtcyB0byAke3RoaXMuc3RvcmFnZUtleX1gLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogVFtdO1xuXG4gICAgcHJvdGVjdGVkIGFkZEl0ZW0oaXRlbTogVCk6IHZvaWQge1xuICAgICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcih0aGlzLlRBRywgJ0Nhbm5vdCBhZGQgaXRlbSB3aXRob3V0IGlkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnNhdmVJdGVtcygpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycsIHRoaXMuaXRlbXMpO1xuICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBBZGRlZCBpdGVtIHdpdGggaWQ6ICR7aXRlbS5pZH1gKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnQ2Fubm90IHVwZGF0ZSBpdGVtIHdpdGhvdXQgaWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaXRlbXMuZmluZEluZGV4KGkgPT4gaS5pZCA9PT0gaXRlbS5pZCk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUl0ZW1zKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpdGVtcycsIHRoaXMuaXRlbXMpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKHRoaXMuVEFHLCBgVXBkYXRlZCBpdGVtIHdpdGggaWQ6ICR7aXRlbS5pZH1gKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBkZWxldGVJdGVtKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnQ2Fubm90IGRlbGV0ZSBpdGVtIHdpdGhvdXQgaWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpZCk7XG4gICAgICAgIHRoaXMuc2F2ZUl0ZW1zKCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2l0ZW1zJywgdGhpcy5pdGVtcyk7XG4gICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYERlbGV0ZWQgaXRlbSB3aXRoIGlkOiAke2lkfWApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRJdGVtcygpOiBUW10ge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuaXRlbXNdO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEV2ZW50QnVzU2VydmljZSBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBFdmVudEJ1c1NlcnZpY2U7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRXZlbnRCdXNTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFFdmVudEJ1c1NlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEV2ZW50QnVzU2VydmljZS5pbnN0YW5jZSA9IG5ldyBFdmVudEJ1c1NlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRXZlbnRCdXNTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGVtaXQoZXZlbnROYW1lOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ub3RpZnkoeyBldmVudE5hbWUsIG9iamVjdDogdGhpcywgZGF0YSB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFdmVudE5hbWVzID0ge1xuICAgIFNOQVBTSE9UX1VQREFURUQ6ICdzbmFwc2hvdFVwZGF0ZWQnXG59IGFzIGNvbnN0OyIsImltcG9ydCB7IExpYWJpbGl0eSB9IGZyb20gJy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Utc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlS2V5cyB9IGZyb20gJy4uL2NvbnN0YW50cy9zdG9yYWdlLWtleXMnO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPExpYWJpbGl0eT4ge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBUQUcgPSAnTGlhYmlsaXR5U2VydmljZSc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSBTdG9yYWdlS2V5cy5MSUFCSUxJVElFUztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IExpYWJpbGl0eVNlcnZpY2Uge1xuICAgICAgICBpZiAoIUxpYWJpbGl0eVNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIExpYWJpbGl0eVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgTGlhYmlsaXR5U2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBMaWFiaWxpdHlTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmFuc2Zvcm1Mb2FkZWRJdGVtcyhpdGVtczogYW55W10pOiBMaWFiaWxpdHlbXSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoZGF0YSA9PiBuZXcgTGlhYmlsaXR5KGRhdGEpKTtcbiAgICB9XG5cbiAgICBhZGRMaWFiaWxpdHkobGlhYmlsaXR5OiBMaWFiaWxpdHkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGxpYWJpbGl0eSk7XG4gICAgfVxuXG4gICAgdXBkYXRlTGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KTogdm9pZCB7XG4gICAgICAgIHRoaXMudXBkYXRlSXRlbShsaWFiaWxpdHkpO1xuICAgIH1cblxuICAgIGRlbGV0ZUxpYWJpbGl0eShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVsZXRlSXRlbShpZCk7XG4gICAgfVxuXG4gICAgZ2V0TGlhYmlsaXRpZXMoKTogTGlhYmlsaXR5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIGdldFRvdGFsTGlhYmlsaXRpZXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4gc3VtICsgbGlhYmlsaXR5LmFtb3VudCwgMCk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi9iYXNlLXNlcnZpY2UnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90IH0gZnJvbSAnLi4vbW9kZWxzL21vbnRobHktc25hcHNob3QnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ01vbnRobHlTbmFwc2hvdFNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhseVNuYXBzaG90U2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPE1vbnRobHlTbmFwc2hvdD4ge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBNb250aGx5U25hcHNob3RTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBUQUcgPSBUQUc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSAnbW9udGhseV9zbmFwc2hvdHMnO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTW9udGhseVNuYXBzaG90U2VydmljZSB7XG4gICAgICAgIGlmICghTW9udGhseVNuYXBzaG90U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgTW9udGhseVNuYXBzaG90U2VydmljZS5pbnN0YW5jZSA9IG5ldyBNb250aGx5U25hcHNob3RTZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IE1vbnRobHlTbmFwc2hvdFtdIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChkYXRhID0+IG5ldyBNb250aGx5U25hcHNob3QoZGF0YSkpO1xuICAgIH1cblxuICAgIGFkZFNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hZGRJdGVtKHNuYXBzaG90KTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKHNuYXBzaG90KTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIGRlbGV0ZVNuYXBzaG90KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKGlkKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQZXJjZW50YWdlQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIGdldFNuYXBzaG90cygpOiBNb250aGx5U25hcHNob3RbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlU2hhcnBlUmF0aW8oKTogbnVtYmVyIHwgbnVsbCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnQ2FsY3VsYXRpbmcgU2hhcnBlIFJhdGlvJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEdldCBwZXJjZW50YWdlIGNoYW5nZXMgYW5kIGZpbHRlciBvdXQgdW5kZWZpbmVkIHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuaXRlbXNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gdHlwZW9mIGl0ZW0ucGVyY2VudGFnZUNoYW5nZSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0ucGVyY2VudGFnZUNoYW5nZSEpO1xuXG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgRm91bmQgJHtjaGFuZ2VzLmxlbmd0aH0gdmFsaWQgcGVyY2VudGFnZSBjaGFuZ2VzYCk7XG5cbiAgICAgICAgICAgIC8vIE5lZWQgYXQgbGVhc3QgMiBkYXRhIHBvaW50cyBmb3IgbWVhbmluZ2Z1bCBjYWxjdWxhdGlvblxuICAgICAgICAgICAgaWYgKGNoYW5nZXMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdJbnN1ZmZpY2llbnQgZGF0YSBwb2ludHMgZm9yIFNoYXJwZSBSYXRpbyBjYWxjdWxhdGlvbicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgYXZlcmFnZSByZXR1cm5cbiAgICAgICAgICAgIGNvbnN0IGF2ZXJhZ2UgPSBjaGFuZ2VzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApIC8gY2hhbmdlcy5sZW5ndGg7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgQXZlcmFnZSByZXR1cm46ICR7YXZlcmFnZS50b0ZpeGVkKDIpfSVgKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHN0YW5kYXJkIGRldmlhdGlvblxuICAgICAgICAgICAgY29uc3QgdmFyaWFuY2UgPSBjaGFuZ2VzLnJlZHVjZSgoYSwgYikgPT4gYSArIE1hdGgucG93KGIgLSBhdmVyYWdlLCAyKSwgMCkgLyAoY2hhbmdlcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZERldiA9IE1hdGguc3FydCh2YXJpYW5jZSk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3RhbmRhcmQgZGV2aWF0aW9uOiAke3N0ZERldi50b0ZpeGVkKDIpfWApO1xuXG4gICAgICAgICAgICAvLyBBdm9pZCBkaXZpc2lvbiBieSB6ZXJvXG4gICAgICAgICAgICBpZiAoc3RkRGV2ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N0YW5kYXJkIGRldmlhdGlvbiBpcyB6ZXJvLCBjYW5ub3QgY2FsY3VsYXRlIFNoYXJwZSBSYXRpbycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgYW5udWFsaXplZCBTaGFycGUgUmF0aW9cbiAgICAgICAgICAgIGNvbnN0IHNoYXJwZVJhdGlvID0gKGF2ZXJhZ2UgLyBzdGREZXYpICogTWF0aC5zcXJ0KDEyKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBDYWxjdWxhdGVkIFNoYXJwZSBSYXRpbzogJHtzaGFycGVSYXRpby50b0ZpeGVkKDIpfWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gc2hhcnBlUmF0aW87XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgY2FsY3VsYXRpbmcgU2hhcnBlIFJhdGlvJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNhbGN1bGF0ZVBlcmNlbnRhZ2VDaGFuZ2VzKCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gU29ydCBzbmFwc2hvdHMgYnkgZGF0ZVxuICAgICAgICAgICAgY29uc3Qgc29ydGVkU25hcHNob3RzID0gWy4uLnRoaXMuaXRlbXNdLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS55ZWFyICE9PSBiLnllYXIpIHJldHVybiBhLnllYXIgLSBiLnllYXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGEubW9udGggLSBiLm1vbnRoO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwZXJjZW50YWdlIGNoYW5nZXNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc29ydGVkU25hcHNob3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHNvcnRlZFNuYXBzaG90c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91cyA9IHNvcnRlZFNuYXBzaG90c1tpIC0gMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZUNoYW5nZSA9ICgoY3VycmVudC5uZXRBc3NldCAtIHByZXZpb3VzLm5ldEFzc2V0KSAvIHByZXZpb3VzLm5ldEFzc2V0KSAqIDEwMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnBlcmNlbnRhZ2VDaGFuZ2UgPSBOdW1iZXIocGVyY2VudGFnZUNoYW5nZS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmlyc3Qgc25hcHNob3QgaGFzIG5vIHBlcmNlbnRhZ2UgY2hhbmdlXG4gICAgICAgICAgICBpZiAoc29ydGVkU25hcHNob3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzb3J0ZWRTbmFwc2hvdHNbMF0ucGVyY2VudGFnZUNoYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zYXZlSXRlbXMoKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgY2FsY3VsYXRlZCBwZXJjZW50YWdlIGNoYW5nZXMnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBjYWxjdWxhdGluZyBwZXJjZW50YWdlIGNoYW5nZXMnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zYWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXNzZXRTZXJ2aWNlIH0gZnJvbSAnLi9hc3NldC1zZXJ2aWNlJztcbmltcG9ydCB7IExpYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IEZpbmFuY2lhbEhlYWx0aFJlcG9ydCwgTW9udGhseVJlcG9ydCB9IGZyb20gJy4uL21vZGVscy9maW5hbmNpYWwtcmVwb3J0JztcbmltcG9ydCB7IFxuICAgIGNhbGN1bGF0ZU5ldFdvcnRoLCBcbiAgICBjYWxjdWxhdGVNb250aGx5Q2FzaGZsb3csXG4gICAgY2FsY3VsYXRlRGVidFRvSW5jb21lUmF0aW8gXG59IGZyb20gJy4uL3V0aWxzL2ZpbmFuY2lhbC1jYWxjdWxhdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgUmVwb3J0U2VydmljZSBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBSZXBvcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgdHJhbnNhY3Rpb25TZXJ2aWNlOiBUcmFuc2FjdGlvblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhc3NldFNlcnZpY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcml2YXRlIGxpYWJpbGl0eVNlcnZpY2U6IExpYWJpbGl0eVNlcnZpY2U7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmFzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFJlcG9ydFNlcnZpY2Uge1xuICAgICAgICBpZiAoIVJlcG9ydFNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFJlcG9ydFNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgUmVwb3J0U2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZXBvcnRTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRmluYW5jaWFsSGVhbHRoUmVwb3J0KCk6IEZpbmFuY2lhbEhlYWx0aFJlcG9ydCB7XG4gICAgICAgIGNvbnN0IGFzc2V0cyA9IHRoaXMuYXNzZXRTZXJ2aWNlLmdldEFzc2V0cygpO1xuICAgICAgICBjb25zdCBsaWFiaWxpdGllcyA9IHRoaXMubGlhYmlsaXR5U2VydmljZS5nZXRMaWFiaWxpdGllcygpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1vbnRobHlJbmNvbWUgPSB0cmFuc2FjdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdpbmNvbWUnKVxuICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMCkgLyAxMjtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV0V29ydGg6IGNhbGN1bGF0ZU5ldFdvcnRoKGFzc2V0cywgbGlhYmlsaXRpZXMpLFxuICAgICAgICAgICAgZGVidFRvSW5jb21lUmF0aW86IGNhbGN1bGF0ZURlYnRUb0luY29tZVJhdGlvKG1vbnRobHlJbmNvbWUsIGxpYWJpbGl0aWVzKSxcbiAgICAgICAgICAgIG1vbnRobHlDYXNoZmxvdzogY2FsY3VsYXRlTW9udGhseUNhc2hmbG93KHRyYW5zYWN0aW9ucyksXG4gICAgICAgICAgICBtb250aGx5UmVwb3J0czogdGhpcy5nZW5lcmF0ZU1vbnRobHlSZXBvcnRzKClcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlTW9udGhseVJlcG9ydHMoKTogTW9udGhseVJlcG9ydFtdIHtcbiAgICAgICAgY29uc3QgcmVwb3J0czogTW9udGhseVJlcG9ydFtdID0gW107XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdlbmVyYXRlIHJlcG9ydHMgZm9yIHRoZSBsYXN0IDEyIG1vbnRoc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgLSBpICsgMTIpICUgMTI7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSAtIE1hdGguZmxvb3IoaSAvIDEyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbW9udGhUcmFuc2FjdGlvbnMgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZVxuICAgICAgICAgICAgICAgIC5nZXRNb250aGx5VHJhbnNhY3Rpb25zKG1vbnRoLCB5ZWFyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgaW5jb21lID0gbW9udGhUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnaW5jb21lJylcbiAgICAgICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZXhwZW5zZXMgPSBtb250aFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdleHBlbnNlJylcbiAgICAgICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc2F2aW5ncyA9IGluY29tZSAtIGV4cGVuc2VzO1xuICAgICAgICAgICAgY29uc3Qgc2F2aW5nc1JhdGUgPSBpbmNvbWUgPiAwID8gKHNhdmluZ3MgLyBpbmNvbWUpICogMTAwIDogMDtcblxuICAgICAgICAgICAgcmVwb3J0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBtb250aCxcbiAgICAgICAgICAgICAgICB5ZWFyLFxuICAgICAgICAgICAgICAgIGluY29tZSxcbiAgICAgICAgICAgICAgICBleHBlbnNlcyxcbiAgICAgICAgICAgICAgICBzYXZpbmdzLFxuICAgICAgICAgICAgICAgIHNhdmluZ3NSYXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXBvcnRzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBcHBsaWNhdGlvblNldHRpbmdzIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdTdG9yYWdlU2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFN0b3JhZ2VTZXJ2aWNlO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFTdG9yYWdlU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgU3RvcmFnZVNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RvcmFnZVNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgc2V0SXRlbTxUPihrZXk6IHN0cmluZywgdmFsdWU6IFQpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5zZXRTdHJpbmcoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSBzdG9yZWQgZGF0YSBmb3Iga2V5OiAke2tleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBFcnJvciBzdG9yaW5nIGRhdGEgZm9yIGtleTogJHtrZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRJdGVtPFQ+KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBBcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhrZXkpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCBgRXJyb3IgcmV0cmlldmluZyBkYXRhIGZvciBrZXk6ICR7a2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JhZ2Uga2V5IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHJlbW92ZWQgZGF0YSBmb3Iga2V5OiAke2tleX1gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBFcnJvciByZW1vdmluZyBkYXRhIGZvciBrZXk6ICR7a2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLmNsZWFyKCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IGNsZWFyZWQgYWxsIHN0b3JhZ2UnKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBjbGVhcmluZyBzdG9yYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Utc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yYWdlS2V5cyB9IGZyb20gJy4uL2NvbnN0YW50cy9zdG9yYWdlLWtleXMnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlPFRyYW5zYWN0aW9uPiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgVEFHID0gJ1RyYW5zYWN0aW9uU2VydmljZSc7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHN0b3JhZ2VLZXkgPSBTdG9yYWdlS2V5cy5UUkFOU0FDVElPTlM7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBUcmFuc2FjdGlvblNlcnZpY2Uge1xuICAgICAgICBpZiAoIVRyYW5zYWN0aW9uU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgVHJhbnNhY3Rpb25TZXJ2aWNlLmluc3RhbmNlID0gbmV3IFRyYW5zYWN0aW9uU2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBUcmFuc2FjdGlvblNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IFRyYW5zYWN0aW9uW10ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGRhdGEgPT4gbmV3IFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBhbW91bnQ6IE51bWJlcihkYXRhLmFtb3VudCksXG4gICAgICAgICAgICB0aW1lUmVxdWlyZWQ6IGRhdGEudGltZVJlcXVpcmVkID8gTnVtYmVyKGRhdGEudGltZVJlcXVpcmVkKSA6IHVuZGVmaW5lZFxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0TW9udGhseVRyYW5zYWN0aW9ucyhtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiBUcmFuc2FjdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKHQgPT4gdC5tb250aCA9PT0gbW9udGggJiYgdC55ZWFyID09PSB5ZWFyKTtcbiAgICB9XG5cbiAgICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdHJhbnNhY3Rpb24uYW1vdW50ID0gTnVtYmVyKHRyYW5zYWN0aW9uLmFtb3VudCk7XG4gICAgICAgIGlmIChpc05hTih0cmFuc2FjdGlvbi5hbW91bnQpKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdJbnZhbGlkIHRyYW5zYWN0aW9uIGFtb3VudCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0cmFuc2FjdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRyYW5zYWN0aW9uLmFtb3VudCA9IE51bWJlcih0cmFuc2FjdGlvbi5hbW91bnQpO1xuICAgICAgICBpZiAoaXNOYU4odHJhbnNhY3Rpb24uYW1vdW50KSkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnSW52YWxpZCB0cmFuc2FjdGlvbiBhbW91bnQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0odHJhbnNhY3Rpb24pO1xuICAgIH1cblxuICAgIGRlbGV0ZVRyYW5zYWN0aW9uKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBnZXRUcmFuc2FjdGlvbnMoKTogVHJhbnNhY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxJbmNvbWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNcbiAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdpbmNvbWUnKVxuICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyBOdW1iZXIodC5hbW91bnQpLCAwKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbEV4cGVuc2VzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnZXhwZW5zZScpXG4gICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIE51bWJlcih0LmFtb3VudCksIDApO1xuICAgIH1cblxuICAgIGdldFRvdGFsVGltZVJlcXVpcmVkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnaW5jb21lJyAmJiB0LnRpbWVSZXF1aXJlZClcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgTnVtYmVyKHQudGltZVJlcXVpcmVkIHx8IDApLCAwKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IENoYXJ0Q29sb3JzID0ge1xuICAgIC8vIEFzc2V0IENhdGVnb3JpZXNcbiAgICBSZWFsRXN0YXRlOiAnIzRDNTFCRicsICAvLyBJbmRpZ29cbiAgICBWZWhpY2xlczogJyM0OEJCNzgnLCAgICAvLyBHcmVlblxuICAgIENhc2g6ICcjNDI5OUUxJywgICAgICAgIC8vIEJsdWVcbiAgICBCdXNpbmVzczogJyNFRDg5MzYnLCAgICAvLyBPcmFuZ2VcbiAgICBTYXZpbmc6ICcjOUY3QUVBJywgICAgICAvLyBQdXJwbGVcbiAgICBTdG9ja3M6ICcjRjU2NTY1JywgICAgICAvLyBSZWRcblxuICAgIC8vIFRyYW5zYWN0aW9uIENhdGVnb3JpZXMgLSBJbmNvbWVcbiAgICBTYWxhcnk6ICcjNDhCQjc4JywgICAgICAvLyBHcmVlblxuICAgICdJbnRlcmVzdC9EaXZpZGVuZHMnOiAnIzlGN0FFQScsIC8vIFB1cnBsZVxuXG4gICAgLy8gVHJhbnNhY3Rpb24gQ2F0ZWdvcmllcyAtIEV4cGVuc2VcbiAgICBIb3VzaW5nOiAnIzRDNTFCRicsICAgICAvLyBJbmRpZ29cbiAgICBUcmFuc3BvcnRhdGlvbjogJyM0OEJCNzgnLCAvLyBHcmVlblxuICAgIEZvb2Q6ICcjNDI5OUUxJywgICAgICAgIC8vIEJsdWVcbiAgICBVdGlsaXRpZXM6ICcjRUQ4OTM2JywgICAvLyBPcmFuZ2VcbiAgICBJbnN1cmFuY2U6ICcjOUY3QUVBJywgICAvLyBQdXJwbGVcbiAgICBIZWFsdGhjYXJlOiAnI0Y1NjU2NScsICAvLyBSZWRcbiAgICBFbnRlcnRhaW5tZW50OiAnIzY2N0VFQScsIC8vIEluZGlnb1xuICAgIExvYW46ICcjRDUzRjhDJywgICAgICAgLy8gUGlua1xuXG4gICAgLy8gTGlhYmlsaXR5IFR5cGVzXG4gICAgU2hvcnRUZXJtOiAnI0Y1NjU2NScsICAgLy8gUmVkXG4gICAgTG9uZ1Rlcm06ICcjNEM1MUJGJyAgICAgLy8gSW5kaWdvXG59OyIsImltcG9ydCB7IERpYWxvZ3MsIERpYWxvZ09wdGlvbnMgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkRpYWxvZ09wdGlvbnMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIGFjdGlvbnM6IEFycmF5PHsgaWQ6IHN0cmluZzsgdGV4dDogc3RyaW5nIH0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpcm1EaWFsb2dPcHRpb25zIGV4dGVuZHMgRGlhbG9nT3B0aW9ucyB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgb2tCdXR0b25UZXh0Pzogc3RyaW5nO1xuICAgIGNhbmNlbEJ1dHRvblRleHQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGlhbG9nKG9wdGlvbnM6IEFjdGlvbkRpYWxvZ09wdGlvbnMgfCBDb25maXJtRGlhbG9nT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nIHwgYm9vbGVhbj4ge1xuICAgIGlmICgnYWN0aW9ucycgaW4gb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gRGlhbG9ncy5hY3Rpb24oe1xuICAgICAgICAgICAgdGl0bGU6IG9wdGlvbnMudGl0bGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBvcHRpb25zLm1lc3NhZ2UsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IG9wdGlvbnMuYWN0aW9ucy5tYXAoYSA9PiBhLnRleHQpXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdDYW5jZWwnKSByZXR1cm4gJ2NhbmNlbCc7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbnMuZmluZChhID0+IGEudGV4dCA9PT0gcmVzdWx0KTtcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24gPyBhY3Rpb24uaWQgOiAnY2FuY2VsJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBEaWFsb2dzLmNvbmZpcm0ob3B0aW9ucyBhcyBEaWFsb2dPcHRpb25zKTtcbn0iLCJpbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBBc3NldCB9IGZyb20gJy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBMaWFiaWxpdHkgfSBmcm9tICcuLi9tb2RlbHMvbGlhYmlsaXR5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU5ldFdvcnRoKGFzc2V0czogQXNzZXRbXSwgbGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdKTogbnVtYmVyIHtcbiAgICBjb25zdCB0b3RhbEFzc2V0cyA9IGFzc2V0cy5yZWR1Y2UoKHN1bSwgYXNzZXQpID0+IHN1bSArIGFzc2V0LnZhbHVlLCAwKTtcbiAgICBjb25zdCB0b3RhbExpYWJpbGl0aWVzID0gbGlhYmlsaXRpZXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4gc3VtICsgbGlhYmlsaXR5LmFtb3VudCwgMCk7XG4gICAgcmV0dXJuIHRvdGFsQXNzZXRzIC0gdG90YWxMaWFiaWxpdGllcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZU1vbnRobHlDYXNoZmxvdyh0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10pOiBudW1iZXIge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGNvbnN0IG1vbnRobHlUcmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnMuZmlsdGVyKHQgPT4gXG4gICAgICAgIHQubW9udGggPT09IGN1cnJlbnRNb250aCAmJiBcbiAgICAgICAgdC55ZWFyID09PSBjdXJyZW50WWVhclxuICAgICk7XG5cbiAgICByZXR1cm4gbW9udGhseVRyYW5zYWN0aW9ucy5yZWR1Y2UoKHN1bSwgdCkgPT4gXG4gICAgICAgIHN1bSArICh0LnR5cGUgPT09ICdpbmNvbWUnID8gdC5hbW91bnQgOiAtdC5hbW91bnQpLCAwXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURlYnRUb0luY29tZVJhdGlvKFxuICAgIG1vbnRobHlJbmNvbWU6IG51bWJlciwgXG4gICAgbGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdXG4pOiBudW1iZXIge1xuICAgIGNvbnN0IG1vbnRobHlEZWJ0UGF5bWVudHMgPSBsaWFiaWxpdGllcy5yZWR1Y2UoKHN1bSwgbGlhYmlsaXR5KSA9PiB7XG4gICAgICAgIC8vIFNpbXBsZSBtb250aGx5IHBheW1lbnQgY2FsY3VsYXRpb25cbiAgICAgICAgY29uc3QgbW9udGhseVJhdGUgPSBsaWFiaWxpdHkuaW50ZXJlc3RSYXRlIC8gMTIgLyAxMDA7XG4gICAgICAgIGNvbnN0IG1vbnRocyA9IGxpYWJpbGl0eS50eXBlID09PSAnRGVidC9QYXlhYmxlJyA/IDEyIDogMzYwOyAvLyAxIHllYXIgb3IgMzAgeWVhcnNcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IChsaWFiaWxpdHkuYW1vdW50ICogbW9udGhseVJhdGUgKiBNYXRoLnBvdygxICsgbW9udGhseVJhdGUsIG1vbnRocykpIFxuICAgICAgICAgICAgLyAoTWF0aC5wb3coMSArIG1vbnRobHlSYXRlLCBtb250aHMpIC0gMSk7XG4gICAgICAgIHJldHVybiBzdW0gKyBwYXltZW50O1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIG1vbnRobHlEZWJ0UGF5bWVudHMgLyBtb250aGx5SW5jb21lO1xufSIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeShhbW91bnQ6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gRW5zdXJlIHdlJ3JlIHdvcmtpbmcgd2l0aCBhIG51bWJlclxuICAgIGNvbnN0IG51bWVyaWNBbW91bnQgPSB0eXBlb2YgYW1vdW50ID09PSAnc3RyaW5nJyA/IHBhcnNlRmxvYXQoYW1vdW50KSA6IGFtb3VudDtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBpdCdzIGEgdmFsaWQgbnVtYmVyXG4gICAgaWYgKGlzTmFOKG51bWVyaWNBbW91bnQpKSB7XG4gICAgICAgIHJldHVybiAnJDAuMDAnO1xuICAgIH1cbiAgICBcbiAgICAvLyBGb3JtYXQgd2l0aCAyIGRlY2ltYWwgcGxhY2VzIGFuZCBhZGQgZG9sbGFyIHNpZ25cbiAgICByZXR1cm4gYCQke251bWVyaWNBbW91bnQudG9GaXhlZCgyKX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgICAgIHJldHVybiAnSW52YWxpZCBEYXRlJztcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbW9udGhzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuICAgIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV07XG4gICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQZXJjZW50YWdlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGluY2x1ZGVTeW1ib2w6IGJvb2xlYW4gPSB0cnVlKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW1lcmljVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbiAgICBpZiAoaXNOYU4obnVtZXJpY1ZhbHVlKSkge1xuICAgICAgICByZXR1cm4gaW5jbHVkZVN5bWJvbCA/ICcwLjAwJScgOiAnMC4wMCc7XG4gICAgfVxuICAgIHJldHVybiBgJHtudW1lcmljVmFsdWUudG9GaXhlZCgyKX0ke2luY2x1ZGVTeW1ib2wgPyAnJScgOiAnJ31gO1xufSIsIi8vIEB0cy1pZ25vcmVcbmlmIChnbG9iYWwuaXNJT1MpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgVUlDb2xvci5wcm90b3R5cGUuY29sb3JXaXRoSGV4U3RyaW5nID0gZnVuY3Rpb24oaGV4OiBzdHJpbmcpOiBVSUNvbG9yIHtcbiAgICAgICAgbGV0IHIgPSAwLCBnID0gMCwgYiA9IDA7XG4gICAgICAgIFxuICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgciA9IHBhcnNlSW50KGhleC5jaGFyQXQoMCkgKyBoZXguY2hhckF0KDApLCAxNik7XG4gICAgICAgICAgICBnID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgxKSArIGhleC5jaGFyQXQoMSksIDE2KTtcbiAgICAgICAgICAgIGIgPSBwYXJzZUludChoZXguY2hhckF0KDIpICsgaGV4LmNoYXJBdCgyKSwgMTYpO1xuICAgICAgICB9IGVsc2UgaWYgKGhleC5sZW5ndGggPT09IDYpIHtcbiAgICAgICAgICAgIHIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNik7XG4gICAgICAgICAgICBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpO1xuICAgICAgICAgICAgYiA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCwgNiksIDE2KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gVUlDb2xvci5hbGxvYygpLmluaXRXaXRoUmVkR3JlZW5CbHVlQWxwaGEoci8yNTUsIGcvMjU1LCBiLzI1NSwgMSk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcbiAgICBzdGF0aWMgZGVidWcodGFnOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbG9nTWVzc2FnZSA9IGBbJHt0YWd9XSAke21lc3NhZ2V9YDtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9nTWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2dNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FuZHJvaWQgJiYgZ2xvYmFsLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IEFuZHJvaWQgc3BlY2lmaWMgY29kZVxuICAgICAgICAgICAgYW5kcm9pZC51dGlsLkxvZy5kKHRhZywgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZXJyb3IodGFnOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgZXJyb3I/OiBFcnJvcik6IHZvaWQge1xuICAgICAgICBjb25zdCBsb2dNZXNzYWdlID0gYFske3RhZ31dIEVSUk9SOiAke21lc3NhZ2V9YDtcbiAgICAgICAgY29uc29sZS5lcnJvcihsb2dNZXNzYWdlKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0FuZHJvaWQgJiYgZ2xvYmFsLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IEFuZHJvaWQgc3BlY2lmaWMgY29kZVxuICAgICAgICAgICAgYW5kcm9pZC51dGlsLkxvZy5lKHRhZywgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRnJhbWUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVUb1BhZ2UocGFnZVBhdGg6IHN0cmluZywgY29udGV4dD86IGFueSk6IHZvaWQge1xuICAgIEZyYW1lLnRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgIG1vZHVsZU5hbWU6IHBhZ2VQYXRoLFxuICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICBjbGVhckhpc3Rvcnk6IGZhbHNlXG4gICAgfSk7XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBBc3NldCwgQXNzZXRDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBZGRBc3NldFZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBZGRBc3NldFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYXRlZ29yaWVzOiBBc3NldENhdGVnb3J5W10gPSBbXG4gICAgICAgICdSZWFsIEVzdGF0ZScsICdCdXNpbmVzcycsICdTdG9ja3MnLCAnQXJ0ICYgQW50aXF1aXRpZXMnLCAnU2F2aW5nL0Nhc2gnXG4gICAgXTtcbiAgICBwcml2YXRlIF9hc3NldFNlcnZpY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ0Fzc2V0PzogQXNzZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihleGlzdGluZ0Fzc2V0PzogQXNzZXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlID0gQXNzZXRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nQXNzZXQgPSBleGlzdGluZ0Fzc2V0O1xuXG4gICAgICAgIGlmIChleGlzdGluZ0Fzc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVXaXRoRXhpc3RpbmdBc3NldChleGlzdGluZ0Fzc2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ0Fzc2V0KGFzc2V0OiBBc3NldCkge1xuICAgICAgICB0aGlzLl9uYW1lID0gYXNzZXQubmFtZTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBhc3NldC52YWx1ZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gdGhpcy5fY2F0ZWdvcmllcy5pbmRleE9mKGFzc2V0LmNhdGVnb3J5KTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX25hbWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduYW1lJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuICAgIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpY1ZhbHVlKSAmJiB0aGlzLl92YWx1ZSAhPT0gbnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3ZhbHVlJywgbnVtZXJpY1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjYXRlZ29yaWVzKCk6IEFzc2V0Q2F0ZWdvcnlbXSB7IHJldHVybiB0aGlzLl9jYXRlZ29yaWVzOyB9XG4gICAgZ2V0IHNlbGVjdGVkQ2F0ZWdvcnlJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4OyB9XG4gICAgc2V0IHNlbGVjdGVkQ2F0ZWdvcnlJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fzc2V0IG5hbWUgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMuX3ZhbHVlKSB8fCB0aGlzLl92YWx1ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3NldCB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5fZXhpc3RpbmdBc3NldCAmJiB7IGlkOiB0aGlzLl9leGlzdGluZ0Fzc2V0LmlkIH0pLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUudHJpbSgpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5fY2F0ZWdvcmllc1t0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXhdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2V4aXN0aW5nQXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UudXBkYXRlQXNzZXQoYXNzZXQpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgdXBkYXRlZCBhc3NldDogJHthc3NldC5uYW1lfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UuYWRkQXNzZXQoYXNzZXQpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgYWRkZWQgYXNzZXQ6ICR7YXNzZXQubmFtZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBzYXZpbmcgYXNzZXQnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBc3NldCwgQXNzZXRDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBDaGFydENvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBEb251dENoYXJ0RGF0YSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hhcnRzL2RvbnV0LWNoYXJ0JztcblxuZXhwb3J0IGNsYXNzIEFzc2V0RGlzdHJpYnV0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfY2hhcnREYXRhOiBEb251dENoYXJ0RGF0YVtdID0gW107XG5cbiAgICBnZXQgY2hhcnREYXRhKCk6IERvbnV0Q2hhcnREYXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhcnREYXRhO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEoYXNzZXRzOiBBc3NldFtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gYXNzZXRzLnJlZHVjZSgoc3VtLCBhc3NldCkgPT4gc3VtICsgYXNzZXQudmFsdWUsIDApO1xuICAgICAgICBcbiAgICAgICAgLy8gR3JvdXAgYXNzZXRzIGJ5IGNhdGVnb3J5XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TWFwID0gbmV3IE1hcDxBc3NldENhdGVnb3J5LCBudW1iZXI+KCk7XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBjYXRlZ29yeU1hcC5nZXQoYXNzZXQuY2F0ZWdvcnkpIHx8IDA7XG4gICAgICAgICAgICBjYXRlZ29yeU1hcC5zZXQoYXNzZXQuY2F0ZWdvcnksIGN1cnJlbnQgKyBhc3NldC52YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gY2hhcnQgZGF0YVxuICAgICAgICB0aGlzLl9jaGFydERhdGEgPSBBcnJheS5mcm9tKGNhdGVnb3J5TWFwLmVudHJpZXMoKSlcbiAgICAgICAgICAgIC5tYXAoKFtjYXRlZ29yeSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogQ2hhcnRDb2xvcnNbY2F0ZWdvcnldLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKHZhbHVlIC8gdG90YWwpICogMTAwKSA6IDBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjaGFydERhdGEnLCB0aGlzLl9jaGFydERhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXR0ZXJzJztcbmltcG9ydCB7IG5hdmlnYXRlVG9QYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBzaG93RGlhbG9nIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBBc3NldERpc3RyaWJ1dGlvblZpZXdNb2RlbCB9IGZyb20gJy4vYXNzZXQtZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwnO1xuXG5jb25zdCBUQUcgPSAnQXNzZXRMaXN0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEFzc2V0TGlzdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX2Fzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2Fzc2V0czogQXNzZXRbXSA9IFtdO1xuICAgIHByaXZhdGUgX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDogQXNzZXREaXN0cmlidXRpb25WaWV3TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlID0gQXNzZXRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbCA9IG5ldyBBc3NldERpc3RyaWJ1dGlvblZpZXdNb2RlbCgpO1xuICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgICB9XG5cbiAgICBnZXQgYXNzZXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXNzZXRzLm1hcChhc3NldCA9PiAoe1xuICAgICAgICAgICAgLi4uYXNzZXQsXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0Q3VycmVuY3koYXNzZXQudmFsdWUpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxBc3NldHNGb3JtYXR0ZWQoKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9hc3NldFNlcnZpY2UuZ2V0VG90YWxBc3NldFZhbHVlKCkpO1xuICAgIH1cblxuICAgIGdldCBkaXN0cmlidXRpb25WaWV3TW9kZWwoKTogQXNzZXREaXN0cmlidXRpb25WaWV3TW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsO1xuICAgIH1cblxuICAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdSZWZyZXNoaW5nIGFzc2V0cyBsaXN0Jyk7XG4gICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgIH1cblxuICAgIG9uQWRkQXNzZXQoKTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlXCIpO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXNzZXQgaXRlbSB0YXBwZWQnKTtcbiAgICAgICAgY29uc3QgYXNzZXQgPSB0aGlzLl9hc3NldHNbYXJncy5pbmRleF07XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6IGFzc2V0Lm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVmFsdWU6ICR7Zm9ybWF0Q3VycmVuY3koYXNzZXQudmFsdWUpfWAsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgeyBpZDogJ2VkaXQnLCB0ZXh0OiAnRWRpdCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnZGVsZXRlJywgdGV4dDogJ0RlbGV0ZScgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRBc3NldChhc3NldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFzc2V0KGFzc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGhhbmRsaW5nIGl0ZW0gdGFwJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRBc3NldHMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9hc3NldHMgPSB0aGlzLl9hc3NldFNlcnZpY2UuZ2V0QXNzZXRzKCk7XG4gICAgICAgICAgICB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWwudXBkYXRlRGF0YSh0aGlzLl9hc3NldHMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnYXNzZXRzJywgdGhpcy5hc3NldHMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxBc3NldHNGb3JtYXR0ZWQnLCB0aGlzLnRvdGFsQXNzZXRzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBMb2FkZWQgJHt0aGlzLl9hc3NldHMubGVuZ3RofSBhc3NldHNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBsb2FkaW5nIGFzc2V0cycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdEFzc2V0KGFzc2V0OiBBc3NldCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgRWRpdGluZyBhc3NldDogJHthc3NldC5pZH1gKTtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZScsIHsgYXNzZXQgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYERlbGV0aW5nIGFzc2V0OiAke2Fzc2V0LmlkfWApO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBhc3NldD8nLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UuZGVsZXRlQXNzZXQoYXNzZXQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBBc3NldCBkZWxldGVkOiAke2Fzc2V0LmlkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgZGVsZXRpbmcgYXNzZXQnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQmFzZVZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSBiYWNrJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLnRvcG1vc3QoKTtcbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lLmdvQmFjaygpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgbmF2aWdhdGVkIGJhY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZyYW1lIGlzIG51bGwsIGNhbm5vdCBuYXZpZ2F0ZSBiYWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgbmF2aWdhdGluZyBiYWNrJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZSc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlJztcbmltcG9ydCB7IExpYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZSc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnRGFzaGJvYXJkVmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX25ldFdvcnRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RvdGFsSW5jb21lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RvdGFsRXhwZW5zZXM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxBc3NldHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxMaWFiaWxpdGllczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYXNoZmxvdzogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9ob3VybHlSYXRlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3NoYXJwZVJhdGlvOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIHRyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBsaWFiaWxpdHlTZXJ2aWNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuICAgIHByaXZhdGUgbW9udGhseVNuYXBzaG90U2VydmljZTogTW9udGhseVNuYXBzaG90U2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmFzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubW9udGhseVNuYXBzaG90U2VydmljZSA9IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVGaW5hbmNpYWxzKCk7XG4gICAgfVxuXG4gICAgZ2V0IG5ldFdvcnRoRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9uZXRXb3J0aCk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsSW5jb21lRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl90b3RhbEluY29tZSk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsRXhwZW5zZXNGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX3RvdGFsRXhwZW5zZXMpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbEFzc2V0c0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fdG90YWxBc3NldHMpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl90b3RhbExpYWJpbGl0aWVzKTtcbiAgICB9XG5cbiAgICBnZXQgY2FzaGZsb3dGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX2Nhc2hmbG93KTtcbiAgICB9XG5cbiAgICBnZXQgaG91cmx5UmF0ZUZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3koTWF0aC5yb3VuZCh0aGlzLl9ob3VybHlSYXRlICogMTAwKSAvIDEwMCk7XG4gICAgfVxuXG4gICAgZ2V0IGNhc2hmbG93KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXNoZmxvdztcbiAgICB9XG5cbiAgICBnZXQgc2hhcnBlUmF0aW9Gb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NoYXJwZVJhdGlvICE9PSBudWxsIFxuICAgICAgICAgICAgPyBmb3JtYXRQZXJjZW50YWdlKHRoaXMuX3NoYXJwZVJhdGlvLCBmYWxzZSlcbiAgICAgICAgICAgIDogJ04vQSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVGaW5hbmNpYWxzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRvdGFsc1xuICAgICAgICAgICAgdGhpcy5fdG90YWxBc3NldHMgPSB0aGlzLmFzc2V0U2VydmljZS5nZXRUb3RhbEFzc2V0VmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsTGlhYmlsaXRpZXMgPSB0aGlzLmxpYWJpbGl0eVNlcnZpY2UuZ2V0VG90YWxMaWFiaWxpdGllcygpO1xuICAgICAgICAgICAgdGhpcy5fdG90YWxJbmNvbWUgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRUb3RhbEluY29tZSgpO1xuICAgICAgICAgICAgdGhpcy5fdG90YWxFeHBlbnNlcyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRvdGFsRXhwZW5zZXMoKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldCB3b3J0aFxuICAgICAgICAgICAgdGhpcy5fbmV0V29ydGggPSB0aGlzLl90b3RhbEFzc2V0cyAtIHRoaXMuX3RvdGFsTGlhYmlsaXRpZXM7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtb250aGx5IGNhc2hmbG93XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgY29uc3QgbW9udGhseVRyYW5zYWN0aW9ucyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldE1vbnRobHlUcmFuc2FjdGlvbnMoY3VycmVudE1vbnRoLCBjdXJyZW50WWVhcik7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vbnRobHlJbmNvbWUgPSBtb250aGx5VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2luY29tZScpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vbnRobHlFeHBlbnNlcyA9IG1vbnRobHlUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnZXhwZW5zZScpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2Nhc2hmbG93ID0gbW9udGhseUluY29tZSAtIG1vbnRobHlFeHBlbnNlcztcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGhvdXJseSByYXRlXG4gICAgICAgICAgICBjb25zdCB0b3RhbFRpbWVSZXF1aXJlZCA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRvdGFsVGltZVJlcXVpcmVkKCk7XG4gICAgICAgICAgICB0aGlzLl9ob3VybHlSYXRlID0gdG90YWxUaW1lUmVxdWlyZWQgPiAwID8gdGhpcy5fdG90YWxJbmNvbWUgLyB0b3RhbFRpbWVSZXF1aXJlZCA6IDA7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBTaGFycGUgUmF0aW9cbiAgICAgICAgICAgIHRoaXMuX3NoYXJwZVJhdGlvID0gdGhpcy5tb250aGx5U25hcHNob3RTZXJ2aWNlLmNhbGN1bGF0ZVNoYXJwZVJhdGlvKCk7XG5cbiAgICAgICAgICAgIC8vIE5vdGlmeSBhbGwgcHJvcGVydHkgY2hhbmdlc1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0V29ydGhGb3JtYXR0ZWQnLCB0aGlzLm5ldFdvcnRoRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsSW5jb21lRm9ybWF0dGVkJywgdGhpcy50b3RhbEluY29tZUZvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbEV4cGVuc2VzRm9ybWF0dGVkJywgdGhpcy50b3RhbEV4cGVuc2VzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsQXNzZXRzRm9ybWF0dGVkJywgdGhpcy50b3RhbEFzc2V0c0Zvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkJywgdGhpcy50b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhc2hmbG93Rm9ybWF0dGVkJywgdGhpcy5jYXNoZmxvd0Zvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYXNoZmxvdycsIHRoaXMuY2FzaGZsb3cpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaG91cmx5UmF0ZUZvcm1hdHRlZCcsIHRoaXMuaG91cmx5UmF0ZUZvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzaGFycGVSYXRpb0Zvcm1hdHRlZCcsIHRoaXMuc2hhcnBlUmF0aW9Gb3JtYXR0ZWQpO1xuXG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnRmluYW5jaWFsIGNhbGN1bGF0aW9ucyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgY2FsY3VsYXRpbmcgZmluYW5jaWFscycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IExpYWJpbGl0eSwgTGlhYmlsaXR5VHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBZGRMaWFiaWxpdHlWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkTGlhYmlsaXR5Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfYW1vdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2ludGVyZXN0UmF0ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZFR5cGVJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF90eXBlczogTGlhYmlsaXR5VHlwZVtdID0gWydMb2FuJywgJ0RlYnQvUGF5YWJsZSddO1xuICAgIHByaXZhdGUgX2xpYWJpbGl0eVNlcnZpY2U6IExpYWJpbGl0eVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXhpc3RpbmdMaWFiaWxpdHk/OiBMaWFiaWxpdHk7XG5cbiAgICBjb25zdHJ1Y3RvcihleGlzdGluZ0xpYWJpbGl0eT86IExpYWJpbGl0eSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlID0gTGlhYmlsaXR5U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9leGlzdGluZ0xpYWJpbGl0eSA9IGV4aXN0aW5nTGlhYmlsaXR5O1xuXG4gICAgICAgIGlmIChleGlzdGluZ0xpYWJpbGl0eSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nTGlhYmlsaXR5KGV4aXN0aW5nTGlhYmlsaXR5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ0xpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbGlhYmlsaXR5Lm5hbWU7XG4gICAgICAgIHRoaXMuX2Ftb3VudCA9IGxpYWJpbGl0eS5hbW91bnQ7XG4gICAgICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IGxpYWJpbGl0eS5pbnRlcmVzdFJhdGU7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVHlwZUluZGV4ID0gdGhpcy5fdHlwZXMuaW5kZXhPZihsaWFiaWxpdHkudHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBhbW91bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2Ftb3VudDsgfVxuICAgIHNldCBhbW91bnQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5fYW1vdW50ICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Ftb3VudCA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Ftb3VudCcsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaW50ZXJlc3RSYXRlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9pbnRlcmVzdFJhdGU7IH1cbiAgICBzZXQgaW50ZXJlc3RSYXRlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIHRoaXMuX2ludGVyZXN0UmF0ZSAhPT0gbnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcmVzdFJhdGUgPSBudW1lcmljVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpbnRlcmVzdFJhdGUnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHR5cGVzKCk6IExpYWJpbGl0eVR5cGVbXSB7IHJldHVybiB0aGlzLl90eXBlczsgfVxuICAgIGdldCBzZWxlY3RlZFR5cGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXg7IH1cbiAgICBzZXQgc2VsZWN0ZWRUeXBlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZFR5cGVJbmRleCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRUeXBlSW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWFiaWxpdHkgbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5fYW1vdW50KSB8fCB0aGlzLl9hbW91bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGlhYmlsaXR5IGFtb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLl9pbnRlcmVzdFJhdGUpIHx8IHRoaXMuX2ludGVyZXN0UmF0ZSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVyZXN0IHJhdGUgbXVzdCBiZSAwIG9yIGdyZWF0ZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlhYmlsaXR5ID0gbmV3IExpYWJpbGl0eSh7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5ICYmIHsgaWQ6IHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5LmlkIH0pLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUudHJpbSgpLFxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5fYW1vdW50LFxuICAgICAgICAgICAgICAgIGludGVyZXN0UmF0ZTogdGhpcy5faW50ZXJlc3RSYXRlLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuX3R5cGVzW3RoaXMuX3NlbGVjdGVkVHlwZUluZGV4XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGlzdGluZ0xpYWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UudXBkYXRlTGlhYmlsaXR5KGxpYWJpbGl0eSk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSB1cGRhdGVkIGxpYWJpbGl0eTogJHtsaWFiaWxpdHkubmFtZX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGlhYmlsaXR5U2VydmljZS5hZGRMaWFiaWxpdHkobGlhYmlsaXR5KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IGFkZGVkIGxpYWJpbGl0eTogJHtsaWFiaWxpdHkubmFtZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBzYXZpbmcgbGlhYmlsaXR5JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTGlhYmlsaXR5LCBMaWFiaWxpdHlUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xpYWJpbGl0eSc7XG5pbXBvcnQgeyBDaGFydENvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBEb251dENoYXJ0RGF0YSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hhcnRzL2RvbnV0LWNoYXJ0JztcblxuZXhwb3J0IGNsYXNzIExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2NoYXJ0RGF0YTogRG9udXRDaGFydERhdGFbXSA9IFtdO1xuXG4gICAgZ2V0IGNoYXJ0RGF0YSgpOiBEb251dENoYXJ0RGF0YVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYXJ0RGF0YTtcbiAgICB9XG5cbiAgICB1cGRhdGVEYXRhKGxpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0b3RhbCA9IGxpYWJpbGl0aWVzLnJlZHVjZSgoc3VtLCBsaWFiaWxpdHkpID0+IHN1bSArIGxpYWJpbGl0eS5hbW91bnQsIDApO1xuICAgICAgICBcbiAgICAgICAgLy8gR3JvdXAgbGlhYmlsaXRpZXMgYnkgdHlwZVxuICAgICAgICBjb25zdCB0eXBlTWFwID0gbmV3IE1hcDxMaWFiaWxpdHlUeXBlLCBudW1iZXI+KCk7XG4gICAgICAgIGxpYWJpbGl0aWVzLmZvckVhY2gobGlhYmlsaXR5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0eXBlTWFwLmdldChsaWFiaWxpdHkudHlwZSkgfHwgMDtcbiAgICAgICAgICAgIHR5cGVNYXAuc2V0KGxpYWJpbGl0eS50eXBlLCBjdXJyZW50ICsgbGlhYmlsaXR5LmFtb3VudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gY2hhcnQgZGF0YVxuICAgICAgICB0aGlzLl9jaGFydERhdGEgPSBBcnJheS5mcm9tKHR5cGVNYXAuZW50cmllcygpKVxuICAgICAgICAgICAgLm1hcCgoW3R5cGUsIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdHlwZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogdHlwZSA9PT0gJ0RlYnQvUGF5YWJsZScgPyBDaGFydENvbG9ycy5TaG9ydFRlcm0gOiBDaGFydENvbG9ycy5Mb25nVGVybSxcbiAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiB0b3RhbCA+IDAgPyBNYXRoLnJvdW5kKCh2YWx1ZSAvIHRvdGFsKSAqIDEwMCkgOiAwXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnZhbHVlIC0gYS52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnY2hhcnREYXRhJywgdGhpcy5fY2hhcnREYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVZpZXdNb2RlbCB9IGZyb20gJy4uL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMaWFiaWxpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlhYmlsaXR5JztcbmltcG9ydCB7IExpYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0UGVyY2VudGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHNob3dEaWFsb2csIENvbmZpcm1EaWFsb2dPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBMaWFiaWxpdHlEaXN0cmlidXRpb25WaWV3TW9kZWwgfSBmcm9tICcuL2xpYWJpbGl0eS1kaXN0cmlidXRpb24tdmlldy1tb2RlbCc7XG5cbmNvbnN0IFRBRyA9ICdMaWFiaWxpdHlMaXN0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIExpYWJpbGl0eUxpc3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9saWFiaWxpdHlTZXJ2aWNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2xpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXSA9IFtdO1xuICAgIHByaXZhdGUgX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDogTGlhYmlsaXR5RGlzdHJpYnV0aW9uVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbCA9IG5ldyBMaWFiaWxpdHlEaXN0cmlidXRpb25WaWV3TW9kZWwoKTtcbiAgICAgICAgdGhpcy5sb2FkTGlhYmlsaXRpZXMoKTtcbiAgICB9XG5cbiAgICBnZXQgbGlhYmlsaXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saWFiaWxpdGllcy5tYXAobGlhYmlsaXR5ID0+ICh7XG4gICAgICAgICAgICAuLi5saWFiaWxpdHksXG4gICAgICAgICAgICBmb3JtYXR0ZWRBbW91bnQ6IGZvcm1hdEN1cnJlbmN5KGxpYWJpbGl0eS5hbW91bnQpLFxuICAgICAgICAgICAgZm9ybWF0dGVkSW50ZXJlc3RSYXRlOiBmb3JtYXRQZXJjZW50YWdlKGxpYWJpbGl0eS5pbnRlcmVzdFJhdGUpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxMaWFiaWxpdGllc0Zvcm1hdHRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UuZ2V0VG90YWxMaWFiaWxpdGllcygpKTtcbiAgICB9XG5cbiAgICBnZXQgZGlzdHJpYnV0aW9uVmlld01vZGVsKCk6IExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWw7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1JlZnJlc2hpbmcgbGlhYmlsaXRpZXMgbGlzdCcpO1xuICAgICAgICB0aGlzLmxvYWRMaWFiaWxpdGllcygpO1xuICAgIH1cblxuICAgIG9uQWRkTGlhYmlsaXR5KCk6IHZvaWQge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZVwiKTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogeyBpbmRleDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGlhYmlsaXR5ID0gdGhpcy5fbGlhYmlsaXRpZXNbYXJncy5pbmRleF07XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6IGxpYWJpbGl0eS5uYW1lLFxuICAgICAgICAgICAgbWVzc2FnZTogYEFtb3VudDogJHtmb3JtYXRDdXJyZW5jeShsaWFiaWxpdHkuYW1vdW50KX1cXG5JbnRlcmVzdCBSYXRlOiAke2Zvcm1hdFBlcmNlbnRhZ2UobGlhYmlsaXR5LmludGVyZXN0UmF0ZSl9YCxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAnZWRpdCcsIHRleHQ6ICdFZGl0JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdkZWxldGUnLCB0ZXh0OiAnRGVsZXRlJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdExpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVMaWFiaWxpdHkobGlhYmlsaXR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkTGlhYmlsaXRpZXMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9saWFiaWxpdGllcyA9IHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UuZ2V0TGlhYmlsaXRpZXMoKTtcbiAgICAgICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbC51cGRhdGVEYXRhKHRoaXMuX2xpYWJpbGl0aWVzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2xpYWJpbGl0aWVzJywgdGhpcy5saWFiaWxpdGllcyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkJywgdGhpcy50b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBMb2FkZWQgJHt0aGlzLl9saWFiaWxpdGllcy5sZW5ndGh9IGxpYWJpbGl0aWVzYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgbG9hZGluZyBsaWFiaWxpdGllcycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdExpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSk6IHZvaWQge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlJywgeyBsaWFiaWxpdHkgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVMaWFiaWxpdHkobGlhYmlsaXR5OiBMaWFiaWxpdHkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgZGlhbG9nT3B0aW9uczogQ29uZmlybURpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlhYmlsaXR5PycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfTtcblxuICAgICAgICBzaG93RGlhbG9nKGRpYWxvZ09wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlLmRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHkuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZExpYWJpbGl0aWVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90IH0gZnJvbSAnLi4vbW9kZWxzL21vbnRobHktc25hcHNob3QnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21vbnRobHktc25hcHNob3Qtc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0UGVyY2VudGFnZSB9IGZyb20gJy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgc2hvd0RpYWxvZyB9IGZyb20gJy4uL3V0aWxzL2RpYWxvZyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTW9udGhseVNuYXBzaG90Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIE1vbnRobHlTbmFwc2hvdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX3NuYXBzaG90U2VydmljZTogTW9udGhseVNuYXBzaG90U2VydmljZTtcbiAgICBwcml2YXRlIF9uZXRBc3NldDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9zZWxlY3RlZFllYXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9zZWxlY3RlZE1vbnRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfeWVhcnM6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBfbW9udGhzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UgPSBNb250aGx5U25hcHNob3RTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVllYXJzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplWWVhcnMoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLl95ZWFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGkpID0+IGN1cnJlbnRZZWFyIC0gMiArIGkpO1xuICAgIH1cblxuICAgIGdldCBuZXRBc3NldCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fbmV0QXNzZXQ7IH1cbiAgICBzZXQgbmV0QXNzZXQodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fbmV0QXNzZXQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXRBc3NldCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0QXNzZXQnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRZZWFyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZFllYXI7IH1cbiAgICBzZXQgc2VsZWN0ZWRZZWFyKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkWWVhciAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkWWVhciA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRZZWFyJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkTW9udGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkTW9udGg7IH1cbiAgICBzZXQgc2VsZWN0ZWRNb250aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZE1vbnRoICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRNb250aCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB5ZWFycygpOiBudW1iZXJbXSB7IHJldHVybiB0aGlzLl95ZWFyczsgfVxuICAgIGdldCBtb250aHMoKTogc3RyaW5nW10geyByZXR1cm4gdGhpcy5fbW9udGhzOyB9XG5cbiAgICBnZXQgc25hcHNob3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc25hcHNob3RTZXJ2aWNlLmdldFNuYXBzaG90cygpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnllYXIgIT09IGIueWVhcikgcmV0dXJuIGIueWVhciAtIGEueWVhcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5tb250aCAtIGEubW9udGg7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChzbmFwc2hvdCA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnNuYXBzaG90LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGAke3RoaXMuX21vbnRoc1tzbmFwc2hvdC5tb250aF19ICR7c25hcHNob3QueWVhcn1gLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZE5ldEFzc2V0OiBmb3JtYXRDdXJyZW5jeShzbmFwc2hvdC5uZXRBc3NldCksXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUGVyY2VudGFnZUNoYW5nZTogc25hcHNob3QucGVyY2VudGFnZUNoYW5nZSBcbiAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXRQZXJjZW50YWdlKHNuYXBzaG90LnBlcmNlbnRhZ2VDaGFuZ2UpXG4gICAgICAgICAgICAgICAgICAgIDogJ04vQSdcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmV0QXNzZXQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0IGFzc2V0IHZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc25hcHNob3QgYWxyZWFkeSBleGlzdHMgZm9yIHNlbGVjdGVkIG1vbnRoL3llYXJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5fc25hcHNob3RTZXJ2aWNlLmdldFNuYXBzaG90cygpLmZpbmQoXG4gICAgICAgICAgICAgICAgcyA9PiBzLnllYXIgPT09IHRoaXMuX3NlbGVjdGVkWWVhciAmJiBzLm1vbnRoID09PSB0aGlzLl9zZWxlY3RlZE1vbnRoXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTbmFwc2hvdCBFeGlzdHMnLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQSBzbmFwc2hvdCBhbHJlYWR5IGV4aXN0cyBmb3IgdGhpcyBtb250aC4gRG8geW91IHdhbnQgdG8gdXBkYXRlIGl0PycsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ1VwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgICAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5uZXRBc3NldCA9IHRoaXMuX25ldEFzc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlLnVwZGF0ZVNuYXBzaG90KGV4aXN0aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IE1vbnRobHlTbmFwc2hvdCh7XG4gICAgICAgICAgICAgICAgeWVhcjogdGhpcy5fc2VsZWN0ZWRZZWFyLFxuICAgICAgICAgICAgICAgIG1vbnRoOiB0aGlzLl9zZWxlY3RlZE1vbnRoLFxuICAgICAgICAgICAgICAgIG5ldEFzc2V0OiB0aGlzLl9uZXRBc3NldFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZS5hZGRTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N1Y2Nlc3NmdWxseSBzYXZlZCBzbmFwc2hvdCcpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIHNhdmluZyBzbmFwc2hvdCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSkge1xuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IHRoaXMuX3NuYXBzaG90U2VydmljZS5nZXRTbmFwc2hvdHMoKVthcmdzLmluZGV4XTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogYCR7dGhpcy5fbW9udGhzW3NuYXBzaG90Lm1vbnRoXX0gJHtzbmFwc2hvdC55ZWFyfWAsXG4gICAgICAgICAgICBtZXNzYWdlOiBgTmV0IEFzc2V0OiAke2Zvcm1hdEN1cnJlbmN5KHNuYXBzaG90Lm5ldEFzc2V0KX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0U25hcHNob3Qoc25hcHNob3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdFNuYXBzaG90KHNuYXBzaG90OiBNb250aGx5U25hcHNob3QpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyID0gc25hcHNob3QueWVhcjtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IHNuYXBzaG90Lm1vbnRoO1xuICAgICAgICB0aGlzLl9uZXRBc3NldCA9IHNuYXBzaG90Lm5ldEFzc2V0O1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZFllYXInLCB0aGlzLl9zZWxlY3RlZFllYXIpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZE1vbnRoJywgdGhpcy5fc2VsZWN0ZWRNb250aCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25ldEFzc2V0JywgdGhpcy5fbmV0QXNzZXQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlU25hcHNob3Qoc25hcHNob3Q6IE1vbnRobHlTbmFwc2hvdCkge1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBzbmFwc2hvdD8nLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZGVsZXRlU25hcHNob3Qoc25hcHNob3QuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NuYXBzaG90cycsIHRoaXMuc25hcHNob3RzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNldEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMuX25ldEFzc2V0ID0gMDtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRZZWFyJywgdGhpcy5fc2VsZWN0ZWRZZWFyKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRNb250aCcsIHRoaXMuX3NlbGVjdGVkTW9udGgpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduZXRBc3NldCcsIHRoaXMuX25ldEFzc2V0KTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc25hcHNob3RzJywgdGhpcy5zbmFwc2hvdHMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IE1vbnRobHlTbmFwc2hvdCB9IGZyb20gJy4uLy4uL21vZGVscy9tb250aGx5LXNuYXBzaG90JztcbmltcG9ydCB7IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRCdXNTZXJ2aWNlLCBFdmVudE5hbWVzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQtYnVzLXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZFNuYXBzaG90Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEFkZFNuYXBzaG90Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfbmV0QXNzZXQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfeWVhckluZGV4OiBudW1iZXIgPSAyOyAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgeWVhciAobWlkZGxlIG9mIHRoZSA1LXllYXIgcmFuZ2UpXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRNb250aDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3llYXJzOiBudW1iZXJbXSA9IFtdO1xuICAgIHByaXZhdGUgX21vbnRoczogc3RyaW5nW10gPSBbXG4gICAgICAgICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuICAgIF07XG4gICAgcHJpdmF0ZSBfc25hcHNob3RTZXJ2aWNlOiBNb250aGx5U25hcHNob3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2V2ZW50QnVzOiBFdmVudEJ1c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXhpc3RpbmdTbmFwc2hvdD86IE1vbnRobHlTbmFwc2hvdDtcblxuICAgIGNvbnN0cnVjdG9yKGV4aXN0aW5nU25hcHNob3Q/OiBNb250aGx5U25hcHNob3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlID0gTW9udGhseVNuYXBzaG90U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9ldmVudEJ1cyA9IEV2ZW50QnVzU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9leGlzdGluZ1NuYXBzaG90ID0gZXhpc3RpbmdTbmFwc2hvdDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRNb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmluaXRpYWxpemVZZWFycygpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGV4aXN0aW5nU25hcHNob3QpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ1NuYXBzaG90KGV4aXN0aW5nU25hcHNob3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG5ldEFzc2V0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9uZXRBc3NldDsgfVxuICAgIHNldCBuZXRBc3NldCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpY1ZhbHVlKSAmJiB0aGlzLl9uZXRBc3NldCAhPT0gbnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXRBc3NldCA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25ldEFzc2V0JywgbnVtZXJpY1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB5ZWFySW5kZXgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3llYXJJbmRleDsgfVxuICAgIHNldCB5ZWFySW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5feWVhckluZGV4ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5feWVhckluZGV4ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd5ZWFySW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRZZWFyKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl95ZWFyc1t0aGlzLl95ZWFySW5kZXhdOyB9XG5cbiAgICBnZXQgc2VsZWN0ZWRNb250aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRNb250aDsgfVxuICAgIHNldCBzZWxlY3RlZE1vbnRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkTW9udGggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZE1vbnRoJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHllYXJzKCk6IG51bWJlcltdIHsgcmV0dXJuIHRoaXMuX3llYXJzOyB9XG4gICAgZ2V0IG1vbnRocygpOiBzdHJpbmdbXSB7IHJldHVybiB0aGlzLl9tb250aHM7IH1cbiAgICBnZXQgaXNFZGl0aW5nKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLl9leGlzdGluZ1NuYXBzaG90OyB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVZZWFycygpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMuX3llYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gY3VycmVudFllYXIgLSAyICsgaSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplV2l0aEV4aXN0aW5nU25hcHNob3Qoc25hcHNob3Q6IE1vbnRobHlTbmFwc2hvdCkge1xuICAgICAgICB0aGlzLl9uZXRBc3NldCA9IHNuYXBzaG90Lm5ldEFzc2V0O1xuICAgICAgICB0aGlzLl95ZWFySW5kZXggPSB0aGlzLl95ZWFycy5pbmRleE9mKHNuYXBzaG90LnllYXIpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gc25hcHNob3QubW9udGg7XG4gICAgfVxuXG4gICAgb25TYXZlKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX25ldEFzc2V0IDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldCBhc3NldCB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNuYXBzaG90ID0gbmV3IE1vbnRobHlTbmFwc2hvdCh7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nU25hcHNob3QgJiYgeyBpZDogdGhpcy5fZXhpc3RpbmdTbmFwc2hvdC5pZCB9KSxcbiAgICAgICAgICAgICAgICB5ZWFyOiB0aGlzLnNlbGVjdGVkWWVhcixcbiAgICAgICAgICAgICAgICBtb250aDogdGhpcy5fc2VsZWN0ZWRNb250aCxcbiAgICAgICAgICAgICAgICBuZXRBc3NldDogdGhpcy5fbmV0QXNzZXRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZXhpc3RpbmdTbmFwc2hvdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZS51cGRhdGVTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSB1cGRhdGVkIHNuYXBzaG90IGZvciAke3RoaXMuX21vbnRoc1t0aGlzLl9zZWxlY3RlZE1vbnRoXX0gJHt0aGlzLnNlbGVjdGVkWWVhcn1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlLmFkZFNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IGFkZGVkIHNuYXBzaG90IGZvciAke3RoaXMuX21vbnRoc1t0aGlzLl9zZWxlY3RlZE1vbnRoXX0gJHt0aGlzLnNlbGVjdGVkWWVhcn1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRW1pdCBldmVudCBiZWZvcmUgbmF2aWdhdGluZyBiYWNrXG4gICAgICAgICAgICB0aGlzLl9ldmVudEJ1cy5lbWl0KEV2ZW50TmFtZXMuU05BUFNIT1RfVVBEQVRFRCk7XG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIHNhdmluZyBzbmFwc2hvdCcsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IE1vbnRobHlTbmFwc2hvdCB9IGZyb20gJy4uLy4uL21vZGVscy9tb250aGx5LXNuYXBzaG90JztcbmltcG9ydCB7IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRCdXNTZXJ2aWNlLCBFdmVudE5hbWVzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQtYnVzLXNlcnZpY2UnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3ksIGZvcm1hdFBlcmNlbnRhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXR0ZXJzJztcbmltcG9ydCB7IG5hdmlnYXRlVG9QYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBzaG93RGlhbG9nIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdNb250aGx5U25hcHNob3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhseVNuYXBzaG90Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfc25hcHNob3RTZXJ2aWNlOiBNb250aGx5U25hcHNob3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2V2ZW50QnVzOiBFdmVudEJ1c1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBfc25hcHNob3RzOiBNb250aGx5U25hcHNob3RbXSA9IFtdO1xuICAgIHByaXZhdGUgX21vbnRoczogc3RyaW5nW10gPSBbXG4gICAgICAgICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlID0gTW9udGhseVNuYXBzaG90U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9ldmVudEJ1cyA9IEV2ZW50QnVzU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gTGlzdGVuIGZvciBzbmFwc2hvdCB1cGRhdGVzXG4gICAgICAgIHRoaXMuX2V2ZW50QnVzLm9uKEV2ZW50TmFtZXMuU05BUFNIT1RfVVBEQVRFRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkU25hcHNob3RzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5sb2FkU25hcHNob3RzKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNuYXBzaG90cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NuYXBzaG90c1xuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYS55ZWFyICE9PSBiLnllYXIpIHJldHVybiBiLnllYXIgLSBhLnllYXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIubW9udGggLSBhLm1vbnRoO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoc25hcHNob3QgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5zbmFwc2hvdCxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBgJHt0aGlzLl9tb250aHNbc25hcHNob3QubW9udGhdfSAke3NuYXBzaG90LnllYXJ9YCxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWROZXRBc3NldDogZm9ybWF0Q3VycmVuY3koc25hcHNob3QubmV0QXNzZXQpLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFBlcmNlbnRhZ2VDaGFuZ2U6IHNuYXBzaG90LnBlcmNlbnRhZ2VDaGFuZ2UgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdFBlcmNlbnRhZ2Uoc25hcHNob3QucGVyY2VudGFnZUNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgOiAnTi9BJ1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdSZWZyZXNoaW5nIHNuYXBzaG90cycpO1xuICAgICAgICB0aGlzLmxvYWRTbmFwc2hvdHMoKTtcbiAgICB9XG5cbiAgICBvbkFkZFNuYXBzaG90KCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBBZGQgU25hcHNob3QgcGFnZScpO1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZScpO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSk6IHZvaWQge1xuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IHRoaXMuX3NuYXBzaG90c1thcmdzLmluZGV4XTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogYCR7dGhpcy5fbW9udGhzW3NuYXBzaG90Lm1vbnRoXX0gJHtzbmFwc2hvdC55ZWFyfWAsXG4gICAgICAgICAgICBtZXNzYWdlOiBgTmV0IEFzc2V0OiAke2Zvcm1hdEN1cnJlbmN5KHNuYXBzaG90Lm5ldEFzc2V0KX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0U25hcHNob3Qoc25hcHNob3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uVW5sb2FkZWQoKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdDbGVhbmluZyB1cCBldmVudCBsaXN0ZW5lcnMnKTtcbiAgICAgICAgdGhpcy5fZXZlbnRCdXMub2ZmKEV2ZW50TmFtZXMuU05BUFNIT1RfVVBEQVRFRCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkU25hcHNob3RzKCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fc25hcHNob3RzID0gdGhpcy5fc25hcHNob3RTZXJ2aWNlLmdldFNuYXBzaG90cygpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc25hcHNob3RzJywgdGhpcy5zbmFwc2hvdHMpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYExvYWRlZCAke3RoaXMuX3NuYXBzaG90cy5sZW5ndGh9IHNuYXBzaG90c2ApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGxvYWRpbmcgc25hcHNob3RzJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0U25hcHNob3Qoc25hcHNob3Q6IE1vbnRobHlTbmFwc2hvdCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgRWRpdGluZyBzbmFwc2hvdDogJHtzbmFwc2hvdC5pZH1gKTtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UnLCB7IHNuYXBzaG90IH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlU25hcHNob3Qoc25hcHNob3Q6IE1vbnRobHlTbmFwc2hvdCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgRGVsZXRpbmcgc25hcHNob3Q6ICR7c25hcHNob3QuaWR9YCk7XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtIERlbGV0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHNuYXBzaG90PycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZS5kZWxldGVTbmFwc2hvdChzbmFwc2hvdC5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU25hcHNob3RzKCk7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFNuYXBzaG90IGRlbGV0ZWQ6ICR7c25hcHNob3QuaWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFJlcG9ydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9yZXBvcnQtc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0UGVyY2VudGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuXG5leHBvcnQgY2xhc3MgRmluYW5jaWFsSGVhbHRoVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfcmVwb3J0U2VydmljZTogUmVwb3J0U2VydmljZTtcbiAgICBwcml2YXRlIF9yZXBvcnQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9yZXBvcnRTZXJ2aWNlID0gUmVwb3J0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxvYWRSZXBvcnQoKTtcbiAgICB9XG5cbiAgICBnZXQgbmV0V29ydGhGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX3JlcG9ydC5uZXRXb3J0aCk7XG4gICAgfVxuXG4gICAgZ2V0IG1vbnRobHlDYXNoZmxvd0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fcmVwb3J0Lm1vbnRobHlDYXNoZmxvdyk7XG4gICAgfVxuXG4gICAgZ2V0IGRlYnRUb0luY29tZVJhdGlvRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRQZXJjZW50YWdlKHRoaXMuX3JlcG9ydC5kZWJ0VG9JbmNvbWVSYXRpbyAqIDEwMCk7XG4gICAgfVxuXG4gICAgZ2V0IG1vbnRobHlSZXBvcnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVwb3J0Lm1vbnRobHlSZXBvcnRzLm1hcChyZXBvcnQgPT4gKHtcbiAgICAgICAgICAgIC4uLnJlcG9ydCxcbiAgICAgICAgICAgIG1vbnRoWWVhcjogYCR7bmV3IERhdGUocmVwb3J0LnllYXIsIHJlcG9ydC5tb250aCkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnc2hvcnQnLCB5ZWFyOiAnbnVtZXJpYycgfSl9YCxcbiAgICAgICAgICAgIGluY29tZUZvcm1hdHRlZDogZm9ybWF0Q3VycmVuY3kocmVwb3J0LmluY29tZSksXG4gICAgICAgICAgICBleHBlbnNlc0Zvcm1hdHRlZDogZm9ybWF0Q3VycmVuY3kocmVwb3J0LmV4cGVuc2VzKSxcbiAgICAgICAgICAgIHNhdmluZ3NSYXRlRm9ybWF0dGVkOiBmb3JtYXRQZXJjZW50YWdlKHJlcG9ydC5zYXZpbmdzUmF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFJlcG9ydCgpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0ID0gdGhpcy5fcmVwb3J0U2VydmljZS5nZW5lcmF0ZUZpbmFuY2lhbEhlYWx0aFJlcG9ydCgpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdtb250aGx5UmVwb3J0cycsIHRoaXMubW9udGhseVJlcG9ydHMpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvblR5cGUsIFRyYW5zYWN0aW9uQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQWRkVHJhbnNhY3Rpb25WaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkVHJhbnNhY3Rpb25WaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9kZXNjcmlwdGlvbjogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfYW1vdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF90aW1lUmVxdWlyZWQ6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBfY2F0ZWdvcmllczogVHJhbnNhY3Rpb25DYXRlZ29yeVtdID0gW107XG4gICAgcHJpdmF0ZSBfaXNJbmNvbWU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBfdHJhbnNhY3Rpb25TZXJ2aWNlOiBUcmFuc2FjdGlvblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXhpc3RpbmdUcmFuc2FjdGlvbj86IFRyYW5zYWN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoaXNJbmNvbWU6IGJvb2xlYW4sIGV4aXN0aW5nVHJhbnNhY3Rpb24/OiBUcmFuc2FjdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9pc0luY29tZSA9IGlzSW5jb21lO1xuICAgICAgICB0aGlzLl9leGlzdGluZ1RyYW5zYWN0aW9uID0gZXhpc3RpbmdUcmFuc2FjdGlvbjtcbiAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlID0gVHJhbnNhY3Rpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMgPSB0aGlzLmdldENhdGVnb3JpZXMoKTtcblxuICAgICAgICBpZiAoZXhpc3RpbmdUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nVHJhbnNhY3Rpb24oZXhpc3RpbmdUcmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVXaXRoRXhpc3RpbmdUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5fYW1vdW50ID0gTnVtYmVyKHRyYW5zYWN0aW9uLmFtb3VudCk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IHRoaXMuX2NhdGVnb3JpZXMuaW5kZXhPZih0cmFuc2FjdGlvbi5jYXRlZ29yeSk7XG4gICAgICAgIGlmICh0cmFuc2FjdGlvbi50eXBlID09PSAnaW5jb21lJykge1xuICAgICAgICAgICAgdGhpcy5fdGltZVJlcXVpcmVkID0gdHJhbnNhY3Rpb24udGltZVJlcXVpcmVkIHx8IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uOyB9XG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rlc2NyaXB0aW9uICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Rlc2NyaXB0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGFtb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fYW1vdW50OyB9XG4gICAgc2V0IGFtb3VudCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpY1ZhbHVlKSAmJiB0aGlzLl9hbW91bnQgIT09IG51bWVyaWNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYW1vdW50ID0gbnVtZXJpY1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnYW1vdW50JywgbnVtZXJpY1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB0aW1lUmVxdWlyZWQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3RpbWVSZXF1aXJlZDsgfVxuICAgIHNldCB0aW1lUmVxdWlyZWQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgbnVtZXJpY1ZhbHVlID4gMCAmJiB0aGlzLl90aW1lUmVxdWlyZWQgIT09IG51bWVyaWNWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGltZVJlcXVpcmVkID0gbnVtZXJpY1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndGltZVJlcXVpcmVkJywgbnVtZXJpY1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjYXRlZ29yaWVzKCk6IFRyYW5zYWN0aW9uQ2F0ZWdvcnlbXSB7IHJldHVybiB0aGlzLl9jYXRlZ29yaWVzOyB9XG4gICAgZ2V0IHNlbGVjdGVkQ2F0ZWdvcnlJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4OyB9XG4gICAgc2V0IHNlbGVjdGVkQ2F0ZWdvcnlJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpc0luY29tZSgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2lzSW5jb21lOyB9XG5cbiAgICBwcml2YXRlIGdldENhdGVnb3JpZXMoKTogVHJhbnNhY3Rpb25DYXRlZ29yeVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW5jb21lIFxuICAgICAgICAgICAgPyBbJ1NhbGFyeScsICdCdXNpbmVzcycsICdSZW50JywgJ0ludGVyZXN0JywgJ1JveWFsdGllcyddXG4gICAgICAgICAgICA6IFsnQ29uc3VtZXIgYmFza2V0JywgJ0hhYml0cycsICdDYXInLCAnUm91dGluZScsICdIb3VzaW5nJywgJ0NyZWRpdCBDYXJkL0xvYW4nXTtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nVHJhbnNhY3Rpb24gJiYgeyBpZDogdGhpcy5fZXhpc3RpbmdUcmFuc2FjdGlvbi5pZCB9KSxcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLl9pc0luY29tZSA/ICdpbmNvbWUnIDogJ2V4cGVuc2UnLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLl9jYXRlZ29yaWVzW3RoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleF0sXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLl9hbW91bnQsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuX2Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHRpbWVSZXF1aXJlZDogdGhpcy5faXNJbmNvbWUgPyB0aGlzLl90aW1lUmVxdWlyZWQgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZXhpc3RpbmdUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS51cGRhdGVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYFN1Y2Nlc3NmdWxseSB1cGRhdGVkICR7dGhpcy5faXNJbmNvbWUgPyAnaW5jb21lJyA6ICdleHBlbnNlJ30gdHJhbnNhY3Rpb25gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmFkZFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IGFkZGVkICR7dGhpcy5faXNJbmNvbWUgPyAnaW5jb21lJyA6ICdleHBlbnNlJ30gdHJhbnNhY3Rpb25gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBzYXZpbmcgdHJhbnNhY3Rpb24nLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbiwgVHJhbnNhY3Rpb25DYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBDaGFydENvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBEb251dENoYXJ0RGF0YSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hhcnRzL2RvbnV0LWNoYXJ0JztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uRGlzdHJpYnV0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfY2hhcnREYXRhOiBEb251dENoYXJ0RGF0YVtdID0gW107XG5cbiAgICBnZXQgY2hhcnREYXRhKCk6IERvbnV0Q2hhcnREYXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhcnREYXRhO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEodHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdLCB0eXBlOiAnaW5jb21lJyB8ICdleHBlbnNlJyk6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZFRyYW5zYWN0aW9ucyA9IHRyYW5zYWN0aW9ucy5maWx0ZXIodCA9PiB0LnR5cGUgPT09IHR5cGUpO1xuICAgICAgICBjb25zdCB0b3RhbCA9IGZpbHRlcmVkVHJhbnNhY3Rpb25zLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBHcm91cCB0cmFuc2FjdGlvbnMgYnkgY2F0ZWdvcnlcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlNYXAgPSBuZXcgTWFwPFRyYW5zYWN0aW9uQ2F0ZWdvcnksIG51bWJlcj4oKTtcbiAgICAgICAgZmlsdGVyZWRUcmFuc2FjdGlvbnMuZm9yRWFjaCh0cmFuc2FjdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gY2F0ZWdvcnlNYXAuZ2V0KHRyYW5zYWN0aW9uLmNhdGVnb3J5KSB8fCAwO1xuICAgICAgICAgICAgY2F0ZWdvcnlNYXAuc2V0KHRyYW5zYWN0aW9uLmNhdGVnb3J5LCBjdXJyZW50ICsgdHJhbnNhY3Rpb24uYW1vdW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29udmVydCB0byBjaGFydCBkYXRhXG4gICAgICAgIHRoaXMuX2NoYXJ0RGF0YSA9IEFycmF5LmZyb20oY2F0ZWdvcnlNYXAuZW50cmllcygpKVxuICAgICAgICAgICAgLm1hcCgoW2NhdGVnb3J5LCB2YWx1ZV0pID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBDaGFydENvbG9yc1tjYXRlZ29yeV0gfHwgJyNDQkQ1RTAnLCAvLyBEZWZhdWx0IGNvbG9yIGlmIG5vdCBmb3VuZFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKHZhbHVlIC8gdG90YWwpICogMTAwKSA6IDBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjaGFydERhdGEnLCB0aGlzLl9jaGFydERhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXR0ZXJzJztcbmltcG9ydCB7IG5hdmlnYXRlVG9QYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBzaG93RGlhbG9nLCBDb25maXJtRGlhbG9nT3B0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL2RpYWxvZyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25EaXN0cmlidXRpb25WaWV3TW9kZWwgfSBmcm9tICcuL3RyYW5zYWN0aW9uLWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsJztcblxuY29uc3QgVEFHID0gJ1RyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbkxpc3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF90cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10gPSBbXTtcbiAgICBwcml2YXRlIF9maWx0ZXJUeXBlOiAnaW5jb21lJyB8ICdleHBlbnNlJyB8IHVuZGVmaW5lZDtcbiAgICBwcml2YXRlIF90cmFuc2FjdGlvblNlcnZpY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcml2YXRlIF9kaXN0cmlidXRpb25WaWV3TW9kZWw6IFRyYW5zYWN0aW9uRGlzdHJpYnV0aW9uVmlld01vZGVsO1xuXG4gICAgY29uc3RydWN0b3IoZmlsdGVyVHlwZT86ICdpbmNvbWUnIHwgJ2V4cGVuc2UnKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2ZpbHRlclR5cGUgPSBmaWx0ZXJUeXBlO1xuICAgICAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UgPSBUcmFuc2FjdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsID0gbmV3IFRyYW5zYWN0aW9uRGlzdHJpYnV0aW9uVmlld01vZGVsKCk7XG4gICAgICAgIHRoaXMubG9hZFRyYW5zYWN0aW9ucygpO1xuICAgIH1cblxuICAgIGdldCBmaWx0ZXJUeXBlKCk6ICdpbmNvbWUnIHwgJ2V4cGVuc2UnIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpbHRlclR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IGRpc3RyaWJ1dGlvblZpZXdNb2RlbCgpOiBUcmFuc2FjdGlvbkRpc3RyaWJ1dGlvblZpZXdNb2RlbCB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWw7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQW1vdW50Rm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5fZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgXG4gICAgICAgICAgICA/IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5nZXRUb3RhbEluY29tZSgpXG4gICAgICAgICAgICA6IHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZS5nZXRUb3RhbEV4cGVuc2VzKCk7XG4gICAgICAgIHJldHVybiBgVG90YWwgJHt0aGlzLl9maWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdJbmNvbWUnIDogJ0V4cGVuc2VzJ306ICR7Zm9ybWF0Q3VycmVuY3kodG90YWwpfWA7XG4gICAgfVxuXG4gICAgZ2V0IHRyYW5zYWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGZpbHRlcmVkVHJhbnNhY3Rpb25zID0gWy4uLnRoaXMuX3RyYW5zYWN0aW9uc107XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5fZmlsdGVyVHlwZSkge1xuICAgICAgICAgICAgZmlsdGVyZWRUcmFuc2FjdGlvbnMgPSBmaWx0ZXJlZFRyYW5zYWN0aW9ucy5maWx0ZXIodCA9PiB0LnR5cGUgPT09IHRoaXMuX2ZpbHRlclR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkVHJhbnNhY3Rpb25zLm1hcCh0cmFuc2FjdGlvbiA9PiAoe1xuICAgICAgICAgICAgLi4udHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBmb3JtYXR0ZWRBbW91bnQ6IGZvcm1hdEN1cnJlbmN5KHRyYW5zYWN0aW9uLmFtb3VudCksXG4gICAgICAgICAgICBob3VybHlSYXRlRm9ybWF0dGVkOiB0cmFuc2FjdGlvbi50eXBlID09PSAnaW5jb21lJyAmJiB0cmFuc2FjdGlvbi50aW1lUmVxdWlyZWQgXG4gICAgICAgICAgICAgICAgPyBmb3JtYXRDdXJyZW5jeShNYXRoLnJvdW5kKCh0cmFuc2FjdGlvbi5hbW91bnQgLyB0cmFuc2FjdGlvbi50aW1lUmVxdWlyZWQpICogMTAwKSAvIDEwMClcbiAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnUmVmcmVzaGluZyB0cmFuc2FjdGlvbnMgbGlzdCcpO1xuICAgICAgICB0aGlzLmxvYWRUcmFuc2FjdGlvbnMoKTtcbiAgICB9XG5cbiAgICBvbkFkZFRyYW5zYWN0aW9uKCk6IHZvaWQge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlJywgeyBcbiAgICAgICAgICAgIGlzSW5jb21lOiB0aGlzLl9maWx0ZXJUeXBlID09PSAnaW5jb21lJyBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IHsgaW5kZXg6IG51bWJlciB9KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5fdHJhbnNhY3Rpb25zW2FyZ3MuaW5kZXhdO1xuICAgICAgICBjb25zdCBob3VybHlSYXRlID0gdHJhbnNhY3Rpb24udHlwZSA9PT0gJ2luY29tZScgJiYgdHJhbnNhY3Rpb24udGltZVJlcXVpcmVkXG4gICAgICAgICAgICA/IGBcXG5Ib3VybHkgUmF0ZTogJHtmb3JtYXRDdXJyZW5jeSh0cmFuc2FjdGlvbi5hbW91bnQgLyB0cmFuc2FjdGlvbi50aW1lUmVxdWlyZWQpfS9ocmBcbiAgICAgICAgICAgIDogJyc7XG4gICAgICAgICAgICBcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogdHJhbnNhY3Rpb24uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBtZXNzYWdlOiBgQW1vdW50OiAke2Zvcm1hdEN1cnJlbmN5KHRyYW5zYWN0aW9uLmFtb3VudCl9JHtob3VybHlSYXRlfWAsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgeyBpZDogJ2VkaXQnLCB0ZXh0OiAnRWRpdCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnZGVsZXRlJywgdGV4dDogJ0RlbGV0ZScgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkVHJhbnNhY3Rpb25zKCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25zID0gdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRyYW5zYWN0aW9ucygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbHRlclR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWwudXBkYXRlRGF0YSh0aGlzLl90cmFuc2FjdGlvbnMsIHRoaXMuX2ZpbHRlclR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndHJhbnNhY3Rpb25zJywgdGhpcy50cmFuc2FjdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxBbW91bnRGb3JtYXR0ZWQnLCB0aGlzLnRvdGFsQW1vdW50Rm9ybWF0dGVkKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBMb2FkZWQgJHt0aGlzLl90cmFuc2FjdGlvbnMubGVuZ3RofSB0cmFuc2FjdGlvbnNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBsb2FkaW5nIHRyYW5zYWN0aW9ucycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbik6IHZvaWQge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlJywgeyBcbiAgICAgICAgICAgIGlzSW5jb21lOiB0cmFuc2FjdGlvbi50eXBlID09PSAnaW5jb21lJyxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBkaWFsb2dPcHRpb25zOiBDb25maXJtRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0cmFuc2FjdGlvbj8nLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH07XG5cbiAgICAgICAgc2hvd0RpYWxvZyhkaWFsb2dPcHRpb25zKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmRlbGV0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmFuc2FjdGlvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQWRkQXNzZXRWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9hc3NldHMvYWRkLWFzc2V0LXZpZXctbW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBZGRBc3NldFZpZXdNb2RlbCgpO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQXNzZXRMaXN0Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvYXNzZXRzL2Fzc2V0LWxpc3Qtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQXNzZXRMaXN0UGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIEFzc2V0IExpc3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBc3NldExpc3RWaWV3TW9kZWwoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZWRUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRlZCB0byBBc3NldCBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdmlld01vZGVsID0gcGFnZS5iaW5kaW5nQ29udGV4dCBhcyBBc3NldExpc3RWaWV3TW9kZWw7XG4gICAgdmlld01vZGVsPy5yZWZyZXNoKCk7XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBZGRMaWFiaWxpdHlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXZpZXctbW9kZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBZGRMaWFiaWxpdHlWaWV3TW9kZWwoKTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IExpYWJpbGl0eUxpc3RWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdMaWFiaWxpdHlMaXN0UGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIExpYWJpbGl0eSBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgTGlhYmlsaXR5TGlzdFZpZXdNb2RlbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlZFRvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGVkIHRvIExpYWJpbGl0eSBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdmlld01vZGVsID0gcGFnZS5iaW5kaW5nQ29udGV4dCBhcyBMaWFiaWxpdHlMaXN0Vmlld01vZGVsO1xuICAgIHZpZXdNb2RlbD8ucmVmcmVzaCgpO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQWRkU25hcHNob3RWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC12aWV3LW1vZGVsJztcbmltcG9ydCB7IE1vbnRobHlTbmFwc2hvdCB9IGZyb20gJy4uLy4uL21vZGVscy9tb250aGx5LXNuYXBzaG90JztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBZGRTbmFwc2hvdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBBZGQgU25hcHNob3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCBleGlzdGluZ1NuYXBzaG90ID0gYXJncy5jb250ZXh0Py5zbmFwc2hvdCBhcyBNb250aGx5U25hcHNob3QgfCB1bmRlZmluZWQ7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBZGRTbmFwc2hvdFZpZXdNb2RlbChleGlzdGluZ1NuYXBzaG90KTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IE1vbnRobHlTbmFwc2hvdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdNb250aGx5U25hcHNob3RQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gTW9udGhseSBTbmFwc2hvdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGlmICghcGFnZS5iaW5kaW5nQ29udGV4dCkge1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IE1vbnRobHlTbmFwc2hvdFZpZXdNb2RlbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlZFRvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGVkIHRvIE1vbnRobHkgU25hcHNob3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBwYWdlLmJpbmRpbmdDb250ZXh0IGFzIE1vbnRobHlTbmFwc2hvdFZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWw/LnJlZnJlc2goKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVubG9hZGVkKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTW9udGhseSBTbmFwc2hvdCBwYWdlIHVubG9hZGVkJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgTW9udGhseVNuYXBzaG90Vmlld01vZGVsO1xuICAgIHZpZXdNb2RlbD8ub25VbmxvYWRlZCgpO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgQWRkVHJhbnNhY3Rpb25WaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyYW5zYWN0aW9uJztcblxuY29uc3QgVEFHID0gJ0FkZFRyYW5zYWN0aW9uUGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIEFkZCBUcmFuc2FjdGlvbiBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IGlzSW5jb21lID0gYXJncy5jb250ZXh0Py5pc0luY29tZSA/PyBmYWxzZTtcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGFyZ3MuY29udGV4dD8udHJhbnNhY3Rpb24gYXMgVHJhbnNhY3Rpb24gfCB1bmRlZmluZWQ7XG4gICAgXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBBZGRUcmFuc2FjdGlvblZpZXdNb2RlbChpc0luY29tZSwgdHJhbnNhY3Rpb24pO1xuICAgIFxuICAgIC8vIFNldCB0aGUgQWN0aW9uQmFyIHRpdGxlIGJhc2VkIG9uIHdoZXRoZXIgd2UncmUgZWRpdGluZyBvciBhZGRpbmdcbiAgICBjb25zdCBhY3Rpb24gPSB0cmFuc2FjdGlvbiA/ICdFZGl0JyA6ICdBZGQnO1xuICAgIGNvbnN0IHR5cGUgPSBpc0luY29tZSA/ICdJbmNvbWUnIDogJ0V4cGVuc2UnO1xuICAgIHBhZ2UuYWN0aW9uQmFyLnRpdGxlID0gYCR7YWN0aW9ufSAke3R5cGV9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdGcm9tKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyBmcm9tIEFkZCBUcmFuc2FjdGlvbiBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBudWxsO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3Qtdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnVHJhbnNhY3Rpb25MaXN0UGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIFRyYW5zYWN0aW9uIExpc3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBUcmFuc2FjdGlvbkxpc3RWaWV3TW9kZWwoYXJncy5jb250ZXh0Py5maWx0ZXJUeXBlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0ZWRUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRlZCB0byBUcmFuc2FjdGlvbiBMaXN0IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdmlld01vZGVsID0gcGFnZS5iaW5kaW5nQ29udGV4dCBhcyBUcmFuc2FjdGlvbkxpc3RWaWV3TW9kZWw7XG4gICAgdmlld01vZGVsPy5yZWZyZXNoKCk7XG59IiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcIm1haW4tcGFnZVxcXCI+XFxuPC9GcmFtZT5cXG5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJtLTRcXFwiIFxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIj5cXG4gICAgPEdyaWRMYXlvdXQgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYmctZ3JheS0xMDAgcC00IHJvdW5kZWQtbGdcXFwiPlxcbiAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBjaGFydERhdGEgfX1cXFwiIGhlaWdodD1cXFwiMjAwXFxcIj5cXG4gICAgICAgICAgICA8UmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwibWItMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwi4pePXFxcIiBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtci0yXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcInt7IGxhYmVsIH19XFxcIiBjbGFzcz1cXFwidGV4dC1zbVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJ7eyBwZXJjZW50YWdlICsgJyUnIH19XFxcIiBjbGFzcz1cXFwidGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwZXJjZW50YWdlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtLTFcXFwiIGNvbG9yPVxcXCJ7eyBjb2xvciB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgIDwvUmVwZWF0ZXI+XFxuICAgIDwvR3JpZExheW91dD5cXG48L0dyaWRMYXlvdXQ+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCBwLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cXG48L1N0YWNrTGF5b3V0PlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYiBiZy13aGl0ZVxcXCI+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0aXRsZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGQgdGV4dC1ncmF5LTgwMFxcXCIgLz5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IGFtb3VudCB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ7eyBhbW91bnRDbGFzcyB9fVxcXCIgLz5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IHN1YnRpdGxlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbVxcXCIgLz5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IGRldGFpbHMgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuPC9HcmlkTGF5b3V0PlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIHRpdGxlPVxcXCJQZXJzb25hbCBGaW5hbmNlIE1hbmFnZXJcXFwiIGNsYXNzPVxcXCJiZy1ibHVlLTYwMFxcXCI+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jZSBNYW5hZ2VyXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldz5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gQ2FzaGZsb3cgJiBIb3VybHkgUmF0ZSAtLT5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqXFxcIiBjbGFzcz1cXFwibXgtNCBtdC00XFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNCBtLTFcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2FzaGZsb3dcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjYXNoZmxvd0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInt7IGNhc2hmbG93ID49IDAgPyAndGV4dC1ncmVlbi02MDAgdGV4dC0yeGwgZm9udC1ib2xkJyA6ICd0ZXh0LXJlZC02MDAgdGV4dC0yeGwgZm9udC1ib2xkJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNCBtLTFcXFwiIGNvbD1cXFwiMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiSG91cmx5IFJhdGVcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBob3VybHlSYXRlRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICA8IS0tIFF1aWNrIEFjdGlvbnMgLS0+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm14LTQgbWItNFxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gSW5jb21lICYgRXhwZW5zZSBSb3cgLS0+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiSU5DT01FXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGVUb0luY29tZVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiRVhQRU5TRVxcXCIgdGFwPVxcXCJvbk5hdmlnYXRlVG9FeHBlbnNlXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIEFzc2V0cyAmIExpYWJpbGl0aWVzIFJvdyAtLT5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJBU1NFVFNcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvQXNzZXRzXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbS0xIHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkxJQUJJTElUSUVTXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGVUb0xpYWJpbGl0aWVzXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwhLS0gTW9udGhseSBTbmFwc2hvdCBCdXR0b24gLS0+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJNT05USExZIFNOQVBTSE9UXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGVUb01vbnRobHlTbmFwc2hvdFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctaW5kaWdvLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBteC00IG1iLTQgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgLz5cXG5cXG4gICAgICAgICAgICA8IS0tIEZpbmFuY2lhbCBTdW1tYXJ5IENhcmQgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jaWFsIFN1bW1hcnlcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBOZXQgV29ydGggLS0+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNsYXNzPVxcXCJtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJOZXQgV29ydGg6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgbmV0V29ydGhGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBUb3RhbCBJbmNvbWUgLS0+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNsYXNzPVxcXCJtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUb3RhbCBJbmNvbWU6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxJbmNvbWVGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyZWVuLTYwMCB0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBUb3RhbCBFeHBlbnNlcyAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRvdGFsIEV4cGVuc2VzOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRvdGFsRXhwZW5zZXNGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJlZC02MDAgdGV4dC1yaWdodCBmb250LWJvbGRcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDwhLS0gVG90YWwgQXNzZXRzIC0tPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgQXNzZXRzOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRvdGFsQXNzZXRzRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ibHVlLTYwMCB0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBUb3RhbCBMaWFiaWxpdGllcyAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgTGlhYmlsaXRpZXM6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxMaWFiaWxpdGllc0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcHVycGxlLTYwMCB0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwhLS0gU2hhcnBlIFJhdGlvIENhcmQgLS0+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiU2hhcnBlIFJhdGlvXFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHNoYXJwZVJhdGlvRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L1Njcm9sbFZpZXc+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJiZy1ibHVlLTYwMFxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQWRkIEFzc2V0XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldyBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8IS0tIE5hbWUgRmllbGQgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBc3NldCBOYW1lXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBuYW1lXFxcIiB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gVmFsdWUgRmllbGQgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJWYWx1ZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciB2YWx1ZVxcXCIgdGV4dD1cXFwie3sgdmFsdWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIENhdGVnb3J5IFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNhdGVnb3J5XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgY2F0ZWdvcmllcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRDYXRlZ29yeUluZGV4IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gU2F2ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTYXZlIEFzc2V0XFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXQtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGVkVG89XFxcIm5hdmlnYXRlZFRvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFzc2V0c1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0bywgKlxcXCI+XFxuICAgICAgICA8IS0tIFRvdGFsIEFzc2V0cyBDYXJkIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJnLWJsdWUtNTAwIG0tNCBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRvdGFsIEFzc2V0c1xcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbEFzc2V0c0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBBc3NldCBEaXN0cmlidXRpb24gLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHAtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQXNzZXQgRGlzdHJpYnV0aW9uXFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItNFxcXCIgLz5cXG4gICAgICAgICAgICA8UmVwZWF0ZXIgaXRlbXM9XFxcInt7IGRpc3RyaWJ1dGlvblZpZXdNb2RlbC5jaGFydERhdGEgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICA8UmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJtLTJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJtYi0xXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwi4pePXFxcIiBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtci0yXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJ7eyBsYWJlbCB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS03MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcInt7IHBlcmNlbnRhZ2UgKyAnJScgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgdmFsdWU9XFxcInt7IHBlcmNlbnRhZ2UgfX1cXFwiIG1heFZhbHVlPVxcXCIxMDBcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVxcXCJ7eyBjb2xvciB9fVxcXCIgY2xhc3M9XFxcIm0tMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvUmVwZWF0ZXI+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tIEFkZCBBc3NldCBCdXR0b24gLS0+XFxuICAgICAgICA8QnV0dG9uIHJvdz1cXFwiMlxcXCIgdGV4dD1cXFwiQWRkIEFzc2V0XFxcIiB0YXA9XFxcInt7IG9uQWRkQXNzZXQgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXgtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tIEFzc2V0IExpc3QgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBc3NldCBMaXN0XFxcIiBjbGFzcz1cXFwicC00IHRleHQteGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgYXNzZXRzIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LXZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtZ3JheS04MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZFZhbHVlIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtYmx1ZS02MDAgZm9udC1ib2xkIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGNhdGVnb3J5IH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvR3JpZExheW91dD5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBZGQgTGlhYmlsaXR5XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8U2Nyb2xsVmlldyBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8IS0tIE5hbWUgRmllbGQgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMaWFiaWxpdHkgTmFtZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWxcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgbmFtZVxcXCIgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIEFtb3VudCBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFtb3VudFxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBhbW91bnRcXFwiIHRleHQ9XFxcInt7IGFtb3VudCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gSW50ZXJlc3QgUmF0ZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkludGVyZXN0IFJhdGUgKCUpXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIGludGVyZXN0IHJhdGVcXFwiIHRleHQ9XFxcInt7IGludGVyZXN0UmF0ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gVHlwZSBTZWxlY3Rpb24gLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUeXBlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgdHlwZXMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg9XFxcInt7IHNlbGVjdGVkVHlwZUluZGV4IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gU2F2ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTYXZlIExpYWJpbGl0eVxcXCIgdGFwPVxcXCJ7eyBvblNhdmUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXQtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGVkVG89XFxcIm5hdmlnYXRlZFRvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxpYWJpbGl0aWVzXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gVG90YWwgTGlhYmlsaXRpZXMgQ2FyZCAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIG0tNCBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRvdGFsIExpYWJpbGl0aWVzXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LXNtIG1iLTFcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gRGlzdHJpYnV0aW9uIENoYXJ0IC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCBwLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxpYWJpbGl0eSBEaXN0cmlidXRpb25cXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XFxcIiAvPlxcbiAgICAgICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgZGlzdHJpYnV0aW9uVmlld01vZGVsLmNoYXJ0RGF0YSB9fVxcXCI+XFxuICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLil49cXFwiIGNvbG9yPVxcXCJ7eyBjb2xvciB9fVxcXCIgY2xhc3M9XFxcIm1yLTJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcInt7IGxhYmVsIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTcwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgcGVyY2VudGFnZSArICclJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT1cXFwie3sgcGVyY2VudGFnZSB9fVxcXCIgbWF4VmFsdWU9XFxcIjEwMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibS0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gQWRkIEJ1dHRvbiAtLT5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJBZGQgTGlhYmlsaXR5XFxcIiB0YXA9XFxcInt7IG9uQWRkTGlhYmlsaXR5IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXgtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tIExpYWJpbGl0aWVzIExpc3QgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMaWFiaWxpdHkgTGlzdFxcXCIgY2xhc3M9XFxcInAtNCB0ZXh0LXhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IGxpYWJpbGl0aWVzIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LXZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtZ3JheS04MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZEFtb3VudCB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LXB1cnBsZS02MDAgZm9udC1ib2xkIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHR5cGUgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRJbnRlcmVzdFJhdGUgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJiZy1ibHVlLTYwMFxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXNFZGl0aW5nID8gJ0VkaXQgU25hcHNob3QnIDogJ0FkZCBTbmFwc2hvdCcgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gWWVhciBTZWxlY3Rpb24gLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlllYXJcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyB5ZWFycyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyB5ZWFySW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aCBTZWxlY3Rpb24gLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRoXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBtb250aHMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRNb250aCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG5cXG4gICAgICAgICAgICA8IS0tIE5ldCBBc3NldCBWYWx1ZSAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IEFzc2V0IFZhbHVlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgbmV0IGFzc2V0IHZhbHVlXFxcIiB0ZXh0PVxcXCJ7eyBuZXRBc3NldCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwie3sgaXNFZGl0aW5nID8gJ1VwZGF0ZSBTbmFwc2hvdCcgOiAnU2F2ZSBTbmFwc2hvdCcgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBvblNhdmUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bFxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIlxcbiAgICBuYXZpZ2F0ZWRUbz1cXFwibmF2aWdhdGVkVG9cXFwiXFxuICAgIHVubG9hZGVkPVxcXCJ1bmxvYWRlZFxcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJNb250aGx5IFNuYXBzaG90XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gQWRkIEJ1dHRvbiAtLT5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJBZGQgTmV3IFNuYXBzaG90XFxcIiB0YXA9XFxcInt7IG9uQWRkU25hcHNob3QgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuXFxuICAgICAgICA8IS0tIEhpc3RvcnkgU2VjdGlvbiAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNuYXBzaG90IEhpc3RvcnlcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBwLTRcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBzbmFwc2hvdHMgfX1cXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCIgY2xhc3M9XFxcImxpc3Qtdmlld1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkRGF0ZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZE5ldEFzc2V0IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNoYW5nZTpcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRQZXJjZW50YWdlQ2hhbmdlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IHRleHQtc21cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgcGVyY2VudGFnZUNoYW5nZSA+PSAwID8gJyMxMEI5ODEnIDogJyNFRjQ0NDQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiRmluYW5jaWFsIEhlYWx0aFxcXCIgLz5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gT3ZlcnZpZXcgU2VjdGlvbiAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLWJsdWUtMTAwIHAtNCByb3VuZGVkLWxnIG1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jaWFsIE92ZXJ2aWV3XFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IFdvcnRoOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5ldFdvcnRoRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodCBmb250LWJvbGRcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTW9udGhseSBDYXNoZmxvdzpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBtb250aGx5Q2FzaGZsb3dGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJEZWJ0LXRvLUluY29tZTpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZWJ0VG9JbmNvbWVSYXRpb0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aGx5IFJlcG9ydHMgLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgUmVwb3J0c1xcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTJcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBtb250aGx5UmVwb3J0cyB9fVxcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG1vbnRoWWVhciB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHNhdmluZ3NSYXRlRm9ybWF0dGVkIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdJbmNvbWU6ICcgKyBpbmNvbWVGb3JtYXR0ZWQgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnRXhwZW5zZXM6ICcgKyBleHBlbnNlc0Zvcm1hdHRlZCB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkQW1vdW50IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzdWJ0aXRsZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZXRhaWxzIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbjwvR3JpZExheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGluZ0Zyb209XFxcIm5hdmlnYXRpbmdGcm9tXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGlzSW5jb21lID8gJ0FkZCBJbmNvbWUnIDogJ0FkZCBFeHBlbnNlJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcImJnLWdyYXktMTAwXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBkZXNjcmlwdGlvblxcXCIgdGV4dD1cXFwie3sgZGVzY3JpcHRpb24gfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBBbW91bnQgRmllbGQgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBbW91bnRcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgYW1vdW50XFxcIiB0ZXh0PVxcXCJ7eyBhbW91bnQgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIENhdGVnb3J5IFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNhdGVnb3J5XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgY2F0ZWdvcmllcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRDYXRlZ29yeUluZGV4IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gVGltZSBSZXF1aXJlZCAoT25seSBmb3IgSW5jb21lKSAtLT5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHZpc2liaWxpdHk9XFxcInt7IGlzSW5jb21lID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRpbWUgUmVxdWlyZWQgKEhvdXJzKVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgaG91cnMgcmVxdWlyZWRcXFwiIHRleHQ9XFxcInt7IHRpbWVSZXF1aXJlZCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcInt7IGlzSW5jb21lID8gJ1NhdmUgSW5jb21lJyA6ICdTYXZlIEV4cGVuc2UnIH19XFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgaXNJbmNvbWUgPyAnYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgOiAnYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtdC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTInIH19XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGVkVG89XFxcIm5hdmlnYXRlZFRvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ0luY29tZScgOiAnRXhwZW5zZXMnIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gU3VtbWFyeSBDYXJkIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ2JnLWdyZWVuLTUwMCBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTQnIDogJ2JnLXJlZC01MDAgbS00IHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00JyB9fVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ1RvdGFsIEluY29tZScgOiAnVG90YWwgRXhwZW5zZXMnIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbEFtb3VudEZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBEaXN0cmlidXRpb24gQ2hhcnQgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHAtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnSW5jb21lIERpc3RyaWJ1dGlvbicgOiAnRXhwZW5zZSBEaXN0cmlidXRpb24nIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBkaXN0cmlidXRpb25WaWV3TW9kZWwuY2hhcnREYXRhIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwibWItMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgbGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNzAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJ7eyBwZXJjZW50YWdlICsgJyUnIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwZXJjZW50YWdlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtLTFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBBY3Rpb24gQnV0dG9uIC0tPlxcbiAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIHRleHQ9XFxcInt7ICdBZGQgJyArIChmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdJbmNvbWUnIDogJ0V4cGVuc2UnKSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgb25BZGRUcmFuc2FjdGlvbiB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXgtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yJyA6ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgfX1cXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gVHJhbnNhY3Rpb25zIExpc3QgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUcmFuc2FjdGlvbiBIaXN0b3J5XFxcIiBjbGFzcz1cXFwicC00IHRleHQteGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgdHJhbnNhY3Rpb25zIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LXZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRlc2NyaXB0aW9uIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRBbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IHR5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LXJlZC02MDAnIH19IGZvbnQtYm9sZCB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjYXRlZ29yeSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHR5cGUgPT09ICdpbmNvbWUnID8gKGhvdXJseVJhdGVGb3JtYXR0ZWQgKyAnL2hyJykgOiAnJyB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==