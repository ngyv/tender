import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  login:       attr('string'),
  siteAdmin:   attr('boolean'),
  name:        attr('string'),
  company:     attr('string'),
  blog:        attr('string'),
  location:    attr('string'),
  email:       attr('string'),
  hireable:    attr('boolean'),
  bio:         attr('string'),
  publicRepos: attr('number'),
  publicGists: attr('number'),
  followers:   attr('number'),
  following:   attr('number'),
  createdAt:   attr('date'),
  updatedAt:   attr('date'),
});
