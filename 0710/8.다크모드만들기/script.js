const btn = document.querySelector('.btn-mode');
const body = document.body;

btn.addEventListener('click',function(){
body.style.backgroundColor = 'black';
body.style.color = 'white';
})

//다크모드로 바뀌면 버튼은 라이트모드로 다시 돌아오기