import $ from 'jquery';
import config from '../config/environment';

const GITHUB_URL = 'https://api.github.com';

export function initialize(/* application */) {
  $.ajaxPrefilter(function(options, originalOptions, /* _jqXHR */) {
    const githubSearchApi = new RegExp(`${GITHUB_URL}/search`);
    const githubApi = new RegExp(GITHUB_URL);

    if (githubApi.test(originalOptions.url)) {
      const searchQuery = githubSearchApi.test(originalOptions.url) ? { q: 'type:user' } : {};
      const data = Object.assign( // order matters in this
        searchQuery,    // default `q` that can be overriden
        originalOptions.data,
        { client_id: config.GIT_CLIENT, client_secret: config.GIT_SECRET }, // last so it's not accidentally overriden
      );
      // required
      options.data = $.param(data);
    }
  });
}

export default {
  initialize
};
