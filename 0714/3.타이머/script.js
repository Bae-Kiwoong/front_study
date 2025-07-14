// 정해진 시간이 흐른뒤 해당 코드가 작동되도록 함

// 기본 구조
// setTimeout(콜백함수 , 시간(ms));
// const time = document.querySelector('.time');
// const alert = document.querySelector('.alert');
// let t = 5;
// 지정해준 시간이 지난 후 실행되고 끝. 단발성

// const interval = setInterval(function(){ 
//   t--;
//   time.innerHTML = t; 
// },1000);
  
// setTimeout(function(){
//   alert.style.display = 'none';
//   clearInterval(interval)
// },5000);
  
  



//지정해준 시간이 지난후 해당 코드가 반복하며 작동
// setInterval();
// setInterval(() => {
//   console.log(`2초마다 실행되는 코드임`);
  
// },2000);

//여러번 클릭시 모두 인식해버림. 한번만 인식하도록 해야함.
// clearTimeout 이나 Interval 사용

// let timer;

// document.querySelector('.btn').addEventListener('click', function(){

//   clearTimeout(timer);

//   timer = setTimeout(function(){
//     console.log(`클릭하면 3초뒤에 나타남`);
    
//   },3000);

// })

//날짜와 관련된 함수들



// 년도 추출.월.일(date).시.분. 요일(day) 등등
//  .get()으로 처리 0-11로출력, 요일은 0-일요일부터


// let count = setInterval(() => {
  // clearInterval(count);
// },100);
function insertTime(){
  
  const date = new Date();
  const hours = date.getHours();
//문자열 자리수를 지정하는 padstart를 이용해서 시.분.초를 2자리씩으로 지정하기
  const min = String( date.getMinutes()).padStart(2,0);
  const sec = String(date.getSeconds()).padStart(2,0);

document.querySelector('.clock').innerHTML = `${hours} : ${min} : ${sec}`;
}
insertTime();
setInterval(insertTime, 1000);