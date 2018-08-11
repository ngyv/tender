import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  login: attr('string'),
  htmlUrl: attr('string'), // unused for now
  avatarUrl: attr('string'),
  savedAt: attr('date'), // fake variable
});
