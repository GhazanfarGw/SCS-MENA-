import React from 'react'
import Dashboard from './Dashboard'
import Nav from '../../Home/Header'
import Footer from '../../Home/Footer'

export default function Index() {
  return (
    <>
        <Nav/>
        <div className='md:pt-40 pt-20'>
          <Dashboard/>
        </div>
        <Footer/>

    </>
    
  )
}