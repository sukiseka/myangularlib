import { TestBed } from '@angular/core/testing';
import { MyLibService } from './my-lib.service';
describe('MyLibService', function () {
    var service;
    beforeEach(function () {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MyLibService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=my-lib.service.spec.js.map