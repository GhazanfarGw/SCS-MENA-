import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


const CyberSecuritySection = () => {
      useEffect (() => {
          Aos.init ();
        }, [])
  return (
    <section data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" id="about" className="text-white md:px-10 md:py-20 bg-[#F1E9E9] max-w-screen-xl justify-center mx-auto">
      <div className="aboutimage mx-auto justify-center md:text-center md:py-44 hover:scale-105 duration-200 cursor-wait">
        {/* Image Section
        <div className="w-full block md:hidden lg:hidden">
          <img
            src="./ensuring-the-future-of-business-to-be-better-than-before-1.jpgs1024x1024wisk20cXXHY5JBhmPZI5Fi_wWB6GD9dhOXPjBVqQid-5qbpMq8-1.jpg" // Replace with your image URL
            alt="Image"
            className="rounded-lg border-4 border-[#A01F1A]"
          />
        </div> */}
        {/* Text Section */}
        <div className="pt-10 md:pt-0 text-sm md:text-base max-w-screen-lg justify-center mx-auto px-5">
          <h3 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="400" className="text-[#A01F1A] font-semibold mb-2 md:text-2xl text-lg md:mt-20 pt-44">
            About us
          </h3>
          <h2 data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="400" className="md:text-6xl font-light font-sans text-3xl text-[#000000]">
            Trusted experts in crypto compliance, <br className="hidden md:block lg:block"/>aml, and risk management
          </h2>
          <p data-aos="zoom-in-up" data-aos-delay="600" data-aos-duration="400" className="text-[#444444] md:pt-8 pt-5 md:text-base text-sm font-semibold pb-16 md:pb-0">
            Scsmena is a specialized compliance consultancy providing expert advisory services in crypto compliance, AML, financial crime, and sanctions. With extensive experience across UAE, UK, and global financial markets, we support financial institutions, VASPs, fintech firms, and corporates in navigating complex regulatory landscapes.
          <br /><br />
            Our services include compliance framework development and implementation, regulatory licensing support, investigations, and risk management solutions, ensuring businesses remain compliant and resilient in an evolving regulatory environment.
          </p>
        </div>
        {/* Image Section
        <div className="w-full hidden md:block lg:block">
          <img
            src="./ensuring-the-future-of-business-to-be-better-than-before-1.jpgs1024x1024wisk20cXXHY5JBhmPZI5Fi_wWB6GD9dhOXPjBVqQid-5qbpMq8-1.jpg" // Replace with your image URL
            alt="Image"
            className="rounded-lg border-4 border-[#A01F1A]"
          />
        </div> */}
      </div>
    </section>
  );
};

export default CyberSecuritySection;