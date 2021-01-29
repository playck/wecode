let answer = [];

function selectEvenNum(num) {
  for (let i = 0; i <= num.length; i++){
    if( num % 2 === 0 ){
      answer.push(num)
    }
  }
  return answer
}

