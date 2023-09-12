
//const { suma, rest, mult, divi } = require("./operaciones") CommonJS
import { suma, rest, mult, divi } from "./operaciones.mjs"; // module ES

console.log(suma(12, 8));
console.log(rest(23, 16));
console.log(mult(9, 3));
console.log(divi(1, 5));