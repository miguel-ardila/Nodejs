function suma(num1, num2) {
    const result = num1 + num2;
    return result;
}
function rest(num1, num2) {
    const result = num1 - num2;
    return result;
}
function mult(num1, num2) {
    const result = num1 * num2;
    return result;
}
function divi(num1, num2) {
    const result = num1 / num2;
    return result;
}
//antes era module.exports {suma, rest, mult, divi} con commonJS
export {suma, rest, mult, divi} // module ES