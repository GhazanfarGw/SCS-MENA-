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
                        Crypto Investigation Service & Certified Chainalysis Reactor
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        SCS MENA specializes in crypto investigations, leveraging advanced blockchain analytics tools such as Chainalysis Reactor to track and analyze suspicious transactions.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        We support law enforcement agencies, financial institutions, and VASPs in tracing illicit funds, identifying high-risk wallets, and mitigating crypto-related financial crime risks.
                    </p>
                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-black md:text-4xl text-2xl justify-center pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000] pt-4 max-w-screen-lg'>
                        Certified blockchain forensic analysis to trace illicit transactions and protect clients from fraud and money laundering.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;