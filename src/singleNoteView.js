(function (exports) {

    function SingleNoteView(note) {
        this.list = note
    }
    SingleNoteView.prototype.returnHTML = function () {
        return ("<div>" + this.list.text + "</div>")
    };

    exports.SingleNoteView = SingleNoteView;
})(this);