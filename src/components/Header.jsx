import React from 'react'
import '../style/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className="innerHeader">
          <Link to={"/"} className="link">
            <div className="logo-area">
              <img src="images/logo.png" className='logo' alt="logo" />
              <div className="logo-txt">Berkeley Petrochemical LLP</div>
            </div>
          </Link>

          <div className="logo-le-lub">
            <div className="social-icons">
              <a href=" https://www.youtube.com/user/ReliabilitySource">
                <img src="images/icons/youtube.png" className='social-icon' alt="youtube" />
              </a>
              <a href="https://www.linkedin.com/company/berkeleypetrochemical-lubricationengineers-lubricants-easybar/">
                <img src="images/icons/linkedin.png" className='social-icon social-icon-2' alt="youtube" />
              </a>
            </div>
            <a href="https://www.lelubricants.com/">
              <img src="images/le-logo.png" className='logo-le-lub-img' alt="le-lub" />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header