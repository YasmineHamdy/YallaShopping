import store from '../storeConfg'
import { FETCH_PRODUCTS } from '../actionTypes'
import products from '../../data/products'
const intialState=products;

export function fetchProduct(){
  return{
    type:FETCH_PRODUCTS,
    payload:new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve(intialState.items); 
      }, 2000);
    })
  }
}
