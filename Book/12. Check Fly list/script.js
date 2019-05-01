let passengers = [ { name: 'Jane Doloop', paid: true, ticket: 'coach' },
                    { name: 'Dr. Evel', paid: true, ticket: 'firstclass' },
                    { name: 'Sue Property', paid: false, ticket: 'firstclass' },
                    { name: 'John Funcall', paid: true, ticket: 'economplus' }, ]

function checkNoFlyList(passenger) {
   return (passenger.name === 'Dr. Evel');
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    console.log(`Name: ${passenger.name}, paid: ${passenger.paid}`);
}

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("This plane can't take off: we have a passenger on the no-fly-list.");
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
}

processPassengers(passengers, printPassenger);

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // включить кино
    getDrinkOrderFunction();
    // забрать мусор
}

function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === 'firstclass') {
        orderFunction = function() {
            alert('Would you like a cocktail or wine?');
        }
    } else if (passenger.ticket === 'economplus') {
        orderFunction = function() {
            alert('Would you like cola, water or wine?');
        }
    } else {
        orderFunction = function() {
            alert('Your choice is cola or water.');
        }
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === 'firstclass') {
        orderFunction = function() {
            alert('Would you like chicken or pasta?');
        }
    } else if (passenger.ticket === 'economplus') {
        orderFunction = function() {
            alert('Would you like a sandwich or cheeze plate?');
        }
    } else {
        orderFunction = function() {
            alert('Your choice is peanuts or drybread.');
        }
    }
    return orderFunction;
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);

// function fun(echo) {
//     console.log(echo);
// }

// fun('hello'); // hello

// function boo(aFunction) {
//     aFunction('boo');
// }

// boo(fun); // boo

// console.log(fun); /* ƒ fun(echo) {
//                         console.log(echo);
//                     } */

// fun(boo); /* ƒ boo(aFunction) {
//                 aFunction('boo');
//             } */

// let moreFun = fun;
// moreFun('hello again'); // hello again

// function echoMaker() {
//     return fun;
// }

// let bigFun = echoMaker();
// bigFun('Is there an echo?'); // Is there an echo?