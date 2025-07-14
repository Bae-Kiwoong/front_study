const box =document.querySelector('.box');

let boxY =box.scrollHeight;
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight);

const next = document.querySelector('.next');


box.addEventListener('scroll', function(){
  let scroll = box.scrollTop;
  if( isDisabled && boxHeight + scroll > boxY - 5 ){
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }
})



let isDisabled = true;

next.addEventListener('click', function(){
  if(isDisabled == true){
   alert(`약관에 동의하세요.`);
   ( isDisabled && boxHeight + scroll > boxY - 5 );
   document.querySelector('#chk').disabled = false;
   isDisabled = false;
  }else{
    alert(`다음 페이지로 이동합니다.`);
  }
 });



 


