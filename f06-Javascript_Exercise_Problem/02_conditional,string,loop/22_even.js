/* 

    문제
    
    임의의 수를 입력받아, 짝수일 경우 true를 반환하고, 홀수일 경우 false를 반환하는 함수를 완성하세요.
    반복문을 사용해야 하며, 나눗셈(/) 및 나머지(%) 연산자는 사용할 수 없습니다.
    0은 짝수로 간주합니다

    ---

    힌트

    - 임의의 수 num은 음수로 입력될 수도 있습니다.
    - 입력받은 num에서 반복하여 2를 뺀 결과가 0이면 짝수, 1이면 홀수입니다.
    

*/


function even(num) {
  const fff = []
  for(let i = 0; i<10; i++){
    fff.push(0)
    fff.push(1)
  }
  if (num>0){
    console.log(fff)
    if (fff[num]!==0) return false
    if (fff[num]===0) return true
  }else if(num<0){
    if(fff[-num]!==0) return false
    if(fff[-num]===0) return true
  }
}

// 통과

module.exports = even;