

(function(exports) {

    function NoteList(list) {
        this.list = [];
    }

    NoteList.prototype.addNote = function(note) {
        this.list.push(note)
    }

    NoteList.prototype.createNewNote = function(text) {
        this.addNote(new Note(text))
    }

  exports.NoteList = NoteList;

})(this);