const openMenu = document.querySelector('.openmenu');
const closeMenu = document.querySelector('.closemenu');
const listItem = document.querySelector('.list_item')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show(){
    listItem.style.display = 'flex';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'flex';
}

function close(){
    listItem.style.display = 'none';
    openMenu.style.display = 'flex';
    closeMenu.style.display = 'none';
}



const cartItem = document.querySelector('.cartitem');
const cart = document.querySelector('.cart');

cart.addEventListener('click', () =>{
    cartItem.classList.toggle('active')
})


const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const countValue = document.querySelector('.count_value')

var count = 0;

plus.addEventListener('click', () =>{
    count +=1 ;
    countValue.innerHTML = count;
})

minus.addEventListener('click', () =>{
    count = count > 1 ? count -1 : 0 ;
    countValue.innerHTML = count;
})


const addToCart = document.querySelector('.addtocart');
const upDate = document.querySelector('.update');
const empty = document.querySelector('.cart_empty')
const count3 = document.querySelector('.count3');
const addValue = document.querySelector('.add');
const item = document.querySelector('.item')
const deleteBtn = document.querySelector('.delete');


 
addToCart.addEventListener('click', () =>{

    if(count > 0){
        upDate.innerHTML = count ;
        upDate.style.display = 'block';
        empty.style.display = 'none';
        item.style.display= 'block';
    }
    else if(empty){
        upDate.style.display = 'none';
        empty.style.display = 'block';
        alert('please enter a Number')
    }
    count3.innerHTML = count;
    const add = count * 125.00; 
    const value = '$';
    addValue.innerHTML = `${value}${add}`
})

deleteBtn.addEventListener('click', () =>{
    count = 0
    item.style.display= 'none';
    empty.style.display = 'block';
    upDate.style.display = 'none';
    countValue.innerHTML = count;

})


var indexValue = 1;
showImg (indexValue);
function btm_slide(e){showImg(indexValue = e);}
function side_slide(e){showImg(indexValue += e);}
function showImg(e) {
    var i;
    const img = document.querySelectorAll('.img1');
    const sliders = document.querySelectorAll('.thumb .img2');
    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}
    for(i=0; i < img.length; i++){
        img[i].style.display = "none";
    }
    img[indexValue-1].style.display = "block";
}

   


