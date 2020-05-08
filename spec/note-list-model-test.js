
    function noteListModelHasAnEmptyArray() {
        var noteList = new NoteList()
        assert.isTrue(noteList.list.length === 0);
    };
   
    
    function noteCanBeAddedToNoteList() {
        var noteList = new NoteList();
        var note = new Note('Hello')
        noteList.addNote(note)
        assert.isTrue(noteList.list.length === 1);
        assert.isTrue(noteList.list[0].text === 'Hello')
    };

    noteListModelHasAnEmptyArray();
    noteCanBeAddedToNoteList();
   


