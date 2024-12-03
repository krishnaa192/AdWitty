import React from 'react'
import Header from '../Component/header';
import Body from '../Component/bodypage';
import Footer from '../Component/Foot';
import './page.css';

const HomePage = () => {
  return (
    <div>
      <div className='header'>
        <Header/>
        </div>
        <Body/>
        <Footer/>
      
    </div>
  )
}

export default HomePage
