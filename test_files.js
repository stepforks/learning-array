const assert = require("assert");
const {selectOddNumbers,selectEvenNumbers,segregateEvenOdd,reverseArray,selectNthelementsInArray,revFibinocci,findGreatestNumber,findLowestNumber,averageOfNumbers,findLengthsInArray,countOddNumbers,countEvenNumbers,countAboveNumbers,countBelowNumbers,findIndexOfElement,checkAscendingOrder,checkDescendingOrder,extractDigits,findUniqueElements,findUnionUniqueElement,findIntersectionOfTwoArrays,findDifferenceOfTwoArrays,generateZipOfTwoArrays,generateRotatedArray,generatePartitionedArray,isSubset}=require("./library.js");
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

//counting above numbers from threshold
assert.deepEqual(countAboveNumbers([1,2,3,4,5],3),2);
assert.deepEqual(countAboveNumbers([1,2,3,4,5,6,7,8,9],5),4);
assert.deepEqual(countAboveNumbers([3,3,3,3,3],4),0);

//counting below numbers from threshold
assert.deepEqual(countBelowNumbers([1,2,3,4,5],8),5);
assert.deepEqual(countBelowNumbers([1,2,3,4,5,6,7,8,9],8),7);
assert.deepEqual(countBelowNumbers([3,3,3,3,3],4),5);

//finding index of the element in an array
assert.deepEqual(findIndexOfElement([1,2,3,4,5,2],2),1);
assert.deepEqual(findIndexOfElement([1,2,3,4,5,6,7,8,9],8),7);
assert.deepEqual(findIndexOfElement([3,3,3,3,3],4),-1);

//checking whether the array is ascending order or not
assert.deepEqual(checkAscendingOrder([1,2,3,4,5]),true);
assert.deepEqual(checkAscendingOrder([1,2,3,4,5,6,7,8,9]),true);
assert.deepEqual(checkAscendingOrder([5,4,3,2,1]),false);

//checking whether the array is descending order or not
assert.deepEqual(checkDescendingOrder([1,2,3,4,5]),false);
assert.deepEqual(checkDescendingOrder([5,4,3,2,4]),false);
assert.deepEqual(checkDescendingOrder([5,4,3,2,1]),true);

//extracting digits from the string
assert.deepEqual(extractDigits("abcde"),[]);
assert.deepEqual(extractDigits(12345),[1,2,3,4,5]);
assert.deepEqual(extractDigits("12345"),[1,2,3,4,5]);
assert.deepEqual(extractDigits("12345a"),[1,2,3,4,5]);

//find unique elements in the array
assert.deepEqual(findUniqueElements(["a",1,2,]),["a",1,2]);
assert.deepEqual(findUniqueElements([1,2,3,2,3]),[1,2,3]);
assert.deepEqual(findUniqueElements([1,2,3,4,5,1]),[1,2,3,4,5]);

//find unique elements in two array
assert.deepEqual(findUnionUniqueElement(["a",1,2,],[1,2]),["a",1,2]);
assert.deepEqual(findUnionUniqueElement(["a",1,2,],[]),["a",1,2]);
assert.deepEqual(findUnionUniqueElement([1,2,3,2,3],[5,6,7,5]),[1,2,3,5,6,7]);
assert.deepEqual(findUnionUniqueElement([1,2,3,4,5,1],["a","b"]),[1,2,3,4,5,"a","b"]);

//find intersection elements in two array
assert.deepEqual(findIntersectionOfTwoArrays(["a",1,2,],[1,2]),[1,2]);
assert.deepEqual(findIntersectionOfTwoArrays(["a",1,2,],[]),[]);
assert.deepEqual(findIntersectionOfTwoArrays([1,2,3,2,3],[5,6,7,1,2,3,5]),[1,2,3]);
assert.deepEqual(findIntersectionOfTwoArrays([1,2,3,4,5,1],["a","b"]),[]);

//find difference elements in two array
assert.deepEqual(findDifferenceOfTwoArrays(["a",1,2,],[1,2]),["a"]);
assert.deepEqual(findDifferenceOfTwoArrays(["a",1,2,],[]),["a",1,2]);
assert.deepEqual(findDifferenceOfTwoArrays([1,2,3,2,3],[5,6,7,5]),[1,2,3]);
assert.deepEqual(findDifferenceOfTwoArrays([1,2,3,4,5,1],["a","b"]),[1,2,3,4,5]);

//find zip elements in two array
assert.deepEqual(generateZipOfTwoArrays(["a",1,2,],[1,2]),[["a",1],[1,2]]);
assert.deepEqual(generateZipOfTwoArrays(["a",1,2,],[]),[]);
assert.deepEqual(generateZipOfTwoArrays([1,2,3,2,3],[5,6,7,5]),[[1,5],[2,6],[3,7],[2,5]]);
assert.deepEqual(generateZipOfTwoArrays([1,2,3,4,5,1],["a","b"]),[[1,"a"],[2,"b"]]);

//generate rotated array
assert.deepEqual(generateRotatedArray([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(generateRotatedArray(["a",1,2,],1),[1,2,"a"]);
assert.deepEqual(generateRotatedArray([1,2,3,4,"a",5],9),[1,2,3,4,"a",5]);
assert.deepEqual(generateRotatedArray([1,2,3,4,5,1],"a"),[]);

//generate partitioned array
assert.deepEqual(generatePartitionedArray([1,2,3,4,5],2),[[1,2],[3,4,5]]);
assert.deepEqual(generatePartitionedArray([1,2,],1),[[1],[2]]);
assert.deepEqual(generatePartitionedArray([1,2,3,4,5],9),[[1,2,3,4,5],[]]);
assert.deepEqual(generatePartitionedArray([1,2,3,4,5,1],0),[[],[1,2,3,4,5,1]]);

//is subset array is really subset array of real array
assert.deepEqual(isSubset(["a",1,2,],[1,2]),true);
assert.deepEqual(isSubset(["a",1,2,],[]),true);
assert.deepEqual(isSubset([1,2,3,2,3],[5,6,7,5]),false);
assert.deepEqual(isSubset([1,2,3,4,5,1],["a","b"]),false);
