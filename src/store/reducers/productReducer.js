import FETCH_PRODUCTS from '../actionTypes'
import store from '../storeConfg'
const intialState={
    items:{
        byHash: {}
    },
    isLoading: true,
}

const productReducer=(state=intialState,action)=>{
    switch (action.type){
        case "fetchProducts_FULFILLED":
            return{
                ...state,
                items:action.payload,
                isLoading:false
            }
            break;
        default:
            return state;
    }
}
export default productReducer;