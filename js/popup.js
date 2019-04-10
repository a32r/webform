$('.left:first-of-type p').hover(function() {
	$('#popup').fadeIn();
}, function() {
	$('#popup').delay(500).fadeOut();
});
