import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  login: attr('string'),
  name: attr('string'),
  email: attr('string'),
  company: attr('string'),
  isHireable: attr('boolean'),
  bio: attr('string'),
  avatarUrl: attr('string'),
  isSaved: attr('boolean', { defaultValue: false }),
  savedAt: attr('date'),
});
