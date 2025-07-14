const btns = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

function clearClassList(){
  for(let i=0; i<btns.length; i++){
    btns[i].classList.remove('selected');
    contents[i].classList.remove('show');
  }
};
for(let i=0; i<btns.length; i++){
  btns[i].addEventListener('click', function(){
    clearClassList();
    btns[i].classList.add('selected');
    contents[i].classList.add('show');
});
}


// 0,1,2 를 리셋 안하면 계속 남아있기때문에 셀렉과 쇼를 제거하는게 필요함
// btns[0].addEventListener('click', function(){
//  clearClassList();
//  btns[0].classList.add('selected');
//  contents[0].classList.add('show');
// });
// btns[1].addEventListener('click', function(){
//  clearClassList();
//  btns[1].classList.add('selected');
//  contents[1].classList.add('show');


// });
// btns[2].addEventListener('click', function(){
//  clearClassList();
//  btns[2].classList.add('selected');
//  contents[2].classList.add('show');

// });