import React from 'react';
import './Youtube.css'; // Import your CSS file
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';


export const Youtube = () => {
  return (
    <div className="youtube">
        <nav className="navbar">
          
            <div className="start">
              <i className='fas fa-bars thin-icon'></i>
              <i className="fas fa-lightbulb"></i>
              <i className='far fa-bars'></i>
              <div className="youtube svg-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                >
                  <path fill="#FF0000" d="M46.5 12a5.53 5.53 0 0 0-4.9-4.87C39.42 6 24 6 24 6s-15.42 0-17.6.13A5.53 5.53 0 0 0 1.5 12C1 17.26 1 24 1 24s0 6.74.4 12a5.53 5.53 0 0 0 4.9 4.87C8.58 42 24 42 24 42s15.42 0 17.6-.13a5.53 5.53 0 0 0 4.9-4.87c.4-5.26.4-12 .4-12s0-6.74-.4-12zM19 32V16l13 8z"/> 
                  <span className="youtube-text">YouTube</span>
            </svg>
              </div>
            </div>

            {/* Second, third, and fourth divs
            <div className="second-div">Content 3</div> */}
            <div className="third-div">Content 4</div>
            <div className="fourth-div">Content 5</div>
        
        </nav>
    </div>
  );
};

// export default Navbar;