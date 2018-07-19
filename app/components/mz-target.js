import Component from '@ember/component';

export default Component.extend({
    actions: {
        hotSelect: function() {
            var selectedWord = this.targetObject.selectedWord;

            if (this.get("highlight")) {
                this.set('highlight', false);
                this.targetObject.selectedWord = null;
                return;
            }

            if (selectedWord) {
                if (this.get("hotWord").word.id === selectedWord.get("hotWord").word.id) {
                    this.set('hide', true);
                    selectedWord.set('hide', true);
                    this.targetObject.selectedWord = null;
                }
            } else {
                this.targetObject.selectedWord = this;
                this.set('highlight', true);
            }
        }
    }
});