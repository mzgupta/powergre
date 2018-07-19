import Route from '@ember/routing/route';
import Word from 'powergre/models/word';
import { A } from '@ember/array'; 

export default Route.extend({
	
    setupController : function (controller,model) {
        controller.set("selectedWord", null);
        controller.set('index',0);
        controller.set('model',this.prepareHotWords(model));
    },
    prepareHotWords : function (model){
        var hotWords = A([]);

        for(var i=0; i<model.length;i++) {
            hotWords.push({
                flip : true,
                word : Word.create(model[i])
            });
            hotWords.push({
                flip : false,
                word : Word.create(model[i])
            });
        }
        return hotWords;
    }
});
