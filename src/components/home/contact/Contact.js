import React from 'react'
import './contact.css';
const Contact = () => {
  return (
    <div className='row register-form-container d-flex align-items-center py-5 py-sm-0'>
      <div className='col-12 col-sm-6 d-flex justify-content-start justify-content-sm-end pe-3'>
       <div className='d-flex flex-column pe-5 '>
       <h2 className='text-light'>GET 25% Discount on <br/> your first purchase</h2>
       <p className='mt-3 text-light'>Just Sign Up & Register it now to become member.</p>
       </div>
      </div>

      <div className='col-12 col-sm-6 d-flex justify-content-start mt-5 mt-sm-0'>
        <form className='form w-75 contact-sec'>
          <input type="text" placeholder='Name' className='form-control  px-3 border-none rounded-0'/>
          <input type="email" placeholder='Email Address' className='form-control px-3 mt-3  border-none rounded-0'/>
          <button className='btn btn-dark w-100 py-1  mt-3' >Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
