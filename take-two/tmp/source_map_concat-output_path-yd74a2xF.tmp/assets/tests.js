'use strict';

define('take-two/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/training-set.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/training-set.js should pass ESLint\n\n');
  });

  QUnit.test('routes/welcome.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/welcome.js should pass ESLint\n\n');
  });
});
define('take-two/tests/test-helper', ['take-two/app', 'take-two/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('take-two/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/training-set-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/training-set-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/welcome-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/welcome-test.js should pass ESLint\n\n');
  });
});
define('take-two/tests/unit/routes/training-set-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | training-set', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:training-set');
      assert.ok(route);
    });
  });
});
define('take-two/tests/unit/routes/welcome-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | welcome', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:welcome');
      assert.ok(route);
    });
  });
});
define('take-two/config/environment', [], function() {
  var prefix = 'take-two';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('take-two/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
