(function(exports) {
   function NoteModelTest() {
    var text = 'My favourite language is JavaScript'
    var note = new Note(text)
    
    if(note.text !== text) {
        throw new Error("Test failed")
    } else {
        console.log("Test passed")
    }

};

NoteModelTest();


})();