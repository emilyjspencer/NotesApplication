

(function(exports) {

    function NoteListModelTest() {
        
        var notelist = new NoteList()
        if(noteList.list !== []) {
            throw new Error("Test failed")
        } else {
            console.log("Test passed")
        }

    }

    NoteListModelTest()
});