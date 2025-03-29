import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Preloader from "./Home/Preload";
import Home from "./Home/index";
import About from "./Home/Aboutus/Index"
import Cryptocompliance from "./Services/Crypto Compliance/Index"
import Cryptoinvestigation from "./Services/Crypto Investigation Service & Certified Chainalysis Reactor/Index"
import Deficompliance from "./Services/Blockchain, DLT, and DeFi Compliance/Index"
import Proceduresimplementation from "./Services/Compliance Procedures Implementation/Index"
import Dnfbp from "./Services/DNFBP AML Compliance Advisory & Training/Index"
import Laundering from "./Services/Trade Sanctions & Money Laundering Compliance/Index"
import Sme from "./Services/SME Sanctions Advisory and Investigation Services/Index"
import Chairman from "./Services/Advisory Service to Chairman/Index"
import Headof from "./Services/Interim or Part-Time Support for Head of Compliance and MLRO Roles/Index"
import Remediation from "./Services/Remediation Projects/Index"
import Contact from "./Home/Contact"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/about-us" element={ <About/> } />
          <Route path="/crypto-compliance" element={ <Cryptocompliance/> } />
          <Route path="/crypto-investigation-service" element={ <Cryptoinvestigation/> } />
          <Route path="/defi-compliance" element={ <Deficompliance/> } />
          <Route path="/compliance-procedures-implementation" element={ <Proceduresimplementation/> } />
          <Route path="/dnfbp-aml-compliance-advisory" element={ <Dnfbp/> } />
          <Route path="/trade-sanctions-money-laundering-compliance" element={ <Laundering/> } />
          <Route path="/sme-sanctions-advisory" element={ <Sme/> } />
          <Route path="/advisory-service-chairman" element={ <Chairman/> } />
          <Route path="/head-of-compliance" element={ <Headof/> } />
          <Route path="/remediation" element={ <Remediation/> } />
          <Route path="/contact-us" element={ <Contact/> } />
        </Routes>
      )}
    </>

  )
}

export default App