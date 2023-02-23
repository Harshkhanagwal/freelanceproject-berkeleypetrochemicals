import React from 'react'
import '../style/ReliabilitySolutions.css'

const Reliability = () => {
    return (
        <>
            <div className="ReliabilitySolutions-section main">
                <div className="innerBx-relSl container">
                    <div className="cnt-txt">
                        <div className="heading-area">
                            <h1 className="heading">Reliability Solutions</h1>
                            <div className="color-bar mr"></div>
                        </div>
                        <div className="txt">
                            <p>
                                Lubrication Engineers is a one-stop shop for lubrication reliability. We will work closely with you to learn about your specific equipment and lubrication needs, and then help you create an effective lubrication reliability program that will provide equipment protection and enhanced profits
                            </p>
                            <a href="https://www.lelubricants.com/reliability-solutions/">

                                <button className='reSlu-bt'>
                                    Find Your Lubricant Solutions
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="card-gr">
                        <div className="gr-card">
                            <img src="images/gr-c-1.png" className="gr-c-imf" alt="img" />
                            <div className="txt-crd">
                                <a href="https://www.lelubricants.com/reliability-solutions/desiccant-breathers/" className='link-crd'>
                                    <div className="txt-crd-inr">
                                        <span className='white-txt'>Desiccant Breathers</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gr-card">
                            <img src="images/gr-c-2.png" className="gr-c-im" alt="img" />
                            <div className="txt-crd">
                                <a href="https://www.lelubricants.com/reliability-solutions/oil-filtration/" className='link-crd'>
                                    <div className="txt-crd-inr">
                                        <span className='white-txt'>Oil Filtration</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gr-card">
                            <img src="images/gr-c-3.png" className="gr-c-im" alt="img" />
                            <div className="txt-crd">
                                <a href="https://www.lelubricants.com/reliability-solutions/oil-storage-containers/" className='link-crd'>
                                    <div className="txt-crd-inr">
                                        <span className='white-txt'>Oil Storage<br />&<br />Transfer Containers</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gr-card">
                            <img src="images/gr-c-4.png" className="gr-c-im" alt="img" />
                            <div className="txt-crd">
                                <a href="https://www.lelubricants.com/reliability-solutions/sight-glasses/" className='link-crd'>
                                    <div className="txt-crd-inr">
                                        <span className='white-txt'>Oil Sight Glasses</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gr-card">
                            <img src="images/gr-c-5.png" className="gr-c-im" alt="img" />
                            <div className="txt-crd">
                                <a href="https://www.lelubricants.com/reliability-solutions/single-point-lubricators/" className='link-crd'>
                                    <div className="txt-crd-inr">
                                        <span className='white-txt'>Single Point Lubricators</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="gr-card mr-sl">
                            <a href="https://www.lelubricants.com/reliability-solutions/" className='link-crd'>
                                <span className='prm-txt'>More<br />Solutions</span>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reliability