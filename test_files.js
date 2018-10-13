const assert = require("assert");
const selectOddNumbers = require("./library.js").selectOddNumbers;
const selectEvenNumbers = require("./library.js").selectEvenNumbers;
const segregateEvenOdd = require("./library.js").segregateEvenOdd;
const reverseArray = require("./library.js").reverseArray;
const selectNthelements = require("./library.js").selectNthelements;
const revFibinocci = require("./library.js").revFibinocci;
const numbers=require("./input_file.js").numbers;
const number=require("./input_file.js").number;

assert.deepEqual(selectOddNumbers(numbers),[1,3,5,7,9]);
console.log("test passed");

assert.deepEqual(selectEvenNumbers(numbers),[2,4,6,8]);
console.log("test passed");

assert.deepEqual(segregateEvenOdd(numbers),{ even:[2,4,6,8], odd:[1,3,5,7,9]});
console.log("test passed");

assert.deepEqual(reverseArray(numbers),[9,8,7,6,5,4,3,2,1]);
console.log("test passed");

assert.deepEqual(selectNthelements(numbers,"3"),[1,4,7]);
console.log("test passed");

assert.deepEqual(revFibinocci(number),[34,21,13,8,5,3,2,1,1,0]);
console.log("test passed");
