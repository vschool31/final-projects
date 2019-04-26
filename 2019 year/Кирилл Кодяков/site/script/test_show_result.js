var true_1 = document.getElementById('true_1'),
	true_2 = document.getElementById('true_2'),
	true_3 = document.getElementById('true_3'),
	true_4 = document.getElementById('true_4'),
	true_5 = document.getElementById('true_5'),
	true_6 = document.getElementById('true_6'),
	true_7 = document.getElementById('true_7'),
	true_8 = document.getElementById('true_8'),
	true_9 = document.getElementById('true_9'),
	true_10 = document.getElementById('true_10'),
	true_11 = document.getElementById('true_11'),
	true_12 = document.getElementById('true_12'),
	true_13 = document.getElementById('true_13'),
	true_14 = document.getElementById('true_14'),
	true_15 = document.getElementById('true_15');

var q1 = document.getElementById('q1').style,
	q2 = document.getElementById('q2').style,
	q3 = document.getElementById('q3').style,
	q4 = document.getElementById('q4').style,
	q5 = document.getElementById('q5').style,
	q6 = document.getElementById('q6').style,
	q7 = document.getElementById('q7').style,
	q8 = document.getElementById('q8').style,
	q9 = document.getElementById('q9').style,
	q10 = document.getElementById('q10').style,
	q11 = document.getElementById('q11').style,
	q12 = document.getElementById('q12').style,
	q13 = document.getElementById('q13').style,
	q14 = document.getElementById('q14').style,
	q15 = document.getElementById('q15').style;

var button = document.getElementById('button');

button.addEventListener('click', function(){
	if(true_1.checked){
		q1.backgroundColor = '#77DD77';
	} else{
		q1.backgroundColor = '#CD5C5C';
	}
	if(true_2.checked){
		q2.backgroundColor = '#77DD77';
	} else{
		q2.backgroundColor = '#CD5C5C';
	}
	if(true_3.checked){
		q3.backgroundColor = '#77DD77';
	} else{
		q3.backgroundColor = '#CD5C5C';
	}
	if(true_4.checked){
		q4.backgroundColor = '#77DD77';
	} else{
		q4.backgroundColor = '#CD5C5C';
	}
	if(true_5.checked){
		q5.backgroundColor = '#77DD77';		
	} else{
		q5.backgroundColor = '#CD5C5C';
	}
	if(true_6.checked){
		q6.backgroundColor = '#77DD77';
	} else{
		q6.backgroundColor = '#CD5C5C';
	}
	if(true_7.checked){
		q7.backgroundColor = '#77DD77';
	} else{
		q7.backgroundColor = '#CD5C5C';
	}
	if(true_8.checked){
		q8.backgroundColor = '#77DD77';
	} else{
		q8.backgroundColor = '#CD5C5C';
	}
	if(true_9.checked){
		q9.backgroundColor = '#77DD77';	
	} else{
		q9.backgroundColor = '#CD5C5C';
	}
	if(true_10.checked){
		q10.backgroundColor = '#77DD77';
	} else{
		q10.backgroundColor = '#CD5C5C';;;
	}
	if(true_11.checked){
		q11.backgroundColor = '#77DD77';
	} else{
		q11.backgroundColor = '#CD5C5C';;
	}
	if(true_12.checked){
		q12.backgroundColor = '#77DD77';
	} else{
		q12.backgroundColor = '#CD5C5C';;
	}
	if(true_13.checked){
		q13.backgroundColor = '#77DD77';
	} else{
		q13.backgroundColor = '#CD5C5C';;
	}
	if(true_14.checked){
		q14.backgroundColor = '#77DD77';
	} else{
		q14.backgroundColor = '#CD5C5C';;
	}
	if(true_15.checked){
		q15.backgroundColor = '#77DD77';
	} else{
		q15.backgroundColor = '#CD5C5C';	}

	button.style.display = "none";

	window.scrollTo(0,document.body.scrollHeight);
})