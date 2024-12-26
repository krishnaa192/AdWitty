import React from 'react'

import Head from '../Component/head';
import Body from '../Component/bodypage';
import Footer from '../Component/Foot';
import './page.css';

const HomePage = () => {
  return (

    <div>
      <div className='header'>
        <Head/>
        </div>
        <Body/>
        <Footer/>
      
    </div>
  )
}

export default HomePage
