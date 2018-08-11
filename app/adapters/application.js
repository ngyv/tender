import DS from 'ember-data';

const MODEL_MAPPING = Object.freeze({
  profile: 'user',
});

export default DS.RESTAdapter.extend({
  modelName: null, // set in buildURL
  host: 'https://api.github.com/search',
  buildURL(modelName, _id, _snapshot, _requestType, query = {}){
    this.modelName = modelName;
    let buildQuery = Object.assign({}, query);
    return this._super(MODEL_MAPPING[this.modelName], _id, _snapshot, _requestType, buildQuery);
  },
  handleResponse (status, headers, payload, requestData) {
    return this._super(status, headers, { [this.modelName]: payload.items }, requestData);
  },
});
