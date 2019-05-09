function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = 'Dream Technology';

Robot.prototype.speak = function() {
    console.log("I'm speaking!");
};

Robot.prototype.makeCoffee = function() {
    console.log('I can make coffee for You!');
};

Robot.prototype.blinkLights = function() {
    console.log("I'm blinking!");
};

let robby = new Robot('Robby', 1956, 'Dr. Morbius');
let rosie = new Robot('Rosie', 1962, 'George Jetson');

robby.onOffSwitch = true;
robby.makeCoffee = function() {
    console.log('Go to Starbucks!');
};

rosie.cleanHouse = function() {
    console.log('I can clean your house!');
};

console.log(`${robby.name} was made by ${robby.maker} in ${robby.year} and is owned by ${robby.owner}`);
robby.makeCoffee();
robby.blinkLights();

console.log(`${rosie.name} was made by ${rosie.maker} in ${rosie.year} and is owned by ${rosie.owner}`);
rosie.cleanHouse();