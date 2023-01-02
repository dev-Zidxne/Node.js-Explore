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

// const path = require("path");

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

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// function higherOrderFunction(callback) {
//   const name = "Zidane";
//   callback(name);
// }

// higherOrderFunction(greet);

// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// emitter.on("order-pizza", (size) => {
//   if (size === "large") {
//     console.log(`Serving complimentary drink`);
//   }
// });

// console.log("Do work before event occurs in the system");

// emitter.emit("order-pizza", "large", "mushroom");

// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./drink-machine");

// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// pizzaShop.on("order", (size, topping) => {
//   console.log(`Order received! Baking a ${size} pizza with ${topping}`);
//   drinkMachine.serveDrink(size);
// });

// pizzaShop.order("large", "mushrooms");
// pizzaShop.displayOrderNumber();

// const buffer = new Buffer.from("Zidane");

// buffer.write("code");

// console.log(buffer.toString());
// console.log(buffer);
// console.log(buffer.toJSON());

// const fs = require("node:fs/promises");
// git;
// async function readFile() {
//   try {
//     const data = await fs.readFile("file.txt", "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// readFile();

// console.log("first");

// fs.readFile("file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// console.log("second");
// const fs = require("node:fs");

// console.log("First");
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);

// console.log("Second");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// console.log("Third");

// fs.writeFileSync("./greet.txt", "Hello Zidane!");

// fs.writeFile("./greet.txt", " Hello World!", { flag: "a" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File Written");
//   }
// });

// const fs = require("node:fs");
// const zlib = require("node:zlib");

// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));

// const writableStream = fs.createWriteStream("./file2.txt");

// readableStream.pipe(writableStream);

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writableStream.write(chunk);
// });
const http = require("node:http");

const server = http.createServer((req, res) => {
  const superHero = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
