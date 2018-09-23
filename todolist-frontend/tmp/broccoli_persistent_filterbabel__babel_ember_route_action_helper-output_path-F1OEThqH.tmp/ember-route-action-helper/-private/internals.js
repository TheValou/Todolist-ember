define('ember-route-action-helper/-private/internals', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let ClosureActionModule;

  if ('ember-htmlbars/keywords/closure-action' in Ember.__loader.registry) {
    ClosureActionModule = Ember.__loader.require('ember-htmlbars/keywords/closure-action');
  } else if ('ember-routing-htmlbars/keywords/closure-action' in Ember.__loader.registry) {
    ClosureActionModule = Ember.__loader.require('ember-routing-htmlbars/keywords/closure-action');
  } else {
    ClosureActionModule = {};
  }

  const ACTION = exports.ACTION = ClosureActionModule.ACTION;
});