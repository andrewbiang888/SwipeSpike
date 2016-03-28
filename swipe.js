

    //var jqswipees = $('.swipe-target');
var swipee = null;//document.getElementById('swipeTarget');
var swipeeId = null;
var swipeeLeft = null;
    //var xup = $('#x_up');
    //var xdown = $('#x_down');
    //var xdiff = $('#x_diff');
    //var left = $('#note_left');
    //left.text(swipeeLeft);

    var xDown = null;
    var xDiff = null;

    var notesContainer = document.getElementById('notesList');
    notesContainer.addEventListener('touchstart', handleTouchStart, false);

    notesContainer.addEventListener('touchend', handleTouchEnd, false);

    notesContainer.addEventListener('touchmove', handleTouchMove, false);

    function handleTouchStart(evt) {
        var touchObj = evt.touches[0].target;

        if (touchObj.className != 'swipe-target')
            swipee = touchObj.parentElement;
        else 
            swipee = touchObj 

        swipeeId = swipee.id;
        var swipeePos = $('#' + swipeeId).position();
        swipeeLeft = swipeePos.left;
        xDown = evt.touches[0].clientX;
        evt.preventDefault();
    };

    function handleTouchEnd(evt) {
        if (xDiff > 50) showDeleteConfirmation();

        //var upx = evt.touches[0].clientX;
        //alert('upx='+upx);
        //$('#x_up').text(xUp);

        evt.preventDefault();
    }

    function handleTouchMove(evt) {
        var xPos = evt.touches[0].clientX;
        xDiff = xDown - xPos;
        var left = (swipeeLeft - xDiff) + 'px';
        if (xPos < xDown) {
            $('#' + swipeeId).css('left', left);
            //xdiff.text(xDiff);
            //swipee.css('left', swipeeLeft - xDiff);
        }

        //$('#x_diff').html(swipeeLeft + xPos);
        evt.preventDefault();
    }

    function deleteNote() {
        hideDeleteConfirmation();
        $('#'+ swipeeId).css('left', '0px');
        alert('Note has been deleted.')

    }
    function cancelDelete() {
        hideDeleteConfirmation();
        $('#' + swipeeId).css('left', '0px');
    }

    function showDeleteConfirmation() {
        $('#deleteConfirmation').removeClass('hidden');
    }

    function hideDeleteConfirmation() {
        $('#deleteConfirmation').addClass('hidden');
    }

