define('ember-one-way-controls/helpers/one-way-select/contains', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.contains = contains;


  const {
    A: emberArray,
    Helper,
    isArray,
    isPresent,
    get
  } = Ember;

  function contains([haystack, needle, valuePath, targetPath]) {
    if (isArray(haystack)) {
      haystack = emberArray(haystack);

      if (valuePath) {
        haystack = targetPath ? haystack : haystack.mapBy(valuePath);
        return emberArray(haystack).includes(get(needle, valuePath));
      } else {
        return haystack.includes(needle);
      }
    } else {
      if (valuePath && isPresent(haystack) && isPresent(needle)) {
        haystack = targetPath ? haystack : get(haystack, valuePath);
        return haystack === get(needle, valuePath);
      } else {
        return haystack === needle;
      }
    }
  }

  exports.default = Helper.helper(contains);
});