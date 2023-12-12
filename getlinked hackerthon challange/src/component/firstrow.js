import React from 'react'
import line from "../images/Vector 4.svg"
import star from "../images/star.png"

const first = () => {
  return (
    <div className='first-row'>
      <div className='FR-image'>
        <img src={star} alt="" />
      </div>
      <div className='HR'>
        <p>Igniting a Resolution in HR Innovation</p>
        <img src={line} alt="" />
      </div>
    </div>
  )
}

export default first