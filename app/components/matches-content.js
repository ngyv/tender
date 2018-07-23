import Component from '@ember/component';
import { inject as injectService } from '@ember/service';
import { later } from '@ember/runloop';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component';

const KEYBOARD_SHORTCUTS = Object.freeze({
  up: 'toggleInfo',
  down: 'toggleInfo',
  left: 'pass',
  right: 'like',
});

const POSSIBLE_DIRECTIONS = Object.freeze(['left', 'right']);

export default Component.extend(KeyboardShortcuts, {
  classNames: ['tender-matches', 'col', 'p-3', 'd-flex', 'flex-column'],
  keyboardShortcuts: KEYBOARD_SHORTCUTS,
  profileService: injectService('profile'),
  swiped: null,

  swipe(direction, callback) {
    if (!POSSIBLE_DIRECTIONS.includes(direction)) { return; }
    this.set('swiped', `swiped-${direction}`);
    later(this, function() {
      this.set('swiped', null);
      callback.call(this);
    }, 500); // same as animation duration
  },
  likeProfile() {
    const profileService = this.get('profileService');
    if (!profileService.get('currentProfile')) {
      alert("Whoops, we're fresh out of profiles!")
      return;  // TODO: fetch more
    }
    profileService.saveProfile();
    profileService.nextProfile();
  },

  actions: {
    refresh() {
      // TODO
      alert('refresh');
    },
    pass() {
      this.swipe('left', () => this.get('profileService').nextProfile());
    },
    like() {
      this.swipe('right', this.likeProfile);
    },
    toggleInfo() {
      // TODO
      alert('toggleInfo');
    }
  }
});
