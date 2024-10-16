import React from 'react'
import './product_section.css'
import Product from '../product/Product'
import ProductLoader from '../Product_loader/ProductLoader'

const Cart = () => {

const data  = JSON.parse(localStorage.getItem('cartData'));

  return (
    <div className='mt-5'>
         <div className="d-flex justify-content-between mb-5 ">
        <h4>Best selling products</h4>
        <div>
          <button className="viewProducts-btn btn btn-success">View All</button>
         

         
        </div>



      </div>


<div className='d-flex flex-wrap justify-content-center justify-content-md-start gap-auto'>



{
 data && data.length ? data.map((product,key)=>(

    <Product key={key} product={product}/>

  )):
  (
    [...Array(10)].map((_,key)=>(
      <ProductLoader key={key}/>
    ))
  )
}


</div>

    </div>
  )
}

export default Cart
