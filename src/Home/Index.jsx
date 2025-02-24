import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import About from "./About";
import Business from './Business';
import Discover from './Discover';

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <About/>
    <Business/>
    <Discover/>
    <Footer/>
    </>
  )
}

export default Index