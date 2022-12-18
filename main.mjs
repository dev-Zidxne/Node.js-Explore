// import add from "./math.esm.mjs";

// console.log(add(5, 5));

import * as math from "./math.esm.mjs";

const { add, subtract } = math;

console.log(add(5, 5));
console.log(subtract(5, 5));
