import Component from '@ember/component';

/**
 * @type {String} octicon type defined in https://octicons.github.com/
 *
 * @example
 * {{#svg-icon type="triangle-left"}} Nah {{/svg-icon}}
 *
 * // is the same as writing
 *
 * {{svg-icon type="triangle-left" label="Nah"}}
 */
export default Component.extend({
  classNames: ['tender-icon', 'd-flex', 'align-items-center', 'py-2', 'justify-content-center'],
  type: 'circle-slash',
  size: 24,
  sizeUnit: 'px',
  label: null,
});
