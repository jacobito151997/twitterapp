import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | training-set', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:training-set');
    assert.ok(route);
  });
});
