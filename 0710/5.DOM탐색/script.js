const box = document.getElementById(`box`)
box.style.background = `red`;
console.log(box);

//선택자를 이용해서 요소를 선책할수 있음

//  box = document.querySelector(`box`);
//  box2.style.color = `white`;
//선택자에 해당하는 요소 중 첫번째꺼 하나만
// const bg = document.querySelector(`.bg`);
// bg.style.background = `pink`;
 
//선택자에 해당하는 모든 요소들을 가져옴
const bg = document.querySelectorAll('.bg');
// bg[0].style.background = 'pink'

// for(let i=0; i<bg.length; i++){
//   bg[i].style.background = 'pink';
// }

for(let b of bg){
  b.style.background = 'pink';
}
console.log(bg);

const li = document.querySelectorAll(`ul > li`);
for(let l of li) {
  l.innerHTML = `zzzz`;
}
