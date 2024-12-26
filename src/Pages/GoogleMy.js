import React from 'react'
import GoogleMyBusiness from '../Component/Services/Google'
import Head from '../Component/head'
import Footer from '../Component/Foot';

const GoogleMy = () => {
  return (
    <div>
      <div className='header'>
        <Head/>
        </div>
        <GoogleMyBusiness/>
        <Footer />
      
    </div>
  )
}

export default GoogleMy
