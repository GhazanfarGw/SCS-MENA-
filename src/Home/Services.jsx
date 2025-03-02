import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const Services = () => {
    useEffect (() => {
        Aos.init ();
      }, [])

    return (
        <div id='services' className='md:py-24 pt-20 md:pt-0 text-black border-t border-[#A01F1A] border-opacity-25 justify-center mx-auto max-w-screen-xl text-center'>
            <div className='mx-auto justify-center px-3 md:px-5'>
                <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                  <h3 className="text-[#A01F1A] font-semibold mb-2 md:text-2xl text-lg md:mt-20">
                    Services
                  </h3>
                  <span className='second md:text-6xl font-light font-sans text-3xl text-[#000000]'>
                    Comprehensive crypto compliance<br className="hidden md:block lg:block"/>& regulatory advisory services
                  </span>
                </div>
                <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-2  mx-auto justify-center lg:gap-5 md:pt-20 pt-10'>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        Crypto Compliance
                      </h1>
                      <p className='text-base pt-3'>
                        Sscmena provides end-to-end crypto...
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/crypto-compliance">Read more..</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        Crypto Investigations
                      </h1>
                      <p className='text-base pt-3'>
                        Sscmena specializes in crypto investigations...
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/crypto-investigation-service">Read more..</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        Blockchain & DeFi Compliance
                      </h1>
                      <p className='text-base pt-3'>
                        Sscmena offers specialized advisory on Blockchain...
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/defi-compliance">Read more..</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        Compliance Procedures
                      </h1>
                      <p className='text-base pt-3'>
                        We help VASPs and other companies implement...
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/compliance-procedures-implementation">Read more..</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        AML Advisory & Training
                      </h1>
                      <p className='text-base pt-3'>
                        We provide AML advisory and training services...
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/dnfbp-aml-compliance-advisory">Read more..</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        Sanctions & Money Laundering
                      </h1>
                      <p className='text-base pt-3'>
                        Our team provides comprehensive advisory...
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/trade-sanctions-money-laundering-compliance">Read more..</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        Sanctions Advisory
                      </h1>
                      <p className='text-base pt-3'>
                        As a Subject Matter Expert (SME) in Sanctions....
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/sme-sanctions-advisory">Read more..</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        Board & CEO Advisory
                      </h1>
                      <p className='text-base pt-3'>
                        We offer strategic compliance advisory...
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/advisory-service-chairman">Read more..</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        MLRO & Compliance Support
                      </h1>
                      <p className='text-base pt-3'>
                        SCS MENA provides end-to-end crypto...
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/head-of-compliance">Read more..</a>
                      </div>
                    </div>
                  </div>
                  <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:pb-10 pb-4 max-w-md bg-[#fff] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50'>
                    <img className="rounded-2xl" src="/65cb43fecf24523357feade2_panel-landing-01-min.png" alt="" />
                    <div className="px-5 py-10 hover:scale-105 duration-200">
                      <h1 className='text-xl font-semibold justify-center pt-5 md:pt-10'>
                        Remediation Projects
                      </h1>
                      <p className='text-base pt-3'>
                        SCS MENA supports financial institutions....
                      </p>
                      <div className="text-base shadow-lg fourth mx-auto rounded-full mt-5 w-48 hover:scale-105 hover:px-4 bg-[#fff] h-10 justify-center text-center flex items-center text-[#A01F1A] font-semibold">
                        <a href="/remediation">Read more..</a>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Services;