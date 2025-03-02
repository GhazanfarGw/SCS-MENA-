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
                <div className='md:mx-3 px-5 md:px-10 md:pt-40 pt-16 md:pb-32 pb-10'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#A01F1A] md:text-4xl text-2xl justify-center pt-5'>
                        Crypto Compliance
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        SCS MENA provides end-to-end crypto compliance solutions for Virtual Asset Service Providers (VASPs), exchanges, and fintech companies. 
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                    We ensure full compliance with VARA, FSRA, DFSA, and UAE Central Bank regulations, covering risk assessments, AML frameworks, KYC/CDD policies, and transaction monitoring tailored for crypto businesses.
                    </p>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-black md:text-4xl text-2xl justify-center pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Ensuring regulatory compliance for crypto businesses to prevent financial crime and secure operational legitimacy.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;