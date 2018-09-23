define('ember-one-way-controls/components/one-way-input', ['exports', 'ember-invoke-action', 'ember-one-way-controls/-private/dynamic-attribute-bindings'], function (exports, _emberInvokeAction, _dynamicAttributeBindings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const {
    Component,
    assert,
    computed,
    get,
    isNone,
    run: { schedule }
  } = Ember;

  const FORBIDDEN_TYPES = ['checkbox', 'radio'];

  const OneWayInputComponent = Component.extend(_dynamicAttributeBindings.default, {
    tagName: 'input',

    attributeBindings: ['type', '_value:value'],

    NON_ATTRIBUTE_BOUND_PROPS: ['keyEvents', 'classNames', 'positionalParamValue', 'update'],

    keyEvents: {
      '13': 'onenter',
      '27': 'onescape'
    },

    change(event) {
      this._processNewValue(event.target.value);
    },

    input(event) {
      this._processNewValue(event.target.value);
    },

    _processNewValue(value) {
      if (get(this, '_value') !== value) {
        (0, _emberInvokeAction.invokeAction)(this, 'update', value);
      }

      schedule('afterRender', this, '_syncValue');
    },

    _syncValue() {
      if (this.isDestroyed || this.isDestroying) {
        return;
      }

      let actualValue = get(this, '_value');
      let renderedValue = this.readDOMAttr('value');

      if (!isNone(actualValue) && !isNone(renderedValue) && actualValue.toString() !== renderedValue.toString()) {
        let rawElement = this.element;

        let start;
        let end;

        // gaurds because only text, search, url, tel and password support this
        try {
          start = rawElement.selectionStart;
          end = rawElement.selectionEnd;
        } catch (e) {
          // no-op
        }

        rawElement.value = actualValue;

        try {
          rawElement.setSelectionRange(start, end);
        } catch (e) {
          // no-op
        }
      }
    },

    keyUp(event) {
      let method = get(this, `keyEvents.${event.keyCode}`);
      if (method) {
        (0, _emberInvokeAction.invokeAction)(this, method, event.target.value);
      }
    },

    type: computed({
      get() {
        return 'text';
      },

      set(key, type) {
        assert(`The {{one-way-input}} component does not support type="${type}", use {{one-way-${type}}} instead.`, FORBIDDEN_TYPES.indexOf(type) === -1);
        return type;
      }
    }),

    _value: computed('positionalParamValue', 'value', {
      get() {
        let value = get(this, 'positionalParamValue');
        if (value === undefined) {
          value = get(this, 'value');
        }

        return value;
      }
    })
  });

  OneWayInputComponent.reopenClass({
    positionalParams: ['positionalParamValue']
  });

  exports.default = OneWayInputComponent;
});