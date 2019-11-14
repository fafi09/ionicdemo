import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var Tab2Page = /** @class */ (function () {
    function Tab2Page() {
        this.form = [
            { val: 'Pepperoni', isChecked: true },
            { val: 'Sausage', isChecked: false },
            { val: 'Mushroom', isChecked: false }
        ];
    }
    Tab2Page.prototype.logScrollStart = function () {
        console.log('logScrollStart');
    };
    Tab2Page.prototype.logScrollEnd = function () {
        console.log('logScrollEnd');
    };
    Tab2Page.prototype.logScrolling = function (event) {
        console.log('logScrolling');
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        })
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map