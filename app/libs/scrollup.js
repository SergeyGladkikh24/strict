$(document).ready(function(){
 
	$(window).scroll(function(){
		var elem = $('.simple-h');
		var distanse = elem.offset().top;
		if ($(this).scrollTop() > distanse) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
 
	$('.scrollup').click(function(e){
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, 600);
	});
 
});