import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('recs', { path: '/' });
  this.route('likes', { path: '/likes/:id' });
});

export default Router;
