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
                        Strategic consulting for executives on compliance, governance, and risk management to ensure corporate integrity.
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='pt-5 md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                        We offer strategic compliance advisory to Chairmen, CEOs, and Board members, helping them navigate regulatory risks, governance frameworks, and financial crime compliance.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className='pt-2 md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                        Our expertise ensures that financial institutions align with local and global regulatory expectations, fostering a culture of compliance at the highest levels.
                    </p>
                    <h1 data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className='pt-5 lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B] max-w-screen-lg'>
                        Client Outcomes/Benefits
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className='md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                        Strategic consulting for executives on compliance, governance, and risk management to ensure corporate integrity.
                    </p>
                </div>
            </div>

        </div>
        </>
    );
}

export default Dashboard;