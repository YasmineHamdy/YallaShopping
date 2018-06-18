import React from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

import { getCartProducts }from '../store/selectors/cart'

const Orders=(props)=>{
    var items=[];
    for (var i in props.orders){
      items.push(<div className="item" key={props.orders[i].id}>
                    <div className="description">
                        <span>Order</span>
                        <span>{props.orders[i].id}</span>
                    </div>
                        <div className="total-price">
                            ${props.orders[i].total}
                        </div>
                    </div>
                   )
    }
      return (
        <div className="shopping-cart">
          <div className="title">
            Orders
          </div>
          {items}
        </div>
    );
}

const mapStatetoProps=(state,props)=>{
  return{
    orders:state.cartReducer.orders
  }
}

export default connect(mapStatetoProps,null)(Orders);

