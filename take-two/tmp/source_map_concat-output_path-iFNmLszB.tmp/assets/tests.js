'use strict';

define('take-two/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/inputs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/inputs.js should pass ESLint\n\n');
  });

  QUnit.test('components/priority-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/priority-list.js should pass ESLint\n\n');
  });

  QUnit.test('models/file.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/file.js should pass ESLint\n\n');
  });

  QUnit.test('models/tweet.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/tweet.js should pass ESLint\n\n');
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

  QUnit.test('routes/file-entered.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/file-entered.js should pass ESLint\n\n');
  });

  QUnit.test('routes/priority-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/priority-list.js should pass ESLint\n\n');
  });

  QUnit.test('routes/training-set.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/training-set.js should pass ESLint\n\n3:3 - \'isEmpty\' is defined but never used. (no-unused-vars)\n4:3 - \'isPresent\' is defined but never used. (no-unused-vars)\n13:23 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)');
  });

  QUnit.test('routes/welcome.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/welcome.js should pass ESLint\n\n');
  });
});
define('take-two/tests/integration/components/priority-list-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | priority-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "eAe1Jv/I",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"priority-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "rVnK92D6",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"priority-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
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

  QUnit.test('integration/components/priority-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/priority-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/tweet-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/tweet-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/file-entered-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/file-entered-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/priority-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/priority-list-test.js should pass ESLint\n\n');
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
define('take-two/tests/unit/models/tweet-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | tweet', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('tweet', {}));
      assert.ok(model);
    });
  });
});
define('take-two/tests/unit/routes/file-entered-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | file-entered', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:file-entered');
      assert.ok(route);
    });
  });
});
define('take-two/tests/unit/routes/priority-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | priority-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:priority-list');
      assert.ok(route);
    });
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
