import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default DS.RESTSerializer.extend({
  keyForAttribute(attr) {
    return decamelize(attr);
  }
});
