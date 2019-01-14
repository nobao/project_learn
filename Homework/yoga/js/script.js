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
});