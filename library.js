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

