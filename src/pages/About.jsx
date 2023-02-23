import React from 'react'
import Herosec from '../components/Herosec'
import '../style/about.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <Herosec txt={'About us'}/>

      <div className="cnt-sec main">
        <div className="cnt-mn container">
          <div className="txt-bx">
            <div>
              <b> <a href='https://www.berkeleypetrochemicals.com' className='tp-link'>Berkeley Petrochemical LLP</a> </b>
              was founded to cater to the needs of Indian industrial markets in the field of industrial maintenance products. At Berkeley Petrochemical LLP we are proud to be industrial visionaries.

              <br />
              <br />

              The team at <b> <a href='https://www.berkeleypetrochemicals.com' className='tp-link'>Berkeley Petrochemical LLP</a></b> is very familiar with servicing customers needs at very short notice. Whilst the quality of the <Link to="/lubricants" className='tp-link-l'>product</Link> is of paramount importance, it is of little value if the back up service of supply and technical support is lacking. <a href="https://www.berkeleypetrochemicals.com/">Berkeley</a> firmly believes the service industry has to position itself to service customer requirements 24 hrs a day. Berkeley's intention is to “be there” when the customer calls at anytime around the clock.

              <br />
              <br />

              <b> <a href='https://www.berkeleypetrochemicals.com' className='tp-link'> Berkeley petrochemical LLP</a></b> is proud to represent the <a href="https://www.lelubricants.com/">LE</a> brand in INDIA.

              <br /><br />

              <b>LE</b> {"("} <b> <a className='tp-link-r' href="https://www.lelubricants.com/">Lubrication Engineers Inc.</a> </b>{")"} is a worldwide leader in lubrication solutions and manufacturer of the renowned <a href="https://www.lelubricants.com/"> LE</a> brand of <Link to="/lubricants" className='tp-link-l'>products.</Link> 

              <br />
              <br />

              We are committed to provide the best industrial solutions and technical support, including conducting lube surveys, helping with changeovers, monitoring performance, and more. You can be assured of our ongoing support for your <Link to="/lubricants" className='tp-link-l'>specialty lubricant</Link> needs.

              <br /><br />

              <div className='l-mr'>
                <span>
                ➤ <a href='https://www.berkeleypetrochemicals.com' className='tp-link'> Berkeley petrochemical LLP</a> have developed a strong network of channel partners across the country to cater to the requirements of industrial customers. To support our channel partners, we have a team of qualified and trained engineers managed by committed managers at various locations in the region.
                </span>
                  <br />
                  <br />

                <span>
                ➤ This highly experienced group of channel partners, markets & sells <a href='https://www.lelubricants.com/'>LE products</a> within their own territories with the constant support of <a href='https://www.berkeleypetrochemicals.com' className='tp-link'> Berkeley petrochemical LLP</a> and <a href="https://www.lelubricants.com/"> Lubrication Engineers</a>.
                </span>
                  <br />
                  <br />
                <span>
                ➤ This successful network is constantly expanding, with new channel partners continually accepting the “LE Opportunity."
                </span>
              </div>

            </div>
          </div>

          <div className="img-bx">
            <img src="images/about-img.png" alt="about-img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About