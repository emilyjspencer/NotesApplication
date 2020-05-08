
(function(exports){

    function NoteController(noteList) {
        this.notesPage = document.getElementById('notesPage');
        noteList.createNewNote("Go for a run")
        noteList.createNewNote("Cook")
        noteList.createNewNote("Meditate")
        noteList.createNewNote("Watch Killing Eve")
        this.notesView = new NoteListView(noteList) 
    }

    NoteController.prototype.setInnerHTML = function(){
        this.notesPage.innerHTML = this.notesView.makeHTML()
    }
    exports.NoteController = NoteController;

})(this);
