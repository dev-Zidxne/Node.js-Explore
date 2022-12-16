// Import Export Patterns

/*In Node.js, you can use different patterns to export code from a module so that it can be used in other parts of your application. Here are the most common export patterns in Node.js: */

// the function that wraps every module in node.js receives five parameters as shown below

// (function(exports, require, module, __filename, __dirname){
//     const superHero = "Batman";
// console.log(superHero)
// })

//////////////////////////////////////

/* 1. CommonJS: This is the default export pattern in Node.js and is used to export modules that are shipped with the Node.js runtime, as well as third-party modules installed using npm. To export a module using CommonJS, you can use the module.exports object: */

// const add = (a, b) => {
//   return a + b;
// };

// module.exports = add;

//the above can be changed to below and still works in other modules

// module.exports = (a, b) => {
//   return a + b;
// };

////////

/* Named exports: Both CommonJS and ES modules support named exports, which allow you to export multiple values from a module under different names. With named exports, you can import specific values from a module by their name.
To use named exports with CommonJS, you can use the module.exports object and assign each value to a property: */

// const add = (a, b) => {
//   return a + b;
// };

// const subtract = (a, b) => {
//   return a - b;
// };

// module.exports = {
//   add,
//   subtract,
// };

// the above can be chanegd to below

// module.exports.add = (a, b) => {
//   return a + b;
// };

// module.exports.subtract = (a, b) => {
//   return a - b;
// };

// and even further down to below
// exports is a reference to to module.exports that is shorter to type although it is advised to used module.exports

exports.add = (a, b) => {
  return a + b;
};

exports.subtract = (a, b) => {
  return a - b;
};
