const complement = function(functionForComplement){
  return function(argument1,argument2){
    return !functionForComplement(argument1,argument2);
  }
}
const isOdd  = function(number) {
  return (number%2);
}

const isEven = complement(isOdd);

const selectOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}

const selectEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}

const segregateEvenOdd = function(numbers){ // DHRUV - the code in segregateEvenOdd is duplicated with code in selectOddNumbers, selectEvenNumbers. Refactor to remove duplication... 
  return {even:numbers.filter(isEven),odd:numbers.filter(isOdd)};
}

// DHRUV - snce this is probably just used in the reverseArray and is not really very useful on its own, it can and should be used as an anonymous function
const unShiftElement = function(accumulator,element){ // DHRUV - good usage of unshift :) 
  accumulator.unshift(element);
  return accumulator;
}

const reverseArray = function(array){
  return array.reduce(unShiftElement,[]);
}

// DHRUV - naming, the parameter is not element, what is it?
// DHRUV - naming, this function does not convey that its going to select multiples of something.
const selectNthelementsInArray = function(array,element){ // DHRUV - naming, NthElements? Also, do you need to say Array in the function name
  const isEqual = function(number,index){
    return index%element == 0;
  }
  return array.filter(isEqual);
} 

const generateFibinocciSeries = function (number){
  const generateFibinocciByIndex = function(state,element){
    let {values,index}=state;
    element = values[index-1]+values[index-2];
    let valueToPush = element;
    if(index == 0 || index == 1){
      valueToPush = index;
    }
    values.push(valueToPush);
    return {values:values,index:index+1}
  };
  result = new Array(number).fill("")
  return result.reduce(generateFibinocciByIndex ,{values:[],index:0}).values;
}

const revFibinocci = function(number){
  return reverseArray(generateFibinocciSeries(number));
}

const isGreater = function(num1,num2){
  return num1>num2;
}

const isLowest = complement(isGreater);

// greatestNumber, lowestNumber are not good. I think greatest, lowest are used when there are more than 2 things. Greater and lower or max or min are better here.

const greatestNumber =function(num1,num2){
  return (num1 > num2)?num1:num2;
}

// If you were to express this function as a complement of some function, what would that be?
const lowestNumber = function(num1,num2){ 
  return (num1 < num2)?num1:num2;
}

const findGreatestNumber = function(numbers){
  return numbers.reduce(greatestNumber);
}


const findLowestNumber = function(numbers){
  return numbers.reduce(lowestNumber);
}

const sum = function(num1,num2){
  return num1+num2;
}

const sumOfNumbers = function(numbers){
  return numbers.reduce(sum);
}

const averageOfNumbers = function(numbers){
  return numbers.reduce(sum)/numbers.length;
}

const findLengthOfString  = function(string) {
  return (""+string).length;
}

const findLengthsInArray = function(array){
  return array.map(findLengthOfString);
}

const countOddNumbers = function(numbers){
  return numbers.filter(isOdd).length;
}

const countEvenNumbers = function(numbers){
  return numbers.filter(isEven).length;
}

const countAboveNumbers = function(numbers,threshold){
  const greaterThreshold = function(number){
    return isGreater(number,threshold);
  }
  return numbers.filter(greaterThreshold).length
}

const countBelowNumbers = function(numbers,threshold){
  const lesserThreshold = function(number){
    return isLowest(number,threshold);
  }
  return numbers.filter(lesserThreshold).length;
}

const findIndexOfElement = function(array,element){
  const findIndex = function(previousState,value){
    let {indexFound,currIndex} = previousState;
    indexFound = (indexFound == -1 && value == element)?currIndex :indexFound;
    return {indexFound,currIndex:currIndex+1}
  }
  return array.reduce(findIndex,{indexFound:-1,currIndex:0}).indexFound;
}

const isAscending = function (state,element){
  let {condition,value}=state;
  if(!(condition == true && value <= element)){
    condition = false;
  }
  return {condition:condition,value:element};
}

const checkAscendingOrder =function(numbers){
  return numbers.reduce(isAscending,{ condition:true , value:numbers[0]}).condition;
}

const checkDescendingOrder =function(numbers){
  return checkAscendingOrder(reverseArray(numbers));
}

const isNumber  = function(number) {
  return ((+number)==number);
}

const extractDigits = function(string){
  return (""+string).split("").filter(isNumber);
}

const isElementPresent =function(element,array){
  return array.includes(element);
}

const isElementNotPresent = complement(isElementPresent);

const uniqueThings = function(array,element){
  if(array.includes(element)){
    return array;
  }
  return array.concat([element]);
}

const findUniqueElements = function(array) {
  return array.reduce(uniqueThings,[]);
}

const findUnionUniqueElement = function(array1,array2){
  return findUniqueElements(array1.concat(array2));
}

const isMember = function(array){
  return function(element){
    return array.includes(element);
  }
}

// DHRUV - these functions are not about arrays but about sets. So you should rename the functions.
const findIntersectionOfTwoArrays = function (array1,array2){ // DHRUV -  Since they are about sets, you shouldn't have to deduplicate the arguements you're receiving. 
  unique1 = findUniqueElements(array1);
  unique2 = findUniqueElements(array2);
  return unique1.filter(isMember(unique2)); // DHRUV - Good use if isMember :) 
}

const findDifferenceOfTwoArrays = function (array1,array2){
  unique1 = findUniqueElements(array1);
  unique2 = findUniqueElements(array2);
  const difference = complement(isMember(unique2));
  return unique1.filter(difference);
}

const generateZipOfTwoArrays  = function(array1,array2) {
  if(array1.length < array2.length){ // DHRUV - why do you need this? You can probabaly get the smaller array without if's.
    temp = array1;
    array1 = array2;
    array2 = temp;
  }
  const zip = function(state,element){
    let {index,result} = state;
    result.push([array1[index],element]);
    return {index:index+1,result};
  }
  return array2.reduce(zip,{index:0,result:[]}).result;
}

// DHRUV - there is some amount of duplication in rotateArray and partition. Can you eliminate that? Should you?
const rotateArray = function(position){
  return function(state,element){ // DHRUV - try practising destructing in the arguments itself
    let {index,elements} = state;
    place = 1;
    if(index < position){
      place = 0;
    }
    elements[place].push(element);
    return { index:index+1,elements };
  }
}

const generateRotatedArray = function(array,position){
  result=array.reduce(rotateArray(position),{index:0,elements:[[],[]]}).elements;
  return result[1].concat(result[0]);
}

// DHRUV - this might be ha good function to use a ternary operator
const partition = function(threshold){
  return function(array,element){
    place = 1;
    if(element > threshold){
      place = 0;
    }
    array[place].push(element);
    return array;
  }
}
const generatePartitionedArray = function(array,number){
  return array.reduce(partition(number),[[],[]]);
}

// DHRUV - implement this function using currying. That is extract subset out of this method. Not that its better that way, but because that's good thing to practise.
const isSubset = function (array,subsetArray){
  const subset = function(condition,element){
    return (condition == true && array.includes(element));
  }
  return subsetArray.reduce(subset,true);
}

exports.selectOddNumbers = selectOddNumbers;
exports.selectEvenNumbers = selectEvenNumbers;
exports.segregateEvenOdd = segregateEvenOdd;
exports.reverseArray = reverseArray;
exports.revFibinocci = revFibinocci;
exports.selectNthelementsInArray = selectNthelementsInArray;
exports.findGreatestNumber = findGreatestNumber;
exports.findLowestNumber = findLowestNumber;
exports.averageOfNumbers = averageOfNumbers;
exports.findLengthsInArray = findLengthsInArray;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.countAboveNumbers = countAboveNumbers;
exports.countBelowNumbers = countBelowNumbers;
exports.findIndexOfElement = findIndexOfElement;
exports.checkAscendingOrder = checkAscendingOrder;
exports.checkDescendingOrder = checkDescendingOrder;
exports.extractDigits = extractDigits;
exports.findUniqueElements = findUniqueElements;
exports.findUnionUniqueElement = findUnionUniqueElement;
exports.findIntersectionOfTwoArrays = findIntersectionOfTwoArrays;
exports.findDifferenceOfTwoArrays = findDifferenceOfTwoArrays;
exports.generateZipOfTwoArrays = generateZipOfTwoArrays;
exports.generateRotatedArray = generateRotatedArray;
exports.generatePartitionedArray = generatePartitionedArray;
exports.isSubset = isSubset;
