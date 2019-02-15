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
    
    // // Form (из урока)

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    // let mainForm = document.querySelector('.main-form'),
    //     input = mainForm.getElementsByTagName('input'),
    //     statusMessage = document.createElement('div');

    // statusMessage.classList.add('status');

    // mainForm.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     mainForm.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    //     let mainFormData = new FormData(mainForm);

    //     let obj = {};
    //     mainFormData.forEach(function(value, key) {
    //         obj[key] = value;
    //     });
    //     let json = JSON.stringify(obj);

    //     request.send(json);

    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //     for (let i = 0; i < input.length; i++) {
    //         input[i].value ='';
    //     }
    // });

    // Form2 (сделанное мной после урока по Заданию)
    // let contactForm = document.querySelector('#form'),
    //     inputs = contactForm.getElementsByTagName('input'),
    //     statusMessage2 = document.createElement('div');

    // statusMessage2.classList.add('status');

    // contactForm.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     contactForm.appendChild(statusMessage2);

    //     let req = new XMLHttpRequest();
    //     req.open('POST', 'server.php');
    //     req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //     let contactFormData = new FormData(contactForm);

    //     for(let i = 0; i < inputs.length; i++) {
    //         contactFormData.append(inputs[i].type, inputs[i].value);
    //     }
        
    //     console.log(contactFormData);
    //     req.send(contactFormData);

    //     req.addEventListener('readystatechange', function() {
    //         if (req.readyState < 4) {
    //             statusMessage2.innerHTML = message.loading;
    //         } else if (req.readyState === 4 && req.status == 200) {
    //             statusMessage2.innerHTML = message.success;
    //         } else {
    //             statusMessage2.innerHTML = message.failure;
    //         }
    //     });

    //     for (let i = 0; i < inputs.length; i++) {
    //         inputs[i].value ='';
    //     }
    // });

    // Form (объединенная, подсмотренная в уроке по Promise)

    let form = document.getElementsByClassName('main-form')[0],
        formBottom = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {

                    return new Promise(function(resolve, reject) {
                        let request = new XMLHttpRequest();

                        request.open('POST', 'server.php');

                        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 300) {
                                    resolve();
                                } else {
                                    reject();
                                }
                            }
                        }

                        request.send(data);
                    });
                } // end postData

                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => statusMessage.innerHTML = message.success)
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput)
        });
    }

    sendForm(form);
    sendForm(formBottom);

    //Slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap =document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;

        }

        slides.forEach((item) => item.style.display = 'none');
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains ('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
        
    });

    // Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000

        if(restDays.value == '' || persons.value =='') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
      
    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000

        if(persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML =0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value
        }
    });

});