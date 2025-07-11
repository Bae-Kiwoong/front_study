const btn = document.querySelector('.navbar-toggler');
const list = document.querySelector('.list-group');
const lgi = document.querySelectorAll('.list-group-item');
let mode = false;

btn.addEventListener('click', function(){
//  if(!mode){
//   list.classList.add('show');
//   mode = true;
//  }else {
//   list.classList.remove('show');
//   mode = false;
//  }
// 토글 기능으로 ('show')를 넣었다 뺏다 가능
list.classList.toggle('show');
});
//쿼리올로 이벤트리스너를 불러오면 배열로 입력됨.그래서 각각 다 걸어줘야함 > 반복문 사용
for(let i=0; i<lgi.length; i++){
lgi[i].addEventListener('click',function(){
  alert(`aaaaaa`);
} );
}
// j쿼리로 간단히 할수 있음 > 반복문 X
// $('list-group-item').on('click', () => {
//  alert('!!!!!!');
//})
