import React from 'react'
import '../style/herosec.css'

const Herosec = (props) => {
  return (
    <>
        <div className="herosec main">
            <div className="inner-hero">
                <div className="container hero-txt-sec">
                    <span className={`hero-head ${"smal-h"}`}>
                        {props.txt}
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Herosec