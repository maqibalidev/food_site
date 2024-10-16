import React from "react";
import "./footer.css";
import logo from "../../assets/images/3.png";
const Footer = () => {
  return (
    <>
    <div className="row footer-container justify-content-between ">
      <div className="ps-2 ps-sm-0 col-12 col-lg-3 d-flex flex-column footer-item footer-logo-container align-items-start">
        <img className="user-select-none" src={logo} alt="" />
        <div className="d-flex mt-3">
          <div className="footer-icons-container d-flex justify-content-center align-items-center me-2" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 16 16">
<path d="M8,0C3.582,0,0,3.582,0,8c0,4.01,2.954,7.321,6.803,7.901V10.12H4.824V8.016h1.979V6.618c0-2.317,1.13-3.334,3.054-3.334	c0.923,0,1.411,0.069,1.641,0.099v1.836h-1.312c-0.817,0-1.104,0.775-1.104,1.65v1.148h2.396l-0.326,2.104H9.082v5.798l0,0.001	C12.987,15.389,16,12.05,16,8C16,3.582,12.418,0,8,0z"></path>
</svg>
          </div>

          <div className="footer-icons-container d-flex justify-content-center align-items-center me-2" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 16 16">
<path d="M8,0C3.582,0,0,3.582,0,8c0,4.01,2.954,7.321,6.803,7.901V10.12H4.824V8.016h1.979V6.618c0-2.317,1.13-3.334,3.054-3.334	c0.923,0,1.411,0.069,1.641,0.099v1.836h-1.312c-0.817,0-1.104,0.775-1.104,1.65v1.148h2.396l-0.326,2.104H9.082v5.798l0,0.001	C12.987,15.389,16,12.05,16,8C16,3.582,12.418,0,8,0z"></path>
</svg>
          </div>


          <div className="footer-icons-container d-flex justify-content-center align-items-center me-2" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 16 16">
<path d="M8,0C3.582,0,0,3.582,0,8c0,4.01,2.954,7.321,6.803,7.901V10.12H4.824V8.016h1.979V6.618c0-2.317,1.13-3.334,3.054-3.334	c0.923,0,1.411,0.069,1.641,0.099v1.836h-1.312c-0.817,0-1.104,0.775-1.104,1.65v1.148h2.396l-0.326,2.104H9.082v5.798l0,0.001	C12.987,15.389,16,12.05,16,8C16,3.582,12.418,0,8,0z"></path>
</svg>
          </div>


          <div className="footer-icons-container d-flex justify-content-center align-items-center me-2" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 16 16">
<path d="M8,0C3.582,0,0,3.582,0,8c0,4.01,2.954,7.321,6.803,7.901V10.12H4.824V8.016h1.979V6.618c0-2.317,1.13-3.334,3.054-3.334	c0.923,0,1.411,0.069,1.641,0.099v1.836h-1.312c-0.817,0-1.104,0.775-1.104,1.65v1.148h2.396l-0.326,2.104H9.082v5.798l0,0.001	C12.987,15.389,16,12.05,16,8C16,3.582,12.418,0,8,0z"></path>
</svg>
          </div>
          <div className="footer-icons-container d-flex justify-content-center align-items-center me-2" role="button">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12" height="12" viewBox="0 0 16 16">
<path d="M8,0C3.582,0,0,3.582,0,8c0,4.01,2.954,7.321,6.803,7.901V10.12H4.824V8.016h1.979V6.618c0-2.317,1.13-3.334,3.054-3.334	c0.923,0,1.411,0.069,1.641,0.099v1.836h-1.312c-0.817,0-1.104,0.775-1.104,1.65v1.148h2.396l-0.326,2.104H9.082v5.798l0,0.001	C12.987,15.389,16,12.05,16,8C16,3.582,12.418,0,8,0z"></path>
</svg>
          </div>

        </div>
      </div>

      <div className=" col-12 col-md-8 col-lg-6  mt-4 mt-lg-0 ">
     <div className="row ps-2 ps-sm-0">
     <div className="d-flex flex-column footer-item  mt-4 mt-sm-0  col-12 col-sm-4 ">
          <h5>Organic</h5>
          <a href="">About us</a>
          <a href="">Conditions</a>
          <a href="">Our journals</a>
          <a href="">About us</a>
          <a href="">Careers</a>
          <a href="">Affiliate programme</a>
          <a href="">Ultras Press</a>
        </div>
        <div className="footer-item  mt-4 mt-sm-0 col-12 col-sm-4  d-flex justify-content-start justify-content-md-start">
     <div className="d-flex flex-column ">
     <h5>Quick Links</h5>
          <a href="">Offers</a>
          <a href="">Discount Coupons</a>
          <a href="">Stores</a>
          <a href="">Track Order</a>
          <a href="">Careers</a>
          <a href="">Shop</a>
          <a href="">Info</a>
     </div>
        </div>
        <div className="footer-item  mt-4 mt-sm-0 col-12 col-sm-4  d-flex justify-content-start  justify-content-start  justify-content-md-start">
     <div className="d-flex flex-column ">
     <h5>Customer Service</h5>
          <a href="">About us</a>
          <a href="">Conditions</a>
          <a href="">Our journals</a>
          <a href="">About us</a>
          <a href="">Careers</a>
          <a href="">Affiliate programme</a>
          <a href="">Ultras Press</a>
     </div>
        </div>
     
     </div>
    
      </div>


      <div className="px-2 px-sm-0 d-flex flex-column footer-item  footer-form-container col-12 col-md-2 mt-4 mt-lg-0">
          <h5 >Subscribe Us</h5>
          <p className="mt-1">
            Subscribe to our newsletter to get updates about our grans offers
          </p>
          <div className="">
            <form action="" className="form d-flex mt-3 subscribe-sec">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
              <button className="btn btn-dark text-light ">Subscribe</button>
            </form>
          </div>
        </div>

       
    </div>

    <div className="row footer-bottom-container py-4 mt-4">
          <div className="col-12 col-md-6 text-center text-md-start"><p>©2024 Organic. All rights reserved.</p></div>
          <div className="col-12 col-md-6 text-center text-md-end mt-2 mt-md-0"><p>HTML  Template by <a>Team</a> Distributed By <a>Spark</a></p></div>
          
        </div>
    </>
  );
};

export default Footer;
