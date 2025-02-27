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
                    <h1 data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="400" className='text-[#A01F1A] md:text-4xl text-2xl justify-center pt-5'>
                        Blockchain, DLT, and DeFi Compliance
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        SCS MENA offers specialized advisory on Blockchain, Distributed Ledger Technology (DLT), and Decentralized Finance (DeFi) compliance.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        We help businesses navigate the evolving regulatory landscape, ensuring compliance with smart contract audits, on-chain risk assessments, and DeFi AML solutions.
                    </p>
                    <h1 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='text-black md:text-4xl text-2xl justify-center pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Providing compliance frameworks for blockchain, decentralized finance (DeFi), and distributed ledger technology (DLT) platforms.                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;

