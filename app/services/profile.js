import Service, { inject as injectService } from '@ember/service';
import { computed } from '@ember/object';
import { filterBy } from '@ember/object/computed';

export default Service.extend({
  store: injectService(),
  ignore: [], // TODO: persist this
  unsaved: filterBy('profiles', 'isSaved', false),
  saved: filterBy('profiles', 'isSaved', true),
  profiles: computed(function() {
    return this.get('store').findAll('profile');
  }),
  currentProfile: computed('ignore.length', 'profiles.length', function() {
    return this.get('unsaved').find(({ login }) => !this.get('ignore').includes(login));
  }),

  nextProfile() {
    this.get('ignore').pushObject(this.get('currentProfile.login'));
  },
  saveProfile(profile) {
    let toSave = profile || this.get('currentProfile');
    toSave.set('isSaved', true);
  },
});
