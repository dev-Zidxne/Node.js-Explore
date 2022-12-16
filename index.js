// const SuperHero = require("./super-hero");

// const batman = new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());

// const superman = new SuperHero("Superman");
// console.log(superman.getName());

const math = require("./math");

// console.log(math.add(2, 3));
// console.log(math.subtract(2, 3));

// the above can be chaged to below

const { add, subtract } = math;

console.log(add(2, 3));
console.log(subtract(2, 3));
