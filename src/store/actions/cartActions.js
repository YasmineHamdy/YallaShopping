import store from '../storeConfg'
import { ADD_PRODUCT, REMOVE_PRODUCT ,CHECKOUT_CART } from '../actionTypes'

export function addProduct(productId){
  return{
    type:ADD_PRODUCT,
    payload:productId
  }
}
export function removeProduct(productId){
  return{
    type:REMOVE_PRODUCT,
    payload:productId
  }
}
export function checkOut(itemsId,total){
  return{
    type:CHECKOUT_CART,
    payload:new Promise((resolve,reject)=>{
      console.log("Checkout Action",itemsId,total)
      setTimeout(() => {
          var orderId=Date.now();
          resolve({id:orderId,productsId:itemsId,total:total});
      }, 2000);
    })
  }
}

