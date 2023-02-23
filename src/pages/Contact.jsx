import React from 'react'
import '../style/contact.css'
import Herosec from '../components/Herosec'

const Contact = () => {
  return (
    <>
      <Herosec txt={'Contact Us'} size={'smal-h'} />

      <div className="cnt-sec main">
        <div className="cnt-mn container2">
          <div className="txt-bx txt-2">
            <div className="heading-ar">
              <h1 className="heading-txt">
                Berkeley Petrochemical LLP
              </h1>
              <div className="color-bar mr-t"></div>

              <div className="cnt-detail-ar sml-12">
                <b>


                    <p>
                      Plot No. 619/87, <br />
                      Near Primary School, Chhatarpur <br />
                      New Delhi-110074
                    </p>
                </b>
                {/* <a className="dg-link" href="https://maps.google.com/?q=28.500225,77.181053">click here for google map</a> */}
                <div className='mr-t30 '>
                  <div className="ph-bx mr-b10"><b>phone : </b> <font> +91-11-26802711, +91-9818255252</font><br /></div>
                  <b>Email : </b><a href="mailto:sales@berkeleypetrochemicals.com">sales@berkeleypetrochemicals.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="img-bx-5">
            <img src="images/contact-img.png" alt="about-img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact