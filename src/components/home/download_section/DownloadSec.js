import React from 'react'
import img from '../../../assets/images/5.png'
import appleLogo from '../../../assets/images/6.png'
import googleLogo from '../../../assets/images/7.png'
import './download_sec.css'
const DownloadSec = () => {
  return (
    <div className='row bg-warning download-sec pt-4 pb-5 pb-md-0 user-select-none'>
        <div className='col-12 col-md-6 d-flex justify-content-center align-items-center align-items-md-end flex-column'>
<div>
<div>
    <h4 className=''>Download Organic App</h4>
    <p className='mt-2'>Online orders made east, fast and reliable</p>
</div>
            <div className='d-flex mt-3 download-sec-btns'>
                <button className='btn me-1'>
                   <div className='d-flex align-items-center'>
                    <img className='me-1 download-btn-logo' src={appleLogo} alt=""/>
                    <div className='d-flex flex-column align-items-start'>
                        <p className='text-light'>Download on the</p>
                        <h6 className='text-light'>App Store</h6>
                    </div>
                   </div>
                </button>
                <button className='btn ms-1'>
                   <div className='d-flex align-items-center'>
                    <img className='me-1 download-btn-logo' src={googleLogo} alt=""/>
                    <div className='d-flex flex-column align-items-start'>
                        <p className='text-light'>GET IT ON</p>
                        <h5 className='text-light'>Google Play</h5>
                    </div>
                   </div>
                </button>
            </div>
</div>
        </div>
        <div className='col-6 d-none d-md-block download-sec-img-container'>
<img src={img} alt=""/>
        </div>
    </div>
  )
}

export default DownloadSec
