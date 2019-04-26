var	header = document.getElementById('header').style,
 	title = document.getElementById('title').style,
	back = document.getElementById('back').style,
	next = document.getElementById('next').style;

var title_text = document.getElementById('title_text').style,
	back_text = document.getElementById('back_text').style,
	next_text = document.getElementById('next_text').style;

window.onscroll = function() {
	if (window.pageYOffset > 100) {
		header.height = "4vh";

		title.height = "6vh";
		title_text.fontSize = "3vh";

		next.height = "6vh";
		next.width = "25vw";
		next.right = "20vw";
		next.clipPath = "polygon(0 0, 77% 0, 100% 100%, 29% 100%)";
		next_text.fontSize = "2vh";

		back.height = "6vh";
		back.width = "18vw"
		back.top = "0";
		back.right = "2vw";
		back_text.fontSize = "2vh";
		back.clipPath = "polygon(0 0, 77% 0, 100% 100%, 35% 100%)";
	} else {
		header.height = "8vh";

		title.height = "10vh";
		title_text.fontSize = "4vh";

		next.height = "4vh";
		next.width = "35vw";
		next.right = "0vw";
		next.clipPath = "polygon(0 0, 100% 0, 100% 100%, 9% 100%)";
		next_text.fontSize = "3vh";

		back.height = "4vh";
		back.width = "25vw"
		back.top = "6vh";
		back.right = "0";
		back_text.fontSize = "3vh";
		back.clipPath = "polygon(17% 0, 100% 0, 100% 100%, 0 100%)";
	}
}
