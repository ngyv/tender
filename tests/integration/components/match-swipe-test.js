import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('match-swipe', 'Integration | Component | match swipe', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{match-swipe}}`);
  assert.equal(this.$('.tender-match-swipe__avatar').length, 1);
});
