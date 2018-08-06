import Service, { inject as injectService } from '@ember/service';
import { computed } from '@ember/object';
import { filterBy } from '@ember/object/computed';

export default Service.extend({
  store: injectService(),
  ignore: [], // TODO: persist this
  showProfile: null,
  unsaved: filterBy('profiles', 'savedAt', undefined),
  saved: computed('profiles.@each.savedAt', function() {
    return this.get('profiles').rejectBy('savedAt', undefined).sortBy('savedAt');
  }),
  profiles: computed(function() {
    return this.get('store').findAll('profile');
  }),
  currentProfile: computed('showProfile', 'ignore.length', 'profiles.length', function() {
    const showProfile = this.get('showProfile');
    if (showProfile) {
      return showProfile;
    }
    return this.get('unsaved').find(({ login }) => !this.get('ignore').includes(login));
  }),

  clearShowProfile() {
    this.set('showProfile', null);
  },

  passProfile(profile) {
    this.get('ignore').pushObject(profile.get('login'));
  },

  nextProfile() {
    const currentProfile = this.get('currentProfile');
    if (currentProfile.get('savedAt')) {
      currentProfile.set('savedAt', undefined);
    }
    this.passProfile(currentProfile);
    this.clearShowProfile();
  },
  saveProfile(profile) {
    let toSave = profile || this.get('currentProfile');
    this.passProfile(toSave);
    this.clearShowProfile();
    if (toSave.get('savedAt')) { return; }
    toSave.set('savedAt', new Date());
  },
});
