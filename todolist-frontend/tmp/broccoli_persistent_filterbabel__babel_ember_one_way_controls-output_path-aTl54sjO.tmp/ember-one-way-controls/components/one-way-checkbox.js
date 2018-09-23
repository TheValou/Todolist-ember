define('ember-one-way-controls/components/one-way-checkbox', ['exports', 'ember-invoke-action', 'ember-one-way-controls/-private/dynamic-attribute-bindings'], function (exports, _emberInvokeAction, _dynamicAttributeBindings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    get,
    set
  } = Ember;

  const OneWayCheckboxComponent = Component.extend(_dynamicAttributeBindings.default, {
    tagName: 'input',
    type: 'checkbox',

    NON_ATTRIBUTE_BOUND_PROPS: ['update'],

    attributeBindings: ['isChecked:checked', 'type', 'value'],

    didInsertElement() {
      this._super(...arguments);
      this.element.addEventListener('click', e => this._click(e));
    },

    didReceiveAttrs() {
      this._super(...arguments);

      let value = get(this, 'paramChecked');
      if (value === undefined) {
        value = get(this, 'checked');
      }

      set(this, 'isChecked', value);
    },

    _click(event) {
      (0, _emberInvokeAction.invokeAction)(this, 'update', this.readDOMAttr('checked'), event);
    }
  });

  OneWayCheckboxComponent.reopenClass({
    positionalParams: ['paramChecked']
  });

  exports.default = OneWayCheckboxComponent;
});