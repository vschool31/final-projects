$(window).scroll(function() {
	var st = $(this).scrollTop();

	$(".img").css({
		"transform" : "translate(0%, +" + st/80 + "%"
	});

	$(".img2").css({
		"transform" : "translate(0%, +" + st/80 + "%"
	});

	$(".parimg").css({
		"transform" : "translate(0%, +" + st/80 + "%"
	});
});

// test

tasks = [
	{ 
		task: "сыграть",
		answer: "сыграть"
	},
	{
		task: "межыгровой",
		answer: "межигровой"
	},
	{
		task: "разыгранный",
		answer: "разыгранный"
	},
	{
		task: "дезинтегратор",
		answer: "дезинтегратор"
	},
	{
		task: "постымпрессионизм",
		answer: "постимпрессионизм"
	},
	{
		task: "соызволить",
		answer: "соизволить"
	},
	{
		task: "отыскать",
		answer: "отыскать"
	},
	{
		task: "контригра",
		answer: "контригра"
	},
	{
		task: "разименовать",
		answer: "разыменовать"
	},
	{
		task: "безитоговый",
		answer: "безытоговый"
	},
	{
		task: "взыскательный",
		answer: "взыскательный"
	}	
];

var i = 0;

var cont = document.getElementById('cont');
cont.textContent = tasks[i].task;

$("#tru").click(function(){

	function word () {
		$('#cont').css('box-shadow', "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)");
		i++;
		if (i == tasks.length) {
			i = 0;
		};

		$('#cont').text(tasks[i].task);
	};

	if (tasks[i].task == tasks[i].answer) { //green

		$('#cont').css('box-shadow', "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)");
		setTimeout(word, 400);
	}

	else { //red

		$('#cont').css('box-shadow', "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)");
		setTimeout(word, 400);
	};
});

$("#fals").click(function(){

	function word () {
		$('#cont').css('box-shadow', "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)");
		i++;

		if (i == tasks.length) {
			i = 0;
		};

		$('#cont').text(tasks[i].task);
	};

	if (tasks[i].task == tasks[i].answer) {

		$('#cont').css('box-shadow', "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)");
		setTimeout(word, 400);
	}

	else {
		$('#cont').css('box-shadow', "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)");
		setTimeout(word, 400);
	};

});


tasks1 = [
	{ 
		task: "приобразовать",
		answer: "преобразовать"
	},
	{
		task: "превкусный",
		answer: "превкусный"
	},
	{
		task: "прежимание",
		answer: "прижимание"
	},
	{
		task: "претягательный",
		answer: "притягательный"
	},
	{
		task: "приумолкнуть",
		answer: "приумолкнуть"
	},
	{
		task: "прилезший",
		answer: "прилезший"
	},
	{
		task: "превознесённый",
		answer: "превознесённый"
	},
	{
		task: "причудесный",
		answer: "пречудесный"
	},
	{
		task: "преросший",
		answer: "приросший"
	},
	{
		task: "приварить",
		answer: "приварить"
	},
	{
		task: "преподносить",
		answer: "преподносить"
	},
		{
		task: "приземистый",
		answer: "приземистый"
	}	
];


var k = 0;

var cont1 = document.getElementById('cont1');
cont1.textContent = tasks1[k].task;

$("#tru1").click(function(){

	function word () {
		cont1.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		k++;

		if (k == tasks1.length) {
			k = 0;
		};

		cont1.textContent = tasks1[k].task;
	};

	if (tasks1[k].task == tasks1[k].answer) { //green

		cont1.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	}

	else { //red

		cont1.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	};

});

$("#fals1").click(function(){

	function word () {
		cont1.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		k++;

		if (k == tasks1.length) {
			k = 0;
		};

		cont1.textContent = tasks1[k].task;
	};

	if (tasks1[k].task == tasks1[k].answer) {

		cont1.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	}

	else {
		cont1.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	};

});

tasks2 = [
	{ 
		task: "подгареть",
		answer: "подгореть"
	},
	{
		task: "уклониться",
		answer: "уклониться"
	},
	{
		task: "творец",
		answer: "творец"
	},
	{
		task: "плавчиха",
		answer: "пловчиха"
	},
	{
		task: "озарение",
		answer: "озарение"
	},
	{
		task: "подскокивать",
		answer: "подскакивать"
	},
	{
		task: "растение",
		answer: "растение"
	},
	{
		task: "разростающиеся",
		answer: "разрастающиеся"
	},
	{
		task: "прикосновение",
		answer: "прикосновение"
	},
	{
		task: "недогареть",
		answer: "недогореть"
	},
	{
		task: "подросток",
		answer: "подросток"
	},
		{
		task: "зорница",
		answer: "зарница"
	},
	{
		task: "перетирать",
		answer: "перетирать"
	},
	{
		task: "переберать",
		answer: "перебирать"
	}		
];


var z = 0;

var cont2 = document.getElementById('cont2');
cont2.textContent = tasks2[z].task;

$("#tru2").click(function(){

	function word () {
		cont2.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		z++;

		if (z == tasks2.length) {
			z = 0;
		};

		cont2.textContent = tasks2[z].task;
	};

	if (tasks2[z].task == tasks2[z].answer) { //green

		cont2.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	}

	else { //red

		cont2.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	};

});

$("#fals2").click(function(){

	function word () {
		cont2.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		z++;

		if (z == tasks2.length) {
			z = 0;
		};

		cont2.textContent = tasks2[z].task;
	};

	if (tasks2[z].task == tasks2[z].answer) {

		cont2.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	}

	else {
		cont2.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	};

});

tasks3 = [
	{ 
		task: "колящий",
		answer: "колющий"
	},
	{
		task: "разсказщик",
		answer: "разсказчик"
	},
	{
		task: "достоин",
		answer: "достоин"
	},
	{
		task: "податлевый",
		answer: "податливый"
	},
	{
		task: "кварцевый",
		answer: "кварцевый"
	},
	{
		task: "подыгрывать",
		answer: "подыгрывать"
	},
	{
		task: "исследывать",
		answer: "исследовать"
	},
	{
		task: "борющийся",
		answer: "борющийся"
	},
	{
		task: "коммунестический",
		answer: "коммунистический"
	}
];

var o = 0;

var cont = document.getElementById('cont3');
cont3.textContent = tasks3[o].task;

$("#tru3").click(function(){

	function word () {
		cont3.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		o++;

		if (o == tasks3.length) {
			o = 0;
		};

		cont3.textContent = tasks3[o].task;
	};

	if (tasks3[o].task == tasks3[o].answer) { //green

		cont3.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	}

	else { //red

		cont3.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	};

});

$("#fals3").click(function(){

	function word () {
		cont3.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		o++;

		if (o == tasks3.length) {
			o = 0;
		};

		cont3.textContent = tasks3[o].task;
	};

	if (tasks3[o].task == tasks3[o].answer) {

		cont3.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	}

	else {
		cont3.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	};

});

tasks4 = [
	{ 
		task: "(они) смотрют",
		answer: "(они) смотрят"
	},
	{
		task: "усвоишь",
		answer: "усвоишь"
	},
	{
		task: "(она) вышлет",
		answer: "(она) вышлет"
	},
	{
		task: "(он) красет",
		answer: "(он) красит"
	},
	{
		task: "встретешь",
		answer: "встретишь"
	},
	{
		task: "колеблишься",
		answer: "колеблешься"
	},
	{
		task: "щиплешь",
		answer: "щиплешь"
	}	
];

var j = 0;

var cont = document.getElementById('cont4');
cont4.textContent = tasks4[j].task;

$("#tru4").click(function(){

	function word () {
		cont4.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		j++;

		if (j == tasks4.length) {
			j = 0;
		};

		cont4.textContent = tasks4[j].task;
	};

	if (tasks4[j].task == tasks4[j].answer) { //green

		cont4.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	}

	else { //red

		cont4.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	};

});

$("#fals4").click(function(){

	function word () {
		cont4.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		j++;

		if (j == tasks4.length) {
			j = 0;
		};

		cont4.textContent = tasks4[j].task;
	};

	if (tasks4[j].task == tasks4[j].answer) {

		cont4.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	}

	else {
		cont4.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	};

});