import Service, { inject as injectService } from '@ember/service';
import { computed } from '@ember/object';
import { filter, oneWay } from '@ember/object/computed';

export default Service.extend({
  store: injectService(),
  currentLogin: oneWay('profiles.firstObject'),
  profiles: computed(function() {
    return this.get('store').findAll('profile');
  }),
  currentProfile: filter('profiles', function(profile) {
    return profile.get('login') === this.get('currentLogin');
  }),
});
