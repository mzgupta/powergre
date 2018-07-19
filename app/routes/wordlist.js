import Route from '@ember/routing/route';
import SetService  from '../services/set';

export default Route.extend({
	setupController : function (controller,model) {
        controller.set('index',0);
        controller.set('model',model);
    },  
	model : function(){
        return SetService.getSets();
    },
    actions: {
        explore : function(set){
            this.get('controller').transitionToRoute('discover',set.id);
        }
    }
});
