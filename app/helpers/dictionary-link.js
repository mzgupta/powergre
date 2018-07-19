import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function dictionaryLink([value]) {
  value = value.charAt(0).toUpperCase() + value.slice(1);
  var link = 'http://dictionary.reference.com/browse/'+value;
  return htmlSafe(`<a href="${link}" target="_blank">${value}</a>`);

}
export default helper(dictionaryLink);