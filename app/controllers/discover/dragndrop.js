import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';
import NavigationMixin from 'powergre/mixins/navigation';

export default Controller.extend(NavigationMixin,{
    increament : 12,
    shuffle:function(o){ 
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },    
    hotWords : computed('index',function() {
        var index = this.get('index'),
            increament = this.get('increament'),
            hotWords = this.get('model').slice(index,index+increament),
            source, target;

        source = hotWords.filter(function(item){
            return item.flip;
        });


        target = hotWords.filter(function(item){
            return !item.flip;
        });


        source = this.shuffle(source);
        target = this.shuffle(target);

        hotWords = A([]);

        for(var i=0;i<source.length;i++){
            hotWords.push(source[i]);
            hotWords.push(target[i]);            
        }

        return hotWords;
    }),
    actions: {
        didDrop : function(data) {
            var selectedWord = this.get("selectedWord");
            if(selectedWord) {
                if(selectedWord == data) {
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
        },
        reset : function() {
            var selectedWord = this.get("selectedWord");
            selectedWord.set("highlight", false);
            this.set("selectedWord", null);
        }
    }
});
