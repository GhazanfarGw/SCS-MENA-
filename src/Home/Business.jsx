import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Business = () => {
    useEffect (() => {
        Aos.init ();
    }, [])
    return (
        <>
            <div className='justify-center mx-auto items-center duration-300 md:py-16 py-8'>
                <div className='mx-auto justify-center items-center max-w-screen-xl md:px-10 px-5'>
                    <div className='justify-center py-5 gap-16 items-center pb-16'>
                        <div className='mx-auto'>
                            <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-4xl text-2xl md:py-5 py-3 font-medium md:text-center mx-auto text-[#1A2B6B]'>
                            Comprehensive Crypto Compliance <br className="hidden md:block lg:block"/>& Regulatory Advisory Services
                            </h1>
                            <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-5 gap-3 text-[#C3CDD3]'>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="1.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-lg md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Crypto Compliance
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-4 text-[#6D7380] text-sm leading-normal'>
                                        SCS MENA provides end-to-end crypto compliance solutions for Virtual Asset Service Providers (VASPs), exchanges, and fintech companies.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/crypto-compliance">Read more</a>
                                    </span>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="2.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Crypto Investigations
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-3 text-[#6D7380] text-sm leading-normal'>
                                        SCS MENA specializes in crypto investigations, leveraging advanced blockchain analytics tools such as Chainalysis Reactor to track and analyze suspicious transactions.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/crypto-investigation-service">Read more</a>
                                    </span>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="3.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Blockchain & DeFi Compliance
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-3 text-[#6D7380] text-sm leading-normal'>
                                        SCS MENA offers specialized advisory on Blockchain, Distributed Ledger Technology (DLT), and Decentralized Finance (DeFi) compliance.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/defi-compliance">Read more</a>
                                    </span>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="4.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Compliance Procedures
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-3 text-[#6D7380] text-sm leading-normal'>
                                        We help VASPs and other companies implement robust compliance procedures tailored to regulatory requirements.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/compliance-procedures-implementation">Read more</a>
                                    </span>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="5.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        AML Advisory & Training
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-3 text-[#6D7380] text-sm leading-normal'>
                                        We provide AML advisory and training services for Designated Non-Financial Businesses and Professions (DNFBPs), including real estate firms, law firms, and corporate service providers.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/dnfbp-aml-compliance-advisory">Read more</a>
                                    </span>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="6.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Sanctions & Money Laundering
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-3 text-[#6D7380] text-sm leading-normal'>
                                        Our team provides comprehensive advisory services on trade-based money laundering (TBML), export controls, and dual-use goods compliance.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/trade-sanctions-money-laundering-compliance">Read more</a>
                                    </span>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="7.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Sanctions Advisory
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-3 text-[#6D7380] text-sm leading-normal'>
                                        As a Subject Matter Expert (SME) in Sanctions, SCS MENA provides specialized advisory and investigative services for OFAC, UN, EU, and UAE sanctions compliance.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/sme-sanctions-advisory">Read more</a>
                                    </span>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="8.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Board & CEO Advisory
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-3 text-[#6D7380] text-sm leading-normal'>
                                        We offer strategic compliance advisory to Chairmen, CEOs, and Board members, helping them navigate regulatory risks, governance frameworks, and financial crime compliance.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/advisory-service-chairman">Read more</a>
                                    </span>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="9.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        MLRO & Compliance Support
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-3 text-[#6D7380] text-sm leading-normal'>
                                        SCS MENA provides end-to-end crypto compliance solutions for Virtual Asset Service Providers (VASPs), exchanges, and fintech companies.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/head-of-compliance">Read more</a>
                                    </span>
                                </div>
                                <div className='border px-5 py-5 md:py-16 md:px-5 md:mt-10 border-opacity-30 mt-5 hover:scale-105 duration-200 hover:cursor-wait'>
                                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='bg-[#F5F7FD] h-14 w-14 rounded-full items-center border'>
                                        <img className='py-2 px-2' src="10.png" alt="" />
                                    </div>
                                    <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-base md:font-medium lg:pt-5 pt-3 text-[#1A2B6B]'>
                                        Remediation Projects
                                    </h1>
                                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='md:py-5 py-3 text-[#6D7380] text-sm leading-normal'>
                                        SCS MENA supports financial institutions in closing AML and compliance findings raised by regulators.
                                    </p>
                                    <span className="text-[#0847F7] pt-5 border-b border-[#0847F7]">
                                        <a href="/remediation">Read more</a>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Business;