const add = require ("./adder.js");

console.log (add(5,7)===12,"add positive numbers");
console.log (add(-5,-7)===-12,"add negative numbers");
console.log (add(5,-7)===-2,"add positive and negative numbers");
