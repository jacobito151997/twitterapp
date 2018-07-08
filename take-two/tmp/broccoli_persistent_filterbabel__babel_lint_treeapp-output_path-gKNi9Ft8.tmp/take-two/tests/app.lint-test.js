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

  QUnit.test('routes/priority-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/priority-list.js should pass ESLint\n\n');
  });

  QUnit.test('routes/training-set.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/training-set.js should pass ESLint\n\n4:3 - \'isPresent\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/welcome.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/welcome.js should pass ESLint\n\n');
  });
});