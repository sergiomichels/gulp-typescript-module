import angular = require('angular');
import spa = require('../node_modules/spa-sample-component/src/spa-input-email/ts/spaInputEmail.ts');

angular.module('spa.components', []).directive('spaInputEmail', spa.SpaInputEmail.instance);
angular.module('app', ['spa.components']);