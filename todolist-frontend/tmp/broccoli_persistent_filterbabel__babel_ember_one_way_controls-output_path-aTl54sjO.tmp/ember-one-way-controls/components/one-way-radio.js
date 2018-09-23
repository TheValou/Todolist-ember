define('ember-one-way-controls/components/one-way-radio', ['exports', 'ember-invoke-action', 'ember-one-way-controls/-private/dynamic-attribute-bindings'], function (exports, _emberInvokeAction, _dynamicAttributeBindings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    computed,
    get,
    set
  } = Ember;

  const OneWayRadioComponent = Component.extend(_dynamicAttributeBindings.default, {
    tagName: 'input',
    type: 'radio',

    NON_ATTRIBUTE_BOUND_PROPS: ['update', 'option', 'value'],

    attributeBindings: ['checked', 'option:value', 'type'],

    checked: computed('_value', 'option', function () {
      return get(this, '_value') === get(this, 'option');
    }),

    click() {
      (0, _emberInvokeAction.invokeAction)(this, 'update', get(this, 'option'));
    },

    didReceiveAttrs() {
      this._super(...arguments);

      let value = get(this, 'paramValue');
      if (value === undefined) {
        value = get(this, 'value');
      }

      set(this, '_value', value);
    }
  });

  OneWayRadioComponent.reopenClass({
    positionalParams: ['paramValue']
  });

  exports.default = OneWayRadioComponent;
});