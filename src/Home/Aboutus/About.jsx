import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Story() {
    useEffect (() => {
    Aos.init ();
    }, [])
  return (
    <>
    <div className='justify-center mx-auto pb-10'>
        <div className='duration-300 md:pb-10 text-black mx-auto md:text-center md:px-10 px-5 max-w-screen-xl'>
            <div className='border-b md:pb-20 pb-10'>
                <div className='mx-auto pt-5'>
                    <div className="md:pt-10 justify-between mx-auto">
                        <div className='max-w-screen-'>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:text-center mx-auto pt-5 md:text-base leading-normal text-sm text-[#6D7380] max-w-screen-lg'>
                                Strategic Compliance Solutions (SCS) MENA is a specialized compliance consultancy providing expert advisory services in Crypto Compliance, Sanctions, AML, Trade Finance and Export Controls Compliance, Investigations, Remediation Projects and Financial Crime compliance. With extensive experience across UAE, UK, and Global Financial Markets, we support Financial Institutions, VASPs, Fintech firms, and corporates in navigating complex regulatory landscapes.
                                <br /><br />Our services include Compliance Framework development and implementation, Regulatory licensing support, Investigations, and Risk management solutions, ensuring businesses remain compliant and resilient in an evolving regulatory environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>

  )
}

export default Story 
