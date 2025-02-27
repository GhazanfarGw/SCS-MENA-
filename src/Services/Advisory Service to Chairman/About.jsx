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
                        Strategic consulting for executives on compliance, governance, and risk management to ensure corporate integrity.
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        We offer strategic compliance advisory to Chairmen, CEOs, and Board members, helping them navigate regulatory risks, governance frameworks, and financial crime compliance.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Our expertise ensures that financial institutions align with local and global regulatory expectations, fostering a culture of compliance at the highest levels.
                    </p>
                    <h1 data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className='text-black md:text-4xl text-2xl justify-center pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Strategic consulting for executives on compliance, governance, and risk management to ensure corporate integrity.
                    </p>
                </div>
            </div>

        </div>
        </>
    );
}

export default Dashboard;