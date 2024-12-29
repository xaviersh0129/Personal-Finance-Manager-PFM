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
        this.type = data.type || 'Loan';
        this.amount = data.amount || 0;
        this.name = data.name || '';
        this.dueDate = data.dueDate || new Date();
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
        this.id = data.id || crypto.randomUUID();
        this.type = data.type || 'expense';
        this.category = data.category || 'Consumer basket';
        this.amount = Number(data.amount || 0);
        this.description = data.description || '';
        this.date = data.date || new Date();
        this.timeRequired = data.type === 'income' ? Number(data.timeRequired || 1) : undefined;
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
        const now = new Date();
        return this.items.filter(t => now.getMonth() === month &&
            now.getFullYear() === year);
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
    const monthlyTransactions = transactions.filter(t => t.date.getMonth() === currentMonth &&
        t.date.getFullYear() === currentYear);
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
        this._purchaseDate = new Date();
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
        this._dueDate = new Date();
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
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\n<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" \n    navigatingTo=\"navigatingTo\"\n    navigatedTo=\"navigatedTo\">\n    <ActionBar class=\"bg-blue-600\">\n        <NavigationButton text=\"Back\" android.systemIcon=\"ic_menu_back\" tap=\"{{ goBack }}\" />\n        <Label text=\"Assets\" class=\"text-white text-lg font-bold\" />\n    </ActionBar>\n    \n    <GridLayout rows=\"auto, auto, auto, *\">\n        <!-- Total Assets Card -->\n        <StackLayout row=\"0\" class=\"bg-blue-500 m-4 p-6 rounded-xl elevation-4\">\n            <Label text=\"Total Assets\" class=\"text-white text-sm mb-1\" />\n            <Label text=\"{{ totalAssetsFormatted }}\" class=\"text-white text-2xl font-bold\" />\n        </StackLayout>\n        \n        <!-- Asset Distribution -->\n        <StackLayout row=\"1\" class=\"bg-white m-4 p-4 rounded-xl elevation-4\">\n            <Label text=\"Asset Distribution\" class=\"text-xl font-bold mb-4\" />\n            <Repeater items=\"{{ distributionViewModel.chartData }}\">\n                <Repeater.itemTemplate>\n                    <StackLayout class=\"m-2\">\n                        <GridLayout columns=\"auto, *, auto\" class=\"mb-1\">\n                            <Label col=\"0\" text=\"●\" color=\"{{ color }}\" class=\"mr-2\" />\n                            <Label col=\"1\" text=\"{{ label }}\" class=\"text-gray-700\" />\n                            <Label col=\"2\" text=\"{{ percentage + '%' }}\" class=\"text-gray-600\" />\n                        </GridLayout>\n                        <Progress value=\"{{ percentage }}\" maxValue=\"100\" \n                                 color=\"{{ color }}\" class=\"m-1\" />\n                    </StackLayout>\n                </Repeater.itemTemplate>\n            </Repeater>\n        </StackLayout>\n        \n        <!-- Add Asset Button -->\n        <Button row=\"2\" text=\"Add Asset\" tap=\"{{ onAddAsset }}\" \n                class=\"bg-blue-500 text-white font-medium p-4 mx-4 rounded-xl elevation-2\" />\n        \n        <!-- Asset List -->\n        <StackLayout row=\"3\" class=\"bg-white m-4 rounded-xl elevation-4\">\n            <Label text=\"Asset List\" class=\"p-4 text-xl font-bold\" />\n            <ListView items=\"{{ assets }}\" itemTap=\"{{ onItemTap }}\" class=\"list-view\">\n                <ListView.itemTemplate>\n                    <GridLayout columns=\"*, auto\" rows=\"auto, auto\" class=\"p-4 border-b\">\n                        <Label text=\"{{ name }}\" row=\"0\" col=\"0\" class=\"font-bold text-gray-800\" />\n                        <Label text=\"{{ formattedValue }}\" row=\"0\" col=\"1\" class=\"text-blue-600 font-bold text-right\" />\n                        <Label text=\"{{ category }}\" row=\"1\" col=\"0\" class=\"text-gray-600 text-sm\" />\n                        <Label text=\"{{ formattedDate }}\" row=\"1\" col=\"1\" class=\"text-gray-600 text-sm text-right\" />\n                    </GridLayout>\n                </ListView.itemTemplate>\n            </ListView>\n        </StackLayout>\n    </GridLayout>\n</Page>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RGQSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ0w7QUFFQztBQUViO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNiO0FBQ0osQ0FBQztBQUFDLCtEQUFlOztJQUViLE1BQU0sS0FBSztBQUNmLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1hEOztBQUVBLHNDQUFzQyxrQ0FBa0MsVUFBVSxzRUFBc0Usb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsK0RBQStELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsd0RBQXdELEVBQUUsNkRBQTZELEVBQUUsa0ZBQWtGLEVBQUUseUVBQXlFLEVBQUUsd0VBQXdFLEVBQUUsdUVBQXVFLEVBQUUsdURBQXVELEVBQUUsNkRBQTZELEVBQUUsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsOERBQThELEVBQUUsZ0VBQWdFLEVBQUUsc0VBQXNFLEVBQUUsb0VBQW9FLEVBQUUscUVBQXFFLEVBQUUsc0VBQXNFLEVBQUUsa0VBQWtFLEVBQUUsbUVBQW1FLEVBQUUsb0VBQW9FLEVBQUUsaUVBQWlFLEVBQUUsK0RBQStELEVBQUUsaUVBQWlFLEVBQUUsZ0VBQWdFLEVBQUUsZ0VBQWdFLEVBQUUsRUFBRSwwREFBMEQsb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsK0RBQStELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsd0RBQXdELEVBQUUsNkRBQTZELEVBQUUsa0ZBQWtGLEVBQUUseUVBQXlFLEVBQUUsd0VBQXdFLEVBQUUsdUVBQXVFLEVBQUUsdURBQXVELEVBQUUsNkRBQTZELEVBQUUsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsOERBQThELEVBQUUsZ0VBQWdFLEVBQUUsc0VBQXNFLEVBQUUsb0VBQW9FLEVBQUUscUVBQXFFLEVBQUUsc0VBQXNFLEVBQUUsa0VBQWtFLEVBQUUsbUVBQW1FLEVBQUUsb0VBQW9FLEVBQUUsaUVBQWlFLEVBQUUsK0RBQStELEVBQUUsaUVBQWlFLEVBQUUsZ0VBQWdFLEVBQUUsZ0VBQWdFLEVBQUUsRUFBRSx3REFBd0QsK0RBQStELEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxxREFBcUQsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNkRBQTZELEVBQUUsRUFBRSxxREFBcUQsMkRBQTJELEVBQUUsRUFBRSxxREFBcUQsMERBQTBELEVBQUUsRUFBRSwyREFBMkQsNERBQTRELEVBQUUsRUFBRSwyREFBMkQsNkRBQTZELEVBQUUsRUFBRSx5REFBeUQsb0VBQW9FLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsd0dBQXdHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsdUdBQXVHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsc0dBQXNHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsd0dBQXdHLEVBQUUsRUFBRSw2REFBNkQsOERBQThELEVBQUUsc0dBQXNHLEVBQUUsRUFBRSw4REFBOEQsOERBQThELEVBQUUsdUdBQXVHLEVBQUUsRUFBRSw4REFBOEQsOERBQThELEVBQUUsdUdBQXVHLEVBQUUsRUFBRSwyREFBMkQsOERBQThELEVBQUUsc0dBQXNHLEVBQUUsRUFBRSx5REFBeUQsOERBQThELEVBQUUsd0dBQXdHLEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxvREFBb0QsdURBQXVELEVBQUUsRUFBRSxvREFBb0QsdURBQXVELEVBQUUsRUFBRSwyREFBMkQsNkRBQTZELEVBQUUsRUFBRSx5REFBeUQseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSwwREFBMEQsNERBQTRELEVBQUUsRUFBRSw0REFBNEQsNERBQTRELEVBQUUsRUFBRSwwREFBMEQscUVBQXFFLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNkZBQTZGLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSwrREFBK0Qs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aEQ7QUFDQSxtVkFBbVYsU0FBUyxnQ0FBZ0Msa0RBQWtELDhMQUE4TCx3SEFBd0gsa0NBQWtDLDhEQUE4RCwyRkFBMkYsdUJBQXVCLHNPQUFzTywyRUFBMkUsNEdBQTRHLGtDQUFrQyxpUEFBaVAsUUFBUSw2RUFBNkUsUUFBUSxzRkFBc0YsbUJBQW1CLG1IQUFtSCxhQUFhLGtFQUFrRSxRQUFRLGtPQUFrTyw0REFBNEQsOEJBQThCLG1CQUFtQixnQ0FBZ0Msd0tBQXdLLHlQQUF5UCxlQUFlLGdCQUFnQixZQUFZLDRNQUE0TSxjQUFjLHNHQUFzRyxrQkFBa0IsbUVBQW1FLHlEQUF5RCxvRUFBb0UsV0FBVyxvR0FBb0cseURBQXlEO0FBQzMrRyxpRUFBZSxpQ0FBaUM7Ozs7Ozs7OztBQ0hoRCIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvIHN5bmMgXFwuKHhtbCU3Q2pzJTdDKCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2FwcC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9jb21wb25lbnRzL2NoYXJ0cy9kb251dC1jaGFydC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2NvbXBvbmVudHMvY2hhcnRzL2luZGV4LnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvY29uc3RhbnRzL3N0b3JhZ2Uta2V5cy50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21haW4tcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21haW4tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21vZGVscy9hc3NldC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21vZGVscy9maW5hbmNpYWwtcmVwb3J0LnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbW9kZWxzL2xpYWJpbGl0eS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21vZGVscy9tb250aGx5LXNuYXBzaG90LnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbW9kZWxzL3RyYW5zYWN0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvYXNzZXQtc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL2Jhc2Utc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL2V2ZW50LWJ1cy1zZXJ2aWNlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvc2VydmljZXMvbGlhYmlsaXR5LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9zZXJ2aWNlcy9tb250aGx5LXNuYXBzaG90LXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9zZXJ2aWNlcy9yZXBvcnQtc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL3N0b3JhZ2Utc2VydmljZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC91dGlscy9jaGFydC1jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC91dGlscy9kaWFsb2cudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC91dGlscy9maW5hbmNpYWwtY2FsY3VsYXRpb25zLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdXRpbHMvZm9ybWF0dGVycy50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3V0aWxzL2lvcy1jb2xvci1leHRlbnNpb24udHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC91dGlscy9sb2dnZXIudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC91dGlscy9uYXZpZ2F0aW9uLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvYXNzZXRzL2Fzc2V0LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvYXNzZXRzL2Fzc2V0LWxpc3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL2Jhc2Utdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL2Rhc2hib2FyZC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXZpZXctbW9kZWwudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXctbW9kZWxzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3Qtdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UudHMiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2NvbXBvbmVudHMvYXNzZXRzL2Fzc2V0LWRpc3RyaWJ1dGlvbi1jaGFydC54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC9jb21wb25lbnRzL3VpL2NhcmQueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvY29tcG9uZW50cy91aS9saXN0LWl0ZW0ueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvbWFpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlLnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3Mvc2hhcmVkL2xpc3QtaXRlbS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UueG1sIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC9leHRlcm5hbCBjb21tb25qcyBcIn4vcGFja2FnZS5qc29uXCIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwL2FwcC5jc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwL2FwcC50c1wiLFxuXHRcIi4vY29tcG9uZW50cy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLWNoYXJ0LnhtbFwiOiBcIi4vYXBwL2NvbXBvbmVudHMvYXNzZXRzL2Fzc2V0LWRpc3RyaWJ1dGlvbi1jaGFydC54bWxcIixcblx0XCIuL2NvbXBvbmVudHMvY2hhcnRzL2RvbnV0LWNoYXJ0LnRzXCI6IFwiLi9hcHAvY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQudHNcIixcblx0XCIuL2NvbXBvbmVudHMvY2hhcnRzL2luZGV4LnRzXCI6IFwiLi9hcHAvY29tcG9uZW50cy9jaGFydHMvaW5kZXgudHNcIixcblx0XCIuL2NvbXBvbmVudHMvdWkvY2FyZC54bWxcIjogXCIuL2FwcC9jb21wb25lbnRzL3VpL2NhcmQueG1sXCIsXG5cdFwiLi9jb21wb25lbnRzL3VpL2xpc3QtaXRlbS54bWxcIjogXCIuL2FwcC9jb21wb25lbnRzL3VpL2xpc3QtaXRlbS54bWxcIixcblx0XCIuL2NvbnN0YW50cy9zdG9yYWdlLWtleXMudHNcIjogXCIuL2FwcC9jb25zdGFudHMvc3RvcmFnZS1rZXlzLnRzXCIsXG5cdFwiLi9tYWluLXBhZ2UudHNcIjogXCIuL2FwcC9tYWluLXBhZ2UudHNcIixcblx0XCIuL21haW4tcGFnZS54bWxcIjogXCIuL2FwcC9tYWluLXBhZ2UueG1sXCIsXG5cdFwiLi9tYWluLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC9tYWluLXZpZXctbW9kZWwudHNcIixcblx0XCIuL21vZGVscy9hc3NldC50c1wiOiBcIi4vYXBwL21vZGVscy9hc3NldC50c1wiLFxuXHRcIi4vbW9kZWxzL2ZpbmFuY2lhbC1yZXBvcnQudHNcIjogXCIuL2FwcC9tb2RlbHMvZmluYW5jaWFsLXJlcG9ydC50c1wiLFxuXHRcIi4vbW9kZWxzL2xpYWJpbGl0eS50c1wiOiBcIi4vYXBwL21vZGVscy9saWFiaWxpdHkudHNcIixcblx0XCIuL21vZGVscy9tb250aGx5LXNuYXBzaG90LnRzXCI6IFwiLi9hcHAvbW9kZWxzL21vbnRobHktc25hcHNob3QudHNcIixcblx0XCIuL21vZGVscy90cmFuc2FjdGlvbi50c1wiOiBcIi4vYXBwL21vZGVscy90cmFuc2FjdGlvbi50c1wiLFxuXHRcIi4vc2VydmljZXMvYXNzZXQtc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL2Jhc2Utc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL2Jhc2Utc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvZXZlbnQtYnVzLXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9ldmVudC1idXMtc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvbGlhYmlsaXR5LXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZS50c1wiLFxuXHRcIi4vc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlLnRzXCI6IFwiLi9hcHAvc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9yZXBvcnQtc2VydmljZS50c1wiOiBcIi4vYXBwL3NlcnZpY2VzL3JlcG9ydC1zZXJ2aWNlLnRzXCIsXG5cdFwiLi9zZXJ2aWNlcy9zdG9yYWdlLXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy9zdG9yYWdlLXNlcnZpY2UudHNcIixcblx0XCIuL3NlcnZpY2VzL3RyYW5zYWN0aW9uLXNlcnZpY2UudHNcIjogXCIuL2FwcC9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlLnRzXCIsXG5cdFwiLi91dGlscy9jaGFydC1jb2xvcnMudHNcIjogXCIuL2FwcC91dGlscy9jaGFydC1jb2xvcnMudHNcIixcblx0XCIuL3V0aWxzL2RpYWxvZy50c1wiOiBcIi4vYXBwL3V0aWxzL2RpYWxvZy50c1wiLFxuXHRcIi4vdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucy50c1wiOiBcIi4vYXBwL3V0aWxzL2ZpbmFuY2lhbC1jYWxjdWxhdGlvbnMudHNcIixcblx0XCIuL3V0aWxzL2Zvcm1hdHRlcnMudHNcIjogXCIuL2FwcC91dGlscy9mb3JtYXR0ZXJzLnRzXCIsXG5cdFwiLi91dGlscy9pb3MtY29sb3ItZXh0ZW5zaW9uLnRzXCI6IFwiLi9hcHAvdXRpbHMvaW9zLWNvbG9yLWV4dGVuc2lvbi50c1wiLFxuXHRcIi4vdXRpbHMvbG9nZ2VyLnRzXCI6IFwiLi9hcHAvdXRpbHMvbG9nZ2VyLnRzXCIsXG5cdFwiLi91dGlscy9uYXZpZ2F0aW9uLnRzXCI6IFwiLi9hcHAvdXRpbHMvbmF2aWdhdGlvbi50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvYXNzZXRzL2FkZC1hc3NldC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Fzc2V0cy9hc3NldC1saXN0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtbGlzdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9iYXNlLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9iYXNlLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2Rhc2hib2FyZC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvZGFzaGJvYXJkLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktdmlldy1tb2RlbC50c1wiOiBcIi4vYXBwL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3Qtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvcmVwb3J0cy9maW5hbmNpYWwtaGVhbHRoLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy9yZXBvcnRzL2ZpbmFuY2lhbC1oZWFsdGgtdmlldy1tb2RlbC50c1wiLFxuXHRcIi4vdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvdmlldy1tb2RlbHMvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwudHNcIixcblx0XCIuL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXZpZXctbW9kZWwudHNcIjogXCIuL2FwcC92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC12aWV3LW1vZGVsLnRzXCIsXG5cdFwiLi92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYWRkLWFzc2V0LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS50c1wiLFxuXHRcIi4vdmlld3MvYXNzZXRzL2Fzc2V0LWxpc3QtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9hc3NldHMvYXNzZXQtbGlzdC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvbGlhYmlsaXRpZXMvbGlhYmlsaXR5LWxpc3QtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UudHNcIjogXCIuL2FwcC92aWV3cy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXBhZ2UueG1sXCIsXG5cdFwiLi92aWV3cy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3QtcGFnZS54bWxcIjogXCIuL2FwcC92aWV3cy9tb250aGx5LXNuYXBzaG90L21vbnRobHktc25hcHNob3QtcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC1wYWdlLnhtbFwiOiBcIi4vYXBwL3ZpZXdzL3JlcG9ydHMvZmluYW5jaWFsLWhlYWx0aC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3Mvc2hhcmVkL2xpc3QtaXRlbS54bWxcIjogXCIuL2FwcC92aWV3cy9zaGFyZWQvbGlzdC1pdGVtLnhtbFwiLFxuXHRcIi4vdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnRzXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnRzXCIsXG5cdFwiLi92aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL2FkZC10cmFuc2FjdGlvbi1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS50c1wiOiBcIi4vYXBwL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UudHNcIixcblx0XCIuL3ZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2UueG1sXCI6IFwiLi9hcHAvdmlld3MvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uLWxpc3QtcGFnZS54bWxcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hcHAgc3luYyByZWN1cnNpdmUgXFxcXC4oeG1sJTdDanMlN0MoPzwlMjFcXFxcLmRcXFxcLil0cyU3Q3M/Y3NzKSRcIjsiLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBcHAnO1xuXG50cnkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdGFydGluZyBhcHBsaWNhdGlvbiBpbml0aWFsaXphdGlvbicpO1xuICAgIEFwcGxpY2F0aW9uLnJ1bih7IG1vZHVsZU5hbWU6ICdhcHAtcm9vdCcgfSk7XG59IGNhdGNoIChlcnJvcikge1xuICAgIExvZ2dlci5lcnJvcihUQUcsICdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBhcHBsaWNhdGlvbicsIGVycm9yIGFzIEVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbn0iLCIvKiBDU1MySlNPTiAqL1xuXG5jb25zdCBfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIipcIixcIjo6YmVmb3JlXCIsXCI6OmFmdGVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1yb3RhdGVcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1za2V3LXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS14XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi14XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGluY2gtem9vbVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzc1wiLFwidmFsdWVcIjpcInByb3hpbWl0eVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC10by1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWRyb3Atc2hhZG93XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLW9wYWNpdHlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zaXplXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLWxheW91dFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1wYWludFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1zdHlsZVwiLFwidmFsdWVcIjpcIlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIjo6YmFja2Ryb3BcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnZpc2libGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ2aXNpYmlsaXR5XCIsXCJ2YWx1ZVwiOlwidmlzaWJsZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tLTFcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm0tMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubXgtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi0xXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubXItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubXQtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yb3VuZGVkLWxnXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucm91bmRlZC14bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCIxMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3JkZXItYlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20td2lkdGhcIixcInZhbHVlXCI6XCIxcHhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctYmx1ZS0xMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyMTkgMjM0IDI1NCAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ibHVlLTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDU5IDEzMCAyNDYgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctYmx1ZS02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctZ3JheS0xMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyNDMgMjQ0IDI0NiAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ncmVlbi01MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigzNCAxOTcgOTQgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctaW5kaWdvLTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDk5IDEwMiAyNDEgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctcHVycGxlLTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDE2OCA4NSAyNDcgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctcmVkLTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIzOSA2OCA2OCAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy13aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTZcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1yaWdodFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJyaWdodFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LTJ4bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjI0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIzMlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWxnXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMThcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtc21cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC14bFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb250LWJvbGRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXdlaWdodFwiLFwidmFsdWVcIjpcIjcwMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb250LW1lZGl1bVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnVwcGVyY2FzZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtdHJhbnNmb3JtXCIsXCJ2YWx1ZVwiOlwidXBwZXJjYXNlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtYmx1ZS02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigzNyA5OSAyMzUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWdyYXktNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoNzUgODUgOTkgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWdyYXktNzAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoNTUgNjUgODEgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWdyYXktODAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMzEgNDEgNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWdyZWVuLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIyIDE2MyA3NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcHVycGxlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDE0NyA1MSAyMzQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXJlZC02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyMjAgMzggMzggLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXdoaXRlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkFjdGlvbkJhclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMjU2M2ViXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjZmZmZmZmXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI1MDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LXRyYW5zZm9ybVwiLFwidmFsdWVcIjpcInVwcGVyY2FzZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jYXJkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNmZmZmZmZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmxpc3Qtdmlld1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ0cmFuc3BhcmVudFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlByb2dyZXNzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1yYWRpdXNcIixcInZhbHVlXCI6XCI0XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmlucHV0LWZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiOCAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcIiNlMmU4ZjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjZjhmYWZjXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmZvcm0tbGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzY0NzQ4YlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI0XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX1cbmV4cG9ydCBkZWZhdWx0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX19cbmNvbnN0IHsgYWRkVGFnZ2VkQWRkaXRpb25hbENTUyB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuYWRkVGFnZ2VkQWRkaXRpb25hbENTUyhfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fLCBcIkQ6XFxcXERldlxcXFxQZXJzb25hbC1GaW5hbmNlLU1hbmFnZXItUEZNXFxcXGFwcFxcXFxhcHAuY3NzXCIpXG4iLCJpbXBvcnQgeyBWaWV3LCBQcm9wZXJ0eSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9udXRDaGFydERhdGEge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIHBlcmNlbnRhZ2U6IG51bWJlcjtcbn1cblxuY29uc3QgZGF0YVByb3BlcnR5ID0gbmV3IFByb3BlcnR5PERvbnV0Q2hhcnQsIERvbnV0Q2hhcnREYXRhW10+KHtcbiAgICBuYW1lOiAnZGF0YScsXG4gICAgZGVmYXVsdFZhbHVlOiBbXSxcbiAgICB2YWx1ZUNoYW5nZWQ6ICh0YXJnZXQsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICB0YXJnZXQub25EYXRhQ2hhbmdlZChvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQgY2xhc3MgRG9udXRDaGFydCBleHRlbmRzIFZpZXcge1xuICAgIHB1YmxpYyBkYXRhOiBEb251dENoYXJ0RGF0YVtdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EYXRhQ2hhbmdlZChvbGRWYWx1ZTogRG9udXRDaGFydERhdGFbXSwgbmV3VmFsdWU6IERvbnV0Q2hhcnREYXRhW10pIHtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMucmVxdWVzdExheW91dCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVOYXRpdmVWaWV3KCk6IGFueSB7XG4gICAgICAgIGlmIChnbG9iYWwuaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbmV3IGFuZHJvaWQudmlldy5WaWV3KHRoaXMuX2NvbnRleHQpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdmlldy5zZXRXaWxsTm90RHJhdyhmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBuZXcgVUlWaWV3KENHUmVjdE1ha2UoMCwgMCwgMCwgMCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk1lYXN1cmUod2lkdGhNZWFzdXJlU3BlYzogbnVtYmVyLCBoZWlnaHRNZWFzdXJlU3BlYzogbnVtYmVyKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3Qgd2lkdGggPSBWaWV3LmxheW91dC5nZXRNZWFzdXJlU3BlY1NpemUod2lkdGhNZWFzdXJlU3BlYyk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gVmlldy5sYXlvdXQuZ2V0TWVhc3VyZVNwZWNTaXplKGhlaWdodE1lYXN1cmVTcGVjKTtcbiAgICAgICAgdGhpcy5zZXRNZWFzdXJlZERpbWVuc2lvbih3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25MYXlvdXQobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIub25MYXlvdXQobGVmdCwgdG9wLCByaWdodCwgYm90dG9tKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICB0aGlzLm5hdGl2ZVZpZXc/LmludmFsaWRhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25EcmF3KGNhbnZhczogYW55KSB7XG4gICAgICAgIGlmIChnbG9iYWwuaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdBbmRyb2lkKGNhbnZhcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLmlzSU9TKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdpT1MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd0FuZHJvaWQoY2FudmFzOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldE1lYXN1cmVkV2lkdGgoKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRNZWFzdXJlZEhlaWdodCgpO1xuICAgICAgICBjb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyICogMC44O1xuICAgICAgICBjb25zdCBpbm5lclJhZGl1cyA9IHJhZGl1cyAqIDAuNjtcbiAgICAgICAgY29uc3Qgc3Ryb2tlV2lkdGggPSByYWRpdXMgLSBpbm5lclJhZGl1cztcblxuICAgICAgICBsZXQgc3RhcnRBbmdsZSA9IDA7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcGFpbnQgPSBuZXcgYW5kcm9pZC5ncmFwaGljcy5QYWludCgpO1xuICAgICAgICBwYWludC5zZXRBbnRpQWxpYXModHJ1ZSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGFpbnQuc2V0U3R5bGUoYW5kcm9pZC5ncmFwaGljcy5QYWludC5TdHlsZS5TVFJPS0UpO1xuICAgICAgICBwYWludC5zZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aCk7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCByZWN0ID0gbmV3IGFuZHJvaWQuZ3JhcGhpY3MuUmVjdEYoXG4gICAgICAgICAgICBjZW50ZXJYIC0gcmFkaXVzICsgc3Ryb2tlV2lkdGggLyAyLFxuICAgICAgICAgICAgY2VudGVyWSAtIHJhZGl1cyArIHN0cm9rZVdpZHRoIC8gMixcbiAgICAgICAgICAgIGNlbnRlclggKyByYWRpdXMgLSBzdHJva2VXaWR0aCAvIDIsXG4gICAgICAgICAgICBjZW50ZXJZICsgcmFkaXVzIC0gc3Ryb2tlV2lkdGggLyAyXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzd2VlcEFuZ2xlID0gKGl0ZW0ucGVyY2VudGFnZSAvIDEwMCkgKiAzNjA7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBwYWludC5zZXRDb2xvcihhbmRyb2lkLmdyYXBoaWNzLkNvbG9yLnBhcnNlQ29sb3IoaXRlbS5jb2xvcikpO1xuICAgICAgICAgICAgY2FudmFzLmRyYXdBcmMocmVjdCwgc3RhcnRBbmdsZSwgc3dlZXBBbmdsZSwgZmFsc2UsIHBhaW50KTtcbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgKz0gc3dlZXBBbmdsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3aU9TKCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmdldE1lYXN1cmVkSGVpZ2h0KCk7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBoZWlnaHQgLyAyO1xuICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgKiAwLjg7XG4gICAgICAgIGNvbnN0IGlubmVyUmFkaXVzID0gcmFkaXVzICogMC42O1xuXG4gICAgICAgIGxldCBzdGFydEFuZ2xlID0gLU1hdGguUEkgLyAyO1xuXG4gICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3dlZXBBbmdsZSA9IChpdGVtLnBlcmNlbnRhZ2UgLyAxMDApICogTWF0aC5QSSAqIDI7XG4gICAgICAgICAgICBjb25zdCBlbmRBbmdsZSA9IHN0YXJ0QW5nbGUgKyBzd2VlcEFuZ2xlO1xuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBwYXRoID0gVUlCZXppZXJQYXRoLmJlemllclBhdGgoKTtcbiAgICAgICAgICAgIHBhdGguYWRkQXJjV2l0aENlbnRlclJhZGl1c1N0YXJ0QW5nbGVFbmRBbmdsZUNsb2Nrd2lzZShcbiAgICAgICAgICAgICAgICBDR1BvaW50TWFrZShjZW50ZXJYLCBjZW50ZXJZKSxcbiAgICAgICAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgICAgICAgc3RhcnRBbmdsZSxcbiAgICAgICAgICAgICAgICBlbmRBbmdsZSxcbiAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcGF0aC5hZGRBcmNXaXRoQ2VudGVyUmFkaXVzU3RhcnRBbmdsZUVuZEFuZ2xlQ2xvY2t3aXNlKFxuICAgICAgICAgICAgICAgIENHUG9pbnRNYWtlKGNlbnRlclgsIGNlbnRlclkpLFxuICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzLFxuICAgICAgICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgICAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBwYXRoLmNsb3NlUGF0aCgpO1xuXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IHRoaXMuaGV4VG9VSUNvbG9yKGl0ZW0uY29sb3IpO1xuICAgICAgICAgICAgY29sb3Iuc2V0RmlsbCgpO1xuICAgICAgICAgICAgcGF0aC5maWxsKCk7XG5cbiAgICAgICAgICAgIHN0YXJ0QW5nbGUgPSBlbmRBbmdsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoZXhUb1VJQ29sb3IoaGV4OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNikgLyAyNTU7XG4gICAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KSAvIDI1NTtcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpIC8gMjU1O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBVSUNvbG9yLmFsbG9jKCkuaW5pdFdpdGhSZWRHcmVlbkJsdWVBbHBoYShyLCBnLCBiLCAxKTtcbiAgICB9XG59XG5cbmRhdGFQcm9wZXJ0eS5yZWdpc3RlcihEb251dENoYXJ0KTsiLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuLy8gUmVnaXN0ZXIgYWxsIGNoYXJ0IGNvbXBvbmVudHNcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNoYXJ0Q29tcG9uZW50cygpIHtcbiAgICAvLyBUZW1wb3JhcmlseSBkaXNhYmxlIGNoYXJ0IHJlZ2lzdHJhdGlvbiB1bnRpbCB3ZSBmaXggdGhlIGNvcmUgaW1wb3J0c1xuICAgIGNvbnNvbGUubG9nKCdDaGFydCByZWdpc3RyYXRpb24gZGlzYWJsZWQgdGVtcG9yYXJpbHknKTtcbn1cblxuZXhwb3J0IHsgRG9udXRDaGFydCB9IGZyb20gJy4vZG9udXQtY2hhcnQnOyIsImV4cG9ydCBjb25zdCBTdG9yYWdlS2V5cyA9IHtcbiAgICBBU1NFVFM6ICdhc3NldHMnLFxuICAgIExJQUJJTElUSUVTOiAnbGlhYmlsaXRpZXMnLFxuICAgIFRSQU5TQUNUSU9OUzogJ3RyYW5zYWN0aW9ucycsXG59IGFzIGNvbnN0OyIsImltcG9ydCB7IEV2ZW50RGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRWaWV3TW9kZWwgfSBmcm9tICcuL3ZpZXctbW9kZWxzL2Rhc2hib2FyZC12aWV3LW1vZGVsJztcbmltcG9ydCB7IG5hdmlnYXRlVG9QYWdlIH0gZnJvbSAnLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ01haW5QYWdlJztcbmxldCB2aWV3TW9kZWw6IERhc2hib2FyZFZpZXdNb2RlbDtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gbWFpbiBwYWdlJyk7XG4gICAgdmlld01vZGVsID0gbmV3IERhc2hib2FyZFZpZXdNb2RlbCgpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2aWV3TW9kZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlVG9JbmNvbWUoYXJnczogRXZlbnREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0F0dGVtcHRpbmcgdG8gbmF2aWdhdGUgdG8gSW5jb21lIHBhZ2UnKTtcbiAgICB0cnkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1saXN0LXBhZ2VcIiwgeyBmaWx0ZXJUeXBlOiAnaW5jb21lJyB9KTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N1Y2Nlc3NmdWxseSBuYXZpZ2F0ZWQgdG8gSW5jb21lIHBhZ2UnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG5hdmlnYXRlIHRvIEluY29tZSBwYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb0V4cGVuc2UoYXJnczogRXZlbnREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0F0dGVtcHRpbmcgdG8gbmF2aWdhdGUgdG8gRXhwZW5zZSBwYWdlJyk7XG4gICAgdHJ5IHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoXCJ2aWV3cy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC1wYWdlXCIsIHsgZmlsdGVyVHlwZTogJ2V4cGVuc2UnIH0pO1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IG5hdmlnYXRlZCB0byBFeHBlbnNlIHBhZ2UnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG5hdmlnYXRlIHRvIEV4cGVuc2UgcGFnZScsIGVycm9yIGFzIEVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlVG9Bc3NldHMoYXJnczogRXZlbnREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0F0dGVtcHRpbmcgdG8gbmF2aWdhdGUgdG8gQXNzZXRzIHBhZ2UnKTtcbiAgICB0cnkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL2Fzc2V0cy9hc3NldC1saXN0LXBhZ2VcIik7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgbmF2aWdhdGVkIHRvIEFzc2V0cyBwYWdlJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZhaWxlZCB0byBuYXZpZ2F0ZSB0byBBc3NldHMgcGFnZScsIGVycm9yIGFzIEVycm9yKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlVG9MaWFiaWxpdGllcyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSB0byBMaWFiaWxpdGllcyBwYWdlJyk7XG4gICAgdHJ5IHtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoXCJ2aWV3cy9saWFiaWxpdGllcy9saWFiaWxpdHktbGlzdC1wYWdlXCIpO1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IG5hdmlnYXRlZCB0byBMaWFiaWxpdGllcyBwYWdlJyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZhaWxlZCB0byBuYXZpZ2F0ZSB0byBMaWFiaWxpdGllcyBwYWdlJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVUb01vbnRobHlTbmFwc2hvdChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSB0byBNb250aGx5IFNuYXBzaG90IHBhZ2UnKTtcbiAgICB0cnkge1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZShcInZpZXdzL21vbnRobHktc25hcHNob3QvbW9udGhseS1zbmFwc2hvdC1wYWdlXCIpO1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IG5hdmlnYXRlZCB0byBNb250aGx5IFNuYXBzaG90IHBhZ2UnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRmFpbGVkIHRvIG5hdmlnYXRlIHRvIE1vbnRobHkgU25hcHNob3QgcGFnZScsIGVycm9yIGFzIEVycm9yKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgcHJpdmF0ZSBfY291bnRlcjogbnVtYmVyO1xuICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXMuXG4gICAgdGhpcy5fY291bnRlciA9IDQyO1xuICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICB9XG5cbiAgZ2V0IG1lc3NhZ2UoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgfVxuXG4gIHNldCBtZXNzYWdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21lc3NhZ2UnLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25UYXAoKSB7XG4gICAgdGhpcy5fY291bnRlci0tO1xuICAgIHRoaXMudXBkYXRlTWVzc2FnZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVNZXNzYWdlKCkge1xuICAgIGlmICh0aGlzLl9jb3VudGVyIDw9IDApIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9XG4gICAgICAgICdIb29ycmFhYXkhIFlvdSB1bmxvY2tlZCB0aGUgTmF0aXZlU2NyaXB0IGNsaWNrZXIgYWNoaWV2ZW1lbnQhJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXNzYWdlID0gYCR7dGhpcy5fY291bnRlcn0gdGFwcyBsZWZ0YDtcbiAgICB9XG5cbiAgICAvLyBsb2cgdGhlIG1lc3NhZ2UgdG8gdGhlIGNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IHR5cGUgQXNzZXRDYXRlZ29yeSA9IFxuICAgIHwgJ1JlYWwgRXN0YXRlJyBcbiAgICB8ICdCdXNpbmVzcycgXG4gICAgfCAnU3RvY2tzJyBcbiAgICB8ICdBcnQgJiBBbnRpcXVpdGllcycgXG4gICAgfCAnU2F2aW5nL0Nhc2gnO1xuXG5leHBvcnQgY2xhc3MgQXNzZXQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGNhdGVnb3J5OiBBc3NldENhdGVnb3J5O1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHB1cmNoYXNlRGF0ZTogRGF0ZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8QXNzZXQ+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBkYXRhLmNhdGVnb3J5IHx8ICdTYXZpbmcvQ2FzaCc7XG4gICAgICAgIHRoaXMudmFsdWUgPSBkYXRhLnZhbHVlIHx8IDA7XG4gICAgICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZSB8fCAnJztcbiAgICAgICAgdGhpcy5wdXJjaGFzZURhdGUgPSBkYXRhLnB1cmNoYXNlRGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICAgIH1cbn0iLCJleHBvcnQgaW50ZXJmYWNlIE1vbnRobHlSZXBvcnQge1xuICAgIG1vbnRoOiBudW1iZXI7XG4gICAgeWVhcjogbnVtYmVyO1xuICAgIGluY29tZTogbnVtYmVyO1xuICAgIGV4cGVuc2VzOiBudW1iZXI7XG4gICAgc2F2aW5nczogbnVtYmVyO1xuICAgIHNhdmluZ3NSYXRlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluYW5jaWFsSGVhbHRoUmVwb3J0IHtcbiAgICBuZXRXb3J0aDogbnVtYmVyO1xuICAgIGRlYnRUb0luY29tZVJhdGlvOiBudW1iZXI7XG4gICAgbW9udGhseUNhc2hmbG93OiBudW1iZXI7XG4gICAgbW9udGhseVJlcG9ydHM6IE1vbnRobHlSZXBvcnRbXTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IHR5cGUgTGlhYmlsaXR5VHlwZSA9ICdMb2FuJyB8ICdEZWJ0L1BheWFibGUnO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0eXBlOiBMaWFiaWxpdHlUeXBlO1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkdWVEYXRlOiBEYXRlO1xuICAgIGludGVyZXN0UmF0ZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxMaWFiaWxpdHk+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZSB8fCAnTG9hbic7XG4gICAgICAgIHRoaXMuYW1vdW50ID0gZGF0YS5hbW91bnQgfHwgMDtcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lIHx8ICcnO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkYXRhLmR1ZURhdGUgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy5pbnRlcmVzdFJhdGUgPSBkYXRhLmludGVyZXN0UmF0ZSB8fCAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIE1vbnRobHlTbmFwc2hvdCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgeWVhcjogbnVtYmVyO1xuICAgIG1vbnRoOiBudW1iZXI7XG4gICAgbmV0QXNzZXQ6IG51bWJlcjtcbiAgICBwZXJjZW50YWdlQ2hhbmdlPzogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxNb250aGx5U25hcHNob3Q+KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSBkYXRhLmlkIHx8IGNyeXB0by5yYW5kb21VVUlEKCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnllYXIgPSBkYXRhLnllYXIgfHwgZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLm1vbnRoID0gZGF0YS5tb250aCB8fCBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIHRoaXMubmV0QXNzZXQgPSBkYXRhLm5ldEFzc2V0IHx8IDA7XG4gICAgICAgIHRoaXMucGVyY2VudGFnZUNoYW5nZSA9IGRhdGEucGVyY2VudGFnZUNoYW5nZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5cbmV4cG9ydCB0eXBlIFRyYW5zYWN0aW9uVHlwZSA9ICdpbmNvbWUnIHwgJ2V4cGVuc2UnO1xuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb25DYXRlZ29yeSA9IFxuICAvLyBJbmNvbWUgY2F0ZWdvcmllc1xuICB8ICdTYWxhcnknIHwgJ0J1c2luZXNzJyB8ICdSZW50JyB8ICdJbnRlcmVzdCcgfCAnUm95YWx0aWVzJ1xuICAvLyBFeHBlbnNlIGNhdGVnb3JpZXNcbiAgfCAnQ29uc3VtZXIgYmFza2V0JyB8ICdIYWJpdHMnIHwgJ0NhcicgfCAnUm91dGluZScgfCAnSG91c2luZycgfCAnQ3JlZGl0IENhcmQvTG9hbic7XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbiBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdHlwZTogVHJhbnNhY3Rpb25UeXBlO1xuICAgIGNhdGVnb3J5OiBUcmFuc2FjdGlvbkNhdGVnb3J5O1xuICAgIGFtb3VudDogbnVtYmVyO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZGF0ZTogRGF0ZTtcbiAgICB0aW1lUmVxdWlyZWQ/OiBudW1iZXI7IC8vIEhvdXJzIHJlcXVpcmVkIChvbmx5IGZvciBpbmNvbWUpXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFRyYW5zYWN0aW9uPikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuICAgICAgICB0aGlzLnR5cGUgPSBkYXRhLnR5cGUgfHwgJ2V4cGVuc2UnO1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gZGF0YS5jYXRlZ29yeSB8fCAnQ29uc3VtZXIgYmFza2V0JztcbiAgICAgICAgdGhpcy5hbW91bnQgPSBOdW1iZXIoZGF0YS5hbW91bnQgfHwgMCk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uIHx8ICcnO1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRhLmRhdGUgfHwgbmV3IERhdGUoKTtcbiAgICAgICAgdGhpcy50aW1lUmVxdWlyZWQgPSBkYXRhLnR5cGUgPT09ICdpbmNvbWUnID8gTnVtYmVyKGRhdGEudGltZVJlcXVpcmVkIHx8IDEpIDogdW5kZWZpbmVkO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3NldCB9IGZyb20gJy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cyc7XG5cbmV4cG9ydCBjbGFzcyBBc3NldFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZTxBc3NldD4ge1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFRBRyA9ICdBc3NldFNlcnZpY2UnO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBzdG9yYWdlS2V5ID0gU3RvcmFnZUtleXMuQVNTRVRTO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXNzZXRTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFBc3NldFNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEFzc2V0U2VydmljZS5pbnN0YW5jZSA9IG5ldyBBc3NldFNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXNzZXRTZXJ2aWNlLmluc3RhbmNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB0cmFuc2Zvcm1Mb2FkZWRJdGVtcyhpdGVtczogYW55W10pOiBBc3NldFtdIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChkYXRhID0+IG5ldyBBc3NldCh7XG4gICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgcHVyY2hhc2VEYXRlOiBuZXcgRGF0ZShkYXRhLnB1cmNoYXNlRGF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFkZEFzc2V0KGFzc2V0OiBBc3NldCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEl0ZW0oYXNzZXQpO1xuICAgIH1cblxuICAgIHVwZGF0ZUFzc2V0KGFzc2V0OiBBc3NldCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oYXNzZXQpO1xuICAgIH1cblxuICAgIGRlbGV0ZUFzc2V0KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBnZXRBc3NldHMoKTogQXNzZXRbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxBc3NldFZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnJlZHVjZSgoc3VtLCBhc3NldCkgPT4gc3VtICsgYXNzZXQudmFsdWUsIDApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTZXJ2aWNlPFQgZXh0ZW5kcyB7IGlkOiBzdHJpbmcgfT4gZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcm90ZWN0ZWQgaXRlbXM6IFRbXSA9IFtdO1xuICAgIHByb3RlY3RlZCBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlYWRvbmx5IFRBRzogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWFkb25seSBzdG9yYWdlS2V5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdG9yYWdlU2VydmljZSA9IFN0b3JhZ2VTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubG9hZEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGxvYWRJdGVtcygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdG9yYWdlS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yYWdlIGtleSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzYXZlZEl0ZW1zID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXRJdGVtPGFueVtdPih0aGlzLnN0b3JhZ2VLZXksIFtdKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLnRyYW5zZm9ybUxvYWRlZEl0ZW1zKHNhdmVkSXRlbXMpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKHRoaXMuVEFHLCBgTG9hZGVkICR7dGhpcy5pdGVtcy5sZW5ndGh9IGl0ZW1zIGZyb20gJHt0aGlzLnN0b3JhZ2VLZXl9YCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsIGBFcnJvciBsb2FkaW5nIGl0ZW1zIGZyb20gJHt0aGlzLnN0b3JhZ2VLZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNhdmVJdGVtcygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdG9yYWdlS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yYWdlIGtleSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0odGhpcy5zdG9yYWdlS2V5LCB0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYFNhdmVkICR7dGhpcy5pdGVtcy5sZW5ndGh9IGl0ZW1zIHRvICR7dGhpcy5zdG9yYWdlS2V5fWApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCBgRXJyb3Igc2F2aW5nIGl0ZW1zIHRvICR7dGhpcy5zdG9yYWdlS2V5fWAsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCB0cmFuc2Zvcm1Mb2FkZWRJdGVtcyhpdGVtczogYW55W10pOiBUW107XG5cbiAgICBwcm90ZWN0ZWQgYWRkSXRlbShpdGVtOiBUKTogdm9pZCB7XG4gICAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnQ2Fubm90IGFkZCBpdGVtIHdpdGhvdXQgaWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMuc2F2ZUl0ZW1zKCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2l0ZW1zJywgdGhpcy5pdGVtcyk7XG4gICAgICAgIExvZ2dlci5kZWJ1Zyh0aGlzLlRBRywgYEFkZGVkIGl0ZW0gd2l0aCBpZDogJHtpdGVtLmlkfWApO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVJdGVtKGl0ZW06IFQpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdDYW5ub3QgdXBkYXRlIGl0ZW0gd2l0aG91dCBpZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pdGVtcy5maW5kSW5kZXgoaSA9PiBpLmlkID09PSBpdGVtLmlkKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBpdGVtO1xuICAgICAgICAgICAgdGhpcy5zYXZlSXRlbXMoKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2l0ZW1zJywgdGhpcy5pdGVtcyk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcodGhpcy5UQUcsIGBVcGRhdGVkIGl0ZW0gd2l0aCBpZDogJHtpdGVtLmlkfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRlbGV0ZUl0ZW0oaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdDYW5ub3QgZGVsZXRlIGl0ZW0gd2l0aG91dCBpZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGlkKTtcbiAgICAgICAgdGhpcy5zYXZlSXRlbXMoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaXRlbXMnLCB0aGlzLml0ZW1zKTtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKHRoaXMuVEFHLCBgRGVsZXRlZCBpdGVtIHdpdGggaWQ6ICR7aWR9YCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEl0ZW1zKCk6IFRbXSB7XG4gICAgICAgIHJldHVybiBbLi4udGhpcy5pdGVtc107XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRCdXNTZXJ2aWNlIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEV2ZW50QnVzU2VydmljZTtcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBFdmVudEJ1c1NlcnZpY2Uge1xuICAgICAgICBpZiAoIUV2ZW50QnVzU2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgRXZlbnRCdXNTZXJ2aWNlLmluc3RhbmNlID0gbmV3IEV2ZW50QnVzU2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBFdmVudEJ1c1NlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZW1pdChldmVudE5hbWU6IHN0cmluZywgZGF0YT86IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm5vdGlmeSh7IGV2ZW50TmFtZSwgb2JqZWN0OiB0aGlzLCBkYXRhIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEV2ZW50TmFtZXMgPSB7XG4gICAgU05BUFNIT1RfVVBEQVRFRDogJ3NuYXBzaG90VXBkYXRlZCdcbn0gYXMgY29uc3Q7IiwiaW1wb3J0IHsgTGlhYmlsaXR5IH0gZnJvbSAnLi4vbW9kZWxzL2xpYWJpbGl0eSc7XG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cyc7XG5cbmV4cG9ydCBjbGFzcyBMaWFiaWxpdHlTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2U8TGlhYmlsaXR5PiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IExpYWJpbGl0eVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFRBRyA9ICdMaWFiaWxpdHlTZXJ2aWNlJztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RvcmFnZUtleSA9IFN0b3JhZ2VLZXlzLkxJQUJJTElUSUVTO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTGlhYmlsaXR5U2VydmljZSB7XG4gICAgICAgIGlmICghTGlhYmlsaXR5U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgTGlhYmlsaXR5U2VydmljZS5pbnN0YW5jZSA9IG5ldyBMaWFiaWxpdHlTZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIExpYWJpbGl0eVNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRyYW5zZm9ybUxvYWRlZEl0ZW1zKGl0ZW1zOiBhbnlbXSk6IExpYWJpbGl0eVtdIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zLm1hcChkYXRhID0+IG5ldyBMaWFiaWxpdHkoe1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRhdGEuZHVlRGF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFkZExpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEl0ZW0obGlhYmlsaXR5KTtcbiAgICB9XG5cbiAgICB1cGRhdGVMaWFiaWxpdHkobGlhYmlsaXR5OiBMaWFiaWxpdHkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51cGRhdGVJdGVtKGxpYWJpbGl0eSk7XG4gICAgfVxuXG4gICAgZGVsZXRlTGlhYmlsaXR5KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBnZXRMaWFiaWxpdGllcygpOiBMaWFiaWxpdHlbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxMaWFiaWxpdGllcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5yZWR1Y2UoKHN1bSwgbGlhYmlsaXR5KSA9PiBzdW0gKyBsaWFiaWxpdHkuYW1vdW50LCAwKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL2Jhc2Utc2VydmljZSc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3QgfSBmcm9tICcuLi9tb2RlbHMvbW9udGhseS1zbmFwc2hvdCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnTW9udGhseVNuYXBzaG90U2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBNb250aGx5U25hcHNob3RTZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2U8TW9udGhseVNuYXBzaG90PiB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IE1vbnRobHlTbmFwc2hvdFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFRBRyA9IFRBRztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RvcmFnZUtleSA9ICdtb250aGx5X3NuYXBzaG90cyc7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBNb250aGx5U25hcHNob3RTZXJ2aWNlIHtcbiAgICAgICAgaWYgKCFNb250aGx5U25hcHNob3RTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBNb250aGx5U25hcHNob3RTZXJ2aWNlLmluc3RhbmNlID0gbmV3IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTW9udGhseVNuYXBzaG90U2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogTW9udGhseVNuYXBzaG90W10ge1xuICAgICAgICByZXR1cm4gaXRlbXMubWFwKGRhdGEgPT4gbmV3IE1vbnRobHlTbmFwc2hvdChkYXRhKSk7XG4gICAgfVxuXG4gICAgYWRkU25hcHNob3Qoc25hcHNob3Q6IE1vbnRobHlTbmFwc2hvdCk6IHZvaWQge1xuICAgICAgICB0aGlzLmFkZEl0ZW0oc25hcHNob3QpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU25hcHNob3Qoc25hcHNob3Q6IE1vbnRobHlTbmFwc2hvdCk6IHZvaWQge1xuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0oc25hcHNob3QpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZGVsZXRlU25hcHNob3QoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGV0ZUl0ZW0oaWQpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVBlcmNlbnRhZ2VDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgZ2V0U25hcHNob3RzKCk6IE1vbnRobHlTbmFwc2hvdFtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGVTaGFycGVSYXRpbygpOiBudW1iZXIgfCBudWxsIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdDYWxjdWxhdGluZyBTaGFycGUgUmF0aW8nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gR2V0IHBlcmNlbnRhZ2UgY2hhbmdlcyBhbmQgZmlsdGVyIG91dCB1bmRlZmluZWQgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy5pdGVtc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiB0eXBlb2YgaXRlbS5wZXJjZW50YWdlQ2hhbmdlID09PSAnbnVtYmVyJylcbiAgICAgICAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS5wZXJjZW50YWdlQ2hhbmdlISk7XG5cbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBGb3VuZCAke2NoYW5nZXMubGVuZ3RofSB2YWxpZCBwZXJjZW50YWdlIGNoYW5nZXNgKTtcblxuICAgICAgICAgICAgLy8gTmVlZCBhdCBsZWFzdCAyIGRhdGEgcG9pbnRzIGZvciBtZWFuaW5nZnVsIGNhbGN1bGF0aW9uXG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0luc3VmZmljaWVudCBkYXRhIHBvaW50cyBmb3IgU2hhcnBlIFJhdGlvIGNhbGN1bGF0aW9uJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBhdmVyYWdlIHJldHVyblxuICAgICAgICAgICAgY29uc3QgYXZlcmFnZSA9IGNoYW5nZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCkgLyBjaGFuZ2VzLmxlbmd0aDtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBBdmVyYWdlIHJldHVybjogJHthdmVyYWdlLnRvRml4ZWQoMil9JWApO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgc3RhbmRhcmQgZGV2aWF0aW9uXG4gICAgICAgICAgICBjb25zdCB2YXJpYW5jZSA9IGNoYW5nZXMucmVkdWNlKChhLCBiKSA9PiBhICsgTWF0aC5wb3coYiAtIGF2ZXJhZ2UsIDIpLCAwKSAvIChjaGFuZ2VzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgY29uc3Qgc3RkRGV2ID0gTWF0aC5zcXJ0KHZhcmlhbmNlKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdGFuZGFyZCBkZXZpYXRpb246ICR7c3RkRGV2LnRvRml4ZWQoMil9YCk7XG5cbiAgICAgICAgICAgIC8vIEF2b2lkIGRpdmlzaW9uIGJ5IHplcm9cbiAgICAgICAgICAgIGlmIChzdGREZXYgPT09IDApIHtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3RhbmRhcmQgZGV2aWF0aW9uIGlzIHplcm8sIGNhbm5vdCBjYWxjdWxhdGUgU2hhcnBlIFJhdGlvJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBhbm51YWxpemVkIFNoYXJwZSBSYXRpb1xuICAgICAgICAgICAgY29uc3Qgc2hhcnBlUmF0aW8gPSAoYXZlcmFnZSAvIHN0ZERldikgKiBNYXRoLnNxcnQoMTIpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYENhbGN1bGF0ZWQgU2hhcnBlIFJhdGlvOiAke3NoYXJwZVJhdGlvLnRvRml4ZWQoMil9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBzaGFycGVSYXRpbztcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBjYWxjdWxhdGluZyBTaGFycGUgUmF0aW8nLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2FsY3VsYXRlUGVyY2VudGFnZUNoYW5nZXMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBTb3J0IHNuYXBzaG90cyBieSBkYXRlXG4gICAgICAgICAgICBjb25zdCBzb3J0ZWRTbmFwc2hvdHMgPSBbLi4udGhpcy5pdGVtc10uc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnllYXIgIT09IGIueWVhcikgcmV0dXJuIGEueWVhciAtIGIueWVhcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5tb250aCAtIGIubW9udGg7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2UgY2hhbmdlc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzb3J0ZWRTbmFwc2hvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gc29ydGVkU25hcHNob3RzW2ldO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzID0gc29ydGVkU25hcHNob3RzW2kgLSAxXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlQ2hhbmdlID0gKChjdXJyZW50Lm5ldEFzc2V0IC0gcHJldmlvdXMubmV0QXNzZXQpIC8gcHJldmlvdXMubmV0QXNzZXQpICogMTAwO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQucGVyY2VudGFnZUNoYW5nZSA9IE51bWJlcihwZXJjZW50YWdlQ2hhbmdlLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaXJzdCBzbmFwc2hvdCBoYXMgbm8gcGVyY2VudGFnZSBjaGFuZ2VcbiAgICAgICAgICAgIGlmIChzb3J0ZWRTbmFwc2hvdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNvcnRlZFNuYXBzaG90c1swXS5wZXJjZW50YWdlQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNhdmVJdGVtcygpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1N1Y2Nlc3NmdWxseSBjYWxjdWxhdGVkIHBlcmNlbnRhZ2UgY2hhbmdlcycpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGNhbGN1bGF0aW5nIHBlcmNlbnRhZ2UgY2hhbmdlcycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2VydmljZSB9IGZyb20gJy4vdHJhbnNhY3Rpb24tc2VydmljZSc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuL2Fzc2V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4vbGlhYmlsaXR5LXNlcnZpY2UnO1xuaW1wb3J0IHsgRmluYW5jaWFsSGVhbHRoUmVwb3J0LCBNb250aGx5UmVwb3J0IH0gZnJvbSAnLi4vbW9kZWxzL2ZpbmFuY2lhbC1yZXBvcnQnO1xuaW1wb3J0IHsgXG4gICAgY2FsY3VsYXRlTmV0V29ydGgsIFxuICAgIGNhbGN1bGF0ZU1vbnRobHlDYXNoZmxvdyxcbiAgICBjYWxjdWxhdGVEZWJ0VG9JbmNvbWVSYXRpbyBcbn0gZnJvbSAnLi4vdXRpbHMvZmluYW5jaWFsLWNhbGN1bGF0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRTZXJ2aWNlIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFJlcG9ydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSB0cmFuc2FjdGlvblNlcnZpY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcml2YXRlIGFzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgbGlhYmlsaXR5U2VydmljZTogTGlhYmlsaXR5U2VydmljZTtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlID0gVHJhbnNhY3Rpb25TZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuYXNzZXRTZXJ2aWNlID0gQXNzZXRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubGlhYmlsaXR5U2VydmljZSA9IExpYWJpbGl0eVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogUmVwb3J0U2VydmljZSB7XG4gICAgICAgIGlmICghUmVwb3J0U2VydmljZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgUmVwb3J0U2VydmljZS5pbnN0YW5jZSA9IG5ldyBSZXBvcnRTZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFJlcG9ydFNlcnZpY2UuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVGaW5hbmNpYWxIZWFsdGhSZXBvcnQoKTogRmluYW5jaWFsSGVhbHRoUmVwb3J0IHtcbiAgICAgICAgY29uc3QgYXNzZXRzID0gdGhpcy5hc3NldFNlcnZpY2UuZ2V0QXNzZXRzKCk7XG4gICAgICAgIGNvbnN0IGxpYWJpbGl0aWVzID0gdGhpcy5saWFiaWxpdHlTZXJ2aWNlLmdldExpYWJpbGl0aWVzKCk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9ucyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRyYW5zYWN0aW9ucygpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbW9udGhseUluY29tZSA9IHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2luY29tZScpXG4gICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKSAvIDEyO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXRXb3J0aDogY2FsY3VsYXRlTmV0V29ydGgoYXNzZXRzLCBsaWFiaWxpdGllcyksXG4gICAgICAgICAgICBkZWJ0VG9JbmNvbWVSYXRpbzogY2FsY3VsYXRlRGVidFRvSW5jb21lUmF0aW8obW9udGhseUluY29tZSwgbGlhYmlsaXRpZXMpLFxuICAgICAgICAgICAgbW9udGhseUNhc2hmbG93OiBjYWxjdWxhdGVNb250aGx5Q2FzaGZsb3codHJhbnNhY3Rpb25zKSxcbiAgICAgICAgICAgIG1vbnRobHlSZXBvcnRzOiB0aGlzLmdlbmVyYXRlTW9udGhseVJlcG9ydHMoKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2VuZXJhdGVNb250aGx5UmVwb3J0cygpOiBNb250aGx5UmVwb3J0W10ge1xuICAgICAgICBjb25zdCByZXBvcnRzOiBNb250aGx5UmVwb3J0W10gPSBbXTtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgLy8gR2VuZXJhdGUgcmVwb3J0cyBmb3IgdGhlIGxhc3QgMTIgbW9udGhzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSAoY3VycmVudERhdGUuZ2V0TW9udGgoKSAtIGkgKyAxMikgJSAxMjtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpIC0gTWF0aC5mbG9vcihpIC8gMTIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBtb250aFRyYW5zYWN0aW9ucyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlXG4gICAgICAgICAgICAgICAgLmdldE1vbnRobHlUcmFuc2FjdGlvbnMobW9udGgsIHllYXIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBpbmNvbWUgPSBtb250aFRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIodCA9PiB0LnR5cGUgPT09ICdpbmNvbWUnKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBleHBlbnNlcyA9IG1vbnRoVHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2V4cGVuc2UnKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgdC5hbW91bnQsIDApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzYXZpbmdzID0gaW5jb21lIC0gZXhwZW5zZXM7XG4gICAgICAgICAgICBjb25zdCBzYXZpbmdzUmF0ZSA9IGluY29tZSA+IDAgPyAoc2F2aW5ncyAvIGluY29tZSkgKiAxMDAgOiAwO1xuXG4gICAgICAgICAgICByZXBvcnRzLnB1c2goe1xuICAgICAgICAgICAgICAgIG1vbnRoLFxuICAgICAgICAgICAgICAgIHllYXIsXG4gICAgICAgICAgICAgICAgaW5jb21lLFxuICAgICAgICAgICAgICAgIGV4cGVuc2VzLFxuICAgICAgICAgICAgICAgIHNhdmluZ3MsXG4gICAgICAgICAgICAgICAgc2F2aW5nc1JhdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcG9ydHM7XG4gICAgfVxufSIsImltcG9ydCB7IEFwcGxpY2F0aW9uU2V0dGluZ3MgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ1N0b3JhZ2VTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogU3RvcmFnZVNlcnZpY2U7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU3RvcmFnZVNlcnZpY2Uge1xuICAgICAgICBpZiAoIVN0b3JhZ2VTZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBTdG9yYWdlU2VydmljZS5pbnN0YW5jZSA9IG5ldyBTdG9yYWdlU2VydmljZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdG9yYWdlU2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBzZXRJdGVtPFQ+KGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yYWdlIGtleSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBBcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHN0b3JlZCBkYXRhIGZvciBrZXk6ICR7a2V5fWApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgYEVycm9yIHN0b3JpbmcgZGF0YSBmb3Iga2V5OiAke2tleX1gLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEl0ZW08VD4oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yYWdlIGtleSBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IEFwcGxpY2F0aW9uU2V0dGluZ3MuZ2V0U3RyaW5nKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsIGBFcnJvciByZXRyaWV2aW5nIGRhdGEgZm9yIGtleTogJHtrZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmFnZSBrZXkgbXVzdCBiZSBhIHN0cmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoa2V5KTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgcmVtb3ZlZCBkYXRhIGZvciBrZXk6ICR7a2V5fWApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgYEVycm9yIHJlbW92aW5nIGRhdGEgZm9yIGtleTogJHtrZXl9YCwgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3MuY2xlYXIoKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgY2xlYXJlZCBhbGwgc3RvcmFnZScpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGNsZWFyaW5nIHN0b3JhZ2UnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBUcmFuc2FjdGlvbiB9IGZyb20gJy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBCYXNlU2VydmljZSB9IGZyb20gJy4vYmFzZS1zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JhZ2VLZXlzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3N0b3JhZ2Uta2V5cyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25TZXJ2aWNlIGV4dGVuZHMgQmFzZVNlcnZpY2U8VHJhbnNhY3Rpb24+IHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBUQUcgPSAnVHJhbnNhY3Rpb25TZXJ2aWNlJztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3RvcmFnZUtleSA9IFN0b3JhZ2VLZXlzLlRSQU5TQUNUSU9OUztcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCk6IFRyYW5zYWN0aW9uU2VydmljZSB7XG4gICAgICAgIGlmICghVHJhbnNhY3Rpb25TZXJ2aWNlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBUcmFuc2FjdGlvblNlcnZpY2UuaW5zdGFuY2UgPSBuZXcgVHJhbnNhY3Rpb25TZXJ2aWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFRyYW5zYWN0aW9uU2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdHJhbnNmb3JtTG9hZGVkSXRlbXMoaXRlbXM6IGFueVtdKTogVHJhbnNhY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiBpdGVtcy5tYXAoZGF0YSA9PiBuZXcgVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgIGFtb3VudDogTnVtYmVyKGRhdGEuYW1vdW50KSxcbiAgICAgICAgICAgIHRpbWVSZXF1aXJlZDogZGF0YS50aW1lUmVxdWlyZWQgPyBOdW1iZXIoZGF0YS50aW1lUmVxdWlyZWQpIDogdW5kZWZpbmVkXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdHJhbnNhY3Rpb24uYW1vdW50ID0gTnVtYmVyKHRyYW5zYWN0aW9uLmFtb3VudCk7XG4gICAgICAgIGlmIChpc05hTih0cmFuc2FjdGlvbi5hbW91bnQpKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IodGhpcy5UQUcsICdJbnZhbGlkIHRyYW5zYWN0aW9uIGFtb3VudCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkSXRlbSh0cmFuc2FjdGlvbik7XG4gICAgfVxuXG4gICAgdXBkYXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRyYW5zYWN0aW9uLmFtb3VudCA9IE51bWJlcih0cmFuc2FjdGlvbi5hbW91bnQpO1xuICAgICAgICBpZiAoaXNOYU4odHJhbnNhY3Rpb24uYW1vdW50KSkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKHRoaXMuVEFHLCAnSW52YWxpZCB0cmFuc2FjdGlvbiBhbW91bnQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUl0ZW0odHJhbnNhY3Rpb24pO1xuICAgIH1cblxuICAgIGRlbGV0ZVRyYW5zYWN0aW9uKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxldGVJdGVtKGlkKTtcbiAgICB9XG5cbiAgICBnZXRUcmFuc2FjdGlvbnMoKTogVHJhbnNhY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgZ2V0TW9udGhseVRyYW5zYWN0aW9ucyhtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiBUcmFuc2FjdGlvbltdIHtcbiAgICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuZmlsdGVyKHQgPT4gXG4gICAgICAgICAgICBub3cuZ2V0TW9udGgoKSA9PT0gbW9udGggJiYgXG4gICAgICAgICAgICBub3cuZ2V0RnVsbFllYXIoKSA9PT0geWVhclxuICAgICAgICApO1xuICAgIH1cblxuICAgIGdldFRvdGFsSW5jb21lKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zXG4gICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnaW5jb21lJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKHN1bSwgdCkgPT4gc3VtICsgTnVtYmVyKHQuYW1vdW50KSwgMCk7XG4gICAgfVxuXG4gICAgZ2V0VG90YWxFeHBlbnNlcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1xuICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2V4cGVuc2UnKVxuICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyBOdW1iZXIodC5hbW91bnQpLCAwKTtcbiAgICB9XG5cbiAgICBnZXRUb3RhbFRpbWVSZXF1aXJlZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1xuICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2luY29tZScgJiYgdC50aW1lUmVxdWlyZWQpXG4gICAgICAgICAgICAucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIE51bWJlcih0LnRpbWVSZXF1aXJlZCB8fCAwKSwgMCk7XG4gICAgfVxufSIsImV4cG9ydCBjb25zdCBDaGFydENvbG9ycyA9IHtcbiAgICAvLyBBc3NldCBDYXRlZ29yaWVzXG4gICAgUmVhbEVzdGF0ZTogJyM0QzUxQkYnLCAgLy8gSW5kaWdvXG4gICAgVmVoaWNsZXM6ICcjNDhCQjc4JywgICAgLy8gR3JlZW5cbiAgICBDYXNoOiAnIzQyOTlFMScsICAgICAgICAvLyBCbHVlXG4gICAgQnVzaW5lc3M6ICcjRUQ4OTM2JywgICAgLy8gT3JhbmdlXG4gICAgU2F2aW5nOiAnIzlGN0FFQScsICAgICAgLy8gUHVycGxlXG4gICAgU3RvY2tzOiAnI0Y1NjU2NScsICAgICAgLy8gUmVkXG5cbiAgICAvLyBUcmFuc2FjdGlvbiBDYXRlZ29yaWVzIC0gSW5jb21lXG4gICAgU2FsYXJ5OiAnIzQ4QkI3OCcsICAgICAgLy8gR3JlZW5cbiAgICAnSW50ZXJlc3QvRGl2aWRlbmRzJzogJyM5RjdBRUEnLCAvLyBQdXJwbGVcblxuICAgIC8vIFRyYW5zYWN0aW9uIENhdGVnb3JpZXMgLSBFeHBlbnNlXG4gICAgSG91c2luZzogJyM0QzUxQkYnLCAgICAgLy8gSW5kaWdvXG4gICAgVHJhbnNwb3J0YXRpb246ICcjNDhCQjc4JywgLy8gR3JlZW5cbiAgICBGb29kOiAnIzQyOTlFMScsICAgICAgICAvLyBCbHVlXG4gICAgVXRpbGl0aWVzOiAnI0VEODkzNicsICAgLy8gT3JhbmdlXG4gICAgSW5zdXJhbmNlOiAnIzlGN0FFQScsICAgLy8gUHVycGxlXG4gICAgSGVhbHRoY2FyZTogJyNGNTY1NjUnLCAgLy8gUmVkXG4gICAgRW50ZXJ0YWlubWVudDogJyM2NjdFRUEnLCAvLyBJbmRpZ29cbiAgICBMb2FuOiAnI0Q1M0Y4QycsICAgICAgIC8vIFBpbmtcblxuICAgIC8vIExpYWJpbGl0eSBUeXBlc1xuICAgIFNob3J0VGVybTogJyNGNTY1NjUnLCAgIC8vIFJlZFxuICAgIExvbmdUZXJtOiAnIzRDNTFCRicgICAgIC8vIEluZGlnb1xufTsiLCJpbXBvcnQgeyBEaWFsb2dzLCBEaWFsb2dPcHRpb25zIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25EaWFsb2dPcHRpb25zIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBhY3Rpb25zOiBBcnJheTx7IGlkOiBzdHJpbmc7IHRleHQ6IHN0cmluZyB9Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtRGlhbG9nT3B0aW9ucyBleHRlbmRzIERpYWxvZ09wdGlvbnMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIG9rQnV0dG9uVGV4dD86IHN0cmluZztcbiAgICBjYW5jZWxCdXR0b25UZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RpYWxvZyhvcHRpb25zOiBBY3Rpb25EaWFsb2dPcHRpb25zIHwgQ29uZmlybURpYWxvZ09wdGlvbnMpOiBQcm9taXNlPHN0cmluZyB8IGJvb2xlYW4+IHtcbiAgICBpZiAoJ2FjdGlvbnMnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIERpYWxvZ3MuYWN0aW9uKHtcbiAgICAgICAgICAgIHRpdGxlOiBvcHRpb25zLnRpdGxlLFxuICAgICAgICAgICAgbWVzc2FnZTogb3B0aW9ucy5tZXNzYWdlLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBhY3Rpb25zOiBvcHRpb25zLmFjdGlvbnMubWFwKGEgPT4gYS50ZXh0KVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnQ2FuY2VsJykgcmV0dXJuICdjYW5jZWwnO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb25zLmZpbmQoYSA9PiBhLnRleHQgPT09IHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uID8gYWN0aW9uLmlkIDogJ2NhbmNlbCc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gRGlhbG9ncy5jb25maXJtKG9wdGlvbnMgYXMgRGlhbG9nT3B0aW9ucyk7XG59IiwiaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgQXNzZXQgfSBmcm9tICcuLi9tb2RlbHMvYXNzZXQnO1xuaW1wb3J0IHsgTGlhYmlsaXR5IH0gZnJvbSAnLi4vbW9kZWxzL2xpYWJpbGl0eSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOZXRXb3J0aChhc3NldHM6IEFzc2V0W10sIGxpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXSk6IG51bWJlciB7XG4gICAgY29uc3QgdG90YWxBc3NldHMgPSBhc3NldHMucmVkdWNlKChzdW0sIGFzc2V0KSA9PiBzdW0gKyBhc3NldC52YWx1ZSwgMCk7XG4gICAgY29uc3QgdG90YWxMaWFiaWxpdGllcyA9IGxpYWJpbGl0aWVzLnJlZHVjZSgoc3VtLCBsaWFiaWxpdHkpID0+IHN1bSArIGxpYWJpbGl0eS5hbW91bnQsIDApO1xuICAgIHJldHVybiB0b3RhbEFzc2V0cyAtIHRvdGFsTGlhYmlsaXRpZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNb250aGx5Q2FzaGZsb3codHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdKTogbnVtYmVyIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICBjb25zdCBtb250aGx5VHJhbnNhY3Rpb25zID0gdHJhbnNhY3Rpb25zLmZpbHRlcih0ID0+IFxuICAgICAgICB0LmRhdGUuZ2V0TW9udGgoKSA9PT0gY3VycmVudE1vbnRoICYmIFxuICAgICAgICB0LmRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gY3VycmVudFllYXJcbiAgICApO1xuXG4gICAgcmV0dXJuIG1vbnRobHlUcmFuc2FjdGlvbnMucmVkdWNlKChzdW0sIHQpID0+IFxuICAgICAgICBzdW0gKyAodC50eXBlID09PSAnaW5jb21lJyA/IHQuYW1vdW50IDogLXQuYW1vdW50KSwgMFxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEZWJ0VG9JbmNvbWVSYXRpbyhcbiAgICBtb250aGx5SW5jb21lOiBudW1iZXIsIFxuICAgIGxpYWJpbGl0aWVzOiBMaWFiaWxpdHlbXVxuKTogbnVtYmVyIHtcbiAgICBjb25zdCBtb250aGx5RGVidFBheW1lbnRzID0gbGlhYmlsaXRpZXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4ge1xuICAgICAgICAvLyBTaW1wbGUgbW9udGhseSBwYXltZW50IGNhbGN1bGF0aW9uXG4gICAgICAgIGNvbnN0IG1vbnRobHlSYXRlID0gbGlhYmlsaXR5LmludGVyZXN0UmF0ZSAvIDEyIC8gMTAwO1xuICAgICAgICBjb25zdCBtb250aHMgPSBsaWFiaWxpdHkudHlwZSA9PT0gJ0RlYnQvUGF5YWJsZScgPyAxMiA6IDM2MDsgLy8gMSB5ZWFyIG9yIDMwIHllYXJzXG4gICAgICAgIGNvbnN0IHBheW1lbnQgPSAobGlhYmlsaXR5LmFtb3VudCAqIG1vbnRobHlSYXRlICogTWF0aC5wb3coMSArIG1vbnRobHlSYXRlLCBtb250aHMpKSBcbiAgICAgICAgICAgIC8gKE1hdGgucG93KDEgKyBtb250aGx5UmF0ZSwgbW9udGhzKSAtIDEpO1xuICAgICAgICByZXR1cm4gc3VtICsgcGF5bWVudDtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBtb250aGx5RGVidFBheW1lbnRzIC8gbW9udGhseUluY29tZTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3koYW1vdW50OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vIEVuc3VyZSB3ZSdyZSB3b3JraW5nIHdpdGggYSBudW1iZXJcbiAgICBjb25zdCBudW1lcmljQW1vdW50ID0gdHlwZW9mIGFtb3VudCA9PT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KGFtb3VudCkgOiBhbW91bnQ7XG4gICAgXG4gICAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIG51bWJlclxuICAgIGlmIChpc05hTihudW1lcmljQW1vdW50KSkge1xuICAgICAgICByZXR1cm4gJyQwLjAwJztcbiAgICB9XG4gICAgXG4gICAgLy8gRm9ybWF0IHdpdGggMiBkZWNpbWFsIHBsYWNlcyBhbmQgYWRkIGRvbGxhciBzaWduXG4gICAgcmV0dXJuIGAkJHtudW1lcmljQW1vdW50LnRvRml4ZWQoMil9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgICAgICByZXR1cm4gJ0ludmFsaWQgRGF0ZSc7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXTtcbiAgICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGAke21vbnRofSAke2RheX0sICR7eWVhcn1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UGVyY2VudGFnZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nLCBpbmNsdWRlU3ltYm9sOiBib29sZWFuID0gdHJ1ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG4gICAgaWYgKGlzTmFOKG51bWVyaWNWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGluY2x1ZGVTeW1ib2wgPyAnMC4wMCUnIDogJzAuMDAnO1xuICAgIH1cbiAgICByZXR1cm4gYCR7bnVtZXJpY1ZhbHVlLnRvRml4ZWQoMil9JHtpbmNsdWRlU3ltYm9sID8gJyUnIDogJyd9YDtcbn0iLCIvLyBAdHMtaWdub3JlXG5pZiAoZ2xvYmFsLmlzSU9TKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIFVJQ29sb3IucHJvdG90eXBlLmNvbG9yV2l0aEhleFN0cmluZyA9IGZ1bmN0aW9uKGhleDogc3RyaW5nKTogVUlDb2xvciB7XG4gICAgICAgIGxldCByID0gMCwgZyA9IDAsIGIgPSAwO1xuICAgICAgICBcbiAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHIgPSBwYXJzZUludChoZXguY2hhckF0KDApICsgaGV4LmNoYXJBdCgwKSwgMTYpO1xuICAgICAgICAgICAgZyA9IHBhcnNlSW50KGhleC5jaGFyQXQoMSkgKyBoZXguY2hhckF0KDEpLCAxNik7XG4gICAgICAgICAgICBiID0gcGFyc2VJbnQoaGV4LmNoYXJBdCgyKSArIGhleC5jaGFyQXQoMiksIDE2KTtcbiAgICAgICAgfSBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA2KSB7XG4gICAgICAgICAgICByID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygwLCAyKSwgMTYpO1xuICAgICAgICAgICAgZyA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiwgNCksIDE2KTtcbiAgICAgICAgICAgIGIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIFVJQ29sb3IuYWxsb2MoKS5pbml0V2l0aFJlZEdyZWVuQmx1ZUFscGhhKHIvMjU1LCBnLzI1NSwgYi8yNTUsIDEpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgc3RhdGljIGRlYnVnKHRhZzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxvZ01lc3NhZ2UgPSBgWyR7dGFnfV0gJHttZXNzYWdlfWA7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvZ01lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9nTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBbmRyb2lkICYmIGdsb2JhbC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBBbmRyb2lkIHNwZWNpZmljIGNvZGVcbiAgICAgICAgICAgIGFuZHJvaWQudXRpbC5Mb2cuZCh0YWcsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGVycm9yKHRhZzogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGVycm9yPzogRXJyb3IpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbG9nTWVzc2FnZSA9IGBbJHt0YWd9XSBFUlJPUjogJHttZXNzYWdlfWA7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobG9nTWVzc2FnZSk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBbmRyb2lkICYmIGdsb2JhbC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBBbmRyb2lkIHNwZWNpZmljIGNvZGVcbiAgICAgICAgICAgIGFuZHJvaWQudXRpbC5Mb2cuZSh0YWcsIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEZyYW1lIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlVG9QYWdlKHBhZ2VQYXRoOiBzdHJpbmcsIGNvbnRleHQ/OiBhbnkpOiB2b2lkIHtcbiAgICBGcmFtZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBwYWdlUGF0aCxcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgY2xlYXJIaXN0b3J5OiBmYWxzZVxuICAgIH0pO1xufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgQXNzZXQsIEFzc2V0Q2F0ZWdvcnkgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNzZXQnO1xuaW1wb3J0IHsgQXNzZXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXNzZXQtc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQWRkQXNzZXRWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkQXNzZXRWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9wdXJjaGFzZURhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYXRlZ29yaWVzOiBBc3NldENhdGVnb3J5W10gPSBbXG4gICAgICAgICdSZWFsIEVzdGF0ZScsICdCdXNpbmVzcycsICdTdG9ja3MnLCAnQXJ0ICYgQW50aXF1aXRpZXMnLCAnU2F2aW5nL0Nhc2gnXG4gICAgXTtcbiAgICBwcml2YXRlIF9hc3NldFNlcnZpY2U6IEFzc2V0U2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ0Fzc2V0PzogQXNzZXQ7XG5cbiAgICBjb25zdHJ1Y3RvcihleGlzdGluZ0Fzc2V0PzogQXNzZXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlID0gQXNzZXRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nQXNzZXQgPSBleGlzdGluZ0Fzc2V0O1xuXG4gICAgICAgIGlmIChleGlzdGluZ0Fzc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVXaXRoRXhpc3RpbmdBc3NldChleGlzdGluZ0Fzc2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ0Fzc2V0KGFzc2V0OiBBc3NldCkge1xuICAgICAgICB0aGlzLl9uYW1lID0gYXNzZXQubmFtZTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBhc3NldC52YWx1ZTtcbiAgICAgICAgdGhpcy5fcHVyY2hhc2VEYXRlID0gbmV3IERhdGUoYXNzZXQucHVyY2hhc2VEYXRlKTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gdGhpcy5fY2F0ZWdvcmllcy5pbmRleE9mKGFzc2V0LmNhdGVnb3J5KTtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fbmFtZTsgfVxuICAgIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX25hbWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduYW1lJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl92YWx1ZTsgfVxuICAgIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpY1ZhbHVlKSAmJiB0aGlzLl92YWx1ZSAhPT0gbnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3ZhbHVlJywgbnVtZXJpY1ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBwdXJjaGFzZURhdGUoKTogRGF0ZSB7IHJldHVybiB0aGlzLl9wdXJjaGFzZURhdGU7IH1cbiAgICBzZXQgcHVyY2hhc2VEYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgICAgIGlmICh0aGlzLl9wdXJjaGFzZURhdGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wdXJjaGFzZURhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3B1cmNoYXNlRGF0ZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBjYXRlZ29yaWVzKCk6IEFzc2V0Q2F0ZWdvcnlbXSB7IHJldHVybiB0aGlzLl9jYXRlZ29yaWVzOyB9XG4gICAgZ2V0IHNlbGVjdGVkQ2F0ZWdvcnlJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4OyB9XG4gICAgc2V0IHNlbGVjdGVkQ2F0ZWdvcnlJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fzc2V0IG5hbWUgaXMgcmVxdWlyZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTmFOKHRoaXMuX3ZhbHVlKSB8fCB0aGlzLl92YWx1ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBc3NldCB2YWx1ZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFzc2V0ID0gbmV3IEFzc2V0KHtcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5fZXhpc3RpbmdBc3NldCAmJiB7IGlkOiB0aGlzLl9leGlzdGluZ0Fzc2V0LmlkIH0pLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUudHJpbSgpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLl92YWx1ZSxcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdGhpcy5fY2F0ZWdvcmllc1t0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXhdLFxuICAgICAgICAgICAgICAgIHB1cmNoYXNlRGF0ZTogdGhpcy5fcHVyY2hhc2VEYXRlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2V4aXN0aW5nQXNzZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UudXBkYXRlQXNzZXQoYXNzZXQpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgdXBkYXRlZCBhc3NldDogJHthc3NldC5uYW1lfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UuYWRkQXNzZXQoYXNzZXQpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgYWRkZWQgYXNzZXQ6ICR7YXNzZXQubmFtZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5nb0JhY2soKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBzYXZpbmcgYXNzZXQnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBc3NldCwgQXNzZXRDYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy9hc3NldCc7XG5pbXBvcnQgeyBDaGFydENvbG9ycyB9IGZyb20gJy4uLy4uL3V0aWxzL2NoYXJ0LWNvbG9ycyc7XG5pbXBvcnQgeyBEb251dENoYXJ0RGF0YSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2hhcnRzL2RvbnV0LWNoYXJ0JztcblxuZXhwb3J0IGNsYXNzIEFzc2V0RGlzdHJpYnV0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfY2hhcnREYXRhOiBEb251dENoYXJ0RGF0YVtdID0gW107XG5cbiAgICBnZXQgY2hhcnREYXRhKCk6IERvbnV0Q2hhcnREYXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhcnREYXRhO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEoYXNzZXRzOiBBc3NldFtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gYXNzZXRzLnJlZHVjZSgoc3VtLCBhc3NldCkgPT4gc3VtICsgYXNzZXQudmFsdWUsIDApO1xuICAgICAgICBcbiAgICAgICAgLy8gR3JvdXAgYXNzZXRzIGJ5IGNhdGVnb3J5XG4gICAgICAgIGNvbnN0IGNhdGVnb3J5TWFwID0gbmV3IE1hcDxBc3NldENhdGVnb3J5LCBudW1iZXI+KCk7XG4gICAgICAgIGFzc2V0cy5mb3JFYWNoKGFzc2V0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBjYXRlZ29yeU1hcC5nZXQoYXNzZXQuY2F0ZWdvcnkpIHx8IDA7XG4gICAgICAgICAgICBjYXRlZ29yeU1hcC5zZXQoYXNzZXQuY2F0ZWdvcnksIGN1cnJlbnQgKyBhc3NldC52YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gY2hhcnQgZGF0YVxuICAgICAgICB0aGlzLl9jaGFydERhdGEgPSBBcnJheS5mcm9tKGNhdGVnb3J5TWFwLmVudHJpZXMoKSlcbiAgICAgICAgICAgIC5tYXAoKFtjYXRlZ29yeSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBjb2xvcjogQ2hhcnRDb2xvcnNbY2F0ZWdvcnldLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKHZhbHVlIC8gdG90YWwpICogMTAwKSA6IDBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjaGFydERhdGEnLCB0aGlzLl9jaGFydERhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IEFzc2V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Fzc2V0JztcbmltcG9ydCB7IEFzc2V0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Fzc2V0LXNlcnZpY2UnO1xuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3ksIGZvcm1hdERhdGUgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXR0ZXJzJztcbmltcG9ydCB7IG5hdmlnYXRlVG9QYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBzaG93RGlhbG9nIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBBc3NldERpc3RyaWJ1dGlvblZpZXdNb2RlbCB9IGZyb20gJy4vYXNzZXQtZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwnO1xuXG5jb25zdCBUQUcgPSAnQXNzZXRMaXN0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEFzc2V0TGlzdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX2Fzc2V0U2VydmljZTogQXNzZXRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2Fzc2V0czogQXNzZXRbXSA9IFtdO1xuICAgIHByaXZhdGUgX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDogQXNzZXREaXN0cmlidXRpb25WaWV3TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fYXNzZXRTZXJ2aWNlID0gQXNzZXRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbCA9IG5ldyBBc3NldERpc3RyaWJ1dGlvblZpZXdNb2RlbCgpO1xuICAgICAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgICB9XG5cbiAgICBnZXQgYXNzZXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXNzZXRzLm1hcChhc3NldCA9PiAoe1xuICAgICAgICAgICAgLi4uYXNzZXQsXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0Q3VycmVuY3koYXNzZXQudmFsdWUpLFxuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogZm9ybWF0RGF0ZShhc3NldC5wdXJjaGFzZURhdGUpXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxBc3NldHNGb3JtYXR0ZWQoKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9hc3NldFNlcnZpY2UuZ2V0VG90YWxBc3NldFZhbHVlKCkpO1xuICAgIH1cblxuICAgIGdldCBkaXN0cmlidXRpb25WaWV3TW9kZWwoKTogQXNzZXREaXN0cmlidXRpb25WaWV3TW9kZWwge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsO1xuICAgIH1cblxuICAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdSZWZyZXNoaW5nIGFzc2V0cyBsaXN0Jyk7XG4gICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgIH1cblxuICAgIG9uQWRkQXNzZXQoKTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvYXNzZXRzL2FkZC1hc3NldC1wYWdlXCIpO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXNzZXQgaXRlbSB0YXBwZWQnKTtcbiAgICAgICAgY29uc3QgYXNzZXQgPSB0aGlzLl9hc3NldHNbYXJncy5pbmRleF07XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6IGFzc2V0Lm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVmFsdWU6ICR7Zm9ybWF0Q3VycmVuY3koYXNzZXQudmFsdWUpfVxcblB1cmNoYXNlIERhdGU6ICR7Zm9ybWF0RGF0ZShhc3NldC5wdXJjaGFzZURhdGUpfWAsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgeyBpZDogJ2VkaXQnLCB0ZXh0OiAnRWRpdCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnZGVsZXRlJywgdGV4dDogJ0RlbGV0ZScgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRBc3NldChhc3NldCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFzc2V0KGFzc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGhhbmRsaW5nIGl0ZW0gdGFwJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRBc3NldHMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9hc3NldHMgPSB0aGlzLl9hc3NldFNlcnZpY2UuZ2V0QXNzZXRzKCk7XG4gICAgICAgICAgICB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWwudXBkYXRlRGF0YSh0aGlzLl9hc3NldHMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnYXNzZXRzJywgdGhpcy5hc3NldHMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxBc3NldHNGb3JtYXR0ZWQnLCB0aGlzLnRvdGFsQXNzZXRzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBMb2FkZWQgJHt0aGlzLl9hc3NldHMubGVuZ3RofSBhc3NldHNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBsb2FkaW5nIGFzc2V0cycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZWRpdEFzc2V0KGFzc2V0OiBBc3NldCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgRWRpdGluZyBhc3NldDogJHthc3NldC5pZH1gKTtcbiAgICAgICAgbmF2aWdhdGVUb1BhZ2UoJ3ZpZXdzL2Fzc2V0cy9hZGQtYXNzZXQtcGFnZScsIHsgYXNzZXQgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVBc3NldChhc3NldDogQXNzZXQpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYERlbGV0aW5nIGFzc2V0OiAke2Fzc2V0LmlkfWApO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBhc3NldD8nLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnRGVsZXRlJyxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3NldFNlcnZpY2UuZGVsZXRlQXNzZXQoYXNzZXQuaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBBc3NldCBkZWxldGVkOiAke2Fzc2V0LmlkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgZGVsZXRpbmcgYXNzZXQnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBGcmFtZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQmFzZVZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBCYXNlVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgZ29CYWNrKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnQXR0ZW1wdGluZyB0byBuYXZpZ2F0ZSBiYWNrJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLnRvcG1vc3QoKTtcbiAgICAgICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgICAgICAgIGZyYW1lLmdvQmFjaygpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdTdWNjZXNzZnVsbHkgbmF2aWdhdGVkIGJhY2snKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0ZyYW1lIGlzIG51bGwsIGNhbm5vdCBuYXZpZ2F0ZSBiYWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgbmF2aWdhdGluZyBiYWNrJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZSc7XG5pbXBvcnQgeyBBc3NldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hc3NldC1zZXJ2aWNlJztcbmltcG9ydCB7IExpYWJpbGl0eVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9saWFiaWxpdHktc2VydmljZSc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnRGFzaGJvYXJkVmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX25ldFdvcnRoOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RvdGFsSW5jb21lOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RvdGFsRXhwZW5zZXM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxBc3NldHM6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfdG90YWxMaWFiaWxpdGllczogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9jYXNoZmxvdzogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9ob3VybHlSYXRlOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3NoYXJwZVJhdGlvOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIHRyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgYXNzZXRTZXJ2aWNlOiBBc3NldFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBsaWFiaWxpdHlTZXJ2aWNlOiBMaWFiaWxpdHlTZXJ2aWNlO1xuICAgIHByaXZhdGUgbW9udGhseVNuYXBzaG90U2VydmljZTogTW9udGhseVNuYXBzaG90U2VydmljZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmFzc2V0U2VydmljZSA9IEFzc2V0U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLmxpYWJpbGl0eVNlcnZpY2UgPSBMaWFiaWxpdHlTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubW9udGhseVNuYXBzaG90U2VydmljZSA9IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVGaW5hbmNpYWxzKCk7XG4gICAgfVxuXG4gICAgZ2V0IG5ldFdvcnRoRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9uZXRXb3J0aCk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsSW5jb21lRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl90b3RhbEluY29tZSk7XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsRXhwZW5zZXNGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX3RvdGFsRXhwZW5zZXMpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbEFzc2V0c0Zvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fdG90YWxBc3NldHMpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl90b3RhbExpYWJpbGl0aWVzKTtcbiAgICB9XG5cbiAgICBnZXQgY2FzaGZsb3dGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdEN1cnJlbmN5KHRoaXMuX2Nhc2hmbG93KTtcbiAgICB9XG5cbiAgICBnZXQgaG91cmx5UmF0ZUZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3koTWF0aC5yb3VuZCh0aGlzLl9ob3VybHlSYXRlICogMTAwKSAvIDEwMCk7XG4gICAgfVxuXG4gICAgZ2V0IGNhc2hmbG93KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXNoZmxvdztcbiAgICB9XG5cbiAgICBnZXQgc2hhcnBlUmF0aW9Gb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NoYXJwZVJhdGlvICE9PSBudWxsIFxuICAgICAgICAgICAgPyBmb3JtYXRQZXJjZW50YWdlKHRoaXMuX3NoYXJwZVJhdGlvLCBmYWxzZSlcbiAgICAgICAgICAgIDogJ04vQSc7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVGaW5hbmNpYWxzKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRvdGFsc1xuICAgICAgICAgICAgdGhpcy5fdG90YWxBc3NldHMgPSB0aGlzLmFzc2V0U2VydmljZS5nZXRUb3RhbEFzc2V0VmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuX3RvdGFsTGlhYmlsaXRpZXMgPSB0aGlzLmxpYWJpbGl0eVNlcnZpY2UuZ2V0VG90YWxMaWFiaWxpdGllcygpO1xuICAgICAgICAgICAgdGhpcy5fdG90YWxJbmNvbWUgPSB0aGlzLnRyYW5zYWN0aW9uU2VydmljZS5nZXRUb3RhbEluY29tZSgpO1xuICAgICAgICAgICAgdGhpcy5fdG90YWxFeHBlbnNlcyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRvdGFsRXhwZW5zZXMoKTtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldCB3b3J0aFxuICAgICAgICAgICAgdGhpcy5fbmV0V29ydGggPSB0aGlzLl90b3RhbEFzc2V0cyAtIHRoaXMuX3RvdGFsTGlhYmlsaXRpZXM7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBtb250aGx5IGNhc2hmbG93XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TW9udGggPSBjdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgY29uc3QgbW9udGhseVRyYW5zYWN0aW9ucyA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldE1vbnRobHlUcmFuc2FjdGlvbnMoY3VycmVudE1vbnRoLCBjdXJyZW50WWVhcik7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vbnRobHlJbmNvbWUgPSBtb250aGx5VHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gJ2luY29tZScpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMCk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vbnRobHlFeHBlbnNlcyA9IG1vbnRobHlUcmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHQgPT4gdC50eXBlID09PSAnZXhwZW5zZScpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoc3VtLCB0KSA9PiBzdW0gKyB0LmFtb3VudCwgMCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2Nhc2hmbG93ID0gbW9udGhseUluY29tZSAtIG1vbnRobHlFeHBlbnNlcztcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGhvdXJseSByYXRlXG4gICAgICAgICAgICBjb25zdCB0b3RhbFRpbWVSZXF1aXJlZCA9IHRoaXMudHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRvdGFsVGltZVJlcXVpcmVkKCk7XG4gICAgICAgICAgICB0aGlzLl9ob3VybHlSYXRlID0gdG90YWxUaW1lUmVxdWlyZWQgPiAwID8gdGhpcy5fdG90YWxJbmNvbWUgLyB0b3RhbFRpbWVSZXF1aXJlZCA6IDA7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBTaGFycGUgUmF0aW9cbiAgICAgICAgICAgIHRoaXMuX3NoYXJwZVJhdGlvID0gdGhpcy5tb250aGx5U25hcHNob3RTZXJ2aWNlLmNhbGN1bGF0ZVNoYXJwZVJhdGlvKCk7XG5cbiAgICAgICAgICAgIC8vIE5vdGlmeSBhbGwgcHJvcGVydHkgY2hhbmdlc1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0V29ydGhGb3JtYXR0ZWQnLCB0aGlzLm5ldFdvcnRoRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsSW5jb21lRm9ybWF0dGVkJywgdGhpcy50b3RhbEluY29tZUZvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbEV4cGVuc2VzRm9ybWF0dGVkJywgdGhpcy50b3RhbEV4cGVuc2VzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsQXNzZXRzRm9ybWF0dGVkJywgdGhpcy50b3RhbEFzc2V0c0Zvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkJywgdGhpcy50b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Nhc2hmbG93Rm9ybWF0dGVkJywgdGhpcy5jYXNoZmxvd0Zvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjYXNoZmxvdycsIHRoaXMuY2FzaGZsb3cpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnaG91cmx5UmF0ZUZvcm1hdHRlZCcsIHRoaXMuaG91cmx5UmF0ZUZvcm1hdHRlZCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzaGFycGVSYXRpb0Zvcm1hdHRlZCcsIHRoaXMuc2hhcnBlUmF0aW9Gb3JtYXR0ZWQpO1xuXG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnRmluYW5jaWFsIGNhbGN1bGF0aW9ucyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgY2FsY3VsYXRpbmcgZmluYW5jaWFscycsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IExpYWJpbGl0eSwgTGlhYmlsaXR5VHlwZSB9IGZyb20gJy4uLy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBZGRMaWFiaWxpdHlWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkTGlhYmlsaXR5Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBfYW1vdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2ludGVyZXN0UmF0ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9kdWVEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZFR5cGVJbmRleDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF90eXBlczogTGlhYmlsaXR5VHlwZVtdID0gWydMb2FuJywgJ0RlYnQvUGF5YWJsZSddO1xuICAgIHByaXZhdGUgX2xpYWJpbGl0eVNlcnZpY2U6IExpYWJpbGl0eVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXhpc3RpbmdMaWFiaWxpdHk/OiBMaWFiaWxpdHk7XG5cbiAgICBjb25zdHJ1Y3RvcihleGlzdGluZ0xpYWJpbGl0eT86IExpYWJpbGl0eSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlID0gTGlhYmlsaXR5U2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9leGlzdGluZ0xpYWJpbGl0eSA9IGV4aXN0aW5nTGlhYmlsaXR5O1xuXG4gICAgICAgIGlmIChleGlzdGluZ0xpYWJpbGl0eSkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nTGlhYmlsaXR5KGV4aXN0aW5nTGlhYmlsaXR5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ0xpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbGlhYmlsaXR5Lm5hbWU7XG4gICAgICAgIHRoaXMuX2Ftb3VudCA9IGxpYWJpbGl0eS5hbW91bnQ7XG4gICAgICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IGxpYWJpbGl0eS5pbnRlcmVzdFJhdGU7XG4gICAgICAgIHRoaXMuX2R1ZURhdGUgPSBuZXcgRGF0ZShsaWFiaWxpdHkuZHVlRGF0ZSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVHlwZUluZGV4ID0gdGhpcy5fdHlwZXMuaW5kZXhPZihsaWFiaWxpdHkudHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX25hbWU7IH1cbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9uYW1lICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmFtZScsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBhbW91bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2Ftb3VudDsgfVxuICAgIHNldCBhbW91bnQodmFsdWU6IG51bWJlciB8IHN0cmluZykge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICBpZiAoIWlzTmFOKG51bWVyaWNWYWx1ZSkgJiYgdGhpcy5fYW1vdW50ICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2Ftb3VudCA9IG51bWVyaWNWYWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2Ftb3VudCcsIG51bWVyaWNWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaW50ZXJlc3RSYXRlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9pbnRlcmVzdFJhdGU7IH1cbiAgICBzZXQgaW50ZXJlc3RSYXRlKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIHRoaXMuX2ludGVyZXN0UmF0ZSAhPT0gbnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlcmVzdFJhdGUgPSBudW1lcmljVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdpbnRlcmVzdFJhdGUnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKTogRGF0ZSB7IHJldHVybiB0aGlzLl9kdWVEYXRlOyB9XG4gICAgc2V0IGR1ZURhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2R1ZURhdGUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdkdWVEYXRlJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHR5cGVzKCk6IExpYWJpbGl0eVR5cGVbXSB7IHJldHVybiB0aGlzLl90eXBlczsgfVxuICAgIGdldCBzZWxlY3RlZFR5cGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXg7IH1cbiAgICBzZXQgc2VsZWN0ZWRUeXBlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRUeXBlSW5kZXggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZFR5cGVJbmRleCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRUeXBlSW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMaWFiaWxpdHkgbmFtZSBpcyByZXF1aXJlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5fYW1vdW50KSB8fCB0aGlzLl9hbW91bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTGlhYmlsaXR5IGFtb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLl9pbnRlcmVzdFJhdGUpIHx8IHRoaXMuX2ludGVyZXN0UmF0ZSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludGVyZXN0IHJhdGUgbXVzdCBiZSAwIG9yIGdyZWF0ZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbGlhYmlsaXR5ID0gbmV3IExpYWJpbGl0eSh7XG4gICAgICAgICAgICAgICAgLi4uKHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5ICYmIHsgaWQ6IHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5LmlkIH0pLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuX25hbWUudHJpbSgpLFxuICAgICAgICAgICAgICAgIGFtb3VudDogdGhpcy5fYW1vdW50LFxuICAgICAgICAgICAgICAgIGludGVyZXN0UmF0ZTogdGhpcy5faW50ZXJlc3RSYXRlLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuX3R5cGVzW3RoaXMuX3NlbGVjdGVkVHlwZUluZGV4XSxcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiB0aGlzLl9kdWVEYXRlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuX2V4aXN0aW5nTGlhYmlsaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGlhYmlsaXR5U2VydmljZS51cGRhdGVMaWFiaWxpdHkobGlhYmlsaXR5KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgbGlhYmlsaXR5OiAke2xpYWJpbGl0eS5uYW1lfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9saWFiaWxpdHlTZXJ2aWNlLmFkZExpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgYWRkZWQgbGlhYmlsaXR5OiAke2xpYWJpbGl0eS5uYW1lfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIHNhdmluZyBsaWFiaWxpdHknLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBMaWFiaWxpdHksIExpYWJpbGl0eVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvbGlhYmlsaXR5JztcbmltcG9ydCB7IENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IERvbnV0Q2hhcnREYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQnO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5RGlzdHJpYnV0aW9uVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBfY2hhcnREYXRhOiBEb251dENoYXJ0RGF0YVtdID0gW107XG5cbiAgICBnZXQgY2hhcnREYXRhKCk6IERvbnV0Q2hhcnREYXRhW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hhcnREYXRhO1xuICAgIH1cblxuICAgIHVwZGF0ZURhdGEobGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gbGlhYmlsaXRpZXMucmVkdWNlKChzdW0sIGxpYWJpbGl0eSkgPT4gc3VtICsgbGlhYmlsaXR5LmFtb3VudCwgMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBHcm91cCBsaWFiaWxpdGllcyBieSB0eXBlXG4gICAgICAgIGNvbnN0IHR5cGVNYXAgPSBuZXcgTWFwPExpYWJpbGl0eVR5cGUsIG51bWJlcj4oKTtcbiAgICAgICAgbGlhYmlsaXRpZXMuZm9yRWFjaChsaWFiaWxpdHkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHR5cGVNYXAuZ2V0KGxpYWJpbGl0eS50eXBlKSB8fCAwO1xuICAgICAgICAgICAgdHlwZU1hcC5zZXQobGlhYmlsaXR5LnR5cGUsIGN1cnJlbnQgKyBsaWFiaWxpdHkuYW1vdW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29udmVydCB0byBjaGFydCBkYXRhXG4gICAgICAgIHRoaXMuX2NoYXJ0RGF0YSA9IEFycmF5LmZyb20odHlwZU1hcC5lbnRyaWVzKCkpXG4gICAgICAgICAgICAubWFwKChbdHlwZSwgdmFsdWVdKSA9PiAoe1xuICAgICAgICAgICAgICAgIGxhYmVsOiB0eXBlLFxuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIGNvbG9yOiB0eXBlID09PSAnRGVidC9QYXlhYmxlJyA/IENoYXJ0Q29sb3JzLlNob3J0VGVybSA6IENoYXJ0Q29sb3JzLkxvbmdUZXJtLFxuICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IHRvdGFsID4gMCA/IE1hdGgucm91bmQoKHZhbHVlIC8gdG90YWwpICogMTAwKSA6IDBcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIudmFsdWUgLSBhLnZhbHVlKTtcblxuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdjaGFydERhdGEnLCB0aGlzLl9jaGFydERhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCYXNlVmlld01vZGVsIH0gZnJvbSAnLi4vYmFzZS12aWV3LW1vZGVsJztcbmltcG9ydCB7IExpYWJpbGl0eSB9IGZyb20gJy4uLy4uL21vZGVscy9saWFiaWxpdHknO1xuaW1wb3J0IHsgTGlhYmlsaXR5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2xpYWJpbGl0eS1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBuYXZpZ2F0ZVRvUGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL25hdmlnYXRpb24nO1xuaW1wb3J0IHsgc2hvd0RpYWxvZywgQ29uZmlybURpYWxvZ09wdGlvbnMgfSBmcm9tICcuLi8uLi91dGlscy9kaWFsb2cnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcbmltcG9ydCB7IExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCB9IGZyb20gJy4vbGlhYmlsaXR5LWRpc3RyaWJ1dGlvbi12aWV3LW1vZGVsJztcblxuY29uc3QgVEFHID0gJ0xpYWJpbGl0eUxpc3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTGlhYmlsaXR5TGlzdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX2xpYWJpbGl0eVNlcnZpY2U6IExpYWJpbGl0eVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfbGlhYmlsaXRpZXM6IExpYWJpbGl0eVtdID0gW107XG4gICAgcHJpdmF0ZSBfZGlzdHJpYnV0aW9uVmlld01vZGVsOiBMaWFiaWxpdHlEaXN0cmlidXRpb25WaWV3TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fbGlhYmlsaXR5U2VydmljZSA9IExpYWJpbGl0eVNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsID0gbmV3IExpYWJpbGl0eURpc3RyaWJ1dGlvblZpZXdNb2RlbCgpO1xuICAgICAgICB0aGlzLmxvYWRMaWFiaWxpdGllcygpO1xuICAgIH1cblxuICAgIGdldCBsaWFiaWxpdGllcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpYWJpbGl0aWVzLm1hcChsaWFiaWxpdHkgPT4gKHtcbiAgICAgICAgICAgIC4uLmxpYWJpbGl0eSxcbiAgICAgICAgICAgIGZvcm1hdHRlZEFtb3VudDogZm9ybWF0Q3VycmVuY3kobGlhYmlsaXR5LmFtb3VudCksXG4gICAgICAgICAgICBmb3JtYXR0ZWRJbnRlcmVzdFJhdGU6IGZvcm1hdFBlcmNlbnRhZ2UobGlhYmlsaXR5LmludGVyZXN0UmF0ZSlcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldCB0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkKCkge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fbGlhYmlsaXR5U2VydmljZS5nZXRUb3RhbExpYWJpbGl0aWVzKCkpO1xuICAgIH1cblxuICAgIGdldCBkaXN0cmlidXRpb25WaWV3TW9kZWwoKTogTGlhYmlsaXR5RGlzdHJpYnV0aW9uVmlld01vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICByZWZyZXNoKCk6IHZvaWQge1xuICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnUmVmcmVzaGluZyBsaWFiaWxpdGllcyBsaXN0Jyk7XG4gICAgICAgIHRoaXMubG9hZExpYWJpbGl0aWVzKCk7XG4gICAgfVxuXG4gICAgb25BZGRMaWFiaWxpdHkoKTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKFwidmlld3MvbGlhYmlsaXRpZXMvYWRkLWxpYWJpbGl0eS1wYWdlXCIpO1xuICAgIH1cblxuICAgIG9uSXRlbVRhcChhcmdzOiB7IGluZGV4OiBudW1iZXIgfSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaWFiaWxpdHkgPSB0aGlzLl9saWFiaWxpdGllc1thcmdzLmluZGV4XTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogbGlhYmlsaXR5Lm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQW1vdW50OiAke2Zvcm1hdEN1cnJlbmN5KGxpYWJpbGl0eS5hbW91bnQpfVxcbkludGVyZXN0IFJhdGU6ICR7Zm9ybWF0UGVyY2VudGFnZShsaWFiaWxpdHkuaW50ZXJlc3RSYXRlKX1gLFxuICAgICAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdlZGl0JywgdGV4dDogJ0VkaXQnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ2RlbGV0ZScsIHRleHQ6ICdEZWxldGUnIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TGlhYmlsaXR5KGxpYWJpbGl0eSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRMaWFiaWxpdGllcygpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2xpYWJpbGl0aWVzID0gdGhpcy5fbGlhYmlsaXR5U2VydmljZS5nZXRMaWFiaWxpdGllcygpO1xuICAgICAgICAgICAgdGhpcy5fZGlzdHJpYnV0aW9uVmlld01vZGVsLnVwZGF0ZURhdGEodGhpcy5fbGlhYmlsaXRpZXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbGlhYmlsaXRpZXMnLCB0aGlzLmxpYWJpbGl0aWVzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3RvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQnLCB0aGlzLnRvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYExvYWRlZCAke3RoaXMuX2xpYWJpbGl0aWVzLmxlbmd0aH0gbGlhYmlsaXRpZXNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihUQUcsICdFcnJvciBsb2FkaW5nIGxpYWJpbGl0aWVzJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0TGlhYmlsaXR5KGxpYWJpbGl0eTogTGlhYmlsaXR5KTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9saWFiaWxpdGllcy9hZGQtbGlhYmlsaXR5LXBhZ2UnLCB7IGxpYWJpbGl0eSB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRlbGV0ZUxpYWJpbGl0eShsaWFiaWxpdHk6IExpYWJpbGl0eSk6IHZvaWQge1xuICAgICAgICBjb25zdCBkaWFsb2dPcHRpb25zOiBDb25maXJtRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybSBEZWxldGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaWFiaWxpdHk/JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHNob3dEaWFsb2coZGlhbG9nT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpYWJpbGl0eVNlcnZpY2UuZGVsZXRlTGlhYmlsaXR5KGxpYWJpbGl0eS5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTGlhYmlsaXRpZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuL2Jhc2Utdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3QgfSBmcm9tICcuLi9tb2RlbHMvbW9udGhseS1zbmFwc2hvdCc7XG5pbXBvcnQgeyBNb250aGx5U25hcHNob3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbW9udGhseS1zbmFwc2hvdC1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5pbXBvcnQgeyBzaG93RGlhbG9nIH0gZnJvbSAnLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdNb250aGx5U25hcHNob3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgTW9udGhseVNuYXBzaG90Vmlld01vZGVsIGV4dGVuZHMgQmFzZVZpZXdNb2RlbCB7XG4gICAgcHJpdmF0ZSBfc25hcHNob3RTZXJ2aWNlOiBNb250aGx5U25hcHNob3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgX25ldEFzc2V0OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkWWVhcjogbnVtYmVyO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkTW9udGg6IG51bWJlcjtcbiAgICBwcml2YXRlIF95ZWFyczogbnVtYmVyW10gPSBbXTtcbiAgICBwcml2YXRlIF9tb250aHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsXG4gICAgICAgICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZSA9IE1vbnRobHlTbmFwc2hvdFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplWWVhcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVZZWFycygpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMuX3llYXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gY3VycmVudFllYXIgLSAyICsgaSk7XG4gICAgfVxuXG4gICAgZ2V0IG5ldEFzc2V0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9uZXRBc3NldDsgfVxuICAgIHNldCBuZXRBc3NldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9uZXRBc3NldCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25ldEFzc2V0ID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCduZXRBc3NldCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZFllYXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3NlbGVjdGVkWWVhcjsgfVxuICAgIHNldCBzZWxlY3RlZFllYXIodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRZZWFyICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRZZWFyID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZFllYXInLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWRNb250aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fc2VsZWN0ZWRNb250aDsgfVxuICAgIHNldCBzZWxlY3RlZE1vbnRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkTW9udGggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZE1vbnRoJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHllYXJzKCk6IG51bWJlcltdIHsgcmV0dXJuIHRoaXMuX3llYXJzOyB9XG4gICAgZ2V0IG1vbnRocygpOiBzdHJpbmdbXSB7IHJldHVybiB0aGlzLl9tb250aHM7IH1cblxuICAgIGdldCBzbmFwc2hvdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZ2V0U25hcHNob3RzKClcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGEueWVhciAhPT0gYi55ZWFyKSByZXR1cm4gYi55ZWFyIC0gYS55ZWFyO1xuICAgICAgICAgICAgICAgIHJldHVybiBiLm1vbnRoIC0gYS5tb250aDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKHNuYXBzaG90ID0+ICh7XG4gICAgICAgICAgICAgICAgLi4uc25hcHNob3QsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogYCR7dGhpcy5fbW9udGhzW3NuYXBzaG90Lm1vbnRoXX0gJHtzbmFwc2hvdC55ZWFyfWAsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkTmV0QXNzZXQ6IGZvcm1hdEN1cnJlbmN5KHNuYXBzaG90Lm5ldEFzc2V0KSxcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRQZXJjZW50YWdlQ2hhbmdlOiBzbmFwc2hvdC5wZXJjZW50YWdlQ2hhbmdlIFxuICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdFBlcmNlbnRhZ2Uoc25hcHNob3QucGVyY2VudGFnZUNoYW5nZSlcbiAgICAgICAgICAgICAgICAgICAgOiAnTi9BJ1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZXRBc3NldCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXQgYXNzZXQgdmFsdWUgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBzbmFwc2hvdCBhbHJlYWR5IGV4aXN0cyBmb3Igc2VsZWN0ZWQgbW9udGgveWVhclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZ2V0U25hcHNob3RzKCkuZmluZChcbiAgICAgICAgICAgICAgICBzID0+IHMueWVhciA9PT0gdGhpcy5fc2VsZWN0ZWRZZWFyICYmIHMubW9udGggPT09IHRoaXMuX3NlbGVjdGVkTW9udGhcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NuYXBzaG90IEV4aXN0cycsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBIHNuYXBzaG90IGFscmVhZHkgZXhpc3RzIGZvciB0aGlzIG1vbnRoLiBEbyB5b3Ugd2FudCB0byB1cGRhdGUgaXQ/JyxcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnVXBkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLm5ldEFzc2V0ID0gdGhpcy5fbmV0QXNzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UudXBkYXRlU25hcHNob3QoZXhpc3RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgTW9udGhseVNuYXBzaG90KHtcbiAgICAgICAgICAgICAgICB5ZWFyOiB0aGlzLl9zZWxlY3RlZFllYXIsXG4gICAgICAgICAgICAgICAgbW9udGg6IHRoaXMuX3NlbGVjdGVkTW9udGgsXG4gICAgICAgICAgICAgICAgbmV0QXNzZXQ6IHRoaXMuX25ldEFzc2V0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlLmFkZFNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCAnU3VjY2Vzc2Z1bGx5IHNhdmVkIHNuYXBzaG90Jyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIHNuYXBzaG90JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IHsgaW5kZXg6IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90ID0gdGhpcy5fc25hcHNob3RTZXJ2aWNlLmdldFNuYXBzaG90cygpW2FyZ3MuaW5kZXhdO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiBgJHt0aGlzLl9tb250aHNbc25hcHNob3QubW9udGhdfSAke3NuYXBzaG90LnllYXJ9YCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBOZXQgQXNzZXQ6ICR7Zm9ybWF0Q3VycmVuY3koc25hcHNob3QubmV0QXNzZXQpfWAsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgeyBpZDogJ2VkaXQnLCB0ZXh0OiAnRWRpdCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnZGVsZXRlJywgdGV4dDogJ0RlbGV0ZScgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0U25hcHNob3Qoc25hcHNob3Q6IE1vbnRobHlTbmFwc2hvdCkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFllYXIgPSBzbmFwc2hvdC55ZWFyO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gc25hcHNob3QubW9udGg7XG4gICAgICAgIHRoaXMuX25ldEFzc2V0ID0gc25hcHNob3QubmV0QXNzZXQ7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkWWVhcicsIHRoaXMuX3NlbGVjdGVkWWVhcik7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkTW9udGgnLCB0aGlzLl9zZWxlY3RlZE1vbnRoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0QXNzZXQnLCB0aGlzLl9uZXRBc3NldCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVTbmFwc2hvdChzbmFwc2hvdDogTW9udGhseVNuYXBzaG90KSB7XG4gICAgICAgIHNob3dEaWFsb2coe1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtIERlbGV0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHNuYXBzaG90PycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NuYXBzaG90U2VydmljZS5kZWxldGVTbmFwc2hvdChzbmFwc2hvdC5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc25hcHNob3RzJywgdGhpcy5zbmFwc2hvdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgdGhpcy5fbmV0QXNzZXQgPSAwO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZFllYXInLCB0aGlzLl9zZWxlY3RlZFllYXIpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzZWxlY3RlZE1vbnRoJywgdGhpcy5fc2VsZWN0ZWRNb250aCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ25ldEFzc2V0JywgdGhpcy5fbmV0QXNzZXQpO1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzbmFwc2hvdHMnLCB0aGlzLnNuYXBzaG90cyk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90IH0gZnJvbSAnLi4vLi4vbW9kZWxzL21vbnRobHktc25hcHNob3QnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vbnRobHktc25hcHNob3Qtc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudEJ1c1NlcnZpY2UsIEV2ZW50TmFtZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC1idXMtc2VydmljZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuXG5jb25zdCBUQUcgPSAnQWRkU25hcHNob3RWaWV3TW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQWRkU25hcHNob3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9uZXRBc3NldDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF95ZWFySW5kZXg6IG51bWJlciA9IDI7IC8vIERlZmF1bHQgdG8gY3VycmVudCB5ZWFyIChtaWRkbGUgb2YgdGhlIDUteWVhciByYW5nZSlcbiAgICBwcml2YXRlIF9zZWxlY3RlZE1vbnRoOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfeWVhcnM6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBfbW9udGhzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgXTtcbiAgICBwcml2YXRlIF9zbmFwc2hvdFNlcnZpY2U6IE1vbnRobHlTbmFwc2hvdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXZlbnRCdXM6IEV2ZW50QnVzU2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ1NuYXBzaG90PzogTW9udGhseVNuYXBzaG90O1xuXG4gICAgY29uc3RydWN0b3IoZXhpc3RpbmdTbmFwc2hvdD86IE1vbnRobHlTbmFwc2hvdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UgPSBNb250aGx5U25hcHNob3RTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V2ZW50QnVzID0gRXZlbnRCdXNTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nU25hcHNob3QgPSBleGlzdGluZ1NuYXBzaG90O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZE1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVllYXJzKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZXhpc3RpbmdTbmFwc2hvdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplV2l0aEV4aXN0aW5nU25hcHNob3QoZXhpc3RpbmdTbmFwc2hvdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbmV0QXNzZXQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX25ldEFzc2V0OyB9XG4gICAgc2V0IG5ldEFzc2V0KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIHRoaXMuX25ldEFzc2V0ICE9PSBudW1lcmljVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25ldEFzc2V0ID0gbnVtZXJpY1ZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnbmV0QXNzZXQnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHllYXJJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5feWVhckluZGV4OyB9XG4gICAgc2V0IHllYXJJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl95ZWFySW5kZXggIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl95ZWFySW5kZXggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3llYXJJbmRleCcsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZFllYXIoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX3llYXJzW3RoaXMuX3llYXJJbmRleF07IH1cblxuICAgIGdldCBzZWxlY3RlZE1vbnRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZE1vbnRoOyB9XG4gICAgc2V0IHNlbGVjdGVkTW9udGgodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRNb250aCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ3NlbGVjdGVkTW9udGgnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgeWVhcnMoKTogbnVtYmVyW10geyByZXR1cm4gdGhpcy5feWVhcnM7IH1cbiAgICBnZXQgbW9udGhzKCk6IHN0cmluZ1tdIHsgcmV0dXJuIHRoaXMuX21vbnRoczsgfVxuICAgIGdldCBpc0VkaXRpbmcoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuX2V4aXN0aW5nU25hcHNob3Q7IH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVllYXJzKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5feWVhcnMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sIChfLCBpKSA9PiBjdXJyZW50WWVhciAtIDIgKyBpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVXaXRoRXhpc3RpbmdTbmFwc2hvdChzbmFwc2hvdDogTW9udGhseVNuYXBzaG90KSB7XG4gICAgICAgIHRoaXMuX25ldEFzc2V0ID0gc25hcHNob3QubmV0QXNzZXQ7XG4gICAgICAgIHRoaXMuX3llYXJJbmRleCA9IHRoaXMuX3llYXJzLmluZGV4T2Yoc25hcHNob3QueWVhcik7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkTW9udGggPSBzbmFwc2hvdC5tb250aDtcbiAgICB9XG5cbiAgICBvblNhdmUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmV0QXNzZXQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0IGFzc2V0IHZhbHVlIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBuZXcgTW9udGhseVNuYXBzaG90KHtcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5fZXhpc3RpbmdTbmFwc2hvdCAmJiB7IGlkOiB0aGlzLl9leGlzdGluZ1NuYXBzaG90LmlkIH0pLFxuICAgICAgICAgICAgICAgIHllYXI6IHRoaXMuc2VsZWN0ZWRZZWFyLFxuICAgICAgICAgICAgICAgIG1vbnRoOiB0aGlzLl9zZWxlY3RlZE1vbnRoLFxuICAgICAgICAgICAgICAgIG5ldEFzc2V0OiB0aGlzLl9uZXRBc3NldFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGlzdGluZ1NuYXBzaG90KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlLnVwZGF0ZVNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgc25hcHNob3QgZm9yICR7dGhpcy5fbW9udGhzW3RoaXMuX3NlbGVjdGVkTW9udGhdfSAke3RoaXMuc2VsZWN0ZWRZZWFyfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuYWRkU25hcHNob3Qoc25hcHNob3QpO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgYWRkZWQgc25hcHNob3QgZm9yICR7dGhpcy5fbW9udGhzW3RoaXMuX3NlbGVjdGVkTW9udGhdfSAke3RoaXMuc2VsZWN0ZWRZZWFyfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFbWl0IGV2ZW50IGJlZm9yZSBuYXZpZ2F0aW5nIGJhY2tcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50QnVzLmVtaXQoRXZlbnROYW1lcy5TTkFQU0hPVF9VUERBVEVEKTtcbiAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3Igc2F2aW5nIHNuYXBzaG90JywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90IH0gZnJvbSAnLi4vLi4vbW9kZWxzL21vbnRobHktc25hcHNob3QnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL21vbnRobHktc25hcHNob3Qtc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudEJ1c1NlcnZpY2UsIEV2ZW50TmFtZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC1idXMtc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSwgZm9ybWF0UGVyY2VudGFnZSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHNob3dEaWFsb2cgfSBmcm9tICcuLi8uLi91dGlscy9kaWFsb2cnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ01vbnRobHlTbmFwc2hvdFZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBNb250aGx5U25hcHNob3RWaWV3TW9kZWwgZXh0ZW5kcyBCYXNlVmlld01vZGVsIHtcbiAgICBwcml2YXRlIF9zbmFwc2hvdFNlcnZpY2U6IE1vbnRobHlTbmFwc2hvdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBfZXZlbnRCdXM6IEV2ZW50QnVzU2VydmljZTtcbiAgICBwcml2YXRlIF9zbmFwc2hvdHM6IE1vbnRobHlTbmFwc2hvdFtdID0gW107XG4gICAgcHJpdmF0ZSBfbW9udGhzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLFxuICAgICAgICAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9zbmFwc2hvdFNlcnZpY2UgPSBNb250aGx5U25hcHNob3RTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuX2V2ZW50QnVzID0gRXZlbnRCdXNTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBMaXN0ZW4gZm9yIHNuYXBzaG90IHVwZGF0ZXNcbiAgICAgICAgdGhpcy5fZXZlbnRCdXMub24oRXZlbnROYW1lcy5TTkFQU0hPVF9VUERBVEVELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRTbmFwc2hvdHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxvYWRTbmFwc2hvdHMoKTtcbiAgICB9XG5cbiAgICBnZXQgc25hcHNob3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc25hcHNob3RzXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhLnllYXIgIT09IGIueWVhcikgcmV0dXJuIGIueWVhciAtIGEueWVhcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5tb250aCAtIGEubW9udGg7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChzbmFwc2hvdCA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnNuYXBzaG90LFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGAke3RoaXMuX21vbnRoc1tzbmFwc2hvdC5tb250aF19ICR7c25hcHNob3QueWVhcn1gLFxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZE5ldEFzc2V0OiBmb3JtYXRDdXJyZW5jeShzbmFwc2hvdC5uZXRBc3NldCksXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUGVyY2VudGFnZUNoYW5nZTogc25hcHNob3QucGVyY2VudGFnZUNoYW5nZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgID8gZm9ybWF0UGVyY2VudGFnZShzbmFwc2hvdC5wZXJjZW50YWdlQ2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICA6ICdOL0EnXG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ1JlZnJlc2hpbmcgc25hcHNob3RzJyk7XG4gICAgICAgIHRoaXMubG9hZFNuYXBzaG90cygpO1xuICAgIH1cblxuICAgIG9uQWRkU25hcHNob3QoKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIEFkZCBTbmFwc2hvdCBwYWdlJyk7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy9tb250aGx5LXNuYXBzaG90L2FkZC1zbmFwc2hvdC1wYWdlJyk7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3M6IHsgaW5kZXg6IG51bWJlciB9KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNuYXBzaG90ID0gdGhpcy5fc25hcHNob3RzW2FyZ3MuaW5kZXhdO1xuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiBgJHt0aGlzLl9tb250aHNbc25hcHNob3QubW9udGhdfSAke3NuYXBzaG90LnllYXJ9YCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBOZXQgQXNzZXQ6ICR7Zm9ybWF0Q3VycmVuY3koc25hcHNob3QubmV0QXNzZXQpfWAsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgeyBpZDogJ2VkaXQnLCB0ZXh0OiAnRWRpdCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnZGVsZXRlJywgdGV4dDogJ0RlbGV0ZScgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRTbmFwc2hvdChzbmFwc2hvdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZVNuYXBzaG90KHNuYXBzaG90KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25VbmxvYWRlZCgpOiB2b2lkIHtcbiAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgJ0NsZWFuaW5nIHVwIGV2ZW50IGxpc3RlbmVycycpO1xuICAgICAgICB0aGlzLl9ldmVudEJ1cy5vZmYoRXZlbnROYW1lcy5TTkFQU0hPVF9VUERBVEVEKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRTbmFwc2hvdHMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9zbmFwc2hvdHMgPSB0aGlzLl9zbmFwc2hvdFNlcnZpY2UuZ2V0U25hcHNob3RzKCk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdzbmFwc2hvdHMnLCB0aGlzLnNuYXBzaG90cyk7XG4gICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgTG9hZGVkICR7dGhpcy5fc25hcHNob3RzLmxlbmd0aH0gc25hcHNob3RzYCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBMb2dnZXIuZXJyb3IoVEFHLCAnRXJyb3IgbG9hZGluZyBzbmFwc2hvdHMnLCBlcnJvciBhcyBFcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGVkaXRTbmFwc2hvdChzbmFwc2hvdDogTW9udGhseVNuYXBzaG90KTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBFZGl0aW5nIHNuYXBzaG90OiAke3NuYXBzaG90LmlkfWApO1xuICAgICAgICBuYXZpZ2F0ZVRvUGFnZSgndmlld3MvbW9udGhseS1zbmFwc2hvdC9hZGQtc25hcHNob3QtcGFnZScsIHsgc25hcHNob3QgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWxldGVTbmFwc2hvdChzbmFwc2hvdDogTW9udGhseVNuYXBzaG90KTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBEZWxldGluZyBzbmFwc2hvdDogJHtzbmFwc2hvdC5pZH1gKTtcbiAgICAgICAgc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm0gRGVsZXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgc25hcHNob3Q/JyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc25hcHNob3RTZXJ2aWNlLmRlbGV0ZVNuYXBzaG90KHNuYXBzaG90LmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTbmFwc2hvdHMoKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU25hcHNob3QgZGVsZXRlZDogJHtzbmFwc2hvdC5pZH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgUmVwb3J0U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3JlcG9ydC1zZXJ2aWNlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBmb3JtYXRQZXJjZW50YWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0dGVycyc7XG5cbmV4cG9ydCBjbGFzcyBGaW5hbmNpYWxIZWFsdGhWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9yZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3JlcG9ydDogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3JlcG9ydFNlcnZpY2UgPSBSZXBvcnRTZXJ2aWNlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMubG9hZFJlcG9ydCgpO1xuICAgIH1cblxuICAgIGdldCBuZXRXb3J0aEZvcm1hdHRlZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZm9ybWF0Q3VycmVuY3kodGhpcy5fcmVwb3J0Lm5ldFdvcnRoKTtcbiAgICB9XG5cbiAgICBnZXQgbW9udGhseUNhc2hmbG93Rm9ybWF0dGVkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBmb3JtYXRDdXJyZW5jeSh0aGlzLl9yZXBvcnQubW9udGhseUNhc2hmbG93KTtcbiAgICB9XG5cbiAgICBnZXQgZGVidFRvSW5jb21lUmF0aW9Gb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdFBlcmNlbnRhZ2UodGhpcy5fcmVwb3J0LmRlYnRUb0luY29tZVJhdGlvICogMTAwKTtcbiAgICB9XG5cbiAgICBnZXQgbW9udGhseVJlcG9ydHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBvcnQubW9udGhseVJlcG9ydHMubWFwKHJlcG9ydCA9PiAoe1xuICAgICAgICAgICAgLi4ucmVwb3J0LFxuICAgICAgICAgICAgbW9udGhZZWFyOiBgJHtuZXcgRGF0ZShyZXBvcnQueWVhciwgcmVwb3J0Lm1vbnRoKS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdzaG9ydCcsIHllYXI6ICdudW1lcmljJyB9KX1gLFxuICAgICAgICAgICAgaW5jb21lRm9ybWF0dGVkOiBmb3JtYXRDdXJyZW5jeShyZXBvcnQuaW5jb21lKSxcbiAgICAgICAgICAgIGV4cGVuc2VzRm9ybWF0dGVkOiBmb3JtYXRDdXJyZW5jeShyZXBvcnQuZXhwZW5zZXMpLFxuICAgICAgICAgICAgc2F2aW5nc1JhdGVGb3JtYXR0ZWQ6IGZvcm1hdFBlcmNlbnRhZ2UocmVwb3J0LnNhdmluZ3NSYXRlKVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkUmVwb3J0KCkge1xuICAgICAgICB0aGlzLl9yZXBvcnQgPSB0aGlzLl9yZXBvcnRTZXJ2aWNlLmdlbmVyYXRlRmluYW5jaWFsSGVhbHRoUmVwb3J0KCk7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21vbnRobHlSZXBvcnRzJywgdGhpcy5tb250aGx5UmVwb3J0cyk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24sIFRyYW5zYWN0aW9uVHlwZSwgVHJhbnNhY3Rpb25DYXRlZ29yeSB9IGZyb20gJy4uLy4uL21vZGVscy90cmFuc2FjdGlvbic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90cmFuc2FjdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBZGRUcmFuc2FjdGlvblZpZXdNb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBBZGRUcmFuc2FjdGlvblZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX2Rlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIF9hbW91bnQ6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRDYXRlZ29yeUluZGV4OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX3RpbWVSZXF1aXJlZDogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIF9jYXRlZ29yaWVzOiBUcmFuc2FjdGlvbkNhdGVnb3J5W10gPSBbXTtcbiAgICBwcml2YXRlIF9pc0luY29tZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIF90cmFuc2FjdGlvblNlcnZpY2U6IFRyYW5zYWN0aW9uU2VydmljZTtcbiAgICBwcml2YXRlIF9leGlzdGluZ1RyYW5zYWN0aW9uPzogVHJhbnNhY3Rpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihpc0luY29tZTogYm9vbGVhbiwgZXhpc3RpbmdUcmFuc2FjdGlvbj86IFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2lzSW5jb21lID0gaXNJbmNvbWU7XG4gICAgICAgIHRoaXMuX2V4aXN0aW5nVHJhbnNhY3Rpb24gPSBleGlzdGluZ1RyYW5zYWN0aW9uO1xuICAgICAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UgPSBUcmFuc2FjdGlvblNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcyA9IHRoaXMuZ2V0Q2F0ZWdvcmllcygpO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1RyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVXaXRoRXhpc3RpbmdUcmFuc2FjdGlvbihleGlzdGluZ1RyYW5zYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVdpdGhFeGlzdGluZ1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBUcmFuc2FjdGlvbikge1xuICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLl9hbW91bnQgPSBOdW1iZXIodHJhbnNhY3Rpb24uYW1vdW50KTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4ID0gdGhpcy5fY2F0ZWdvcmllcy5pbmRleE9mKHRyYW5zYWN0aW9uLmNhdGVnb3J5KTtcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uLnR5cGUgPT09ICdpbmNvbWUnKSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lUmVxdWlyZWQgPSB0cmFuc2FjdGlvbi50aW1lUmVxdWlyZWQgfHwgMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247IH1cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fZGVzY3JpcHRpb24gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnZGVzY3JpcHRpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgYW1vdW50KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9hbW91bnQ7IH1cbiAgICBzZXQgYW1vdW50KHZhbHVlOiBudW1iZXIgfCBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpICYmIHRoaXMuX2Ftb3VudCAhPT0gbnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hbW91bnQgPSBudW1lcmljVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCdhbW91bnQnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRpbWVSZXF1aXJlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fdGltZVJlcXVpcmVkOyB9XG4gICAgc2V0IHRpbWVSZXF1aXJlZCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4obnVtZXJpY1ZhbHVlKSAmJiBudW1lcmljVmFsdWUgPiAwICYmIHRoaXMuX3RpbWVSZXF1aXJlZCAhPT0gbnVtZXJpY1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90aW1lUmVxdWlyZWQgPSBudW1lcmljVmFsdWU7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0aW1lUmVxdWlyZWQnLCBudW1lcmljVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGNhdGVnb3JpZXMoKTogVHJhbnNhY3Rpb25DYXRlZ29yeVtdIHsgcmV0dXJuIHRoaXMuX2NhdGVnb3JpZXM7IH1cbiAgICBnZXQgc2VsZWN0ZWRDYXRlZ29yeUluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9zZWxlY3RlZENhdGVnb3J5SW5kZXg7IH1cbiAgICBzZXQgc2VsZWN0ZWRDYXRlZ29yeUluZGV4KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkQ2F0ZWdvcnlJbmRleCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnc2VsZWN0ZWRDYXRlZ29yeUluZGV4JywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGlzSW5jb21lKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5faXNJbmNvbWU7IH1cblxuICAgIHByaXZhdGUgZ2V0Q2F0ZWdvcmllcygpOiBUcmFuc2FjdGlvbkNhdGVnb3J5W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNJbmNvbWUgXG4gICAgICAgICAgICA/IFsnU2FsYXJ5JywgJ0J1c2luZXNzJywgJ1JlbnQnLCAnSW50ZXJlc3QnLCAnUm95YWx0aWVzJ11cbiAgICAgICAgICAgIDogWydDb25zdW1lciBiYXNrZXQnLCAnSGFiaXRzJywgJ0NhcicsICdSb3V0aW5lJywgJ0hvdXNpbmcnLCAnQ3JlZGl0IENhcmQvTG9hbiddO1xuICAgIH1cblxuICAgIG9uU2F2ZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgICAgICAuLi4odGhpcy5fZXhpc3RpbmdUcmFuc2FjdGlvbiAmJiB7IGlkOiB0aGlzLl9leGlzdGluZ1RyYW5zYWN0aW9uLmlkIH0pLFxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuX2lzSW5jb21lID8gJ2luY29tZScgOiAnZXhwZW5zZScsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRoaXMuX2NhdGVnb3JpZXNbdGhpcy5fc2VsZWN0ZWRDYXRlZ29yeUluZGV4XSxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHRoaXMuX2Ftb3VudCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5fZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgdGltZVJlcXVpcmVkOiB0aGlzLl9pc0luY29tZSA/IHRoaXMuX3RpbWVSZXF1aXJlZCA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGlzdGluZ1RyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLnVwZGF0ZVRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBMb2dnZXIuZGVidWcoVEFHLCBgU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgJHt0aGlzLl9pc0luY29tZSA/ICdpbmNvbWUnIDogJ2V4cGVuc2UnfSB0cmFuc2FjdGlvbmApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UuYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsIGBTdWNjZXNzZnVsbHkgYWRkZWQgJHt0aGlzLl9pc0luY29tZSA/ICdpbmNvbWUnIDogJ2V4cGVuc2UnfSB0cmFuc2FjdGlvbmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIHNhdmluZyB0cmFuc2FjdGlvbicsIGVycm9yIGFzIEVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvbkNhdGVnb3J5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyYW5zYWN0aW9uJztcbmltcG9ydCB7IENoYXJ0Q29sb3JzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2hhcnQtY29sb3JzJztcbmltcG9ydCB7IERvbnV0Q2hhcnREYXRhIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jaGFydHMvZG9udXQtY2hhcnQnO1xuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb25EaXN0cmlidXRpb25WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwcml2YXRlIF9jaGFydERhdGE6IERvbnV0Q2hhcnREYXRhW10gPSBbXTtcblxuICAgIGdldCBjaGFydERhdGEoKTogRG9udXRDaGFydERhdGFbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFydERhdGE7XG4gICAgfVxuXG4gICAgdXBkYXRlRGF0YSh0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10sIHR5cGU6ICdpbmNvbWUnIHwgJ2V4cGVuc2UnKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkVHJhbnNhY3Rpb25zID0gdHJhbnNhY3Rpb25zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gdHlwZSk7XG4gICAgICAgIGNvbnN0IHRvdGFsID0gZmlsdGVyZWRUcmFuc2FjdGlvbnMucmVkdWNlKChzdW0sIHQpID0+IHN1bSArIHQuYW1vdW50LCAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEdyb3VwIHRyYW5zYWN0aW9ucyBieSBjYXRlZ29yeVxuICAgICAgICBjb25zdCBjYXRlZ29yeU1hcCA9IG5ldyBNYXA8VHJhbnNhY3Rpb25DYXRlZ29yeSwgbnVtYmVyPigpO1xuICAgICAgICBmaWx0ZXJlZFRyYW5zYWN0aW9ucy5mb3JFYWNoKHRyYW5zYWN0aW9uID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBjYXRlZ29yeU1hcC5nZXQodHJhbnNhY3Rpb24uY2F0ZWdvcnkpIHx8IDA7XG4gICAgICAgICAgICBjYXRlZ29yeU1hcC5zZXQodHJhbnNhY3Rpb24uY2F0ZWdvcnksIGN1cnJlbnQgKyB0cmFuc2FjdGlvbi5hbW91bnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb252ZXJ0IHRvIGNoYXJ0IGRhdGFcbiAgICAgICAgdGhpcy5fY2hhcnREYXRhID0gQXJyYXkuZnJvbShjYXRlZ29yeU1hcC5lbnRyaWVzKCkpXG4gICAgICAgICAgICAubWFwKChbY2F0ZWdvcnksIHZhbHVlXSkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IENoYXJ0Q29sb3JzW2NhdGVnb3J5XSB8fCAnI0NCRDVFMCcsIC8vIERlZmF1bHQgY29sb3IgaWYgbm90IGZvdW5kXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogdG90YWwgPiAwID8gTWF0aC5yb3VuZCgodmFsdWUgLyB0b3RhbCkgKiAxMDApIDogMFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYi52YWx1ZSAtIGEudmFsdWUpO1xuXG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ2NoYXJ0RGF0YScsIHRoaXMuX2NoYXJ0RGF0YSk7XG4gICAgfVxufSIsImltcG9ydCB7IEJhc2VWaWV3TW9kZWwgfSBmcm9tICcuLi9iYXNlLXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdHJhbnNhY3Rpb24tc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdHRlcnMnO1xuaW1wb3J0IHsgbmF2aWdhdGVUb1BhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9uYXZpZ2F0aW9uJztcbmltcG9ydCB7IHNob3dEaWFsb2csIENvbmZpcm1EaWFsb2dPcHRpb25zIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGlhbG9nJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbkRpc3RyaWJ1dGlvblZpZXdNb2RlbCB9IGZyb20gJy4vdHJhbnNhY3Rpb24tZGlzdHJpYnV0aW9uLXZpZXctbW9kZWwnO1xuXG5jb25zdCBUQUcgPSAnVHJhbnNhY3Rpb25MaXN0Vmlld01vZGVsJztcblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbCBleHRlbmRzIEJhc2VWaWV3TW9kZWwge1xuICAgIHByaXZhdGUgX3RyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSA9IFtdO1xuICAgIHByaXZhdGUgX2ZpbHRlclR5cGU6ICdpbmNvbWUnIHwgJ2V4cGVuc2UnIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgX3RyYW5zYWN0aW9uU2VydmljZTogVHJhbnNhY3Rpb25TZXJ2aWNlO1xuICAgIHByaXZhdGUgX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDogVHJhbnNhY3Rpb25EaXN0cmlidXRpb25WaWV3TW9kZWw7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWx0ZXJUeXBlPzogJ2luY29tZScgfCAnZXhwZW5zZScpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fZmlsdGVyVHlwZSA9IGZpbHRlclR5cGU7XG4gICAgICAgIHRoaXMuX3RyYW5zYWN0aW9uU2VydmljZSA9IFRyYW5zYWN0aW9uU2VydmljZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB0aGlzLl9kaXN0cmlidXRpb25WaWV3TW9kZWwgPSBuZXcgVHJhbnNhY3Rpb25EaXN0cmlidXRpb25WaWV3TW9kZWwoKTtcbiAgICAgICAgdGhpcy5sb2FkVHJhbnNhY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgZ2V0IGZpbHRlclR5cGUoKTogJ2luY29tZScgfCAnZXhwZW5zZScgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyVHlwZTtcbiAgICB9XG5cbiAgICBnZXQgZGlzdHJpYnV0aW9uVmlld01vZGVsKCk6IFRyYW5zYWN0aW9uRGlzdHJpYnV0aW9uVmlld01vZGVsIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbDtcbiAgICB9XG5cbiAgICBnZXQgdG90YWxBbW91bnRGb3JtYXR0ZWQoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdG90YWwgPSB0aGlzLl9maWx0ZXJUeXBlID09PSAnaW5jb21lJyBcbiAgICAgICAgICAgID8gdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRvdGFsSW5jb21lKClcbiAgICAgICAgICAgIDogdGhpcy5fdHJhbnNhY3Rpb25TZXJ2aWNlLmdldFRvdGFsRXhwZW5zZXMoKTtcbiAgICAgICAgcmV0dXJuIGBUb3RhbCAke3RoaXMuX2ZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ0luY29tZScgOiAnRXhwZW5zZXMnfTogJHtmb3JtYXRDdXJyZW5jeSh0b3RhbCl9YDtcbiAgICB9XG5cbiAgICBnZXQgdHJhbnNhY3Rpb25zKCkge1xuICAgICAgICBsZXQgZmlsdGVyZWRUcmFuc2FjdGlvbnMgPSBbLi4udGhpcy5fdHJhbnNhY3Rpb25zXTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJUeXBlKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFRyYW5zYWN0aW9ucyA9IGZpbHRlcmVkVHJhbnNhY3Rpb25zLmZpbHRlcih0ID0+IHQudHlwZSA9PT0gdGhpcy5fZmlsdGVyVHlwZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRUcmFuc2FjdGlvbnMubWFwKHRyYW5zYWN0aW9uID0+ICh7XG4gICAgICAgICAgICAuLi50cmFuc2FjdGlvbixcbiAgICAgICAgICAgIGZvcm1hdHRlZEFtb3VudDogZm9ybWF0Q3VycmVuY3kodHJhbnNhY3Rpb24uYW1vdW50KSxcbiAgICAgICAgICAgIGhvdXJseVJhdGVGb3JtYXR0ZWQ6IHRyYW5zYWN0aW9uLnR5cGUgPT09ICdpbmNvbWUnICYmIHRyYW5zYWN0aW9uLnRpbWVSZXF1aXJlZCBcbiAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KE1hdGgucm91bmQoKHRyYW5zYWN0aW9uLmFtb3VudCAvIHRyYW5zYWN0aW9uLnRpbWVSZXF1aXJlZCkgKiAxMDApIC8gMTAwKVxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJlZnJlc2goKTogdm9pZCB7XG4gICAgICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdSZWZyZXNoaW5nIHRyYW5zYWN0aW9ucyBsaXN0Jyk7XG4gICAgICAgIHRoaXMubG9hZFRyYW5zYWN0aW9ucygpO1xuICAgIH1cblxuICAgIG9uQWRkVHJhbnNhY3Rpb24oKTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UnLCB7IFxuICAgICAgICAgICAgaXNJbmNvbWU6IHRoaXMuX2ZpbHRlclR5cGUgPT09ICdpbmNvbWUnIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJnczogeyBpbmRleDogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSB0aGlzLl90cmFuc2FjdGlvbnNbYXJncy5pbmRleF07XG4gICAgICAgIGNvbnN0IGhvdXJseVJhdGUgPSB0cmFuc2FjdGlvbi50eXBlID09PSAnaW5jb21lJyAmJiB0cmFuc2FjdGlvbi50aW1lUmVxdWlyZWRcbiAgICAgICAgICAgID8gYFxcbkhvdXJseSBSYXRlOiAke2Zvcm1hdEN1cnJlbmN5KHRyYW5zYWN0aW9uLmFtb3VudCAvIHRyYW5zYWN0aW9uLnRpbWVSZXF1aXJlZCl9L2hyYFxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgIFxuICAgICAgICBzaG93RGlhbG9nKHtcbiAgICAgICAgICAgIHRpdGxlOiB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBBbW91bnQ6ICR7Zm9ybWF0Q3VycmVuY3kodHJhbnNhY3Rpb24uYW1vdW50KX0ke2hvdXJseVJhdGV9YCxcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7IGlkOiAnZWRpdCcsIHRleHQ6ICdFZGl0JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdkZWxldGUnLCB0ZXh0OiAnRGVsZXRlJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdFRyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRUcmFuc2FjdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc2FjdGlvbnMgPSB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UuZ2V0VHJhbnNhY3Rpb25zKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fZmlsdGVyVHlwZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Rpc3RyaWJ1dGlvblZpZXdNb2RlbC51cGRhdGVEYXRhKHRoaXMuX3RyYW5zYWN0aW9ucywgdGhpcy5fZmlsdGVyVHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0cmFuc2FjdGlvbnMnLCB0aGlzLnRyYW5zYWN0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0b3RhbEFtb3VudEZvcm1hdHRlZCcsIHRoaXMudG90YWxBbW91bnRGb3JtYXR0ZWQpO1xuICAgICAgICAgICAgTG9nZ2VyLmRlYnVnKFRBRywgYExvYWRlZCAke3RoaXMuX3RyYW5zYWN0aW9ucy5sZW5ndGh9IHRyYW5zYWN0aW9uc2ApO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKFRBRywgJ0Vycm9yIGxvYWRpbmcgdHJhbnNhY3Rpb25zJywgZXJyb3IgYXMgRXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlZGl0VHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKTogdm9pZCB7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKCd2aWV3cy90cmFuc2FjdGlvbnMvYWRkLXRyYW5zYWN0aW9uLXBhZ2UnLCB7IFxuICAgICAgICAgICAgaXNJbmNvbWU6IHRyYW5zYWN0aW9uLnR5cGUgPT09ICdpbmNvbWUnLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24gXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ09wdGlvbnM6IENvbmZpcm1EaWFsb2dPcHRpb25zID0ge1xuICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtIERlbGV0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHRyYW5zYWN0aW9uPycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfTtcblxuICAgICAgICBzaG93RGlhbG9nKGRpYWxvZ09wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2FjdGlvblNlcnZpY2UuZGVsZXRlVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24uaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRyYW5zYWN0aW9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBZGRBc3NldFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2Fzc2V0cy9hZGQtYXNzZXQtdmlldy1tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEFkZEFzc2V0Vmlld01vZGVsKCk7XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBc3NldExpc3RWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy9hc3NldHMvYXNzZXQtbGlzdC12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdBc3NldExpc3RQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQXNzZXQgTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGlmICghcGFnZS5iaW5kaW5nQ29udGV4dCkge1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEFzc2V0TGlzdFZpZXdNb2RlbCgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlZFRvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGVkIHRvIEFzc2V0IExpc3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBwYWdlLmJpbmRpbmdDb250ZXh0IGFzIEFzc2V0TGlzdFZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWw/LnJlZnJlc2goKTtcbn0iLCJpbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IEFkZExpYWJpbGl0eVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2FkZC1saWFiaWxpdHktdmlldy1tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEFkZExpYWJpbGl0eVZpZXdNb2RlbCgpO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTGlhYmlsaXR5TGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL2xpYWJpbGl0aWVzL2xpYWJpbGl0eS1saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0xpYWJpbGl0eUxpc3RQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gTGlhYmlsaXR5IExpc3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBpZiAoIXBhZ2UuYmluZGluZ0NvbnRleHQpIHtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBMaWFiaWxpdHlMaXN0Vmlld01vZGVsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0ZWQgdG8gTGlhYmlsaXR5IExpc3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBwYWdlLmJpbmRpbmdDb250ZXh0IGFzIExpYWJpbGl0eUxpc3RWaWV3TW9kZWw7XG4gICAgdmlld01vZGVsPy5yZWZyZXNoKCk7XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBZGRTbmFwc2hvdFZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL21vbnRobHktc25hcHNob3QvYWRkLXNuYXBzaG90LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90IH0gZnJvbSAnLi4vLi4vbW9kZWxzL21vbnRobHktc25hcHNob3QnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ0FkZFNuYXBzaG90UGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIHRvIEFkZCBTbmFwc2hvdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IGV4aXN0aW5nU25hcHNob3QgPSBhcmdzLmNvbnRleHQ/LnNuYXBzaG90IGFzIE1vbnRobHlTbmFwc2hvdCB8IHVuZGVmaW5lZDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEFkZFNuYXBzaG90Vmlld01vZGVsKGV4aXN0aW5nU25hcHNob3QpO1xufSIsImltcG9ydCB7IE5hdmlnYXRlZERhdGEsIFBhZ2UgfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuaW1wb3J0IHsgTW9udGhseVNuYXBzaG90Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vdmlldy1tb2RlbHMvbW9udGhseS1zbmFwc2hvdC9tb250aGx5LXNuYXBzaG90LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvbG9nZ2VyJztcblxuY29uc3QgVEFHID0gJ01vbnRobHlTbmFwc2hvdFBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGluZyB0byBNb250aGx5IFNuYXBzaG90IHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgaWYgKCFwYWdlLmJpbmRpbmdDb250ZXh0KSB7XG4gICAgICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgTW9udGhseVNuYXBzaG90Vmlld01vZGVsKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGVkVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0ZWQgdG8gTW9udGhseSBTbmFwc2hvdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZpZXdNb2RlbCA9IHBhZ2UuYmluZGluZ0NvbnRleHQgYXMgTW9udGhseVNuYXBzaG90Vmlld01vZGVsO1xuICAgIHZpZXdNb2RlbD8ucmVmcmVzaCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5sb2FkZWQoYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdNb250aGx5IFNuYXBzaG90IHBhZ2UgdW5sb2FkZWQnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdmlld01vZGVsID0gcGFnZS5iaW5kaW5nQ29udGV4dCBhcyBNb250aGx5U25hcHNob3RWaWV3TW9kZWw7XG4gICAgdmlld01vZGVsPy5vblVubG9hZGVkKCk7XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBBZGRUcmFuc2FjdGlvblZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL3ZpZXctbW9kZWxzL3RyYW5zYWN0aW9ucy9hZGQtdHJhbnNhY3Rpb24tdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi91dGlscy9sb2dnZXInO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJhbnNhY3Rpb24nO1xuXG5jb25zdCBUQUcgPSAnQWRkVHJhbnNhY3Rpb25QYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gQWRkIFRyYW5zYWN0aW9uIHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgaXNJbmNvbWUgPSBhcmdzLmNvbnRleHQ/LmlzSW5jb21lID8/IGZhbHNlO1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXJncy5jb250ZXh0Py50cmFuc2FjdGlvbiBhcyBUcmFuc2FjdGlvbiB8IHVuZGVmaW5lZDtcbiAgICBcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEFkZFRyYW5zYWN0aW9uVmlld01vZGVsKGlzSW5jb21lLCB0cmFuc2FjdGlvbik7XG4gICAgXG4gICAgLy8gU2V0IHRoZSBBY3Rpb25CYXIgdGl0bGUgYmFzZWQgb24gd2hldGhlciB3ZSdyZSBlZGl0aW5nIG9yIGFkZGluZ1xuICAgIGNvbnN0IGFjdGlvbiA9IHRyYW5zYWN0aW9uID8gJ0VkaXQnIDogJ0FkZCc7XG4gICAgY29uc3QgdHlwZSA9IGlzSW5jb21lID8gJ0luY29tZScgOiAnRXhwZW5zZSc7XG4gICAgcGFnZS5hY3Rpb25CYXIudGl0bGUgPSBgJHthY3Rpb259ICR7dHlwZX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ0Zyb20oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIExvZ2dlci5kZWJ1ZyhUQUcsICdOYXZpZ2F0aW5nIGZyb20gQWRkIFRyYW5zYWN0aW9uIHBhZ2UnKTtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG51bGw7XG59IiwiaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ0BuYXRpdmVzY3JpcHQvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2FjdGlvbkxpc3RWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi92aWV3LW1vZGVscy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24tbGlzdC12aWV3LW1vZGVsJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4uLy4uL3V0aWxzL2xvZ2dlcic7XG5cbmNvbnN0IFRBRyA9ICdUcmFuc2FjdGlvbkxpc3RQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBOYXZpZ2F0ZWREYXRhKSB7XG4gICAgTG9nZ2VyLmRlYnVnKFRBRywgJ05hdmlnYXRpbmcgdG8gVHJhbnNhY3Rpb24gTGlzdCBwYWdlJyk7XG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGlmICghcGFnZS5iaW5kaW5nQ29udGV4dCkge1xuICAgICAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IFRyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbChhcmdzLmNvbnRleHQ/LmZpbHRlclR5cGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRlZFRvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcbiAgICBMb2dnZXIuZGVidWcoVEFHLCAnTmF2aWdhdGVkIHRvIFRyYW5zYWN0aW9uIExpc3QgcGFnZScpO1xuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBwYWdlLmJpbmRpbmdDb250ZXh0IGFzIFRyYW5zYWN0aW9uTGlzdFZpZXdNb2RlbDtcbiAgICB2aWV3TW9kZWw/LnJlZnJlc2goKTtcbn0iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjxGcmFtZSBkZWZhdWx0UGFnZT1cXFwibWFpbi1wYWdlXFxcIj5cXG48L0ZyYW1lPlxcblwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPEdyaWRMYXlvdXQgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcIm0tNFxcXCIgXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiPlxcbiAgICA8R3JpZExheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJiZy1ncmF5LTEwMCBwLTQgcm91bmRlZC1sZ1xcXCI+XFxuICAgICAgICA8UmVwZWF0ZXIgaXRlbXM9XFxcInt7IGNoYXJ0RGF0YSB9fVxcXCIgaGVpZ2h0PVxcXCIyMDBcXFwiPlxcbiAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJtYi0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLil49cXFwiIGNvbG9yPVxcXCJ7eyBjb2xvciB9fVxcXCIgY2xhc3M9XFxcIm1yLTJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgbGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcInt7IHBlcmNlbnRhZ2UgKyAnJScgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgdmFsdWU9XFxcInt7IHBlcmNlbnRhZ2UgfX1cXFwiIG1heFZhbHVlPVxcXCIxMDBcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm0tMVxcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvUmVwZWF0ZXIuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvR3JpZExheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHAtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxcbjwvU3RhY2tMYXlvdXQ+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iIGJnLXdoaXRlXFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IHRpdGxlIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXFxcIiAvPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgYW1vdW50IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInt7IGFtb3VudENsYXNzIH19XFxcIiAvPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgc3VidGl0bGUgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgZGV0YWlscyB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG48L0dyaWRMYXlvdXQ+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlBlcnNvbmFsIEZpbmFuY2UgTWFuYWdlclxcXCIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGaW5hbmNlIE1hbmFnZXJcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy1ncmF5LTEwMFxcXCI+XFxuICAgICAgICAgICAgPCEtLSBDYXNoZmxvdyAmIEhvdXJseSBSYXRlIC0tPlxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosICpcXFwiIGNsYXNzPVxcXCJteC00IG10LTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00IG0tMVxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDYXNoZmxvd1xcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGNhc2hmbG93Rm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwie3sgY2FzaGZsb3cgPj0gMCA/ICd0ZXh0LWdyZWVuLTYwMCB0ZXh0LTJ4bCBmb250LWJvbGQnIDogJ3RleHQtcmVkLTYwMCB0ZXh0LTJ4bCBmb250LWJvbGQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00IG0tMVxcXCIgY29sPVxcXCIxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJIb3VybHkgUmF0ZVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGhvdXJseVJhdGVGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LTJ4bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwhLS0gUXVpY2sgQWN0aW9ucyAtLT5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCAqXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwibXgtNCBtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBJbmNvbWUgJiBFeHBlbnNlIFJvdyAtLT5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJJTkNPTUVcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvSW5jb21lXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG0tMSByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJFWFBFTlNFXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGVUb0V4cGVuc2VcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG0tMSByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gQXNzZXRzICYgTGlhYmlsaXRpZXMgUm93IC0tPlxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkFTU0VUU1xcXCIgdGFwPVxcXCJvbk5hdmlnYXRlVG9Bc3NldHNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtLTEgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiTElBQklMSVRJRVNcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvTGlhYmlsaXRpZXNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG0tMSByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aGx5IFNuYXBzaG90IEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIk1PTlRITFkgU05BUFNIT1RcXFwiIHRhcD1cXFwib25OYXZpZ2F0ZVRvTW9udGhseVNuYXBzaG90XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJiZy1pbmRpZ28tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgbWItNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcblxcbiAgICAgICAgICAgIDwhLS0gRmluYW5jaWFsIFN1bW1hcnkgQ2FyZCAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJGaW5hbmNpYWwgU3VtbWFyeVxcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIE5ldCBXb3J0aCAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk5ldCBXb3J0aDpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuZXRXb3J0aEZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIFRvdGFsIEluY29tZSAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRvdGFsIEluY29tZTpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbEluY29tZUZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JlZW4tNjAwIHRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIFRvdGFsIEV4cGVuc2VzIC0tPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIiBjbGFzcz1cXFwibWItNFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVG90YWwgRXhwZW5zZXM6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxFeHBlbnNlc0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmVkLTYwMCB0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPCEtLSBUb3RhbCBBc3NldHMgLS0+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG9cXFwiIGNsYXNzPVxcXCJtYi00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUb3RhbCBBc3NldHM6XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxBc3NldHNGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWJsdWUtNjAwIHRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIFRvdGFsIExpYWJpbGl0aWVzIC0tPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUb3RhbCBMaWFiaWxpdGllczpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbExpYWJpbGl0aWVzRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC1wdXJwbGUtNjAwIHRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBTaGFycGUgUmF0aW8gQ2FyZCAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJTaGFycGUgUmF0aW9cXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgc2hhcnBlUmF0aW9Gb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LTJ4bCBmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBZGQgQXNzZXRcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJiZy1ncmF5LTEwMFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNFxcXCI+XFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgICAgIDwhLS0gTmFtZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFzc2V0IE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIG5hbWVcXFwiIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBWYWx1ZSBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlZhbHVlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIHZhbHVlXFxcIiB0ZXh0PVxcXCJ7eyB2YWx1ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XFxcIm51bWJlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gQ2F0ZWdvcnkgU2VsZWN0aW9uIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ2F0ZWdvcnlcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBjYXRlZ29yaWVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZENhdGVnb3J5SW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBQdXJjaGFzZSBEYXRlIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiUHVyY2hhc2UgRGF0ZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgZGF0ZT1cXFwie3sgcHVyY2hhc2VEYXRlIH19XFxcIiBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8IS0tIFNhdmUgQnV0dG9uIC0tPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiU2F2ZSBBc3NldFxcXCIgdGFwPVxcXCJ7eyBvblNhdmUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48UGFnZSB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIiBcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiXFxuICAgIG5hdmlnYXRlZFRvPVxcXCJuYXZpZ2F0ZWRUb1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBc3NldHNcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG8sICpcXFwiPlxcbiAgICAgICAgPCEtLSBUb3RhbCBBc3NldHMgQ2FyZCAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJiZy1ibHVlLTUwMCBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUb3RhbCBBc3NldHNcXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtc20gbWItMVxcXCIgLz5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgdG90YWxBc3NldHNGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gQXNzZXQgRGlzdHJpYnV0aW9uIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCBwLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFzc2V0IERpc3RyaWJ1dGlvblxcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBkaXN0cmlidXRpb25WaWV3TW9kZWwuY2hhcnREYXRhIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwibWItMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgbGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNzAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJ7eyBwZXJjZW50YWdlICsgJyUnIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwZXJjZW50YWdlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtLTFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBBZGQgQXNzZXQgQnV0dG9uIC0tPlxcbiAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIHRleHQ9XFxcIkFkZCBBc3NldFxcXCIgdGFwPVxcXCJ7eyBvbkFkZEFzc2V0IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMlxcXCIgLz5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBBc3NldCBMaXN0IC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiM1xcXCIgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQXNzZXQgTGlzdFxcXCIgY2xhc3M9XFxcInAtNCB0ZXh0LXhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IGFzc2V0cyB9fVxcXCIgaXRlbVRhcD1cXFwie3sgb25JdGVtVGFwIH19XFxcIiBjbGFzcz1cXFwibGlzdC12aWV3XFxcIj5cXG4gICAgICAgICAgICAgICAgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcIiosIGF1dG9cXFwiIHJvd3M9XFxcImF1dG8sIGF1dG9cXFwiIGNsYXNzPVxcXCJwLTQgYm9yZGVyLWJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBuYW1lIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRWYWx1ZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWJsdWUtNjAwIGZvbnQtYm9sZCB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjYXRlZ29yeSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZERhdGUgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJiZy1ibHVlLTYwMFxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQWRkIExpYWJpbGl0eVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcImJnLWdyYXktMTAwXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBOYW1lIEZpZWxkIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTGlhYmlsaXR5IE5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGhpbnQ9XFxcIkVudGVyIG5hbWVcXFwiIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBBbW91bnQgRmllbGQgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBbW91bnRcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgYW1vdW50XFxcIiB0ZXh0PVxcXCJ7eyBhbW91bnQgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIEludGVyZXN0IFJhdGUgRmllbGQgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJJbnRlcmVzdCBSYXRlICglKVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBpbnRlcmVzdCByYXRlXFxcIiB0ZXh0PVxcXCJ7eyBpbnRlcmVzdFJhdGUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIFR5cGUgU2VsZWN0aW9uIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiVHlwZVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExpc3RQaWNrZXIgaXRlbXM9XFxcInt7IHR5cGVzIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyBzZWxlY3RlZFR5cGVJbmRleCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIER1ZSBEYXRlIC0tPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRHVlIERhdGVcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGRhdGU9XFxcInt7IGR1ZURhdGUgfX1cXFwiIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDwhLS0gU2F2ZSBCdXR0b24gLS0+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTYXZlIExpYWJpbGl0eVxcXCIgdGFwPVxcXCJ7eyBvblNhdmUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXQtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGVkVG89XFxcIm5hdmlnYXRlZFRvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxpYWJpbGl0aWVzXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gVG90YWwgTGlhYmlsaXRpZXMgQ2FyZCAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJiZy1wdXJwbGUtNTAwIG0tNCBwLTYgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRvdGFsIExpYWJpbGl0aWVzXFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LXNtIG1iLTFcXFwiIC8+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRvdGFsTGlhYmlsaXRpZXNGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gRGlzdHJpYnV0aW9uIENoYXJ0IC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImJnLXdoaXRlIG0tNCBwLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkxpYWJpbGl0eSBEaXN0cmlidXRpb25cXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XFxcIiAvPlxcbiAgICAgICAgICAgIDxSZXBlYXRlciBpdGVtcz1cXFwie3sgZGlzdHJpYnV0aW9uVmlld01vZGVsLmNoYXJ0RGF0YSB9fVxcXCI+XFxuICAgICAgICAgICAgICAgIDxSZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm0tMlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcIm1iLTFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCLil49cXFwiIGNvbG9yPVxcXCJ7eyBjb2xvciB9fVxcXCIgY2xhc3M9XFxcIm1yLTJcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcInt7IGxhYmVsIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTcwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMlxcXCIgdGV4dD1cXFwie3sgcGVyY2VudGFnZSArICclJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT1cXFwie3sgcGVyY2VudGFnZSB9fVxcXCIgbWF4VmFsdWU9XFxcIjEwMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibS0xXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgPC9SZXBlYXRlci5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9SZXBlYXRlcj5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gQWRkIEJ1dHRvbiAtLT5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCIyXFxcIiB0ZXh0PVxcXCJBZGQgTGlhYmlsaXR5XFxcIiB0YXA9XFxcInt7IG9uQWRkTGlhYmlsaXR5IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXgtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yXFxcIiAvPlxcbiAgICAgICAgXFxuICAgICAgICA8IS0tIExpYWJpbGl0aWVzIExpc3QgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJMaWFiaWxpdHkgTGlzdFxcXCIgY2xhc3M9XFxcInAtNCB0ZXh0LXhsIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgICAgICAgICA8TGlzdFZpZXcgaXRlbXM9XFxcInt7IGxpYWJpbGl0aWVzIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LXZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkIHRleHQtZ3JheS04MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZEFtb3VudCB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LXB1cnBsZS02MDAgZm9udC1ib2xkIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHR5cGUgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRJbnRlcmVzdFJhdGUgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiPlxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJiZy1ibHVlLTYwMFxcXCI+XFxuICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvbiB0ZXh0PVxcXCJCYWNrXFxcIiBhbmRyb2lkLnN5c3RlbUljb249XFxcImljX21lbnVfYmFja1xcXCIgdGFwPVxcXCJ7eyBnb0JhY2sgfX1cXFwiIC8+XFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgaXNFZGl0aW5nID8gJ0VkaXQgU25hcHNob3QnIDogJ0FkZCBTbmFwc2hvdCcgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8L0FjdGlvbkJhcj5cXG4gICAgXFxuICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiYmctZ3JheS0xMDBcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJiZy13aGl0ZSBwLTYgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gWWVhciBTZWxlY3Rpb24gLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlllYXJcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsXFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyB5ZWFycyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4PVxcXCJ7eyB5ZWFySW5kZXggfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aCBTZWxlY3Rpb24gLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRoXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBtb250aHMgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRNb250aCB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG5cXG4gICAgICAgICAgICA8IS0tIE5ldCBBc3NldCBWYWx1ZSAtLT5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IEFzc2V0IFZhbHVlXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgbmV0IGFzc2V0IHZhbHVlXFxcIiB0ZXh0PVxcXCJ7eyBuZXRBc3NldCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkVHlwZT1cXFwibnVtYmVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwie3sgaXNFZGl0aW5nID8gJ1VwZGF0ZSBTbmFwc2hvdCcgOiAnU2F2ZSBTbmFwc2hvdCcgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgdGFwPVxcXCJ7eyBvblNhdmUgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bFxcXCIgLz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPD94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiBlbmNvZGluZz1cXFwidXRmLThcXFwiID8+XFxuPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIlxcbiAgICBuYXZpZ2F0ZWRUbz1cXFwibmF2aWdhdGVkVG9cXFwiXFxuICAgIHVubG9hZGVkPVxcXCJ1bmxvYWRlZFxcXCI+XFxuICAgIDxBY3Rpb25CYXIgY2xhc3M9XFxcImJnLWJsdWUtNjAwXFxcIj5cXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIHRleHQ9XFxcIkJhY2tcXFwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cXFwiaWNfbWVudV9iYWNrXFxcIiB0YXA9XFxcInt7IGdvQmFjayB9fVxcXCIgLz5cXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJNb250aGx5IFNuYXBzaG90XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gQWRkIEJ1dHRvbiAtLT5cXG4gICAgICAgIDxCdXR0b24gcm93PVxcXCIwXFxcIiB0ZXh0PVxcXCJBZGQgTmV3IFNuYXBzaG90XFxcIiB0YXA9XFxcInt7IG9uQWRkU25hcHNob3QgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTJcXFwiIC8+XFxuXFxuICAgICAgICA8IS0tIEhpc3RvcnkgU2VjdGlvbiAtLT5cXG4gICAgICAgIDxTdGFja0xheW91dCByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJiZy13aGl0ZSBtLTQgcm91bmRlZC14bCBlbGV2YXRpb24tNFxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlNuYXBzaG90IEhpc3RvcnlcXFwiIGNsYXNzPVxcXCJ0ZXh0LXhsIGZvbnQtYm9sZCBwLTRcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBzbmFwc2hvdHMgfX1cXFwiIGl0ZW1UYXA9XFxcInt7IG9uSXRlbVRhcCB9fVxcXCIgY2xhc3M9XFxcImxpc3Qtdmlld1xcXCI+XFxuICAgICAgICAgICAgICAgIDxMaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkRGF0ZSB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZvcm1hdHRlZE5ldEFzc2V0IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNoYW5nZTpcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRQZXJjZW50YWdlQ2hhbmdlIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IHRleHQtc21cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgcGVyY2VudGFnZUNoYW5nZSA+PSAwID8gJyMxMEI5ODEnIDogJyNFRjQ0NDQnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0xpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L0xpc3RWaWV3PlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIG5hdmlnYXRpbmdUbz1cXFwibmF2aWdhdGluZ1RvXFxcIj5cXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cXFwiRmluYW5jaWFsIEhlYWx0aFxcXCIgLz5cXG4gICAgXFxuICAgIDxTY3JvbGxWaWV3PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJwLTRcXFwiPlxcbiAgICAgICAgICAgIDwhLS0gT3ZlcnZpZXcgU2VjdGlvbiAtLT5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLWJsdWUtMTAwIHAtNCByb3VuZGVkLWxnIG1iLTRcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiRmluYW5jaWFsIE92ZXJ2aWV3XFxcIiBjbGFzcz1cXFwidGV4dC14bCBmb250LWJvbGQgbWItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgKlxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTmV0IFdvcnRoOlxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDBcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG5ldFdvcnRoRm9ybWF0dGVkIH19XFxcIiBjbGFzcz1cXFwidGV4dC1yaWdodCBmb250LWJvbGRcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiTW9udGhseSBDYXNoZmxvdzpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBtb250aGx5Q2FzaGZsb3dGb3JtYXR0ZWQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0IGZvbnQtYm9sZFxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJEZWJ0LXRvLUluY29tZTpcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZWJ0VG9JbmNvbWVSYXRpb0Zvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHQgZm9udC1ib2xkXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPCEtLSBNb250aGx5IFJlcG9ydHMgLS0+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIk1vbnRobHkgUmVwb3J0c1xcXCIgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTJcXFwiIC8+XFxuICAgICAgICAgICAgPExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBtb250aGx5UmVwb3J0cyB9fVxcXCIgaGVpZ2h0PVxcXCIzMDBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IG1vbnRoWWVhciB9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb250LWJvbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHNhdmluZ3NSYXRlRm9ybWF0dGVkIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7ICdJbmNvbWU6ICcgKyBpbmNvbWVGb3JtYXR0ZWQgfX1cXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyAnRXhwZW5zZXM6ICcgKyBleHBlbnNlc0Zvcm1hdHRlZCB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gdGV4dC1yaWdodFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9MaXN0Vmlldy5pdGVtVGVtcGxhdGU+XFxuICAgICAgICAgICAgPC9MaXN0Vmlldz5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgIDwvU2Nyb2xsVmlldz5cXG48L1BhZ2U+XCJcbmV4cG9ydCBkZWZhdWx0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fX1xuIiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJ1dGYtOFxcXCIgPz5cXG48R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwicC00IGJvcmRlci1iXFxcIj5cXG4gICAgPExhYmVsIHRleHQ9XFxcInt7IG5hbWUgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9udC1ib2xkXFxcIiAvPlxcbiAgICA8TGFiZWwgdGV4dD1cXFwie3sgZm9ybWF0dGVkQW1vdW50IH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBzdWJ0aXRsZSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBkZXRhaWxzIH19XFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgY2xhc3M9XFxcInRleHQtZ3JheS02MDAgdGV4dC1zbSB0ZXh0LXJpZ2h0XFxcIiAvPlxcbjwvR3JpZExheW91dD5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGluZ0Zyb209XFxcIm5hdmlnYXRpbmdGcm9tXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGlzSW5jb21lID8gJ0FkZCBJbmNvbWUnIDogJ0FkZCBFeHBlbnNlJyB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1sZyBmb250LWJvbGRcXFwiIC8+XFxuICAgIDwvQWN0aW9uQmFyPlxcbiAgICBcXG4gICAgPFNjcm9sbFZpZXcgY2xhc3M9XFxcImJnLWdyYXktMTAwXFxcIj5cXG4gICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwicC00XFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImJnLXdoaXRlIHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiBGaWVsZCAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkRlc2NyaXB0aW9uXFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVxcXCJFbnRlciBkZXNjcmlwdGlvblxcXCIgdGV4dD1cXFwie3sgZGVzY3JpcHRpb24gfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPCEtLSBBbW91bnQgRmllbGQgLS0+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJBbW91bnRcXFwiIGNsYXNzPVxcXCJmb3JtLWxhYmVsIG10LTRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgYW1vdW50XFxcIiB0ZXh0PVxcXCJ7eyBhbW91bnQgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQtZmllbGRcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8IS0tIENhdGVnb3J5IFNlbGVjdGlvbiAtLT5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkNhdGVnb3J5XFxcIiBjbGFzcz1cXFwiZm9ybS1sYWJlbCBtdC00XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8TGlzdFBpY2tlciBpdGVtcz1cXFwie3sgY2F0ZWdvcmllcyB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleD1cXFwie3sgc2VsZWN0ZWRDYXRlZ29yeUluZGV4IH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dC1maWVsZFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDwhLS0gVGltZSBSZXF1aXJlZCAoT25seSBmb3IgSW5jb21lKSAtLT5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHZpc2liaWxpdHk9XFxcInt7IGlzSW5jb21lID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCcgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRpbWUgUmVxdWlyZWQgKEhvdXJzKVxcXCIgY2xhc3M9XFxcImZvcm0tbGFiZWwgbXQtNFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cXFwiRW50ZXIgaG91cnMgcmVxdWlyZWRcXFwiIHRleHQ9XFxcInt7IHRpbWVSZXF1aXJlZCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRUeXBlPVxcXCJudW1iZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0LWZpZWxkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPCEtLSBTYXZlIEJ1dHRvbiAtLT5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcInt7IGlzSW5jb21lID8gJ1NhdmUgSW5jb21lJyA6ICdTYXZlIEV4cGVuc2UnIH19XFxcIiB0YXA9XFxcInt7IG9uU2F2ZSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwie3sgaXNJbmNvbWUgPyAnYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG10LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgOiAnYmctcmVkLTUwMCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIHAtNCBtdC00IHJvdW5kZWQteGwgZWxldmF0aW9uLTInIH19XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9TY3JvbGxWaWV3PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG4iLCJcbi8qIFhNTC1OQU1FU1BBQ0UtTE9BREVSICovXG5jb25zdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX18gPSBcIjw/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIiA/PlxcbjxQYWdlIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiIFxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm5hdmlnYXRpbmdUb1xcXCJcXG4gICAgbmF2aWdhdGVkVG89XFxcIm5hdmlnYXRlZFRvXFxcIj5cXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYmctYmx1ZS02MDBcXFwiPlxcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gdGV4dD1cXFwiQmFja1xcXCIgYW5kcm9pZC5zeXN0ZW1JY29uPVxcXCJpY19tZW51X2JhY2tcXFwiIHRhcD1cXFwie3sgZ29CYWNrIH19XFxcIiAvPlxcbiAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ0luY29tZScgOiAnRXhwZW5zZXMnIH19XFxcIiBjbGFzcz1cXFwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtYm9sZFxcXCIgLz5cXG4gICAgPC9BY3Rpb25CYXI+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCAqXFxcIj5cXG4gICAgICAgIDwhLS0gU3VtbWFyeSBDYXJkIC0tPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ2JnLWdyZWVuLTUwMCBtLTQgcC02IHJvdW5kZWQteGwgZWxldmF0aW9uLTQnIDogJ2JnLXJlZC01MDAgbS00IHAtNiByb3VuZGVkLXhsIGVsZXZhdGlvbi00JyB9fVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGZpbHRlclR5cGUgPT09ICdpbmNvbWUnID8gJ1RvdGFsIEluY29tZScgOiAnVG90YWwgRXhwZW5zZXMnIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC1zbSBtYi0xXFxcIiAvPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbEFtb3VudEZvcm1hdHRlZCB9fVxcXCIgY2xhc3M9XFxcInRleHQtd2hpdGUgdGV4dC0yeGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBEaXN0cmlidXRpb24gQ2hhcnQgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHAtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi00XFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwie3sgZmlsdGVyVHlwZSA9PT0gJ2luY29tZScgPyAnSW5jb21lIERpc3RyaWJ1dGlvbicgOiAnRXhwZW5zZSBEaXN0cmlidXRpb24nIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRleHQteGwgZm9udC1ib2xkIG1iLTRcXFwiIC8+XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgPFJlcGVhdGVyIGl0ZW1zPVxcXCJ7eyBkaXN0cmlidXRpb25WaWV3TW9kZWwuY2hhcnREYXRhIH19XFxcIj5cXG4gICAgICAgICAgICAgICAgPFJlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwibS0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwibWItMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIuKXj1xcXCIgY29sb3I9XFxcInt7IGNvbG9yIH19XFxcIiBjbGFzcz1cXFwibXItMlxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwie3sgbGFiZWwgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNzAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIyXFxcIiB0ZXh0PVxcXCJ7eyBwZXJjZW50YWdlICsgJyUnIH19XFxcIiBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwZXJjZW50YWdlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cXFwie3sgY29sb3IgfX1cXFwiIGNsYXNzPVxcXCJtLTFcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L1JlcGVhdGVyLml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICA8L1JlcGVhdGVyPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIFxcbiAgICAgICAgPCEtLSBBY3Rpb24gQnV0dG9uIC0tPlxcbiAgICAgICAgPEJ1dHRvbiByb3c9XFxcIjJcXFwiIHRleHQ9XFxcInt7ICdBZGQgJyArIChmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdJbmNvbWUnIDogJ0V4cGVuc2UnKSB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIHRhcD1cXFwie3sgb25BZGRUcmFuc2FjdGlvbiB9fVxcXCIgXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBmaWx0ZXJUeXBlID09PSAnaW5jb21lJyA/ICdiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBwLTQgbXgtNCByb3VuZGVkLXhsIGVsZXZhdGlvbi0yJyA6ICdiZy1yZWQtNTAwIHRleHQtd2hpdGUgZm9udC1tZWRpdW0gcC00IG14LTQgcm91bmRlZC14bCBlbGV2YXRpb24tMicgfX1cXFwiIC8+XFxuICAgICAgICBcXG4gICAgICAgIDwhLS0gVHJhbnNhY3Rpb25zIExpc3QgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIzXFxcIiBjbGFzcz1cXFwiYmctd2hpdGUgbS00IHJvdW5kZWQteGwgZWxldmF0aW9uLTRcXFwiPlxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUcmFuc2FjdGlvbiBIaXN0b3J5XFxcIiBjbGFzcz1cXFwicC00IHRleHQteGwgZm9udC1ib2xkXFxcIiAvPlxcbiAgICAgICAgICAgIDxMaXN0VmlldyBpdGVtcz1cXFwie3sgdHJhbnNhY3Rpb25zIH19XFxcIiBpdGVtVGFwPVxcXCJ7eyBvbkl0ZW1UYXAgfX1cXFwiIGNsYXNzPVxcXCJsaXN0LXZpZXdcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKiwgYXV0b1xcXCIgcm93cz1cXFwiYXV0bywgYXV0b1xcXCIgY2xhc3M9XFxcInAtNCBib3JkZXItYlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IGRlc2NyaXB0aW9uIH19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgY2xhc3M9XFxcImZvbnQtYm9sZCB0ZXh0LWdyYXktODAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBmb3JtYXR0ZWRBbW91bnQgfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInt7IHR5cGUgPT09ICdpbmNvbWUnID8gJ3RleHQtZ3JlZW4tNjAwJyA6ICd0ZXh0LXJlZC02MDAnIH19IGZvbnQtYm9sZCB0ZXh0LXJpZ2h0XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyBjYXRlZ29yeSB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjBcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyYXktNjAwIHRleHQtc21cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHR5cGUgPT09ICdpbmNvbWUnID8gKGhvdXJseVJhdGVGb3JtYXR0ZWQgKyAnL2hyJykgOiAnJyB9fVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dC1ncmF5LTYwMCB0ZXh0LXNtIHRleHQtcmlnaHRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDwvTGlzdFZpZXc+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICA8L0dyaWRMYXlvdXQ+XFxuPC9QYWdlPlwiXG5leHBvcnQgZGVmYXVsdCBfX19YTUxfTkFNRVNQQUNFX0xPQURFUl9FWFBPUlRfX19cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==