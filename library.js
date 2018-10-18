const isOdd  = function(number) {
  return ((number%2)&&(number>0));
}

const isEven = function(number) {
  return !((number%2)||(number<0));
}
const selectOddNumbers = function(numbers){
  let oddNumbers=[];
  for(let number of numbers){
    if(isOdd(number)){
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}

const selectEvenNumbers = function(numbers){
  let evenNumbers=[];
  for(let number of numbers){
    if(isEven(number)){
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const segregateEvenOdd = function(numbers){
  let partition={even:[],odd:[]};
  partition.even = selectEvenNumbers(numbers);
  partition.odd = selectOddNumbers(numbers); 
  return partition;
}

const reverseArray = function(array){
  let reversedArray = [];
  for(let index=array.length-1;index>=0;index--){
    reversedArray.push(array[index]);
  }
  return reversedArray;
}

const selectNthelementsInArray = function(array,element){
  let nthElements = [];
  for(let index=0;index<array.length;index+=(+element)){
    nthElements.push(array[index]);
  }
  return nthElements;
}

const generateFibinocciSeries = function (number){
  if(number<2){
    return "wrong input"
  }
  let fibonacciSeries=[0,1];
  for(let index=2;index < number;index++){
    fibonacciSeries[index] = fibonacciSeries[index-1]+fibonacciSeries[index-2];
  }
  return fibonacciSeries;
}

const revFibinocci = function(number){
  return reverseArray(generateFibinocciSeries(number));
}

const isGreater =function(num1,num2){
  return num1 > num2;
}

const isLowest = function(num1,num2){
  return num1 < num2;
}

const findGreatestOrLowestNumber = function(numbers,type){
  let operation={ 'lowest':isLowest ,'greater':isGreater } 
  let result=numbers[0];
  for(number of numbers){
    if(operation[type](number,result)){
      result=number;
    }
  }
  return result;
}

const findGreatestNumber = function(numbers){
  return findGreatestOrLowestNumber(numbers,"greater");
}

const findLowestNumber = function(numbers){
  return findGreatestOrLowestNumber(numbers,"lowest");
}

const sumOfNumbers = function(numbers){
  let sum=0;
  for(let number of numbers){
    sum=sum+number;
  }
  return sum;
}

const averageOfNumbers = function(numbers){
  let average=0;
  average = sumOfNumbers(numbers)/numbers.length;
  return average;
}

const findLengthOfString  = function(string) {
  return (""+string).length
}

const findLengthsInArray = function(array){
  let lengths = [];
  for (let index in array){
    lengths[index]=findLengthOfString(array[index]);
  }
  return lengths;
}

const countOddNumbers = function(numbers){
  return selectOddNumbers(numbers).length;
}

const countEvenNumbers = function(numbers){
  return selectEvenNumbers(numbers).length;
}


const countingNumbers = function(numbers,type,threshold){
  let operation={"above":isGreater , "below":isLowest }
  let count=0;
  for(let number of numbers){
    if(operation[type](number,threshold)){
      count++
    }
  }
  return count;
}

const countAboveNumbers = function(numbers,threshold){
  return countingNumbers(numbers,"above",threshold);
}

const countBelowNumbers = function(numbers,threshold){
  return countingNumbers(numbers,"below",threshold);
}

const findIndexOfElement = function(array,element){
  let position = -1;
  for(let index=0;index<array.length;index++){
    if (array[index] == element){
      position = index;
      index =array.length;
    }
  }
  return position;
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
  return ((+number)==number)
}

const extractDigits = function(string){
  let digits=[];
  string = "" + string;
  for(let character of string){
    if(isNumber(character)){
      digits[digits.length]=+character;
    }
  }
  return digits;
}

const isElementPresent =function(element,array){
  let result = false;
  for(let index = 0; index < array.length;index++){
    if(element == array[index]){
      result = true;
      index = array.length;
    }
  }
  return result;
}

const isElementNotPresent = function(element,array){
  return !(isElementPresent(element,array));
}

const findUniqueElements = function(array) {
  let result=[];
  for(let index = 0;index < array.length ;index++){
    if(!(isElementPresent(array[index],result))){
      result[result.length]=array[index];
    }
  }
  return result;
}

const findUnionUniqueElement = function(array1,array2){
  return findUniqueElements(array1.concat(array2));
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
