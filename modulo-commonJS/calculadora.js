const chalk = require("chalk")
const { suma, rest, mult, divi } = require("./operaciones")

/* console.log(chalk.blue(suma(12, 8)));
console.log(rest(23, 16));
console.log(mult(9, 3));
console.log(divi(1, 5)); */

const resultado = rest(23, 16);
if (resultado < 5 ){
    console.log(chalk.red(" el resultado de la resta es: " + resultado));
} else {
    console.log(chalk.green(" el resultado de la resta es: " + resultado));
}