import $ from 'jquery';
import config from '../config/environment';

export function initialize(/* application */) {
  $.ajaxPrefilter(function(options, originalOptions, /* _jqXHR */) {
    const githubApi = new RegExp('https://api.github.com');
    if (githubApi.test(originalOptions.url)) {
      const data = Object.assign( // order matters in this
        { q: 'repos:>1' },    // default `q` that can be overriden
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
