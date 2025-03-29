import React from 'react';
import Dashboard from './Dashboard'
import About from './About'
import Header from './header'
import Footer from './Footer';
import Price from './Price';
import Subr from './Subr';
import Partner from './Exchanges'
import Why from './Business'
import Whatsnumber from './Wtsappfooter';

function index() {
  return (
    <>
        <Header/>
        <Whatsnumber/>
        <Dashboard/>
        <Partner/>
        <Price/>
        <About/>
        <Why/>
        <Subr/>
        <Footer/>
        

    </>
  )
}

export default index