import Component from '@ember/component';
import { inject as injectService } from '@ember/service';

export default Component.extend({
  classNames: ['tender-navigation-content', 'px-4', 'py-3'],
  profileService: injectService('profile'),
});
