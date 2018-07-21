import Component from '@ember/component';
import { inject as injectService } from '@ember/service';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component';

export default Component.extend(KeyboardShortcuts, {
  classNames: ['tender-matches', 'col', 'p-3', 'd-flex', 'flex-column'],
  keyboardShortcuts: {
    up: 'toggleInfo',
    down: 'toggleInfo',
    left: 'pass',
    right: 'like',
  },
  profileService: injectService('profile'),

  actions: {
    refresh() {
      // TODO
      alert('refresh');
    },
    pass() {
      // TODO
      alert('pass');
    },
    like() {
      // TODO
      alert('like');
    },
    toggleInfo() {
      // TODO
      alert('toggleInfo');
    }
  }
});
