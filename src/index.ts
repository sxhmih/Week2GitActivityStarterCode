import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

const result_subtract = calc.subtract(5,3);
console.log(`result_subtract = ${result_subtract}`);

const result_multiply = calc.multiply(5,3);
console.log(`result_multiply = ${result_multiply}`);



const result_divide = calc.divide(10,5);
console.log(`result_divide = ${result_divide}`);

console.log('done.');
console.log(calc.hello());
