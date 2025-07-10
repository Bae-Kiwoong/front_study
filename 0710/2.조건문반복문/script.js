//조건문

//if문
let age = 20;
if(age >= 20){
  console.log(`성인`);
}else if (age >= 12){
  console.log(`청소년`);
}else{
  console.log(`어린이`);
}

//삼항연산자
// 조건식 ? 참 : 거짓
let result = age >= 20 ? `성인` : `청소년`;

//switch 문
//for(초기값; 조건식; 증감식){
//반복할 코드
//}
let total=0;

for(let i=1; i<=10; i++){
  total += i;
}
console.log(total);

let sum=0;

for(let i=1; i<=10; i++){
  let temp = i;
  temp += i;
  sum += i ;
  sum += temp;
}
  
console.log(sum);

// while문 java랑 같음


