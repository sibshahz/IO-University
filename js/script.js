$(document).ready(function(){
	$('#testimonials').contentslider({
		container         : '.testimonials',
	    slides        : '.single-test',
	    navContainer    : '.test-nav',
	    slideWidth : '255',
	    animationSpeed: 1600
	});

	$('.partners-section').memberslider({
		mslidecontainer         : '.members-cont',
        mnavContainer    : '.nav-cont',
        msingleSlide		: 	'.member-col',
        manimationSpeed  : 1600
	});
});
