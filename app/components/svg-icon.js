import Component from '@ember/component';
import { computed } from '@ember/object';

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
  classNames: ['tender-icon', 'd-flex', 'py-2'],
  classNameBindings: ['xFlexClass', 'yFlexClass'],
  type: 'circle-slash',
  size: 24,
  sizeUnit: 'px',
  label: null,
  xAlign: 'center',
  yAlign: 'center',

  xFlexClass: computed('xAlign', function() {
    return `align-items-${this.get('xAlign')}`;
  }),
  yFlexClass: computed('yAlign', function() {
    return `justify-content-${this.get('yAlign')}`;
  }),
});
