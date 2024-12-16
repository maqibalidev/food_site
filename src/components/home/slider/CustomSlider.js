import React from "react";
import './slider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the autoplay CSS
import { Autoplay, Navigation } from "swiper/modules";
import Product from "../product/Product";
import ProductLoader from "../Product_loader/ProductLoader";
import ImageComponent from "../../../includes/ImageComponent";

export default function CustomSlider({ slider_type, slider_class, title ,data}) {
  return (
    <div className="slider-container mt-5 user-select-none ">
      <div className=" d-flex flex-column flex-sm-row justify-content-cebter justify-content-sm-between mb-5 align-items-between">
        <h4 className="text-center text-sm-start">{title}</h4>
        <div className=" d-flex justify-content-between justify-content-sm-end  mt-3 mt-sm-0 align-items-center">
          <button className={` viewProducts-btn btn btn-success  me-1 ${slider_class}`}>View All</button>
          <div className="d-flex">
          <button className={`btn custom-prev & pb-1  mx-1 ${slider_class}-prev`}>
            <svg  xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000000">
              <path className="slider-btn-arrow" d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z" />
            </svg>
          </button>
          <button className={`btn custom-next pb-1 ms-1 ${slider_class}-next`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="px" fill="#000000">
              <path className="slider-btn-arrow" d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z" />
            </svg>
          </button>
          </div>
        </div>
      </div>

      <Swiper
       
        centeredSlides={true} // Enable for small screens

        navigation={{
          prevEl: `.${slider_class}-prev`,
          nextEl: `.${slider_class}-next`,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter : true
          
          
        }}
        breakpoints={{
         491:{
          slidesPerView:  2,
          centeredSlides: false,
          spaceBetween: 0,
         } ,
          576: {
            slidesPerView:  slider_type==='product-slider' ? 2 : 2 ,
            centeredSlides: false,
            spaceBetween: 0,
      
          },
          768: {
            slidesPerView: 3, 
            centeredSlides: false, 
            spaceBetween: 0,
            loop: false,
          },
          992: {
            slidesPerView: 4, 
            centeredSlides: false,
            spaceBetween:0,
            loop: false,
          },
          1200: {
            slidesPerView:  slider_type==='product-slider' ? 5 : 8 ,
           centeredSlides: false,
            spaceBetween: 0,
            loop: false,
          },
          1400: {
            slidesPerView:  slider_type==='product-slider' ? 6 : 8 ,
           centeredSlides: false,
            spaceBetween: 0,
            loop: false,
          },
        }}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        {data && data.length ? (data).map((product, key) => {
          return slider_type !== 'product-slider' ? (
            <SwiperSlide key={key}>
              <div className=" slider-container d-flex flex-column align-items-center">
                <div className=" slider-img-container d-flex flex-column align-items-center">
                  <ImageComponent
                    src={product.img}
                    width={120}
                    height={120}
                    rounded={200}
                  />
                </div>
                <p className="mt-2">{product.name}</p>
              </div>
            </SwiperSlide>
          ) : (
            <SwiperSlide  key={key}>
              <Product product={product} />
            </SwiperSlide>
          );
        }
    
      
      )  : 

      (
       [...Array(10)].map((_,key)=>(
        <SwiperSlide  key={key}>
        <ProductLoader/>
      </SwiperSlide>
       ))
      )}
      </Swiper>
    </div>
  );
}
