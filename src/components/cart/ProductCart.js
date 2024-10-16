import React, { useContext, useState } from "react";
import "./product_section.css";

import Product from "../home/product/Product";
import CartItem from "./CartItem";
import { CartContext } from "../../includes/contexts/cartContextApi/cartContext";

const ProductCart = () => {
  const cartContext = useContext(CartContext);

  const clearCart = () => {
    cartContext.clearCart();
  };

  return (
    <div className="mt-5 p-3">
      <div className="d-flex justify-content-between mb-5">
        <h4></h4>
        <div>
          <button
            onClick={clearCart}
            className="viewProducts-btn btn btn-success"
          >
            CLEAR CART
          </button>
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-auto">
        {cartContext?.products?.length ? (
          cartContext.products.map((product, key) => (
            <CartItem key={key} product={product} />
          ))
        ) : (
          <div className="text-center fs-1 font-bold w-100 mt-5 pt-5">
            CART IS EMPTY!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
