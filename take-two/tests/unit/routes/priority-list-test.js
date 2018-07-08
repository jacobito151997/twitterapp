import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | priority-list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:priority-list');
    assert.ok(route);
  });
});
