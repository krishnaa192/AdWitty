import React from 'react'
import Header from '../Component/head'
import Footer from '../Component/Foot';
import Contact from '../Component/Contact'

const ContactPage = () => {
  return (
    <div>
       <div className='header'>
        <Header/>
        </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default ContactPage
