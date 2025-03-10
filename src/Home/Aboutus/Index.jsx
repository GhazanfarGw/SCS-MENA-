import React from 'react'
import Dashboard from './Dashboard';
import About from './About';
import Team from './Team';
import Partner from "./Partner"
import Header from "../header";
import Footer from "../Footer";
import Whatsnumber from '../Wtsappfooter';

function Index() {
  return (
    <>
    <Header/>
    <Whatsnumber/>
    <Dashboard/>
    <Partner/>
    <About/>
    <Team/>
    <Footer/>
    </>
  )
}

export default Index