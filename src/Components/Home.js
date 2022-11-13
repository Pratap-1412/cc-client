import React from 'react'
import { Parallax } from 'react-parallax'
import AboutCoding from './img-rsrc/about-coding.jpg'
import GifButton from './img-rsrc/gif-button.gif'
import Logo from './img-rsrc/logo.png'
import About from './About'
import '../App.css'
import Header from './Header'
import Footer from './Footer'
// import Team from './Team'

export default function Home() {
    return (
        <div>
            <Header/>
            <Parallax strength={300} bgImage={AboutCoding}>
                <div className="content">
                    <div className='logo'>
                        <img src={Logo} height={"100px"} width={"100px"} style={{borderRadius:"50%"}} alt="" />
                        <div className='text-logo'>
                            RRSIMT
                            <h1>Coding Club</h1>
                            <p>Promoting Technology, Creativity and Innovation</p>
                        </div>
                    </div>

                    <a href="#about">
                        <img height={"50px"} src={GifButton} alt="" />
                    </a>
                </div>
            </Parallax>
            <div className='container' id='about'>
                <About />
                {/* <Team/> */}
            </div>
            <Footer/>
        </div>
    )
}
