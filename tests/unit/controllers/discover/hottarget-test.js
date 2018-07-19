import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | discover/hottarget', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:discover/hottarget');
    assert.ok(controller);
  });
});
