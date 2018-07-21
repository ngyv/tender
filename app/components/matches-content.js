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

  nextProfile() {
    const currentLogin = this.get('profileService.currentProfile.login');
    this.get('profileService.ignore').pushObject(currentLogin);
  },
  actions: {
    refresh() {
      // TODO
      alert('refresh');
    },
    pass() {
      // TODO
      this.nextProfile();
    },
    like() {
      // TODO
      this.nextProfile();
    },
    toggleInfo() {
      // TODO
      alert('toggleInfo');
    }
  }
});
