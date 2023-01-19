import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'> 
            <h3 className="contact__title">
              Save time, save money
            </h3>
            <span className='contact__subtitle'>
          Sign up and we'll send you the best deals to you
            </span>

            <div className='contact__email'>
              <input type="email" />
              <button className='contat__email--btn'>Subscribe</button>
            </div>
    </div>
  )
}

export default Contact 