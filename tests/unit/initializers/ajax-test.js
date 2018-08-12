import Application from '@ember/application';

import { initialize } from 'tender/initializers/ajax';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import destroyApp from '../../helpers/destroy-app';
import { run } from '@ember/runloop';

module('Unit | Initializer | ajax', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.TestApplication = Application.extend();
    this.TestApplication.initializer({
      name: 'initializer under test',
      initialize
    });

    this.application = this.TestApplication.create({ autoboot: false });
  });

  hooks.afterEach(function() {
    destroyApp(this.application);
  });

  // Replace this with your real tests.
  test('it works', function(assert) {
    run(() => {
      this.application.boot();
    });
    assert.ok(true);
  });
});
