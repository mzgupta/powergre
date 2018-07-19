import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | discover/reversechoice', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:discover/reversechoice');
    assert.ok(route);
  });
});
