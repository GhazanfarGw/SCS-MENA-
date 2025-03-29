import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Dashboard() {
    useEffect (() => {
        Aos.init ();
    }, [])

  return (
    <>
        <div className='protecting duration-500 overflow-hidden mx-auto items-center h-[50rem] border-b border-opacity-30'>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='block md:hidden lg:hidden mx-3'>
                <video 
                    class="" 
                    loop autoPlay muted playsinline>
                    <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className='max-w-screen-2xl w-full md:px-10 px-5 mx-auto justify-center'>
                <div className='xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 items-center mx-auto justify-center'>
                    <div className='md:px-10 px-5 pt-5 md:pt-40 mx-auto'>
                        <div className='second text-left'>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='xl:text-6xl lg:text-5xl text-3xl md:text-5xl items-center duration-300 text-[#1A2B6B] font-medium'>
                                Trusted crypto compliance, sanctions & aml experts
                            </h1>
                        </div>
                        <div className='third md:pt-5 pt-5 text-base tracking-wider duration-500 max-w-screen-sm justify-start'>
                            <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#000000] text-left leading-normal'> 
                                SCS MENA provides expert Crypto Compliance, Sanctions, AML, and Risk Management solutions, helping businesses navigate global regulations and stay resilient.
                            </p>
                            <div className="fourth md:mt-10 w-52 hover:scale-105 mt-5 hover:px-4 items-center text-[#fff] md:text-sm text-sm font-light scroll-smooth duration-500 bg-[#0847F7] relative h-10 tracking-wide uppercase justify-center text-center flex rounded-sm">
                                <a 
                                    href="/contact-us">
                                    Learn More
                                </a>
                            </div>

                        </div>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='max-w-screen-lg mx-auto pt-32 hidden xl:block lg:block'>
                        <video 
                            class="justify-center mx-auto max-w-lg items-center" 
                            loop autoPlay muted playsinline>
                            <source src="6650934fbbd024fe465677d6-6655ce32f1982ea3fbdae1e6_Brand Evolution - Smart Contract - Looped-transcode.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard