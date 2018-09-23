define('ember-route-action-helper/helpers/route-action', ['exports', 'ember-route-action-helper/-private/internals'], function (exports, _internals) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function getCurrentHandlerInfos(router) {
    let routerLib = router._routerMicrolib || router.router;

    return routerLib.currentHandlerInfos;
  }

  function getRoutes(router) {
    return Ember.A(getCurrentHandlerInfos(router)).mapBy('handler').reverse();
  }

  function getRouteWithAction(router, actionName) {
    let action;
    let handler = Ember.A(getRoutes(router)).find(route => {
      let actions = route.actions || route._actions;
      action = actions[actionName];

      return typeof action === 'function';
    });

    return { action, handler };
  }

  exports.default = Ember.Helper.extend({
    router: Ember.computed(function () {
      return Ember.getOwner(this).lookup('router:main');
    }).readOnly(),

    compute([actionName, ...params]) {
      let router = Ember.get(this, 'router');
      (true && !(router) && Ember.assert('[ember-route-action-helper] Unable to lookup router', router));


      Ember.runInDebug(() => {
        let { handler } = getRouteWithAction(router, actionName);
        (true && !(handler) && Ember.assert(`[ember-route-action-helper] Unable to find action ${actionName}`, handler));
      });

      let routeAction = function (...invocationArgs) {
        let { action, handler } = getRouteWithAction(router, actionName);
        let args = params.concat(invocationArgs);
        return Ember.run.join(handler, action, ...args);
      };

      routeAction[_internals.ACTION] = true;

      return routeAction;
    }
  });
});