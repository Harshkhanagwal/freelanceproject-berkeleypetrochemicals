import React from 'react'
import '../style/header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = () => {

  const [status, setStatus] = useState(false)
  const [dropDown, setDropDown] = useState(false)
  const [rel, setRel] = useState(false)
  const [appli, setAppli] = useState(false)
  const [industriesStatus, setIndustries] = useState(false)
  const [reso, setReso] = useState(false)
  const [trn, setTrn] = useState(false)

  




  const lubricants = [
    {
      link: 'https://www.lelubricants.com/lubricants/aerosol-lubricants/',
      txt: 'Aerosol Lubricants'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/compressor-lubricants/',
      txt: 'Compressor Lubricants'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/engine-oils/',
      txt: 'Engine Oils'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/environmentally-acceptable-lubricants/',
      txt: 'Environmentally Acceptable Lubricants'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/food-grade-lubricants/',
      txt: 'Food Grade Lubricants'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/fuel-treatments/',
      txt: 'Fuel Treatments'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/solid-bar-lubricants/',
      txt: 'Solid Bar Lubricants'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/gear-oils/',
      txt: 'Gear Oils'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/hydraulic-oils/',
      txt: 'Hydraulic Oils'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/industrial-greases/',
      txt: 'Industrial Greases'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/industrial-oils/',
      txt: 'Industrial Oils'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/open-gear-lubricants/',
      txt: 'Open Gear Lubricants'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/oven-chain-lubricants/',
      txt: 'Oven Chain Lubricants'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/synthetic-lubricants/',
      txt: 'Synthetic Lubricants'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/transmission-fluids/',
      txt: 'Transmission Fluids'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/turbine-oils/',
      txt: 'Turbine Oils'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/wire-rope-lubricants/',
      txt: 'Wire Rope Lubricants'
    },
    {
      link: 'https://products.lelubricants.com/category/additional-lubrication-products?_ga=2.223792411.1608915067.1673539511-227778950.1673539510',
      txt: 'Additional Products'
    },
    {
      link: 'https://products.lelubricants.com/category/complete-product-grid-2?_ga=2.152497209.1608915067.1673539511-227778950.1673539510',
      txt: 'Complete Product Grid'
    },
  ]

  const reliabilitySolutions = [
    {
      link: 'https://www.lelubricants.com/reliability-solutions/automatic-lubrication-systems/',
      txt: 'Automatic Lubrication Systems'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/lubricant-storage/',
      txt: 'Bulk Lubricant storage'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/clear-grease-guns/',
      txt: 'Clear Grease Guns'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/desiccant-breathers/',
      txt: 'Desiccant Breathers'
    },
    {
      link: 'https://www.lelubricants.com/lubricants/',
      txt: 'Enhanced Lubricants'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/equipment-reliability-assessment/',
      txt: 'Equipment Reliability Assessment'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/fluid-handling-adapter-kits/',
      txt: 'Fluid Handling Adapter Kits'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/industrial-cleaner/',
      txt: 'Greentastic Industrial Cleaner'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/lubricant-identification/',
      txt: 'Lubricant Identification'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/oil-analysis/',
      txt: 'Oil Analysis'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/sight-glasses/',
      txt: 'Oil Sight Glasses'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/oil-filtration/',
      txt: 'Oil Filtration'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/oil-storage-containers/',
      txt: 'Oil Storage Containers'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/implementation/',
      txt: 'Recommendation, Implementation and Support'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/single-point-lubricators/',
      txt: 'Single Point Lubricators'
    },
    {
      link: 'https://www.lelubricants.com/reliability-solutions/viper-wire-rope-lubricator/',
      txt: 'Wire Rope Lubricator'
    },
  ]

  const applications = [
    {
      link: 'https://www.lelubricants.com/applications/compressor-lubrication/',
      txt: 'Compressor Lubrication'
    },
    {
      link: 'https://www.lelubricants.com/applications/electric-motor-lubrication/',
      txt: 'Electric Motor Lubrication'
    },
    {
      link: 'https://www.lelubricants.com/applications/gearbox-lubrication/',
      txt: 'Gearbox Lubrication'
    },
    {
      link: 'https://www.lelubricants.com/applications/hydraulic-lubrication/',
      txt: 'Hydraulic Lubrication'
    },
    {
      link: 'https://www.lelubricants.com/applications/open-gear-lubrication/',
      txt: 'Open Gear Lubrication'
    },
    {
      link: 'https://www.lelubricants.com/applications/pellet-mill-lubrication/',
      txt: 'Pellet Mill Lubrication'
    },
    {
      link: 'https://www.lelubricants.com/applications/wire-rope-lubrication/',
      txt: 'Wire Rope Lubrication'
    }
  ]

  const industries = [
    {
      link: 'https://www.lelubricants.com/industries/agriculture/',
      txt: 'Agriculture'
    },
    {
      link: 'https://www.lelubricants.com/industries/cement-concrete/',
      txt: 'Cement & Concrete'
    },
    {
      link: 'https://www.lelubricants.com/industries/chemicals/',
      txt: 'Chemicals'
    },
    {
      link: 'https://www.lelubricants.com/industries/construction/',
      txt: 'Construction'
    },
    {
      link: 'https://www.lelubricants.com/industries/food-beverage/',
      txt: 'Food & Beverage'
    },
    {
      link: 'https://www.lelubricants.com/industries/industrial-equipment/',
      txt: 'Industrial Equipment'
    },
    {
      link: 'https://www.lelubricants.com/industries/lumber-wood/',
      txt: 'Lumber & Wood'
    },
    {
      link: 'https://www.lelubricants.com/industries/mining/',
      txt: 'Mining'
    },
    {
      link: 'https://www.lelubricants.com/industries/oil-gas/',
      txt: 'Oil & Gas'
    }, 
    {
      link: 'https://www.lelubricants.com/industries/paper-pulp/',
      txt: 'Paper Products'
    },
    {
      link: 'https://www.lelubricants.com/industries/power-generation/',
      txt: 'Power Generation'
    },
    {
      link: 'https://www.lelubricants.com/industries/refuse-waste/',
      txt: 'Refuse & Waste Systems'
    },
    {
      link: 'https://www.lelubricants.com/industries/rubber-plastics/',
      txt: 'Rubber & Plastics'
    },
    {
      link: 'https://www.lelubricants.com/industries/sand-gravel/',
      txt: 'Sand & Gravel'
    },
    {
      link: 'https://www.lelubricants.com/industries/steel-primary-metals/',
      txt: 'Steel & Primary Metals'
    },
    {
      link: 'https://www.lelubricants.com/industries/transportation/',
      txt: 'Transportation & Fleet'
    },
    {
      link: 'https://www.lelubricants.com/industries/water-wastewater/',
      txt: 'Water & Wastewater'
    },
  ]

  const resources = [
    {
      link: 'https://www.lelubricants.com/about-us/certifications/',
      txt: 'Certifications'
    },
    {
      link: 'https://www.lelubricants.com/ebooks/ebook-understanding-food-beverage-lubricants/',
      txt: 'eBooks'
    },
    {
      link: 'https://www.lelubricants.com/about-us/newsroom/',
      txt: 'Newsroom'
    },
    {
      link: 'https://www.lelubricants.com/about-us/testimonials/',
      txt: 'Testimonials'
    },
    {
      link: 'https://www.lelubricants.com/about-us/techni-tips/',
      txt: 'Techni-Tips'
    },
    {
      link: 'https://www.lelubricants.com/about-us/sways/',
      txt: 'Sways'
    },
  ]

  const training = [
    {
      link: 'https://www.lelubricants.com/education-training/education-training-cls/',
      txt: 'CLS'
    },
    {
      link: 'https://www.lelubricants.com/education-training/lubrication-reliability-fundamentals/',
      txt: 'LRF'
    },
    {
      link: 'https://www.lelubricants.com/education-training/education-training-mlt1/',
      txt: 'MLT I'
    },
    {
      link: 'https://www.lelubricants.com/education-training/education-training-oma1/',
      txt: 'OMA I'
    }
  ]
  return (
    <>
      <nav>
        <div className="nav-elems">
          <div className="nav-elements"><ul><Link className='n-drc' to={"/"}>Home</Link></ul></div>
          <div className="nav-elements"><ul><Link className='n-drc' to={"about"}>About Us</Link></ul></div>
          <div className="nav-elements"><ul>Lubricants
            <li>
              <div className="drp-bx">
                {
                  lubricants.map((elm) => (
                    <a className='dr-link' href={elm.link}>
                      <div className='dr-link-inr'>
                        <span>{elm.txt}</span>
                      </div>
                    </a>

                  )
                  )
                }
              </div>
            </li>
          </ul></div>

          <div className="nav-elements"><ul>Reliability Solutions
            <li>
              <div className="drp-bx">
                {
                  reliabilitySolutions.map((elm) => (
                    <a className='dr-link' href={elm.link}>
                      <div className='dr-link-inr'>
                        <span>{elm.txt}</span>
                      </div>
                    </a>
                  )
                  )
                }
              </div>
            </li>
          </ul></div>
          <div className="nav-elements"><ul>Application
            <li>
              <div className="drp-bx">
                {
                  applications.map((elm) => (
                    <a className='dr-link' href={elm.link}>
                      <div className='dr-link-inr'>
                        <span>{elm.txt}</span>
                      </div>
                    </a>
                  )
                  )
                }
              </div>
            </li>
          </ul></div>
          <div className="nav-elements"><ul>Industries
            <li>
              <div className="drp-bx">
                {
                  industries.map((elm) => (
                    <a className='dr-link' href={elm.link}>
                      <div className='dr-link-inr'>
                        <span>{elm.txt}</span>
                      </div>
                    </a>
                  )
                  )
                }
              </div>
            </li>
          </ul></div>
          <div className="nav-elements"><ul>Resources

            <li>
              <div className="drp-bx-s">
                {
                  resources.map((elm) => (
                    <a className='dr-link' href={elm.link}>
                      <div className='dr-link-inr'>
                        <span>{elm.txt}</span>
                      </div>
                    </a>
                  )
                  )
                }
              </div>
            </li>
          </ul></div>
          <div className="nav-elements"><ul>Training
            <li>
              <div className="drp-bx-s">
                {
                  training.map((elm) => (
                    <a className='dr-link' href={elm.link}>
                      <div className='dr-link-inr'>
                        <span>{elm.txt}</span>
                      </div>
                    </a>
                  )
                  )
                }
              </div>
            </li>
          </ul></div>
          <div className="nav-elements"><ul><a className='n-drc' href="https://www.lelubricants.com/about-us/proprietary-additives/"> Proprietary Additives</a></ul></div>
          <div className="nav-elements"><ul><Link className='n-drc' to={"career"}>Careers</Link></ul></div>
          <div className="nav-elements"><ul><Link className='n-drc' to={"contact"}>Contact Us</Link></ul></div>
        </div>
      </nav>

      <div className="navBar main">
        <div className="navBar-elems container">
          <div className="nav">
            <Link className='n-drc' to={"/"}><span className="nav-txt">Home</span></Link>
            <Link className='n-drc' to={"about"}><span className="nav-txt"> About Us</span></Link>
            <Link className='n-drc hide-m' to={"career"}><span className="nav-txt"> Career</span></Link>
            <Link className='n-drc hide-m' to={"contact"}><span className="nav-txt"> Contact</span></Link>

          </div>
          <div className="hamMenu-ar" onClick={() => setStatus(!status)}>
            <div className={status === true ? 'menuBar m-bar t-rotate' : 'menuBar t-bar'}></div>
            <div className={status === true ? 'menuBar m-bar-hide' : 'menuBar m-bar'}></div>
            <div className={status === true ? 'menuBar m-bar b-rotate' : 'menuBar b-bar'}></div>
          </div>
        </div>
      </div>

      <div className="hidden">

        <div className={status === true ? 'fulllist show' : 'fulllist hide'}>
          <div className="nav-links" onClick={() => setStatus(!status)}>
            <Link className='n-link' to={"/"}><span className='n-link-txt mr-s'>Home</span> </Link>
          </div>
          <div className="nav-links" >
            <Link className='n-link' to={"about"} onClick={() => setStatus(!status)}><span className='n-link-txt mr-s'>About</span> </Link>
          </div>

          <div className="nav-links drp-dn" onClick={() => setDropDown(!dropDown)} >
            <span className='n-link-txt mr-s'>Lubricants</span> <b> <span className='mr-s'>{dropDown === true ? '-' : '+'}</span></b>
          </div>
          <div className={dropDown === true ? 'show-drop-dwon drop-down-box-click' : 'hide-drop-dwon'}>
            {
              lubricants.map((elm) => (
                <a className='n-link' href={elm.link}>
                  <div className='n-link-inr'>
                    <span className='mr-s2'>{elm.txt}</span>
                  </div>
                </a>
              )
              )
            }
          </div>

          <div className="nav-links drp-dn" onClick={() => setRel(!rel)}>
            <span className='n-link-txt mr-s'>Reliability solutions</span> <b> <span className='mr-s'>{rel === true ? '-' : '+'}</span></b>
          </div>
          <div className={rel === true ? 'show-rel drop-down-box-click' : 'hide-rel'}>
            {
              reliabilitySolutions.map((elm) => (
                <a className='n-link' href={elm.link}>
                  <div className='n-link-inr'>
                    <span className='mr-s2'>{elm.txt}</span>
                  </div>
                </a>
              )
              )
            }
          </div>

          <div className="nav-links drp-dn" onClick={() => setAppli(!appli)}>
            <span className='n-link-txt mr-s'>Application</span> <b> <span className='mr-s'>{appli === true ? '-' : '+'}</span></b>
          </div>
          <div className={appli === true ? 'show-rel drop-down-box-click' : 'hide-rel'}>
            {
              reliabilitySolutions.map((elm) => (
                <a className='n-link' href={elm.link}>
                  <div className='n-link-inr'>
                    <span className='mr-s2'>{elm.txt}</span>
                  </div>
                </a>
              )
              )
            }
          </div>
         
          <div className="nav-links drp-dn" onClick={() => setIndustries(!industriesStatus)}>
            <span className='n-link-txt mr-s'>Industries</span> <b> <span className='mr-s'>{industriesStatus === true ? '-' : '+'}</span></b>
          </div>
          <div className={industriesStatus === true ? 'show-rel drop-down-box-click' : 'hide-rel'}>
            {
              industries.map((elm) => (
                <a className='n-link' href={elm.link}>
                  <div className='n-link-inr'>
                    <span className='mr-s2'>{elm.txt}</span>
                  </div>
                </a>
              )
              )
            }
          </div>

          <div className="nav-links drp-dn" onClick={() => setReso(!reso)}>
            <span className='n-link-txt mr-s'>Resources</span> <b> <span className='mr-s'>{reso === true ? '-' : '+'}</span></b>
          </div>
          <div className={reso === true ? 'show-rel drop-down-box-click' : 'hide-rel'}>
            {
              resources.map((elm) => (
                <a className='n-link' href={elm.link}>
                  <div className='n-link-inr'>
                    <span className='mr-s2'>{elm.txt}</span>
                  </div>
                </a>
              )
              )
            }
          </div>

          <div className="nav-links drp-dn" onClick={() => setTrn(!trn)}>
            <span className='n-link-txt mr-s'>Training</span> <b> <span className='mr-s'>{trn === true ? '-' : '+'}</span></b>
          </div>
          <div className={trn === true ? 'show-rel drop-down-box-click' : 'hide-rel'}>
            {
              training.map((elm) => (
                <a className='n-link' href={elm.link}>
                  <div className='n-link-inr'>
                    <span className='mr-s2'>{elm.txt}</span>
                  </div>
                </a>
              )
              )
            }
          </div>
            
          <div className="nav-links" >
            <Link className='n-link' to={"/career"} onClick={() => setStatus(!status)}><span className='n-link-txt mr-s'>careers</span> </Link>
          </div>
          <div className="nav-links">
            <Link className='n-link' to={"/contact"}  onClick={() => setStatus(!status)}><span className='n-link-txt mr-s'>Contact Us</span> </Link>
          </div>
          

        </div>
      </div>

    </>
  )
}

export default Nav