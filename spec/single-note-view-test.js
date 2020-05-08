function singleNoteListViewReturnsAStringOfHtml() {
    console.log("singleNoteListViewDisplaysHTML");
    var note = new Note("Journal");
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue(singleNoteView.returnHTML() === '<div>Journal</div>')
}

singleNoteListViewReturnsAStringOfHtml();