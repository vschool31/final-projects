var html_1 = document.getElementById('html_1');
var html_2 = document.getElementById('html_2');
var html_3 = document.getElementById('html_3');
var html_4 = document.getElementById('html_4');
var html_5 = document.getElementById('html_5');
var html_6 = document.getElementById('html_6');
var html_7 = document.getElementById('html_7');
var html_8 = document.getElementById('html_8');
var html_9 = document.getElementById('html_9');
var html_10 = document.getElementById('html_10');

var js_1 = document.getElementById('js_1');
var js_2 = document.getElementById('js_2');
var js_3 = document.getElementById('js_3');
var js_4 = document.getElementById('js_4');
var js_5 = document.getElementById('js_5');
var js_6 = document.getElementById('js_6');
var js_7 = document.getElementById('js_7');
var js_8 = document.getElementById('js_8');
var js_9 = document.getElementById('js_9');
var js_10 = document.getElementById('js_10');

var css_1 = document.getElementById('css_1');
var css_2 = document.getElementById('css_2');
var css_3 = document.getElementById('css_3');
var css_4 = document.getElementById('css_4');
var css_5 = document.getElementById('css_5');
var css_6 = document.getElementById('css_6');
var css_7 = document.getElementById('css_7');
var css_8 = document.getElementById('css_8');
var css_9 = document.getElementById('css_9');
var css_10 = document.getElementById('css_10');

var video_1 = document.getElementById('video_1');
var video_2 = document.getElementById('video_2');
var video_3 = document.getElementById('video_3');
var video_4 = document.getElementById('video_4');
var video_5 = document.getElementById('video_5');
var video_6 = document.getElementById('video_6');
var video_7 = document.getElementById('video_7');
var video_8 = document.getElementById('video_8');
var video_9 = document.getElementById('video_9');
var video_10 = document.getElementById('video_10');

function hover(id){
	id.addEventListener('mouseover', function(){
		id.style.transitionDuration = "0.3s"
		id.style.transform = "scale(1.2)"
	})
	id.addEventListener('mouseout', function(){
		id.style.transform = "scale(1)"
	})
}

hover(html_1);
hover(html_2);
hover(html_3);
hover(html_4);
hover(html_5);
hover(html_6);
hover(html_7);
hover(html_8);
hover(html_9);
hover(html_10);

hover(css_1);
hover(css_2);
hover(css_3);
hover(css_4);
hover(css_5);
hover(css_6);
hover(css_7);
hover(css_8);
hover(css_9);
hover(css_10);

hover(js_1);
hover(js_2);
hover(js_3);
hover(js_4);
hover(js_5);
hover(js_6);
hover(js_7);
hover(js_8);
hover(js_9);
hover(js_10);

hover(video_1);
hover(video_2);
hover(video_3);
hover(video_4);
hover(video_5);
hover(video_6);
hover(video_7);
hover(video_8);
hover(video_9);
hover(video_10);
