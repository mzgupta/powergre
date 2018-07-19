import Component from '@ember/component';
import {
    observer
} from '@ember/object';

export default Component.extend({

    classNames: ["choice-card"],
    question: null,
    selection: null,
    isCorrect: false,
    showResult: false,

    questionChanged: observer('question', function() {
        this.set('showResult', false);
        this.set('isCorrect', false);
    }),
    actions: {
        optionChanged: function(value) {
            this.set('showResult', true);
            if (this.get('question.id') === value.id) {
                this.set('isCorrect', true);
            } else {
                this.set('isCorrect', false);
            }
        }
    }

});