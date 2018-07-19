import Controller from '@ember/controller';
import { computed } from '@ember/object';

import NavigationMixin from 'powergre/mixins/navigation';

export default Controller.extend(NavigationMixin,{

    options : computed('index','model',function () {
        var options = this._getNRandomWords(3),randomIndex;
        randomIndex = this.randomValue(0,4);
        options.splice(randomIndex,0,this.get('word'));
        return options;      
    })

});