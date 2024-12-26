import React from 'react'
import Header from '../Component/head'
import Footer from '../Component/Foot';
import Feedback from '../Component/Feedback'

const FeedbackPage = () => {
  return (
    <div>
       <div className='header'>
        <Header/>
        </div>
        <Feedback/>
        <Footer/>
    </div>
  
  )
}

export default FeedbackPage
