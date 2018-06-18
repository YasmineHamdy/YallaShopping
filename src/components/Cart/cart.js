import React from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

import CartItem from './cartItem'
import PopUP from './popUp'
import { getCartProducts }from '../../store/selectors/cart'

const Cart=(props)=>{
    var items=[];
    for (var i in props.cartItems){
      items.push(<CartItem data={props.cartItems[i]} key={props.cartItems[i].id} />)
    }
      return (
        <div className="shopping-cart">
          <div className="title">
            Shopping Bag
          </div>
          {items}
          <PopUP items={props.cartItems} ids={props.cartIds}/>
        </div>
    );
}

const mapStatetoProps=(state,props)=>{
  return{
    cartItems:getCartProducts(state),
    cartIds:state.cartReducer.items
  }
}

export default connect(mapStatetoProps,null)(Cart);

