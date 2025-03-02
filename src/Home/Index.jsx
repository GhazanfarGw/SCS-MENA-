import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import About from "./About";
import Services from './Services';
import Umair from "./Umair"
import Discover from './Discover';
import Whatsnumber from './Wtsappfooter';

function Index() {
  return (
    <>
    <Header/>
    <Whatsnumber/>
    <Dashboard/>
    <About/>
    <Services/>
    <Umair/>
    <Discover/>
    <Footer/>
    </>
  )
}

export default Index