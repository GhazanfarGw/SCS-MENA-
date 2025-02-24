import React from "react";

const CyberSecuritySection = () => {
  return (
    <section id="about" className="text-white py-40 md:px-10 px-5 pt-32 bg-white">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 gap-10 justify-center">
        {/* Image Section */}
        <div className="w-full block md:hidden lg:hidden">
          <img
            src="./ensuring-the-future-of-business-to-be-better-than-before-1.jpgs1024x1024wisk20cXXHY5JBhmPZI5Fi_wWB6GD9dhOXPjBVqQid-5qbpMq8-1.jpg" // Replace with your image URL
            alt="Image"
            className="rounded-lg border-4 border-[#136690]"
          />
        </div>
        {/* Text Section */}
        <div className="max-w-xl pt-10 md:pt-0 text-sm md:text-base">
          <h3 className="text-[#136690] font-semibold mb-2 font-displace text-2xl">
            About Us
          </h3>
          <h2 className="md:text-5xl text-3xl font-light mb-4 text-black font-displace">
            Trusted Experts in Crypto Compliance, AML, and Risk Management
          </h2>
          <p className="text-[#444444] pb-5 md:text-base text-sm">
            SCS MENA is a specialized compliance consultancy providing expert advisory services in crypto compliance, AML, financial crime, and sanctions. With extensive experience across UAE, UK, and global financial markets, we support financial institutions, VASPs, fintech firms, and corporates in navigating complex regulatory landscapes.
          <br /><br />
            Our services include compliance framework development and implementation, regulatory licensing support, investigations, and risk management solutions, ensuring businesses remain compliant and resilient in an evolving regulatory environment.
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full hidden md:block lg:block">
          <img
            src="./ensuring-the-future-of-business-to-be-better-than-before-1.jpgs1024x1024wisk20cXXHY5JBhmPZI5Fi_wWB6GD9dhOXPjBVqQid-5qbpMq8-1.jpg" // Replace with your image URL
            alt="Image"
            className="rounded-lg border-4 border-[#136690]"
          />
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySection;