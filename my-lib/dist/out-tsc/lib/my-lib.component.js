import { Component } from '@angular/core';
import * as i0 from "@angular/core";
var MyLibComponent = /** @class */ (function () {
    function MyLibComponent() {
    }
    MyLibComponent.prototype.ngOnInit = function () {
    };
    MyLibComponent.ɵfac = function MyLibComponent_Factory(t) { return new (t || MyLibComponent)(); };
    MyLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MyLibComponent, selectors: [["lib-my-lib"]], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, " my-lib works! ");
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return MyLibComponent;
}());
export { MyLibComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-lib',
                template: "\n    <p>\n      my-lib works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=my-lib.component.js.map