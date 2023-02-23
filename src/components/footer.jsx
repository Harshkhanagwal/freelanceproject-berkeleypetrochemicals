import React from 'react'
import '../style/footer.css'


const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className="main">
        <div className="container innerFooter">
          <div className="txt-area-f">
            <h1 className="heading-f">
              Berkeley Petrochemical LLP
            </h1>
            <div className="color-bar mr"></div>

            <div className="contact-d mr">
              <p className='clm-c'><b>Phones : </b><span>+91-11-26802711 , +91-9818255252</span></p>
              <p><b>Email : </b><a href="mailto:sales@berkeleypetrochemicals.com">sales@berkeleypetrochemicals.com</a></p>
            </div>
          </div>

          <div className="logo-area-f">
            <a href="https://www.berkeleypetrochemicals.com/" className='mr-b'>
              <img src="images/logo.png" className='wmr-r ' alt="logo" />
            </a>

            <a href="https://www.lelubricants.com/">
              <img src="images/le-logo.png" alt="logo" />
            </a>
          </div>
        </div>

      </footer>
      <div className="main">
        <a href="https://www.youtube.com/user/ReliabilitySource">
          <img src="images/icons/youtube.png" className='social-icon' alt="youtube" />
        </a>
        <a href="https://www.linkedin.com/company/berkeleypetrochemical-lubricationengineers-lubricants-easybar/">
          <img src="images/icons/linkedin.png" className='social-icon social-icon-2' alt="youtube" />
        </a>
      </div>
      <div className="bottomBar">
        <span>Copyright © {year} : All Rights Reserved </span> 

        {/* <span >website developed by : <a href="https://www.linkedin.com/in/harshkhanagwal/"> Harsh khanagwal</a></span> */}
      </div>
    </>
  )
}

export default Footer