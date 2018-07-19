import Controller from '@ember/controller';
import { computed } from '@ember/object';

import NavigationMixin from 'powergre/mixins/navigation';


export default Controller.extend(NavigationMixin,{

	increament : 20,

    shuffle:function(o){ 
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },    
    hotWords : computed('index','model',function() {
        var index = this.get('index'),
            increament = this.get('increament');

        return this.shuffle(this.get('model').slice(index,index+increament));
    }),
    actions: {
        didSelectTarget : function(data) {
            var selectedWord = this.get("selectedWord");
            if(selectedWord) {
                if(selectedWord == data) {
                    selectedWord.set("highlight", false);
                    this.set("selectedWord", null);
                    return;
                }
                if(selectedWord.hotWord.word.id === data.hotWord.word.id) {
                    selectedWord.set("hide", true);
                    data.set("hide", true);
                    this.set("selectedWord", null);
                } 
            }
            else {
                this.set("selectedWord", data);
                data.set("highlight", true);
            }
        }
    }

});
