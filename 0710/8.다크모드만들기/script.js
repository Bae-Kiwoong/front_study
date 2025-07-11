const btn = document.querySelector('.btn-mode');
const body = document.body;
let mode = false;


btn.addEventListener('click',function(){
if (!mode) {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    btn.value = '라이트모드'; 
    mode = true;
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    btn.value = '다크모드';
    mode = false;
  }
})


//다크모드로 바뀌면 버튼은 라이트모드로 다시 돌아오기