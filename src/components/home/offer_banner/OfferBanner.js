import React from 'react';
import './offer_banner.css';

const OfferBanner = () => {

  return (
    <div className='row offer-banner-container d-flex flex-column flex-sm-row  mt-5'>
      <div className='col-12 col-sm-7 offer-left-img-container '>
        <div>
          <h5 className='text-light'>Items on SALE</h5>
          <p className='mt-2 text-light'>Discounts up to 30%</p>
          <button className='btn btn-transparent  text-light'>SHOP NOW</button>
        </div>
      </div>

      <div className='col-12 col-sm-5  d-flex flex-column ms-0 ms-sm-4'>
        <div className='offer-right-img-container mt-3 mt-sm-0 mb-0 mb-sm-2'>
          <div className=''>
            <h5 className=' text-light'>Items on SALE</h5>
            <p className='mt-3 text-light'>Discounts up to 30%</p>
            <button className='btn btn-transparent   text-light'>SHOP NOW</button>
          </div>
        </div>

        <div className='offer-right-img-container mt-3 mt-sm-2'>
          <div>
            <h5 className=' text-light'>Items on SALE</h5>
            <p className='mt-3 text-light'>Discounts up to 30%</p>
            <button className='btn btn-transparent   text-light'>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
