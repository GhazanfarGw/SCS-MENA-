import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Dashboard = () => {
            useEffect (() => {
                Aos.init ();
              }, [])
    return (
        <>
        <div className='bg-white'>
            <div className='text-black justify-center items-center mx-auto max-w-screen-xl'>
                <div className='px-5 md:px-10 md:pt-20 pt-5 md:pb-32 pb-10'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B] max-w-screen-lg'>
                        Interim or Part-Time Support for Head of Compliance and MLRO Roles
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-5 md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                        SCS MENA provides end-to-end crypto compliance solutions for Virtual Asset Service Providers (VASPs), exchanges, and fintech companies. 
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-2 md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                        We ensure full compliance with VARA, FSRA, DFSA, and UAE Central Bank regulations, covering risk assessments, AML frameworks, KYC/CDD policies, and transaction monitoring tailored for crypto businesses.
                    </p>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-5 lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B] max-w-screen-lg'>
                        Client Outcomes/Benefits
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-2 md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                    Interim or part-time support for Money Laundering Reporting Officer (MLRO) and compliance leadership roles.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;