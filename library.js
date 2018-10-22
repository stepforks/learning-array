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

const segregateEvenOdd = function(numbers){
  return {even:numbers.filter(isEven),odd:numbers.filter(isOdd)};
}

const reverseArray = function(array){
  return array.reverse();
}

const selectNthelementsInArray = function(array,element){
  const isEqual = function(number,index){
    return index%element == 0;
  }
  return array.filter(isEqual);
}

const generateFibinocciSeries = function (number){
  if(number<=2){
    return [0,1];
  }
  result = generateFibinocciSeries(number-1);
  return result.concat([result[number-2]+result[number-3]]);
}

const revFibinocci = function(number){
  return (generateFibinocciSeries(number)).reverse();
}

const isGreater = function(num1,num2){
  return num1>num2;
}

const isLowest = complement(isGreater);

const greatestNumber =function(num1,num2){
  return (num1 > num2)?num1:num2;
}

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

const checkAscendingOrDescendingOrder  = function(numbers,type){
  let operation = { "ascending":isGreater ,"descending" :isLowest };
  let msg = true;
  for (let index=1;index < numbers.length;index++){
    if(operation[type](numbers[index-1],numbers[index])){
      msg = false;
    }
  }
  return msg;
}

const checkAscendingOrder =function(numbers){
  return checkAscendingOrDescendingOrder(numbers,"ascending");
}

const checkDescendingOrder =function(numbers){
  return checkAscendingOrDescendingOrder(numbers,"descending");
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

const findUniqueElements = function(array) {
  const func = function(array,element){
    if(array.includes(element)){
      return array;
    }
    return array.concat([element]);
  }
  return array.reduce(func,[]);
}

const findUnionUniqueElement = function(array1,array2){
  return findUniqueElements(array1.concat(array2));
}

const isMember = function(array){
  return function(element){
    return array.includes(element);
  }
}

const findIntersectionOfTwoArrays = function (array1,array2){
  unique1 = findUniqueElements(array1);
  unique2 = findUniqueElements(array2);
  return unique1.filter(isMember(unique2));
}

const findDifferenceOfTwoArrays = function (array1,array2){
  unique1 = findUniqueElements(array1);
  unique2 = findUniqueElements(array2);
  const difference = complement(isMember(unique2));
  return unique1.filter(difference);
}

const generateZipOfTwoArrays  = function(array1,array2) {
  max = array1;
  min = array2;
  if(max.length < min.length){
    max = array2;
    min = array1;
  }
  const zip = function(state,element){
    let {index,result} = state;
    result.push([max[index],element]);
    return {index:index+1,result};
  }
  return min.reduce(zip,{index:0,result:[]}).result;
}

const rotater = function(position){
  return function(state,element){
    let {index,elements} = state;
    place=1;
    if(index < position){
      place = 0;
    }
    elements[place].push(element);
    return { index:index+1,elements };
  }
}

const generateRotatedArray = function(array,position){
  result=array.reduce(rotater(position),{index:0,elements:[[],[]]}).elements;
  return result[1].concat(result[0]);
}

const partitioner = function(threshold){
  return function(array,element){
    if(element > threshold){
      array[0].push(element);
      return array;
    }
    array[1].push(element);
    return array;
  }
}
const generatePartitionedArray = function(array,number){
  return array.reduce(partitioner(number),[[],[]]);
}

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
