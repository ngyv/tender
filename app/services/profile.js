import Service, { inject as injectService } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  store: injectService(),
  ignore: [],
  profiles: computed(function() {
    return this.get('store').findAll('profile');
  }),
  currentProfile: computed('ignore.length', 'profiles.length', function() {
    if (this.get('ignore.length') === 0) {
      return this.get('profiles.firstObject');
    }
    return this.get('profiles').find((profile) => {
      const login = profile.get('login');
      return !this.get('ignore').includes(login);
    });
  }),
});
