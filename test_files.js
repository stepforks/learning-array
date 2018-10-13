const assert = require("assert");
const selectOddNumbers = require("./library.js").selectOddNumbers;
const selectEvenNumbers = require("./library.js").selectEvenNumbers;
const numbers=require("./input_file.js").numbers;
assert.deepEqual(selectOddNumbers(numbers),[1,3,5,7,9]);
console.log("test passed");
assert.deepEqual(selectEvenNumbers(numbers),[2,4,6,8]);
console.log("test passed");
