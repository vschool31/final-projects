var html_big_block = document.getElementById('html_big_block');
var js_big_block = document.getElementById('js_big_block');
var css_big_block = document.getElementById('css_big_block');
var video_big_block = document.getElementById('video_big_block');

var html_small_block = document.getElementById('html_small_block');
var js_small_block = document.getElementById('js_small_block');
var css_small_block = document.getElementById('css_small_block');
var video_small_block = document.getElementById('video_small_block');

html_small_block.addEventListener('click', function(){
	animation_click_on_small_block("#F1672C")
});

js_small_block.addEventListener('click', function(){
	animation_click_on_small_block("#F1BF25")
});

css_small_block.addEventListener('click', function(){
	animation_click_on_small_block("#31A9DC")
});

video_small_block.addEventListener('click', function(){
	animation_click_on_small_block("#88CE16")
});

function animation_click_on_small_block(color){
	html_big_block.style.backgroundColor = color;
	html_small_block.style.transform = "scale(0)";

	js_big_block.style.backgroundColor = color;
	js_small_block.style.transform = "scale(0)";

	css_big_block.style.backgroundColor = color;
	css_small_block.style.transform = "scale(0)";

	video_big_block.style.backgroundColor = color;
	video_small_block.style.transform = "scale(0)";
};