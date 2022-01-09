// Polyfills
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)

// import 'ie-shim'; // Internet Explorer
// import 'es6-shim';
// import 'es6-promise';
// import 'es7-reflect-metadata';

// Prefer CoreJS over the polyfills above
import 'core-js';
require('zone.js/dist/zone.js');

// Development

Error['stackTraceLimit'] = Infinity;

require('zone.js/dist/long-stack-trace-zone');

// RxJS
// to include every operator uncomment
// require('rxjs/Rx');

require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');

// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
