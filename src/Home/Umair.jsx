import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const CyberSecuritySection = () => {
  useEffect (() => {
    Aos.init ();
  }, [])
  return (
    <section id="about" className="text-white md:py-40 py-20 md:px-10 px-5 md:pt-20">
      <div className="max-w-screen-xl mx-auto justify-center">
        {/* Text Section */}
        <div data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="max-w-screen-xl md:pt-0 text-sm md:text-base bg-[#E0E6F3] rounded-3xl shadow-md md:mt-0 mt-5 bg-opacity-50 md:py-20 pb-10 md:px-16 px-5">
          <img className="w-40 md:pt-10 animate-blob" src="65cb6192280e99460ea18c6d_65c3035e5ae02f516dafeeae_sei-panel-04-min-p-500.png" alt="" />
          <h3 className="text-[#A01F1A]">
            Chief Executive Officer & Founder
          </h3>
          <h2 className="second md:text-6xl font-light font-sans text-3xl text-[#000000]">
            Umair’s Ahmed
          </h2>
          <p className="text-[#000000] pt-5 md:text-base text-sm">
            Umair is a highly experienced compliance professional with over 20 years of expertise in AML, financial crime compliance, and sanctions advisory across the UAE, UK, and global financial markets. He has held senior compliance roles at leading financial institutions, including Barclays UK, HSBC UAE & UK, First Abu Dhabi Bank (FAB), LSEG Global, and Binance UAE & Global. His work includes extensive engagement with regulators such as the UAE Central Bank, FSRA, DFSA, VARA, and OFAC, handling complex compliance investigations, remediation projects, and regulatory interactions.
          <br /><br />
            Umair has covered global markets, including MENAT and Europe for HSBC, held a global compliance role at FAB and LSEG, and managed compliance operations across 70+ countries. His expertise in multi-jurisdictional regulatory frameworks enables him to provide strategic compliance solutions to financial institutions operating across different regulatory landscapes. He has also worked with various law enforcement agencies and played a key role in multiple monitorship projects with the U.S. Department of Justice (DoJ), the UK Financial Conduct Authority (FCA), and other regulatory authorities.
            <br /><br />
            Umair has built and led the compliance function for Commercial Banking at the largest bank in the UAE, bringing deep expertise in financial institutions, Free Zones, and regulatory frameworks. His in-depth understanding of compliance requirements and risk management in these sectors enables him to provide tailored advisory solutions to businesses operating in complex regulatory environments.
            <br /><br />
            As the founder of SCS MENA, Umair leverages his deep industry expertise to offer specialized compliance advisory services to financial institutions, crypto firms, and corporates. His experience in crypto compliance, AML, sanctions, and blockchain investigations enables organizations to navigate evolving regulatory landscapes and mitigate financial crime risks effectively.
            <br /><br />
            Umair holds multiple professional certifications in compliance and financial crime, including CAMS (Certified Anti-Money Laundering Specialist), ICA Diploma in AML & Compliance, ICA Certification in Crypto Compliance, ICA Certification in Trade-Based Money Laundering (TBML), and Chainalysis Reactor Certification. His qualifications further solidify his expertise in regulatory compliance, financial crime risk, and blockchain investigations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;