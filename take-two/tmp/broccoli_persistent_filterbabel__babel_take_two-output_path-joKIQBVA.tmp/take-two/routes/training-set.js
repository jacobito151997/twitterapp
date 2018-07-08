define('take-two/routes/training-set', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model() {
      const store = this.get('store');
      const file = store.createRecord('file');
      const tweetFile = Ember.$.getJSON("posts.json");

      return {
        file: file,
        tweetFile: tweetFile

      };
    },

    actions: {
      onLoad() {
        this.transitionTo('file-entered');
      }

    }
  });
});