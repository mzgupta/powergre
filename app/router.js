import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('wordlist');
  this.route('discover', { path: '/wordlist/:id' }, function() {
    this.route('study');
    this.route('multiplechoice');
    this.route('reversechoice');
    this.route('hottarget');
    this.route('dragndrop');
  });
});

export default Router;
