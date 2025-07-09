//문자로 변환하기
let a = true;
console.log(typeof a);
a = String(a);
console.log(typeof a,a);

let b;
console.log(typeof b);
b =String(b);
console.log(typeof b, b);

//숫자 형변환 -> 산술연산은 자동 형변환해서 결과를 줌.
console.log(`12` / `5` );

let c = `123`;
c = Number(c);
console.log(typeof c);

let d = Number(`asdadasd`);
console.log(typeof d, d);
// 변환 불가능한것들은 -> Nan 으로 나옴. 애초에 오류라고 안뜸
// undefind - Nan
// null -> 0
// true,false -> 1, 0


// 문자열 -> 양쪽 공백 제거를 먼저 함
//        남는게 없으면 0
//        숫자만 남으면 숫자로 변환
//        못바꾸면 Nan

let e = Number(`     123     `);
console.log(typeof e, e);

let f = Number(`          `);
console.log(typeof f ,f);




