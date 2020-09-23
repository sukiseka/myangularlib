import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import * as i0 from "@angular/core";
var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule.ɵmod = i0.ɵɵdefineNgModule({ type: MyLibModule });
    MyLibModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MyLibModule_Factory(t) { return new (t || MyLibModule)(); }, imports: [[]] });
    return MyLibModule;
}());
export { MyLibModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MyLibModule, { declarations: [MyLibComponent], exports: [MyLibComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyLibModule, [{
        type: NgModule,
        args: [{
                declarations: [MyLibComponent],
                imports: [],
                exports: [MyLibComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=my-lib.module.js.map