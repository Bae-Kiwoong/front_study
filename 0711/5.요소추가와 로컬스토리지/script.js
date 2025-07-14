// 실제로는 DB 또는 백엔드 서버쪽에서 보내주는 데이터임
const FRUITS = [
  {name: `apple`, memo: `맛잇는 사과`},
  {name:`mango`, memo: `달달함`},
  {name: `melon`, memo: `그냥그냥`}
];

for ( let i=0; i<FRUITS.length; i++){
let card = `
 <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="./images2/${FRUITS[i].name}.jpg" class="card-img-top">
          <div class="card-body">

            <h5 class="card-title">${FRUITS[i].name}</h5>
            <p class="card-text">${FRUITS[i].memo}</p>
            <button class="btn btn-primary cart">담기</button>
          </div>
        </div>
         </div> 
`;
document.querySelector('.row').insertAdjacentHTML('beforeend', card);
}

const cart = document.querySelectorAll('.cart');

for(let i=0; i<cart.length; i++){
  //타겟의 위치에서 전에 있는 형제의 태그를 잡아준다.
cart[i].addEventListener('click', function(e){
  let nameTag = e.target.previousElementSibling.previousElementSibling;
  let name = nameTag.innerHTML;
  //로컬스토리지에서 꺼내옴
  let temp = localStorage.getItem('cart');

  //장바구니에 넣으려는 과일이 로컬스토리지에 있는지 여부를 알려주는 변수
  //비교 변수
  let isHave = false;

  //장바구니에 넣으려는 과일이 있으면 몇번째 인덱스에 있는지 알려주는 변수
  //반복문으로 비교변수를 이용해서 찾으면 있는 배열을 빼줌
  let index;
  
  
  if(temp !== null){

    // 로컬스토리지에 있으면 먼저 그 정보들을 꺼내와야 함
    // 문자열 형태이므로 원본인 배열로 되돌려줌
    temp = JSON.parse(temp);

    temp.forEach((data, i) =>{
      if(data.name === name){
        isHave = true;
        index = i;
      }
        
    })
    // 위 반복문에서 기존에 있는지 없는지 검사를 끝냈음. 여부에 따라 다르게 처리
    if(isHave){
      temp[index].cnt++;
    }else{
      temp.push( {'name' : name ,'cnt' : 1});
    }


//다시 추가함
    localStorage.setItem('cart', JSON.stringify(temp));

  }else {//로컬스토리지 자체가 비어있을 경우 실행되는 else
    localStorage.setItem('cart' , JSON.stringify([{'name': name,'cnt': 1}]));
  }
  
  
})
}




// beforebegin : 해당 요소 앞에 html을 넣어줌
// afterend : 해당 요소 뒤에 넣어줌 
// afterbegin : 해당 요소 첫번째 자식으로 추가
// beforeend : 해당 요소 마지막 자식으로 추가


// 하나만 들어감. 태그를 늘려도 늘어나지 않음
// document.querySelector('.row').innerHTML = card;



// const cardTitle = document.querySelectorAll('.card-body h5');
// const cardMemo = document.querySelectorAll('.card-body p');
// const cardImage = document.querySelectorAll('img');

// for(let i=0; i<FRUITS.length; i++){
//   cardTitle[i].innerHTML = FRUITS[i].name;
//   cardMemo[i].innerHTML = FRUITS[i].memo;  
//   cardImage[i].setAttribute('src', `./images2/${FRUITS[i].name}.jpg`);
// }
  // setAttribute 속성을 추가하거나 변경할수 있음.
  // 입력된 데이터에 맞게 배열방으로 자동으로 넣어주도록 작성된 코드
  // 단 html 본문에 영역은 제한적임

  //향상된 for문과 비슷함. 범위를 안정해도 자동으로 0부터 반복하므로 추후 편할수도..
// FRUITS.forEach( (data) => {
//   console.log(data);
  
// })

//!스토리지는 문자열만 저장 가능!
//로컬스토리지는 껏다 켜도 저장됨. 지우지 않는 이상
//세션스토리지는 브라우저를 나가면 지워짐

//로컬스토리지에 저장 , 수정 ( 같은 키를 넣으면 기존 데이터를 지움)
localStorage.setItem('키','값')
//로컬스토리지에서 해당 키에 대한 값을 리턴
localStorage.getItem('키')
//로컨스토리지에서 해당 키를 삭제
localStorage.removeItem('키')

let arr = [1,2,3,4,5];
let obj = {
  name : `kim`,
  age : 20
};
// 로컬스토리지에는 배열.오브젝트를 넣어봤자 문자열 형태로 처리됨
localStorage.setItem('arr' , arr);
localStorage.setItem('obj', obj);

//JSON 형식으로 변환 "[1,2,3,4]" -> 구조를 유지한채로 문자열취급해서 변환
// arr인 배열을 문자열(JSON)로 변환
let arr_json = JSON.stringify(arr);

// console.log(arr_json, typeof arr_json);

//배열은 아니지만 배열 구조 [ ] 가 유지된채로 문자열이 됨
localStorage.setItem('arr', arr_json);

//꺼내와도 구조는 살아있음.타입은 문자열
arr = localStorage.getItem('arr');
console.log(arr, typeof arr);

//문자열인 형태를 다시 배열로 되돌림
arr = JSON.parse(arr);
console.log(arr);



