import React from 'react'
import Product from './product'
const ProductsContainer=(props)=>{
    var products=[];
    for (var i in props.products.byHash){
        products.push(<Product product={props.products.byHash[i]} key={i}/>);
    }
    return (
        <div>
           {products}
        </div>

    );
}
export default ProductsContainer;