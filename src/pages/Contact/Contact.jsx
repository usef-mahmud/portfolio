import React from 'react'

import './Contact.scss'
const Contact = () => {
  return (
    <div className='contact-page'>

      <div className="contact-form">
        <div className="title">
          let's have a talk
        </div>
        <div className="form-box">
          <div className="text-box">
            <input type="text" />
            <span className='active'>name</span>
          </div>
        </div>
        <div className="form-box">
          <div className="text-box">
            <textarea rows="5"></textarea>
            <span>message</span>
          </div>
        </div>
        <div className="form-box">
          <div className="send-btn">
            send
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact