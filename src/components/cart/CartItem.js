import React, { useContext, useState } from 'react'
import { CartContext } from '../../includes/contexts/cartContextApi/cartContext';
import ImageComponent from '../../includes/ImageComponent';

const CartItem = ({product}) => {
    const [count, setCount] = useState(product.quantity);
const cartContext  = useContext(CartContext);
const updateCart = () =>{
    
cartContext.updateProduct(product.id,parseInt(count));
}
const removeProduct = ()=>{
    
    cartContext.removeProduct(product.id); 
}

  return (
    <div className="product-container d-flex align-items-center flex-column position-relative">
      <ImageComponent
        src={product.image}
        height={150}
        width={200}

      />
      <p className="product-desc mt-2 text-center">{product.name}</p>
    
      <div className="d-flex align-items-center mt-1 product-bottom-sec">
      <span className="text-dark me-2 fw-bold product-bottom-price lh-1">
          ${product.price}.00
        </span>       
    
      </div>

      <div className="d-flex product-btn-section mt-3">
        <input
          type="number"
          className="w-25 "
          value={count}
          min={1}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button
       disabled = {parseInt(count) === product.quantity || count < 0 }
          onClick={updateCart}
          className={`product-add-to-cart-btn btn border-none p-2 flex-grow-1 text-light mx-1 justify-content-center d-flex align-items-center `}
          style={{
            backgroundColor:  "#3dbb5d",
          }}
        >
            
          <svg
            className="me-1"
            xmlns="http://www.w3.org/2000/svg"
            height="14px"
            viewBox="0 -960 960 960"
            width="14px"
            fill="#FFFFFF"
          >
            <path d="M263.79-96Q234-96 213-117.21t-21-51Q192-198 213.21-219t51-21Q294-240 315-218.79t21 51Q336-138 314.79-117t-51 21Zm432 0Q666-96 645-117.21t-21-51Q624-198 645.21-219t51-21Q726-240 747-218.79t21 51Q768-138 746.79-117t-51 21ZM253-696l83 192h301l82-192H253Zm-31-72h570q14 0 20.5 11t1.5 23L702.63-476.14Q694-456 676.5-444T637-432H317l-42 72h493v72H276q-43 0-63.5-36.15-20.5-36.16.5-71.85l52-90-131-306H48v-72h133l41 96Zm114 264h301-301Z" />
          </svg>
         update product
        </button>
        <button className="btn btn-transparent border-dark py-1 px-2 flex-grow-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14px"
            viewBox="0 -960 960 960"
            width="14px"
            fill="#434343"
          >
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
          </svg>
        </button>
        
      </div>
      <button onClick={removeProduct}  className="cart-product-del-btn btn btn-transparent border-dark py-1 px-2 flex-grow-1 position-absolute 0">
      <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        </button>
    </div>
  )
}

export default CartItem
