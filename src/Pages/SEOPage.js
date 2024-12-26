import React from 'react'
import SEO from '../Component/Services/SEO'
import Header from '../Component/head'
import Footer from '../Component/Foot';

const SEOPage = () => {
  return (
   <div>
<div className='header'>
    <Header />
    </div>
   <SEO />
  
   <Footer />
   </div>
  )
}

export default SEOPage
