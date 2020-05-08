(function(exports) {
    function NoteListView(noteList) {
      this.notes = noteList;
    };

    NoteListView.prototype.makeHTML = function(){            
        var array = []
        for (var i = 0; i < this.notes.list.length; i++){
            array.push("<ul><li><div>" + this.notes.list[i].text + "</div></li></ul>")
        }
        return array.join('')
    }

    exports.NoteListView = NoteListView;
  })(this);