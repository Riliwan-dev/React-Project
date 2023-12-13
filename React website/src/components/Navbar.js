import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fatTypos3 } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false)
  

  return (
    <div>
      <>
      <navbar>
        <navbar className="navbar-container">
             <Link to="/" className="navbar-logo">
                TVX <i className='fab fa-typos3'/> 
             </Link>

             <div className='navbar-icon-menu'>
                <div className='harmburger' onClick={handleClick}>
                  {click ? 'fas fa times' : 'fas fa bars'}
                </div>
             </div>

        </navbar>
      </navbar>
      </>
    </div>
  )
}

export default Navbar
