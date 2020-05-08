

(function(exports) {

    function NoteList(list) {
        this.list = [];
        this.idCount = 0;
    }

    NoteList.prototype.addNote = function(note) {
        note.id = this.idCount
        this.idCount ++
        this.list.push(note)
    }

    NoteList.prototype.createNewNote = function(text) {
        this.addNote(new Note(text))
    }

  exports.NoteList = NoteList;

})(this);