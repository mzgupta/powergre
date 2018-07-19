import Controller from '@ember/controller';
import { computed } from '@ember/object';

import NavigationMixin from 'powergre/mixins/navigation';


export default Controller.extend(NavigationMixin,{

	increament : 20,

    shuffle:function(o){ 
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },    
    hotWords : computed('index',function() {
        var index = this.get('index'),
            increament = this.get('increament');

        return this.shuffle(this.get('model').slice(index,index+increament));
    })

});
