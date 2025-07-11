const btnBoard = document.querySelector('#open');
const btn = document.querySelector('#close');

//  js문법
 btnBoard.addEventListener('click', function(){
//  black-bg 클래스를 불러와서 add를 통해 show를 추가하거나 삭제해서 제어
   document.querySelector('.black-bg').classList.add('show');
 });

//  j쿼리 문법
// $('#open').on('click', () => {
//   $('.black-bg').addClass('show');
// })

btn.addEventListener('click', function(){
  document.querySelector('.black-bg').classList.remove('show');

});
// $('#close').on('click', () => {
//   $('.black-bg').removeClass('show');
// })


