(function(exports) {
   function NoteModelTest() {
    var text = "My favourite language is JavaScript"
    var note = new Note(text)
    
    if(note.text !== text) {
        throw new Error("Test failed")
    } else {
        console.log("Test passed")
    }

};

function ReturnTextTest() {
    var text = "My least favourite languages is PHP"
    var note = new Note(text)

    if(note.returnText() !== text) {
        throw new Error("TExt failed")
    } else {
        console.log("Test passed")
    }
    
    
};






NoteModelTest();
ReturnTextTest();


})();