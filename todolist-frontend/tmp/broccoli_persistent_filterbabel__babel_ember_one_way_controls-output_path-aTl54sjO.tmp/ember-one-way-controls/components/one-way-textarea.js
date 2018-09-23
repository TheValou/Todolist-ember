define('ember-one-way-controls/components/one-way-textarea', ['exports', 'ember-one-way-controls/components/one-way-input'], function (exports, _oneWayInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _oneWayInput.default.extend({
    tagName: 'textarea',

    init() {
      this._super(...arguments);

      // We need to unset type, otherwise it will try to set it
      // on the element, which results in an error on textarea.
      this.set('type', undefined);
    }
  });
});