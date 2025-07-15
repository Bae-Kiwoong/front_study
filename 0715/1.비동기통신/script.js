/* 비동기 통신 = 요청을 하고 응답이 오기 전까지  현 상태를 유지함
HTTP
요청(request) - 사용되는 메서드들 
get = 정보,결과 를 받아옴(예시 마이페이지)
post =  생성(회원가입,로그인 등)
put =  수정할때(회원정보 수정)
delete = 삭제할때(회원탈퇴)

응답(response) 
*/

const xhr = new XMLHttpRequest();
xhr.open('post','https://jsonplaceholder.typicode.com/posts');

//보내줄 데이터의 정보 = 헤더 (json형태로 보냄)
// 통신에서 주고받는 데이터는 거의 문자임.
// json은 오브젝트처럼 키와 값으로 되어있음. 배열형태도 가능함
// 하지만 우리가 js에서 사용하는 배열.오브젝트를 바로 전송을 불가능
// 해당 데이터를 json으로 변환 후 전송
// 요청 후 응답이 온 데이터도 json임. 항상 변환하는 작업이 필요
xhr.setRequestHeader("content-type","application/json");

const data = {
  userId: 100,
  title: '비동기통신 연습',
  body: '이것저것보내는중'
};
xhr.send(JSON.stringify(data));

xhr.onload = function() {
  console.log(xhr.status); // 응답 결과에 해당하는 상태코드
  console.log(JSON.parse(xhr.response));//응답 데이터
  
  
}
// // 최근 사용하는 문법 .then 위 fetch의 결과를 다 받을때 까지 실행을 기다림
// 다른문법 사용시 await 사용
//  fetch('요청주소')
// .then( (변수) => 성공 시 처리할 코드(json변환) )
// .then( (json변환결과) => 성공 시 처리할 코드 )
// .catch( (e) => 요청 실패시 처리할 코드)

const getBtn = document.querySelector('.get');
const postBtn = document.querySelector('.post');

const title = document.querySelector('.title');
const id = document.querySelector('.id');
const userId = document.querySelector('.userId');
const body = document.querySelector('.body');

getBtn.addEventListener('click', function(){
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then( (response) => response.json() )
    .then((data) =>  {
      title.innerHTML = data.title;
      id.innerHTML = data.id;
      userId.innerHTML = data.userId;
      body.innerHTML = data.body;
      
    })
    .catch( (e) => {
      console.log(e);
      
})
    
})

const post_userID = document.querySelector("[name='userID']");
const post_title = document.querySelector("[name='title']");
const post_body = document.querySelector("[name='body']");

postBtn.addEventListener('click', function(e){
    e.preventDefault();
    const data = {
      userID : post_userID.value,
      title : post_title.value,
      body : post_body.value
    };
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'post',
    //바디는 키,벨류. 당연히 json으로 변환해서
    body: JSON.stringify(data),
    //헤더는 오브젝트로
    headers: {
      "content-type" : "application/json"
    }
  })
    .then(response => response.json())
    .then( data => {
      console.log(data);
      alert(`게시글 등록 완료!`);
    })
    .catch ( e => {
      console.log(e);
      alert(`게시글 등록 실패!`);
      
    })
  })

    const async_test = document.querySelector('.async');

    async_test.addEventListener('click', async () =>{

      let a = 1;
      a = add(a);
      console.log(a);
      
    })
    function add(i) {

      return new Promise(resolve => {
        for(i=0; i<10000; i++){

        }
      })
    //   for(i=0; i<10000; i++){

    //   }
    //   return i;
     }
      
    




