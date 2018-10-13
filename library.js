const selectOddNumbers = function(numbers){
  let oddNumbers=[];
  for(let number of numbers){
    if(number%2){
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}

const selectEvenNumbers = function(numbers){
  let evenNumbers=[];
  for(let number of numbers){
    if(!(number%2)){
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

const segregateEvenOdd = function(numbers){
  let partition={even:[],odd:[]};
  let key=["even","odd"]
  for(number of numbers){
    partition[key[number%2]].push(number);
  }
  return partition;
}

const reverseArray = function(array){
  let reversedArray = [];
  for(let index=array.length-1;index>=0;index--){
    reversedArray.push(array[index]);
  }
  return reversedArray;
}

const selectNthelements = function(array,element){
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
  fibonacciSeries=[0,1];
  for(let index=2;index < number;index++){
    fibonacciSeries[index] = fibonacciSeries[index-1]+fibonacciSeries[index-2];
  }
  return fibonacciSeries;
}

const revFibinocci = function(number){
  return reverseArray(generateFibinocciSeries(number));
}

exports.selectOddNumbers = selectOddNumbers;
exports.selectEvenNumbers = selectEvenNumbers;
exports.segregateEvenOdd = segregateEvenOdd;
exports.reverseArray = reverseArray;
exports.revFibinocci = revFibinocci;
exports.selectNthelements = selectNthelements;
