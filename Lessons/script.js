"use strict";

function learnJS(lang, callback) {
    console.log('Я учу ' + lang);
    callback();
}

function done() {
    console.log('Я прошел 3-й урок!');
}

learnJS('JavaScript', done);
