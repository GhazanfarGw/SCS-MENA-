import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function About() {
    useEffect (() => {
    Aos.init ();
    }, [])
  return (
    <>
    <div className='duration-300 md:pb-10 md:pt-20 lg:pt-10 text-black mx-auto md:text-center text-left'>
        <div className='border-b pb-10 border-[#136690] border-opacity-30 mx-auto md:px-10 px-5 max-w-screen-xl'>
            <div className='mx-auto pt-5'>
                <div className="pt-10 justify-center md:text-center text-left mx-auto">
                    <div className='md:mx-auto justify-center md:text-center text-left max-w-screen-md'>
                        <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:text-center text-left lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B]'>
                            Trusted experts in Crypto Compliance, Aml, sanctions and risk management
                        </h1>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:text-center text-left pt-5 md:text-base leading-normal text-sm text-[#6D7380]'>
                            Strategic Compliance Solutions (SCS) MENA is a specialized compliance consultancy providing expert advisory services in Crypto Compliance, Sanctions, AML, Trade Finance and Export Controls Compliance, Investigations, Remediation Projects and Financial Crime compliance. With extensive experience across UAE, UK, and Global Financial Markets, we support Financial Institutions, VASPs, Fintech firms, and corporates in navigating complex regulatory landscapes.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:text-center text-left pt-5 text-sm text-[#6D7380]'>
                            Our services include Compliance Framework development and implementation, Regulatory licensing support, Investigations, and Risk management solutions, ensuring businesses remain compliant and resilient in an evolving regulatory environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About 
