import Route from '@ember/routing/route';
import SetService  from '../services/set';

export default Route.extend({
	model:function (params) {
        return SetService.getById(params.id);
    }
});
