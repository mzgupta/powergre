import Component from '@ember/component';

export default Component.extend({
    classNames: ['draggable'],
    attributeBindings: ['isDraggable:draggable'],
    isDraggable: 'true',
    word: null,

    dragStart() {
        this.get("startDragAction")(this);
    },
    drag() {
        return false;
    },
    dragEnter() {
        return false;
    },
    dragLeave() {
        return false;
    },
    dragOver() {
        return false;
    },
    dragEnd() {
        this.get("dragEndAction")(this);
    },
    drop() {
        this.get("dropAction")(this)
    }

});