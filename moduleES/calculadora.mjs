import chalk from "chalk"
//const { suma, rest, mult, divi } = require("./operaciones") CommonJS
import { suma, rest, mult, divi } from "./operaciones.mjs"; // module ES

/* console.log(chalk.blue(suma(12, 8)));
console.log(chalk.red(rest(23, 16)));
console.log(chalk.greenBright.bgGrey(mult(9, 3)));
console.log(divi(1, 5)); */

const resultado = rest(23, 16);
if (resultado < 5){
    console.log(chalk.red("resultado de la resta: " + resultado));
} else {
    console.log(chalk.green("resultado de la resta: " + resultado));
}