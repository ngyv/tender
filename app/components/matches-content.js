import Component from '@ember/component';
import { inject as injectService } from '@ember/service';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/component';

const KEYBOARD_SHORTCUTS = Object.freeze({
  up: 'toggleInfo',
  down: 'toggleInfo',
  left: 'pass',
  right: 'like',
});

export default Component.extend(KeyboardShortcuts, {
  classNames: ['tender-matches', 'col', 'p-3', 'd-flex', 'flex-column'],
  keyboardShortcuts: KEYBOARD_SHORTCUTS,
  profileService: injectService('profile'),

  actions: {
    refresh() {
      // TODO
      alert('refresh');
    },
    pass() {
      this.get('profileService').nextProfile();
    },
    like() {
      const profileService = this.get('profileService');
      if (!profileService.get('currentProfile')) {
        alert("Whoops, we're fresh out of profiles!")
        return;  // TODO: fetch more
      }
      profileService.saveProfile();
      profileService.nextProfile();
    },
    toggleInfo() {
      // TODO
      alert('toggleInfo');
    }
  }
});
