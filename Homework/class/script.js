/* Используя синтаксис ES6 в отдельном документе:
· Создать класс options
· Он должен содержать свойства: height, width, bg, fontSize, textAlign
· Он должен содержать метод, создающий новый div на странице,
записывающий в него любой текст и при помощи cssText изменять
свой стиль из переданных параметров
· Создать новый объект через класс
· Вызвать его метод и получить элемент на странице */


window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    class Options {
        constructor (height, width, bg, fontSize, textAlign) {
            this.height = height;
            this.width = width;
            this.bg = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
        }

        makeDiv() {
            let newDiv = document.createElement('div'),
                body = document.querySelector('body');
            
            body.appendChild(newDiv);
            let textInput = prompt('Введите любой текст', '');
            
            newDiv.textContent = textInput;
            newDiv.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color:${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
        }
    }

    let greenDiv = new Options (300, 400, 'green', 32, 'center');

    greenDiv.makeDiv();
});