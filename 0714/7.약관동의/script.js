const box =document.querySelector('.box');

let boxY =box.scrollHeight;
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight);

const next = document.querySelector('.next');
const chk = document.querySelector('#chk');

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
  //윈도우 화면의 높이 현재 보이는
   console.log(window.innerHeight);
   
   //전체 높이. cs에서 3000으로 잡아둠
   console.log(document.body.clientHeight);

  const innerHeight = window.innerHeight;
  const bodyHeight = document.body.clientHeight;
   
   window.addEventListener('scroll', function(){
    console.log(window.scrollY);

    const status = window.scrollY / (bodyHeight - innerHeight) * 100;
    
    document.querySelector('.status-bar').style.width = `${status}%`;
    
   })
   
     
    






 


