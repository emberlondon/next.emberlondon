import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('index', { path: '/' });
  this.resource('meetups', { path: '/meetups' });
  this.resource('project-nights', { path: '/project-nights' });
});

export default Router;
