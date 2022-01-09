import * as browser from 'angular2/platform/browser';
import {AppComponent} from './app/app';
import {HTTP_PROVIDERS} from 'angular2/http';

export function boot(){
	return browser.bootstrap(AppComponent, [HTTP_PROVIDERS]);
}

// Activate hot module reload

let ngHmr = require('angular2-hmr');
ngHmr.hotModuleReplacement(boot, module);
