function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function() {
        this.started = true;
    }
    this.stop = function() {
        this.started = false;
    }
    this.drive = function() {
        if (this.started) {
            console.log(`${this.make} ${this.model} goes zoom zoom!`);
        } else {
            console.log('Start the engine first.');
        }
    }
}

let chevyParams = {make: 'Chevy',
                    model: 'Bel Air',
                    year: 1957,
                    color: 'red',
                    passengers: 2,
                    convertible: false,
                    mileage: 1021};
let chevy = new Car(chevyParams);

let cadiParams = {make: 'GM',
                    model: 'Cadillac',
                    year: 1955,
                    color: 'tan',
                    passengers: 5,
                    convertible: false,
                    mileage: 12892};
let cadi = new Car(cadiParams);

let taxiParams = {make: 'Webville Motors',
                    model: 'Taxi',
                    year: 1955,
                    color: 'yellow',
                    passengers: 4,
                    convertible: false,
                    mileage: 281341};
let taxi = new Car(taxiParams);

let fiatParams = {make: 'Fiat',
                    model: '500',
                    year: 1957,
                    color: 'Medium Blue',
                    passengers: 2,
                    convertible: false,
                    mileage: 88000};
let fiat = new Car(fiatParams);

let testCarParams = {make: 'Webville Motors',
                    model: 'Test Car',
                    year: 2014,
                    color: 'marine',
                    passengers: 2,
                    convertible: true,
                    mileage: 21};
let testCar = new Car(testCarParams);

let cars = [chevy, cadi, taxi, fiat, testCar];

for (let i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this. weight = weight;
}
let fido = new Dog('Fido', 'Mixed', 38);
let fluffy = new Dog('Fluffy', 'Poodle', 30);
let spot = new Dog('Spot', 'Chihuahua', 10);
let dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    let size = 'small';
    if (dogs[i].weight > 10) {
        size = 'large';
    }
    console.log(`Dog: ${dogs[i].name} is a ${size} ${dogs[i].breed}`);
}

let limoParams = {make: 'Webville Motors',
                    model: 'limo',
                    year: 1983,
                    color: 'black',
                    passengers: 12,
                    convertible: true,
                    mileage: 21120};
let limo = new Car(limoParams);

let limoDog = new Dog('Rhapsody In Blue', 'Poodle', 40);

console.log(`${limo.make} ${limo.model} is a ${typeof limo}`);
console.log(`${limoDog.name} is a ${typeof limoDog}`);