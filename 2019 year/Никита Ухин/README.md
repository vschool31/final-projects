# Подготовка к ЕГЭ по русскому (теоретическая часть)
## Введение
В настоящее время знания в области русского языка являются необходимым условием успешной сдачи ЕГЭ и, как следствие, поступления в ВУЗ, а также являются признаком образованности человека. Так как мы живём в стране, где русский язык – основной, то ключевые знания и правила в этой области необходимы и актуальны для каждого, кто этим языком пользуется. В современном мире, с развитием информационных технологий, возникла возможность, и даже необходимость, предоставлять учебно-методические пособия в удобном виде – в виде сайта.

В этом учебно-методические пособии представлена информация по теме «Орфография». Оно может служить, как дополнительный материал для подготовки к ЕГЭ и повышения грамотности.

## Основная часть
### Цели
Cоздать удобное и эффективное, в плане усвоения информации, методическое пособие в виде сайта, для подготовки к ЕГЭ по русскому языку и повышения уровня грамотности.
### Задачи
1. Собрать информацию по заданной теме.
2. Структурировать и обработать полученную информацию.
3. Спроектировать дизайн сайта.
4. Создать «каркас» сайта, используя язык гипертекстовой разметки HTML.
5. Заполнить сайт информацией по теме.
6. Выполнить дизайн сайта, используя каскадные таблицы стилей CSS.
7. Реализовать функционал сайта при помощи JavaScript.

### Реализация проекта
#### Этапы работы
1. Определение проблемы и её актуальности.
2. Сбор и систематизация информации по теме.
3. Оформление проекта.
4. Подготовка публичного выступления и защита проекта.

Также для проекта были созданы 10 обучающих видеороликов по некоторым темам учебно-методического пособия. Для монтажа видео я использовал программу Sony Vegas pro 13, для записи экрана программу Bandicam, а для записи звука – Voice Recorder.

#### Построение информационной модели
Первым шагом создания сайта является сбор и обработка информации

Источники информации можно разделить по группам:
+ Учебники по русскому языку
+ Различные сайты, предоставляющие информацию по теме «Орфография»
+ Сайты, предоставляющие информацию об особенностях и правилах HTML, CSS, JavaScript, JQuery.
+ Приложения, обучающие правилам русского языка.

### Технология создания сайта
1. HTML
    
    Для создания сайта я использовал HTML (от англ. HyperText Markup Language — «язык гипертекстовой разметки») — стандартизированный язык разметки документов во Всемирной паутине. 
	Список тэгов, которые я использовал:

    ```html
    <html></html> <body></body> <head></head> <title></title> <link> <div></div> <section></section> <span></span> <video></video> <img> <p></p> <b></b> <i></i> <script></script> <a></a> <h1></h1> <meta>
    ```
2. CSS

	Для настройки внешнего вида сайта было удобно использовать каскадные таблицы стилей CSS, которые подключаются через тэг <link> 
3. JavaScript

	Для работы над функционалом сайта, а именно над созданием тестов, параллакс эффектом, меню, я использовал язык программирования JavaScript.
4. JQuery

	Я использовал библиотеку для JavaScript JQuery. Она существенно упрощает работу с кодом.
### Меню сайта

Мой сайт состоит из 4-х страниц, для удобной навигации по страницам я создал меню. Оно открывается при нажатии на кнопку «Меню» или на соответствующую пиктограмму. Через меню пользователь может переместиться на нужную ему тему или страницу. Для закрытия меню достаточно прокрутить страницу или кликнуть по затемнённому участку.

Реализовано меню на HTML, CSS, JavaScript и JQuery.
1. HTML

    ```html
	<div class="header">
		<p class="memutext">МЕНЮ</p>	
	</div>
    <div class="mainmenu">
        <a href="#" class="onmain">На главную</a>
        <a href="Правописание гласных/main.html" class="linkglas">Правописание гласных</a>
        <div class="buttondown">
            <img src="back_arrow.png" class="arrow">
        </div>
        <a href="Правописание гласных/main.html#pristav" class="pri1">Приставки</a>
        <a href="Правописание гласных/main.html#korniii" class="cor1">Корни</a>
        <a href="Правописание гласных/main.html#sufflink" class="suf1">Суффиксы</a>
        <a href="Правописание гласных/main.html#oconlink" class="okn1">Окончания</a>
        <a href="Правописание согласных/main.html" class="linksogl">Правописание согласных</a>
        <div class="buttondown2">
            <img src="back_arrow.png" class="arrow2">
        </div>
        <a href="Правописание согласных/main.html#pristavlink" class="pri2">Пиставки</a>
        <a href="Правописание согласных/main.html#sufflink2" class="suf2">Суффиксы</a>
    </div>

    <div class="burgerbutton">
        <span class="bar1"></span>
        <span class="bar2"></span>
        <span class="bar3"></span>
    </div>```
2. CSS 

    ```css
    .mainmenu {background-color: #fff;height: 100vh;width: 30%; /*0*/position: fixed;margin-left: -30%;z-index: 4;transition: .3s;}.zagreyevanie {background-color: #000; opacity: 0.65; width: 100%;height: 100%;position: fixed;top: 0;z-index: 3; transition: .4s;}.burgerbutton {position: fixed;width: 24px;height: 24px;margin-top: -40px; margin-left: 20px;z-index: 5; /*5*/transform: rotate(0deg); transition: .4s;}.bar1 {position: absolute;width: inherit;margin-top: 0px;background-color: #000;height: 4px;}.bar2 {position: absolute;width: inherit;margin-top: 10px;background-color: #000;height: 4px;}.bar3 {position: absolute;width: inherit;margin-top: 20px;background-color: #000;height: 4px;}.header {position: absolute;width: 100%;height: 7vh;z-index: 2;}.memutext {font-family:  'Montserrat', sans-serif;display: block;width: 6vw;height: 4vh;color: #fff;margin-left: 4vw;user-select: none;border-bottom: 2px solid #fff;border-top: 2px solid #fff;margin-top: 2vh;line-height: 4vh;text-align: center;transition-duration: .3s;}.memutext:hover {background-color: rgba(255,255,255,0.4);}.mainmenu a {text-decoration: none;display: block;height: 8vh;position: relative;font-family:  'Montserrat', sans-serif;color: #000;}.onmain {width: 20vw;margin-top: 22px;margin-left: 5vw;background-color: #ffab40;text-align: center;line-height: 8vh;font-size: 3vh;}.linkglas {width: 20vw;margin-top: 5vh;background-color: #fff;text-align: center;line-height: 8vh;z-index: 5;border-top: 2px solid #ff3d00; border-bottom: 2px solid #ff3d00; border-right: 2px solid #ff3d00;transition: .4s; }.linkglas:hover {background-color: #ffd180;}.pri1 {width: 20vw;margin-top: -8vh;background-color: #fff;text-align: center;line-height: 8vh;z-index: 4;transition: .4s;margin-left: 0;box-shadow: 2px 0px 0 #ff3d00 inset, 0px -2px 0 #ff3d00 inset;}.pri1:hover {background-color: #ffd180;}.cor1 {width: 20vw;margin-top: -8vh;background-color: #fff;text-align: center;line-height: 8vh;z-index: 3;transition: .4s;margin-left: 0;box-shadow: 2px 0px 0 #ff3d00 inset, 0px -2px 0 #ff3d00 inset;}.cor1:hover {background-color: #ffd180;}.suf1 {width: 20vw;margin-top: -8vh;background-color: #fff;text-align: center;line-height: 8vh;z-index: 2;transition: .4s;margin-left: 0;box-shadow: 2px 0px 0 #ff3d00 inset, 0px -2px 0 #ff3d00 inset;}.suf1:hover {background-color: #ffd180;}.okn1 {width: 20vw;margin-top: -8vh;background-color: #fff;text-align: center;line-height: 8vh;z-index: 1;transition: .4s;margin-left: 0;box-shadow: 2px 0px 0 #ff3d00 inset, 0px -2px 0 #ff3d00 inset;}.okn1:hover {background-color: #ffd180;}.buttondown {width: 5vw;height: 8vh;position: absolute;margin-top: -8vh;margin-left: 21vw;padding-top: calc(4vh - 16px);}.arrow {transform: rotate(270deg);transition: .4s;}.linksogl {width: 20vw;margin-top: 3vh;background-color: #fff;text-align: center;line-height: 8vh;z-index: 3;border-top: 2px solid #ff3d00; border-bottom: 2px solid #ff3d00; border-right: 2px solid #ff3d00;transition: .4s;}.linksogl:hover {background-color: #ffd180;}.pri2 {width: 20vw;margin-top: -8vh;background-color: #fff;text-align: center;line-height: 8vh;z-index: 2;transition: .4s;margin-left: 0;box-shadow: 2px 0px 0 #ff3d00 inset, 0px -2px 0 #ff3d00 inset;}.pri2:hover {background-color: #ffd180;}.suf2 {width: 20vw;margin-top: -8vh;background-color: #fff;text-align: center;line-height: 8vh;z-index: 1;transition: .4s;margin-left: 0;	box-shadow: 2px 0px 0 #ff3d00 inset, 0px -2px 0 #ff3d00 inset;}.suf2:hover {background-color: #ffd180;}.buttondown2 {width: 5vw;height: 8vh;position: absolute;margin-top: -8vh;margin-left: 21vw;padding-top: calc(4vh - 16px);}.arrow2 {transform: rotate(270deg);transition: .4s;}
    ```
3. JavaScript и JQuery

    ```javascript
    tasks = [
        { 
            task: "исристовать",
            answer: "изристовать"
        },
        {
            task: "расщелина",
            answer: "расщелина"
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
            setTimeout(word, 400);};
    });
    ```

### Верстка страницы

Я использовал блочную вёрстку страницы, так как нахожу её более удобной в сравнении с табличной или фреймовой вёрсткой. При блочной вёрстке вся страница представляется в виде блоков, которые потом размещаются в нужной последовательности и наполняются информацией или же декоративными элементами.

### Структура сайта

Мой сайт представляет собой цепь последовательно идущих секций (тэг `<section>`). Каждой секции соответствует своя тема или часть сайта. Секции разделены блоком с изображением, для того что бы пользователь осознавал где заканчивается одна тема и начинается другая.


## Заключение
В процессе создания сайта я отточил свои умения и навыки в области Web дизайна, научился отбирать и обрабатывать информацию. Разработанное мной учебно-методическое пособие может использоваться учениками и учителями для подготовки в этой области. 