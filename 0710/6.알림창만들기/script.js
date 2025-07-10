function show(state) {
  // js 문법
  // document.getElementById('ab').style.display = state;
  //j쿼리 문법
$('#ab').css('display', state);



}
// function close(){
//   document.getElementById('ab').style.display = 'none';
// }
function print(num){
if(num === 1){
  document.querySelector('.alert').innerHTML = `aaaaa`
}else if (num === 2){
  document.querySelector('.alert').innerHTML = `bbbbb`
}else {
  document.querySelector('.alert').innerHTML = `cccc`
}
}