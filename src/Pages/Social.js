import React from 'react'
import SocialMedia from '../Component/Services/SocialMedia'
import Header from '../Component/head'
import Footer from '../Component/Foot';

const Social = () => {
  return (
   <div>
    <div className='header'>
    <Header />
    </div>
   <SocialMedia/>
  
   <Footer />
   </div>
  )
}

export default Social
