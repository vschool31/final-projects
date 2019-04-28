var DEFAULT_MIN_QUESTIONS_PER_APP = 1;
var DEFAULT_MIN_ANSWERS_PER_QUESTION = 1;

var questions = null;
var currentQuestion = 0;
var audioLetters = [];
var videoLetters = [];
var isEvalMode = false;
var appEnded = false;

/////////////////////////////////////////////////////////////////////////////
AppClient.onInit = function () {
 cacheDomElements();
 
 var baseImageURL = AppClient.getParameter("baseimage");
 if(baseImageURL === "") baseImageURL = "back.jpg";
 var img = new Image() ;
 img.onload = function() {
  $content.css('background-image','url('+baseImageURL+')');
 };
 img.src = baseImageURL;
 
 $checkSolutionBtn.on('click',checkSolution);
 questions = createQuestionModel();
 
 if (questions.length >= DEFAULT_MIN_QUESTIONS_PER_APP) {
  var globalElement = AppClient.getParameters('globalelement');
  if (globalElement && globalElement.value !== "") {
   createGlobalElementScreen(globalElement);
  } else startQuiz();
 } else return 404;
  
 isEvalMode = AppClient.getParameter('eval') == "true" ? true : false;
  
 resizeText();
 resizeText('.resizeText');
  
 $(window).resize(resizeText);
};
/////////////////////////////////////////////////////////////////////////////
function updateProgress () {
 $progress.html((currentQuestion+1) + ' / ' + questions.length); 
}
/////////////////////////////////////////////////////////////////////////////
function cacheDomElements () {
 $content = $('#content');
 $checkSolutionBtn = $('#checkSolutionBtn');
 $question = $('#question');
 $globalElement = $('#global-element');
 $answers = $('#answers');
 $progress = $('#progress');
 $questionWrapper = $('#question-wrapper');
 $globalElementFrame = $('#global-element-frame');
 $smile = $('#smile');
}
/////////////////////////////////////////////////////////////////////////////
function createGlobalElementScreen (globalElement) {
 if (globalElement.media  == "text") {
  $globalElement.html('<div class="isText resizeText">' + AppClient.linkifyText(globalElement.value) + '</div>'); 
 }
  
 if (globalElement.media == "image") {
  $img = $('<img src="'+globalElement.value+'" alt=""/>');
  $globalElement.html($img);
 }
  
 if (globalElement.media == "speech") {
  $globalElement.html('<div id="global-element-inner" class="global-element-inner"></div>');
  globalElement.loadPlayer("global-element-inner",false);
 }
  
 if (globalElement.media == "audio") {
  $globalElement.html('<div id="global-element-inner" class="global-element-inner"></div>');
  globalElement.loadPlayer("global-element-inner",false);
 }
  
 if (globalElement.media == "video") {
   $globalElement.html('<div id="global-element-inner" style="height:100%" class="global-element-inner"></div>');
  globalElement.loadPlayer("global-element-inner",false);
 }
  
 changeSolutionButton();
 $globalElementFrame.show();
}
/////////////////////////////////////////////////////////////////////////////
function shrinkGlobalElement () {
 $('#shrinker').remove();
 $globalElementFrame.css('z-index',1);
 $globalElementFrame.removeClass('grow');
  
 $grower = $('<div id="grower"></div>');
 $grower.on('click',growGlobalElement);
 
 $globalElementFrame.prepend($grower);
 $globalElementFrame.addClass('shrink');
}
/////////////////////////////////////////////////////////////////////////////
function growGlobalElement () {
 $('#grower').remove();
 $globalElementFrame.css('z-index',9999);
 $globalElementFrame.removeClass('shrink');
  
 $shrinkBtn = $('<div id="shrinker-panel"><div id="shrinker"><i class="glyphicon glyphicon-minus"></i></div></div>'); 
 $shrinkBtn.on('click',shrinkGlobalElement);
  
 $globalElementFrame.append($shrinkBtn);
 $globalElementFrame.addClass('grow');
}
/////////////////////////////////////////////////////////////////////////////
function startQuiz () {
 nextQuestion();
  
 if ($globalElementFrame.css('display') == 'block') {
  if ($('#AppClientTaskPanel').length > 0)
   AppClient.closeTaskPanel();
   
  shrinkGlobalElement();
 }
}
/////////////////////////////////////////////////////////////////////////////
function nextQuestion () {
 $smile.html(""); 
  
 var nextQuestion = questions[currentQuestion];
  
 for (var i = 1; i < nextQuestion.answers.length+1; i++) {
  audioLetters.push(getLetterForNumber(i));
  videoLetters.push(getLetterForNumber(i));
 }
 
 updateProgress();
 createQuestion(nextQuestion); 
 resizeText('#question');

 $answers.html("");
  
 for (var i = 0; i < nextQuestion.answers.length; i++) {
  var $card = createAnswer(nextQuestion.answers[i]);
  $card.data().o = nextQuestion.answers[i];
  $card.find('.card-answer').on('click',onCardClick);
  $card.find('.card-select').on('click',selectAnswer);
  $answers.append($card);
 } 
  
 // 4 answers = next to each other, 2 rows, instead of 3 on row 1, 1 on row 2
 if (nextQuestion.answers.length == 4) {
  $answers.css('width','610px');
  $answers.css('max-width','90%');
 } else {
  $answers.css('width','100%');
  $answers.css('max-width','100%');
 }
  
 resizeText();

 setTimeout(function(){
   resizeText();
   resizeText('#question');
 },10);
}
/////////////////////////////////////////////////////////////////////////////
function selectAnswer () {
 $smile.html("");
  
 var $checkbox = $(this).find('i');
 var parent = $(this).parent('.card');
 parent.removeClass('right wrong');
 var o = parent.data().o;
  
  if ($checkbox.hasClass('glyphicon-unchecked')) {
   $checkbox.removeClass('glyphicon-unchecked').addClass('glyphicon-check');
   o.check.selected = true;
  } else {
   $checkbox.removeClass('glyphicon-check').addClass('glyphicon-unchecked');
   o.check.selected = false;   
  }
}
/////////////////////////////////////////////////////////////////////////////
function createQuestionModel () {
 var questions = [];
 var userQuestions = AppClient.getParameters("question#");
 var validQuestions = 0;
  
 for (var i = 0; i < userQuestions.length; i++) {
  if (userQuestions[i].value !== "") {
   
   userQuestions[i].answers = [];
      
   var userAnswers = AppClient.getParameters("answers"+userQuestions[i].list.index);
   var validAnswers = 0;
      
   for (var j = 0; j < userAnswers.length; j+=2) {
    if (userAnswers[j].value !== "") {
     validAnswers++;
     userQuestions[i].answers.push({answer:userAnswers[j],check:userAnswers[j+1]});
    }
   }
      
   if (validAnswers >= DEFAULT_MIN_ANSWERS_PER_QUESTION) {
    if (!AppClient.isTranslationOf('geordnet',AppClient.getParameter("order"))) { 
     userQuestions[i].answers = AppClient.shuffleArray(userQuestions[i].answers);
    }
    questions.push(userQuestions[i]);  
   }
  }
 }
  
 if (!AppClient.isTranslationOf('geordnet',AppClient.getParameter("order"))) { 
  questions = AppClient.shuffleArray(questions);
 }
  
 return questions; 
}
/////////////////////////////////////////////////////////////////////////////
function createQuestion (question) {
  var s = "";
  
  if (question.media == "text") {
   $text = $('<span unselectable="on" class="resizeText">'+AppClient.linkifyText(question.value)+'</span>');
   $question.html($text);
   if ($questionWrapper.height() < $questionWrapper[0].scrollHeight ||
    $questionWrapper.width() < $questionWrapper[0].scrollWidth) {
     $text.on('click', function () {
      createModalDialogFrame(
       '<div id="modalContentInner"></div>',
        function() {
         $('#modalContentInner').html(
          AppClient.linkifyText(question.value) +
          (question.hint !== "" ? '<div class="modal-hint">' + AppClient.linkifyText(question.hint).replace(/"/g,'&quot;') + '</div>' : '')
         );
        }  
       ).modal("show");
     });
   }  
  }
  
  if (question.media == "image") {
   $img = $('<img src="'+question.value+'" alt=""/>');
   $question.html($img);
   $img.load(function () {
    $img.on('click', function () {
     var img = new Image();
     img.src = question.value;
     
     if(img.width > $question.width()*1.2 || img.height > $question.height()*1.2){
      createModalDialogFrame(
       '<div id="modalContentInner"></div>',
        function() {
         // on show
         $('#modalContentInner').html(
          '<img data-dismiss="modal" class="img-responsive" style="margin: 0 auto;" src="'+question.value+'" alt=""/>' +
          (question.hint !== "" ? '<div class="modal-hint">' + AppClient.linkifyText(question.hint).replace(/"/g,'&quot;') + '</div>' : '')
         );
        }  
       ).modal("show");
      }
     });
    });
  }
  
  if (question.media == "speech") {
   question.loadPlayer("question",false);
  }
  
  if (question.media == "audio") {
   question.loadPlayer("question",false);
  }
  
  if (question.media == "video") {
   $video = $('<div class="playMediaBtn resizeText"><span class="glyphicon glyphicon-film"></span>Video</div><img class="videoThumb img-responsive" src="'+question.thumbURL+'" style="margin:0 auto" alt=""/>');
   $question.html($video);
   $video.load(function () {
    $video.on('click', function () {
    createModalDialogFrame(
     '<div id="modalContentInner"></div>',
     function(){
      $("#modalContentInner").height(Math.min($("#modalContentInner").width() / 4 * 3 +30,$(window).height()*0.7));
       question.loadPlayer("modalContentInner",true);
       if (question.hint !== "")
        $('#modalContentInner').append('<div class="modal-hint">' + AppClient.linkifyText(question.hint).replace(/"/g,'&quot;') + '</div>');
      }
     ).modal("show");
    });
   });
  }
 
 $('.question-hint').remove();
 $('.hintbtn',$questionWrapper).remove();
 if (question.hint !== "") {
   if (question.media !== "image") {
     $questionWrapper.append(
       '<span class="hintbtn hintbtn_'+question.media+' popovers"'+ 
       ' data-container="#cards" data-toggle="popover" data-placement="auto"'+
       ' data-content="'+AppClient.linkifyText(question.hint).replace(/"/g,'&quot;')+'">'+
       '<span class="glyphicon glyphicon-info-sign infoicon"></span></span>');
     
     $('.popovers',$questionWrapper).popover({
      trigger:"hover",
      placement: "bottom",
       container:'body'
     }).on('touchstart mousedown', function(e) {
      stopEvent(e);
      $(this).popover('toggle');
     });
   } else {
     $questionWrapper.append('<div class="question-hint resizeText">'+AppClient.linkifyText(question.hint).replace(/"/g,'&quot;')+'</div>');
   }
 }
  
}
/////////////////////////////////////////////////////////////////////////////
function createAnswer (o) { 
 var s = "";
  
 if(o.answer.media == "text"){
   s = '<div class="verticalCenterBox"><div class="verticalCenterBoxInner"><span unselectable="on" class="resizeText">'+AppClient.linkifyText(o.answer.value)+'</span></div></div>';
 }
 if(o.answer.media == "image"){
  s = '<div class="verticalCenterBox"><div class="answerImage verticalCenterBoxInner"><img src="'+o.answer.value+'" alt="" class="img-responsive"/></div></div>';
 } 
 if(o.answer.media == "speech"){
  s = '<div class="verticalCenterBox"><div class="verticalCenterBoxInner"><div class="tts playMediaBtn"><span class="glyphicon glyphicon-headphones"></span> Audio '+  getMediaLetter("audio")+'</div></div></div>';
 } 
 if(o.answer.media == "audio"){
  s = '<div class="verticalCenterBox"><div class="verticalCenterBoxInner"><div class="playMediaBtn"><span class="glyphicon glyphicon-headphones"></span> '+
                   'Audio '+ getMediaLetter("audio")+'</div></div></div>'; 
 }
 if(o.answer.media == "video"){
  s = '<div class="playMediaBtn"><span class="glyphicon glyphicon-film"></span> Video '+ getMediaLetter("video")+'</div><img class="videoThumb" src="'+o.answer.thumbURL+'" alt="" class="img-responsive"/>';
 }
  
 var $card = $('<div class="card">' +
                '<div class="card-select">' +
                 '<div class="verticalCenterBox "><div class="verticalCenterBoxInner checkBox">' +
                 '<i class="glyphicon glyphicon-unchecked"></i>' +
                 '</div></div>' +
                '</div>' +
               '<div class="card-answer" '+(o.answer.media == 'text' ? 'style="text-align:left;"' : '')+'>'+
                 (o.answer.hint !== "" ?
                 '<span class="hintbtn hintbtn_'+o.answer.media+' popovers"'+ 
                 ' data-container="#cards" data-toggle="popover" data-placement="auto"'+
                 ' data-content="'+AppClient.linkifyText(o.answer.hint).replace(/"/g,'&quot;')+'">'+
                 '<span class="glyphicon glyphicon-info-sign infoicon"></span></span>'
              : '') +
              s +
              '</div>');
  
 if (o.answer.hint !== "") {
  $card.append(
   '<span class="hintbtn hintbtn_'+o.answer.media+' popovers"'+ 
   ' data-container="#answers" data-toggle="popover" data-placement="auto"'+
   ' data-content="'+AppClient.linkifyText(o.answer.hint).replace(/"/g,'&quot;')+'">'+
   '<span class="glyphicon glyphicon-info-sign infoicon"></span></span>');
 }
 
 if (o.answer.hintTTS == '1')
  $('.hintbtn',$card).on('click mouseover touchend',function(){ 
   AppClient.textToSpeechStop(); 
   AppClient.textToSpeech(o.answer.hint); 
  });

 $('.popovers',$card).popover({
  trigger:"hover",
  placement: function (context, source) {
   return ($card.position().top < 100 ? "bottom" : "auto");
  }
 }).on('touchstart mousedown', function(e) {
  stopEvent(e);
  $(this).popover('toggle');
 });
  
  
 return $card;
}
/////////////////////////////////////////////////////////////////////////////
function resizeText (selector) {
  $(selector ? selector : ".card").each(function(){ 
   // resize card font size: 
   var resizeText = $('.resizeText', $(this));
   if(resizeText.length > 0){
     var fontSize = 1.8;
     resizeText.css('font-size', fontSize+"em");
     resizeText.css('line-height', "normal");
     var maxWidth = $(this).width();
     var maxHeight = $(this).height();
     var textHeight;
     var textWidth;
     fontSize = 1.6;
     do {
        resizeText.css('font-size', fontSize+"em");
        textWidth = resizeText.width();
        textHeight = resizeText.height();
        fontSize = fontSize - 0.1;
     } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 0.3);
   }
  });  
}
/////////////////////////////////////////////////////////////////////////////
function getLetterForNumber(i){
 var s = "";
 while(i > 0){ s += String.fromCharCode(64+i%26); i = i - 26; } 
 return s;
}
/////////////////////////////////////////////////////////////////////////////
function getMediaLetter (type) {
 if (type == "audio")
  return audioLetters.splice(0,1);
 if (type == "video")
  return videoLetters.splice(0,1);
}
/////////////////////////////////////////////////////////////////////////////
function onCardClick(e){
 stopEvent(e);
  
 var $card = $(this);
 var o = $(this).parent('.card').data().o;
   
 if(o.answer.media == "text"){
   // text has no lightbox, do nothing
 }
     
 if(o.answer.media == "image"){
  // only open lightbox, if image is twice as large as the card
  var img = new Image();
  img.src = o.answer.value;
    
  if(img.width > $card.width()*2 || img.height > $card.height()*2){
   createModalDialogFrame(
    '<div id="modalContentInner"></div>',
    function() {
     // on show
     $('#modalContentInner').html('<img data-dismiss="modal" class="img-responsive" '+
                                  'style="margin: 0 auto;" src="'+o.answer.value+'" alt=""/>');
    }
   ).modal("show");
  }
 }  

 if(o.answer.media == "speech"){
  AppClient.textToSpeechStop();
  AppClient.textToSpeech(o.answer.value,o.answer.language);
 }

 if(o.answer.media == "audio"){
  createModalDialogFrame('<div id="modalContentInner"></div>',
   function(){ o.answer.loadPlayer("modalContentInner",true); }
  ).modal("show");
 }

 if(o.answer.media == "video"){
   createModalDialogFrame('<div id="modalContentInner"></div>',
   function(){
    $("#modalContentInner").height(
      Math.min($("#modalContentInner").width() / 4 * 3 +30,$(window).height()*0.7));
    o.answer.loadPlayer("modalContentInner",true);
   }
  ).modal("show");
 }     
}
/////////////////////////////////////////////////////////////////////////////
function quitApp () {
 if (isEvalMode) {
  var percentageCorrect = Math.round(countNumberOfRightAnsweredQuestionsInEvalMode * 100 / questions.length);
  AppClient.setSolved(percentageCorrect);   
  showProgress();
  appEnded = true;   
 }else
  AppClient.setSolved();   
  
 if ( $("#feedback").length === 0) {
  var f = AppClient.getParameters("feedback").value;
  if(trim(f) !== "")
  $("body").append(
   '<div id="feedback" '+(f.length < 50 ? 'style="text-align:center"':'')+'>'+AppClient.linkifyText(f)+
   '<br><br><div style="text-align:center">'+
   '<button style="font-size:120%" onclick="$(\'#feedback\').remove()">OK</button>'+
   '</div>'
  );
 }  
}
/////////////////////////////////////////////////////////////////////////////
function showProgress () {
 var percentageCorrect = Math.round(countNumberOfRightAnsweredQuestionsInEvalMode * 100 / questions.length);
 var correct = countNumberOfRightAnsweredQuestionsInEvalMode + ' / ' + questions.length;
  
 var $progress = $(  
  '<div class="progress">' +
   '<div style="position:relative;">' +
    '<div class="progress-text">'+(correct + ' ('+percentageCorrect+'%)')+'</div>' +
   '</div>' +
   '<div class="progress-bar progress-bar-success" role="progressbar" style="width:'+percentageCorrect+'%"></div>' +
   '<div class="progress-bar progress-bar-danger"  role="progressbar" style="width:'+(100-percentageCorrect)+'%"></div>' +
  '</div>'
 );
  
 $content.remove('.progress');
 $content.prepend($progress);
}
/////////////////////////////////////////////////////////////////////////////
function checkSolution () {
 var countRightAnswers = 0;
 var countSelectedAnswers = 0;
 var countSelectedRightAnswers = 0;
 var currQ = questions[currentQuestion]; 
  
 for (var i = 0; i < currQ.answers.length; i++) {
  if (currQ.answers[i].check.value == "true")
    countRightAnswers++;
  if (currQ.answers[i].check.selected)
    countSelectedAnswers++;
  if (currQ.answers[i].check.value == "true" && currQ.answers[i].check.selected)
    countSelectedRightAnswers++;
 }
  
 var questionCorrectAnswered = countRightAnswers == countSelectedRightAnswers && countRightAnswers == countSelectedAnswers;
  
 // show right answers and change Solution Button to next Question
 if (isEvalMode) { 
  return evalMode_ON(questionCorrectAnswered);
 } 
  
 // show smile feedback sad or happy, but don't mark the cards, only if all answers are correct --> more guessing permutation
 if (questionCorrectAnswered) {
  evalMode_OFF(true);
  if (currentQuestion + 1 >= questions.length) 
   return quitApp();
  else {
   currentQuestion++;
   changeSolutionButton();
  } 
 } else evalMode_OFF(false); 
}
/////////////////////////////////////////////////////////////////////////////
var countNumberOfRightAnsweredQuestionsInEvalMode = 0;

function evalMode_ON (questionCorrectAnswered) { 
 markCards(); 
  
 if (!appEnded && questionCorrectAnswered)
  countNumberOfRightAnsweredQuestionsInEvalMode++;
  
 if (currentQuestion + 1 < questions.length) {
  currentQuestion++;  
  changeSolutionButton();
 } else return quitApp();
  
}
/////////////////////////////////////////////////////////////////////////////
function evalMode_OFF (questionIsAnsweredCorrect) {
 var smile = 'sad.png';
 if (questionIsAnsweredCorrect) {
  smile = 'happy.png';
  markCards();
 } 
 $smile.html('<img src="'+smile+'" style="width:100%">');
}
/////////////////////////////////////////////////////////////////////////////
function markCards () {
 $('#answers .card').each(function (index,elem) {
  $(elem).removeClass('wrong right');
   if (!isEvalMode) {
    if ($(elem).data().o.check.selected)
     if ($(elem).data().o.check.value == "true")
      $(elem).addClass('right');   
   } else {
    if ($(elem).data().o.check.value == "true")
     $(elem).addClass('right');   
   }
 });   
}
/////////////////////////////////////////////////////////////////////////////
function changeSolutionButton () {
  if ( $checkSolutionBtn.hasClass('start-quiz') ) {
   $checkSolutionBtn.removeClass('start-quiz');
   $checkSolutionBtn.addClass('close-question');
   $checkSolutionBtn.html('<i class="glyphicon glyphicon-arrow-right"></i>');
   $checkSolutionBtn.off().on('click',function() {changeSolutionButton();startQuiz();});
  }
  else if ( $checkSolutionBtn.hasClass('close-question') ) {
   $checkSolutionBtn.removeClass('close-question');
   $checkSolutionBtn.html('<i class="glyphicon glyphicon-check"></i>');
   $checkSolutionBtn.off().on('click',checkSolution);
  } else {
   $checkSolutionBtn.addClass('close-question');
   $checkSolutionBtn.html('<i class="glyphicon glyphicon-arrow-right"></i>');
   $checkSolutionBtn.off().on('click',function () {changeSolutionButton();nextQuestion();});
  }
}