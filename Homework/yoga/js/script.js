window.addEventListener('DOMContentLoaded', function() {
    
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'), //получаем табы
        info = document.querySelector('.info-header'), //получаем родителя наших табов
        tabContent = document.querySelectorAll('.info-tabcontent'); //получаем "содержание" табов

    function hideTabContent(a) { //создаем функцию, которая прячет "содержание" табов
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); //удаляем стиль, который показывает
            tabContent[i].classList.add('hide'); //добавляем стиль. который прячет
        }
    }

    hideTabContent(1); //передаем в функцию a=1, чтобы только самый первый контент остался на странице

    function showTabContent(b) { // создаем функцию, которая снова показывает спрятанный контент
        if (tabContent[b].classList.contains('hide')) { //проверяем "спрятан" ли контент
            tabContent[b].classList.remove('hide'); //убираем в нем стиль hide
            tabContent[b].classList.add('show'); // добавляем стиль show   
        }
    }

    info.addEventListener('click', function(event) { //добавляем отслеживателя кликов на родителе табов
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { //если кликаем на "табе" (содержит класс табов)
            for (let i = 0; i < tab.length; i++) { // то запускается цикл
                if (target == tab[i]) { // например кликнули на втором табе [1], то
                    hideTabContent(0); // запускается функция, которая прячеи все контенты всех табов
                    showTabContent(i); // запускается функция, которая показывает контент второго таба.
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2019-03-16 01:30';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            // hours.textContent = t.hours;
            // minutes.textContent = t.minutes;
            // seconds.textContent = t.seconds;

            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            } 

            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            } 

            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            } 

            if (t.total < 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('.more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('.more-splash');
        document.body.style.overflow = '';
    });

    // Modal 2

    let infoDiv = document.querySelector('.info');

    function infoOverlay() {
            overlay.style.display = 'block';
            more.classList.add('.more-splash');
            document.body.style.overflow = 'hidden';
    }
    
    infoDiv.addEventListener('click', function(event) { //добавляем отслеживателя кликов на родителе табов
        let target = event.target;
        if (target && target.classList.contains('description-btn')) { //если кликаем на "табе" (содержит класс табов)
            infoOverlay();
        }
    });     
});