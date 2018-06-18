import React from 'react'
import { connect } from 'react-redux';
import { fetchProduct } from '../store/actions/productActions'
import ProductsContainer from '../components/Products/productsContainer'
import MyLoader from '../components/loader'
const DashBoard=(props)=>{
    props.fProduct()
    return(
            <div>
                <div className="imgbox">
                    <img  className="center-fit" src={require("../../public/images/bg.png")}  />
                </div>
                {props.isLoading && <MyLoader/>}
                <ProductsContainer products={props.items}/>                
            </div>
    )
}
const mapStatetoProps=(state)=>{
    return{
        items:state.productReducer.items,
        isLoading:state.productReducer.isLoading
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        fProduct: () => {
            dispatch(fetchProduct());
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(DashBoard);
