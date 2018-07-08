define('take-two/routes/welcome', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    actions: {
      onNewSet() {
        this.transitionTo('training-set');
      },
      onPriorityList() {
        this.transitionTo('priority-list');
      }
    }

  });
});