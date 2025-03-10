import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Team() {
    useEffect (() => {
        Aos.init ();
    }, [])
  return (
    <>
    <div className='justify-center mx-auto'>
        <div className='mx-auto justify-center md:px-10 px-5 max-w-screen-xl pb-10 md:pb-20'>
            <div className="md:text-center mx-auto" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                <h2 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='mx-auto text-[#1A2B6B] font-semibold text-base md:text-center'>
                    Founder & CEO
                </h2>
                <h1 className='lg:text-4xl text-2xl font-medium mx-auto text-[#1A2B6B]'>
                    Meet Umair’s Ahmed
                </h1>
                <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal md:text-center mx-auto pt-5 max-w-screen-lg'>
                Umair is a highly experienced compliance professional with over 20 years of expertise in AML, financial crime compliance, and sanctions advisory across the UAE, UK, and global financial markets. He has held senior compliance roles at leading financial institutions, including Barclays UK, HSBC UAE & UK, First Abu Dhabi Bank (FAB), London Stock Exchange Group (LSEG) UK and Global, and Binance UAE & Global. His work includes extensive engagement with regulators such as the FCA UK, UAE Central Bank, FSRA, DFSA, VARA, OFSI and OFAC, handling complex Compliance Investigations, Remediation Projects, and Regulatory Interactions. <br /><br />

                Umair has covered global markets, including MENAT and Europe for HSBC, held a global compliance role at FAB and LSEG, and managed compliance operations across 70+ countries. His expertise in multi-jurisdictional regulatory frameworks enables him to provide strategic compliance solutions to financial institutions operating across different regulatory landscapes. He has also worked with various law enforcement agencies and played a key role in multiple monitorship projects with the OFAC, OFSI, U.S. Department of Justice (DoJ), the UK Financial Conduct Authority (FCA), and other regulatory authorities.

                <br /><br />Umair has built and led the compliance function for Commercial Banking for FAB (Former NBAD) the largest bank in the UAE and Middle East, bringing deep expertise in financial institutions, Free Zones, Exchanges, Trading Companies and regulatory frameworks. His in-depth understanding of compliance requirements and risk management in these sectors enables him to provide tailored advisory solutions to businesses operating in complex regulatory environments.

                <br /><br />As the founder of SCS MENA, Umair leverages his deep industry expertise to offer specialized compliance advisory services to Financial Institutions, Crypto firms, and Corporates. His experience in Crypto Compliance, AML, Sanctions, and Blockchain Investigations enables organizations to navigate evolving regulatory landscapes and mitigate financial crime risks effectively.

                <br /><br />Umair holds multiple Professional Certifications in Compliance and Financial Crime Risk Management, including CAMS (Certified Anti-Money Laundering Specialist), ICA Diploma in AML & Compliance, ICA Certification in Crypto Compliance, ICA Certification in Trade-Based Money Laundering (TBML), and Chainalysis Reactor Certification. Financial Risk Management (FRM) from GARP USA. His qualifications further solidify his expertise in Regulatory Compliance, Financial Crime Risk, and Blockchain Investigations.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team
