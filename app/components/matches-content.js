import Component from '@ember/component';
import { inject as injectService } from '@ember/service';
import { later } from '@ember/runloop';
import $ from 'jquery';

const POSSIBLE_DIRECTIONS = Object.freeze(['left', 'right']);

export default Component.extend({
  classNames: ['tender-matches', 'col', 'p-3', 'd-flex', 'flex-column'],
  profileService: injectService('profile'),
  swiped: null,
  pauseSwipe: false,

  didInsertElement() {
    this._super(...arguments);
    this.keydownHandler = ({ key }) => {
      if (key === 'ArrowUp' || key === 'ArrowDown') {
        this.send('toggleInfo');
      } else if (key === 'ArrowLeft') {
        this.send('pass');
      } else if (key === 'ArrowRight') {
        this.send('like');
      }
    };
    $(window).on('keydown', this.keydownHandler);
  },

  willDestroyElement() {
    this._super(...arguments);
    $(window).off('keydown', this.keydownHandler);
  },

  swipe(direction, callback) {
    if (!POSSIBLE_DIRECTIONS.includes(direction)) { return; }
    this.set('swiped', direction);
    this.set('pauseSwipe', later(this, function() {
      this.set('swiped', null);
      callback.call(this);
      this.set('pauseSwipe', false);
    }, 500)); // same as animation duration
  },
  likeProfile() {
    const profileService = this.get('profileService');
    if (!profileService.get('currentProfile')) {
      alert("Whoops, we're fresh out of profiles!")
      return;  // TODO: fetch more
    }
    profileService.saveProfile();
  },

  actions: {
    refresh() {
      // TODO
      alert('refresh');
    },
    pass() {
      if (this.get('pauseSwipe')) { return; }
      this.swipe('left', () => this.get('profileService').nextProfile());
    },
    like() {
      if (this.get('pauseSwipe')) { return; }
      this.swipe('right', this.likeProfile);
    },
    toggleInfo() {
      // TODO
      alert('toggleInfo');
    }
  }
});
