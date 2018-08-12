import Component from '@ember/component';
import { inject as injectService } from '@ember/service';

export default Component.extend({
  classNames: ['tender-navigation-match-card', 'mr-3', 'mb-3'],
  userService: injectService('user'),

  click() {
    this.set('userService.showUser', this.get('match'));
  },
});
