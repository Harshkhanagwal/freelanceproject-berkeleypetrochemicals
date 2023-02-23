import React from 'react'
import './style/home.css'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Career from './pages/Career'
import { Route } from 'react-router-dom'



import Header from './components/Header';
import Footer from './components/footer';
import Nav from './components/Nav'
import Lubricant from './pages/Lubricants'
const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Nav/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/career' element={<Career />} />
                    <Route path='/lubricants' element={<Lubricant />} />

                    <Route path='/*' element={<h1 className='main'>ERROR</h1>} />

                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App