

(function(exports) {

    function NoteList(list) {
        this.list = [];

    }

    NoteList.prototype.addNote = function() {
        note = new Note(text)
        this.list.push(note)
    }

    NoteList.prototype.showAllNotes = function() {
        return this.list
    }

  exports.NoteList = NoteList

})(this);