import Mixin from '@ember/object/mixin';
import Word from '../models/word';
import { computed } from '@ember/object';
import { A } from '@ember/array'; 

export default Mixin.create({
    index : 0,

    increament:1,

    range : computed('model',function (){
        var start=0, 
        end=0,
        model=this.get('model');
        if(model) {
            end = model.length-1;
        }
        return {
            start : start,
            end : end
        };
    }),

    word  : computed('index','model',function() {
        var model = this.get('model'),
            index = this.get('index');
        return Word.create(model[index]);
    }),

    _isValidRange : function(newIndex){
        var range = this.get('range');
        if(newIndex > range.end) {
            this.transitionTo('discover.index'); 
        }
        return (newIndex >= range.start) && (newIndex <= range.end);
    },

    _updateIndex : function (newIndex) {
        if(this._isValidRange(newIndex)){
            this.set('index',newIndex);
        }
    },

    randomValue: function (start,end) {
        return Math.floor(Math.random() * end) + start;
    },

    _getNRandomWords : function (n,excludeIndex) {
        var randomWords = A([]), 
            randomIndex,
            model = this.get('model'),
            range = this.get('range');

        excludeIndex = excludeIndex || this.get('index');

        while(n > 0) {
            randomIndex = this.randomValue(range.start,range.end);
            if(randomIndex !== excludeIndex) {
                randomWords.push(Word.create(model[randomIndex]));
                n--;
            }
        }
        return randomWords;
    },

    actions: {
        next : function(){
            var newIndex = this.get('index') + this.get('increament');
            this._updateIndex(newIndex);
        },
        previous: function(){
            var newIndex = this.get('index') - this.get('increament');
            this._updateIndex(newIndex);
        }
    }  

});