var cart = [];
const init = (list)=>{
    cart = list;
}
exports.init = init;


const getCart = ()=>{
    cart = JSON.parse(localStorage.getItem("Cart")) || [];
    return cart;
} 
exports.getCart  = getCart;

const setCart = (cart)=> {
    localStorage.setItem("Cart",JSON.stringify(cart));
    return [];
}
exports.setCart = setCart;

const add = (id)=>{
   ++cart[id].qty;
   setCart(cart);
   return cart;
} 
exports.add = add;

const sub = (id)=>{
    if(cart[id].qty===1)
    return cart;

   --cart[id].qty;
   setCart(cart);
   return cart;
}
exports.sub = sub;


const remove = (id)=>{
    cart =  cart.filter((item)=> item._id!==id);
    setCart(cart)
    return cart;
}
exports.remove = remove;
