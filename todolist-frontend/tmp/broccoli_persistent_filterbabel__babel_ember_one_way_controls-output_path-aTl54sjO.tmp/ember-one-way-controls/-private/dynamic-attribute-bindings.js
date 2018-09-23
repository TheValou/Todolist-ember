define('ember-one-way-controls/-private/dynamic-attribute-bindings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { Mixin, set } = Ember;

  exports.default = Mixin.create({
    NON_ATTRIBUTE_BOUND_PROPS: ['class', 'classNames'],
    concatenatedProperties: ['NON_ATTRIBUTE_BOUND_PROPS'],
    init() {
      this._super(...arguments);

      let newAttributeBindings = [];
      for (let key in this.attrs) {
        if (this.NON_ATTRIBUTE_BOUND_PROPS.indexOf(key) === -1 && this.attributeBindings.indexOf(key) === -1) {
          newAttributeBindings.push(key);
        }
      }

      set(this, 'attributeBindings', this.attributeBindings.concat(newAttributeBindings));
    }
  });
});