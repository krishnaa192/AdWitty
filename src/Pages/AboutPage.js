import React from 'react'
import Header from '../Component/head'
import Footer from '../Component/Foot';
import About from '../Component/About'

const AboutPage = () => {
  return (
    <div>
    <div className='header'>
        <Header/>
        </div>
        <About/>
        <Footer/>
      
    </div>
  )
}

export default AboutPage
