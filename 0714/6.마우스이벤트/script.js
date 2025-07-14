// click = mousedown /mouseup , dblclick
// mouseover / mouseout

document.querySelector('button').addEventListener('click', function(e){
// 0;왼쪽 , 1;가운데,2;오른쪽
console.log(e.button);
console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);

console.log(e.clientX,e.clientY);//현재 보이는 화면 상태에서
console.log(e.pageX,e.pageY);//페에지 전체에서


// if(e.ctrlKey){
//   alert(`컨틀올`);
// }
if(e.ctrlKey && e.shiftKey){
  alert(`ddddd`);
}
})
// 인풋창에서 입력 후 알람 발동( change) 글자마다 발동은 (input) 이용
document.querySelector('input').addEventListener('cut',function(){

  alert(`인풋우풋ㅍ추수풋 이벤트 작동됨`);
})


