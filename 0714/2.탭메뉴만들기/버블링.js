const btns = document.querySelectorAll('.tap-button');
const content = document.querySelectorAll('.tab-content');

function clearClassList(){
  for(let i=0; i<btns.length; i++){
    btns[i].classList.remove('selected');
    content[i].classList.remove('show');
  }
};

document.querySelector('.list').addEventListener('click' , function(e){
  let no = e.target.dataset.no;

  if(no !== undefined){
  
  clearClassList();
  btns[no].classList.add('selected');
  content[no].classList.add('show');
}  
  
});