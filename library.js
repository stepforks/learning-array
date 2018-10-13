const selectOddNumbers = function(numbers){
  let oddNumbers=[];
  for(let number of numbers){
    if(number%2){
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}
exports.selectOddNumbers = selectOddNumbers;
