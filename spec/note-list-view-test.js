function noteListViewHasANoteList(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList)
    noteList.createNewNote("Food shopping")
    noteList.createNewNote("Go for a run")
    assert.isTrue(noteListView.notes.list[0].text === "Food shopping");
}


function noteListViewCreatesHTML(){
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList)
    noteList.createNewNote("Food shopping")
    assert.isTrue(noteListView.makeHTML() === "<ul><li><div>Food shopping</div></li></ul>");

}

noteListViewHasANoteList();
noteListViewCreatesHTML();