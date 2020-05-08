function NoteControllerDoes(){
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController.notesView.notes.list[0].text === "Go for a run and")
}

function renderHTML(){
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    noteController.setInnerHTML();
    assert.isTrue(noteController.notesPage.innerHTML === "<ul><li><div>Go for a run and</div></li></ul>")
}

 
NoteControllerDoes();
renderHTML();