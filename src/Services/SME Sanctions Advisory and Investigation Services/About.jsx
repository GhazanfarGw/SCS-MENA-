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
                <div className='md:mx-3 px-5 md:px-10 md:pt-40 pt-20 md:pb-32 pb-10'>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#A01F1A] md:text-4xl text-2xl justify-center pt-5'>
                        SME Sanctions Advisory and Investigation Services
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                    As a Subject Matter Expert (SME) in Sanctions, SCS MENA provides specialized advisory and investigative services for OFAC, UN, EU, and UAE sanctions compliance.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        We assist firms with sanctions screening, transaction due diligence, OFAC and OFSI License and internal investigations, ensuring adherence to global regulatory requirements.
                    </p>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-black md:text-4xl text-2xl justify-center pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Specialized guidance for businesses to navigate complex international sanctions and regulatory requirements.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;