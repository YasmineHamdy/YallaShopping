import React from 'react';
import { connect } from 'react-redux';

import { removeProduct ,inCreaseQnt } from '../../store/actions/cartActions'


const CartItem=(props)=>{
      const {img,name,price}=props.data
      return (
          <div className="item">
            <div className="buttons" onClick={props.removeProduct}>
              <span className="delete-btn"></span>
            </div>  
            <div className="image">
              <img src={img} alt="fdgdgfdgfdg" width="100" height="100" />
            </div>
            <div className="description">
              <span>{name}</span>
            </div>
           
            <div className="total-price">${price}</div>
          </div>
           
    );
}
const mapDispatchtoProps=(dispatch,props)=>{
  return{
      removeProduct: () => {
        dispatch(removeProduct(props.data.id));
    },
  }
}

export default connect(null,mapDispatchtoProps)(CartItem);

