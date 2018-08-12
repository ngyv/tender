import Service, { inject as injectService } from '@ember/service';
import { computed } from '@ember/object';
import { filterBy } from '@ember/object/computed';

export default Service.extend({
  ajax: injectService(),
  store: injectService(),
  ignore: [], // TODO: persist this
  showUser: null,
  unsaved: filterBy('users', 'savedAt', undefined),
  saved: computed('users.@each.savedAt', function() {
    return this.get('users').rejectBy('savedAt', undefined).sortBy('savedAt');
  }),
  users: computed(function() {
    return this.get('store').findAll('user');
  }),
  currentUser: computed('showUser', 'ignore.length', 'users.length', function() {
    const showUser = this.get('showUser');
    if (showUser) {
      return showUser;
    }
    const currentUser = this.get('unsaved').find(({ login }) => !this.get('ignore').includes(login));
    if (currentUser) {
      this.getCurrentUserProfile(currentUser);
    }
    return currentUser;
  }),

  getCurrentUserProfile(currentUser) {
    // manual ajax and push to store
    return this.get('ajax').request(`https://api.github.com/users/${currentUser.login}`)
      .then((response) => {
        const profile = this.get('store').normalize('profile', response);
        this.get('store').push(profile);
        return profile;
      });
  },

  clearShowUser() {
    this.set('showUser', null);
  },

  passUser(user) {
    this.get('ignore').pushObject(user.get('login'));
  },

  nextUser() {
    const currentUser = this.get('currentUser');
    if (currentUser.get('savedAt')) {
      currentUser.set('savedAt', undefined);
    }
    this.passUser(currentUser);
    this.clearShowUser();
  },
  saveUser(user) {
    let toSave = user || this.get('currentUser');
    this.passUser(toSave);
    this.clearShowUser();
    if (toSave.get('savedAt')) { return; }
    toSave.set('savedAt', new Date());
  },
});
