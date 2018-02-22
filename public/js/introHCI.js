'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

$(".likeBtn").click(function(e) {
	// Prevent page from reloading every time you click.
	e.preventDefault();

	// First, create a listener where Google Analytics can read it
	// to. In this case, your User Analytics ID to your page.
	ga('create', 'UA-114595572-1', 'auto');
	// Google Analytics event:
	// ga("send", "event", <Category>, <Action>)
	ga("send", "event", 'like', 'click');
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
}