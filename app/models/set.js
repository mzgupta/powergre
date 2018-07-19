import EmberObject from '@ember/object';

/**
 * @namespace models
 * @class Set
 * @extends Ember.Object
 * @module Models
 */
export default EmberObject.extend({
  /**
   * Id of the project.
   * @property id
   * @type Number
   */
  id: null,

  /**
   * An array of models.Word instances.
   * @property words
   * @type Array
  */
   words:null

});