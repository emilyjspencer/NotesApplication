(function(exports) {
   function noteModelTest() {
    var text = "My favourite language is JavaScript"
    var note = new Note(text)
    if(note.text !== text) {
        throw new Error("Test failed")
    } else {
        console.log("Test passed")
    }

};

function returnTextTest() {
    var text = "My least favourite languages is PHP"
    var note = new Note(text)
    if(note.returnText() !== text) {
        throw new Error("Test failed")
    } else {
        console.log("Test passed")
    }   
};

function firstNoteHasIdOfNull() {
    var text = "Hello"
    var note = new Note(text)
    assert.isTrue(note.id === null)
};

noteModelTest();
returnTextTest();
firstNoteHasIdOfNull();


})();