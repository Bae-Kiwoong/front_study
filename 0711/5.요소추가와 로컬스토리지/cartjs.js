// 스토리지에 있는거 꺼내오고 배열로 변환 해서 변수에 저장
let cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);
const cartlist = document.querySelector('.list');


cart.forEach((item) =>{
cartlist.insertAdjacentHTML('beforeend',`<div>${item.name} : ${item.cnt}</div>`);
})
// 인덱스html에서 장바구니 리스트를 받아왔음
//카트js 에서 출력되는걸 수량이나. 오브젝트로 묶기

// 수량 변경하거나 장바구니에서 제외 등등
// CSS 추가