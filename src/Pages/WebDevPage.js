import React from 'react'
import Header from '../Component/head';
import Footer from '../Component/Foot';
import WebDev from '../Component/Services/WebDev';
const WebDevPage = () => {
  return (
   <div >
    <div className='header'>
   <Header/>
   </div>
   <WebDev/>
   <Footer/>
   </div>
  )
}

export default WebDevPage
