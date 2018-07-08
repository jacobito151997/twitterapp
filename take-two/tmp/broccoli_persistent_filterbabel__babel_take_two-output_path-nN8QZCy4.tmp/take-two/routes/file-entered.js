define('take-two/routes/file-entered', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model() {
      const store = this.get('store');
      const file = store.peekAll('file').objectAt(0);

      return {
        file: file
      };
    }
  });
});