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
  let partion={even:[],odd:[]};
  let key=["even","odd"]
  for(number of numbers){
    partion[key[number%2]].push(number);
  }
  return partion;
}

exports.selectOddNumbers = selectOddNumbers;
exports.selectEvenNumbers = selectEvenNumbers;
exports.segregateEvenOdd = segregateEvenOdd;
