import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  namespace: 'search',
  buildURL(_modelName, id, snapshot, requestType, query) {
    return this._super('user', id, snapshot, requestType, query);
  },
  handleResponse (_status, _headers, payload) {
    if (payload.items) {
      return { user: payload.items };
    }
    return this._super(...arguments);
  },
});
