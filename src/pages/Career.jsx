import React from 'react'
import '../style/career.css'
import Herosec from '../components/Herosec'

const Career = () => {
  return (
    <>
      <Herosec txt="Careers at Berkeley Petrochemical LLP"/>
      <div className="cnt-sec main">
        <div className="cnt-mn container2">
          <div className="txt-bx w100">
            <div className="heading-ar">
              <h1 className="heading-txt">
                Our People Make It Happen
              </h1>
              <div className="color-bar mr-t"></div>

              <div className="cnt-detail-ar sml-12">

                <p>
                  Berkeley prides itself on operational excellence and expertise, and it takes great people to make that happen. Careers at Berkeley offer competitive compensation and an opportunity to work in a stable, fast-paced, goal-oriented environment. We provide up-to-date training and the tools necessary to do the job right every time.
                </p>


                <div className='mr-t30 '>
                  <b>Email your resume: </b><a href="mailto:careers@berkeleypetrochemicals.com">careers@berkeleypetrochemicals.com</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Career