export default {
    input: 'dist/my-lib/esm2015/public-api.js',
    entry: 'dist/my-lib/esm2015/public-api.js',
    dest: 'dist/my-lib/bundles/my-lib.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.amazing',
    globals: {
      '@angular/core': 'ng.core',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    }
  }