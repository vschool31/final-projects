var html_return_button = document.getElementById('html_return_button');
var js_return_button = document.getElementById('js_return_button');
var css_return_button = document.getElementById('css_return_button');
var video_return_button = document.getElementById('video_return_button');

var html_button = document.getElementById('html_small_block');
var js_button = document.getElementById('js_small_block');
var css_button = document.getElementById('css_small_block');
var video_button = document.getElementById('video_small_block');

html_button.addEventListener('click', function(){
	html_return_button.style.transform = "scale(1)";
	html_return_button.style.opacity = "1";
})

js_button.addEventListener('click', function(){
	js_return_button.style.transform = "scale(1)";
	js_return_button.style.opacity = "1";
})

css_button.addEventListener('click', function(){
	css_return_button.style.transform = "scale(1)";
	css_return_button.style.opacity = "1";
})

video_button.addEventListener('click', function(){
	video_return_button.style.transform = "scale(1)";
	video_return_button.style.opacity = "1";
})