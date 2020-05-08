function NoteControllerDoes(){
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController.notesView.notes.list[0].text === "Go for a run")
}

function renderHTML(){
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    noteController.setInnerHTML();
    assert.isTrue(noteController.notesPage.innerHTML === "<ul><li><div>Go for a run</div></li></ul><ul><li><div>Cook</div></li></ul><ul><li><div>Meditate</div></li></ul><ul><li><div>Watch Killing Eve</div></li></ul>")
}

 
NoteControllerDoes();
renderHTML();