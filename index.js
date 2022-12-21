// const SuperHero = require("./super-hero");

// const batman = new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());

// const superman = new SuperHero("Superman");
// console.log(superman.getName());

// const math = require("./math");

// console.log(math.add(2, 3));
// console.log(math.subtract(2, 3));

// the above can be chaged to below

// const { add, subtract } = math;

// console.log(add(2, 3));
// console.log(subtract(2, 3));

// const data = require("./data.json");

// console.log(data.name);
// console.log("Hello Zidane");

const path = require("path");

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "../index.html"));
// console.log(path.join(__dirname, "data.json"));

// console.log(path.resolve("folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));

function greet(name) {
  console.log(`Hello ${name}`);
}

function greetZidane(greetFn) {
  const name = "Zidane";
  greetFn(name);
}

greetZidane(greet);
