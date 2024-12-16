import React, { useContext, useEffect, useState } from "react";

import "./product.css";
import { CartContext } from "../../../includes/contexts/cartContextApi/cartContext";
import image_loader_gif from "../../../assets/images/image_loader.gif";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import imagePlceholder from "../../../assets/images/image_placeholder.png";
import ImageComponent from "../../../includes/ImageComponent";
const Product = ({ product }) => {
  const productPrice = Math.ceil(product.product_price / product.sale);
  const carContext = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [productExist, setProductExist] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  const { id, product_name, product_img, product_price } = product;
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const exist = carContext.products.find(
      (produc) => produc.id === product.id
    );
    setProductExist(exist);
  }, [carContext]);
  const handleCartBtnClick = () => {
    setAddingToCart(true);
    !productExist
      ? carContext.addProduct({
          id,
          name: product_name,
          image: product_img,
          price: productPrice,
          quantity: parseInt(count),
        })
      : carContext.removeProduct(id);

    setAddingToCart(false);
  };
  return (
    <div className="product-container d-flex align-items-center flex-column">
     <ImageComponent src={product_img} height={150} width={200}/>
      <p className="product-desc mt-2 text-center">{product.product_name}</p>
      <div className="d-flex align-items-center mt-1">
        {[...Array(product.rating % 4)].map((data, key) => (
          <svg
            key={key}
            fill="#ffbb00"
            viewBox="0 0 64 64"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            width="18px"
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2,
            }}
            stroke="#ffbb00"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              <rect
                x="-512"
                y="-192"
                width="1280"
                height="800"
                style={{ fill: "none" }}
              ></rect>
              <path d="M32.001,9.188l5.666,17.438l18.335,0l-14.833,10.777l5.666,17.438l-14.834,-10.777l-14.833,10.777l5.666,-17.438l-14.834,-10.777l18.335,0l5.666,-17.438Z"></path>
            </g>
          </svg>
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="18px"
          viewBox="0 -960 960 960"
          width="18px"
          fill="#ffbb00"
        >
          <path d="m606-286-33-144 111-96-146-13-58-136v312l126 77ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
        {[...Array(4 - (product.rating % 4))].map((_, key) => (
          <svg
            key={key}
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 -960 960 960"
            width="18px"
            fill="#fdd35d"
          >
            <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
          </svg>
        ))}
        <p className="">({product.rating})</p>
      </div>
      <div className="d-flex align-items-center mt-1 product-bottom-sec">
        <p className="text-decoration-line-through me-2">
          ${product.product_price}.00
        </p>
        <span className="text-dark me-2 fw-bold product-bottom-price lh-1">
          ${productPrice}.00
        </span>
        <div className="product-bottom-txt">
          <p>{product.sale}% OFF</p>
        </div>
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
          disabled={count < 0}
          onClick={!addingToCart ? handleCartBtnClick : null}
          className={`product-add-to-cart-btn btn border-none p-2 flex-grow-1 text-light mx-1 justify-content-center d-flex align-items-center `}
          style={{
            backgroundColor: productExist ? "#dc3545" : "#3dbb5d",
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
          {productExist ? "Remove From Cart" : "Add to cart"}
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
    </div>
  );
};

export default Product;
