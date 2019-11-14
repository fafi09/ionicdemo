import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActionSheetController } from "@ionic/angular";
var ActionSheetExampleComponent = /** @class */ (function () {
    function ActionSheetExampleComponent(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    ActionSheetExampleComponent.prototype.presentActionSheet = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            buttons: [{
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                    }
                                }, {
                                    text: 'Share',
                                    icon: 'share',
                                    handler: function () {
                                        console.log('Share clicked');
                                    }
                                }, {
                                    text: 'Play (open modal)',
                                    icon: 'arrow-dropright-circle',
                                    handler: function () {
                                        console.log('Play clicked');
                                    }
                                }, {
                                    text: 'Favorite',
                                    icon: 'heart',
                                    handler: function () {
                                        console.log('Favorite clicked');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionSheetExampleComponent.prototype.ngOnInit = function () { };
    ActionSheetExampleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-action-sheet-example',
            templateUrl: './action-sheet-example.component.html',
            styleUrls: ['./action-sheet-example.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActionSheetController])
    ], ActionSheetExampleComponent);
    return ActionSheetExampleComponent;
}());
export { ActionSheetExampleComponent };
//# sourceMappingURL=action-sheet-example.component.js.map