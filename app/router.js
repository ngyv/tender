import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recs', function() {
    this.route('profile');
  });
  this.route('likes', function() {
    this.route('profile', { path: '/:id' });
  });
});

export default Router;
