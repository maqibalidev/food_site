import React from 'react'
import "./product_loader.css"
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'
const ProductLoader = () => {
    return (
        <div className="product-loader-container d-flex align-items-center flex-column">
       <Skeleton height={150} width={200} />
       <Skeleton height={20} width={200} />
       <Skeleton height={20} width={200} />
       <Skeleton height={20} width={200} />
        
        </div>
      );

}

export default ProductLoader
