var html_button = document.getElementById('html_small_block');

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

var js_button = document.getElementById('js_small_block');

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

var css_button = document.getElementById('css_small_block');

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

var video_button = document.getElementById('video_small_block');

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

function lesson(lesson){
	lesson.style.transform = "scale(1)";
	lesson.style.opacity = "1";
}

html_button.addEventListener('click', function(){
	setTimeout(function(){lesson(html_1)}, 100);
	setTimeout(function(){lesson(html_2)}, 350);
	setTimeout(function(){lesson(html_3)}, 200);
	setTimeout(function(){lesson(html_4)}, 400);
	setTimeout(function(){lesson(html_5)}, 150);
	setTimeout(function(){lesson(html_6)}, 250);
	setTimeout(function(){lesson(html_7)}, 50);
	setTimeout(function(){lesson(html_8)}, 500);
	setTimeout(function(){lesson(html_9)}, 450);
	setTimeout(function(){lesson(html_10)}, 300);
})

js_button.addEventListener('click', function(){
	setTimeout(function(){lesson(js_1)}, 100);
	setTimeout(function(){lesson(js_2)}, 50);
	setTimeout(function(){lesson(js_3)}, 500);
	setTimeout(function(){lesson(js_4)}, 400);
	setTimeout(function(){lesson(js_5)}, 300);
	setTimeout(function(){lesson(js_6)}, 250);
	setTimeout(function(){lesson(js_7)}, 350);
	setTimeout(function(){lesson(js_8)}, 200);
	setTimeout(function(){lesson(js_9)}, 450);
	setTimeout(function(){lesson(js_10)}, 150);
})

css_button.addEventListener('click', function(){
	setTimeout(function(){lesson(css_1)}, 250);
	setTimeout(function(){lesson(css_2)}, 150);
	setTimeout(function(){lesson(css_3)}, 200);
	setTimeout(function(){lesson(css_4)}, 50);
	setTimeout(function(){lesson(css_5)}, 400);
	setTimeout(function(){lesson(css_6)}, 100);
	setTimeout(function(){lesson(css_7)}, 350);
	setTimeout(function(){lesson(css_8)}, 500);
	setTimeout(function(){lesson(css_9)}, 450);
	setTimeout(function(){lesson(css_10)}, 300);
})

video_button.addEventListener('click', function(){
	setTimeout(function(){lesson(video_1)}, 50);
	setTimeout(function(){lesson(video_2)}, 350);
	setTimeout(function(){lesson(video_3)}, 100);
	setTimeout(function(){lesson(video_4)}, 400);
	setTimeout(function(){lesson(video_5)}, 150);
	setTimeout(function(){lesson(video_6)}, 250);
	setTimeout(function(){lesson(video_7)}, 450);
	setTimeout(function(){lesson(video_8)}, 200);
	setTimeout(function(){lesson(video_9)}, 500);
	setTimeout(function(){lesson(video_10)}, 300);
})