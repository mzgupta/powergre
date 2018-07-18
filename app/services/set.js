import EmberObject from '@ember/object';
import { A } from '@ember/array';
import { computed } from '@ember/object';


import Dictionary from './dictionary';
var SetService = EmberObject.extend({

  counts : computed('size',function() {
    return (Dictionary.length / this.get('size'));
  }),

  getSets: function() {
    var sets,counts,id;
    sets=A([]);

    counts = this.get('counts');


    for(var i=0;i<counts;i++){
      id=i+1;
      sets.push({
        id: id,
        words:this._getWord(i,id)
      });
    }
    return sets;
  },

  getById: function (id) {
    return this._getWord(id-1,id);
  },

  _getWord : function(start,end) {
    start = start * this.get('size');
    end   = end   * this.get('size');
    return Dictionary.slice(start,end);
  }

});

export default SetService.create({size : 30});