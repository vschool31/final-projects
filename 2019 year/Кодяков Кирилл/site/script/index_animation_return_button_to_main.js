var html_return_button = document.getElementById('html_return_button');
var js_return_button = document.getElementById('js_return_button');
var css_return_button = document.getElementById('css_return_button');
var video_return_button = document.getElementById('video_return_button');

var html_button = document.getElementById('html_small_block');
var js_button = document.getElementById('js_small_block');
var css_button = document.getElementById('css_small_block');
var video_button = document.getElementById('video_small_block');

var html_big_block = document.getElementById('html_big_block');
var js_big_block = document.getElementById('js_big_block');
var css_big_block = document.getElementById('css_big_block');
var video_big_block = document.getElementById('video_big_block');

press_on_return_button(html_return_button);
press_on_return_button(js_return_button);
press_on_return_button(css_return_button);
press_on_return_button(video_return_button);

function press_on_return_button(return_button){
	return_button.addEventListener('click', function(){
		return_button.style.top = "0";
		return_button.style.height = "100vh";

		setTimeout(function(){
			html_big_block.style.backgroundColor = "#E54D26";
			js_big_block.style.backgroundColor = "#E5A227";
			css_big_block.style.backgroundColor = "#0070BA";
			video_big_block.style.backgroundColor = "#63A712";
	
			html_big_block.style.zIndex = "2";
			js_big_block.style.zIndex = "2";
			css_big_block.style.zIndex = "2";
			video_big_block.style.zIndex = "2";

			html_small_block.style.transform = "scale(1)";
			js_small_block.style.transform = "scale(1)";
			css_small_block.style.transform = "scale(1)";
			video_small_block.style.transform = "scale(1)";	

			html_small_block.style.zIndex = "2";
			js_small_block.style.zIndex = "2";
			css_small_block.style.zIndex = "2";
			video_small_block.style.zIndex = "2";

			return_button.style.zIndex = "2";
		}, 100);
		
		setTimeout(function(){
			return_button.style.height = "0";	
		}, 500);
		
		setTimeout(function(){location.reload()}, 1000);
	})
}