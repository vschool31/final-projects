var	header = document.getElementById('header').style,
 	title = document.getElementById('title').style,
	back = document.getElementById('back').style;

var title_text = document.getElementById('title_text').style,
	back_text = document.getElementById('back_text').style;

window.onscroll = function() {
	if (window.pageYOffset > 100) {
		header.height = "4vh";

		title.height = "6vh";
		title_text.fontSize = "3vh";

		back.height = "6vh";
		back.width = "35vw"
		back.top = "0";
		back.right = "2vw";
		back_text.fontSize = "3vh";
		back.clipPath = "polygon(0 0, 80% 0, 100% 100%, 25% 100%)";
	} else {
		header.height = "8vh";

		title.height = "10vh";
		title_text.fontSize = "5vh";

		back.height = "10vh";
		back.width = "35vw"
		back.right = "0";
		back_text.fontSize = "5vh";
		back.clipPath = "polygon(0 0, 100% 0, 100% 100%, 23% 100%)";
	}
}