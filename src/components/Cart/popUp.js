import React from 'react';
import { connect } from 'react-redux';
import Popup from "reactjs-popup";

import { getTotal , getCartProductsID }from '../../store/selectors/cart'
import { checkOut }from '../../store/actions/cartActions'

const PopUP=(props)=>{
      return (
         <Popup
              trigger={ <button className="Bottom" >CheckOut</button>}
              modal
              closeOnDocumentClick
              >
            {close => (
            <div className="modal2">
              <a className="close" onClick={close}>
              &times;
              </a>
              <div className="header"> CheckOut Details </div>
              <div className="content">
                Total:{props.getTotal}
              </div>
              <div className="actions">
                
                <a
                  className="btn-gradient green small"
                  onClick={() => {
                    props.checkout();
                    close()
                  }}
                >
                  submit
                </a>
              </div>
            </div>
            )}
           
          </Popup>
    );
}

const mapStatetoProps=(state,props)=>{
  return{
    getTotal:getTotal(props.items)
  }
}
const mapDispatchtoProps=(dispatch,props)=>{
  return{
      checkout: () => {
        dispatch(checkOut(props.ids,getTotal(props.items)));
    }
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(PopUP);

