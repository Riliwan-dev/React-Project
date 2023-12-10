import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <>
      <navbar>
        <navbar className="navbar-container">
             <Link to="/" className="navbar-logo">
                TVX <i className='fab fa typos3'/> 
             </Link>
        </navbar>
      </navbar>
      </>
    </div>
  )
}

export default Navbar
