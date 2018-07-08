define('take-two/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    beforeModel() {
      this.transitionTo('welcome');
    }

  });
});