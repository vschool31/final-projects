var k = 0;

$(window).scroll(function() {
	var scrol = $(this).scrollTop();
	if (scrol > 50 && k == 0) {
		$('.burgerbutton').css('margin-top', "22px");
	};
	if (scrol <= 50 && k == 0) {
		$('.burgerbutton').css('margin-top', "-40px");
	}
});

// 42 - это верхний отступ + половина высоты для кнопи-бургера
var height = $(window).height()-42; 
var l = 0;
// l = 1 когда меню на тёмном фоне
//Когда кнопка-бургер проходит над тёмным фоном она меняет свой 
//цвет на белый и наоборот. Ниже это представлено в коде.
$(window).scroll(function() {
	var heegh = $(this).scrollTop();
	if (heegh > height && !$("div").is(".zagreyevanie")) {
		$('.bar1').css('background-color', "#000");
		$('.bar2').css('background-color', "#000");
		$('.bar3').css('background-color', "#000"); 
		l = 0;
	};
	if (heegh <= height && !$("div").is(".zagreyevanie")) {
		$('.bar1').css('background-color', "#fff");
		$('.bar2').css('background-color', "#fff");
		$('.bar3').css('background-color', "#fff");
		l = 1;
	};
});

var grey       = document.createElement('div');
grey.className = 'zagreyevanie';
menuopen       = 0

$('.memutext').click(function(){
	menuopen = 1
	$('.mainmenu').css('margin-left', "0");
	document.body.appendChild(grey);
	$('.burgerbutton').css('z-index', "-7");
		$(window).scroll(function(){
		$('.mainmenu').css('margin-left', "-30%");
		document.body.removeChild(grey);
		$('.burgerbutton').css('z-index', "5");
		menuopen = 0;
	});
});

$('.burgerbutton').click(function(){
	if (menuopen == 0) {
		$('.mainmenu').css('margin-left', "0");
		document.body.appendChild(grey);
		$('.burgerbutton').css('z-index', "-7");
		// menuopen = 1;	
	};
	if (menuopen == 1) {
		$('.mainmenu').css('margin-left', "-30%");
		document.body.removeChild(grey);
		$('.burgerbutton').css('z-index', "5");
		menuopen = 0;
	}
	$(window).scroll(function(){
		$('.mainmenu').css('margin-left', "-30%");
		document.body.removeChild(grey);
		$('.burgerbutton').css('z-index', "5");
		menuopen = 0;
	});
});

$('body').on('click', '.zagreyevanie', function(e) {
	$('.mainmenu').css('margin-left', "-30%");
    $(this).closest('.zagreyevanie').remove();
    $('.burgerbutton').css('z-index', "5");
    menuopen = 0;
    if ($(window).scrollTop() <= 50) {
 		$('.burgerbutton').css('margin-top', "-40px");
 	};
});

// красота для ссылок тут =>

open  = 0
open2 = 0

$('.buttondown').click(function(){
	if (open == 0) {
		$('.pri1').css('margin-top', "0");
		$('.cor1').css('margin-top', "0");
		$('.suf1').css('margin-top', "0");
		$('.okn1').css('margin-top', "0");
		$('.pri1').css('margin-left', "4vw");
		$('.cor1').css('margin-left', "4vw");
		$('.suf1').css('margin-left', "4vw");
		$('.okn1').css('margin-left', "4vw");
		$('.arrow').css('transform', "rotate(90deg)");
		open = 1
	}
	else {
		$('.pri1').css('margin-top', "-8vh");
		$('.cor1').css('margin-top', "-8vh");
		$('.suf1').css('margin-top', "-8vh");
		$('.okn1').css('margin-top', "-8vh");
		$('.pri1').css('margin-left', "0");
		$('.cor1').css('margin-left', "0");
		$('.suf1').css('margin-left', "0");
		$('.okn1').css('margin-left', "0");
		$('.arrow').css('transform', "rotate(270deg)");
		open = 0		
	}
});

$('.buttondown2').click(function(){
	if (open2 == 0) {
		$('.pri2').css('margin-top', "0");
		$('.suf2').css('margin-top', "0");
		$('.pri2').css('margin-left', "4vw");
		$('.suf2').css('margin-left', "4vw");
		$('.arrow2').css('transform', "rotate(90deg)");
		open2 = 1
	}
	else {
		$('.pri2').css('margin-top', "-8vh");
		$('.suf2').css('margin-top', "-8vh");
		$('.pri2').css('margin-left', "0");
		$('.suf2').css('margin-left', "0");
		$('.arrow2').css('transform', "rotate(270deg)");
		open2 = 0		
	}
});