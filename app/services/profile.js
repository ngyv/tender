import Service, { inject as injectService } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  store: injectService(),
  ignore: [],
  profiles: computed(function() {
    return this.get('store').findAll('profile');
  }),
  currentProfile: computed('ignore.length', 'profiles.length', function() {
    return this.get('profiles').find(({ login }) => !this.get('ignore').includes(login));
  }),
});
