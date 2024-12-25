import { View, Property } from '@nativescript/core';

export interface DonutChartData {
    label: string;
    value: number;
    color: string;
    percentage: number;
}

const dataProperty = new Property<DonutChart, DonutChartData[]>({
    name: 'data',
    defaultValue: [],
    valueChanged: (target, oldValue, newValue) => {
        target.onDataChanged(oldValue, newValue);
    }
});

export class DonutChart extends View {
    public data: DonutChartData[] = [];

    constructor() {
        super();
    }

    public onDataChanged(oldValue: DonutChartData[], newValue: DonutChartData[]) {
        this.data = newValue;
        this.requestLayout();
    }

    public createNativeView(): any {
        if (global.isAndroid) {
            // @ts-ignore
            const view = new android.view.View(this._context);
            // @ts-ignore
            view.setWillNotDraw(false);
            return view;
        }
        // @ts-ignore
        return new UIView(CGRectMake(0, 0, 0, 0));
    }

    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
        // @ts-ignore
        const width = View.layout.getMeasureSpecSize(widthMeasureSpec);
        // @ts-ignore
        const height = View.layout.getMeasureSpecSize(heightMeasureSpec);
        this.setMeasuredDimension(width, height);
    }

    public onLayout(left: number, top: number, right: number, bottom: number) {
        super.onLayout(left, top, right, bottom);
        // @ts-ignore
        this.nativeView?.invalidate();
    }

    public onDraw(canvas: any) {
        if (global.isAndroid) {
            this.drawAndroid(canvas);
        } else if (global.isIOS) {
            this.drawiOS();
        }
    }

    private drawAndroid(canvas: any) {
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
        const rect = new android.graphics.RectF(
            centerX - radius + strokeWidth / 2,
            centerY - radius + strokeWidth / 2,
            centerX + radius - strokeWidth / 2,
            centerY + radius - strokeWidth / 2
        );

        this.data.forEach(item => {
            const sweepAngle = (item.percentage / 100) * 360;
            // @ts-ignore
            paint.setColor(android.graphics.Color.parseColor(item.color));
            canvas.drawArc(rect, startAngle, sweepAngle, false, paint);
            startAngle += sweepAngle;
        });
    }

    private drawiOS() {
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
            path.addArcWithCenterRadiusStartAngleEndAngleClockwise(
                CGPointMake(centerX, centerY),
                radius,
                startAngle,
                endAngle,
                true
            );
            path.addArcWithCenterRadiusStartAngleEndAngleClockwise(
                CGPointMake(centerX, centerY),
                innerRadius,
                endAngle,
                startAngle,
                false
            );
            path.closePath();

            const color = this.hexToUIColor(item.color);
            color.setFill();
            path.fill();

            startAngle = endAngle;
        });
    }

    private hexToUIColor(hex: string): any {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        // @ts-ignore
        return UIColor.alloc().initWithRedGreenBlueAlpha(r, g, b, 1);
    }
}

dataProperty.register(DonutChart);