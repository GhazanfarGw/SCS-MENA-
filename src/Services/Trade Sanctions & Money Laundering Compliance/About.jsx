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
                        Trade Sanctions & Money Laundering Compliance, Including Export Control & Dual-Use Goods
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-5 md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                        Our team provides comprehensive advisory services on trade-based money laundering (TBML), export controls, and dual-use goods compliance.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-2 md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                        We assist firms in identifying trade sanctions risks, conducting due diligence, and implementing controls to prevent regulatory breaches.
                    </p>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-5 lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B] max-w-screen-lg'>
                        Client Outcomes/Benefits
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-2 md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                        Guidance on Trade Sanctions, Export Controls, and Dual-Use Goods compliance to prevent Financial Crime Risks.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;