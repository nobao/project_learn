function makePassword(password) {
    return function guess (passwordGuess) {
        return (passwordGuess === password);
    }
}
let checkPassword = makePassword('123');
alert(`Guessing '456': ${checkPassword('456')}`);
alert(`Guessing '123': ${checkPassword('123')}`);


function multN(n) {
    return function multiply(x) {
        return (n * x);
    }
}
let mult = multN(5);
alert(`5 * 7 = ${mult(7)}`);
alert(`5 * 12 = ${mult(12)}`);


function makeCounter() {
    let count = 0;
    return {
        increment: function() {
            return count = ( count + 1 );
        }
    }
}
let counter = makeCounter();
alert(counter.increment());
alert(counter.increment());
alert(counter.increment());


function handler(doneMessage) {
    alert(doneMessage);
}
function makeTimer(doneMessage, n) {
    setTimeout(handler(doneMessage), n);
}
makeTimer('Cookies are done!', 1000);
