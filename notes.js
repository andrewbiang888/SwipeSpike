function loadNotes() {
    var html = '';
    for (var i = 0; i < notesList.length; i++) {
        html += '<div class="drag-container" style="position:relative;">';
        html += '    <div id="note_' + notesList[i].id + '" class="swipe-target" style="position:absolute">';
        html += '        <div class="mobile-note-title" style="position:relative;">' + notesList[i].title + '</div>';
        html += '        <div class="mobile-note-text" style="position:relative;">' + notesList[i].body + '</div>';
        html += '    </div>';
        html += '</div>';
    }
    $('#notesList').html(html);
}