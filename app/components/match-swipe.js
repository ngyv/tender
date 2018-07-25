import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['tender-match-swipe__profile-container', 'align-self-center', 'mb-auto'],
  classNameBindings: ['swipedClass'],
  swiped: null,
  swipedClass: computed('swiped', function() {
    return `swiped-${this.get('swiped')}`;
  }),
});
