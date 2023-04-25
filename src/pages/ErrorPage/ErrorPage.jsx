import React from 'react'

import './ErrorPage.scss'
const ErrorPage = () => {
  return (
    <div className='error-page'>
      <div className="error-message">
        <div className="number">
          404
        </div>
        <div className="message">
          THIS PAGE IS NOT EXIST
        </div>
      </div>
    </div>
  )
}

export default ErrorPage