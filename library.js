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

exports.selectOddNumbers = selectOddNumbers;
exports.selectEvenNumbers = selectEvenNumbers;
