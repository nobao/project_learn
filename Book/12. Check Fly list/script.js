let passengers = [ { name: 'Jane Doloop', paid: true, ticket: 'coach' },
                    { name: 'Dr. Evel', paid: true, ticket: 'firstclass' },
                    { name: 'Sue Property', paid: false, ticket: 'firstclass' },
                    { name: 'John Funcall', paid: true, ticket: 'coach' }, ]

function checkNoFlyList(passenger) {
   return (passenger.name === 'Dr. Evel');
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    console.log(`Name: ${passenger.name}, paid: ${passenger.paid}`);
}

function serveCustomer(passenger) {
    
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