let location1  = Math.floor(Math.random() * 5),
    location2 = location1 + 1,
    location3 = location1 + 2,
    guess,
    guessMass =[],
    hits = 0,
    guesses = 0,
    isSunk = false;


while (hits < 3) {
    guess = +prompt('Введите номер клетки (координата выстрела): целое число от 0 до 6', '');
    if (guess > 6 || guess < 0 ) {
        alert ('Введено некорректное значение!');
    } else if ( guess == guessMass[0] || guess == guessMass[1] ) {
        alert ('Уже сюда стреляли и ранили!');
    } else {
        guesses = guesses + 1;
        if (hits == 2 && (guess == location1 || guess == location2 || guess == location3)) {
            alert('Убил!!!');
            hits = hits + 1;
        } else if (hits < 2 && (guess == location1 || guess == location2 || guess == location3)) {
            alert('Ранил!');
            hits = hits + 1;
            guessMass.push(guess);
        } else {
            alert('Мимо');
        }
    }
}

alert(`Количество попыток равно: ${guesses}.`);