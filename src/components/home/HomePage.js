import React, { useEffect ,useState} from "react";
import Header from "../../includes/header/Header";
import "./home.css";
import CustomSlider from "./slider/CustomSlider";
import ProductsSection from "./products_section/ProductsSection";
import OfferBanner from "./offer_banner/OfferBanner";
import Contact from "./contact/Contact";
import Blog from "./blog/Blog";
import DownloadSec from "./download_section/DownloadSec";
import TagsSec from "./tagsSection/TagsSec";
import About from "./about_section/About";
import Footer from "../../includes/footer/Footer";
// import { productData } from "../../assets/data/data";
import { catData } from "../../assets/data/data";
import { steps } from "../../assets/data/data";
import Joyride, { STATUS } from "react-joyride";

import MyComponent from "../../includes/tour";
import axios from "axios";
import { getProductsApi } from "../../services/user_listing_api";
import { toast } from "react-toastify";

const HomePage = () => {
const [productData,setProductData] = useState([])
useEffect(()=>{

const fetchProducts = async()=>{

 try {
  const data = await getProductsApi();
  setProductData(data.data.products)

 } catch (error) {
  console.log(error)
  toast.error('network error!');
 }


}
fetchProducts()

},[])
  

  return (
    <div className="home-maine-container">

<MyComponent/>
     <div >
     <Header />
     </div>

      <div className="container ">
        <div className="home-banner-container">
          <div className="banner-inner-container  container d-flex flex-column justify-content-between ">
            <div className="banner-inner-content pt-5 mt-3 p-2">
              <h1 >
                <span className="fw-bold text-success">Organic</span> Foods at
                your
              </h1>
              <h1 className="fw-bold">Doorsteps</h1>
              <p className="mt-3 pb-2">Lorem ipsum dolor sit.</p>
              <div className="mt-4 banner-buttons-container">
                <button className="shoping-btn btn me-2 btn-success text-light px-4 py-3">
                  START SHOPPING
                </button>
                <button className="join-us-btn btn ms-1 btn-dark text-light px-4 py-3">
                  JOIN NOW
                </button>
              </div>

              <div className="d-flex mt-5 banner-records d-flex px-1 px-sm-0">
                <div className="d-flex align-items-center me-3 me-md-4">
                  <span className="fs-1 me-1 me-md-3 fw-bold">14k+</span>
                  <p className="lh-1  ps-sm-0">
                    PRODUCT <br /> VARIETIES
                  </p>
                </div>
                <div className="d-flex align-items-center me-3 me-md-4">
                  <span className="fs-1 fs-sm-1 me-1 me-md-3 fw-bold">
                    14k+
                  </span>
                  <p className="lh-1 ps-sm-0">
                    HAPPY <br /> CUSTOMERS
                  </p>
                </div>
                <div className="d-flex align-items-center me-3 me-md-4">
                  <span className="fs-1 fs-sm-1 me-1 me-md-3 fw-bold">
                    14k+
                  </span>
                  <p className="lh-1  ps-sm-0">
                    STORE <br /> LOCATIONS
                  </p>
                </div>
              </div>
            </div>

        
          </div>


<div>


<div className="container-fluid container-md banner-bottom-outer-container">

<div className="d-flex flex-column flex-md-row  mt-5 banner-bottom-container">
              <div className="d-flex  p-3 banner-bottom-item-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="#FFFFFF"
                  className="ms-2"
                >
                  <path d="M481-158q-131 0-225.5-94.5T161-478v-45l-80 80-39-39 149-149 149 149-39 39-80-80v45q0 107 76.5 183.5T481-218q29 0 55-5t49-15l43 43q-36 20-72.5 28.5T481-158Zm289-169L621-476l40-40 79 79v-41q0-107-76.5-183.5T480-738q-29 0-55 5.5T376-719l-43-43q36-20 72.5-28t74.5-8q131 0 225.5 94.5T800-478v43l80-80 39 39-149 149Z" />
                </svg>
                <div className="ms-4 text-light">
                  <h4>Fresh from farm</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    quo.
                  </p>
                </div>
              </div>

              <div className="d-flex  p-3 banner-bottom-item-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="#FFFFFF"
                   className="ms-2"
                >
                  <path d="M481-158q-131 0-225.5-94.5T161-478v-45l-80 80-39-39 149-149 149 149-39 39-80-80v45q0 107 76.5 183.5T481-218q29 0 55-5t49-15l43 43q-36 20-72.5 28.5T481-158Zm289-169L621-476l40-40 79 79v-41q0-107-76.5-183.5T480-738q-29 0-55 5.5T376-719l-43-43q36-20 72.5-28t74.5-8q131 0 225.5 94.5T800-478v43l80-80 39 39-149 149Z" />
                </svg>
                <div className="ms-4 text-light">
                  <h4>Fresh from farm</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    quo.
                  </p>
                </div>
              </div>

              <div className="d-flex  p-3 banner-bottom-item-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="50px"
                  viewBox="0 -960 960 960"
                  width="50px"
                  fill="#e8eaed"
                   className="ms-2"
                >
                  <path d="M224.12-161q-49.12 0-83.62-34.42Q106-229.83 106-279H40v-461q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.17-34.38 83.58Q780.24-161 731.12-161t-83.62-34.42Q613-229.83 613-279H342q0 49-34.38 83.5t-83.5 34.5Zm-.12-60q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17ZM100-339h22q17-27 43.04-43t58-16q31.96 0 58.46 16.5T325-339h294v-401H100v401Zm631 118q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754-573h-75v148ZM360-529Z" />
                </svg>
                <div className="ms-4 text-light">
                  <h4>Fresh from farm</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                    quo.
                  </p>
                </div>
              </div>
            </div>



</div>

  
</div>


          
        </div>
      </div>

      <div className=" d-flex justify-content-center px-2">
        <div className="container ">
          <CustomSlider slider_type={"cat-slider"} title={'Category'}  data={catData} slider_class={'category'}/>
        </div>
      </div>

      <div className=" d-flex justify-content-center px-3 ">
        <div className="container">
          <ProductsSection data = {productData} />
        </div>
      </div>

      <div className=" d-flex justify-content-center">
        <div className="container ">
          <OfferBanner />
        </div>
      </div>

      <div className=" d-flex justify-content-center px-2">
        <div className="container">
          <CustomSlider
          data = {productData}
            slider_type={"product-slider"}
            slider_class={"featured"}
            title={"Featured Products"}
         
          />
        </div>
      </div>

      <div className=" d-flex justify-content-center mt-5">
        <div className="container">
          <Contact />
        </div>
      </div>

      <div className=" d-flex justify-content-center px-2">
        <div className="container">
          <CustomSlider
          data = {productData}
            slider_type={"product-slider"}
            slider_class={"popular"}
            title={"Most popular products"}
          />
        </div>
      </div>

      <div className=" d-flex justify-content-center px-2">
        <div className="container">
          <CustomSlider
          data = {productData}
            slider_type={"product-slider"}
            slider_class={"arrived"}
            title={"Just arrived"}
          />
        </div>
      </div>

      <div className=" d-flex justify-content-center px-2 px-sm-0">
        <div className="container">
          <Blog />
        </div>
      </div>

      <div className=" d-flex justify-content-center mt-2 mt-sm-0 pt-5 px-2 px-sm-0">
        <div className="container">
          <DownloadSec />
        </div>
      </div>

      <div className=" d-flex justify-content-center px-2 px-sm-0">
        <div className="container">
          <TagsSec />
        </div>
      </div>

      <div className=" d-flex justify-content-center mt-3 mt-sm-5 px-2 px-sm-0">
        <div className="container">
          <About />
        </div>
      </div>

      <div className=" d-flex justify-content-center mt-3 mt-sm-5 pt-2 pt-md-5 px-2 px-sm-0">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
