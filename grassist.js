var lawnmower = require('./lib/lawnmower.js');

console.log(lawnmower.heading());
console.log(lawnmower.position());
console.log(lawnmower.rotorEnabled());

lawnmower.turnLeft();
console.log(lawnmower.heading());
lawnmower.turnLeft();
console.log(lawnmower.heading());
lawnmower.turnLeft();
console.log(lawnmower.heading());
lawnmower.turnLeft();
console.log(lawnmower.heading());

lawnmower.turnRight();
console.log(lawnmower.heading());
lawnmower.turnRight();
console.log(lawnmower.heading());
lawnmower.turnRight();
console.log(lawnmower.heading());
lawnmower.turnRight();
console.log(lawnmower.heading());

lawnmower.moveForward();
console.log(lawnmower.position());

lawnmower.startRotor();
console.log(lawnmower.rotorEnabled());
lawnmower.stopRotor();
console.log(lawnmower.rotorEnabled());
