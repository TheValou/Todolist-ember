define('ember-one-way-controls/components/one-way-select/option', ['exports', 'ember-one-way-controls/templates/components/one-way-select/option'], function (exports, _option) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component
  } = Ember;

  exports.default = Component.extend({
    layout: _option.default,
    tagName: ''
  });
});