
let inputRub = document.getElementById('rub'),
inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', getCurrency);

function getCurrency() {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                resolve(request.response);
            } else {
                reject();
            }
        };
    });

    
}

getCurrency()
    .then(() => {
        let data = JSON.parse(request.response);
        inputUsd.value = inputRub.value / data.usd})
    .catch(() => inputUsd.value = "Что-то пошло не так!!!");

