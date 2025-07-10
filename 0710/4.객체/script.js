//객체 (object) - 자바에서 Map과 유사
// Key,value가 한쌍으로 구성

let user = {
  name: `홍길동`,
  age: 20,
  'math score': 100
}
console.log(user.name);
console.log(user.age);
console.log(user['age']);
// [ ]안에 사용할때는 ''필요함. [ ]변수로 인식함

// 자바에서는 변수는 대문자로 쓰지만 스크립트는 변경이 가능해서 소문자
// 상수 전체를 덮어쓰거나 없애는건 할수 없음 하지만 내용인 오브젝트는 변경할수 있음
const member = {
name : `홍길동`,
age : 20
}

console.log(user);
// user = 10;
console.log(user);
// 상수니까 변경을 못함
// member = 10;
member.name = `김자바`;
console.log(member);

//이름을 보고싶은지 나이를 보고싶은지 입력받음
let key = `name`;
console.log(member[key]); // user[`name`]


//변수값이 바뀔시 변수에 [ ] 사용하면 키로 사용할수 있음.[ ]사용 안하면 키로 인식함 
let item = `사과`;
let cart = {
  [item] : 5
};

console.log(cart);
//10명의 회원정보가 각각 담긴 객체 10개를 생성
//메서드(js에서는 펑션)를 이용해서 하는법
function makeUserObject(name,age) {
  let obj = {
    name,// : name, 매개변수 이름이 같으면 생략가능
    age //: age
  };
  return obj;
}
let a = makeUserObject(`홍길동` , 20);
let b = makeUserObject(`김자바`, 11);
console.log(a,b);

//기존 변수에 새로운 키,벨류 를 추가하는 법( 수정도 같음)
// delete a.addr; 키를 삭제하는 법
// a.addr = `강동구`;
console.log(a);

//구조분해 할당 ..으로 앞뒤를 지움 -> 대가로를 다시 지정

let {age, ...r} = a;
console.log( r );
console.log({...r, age:30});

//in 연산자로 키가 있는지 없는지 확인할수 있음
console.log(`fvsf` in a);

console.log(`name` in a);

for(let key in a){
  console.log(`${key} : ${a[key]}`);
  
}

















