const assert = require("assert");
const selectOddNumbers = require("./library.js").selectOddNumbers;
const selectEvenNumbers = require("./library.js").selectEvenNumbers;
const segregateEvenOdd = require("./library.js").segregateEvenOdd;
const reverseArray = require("./library.js").reverseArray;
const selectNthelementsInArray = require("./library.js").selectNthelementsInArray;
const revFibinocci = require("./library.js").revFibinocci;
const findGreatestNumber =  require("./library.js").findGreatestNumber;
const findLowestNumber =  require("./library.js").findLowestNumber;
const averageOfNumbers =  require("./library.js").averageOfNumbers;
const findLengthsInArray =  require("./library.js").findLengthsInArray;
const countOddNumbers =  require("./library.js").countOddNumbers;
const countEvenNumbers =  require("./library.js").countEvenNumbers;

//select odd number function
assert.deepEqual(selectOddNumbers([1,2,3,4,5,6,7,8,9]),[1,3,5,7,9]);
assert.deepEqual(selectOddNumbers([4,5,6,1,2,5,7]),[5,1,5,7]);
assert.deepEqual(selectOddNumbers([0,2,3,4,5]),[3,5]);

//select even number function
assert.deepEqual(selectEvenNumbers([1,2,3,4,5,6,7,8,9]),[2,4,6,8]);
assert.deepEqual(selectEvenNumbers([0,2,4,5,7]),[0,2,4]);
assert.deepEqual(selectEvenNumbers([1,4,6,2,8]),[4,6,2,8]);

//segregate even and odd numbers
assert.deepEqual(segregateEvenOdd([1,2,3,4,5,6,7,8,9]),{ even:[2,4,6,8], odd:[1,3,5,7,9]});
assert.deepEqual(segregateEvenOdd([0,-1,3,4,5]),{ even:[0,4], odd:[3,5]});

//reversing array elments
assert.deepEqual(reverseArray([1,2,3,4,5,6,7,8,9]),[9,8,7,6,5,4,3,2,1]);
assert.deepEqual(reverseArray(["sai","ganesh"]),["ganesh","sai"]);

//selecting nth elements in array
assert.deepEqual(selectNthelementsInArray([1,2,3,4,5,6,7,8,9],"3"),[1,4,7]);
assert.deepEqual(selectNthelementsInArray([7,5,7,3,4,7,2,4,6,7],"3"),[7,3,2,7]);

// generate and reverse fibinocci series
assert.deepEqual(revFibinocci(10),[34,21,13,8,5,3,2,1,1,0]);
assert.deepEqual(revFibinocci(5),[3,2,1,1,0]);

//find greatest number in array
assert.deepEqual(findGreatestNumber([1,2,3,4,5,6,7,8,9]),9);
assert.deepEqual(findGreatestNumber([1,2,3,4,5,6,7,8,9,78,0]),78);

//find lowest number in array
assert.deepEqual(findLowestNumber([1]),1);
assert.deepEqual(findLowestNumber([3,5,1,-1,4,6,7]),-1);

//averageOfNumbers of numbers
assert.deepEqual(averageOfNumbers([1,2,3,4,5]),3);
assert.deepEqual(averageOfNumbers([1,2,3,4,5,6,7,8,9]),5);
assert.deepEqual(averageOfNumbers([3,3,3,3,3]),3);

//finding lengths in array
assert.deepEqual(findLengthsInArray(["sai","ganesh","lucky"]),[3,6,5]);
assert.deepEqual(findLengthsInArray(["nani","tinku","chotu"]),[4,5,5]);
assert.deepEqual(findLengthsInArray([1,23,4,5678]),[1,2,1,4]);

//counting odd numbers
assert.deepEqual(countOddNumbers([1,2,3,4,5]),3);
assert.deepEqual(countOddNumbers([1,2,3,4,5,6,7,8,9]),5);
assert.deepEqual(countOddNumbers([3,3,3,3,3]),5);

//counting even numbers
assert.deepEqual(countEvenNumbers([1,2,3,4,5]),2);
assert.deepEqual(countEvenNumbers([1,2,3,4,5,6,7,8,9]),4);
assert.deepEqual(countEvenNumbers([3,3,3,3,3]),0);
