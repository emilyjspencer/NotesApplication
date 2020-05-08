
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

    function eachNoteHasAnId() {
        var noteList = new NoteList();
        noteList.createNewNote('hello')
        noteList.createNewNote('salut')
        noteList.createNewNote('ciao')
        noteList.createNewNote('hallo')
        noteList.createNewNote('hoi')
        assert.isTrue(noteList.list[4].id === 4)
        assert.isTrue(noteList.list.length === 5)
   
    }

    noteListModelHasAnEmptyArray();
    noteCanBeAddedToNoteList();
    eachNoteHasAnId();
   


