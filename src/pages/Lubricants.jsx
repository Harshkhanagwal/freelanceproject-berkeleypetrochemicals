import React from 'react'
import '../style/home.css'

const Lubricant = () => {
  return (
    <>

      <div className="lubricant-card-section main" id='lubricants'>
        <div className="lubricant-heading">
          <h1 className="heading">
            Lubricants
          </h1>
          <div className="color-bar"></div>
        </div>

        <div className="cards container">
          <div className="card">
            <div className="card-img"><br />
              <img src="images/cards/gearoil.png" style={{ scale: 1.2 }} alt="" />
            </div>
            <div className="head">
              <a href="https://www.lelubricants.com/lubricants/gear-oils/" className='white-link'>
                <p className='head-txt'>Gear Oil</p>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img"><br />
              <img src="images/cards/engineoil.png" style={{ scale: 1.2 }} alt="" />
            </div>
            <div className="head">
              <a href="https://www.lelubricants.com/lubricants/engine-oils/" className='white-link'>
                <p className='head-txt'>Engine Oil</p>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img"><br />
              <img src="images/cards/foodgradegrease.png" style={{ scale: 1.2 }} alt="" />
            </div>

            <div className="head">
              <a href="https://www.lelubricants.com/lubricants/food-grade-lubricants/" className='white-link'>
                <p className='head-txt'>Food Grade Grease</p>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img"><br />
              <img src="images/cards/grease.png" style={{ scale: 1.2 }} alt="" />
            </div>
            <div className="head">
              <a href="https://www.lelubricants.com/lubricants/industrial-greases/" className='white-link'>
                <p className='head-txt'>Grease</p>
              </a>
            </div>
          </div>

          <div className="card ">
            <div className="card-img"><br />
              <img src="images/cards/wireprooflubricant.png" style={{ scale: 1.2 }} alt="" />
            </div>
            <div className="head">
              <a href="https://www.lelubricants.com/lubricants/wire-rope-lubricants/" className='white-link'>
                <p className='head-txt'>Wire Rope Lubricant</p>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img"><br />
              <img src="images/cards/hydrolicoils.png" style={{ scale: 1.2 }} alt="" />
            </div>
            <div className="head">
              <a href="https://www.lelubricants.com/lubricants/hydraulic-oils/" className='white-link'>
                <p className='head-txt'>Hydraulic Oils</p>
              </a>
            </div>
          </div>
        </div>

        <a href="https://www.lelubricants.com/lubricants/">
          <button className='card-sec-bt'>
            See all Lubricant Categories
          </button>
        </a>
      </div>

    </>
  )
}

export default Lubricant