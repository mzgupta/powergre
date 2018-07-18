import Route from '@ember/routing/route';
import SetService  from '../services/set';

export default Route.extend({
	model : function(){
        return SetService.getSets();
    },
    actions: {
        explore : function(set){
            this.get('controller').transitionToRoute('discover',set.id);
        }
    }
});
