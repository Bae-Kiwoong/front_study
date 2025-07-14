const box =document.querySelector('.box');

let boxY =box.scrollHeight;
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight);

const next = document.querySelector('.next');

let isDisabled = true;

box.addEventListener('scroll', function(){
  let scroll = box.scrollTop;
  if( boxHeight + scroll > boxY - 5 ){
    document.querySelector('#chk').disabled = false;
    isDisabled = false;
  }
});

next.addEventListener('click', function(){
  if(!isDisabled && chk.checked){
   
    alert(`다음 페이지로 이동합니다.`); 
  }else{
    
    alert(`약관에 동의하세요.`);
   }
  });
  
   
     
    






 


