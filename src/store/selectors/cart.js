export function isInCart(state,productId){
    return (state.cartReducer.items.indexOf(productId) !== -1) 
  }

export function getCartProducts(state){
  var itemsId=state.cartReducer.items;
  var items=[];
 
  for(var i=0;i<itemsId.length;i++)
  {
    items.push(state.productReducer.items.byHash[itemsId[i]]);
    if(items[i].quantity)
      {items[i].quantity=1;}
  }
  return items;
}

export function getTotal(cartItems){
  var total=0;
  if(cartItems){
    for(var i=0;i<cartItems.length;i++){
      total+=cartItems[i].price;
    }
  }
 
  return total;
}


