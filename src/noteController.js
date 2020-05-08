
(function(exports){

    function NoteController(noteList) {
        this.notesPage = document.getElementById('notesPage');
        noteList.createNewNote("Go for a run and")
        this.notesView = new NoteListView(noteList) 
    }

    NoteController.prototype.setInnerHTML = function(){
        this.notesPage.innerHTML = this.notesView.makeHTML()
    }
    exports.NoteController = NoteController;

})(this);
