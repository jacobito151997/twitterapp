define('take-two/router', ['exports', 'take-two/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('welcome');
    this.route('training-set');
    this.route('priority-list');
  });

  exports.default = Router;
});