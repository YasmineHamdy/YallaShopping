import React from 'react';
import { connect } from 'react-redux';

import { addProduct , removeProduct } from '../../store/actions/cartActions'
import { isInCart } from '../../store/selectors/cart'

const Product=(props)=>{
        return (
        <figure className="snip1423">
          <i className="ion-android-cart" 
              style={{
              backgroundColor: props.isInCart ?"#e00000":"#666666"
              }}
              onMouseOver={()=>{}}
              onClick={()=>{
                if(props.isInCart)
                  {props.removeProduct(props.product.id)}
                else
                  {props.addProduct(props.product.id)}
              }} 
          />   
        <img src={props.product.img} alt="sample57" />
        <figcaption>
          <h3>{props.product.name}</h3>
          <p>{props.product.describtion}</p>
          <div className="price">
            ${props.product.price}
          </div>
        </figcaption>
           
        </figure>

    );
}
const mapStatetoProps=(state,props)=>{
  return{
      isInCart:isInCart(state,props.product.id)
  }
}
const mapDispatchtoProps=(dispatch,props)=>{
  return{
      addProduct: () => {
          dispatch(addProduct(props.product.id));
      },
      removeProduct: () => {
        dispatch(removeProduct(props.product.id));
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Product);
