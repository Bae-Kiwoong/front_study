// 알림창 띄우기
// alert("자바스크립트 파일만듬");

// 출력문 - 콘솔창에 띄움
console.log("콘솔창에 내용띄우기");

// HTML에 출력해주기
// document.write("문서에 쓰기");

// 변수만들기
let 변수이름; //자료형 제한을 두지 않는다. let 으로 다 ㄱㅏ능
// var 변수명; 옛날방식

let msg = 'hello';
console.log(msg);
msg = 20;
console.log(msg);

// 상수
const COLOR ='red';
// COLOR = 'blue';

let n = 12.345;
console.log(typeof n );

//실제로 나누기 0은 불가능하지만 JS 수학적 연산은 전부 처리가 됨
// 대신 결과가 안나오는건 특수 숫자 값으로 처리
console.log( n / 0 );
console.log( typeof Infinity);
console.log( "abc" / 2 );
console.log( typeof NaN);

//문자
// 문자(열)은 쌍따옴표,작은따옴표,빽틱 사용할수 있음
let str1 = "abc";
let str2 = 'abc';
let str3 = `abc`;


let age = 20;
let name = "홍길동"

console.log(name + "님의 나이는 " + age + "살입니다.")
console.log(`${name}님의 나이는 ${age+5}살입니다.`);
console.log(typeof name);

//bbblean
let check = true
console.log(10 >= 5 );
console.log(typeof check);

//null 값 - js에서는 존재하지 않음, 비어있다, 알수없다, 없음 등
let a = null;

//undefind 값을 할당하지 않음 의 뜻.
let x;
console.log(x);

//모달창 띄우기 -> 화면에 띄워서 리턴값 등을 활용해서 처리할수 있는 기능

// alert 메세지만 출력하고 확인 버튼만 
// alert(`메세지 띄우기`);

//prompt 메세지를 출력해주고 사용자에게 입력받는 창이 있음. 확인 과 취소
// prompt(`메세지`,초기값) 입력받은 값은 스트링으로 인식 다른 타입이 필요하면 형변환이 필요
// let result = Number(prompt(`나이를 입력하세요`));

// console.log(`${result+1}입니다.`);


//confirm 메세지를 출력해주고 확인,취소버튼이 있음
// 확인과 취소가 있으므로 리턴받아서 값을 쓸수 있다. 확인은 true 취소 false

// let re = confirm(`메세지`);
// console.log(re);