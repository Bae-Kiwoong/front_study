//객체에는 함수도 넣을수 있음.
let user = {
  name: `홍길동`,
  age : 20
}

user.hi = () => {
  console.log(`hi`);
  
}
user.hi();

function hi2() {
  console.log(`hi2`);
  
}
// ( )호출이므로 없이 넣어줌.
user.hi2 = hi2;
user.hi2();

let user2 = {
  name : `김자바`,
  age : 20,
  hi : function() {
    console.log(this.name); // this를 쓰는게 좋음.객체를 지정하면 추후 수정이 필요할시 문제가 생김
    
  },
  hi2(){
    console.log(`hi2`);
    
  }
}
user2.hi();

user = { name : `홍길동`}
user2 = { name : `김자바`}
// this 가 가르키는 대상이 없지만 show를 어디에 넣느냐에 따라 가르키는 대상이 달라짐 ( 유연하게 사용가능 )
function show(){
  console.log(this.name);
  
}
user.f = show;
user2.f = show;

user.f();
user2.f();

//객체 참조 - 주소값을 가지고 있어서 바뀜
let a = {
  name : `홍길동`
};
let b = a;

a.name = `김자바`;
console.log(b.name);

//배열
let arr = [1,2,3,4,5];
arr[0] = 20;
arr[1] = `a`;
//배열 추가
arr.push(`dddd`);
console.log(arr);
//배열 삭제 - 빈( ) 제일 끝 부터.
arr.pop();
console.log(arr);






