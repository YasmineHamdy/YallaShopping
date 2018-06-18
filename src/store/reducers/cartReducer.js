import { ADD_PRODUCT, REMOVE_PRODUCT ,CHECKOUT_CART, INCREASE_QNT} from '../actionTypes';
import { LOCATION_CHANGE } from 'react-router-redux';
import orders from '../../data/orders'
const intialState={
  items:[],
  orders:orders
}
const cartReducer=(state=intialState,action)=>{
    switch (action.type){
        case ADD_PRODUCT:
            return{  
                ...state,
                items: [ 
                    ...state.items,
                    action.payload
                ]
            }
            break;
        case REMOVE_PRODUCT:
            var index = state.items.indexOf(action.payload);
            if (index > -1) {
                return {
                    ...state,
                    items: state.items.slice(0, index).concat(state.items.slice(index+1))
                }
                
            }
        case "checkoutCart_FULFILLED":
            return { 
                    ...state,
                    items:[],
                    orders:{
                        ...state.orders,
                        [action.payload.id]:{
                            id:action.payload.id,
                            productsId:action.payload.productsId,
                            total:action.payload.total
                        }
                    } 
            }
            break;
        default:
            return state;
    }
}
export default cartReducer;