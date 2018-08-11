import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  modelName: null, // set in buildURL
  host: 'https://api.github.com',
  buildURL(modelName){
    this.modelName = modelName;
    return this._super(...arguments);
  },
  handleResponse (status, headers, payload, requestData) {
    return this._super(status, headers, { [this.modelName]: payload }, requestData);
  },
});
