define('take-two/routes/training-set', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model() {
      const store = this.get('store');
      const files = store.peekAll('file');
      if (Ember.isEmpty(files)) {
        store.createRecord('file', {
          text: ''
        });
      }
    },
    actions: {}
  });
});