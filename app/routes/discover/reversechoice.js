import Route from '@ember/routing/route';

export default Route.extend({
	setupController : function (controller,model) {
        controller.set('index',0);
        controller.set('model',model);
    }  
});
