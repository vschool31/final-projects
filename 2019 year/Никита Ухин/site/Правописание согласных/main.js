$(window).scroll(function() {
	var st = $(this).scrollTop();

	$(".img").css({
		"transform" : "translate(0%, -" + st/80 + "%"
	});
	$(".img2").css({
		"transform" : "translate(0%, -" + st/80 + "%"
	});
});