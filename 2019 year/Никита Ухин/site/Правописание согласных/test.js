tasks = [
	{ 
		task: "исристовать",
		answer: "изристовать"
	},
	{
		task: "расщелина",
		answer: "расщелина"
	},
	{
		task: "возходить",
		answer: "восходить"
	},
	{
		task: "взкарабкаться",
		answer: "вскарабкаться"
	},
	{
		task: "чересчур",
		answer: "чересчур"
	},
	{
		task: "зжечь",
		answer: "сжечь"
	},
	{
		task: "чрезвычайный",
		answer: "чрезвычайный"
	}	
];

var i = 0;

var cont = document.getElementById('cont');
cont.textContent = tasks[i].task;

$("#tru").click(function(){

	function word () {
		cont.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		i++;

		if (i == tasks.length) {
			i = 0;
		};

		cont.textContent = tasks[i].task;
	};

	if (tasks[i].task == tasks[i].answer) { //green

		cont.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	}

	else { //red

		cont.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	};

});

$("#fals").click(function(){

	function word () {
		cont.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		i++;

		if (i == tasks.length) {
			i = 0;
		};

		cont.textContent = tasks[i].task;
	};

	if (tasks[i].task == tasks[i].answer) {

		cont.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	}

	else {
		cont.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	};

});

tasks1 = [
	{ 
		task: "кованый",
		answer: "кованый"
	},
	{
		task: "оловяный",
		answer: "оловянный"
	},
	{
		task: "испытан",
		answer: "испытан"
	},
	{
		task: "виденый",
		answer: "виденный"
	},
	{
		task: "румянный",
		answer: "румяный"
	},
	{
		task: "свежезамороженное",
		answer: "свежезамороженное"
	},
	{
		task: "скошеный",
		answer: "скошенный"
	},
	{
		task: "торжественный",
		answer: "торжественный"
	},
	{
		task: "раненный",
		answer: "раненый"
	}	
];

var j = 0;

var cont1 = document.getElementById('cont1');
cont1.textContent = tasks1[j].task;

$("#tru1").click(function(){

	function word () {
		cont1.style.boxShadow = "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)";
		j++;

		if (j == tasks1.length) {
			j = 0;
		};

		cont1.textContent = tasks1[j].task;
	};

	if (tasks1[j].task == tasks1[j].answer) { //green

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
		j++;

		if (j == tasks1.length) {
			j = 0;
		};

		cont1.textContent = tasks1[j].task;
	};

	if (tasks1[j].task == tasks1[j].answer) {

		cont1.style.boxShadow = "0 14px 28px rgba(213,0,0,1.25), 0 10px 10px rgba(213,0,0,1.22)";
		setTimeout(word, 400);
	}

	else {
		cont1.style.boxShadow = "0 14px 28px rgba(27,94,32,1.25), 0 10px 10px rgba(27,94,32,1.22)";
		setTimeout(word, 400);
	};

});