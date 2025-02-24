import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Tooltip } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Business Data
const businessUnits = [
  {
    id: 1,
    title: "Crypto Compliance​",
    description:
      "SCS MENA provides end-to-end crypto...",
    img: "/1.webp",
    link: "/crypto-compliance",

  },
  {
    id: 2,
    title: "Crypto Investigations",
    description:
      "SCS MENA specializes in crypto investigations...​",
    img: "./1.webp",
    link: "/crypto-investigation-service",
  },
  {
    id: 3,
    title: "Blockchain & DeFi Compliance",
    description:
      "SCS MENA offers specialized advisory on Blockchain...​",
    img: "./1.webp",
    link: "/defi-compliance",
  },
  {
    id: 4,
    title: "Compliance Procedures​",
    description:
      "We help VASPs and other companies implement...​",
    img: "./4.webp",
    link: "/compliance-procedures-implementation",
  },
  {
    id: 5,
    title: "AML Advisory & Training​",
    description:
      "We provide AML advisory and training services...​",
    img: "./1.webp",
    link: "/dnfbp-aml-compliance-advisory",
  },
  {
    id: 6,
    title: "Sanctions & Money Laundering​",
    description:
      "Our team provides comprehensive advisory...​",
    img: "./1.webp",
    link: "/trade-sanctions-money-laundering-compliance",
  },
  {
    id: 7,
    title: "Sanctions Advisory​",
    description:
      "As a Subject Matter Expert (SME) in Sanctions....​",
    img: "./1.webp",
    link: "/sme-sanctions-advisory",
  },
  {
    id: 8,
    title: "Board & CEO Advisory​",
    description:
      "We offer strategic compliance advisory...​",
    img: "./9.webp",
    link: "/advisory-service-chairman",
  },
  {
    id: 9,
    title: "MLRO & Compliance Support​",
    description:
      "SCS MENA provides end-to-end crypto...​",
    img: "./9.webp",
    link: "/head-of-compliance",
  },
  {
    id: 10,
    title: "Remediation Projects​",
    description:
      "SCS MENA supports financial institutions....​",
    img: "./4.webp",
    link: "/remediation",
  },
];

// Custom Next Arrow
function NextArrow({ onClick }) {
  return (
    <div className="cursor-pointer text-[#136690] text-2xl mx-2" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

// Custom Prev Arrow
function PrevArrow({ onClick }) {
  return (
    <div className="cursor-pointer text-[#136690] text-2xl mx-2" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}

function Post() {
  const sliderRef = useRef(null);

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true } }
    ]
  };

  return (
    <div className='mx-auto px-5 items-center md:py-20 bg-[#fff]'>
      <div className='max-w-screen-xl mx-auto text-[#000] border-y-8 border-[#136690] py-16 border-opacity-25'>
        <div className='pt-20 mx-auto justify-center text-center'>
          <h3 className="text-[#136690] mb-2 font-displace text-2xl">
            Services
          </h3>
          <span className='md:text-5xl text-3xl text-[#000] text-center mx-auto justify-center border-b border-[#000] font-displace'>
            Comprehensive Crypto Compliance <br />& Regulatory Advisory Services
          </span>
        </div>
        {/* Slider */}
        <Slider ref={sliderRef} {...settings} className='pt-20'>
          {businessUnits.map((business) => (
            <Tooltip key={business.id} title={business.title}>
              <div className='boximage hover:scale-105 duration-300 rounded-lg'>
                <a href={business.link} className='justify-center items-center px-3 py-10 block'>
                  <img className='px-5 pb-5' src={business.img} alt={business.title} />
                  <span className='text-xl pt-5 px-3 border-b border-[#000] text-[#000] font-displace'>
                    {business.title}
                  </span>
                  <p className='pt-3 text-sm text-[#363636] px-3 justify-center mx-5'>
                    {business.description}
                  </p>
                </a>
                <div className="text-xs fourth mx-auto rounded-full -mt-4 w-48 hover:scale-105 hover:px-4 bg-[#136690] h-8 tracking-wide uppercase justify-center text-center flex items-center text-white">
                  <a href={business.link}>Click For More</a>
                </div>
              </div>
            </Tooltip>
          ))}
        </Slider>

        {/* Custom Navigation Arrows Below the Slider */}
        <div className="flex justify-center items-center mt-10">
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>

      </div>
    </div>
  );
}

export default Post;


// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { Tooltip } from '@mui/material';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// // Custom Next Arrow
// function NextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div 
//       className="w-20 relative mt-10 justify-center text-center mx-auto transform -translate-y-1/2 cursor-pointer text-white text-4xl z-50"
//       onClick={onClick}
//       style={{ display: "block" }} // Force display
//     >
//       <FaArrowRight />
//     </div>
//   );
// }

// // Custom Prev Arrow
// function PrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div 
//       className="w-20 top-1/4 relative mt-10 justify-center text-center mx-auto transform -translate-y-1/2 cursor-pointer text-white text-4xl z-50"
//       onClick={onClick}
//       style={{ display: "block" }} // Force display
//     >
//       <FaArrowLeft />
//     </div>
//   );
// }

// function Post() {
//   const settings = {
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     dots: true,
//     arrows: true,  // Enable arrows
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           initialSlide: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//         }
//       }
//     ]
//   };
//   return (
//     <>
//     <div className='mx-0 px-5 items-center md:py-28 bg-[#111316]'>
//       <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-2xl items-center mx-auto overflow-hidden text-[#000]'>
//         <h1 className='md:text-5xl text-3xl text-[#136690] text-center mx-auto justify-center py-16'>Our Business Units</h1>
//         <Slider {...settings} className='flex mx-auto items-center gap-5 pt-5 text-[#000]'>
          // <Tooltip>
          //   <div className='boximage py-10 hover:scale-105 duration-300 rounded-lg'>
          //     <a href='https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme' 
          //       className='justify-center items-center px-3 py-10'>
          //       <img className='px-12 pb-10' src='./gettyimages-2154569604-640x640.jpg'/>
          //       <span className='text-2xl font-semibold pt-5 px-3 border-b border-emerald-600 text-[#136690]'>
          //         Garment Accessories
          //       </span>
          //       <p className='pt-3 text-sm text-[#B7BDC6] px-3 justify-center mx-5'>
          //         The materials which are used to make a garment attractive for selling and packing other than fabric and trims are called accessories...
          //       </p>
          //     </a>
          //     <div className="text-xs fourth mx-auto rounded-full md:my-7 w-48 hover:scale-105 mt-6 hover:px-4 items-center text-[#000] font-light scroll-smooth duration-500 bg-[#136690] relative h-8 tracking-wide uppercase justify-center text-center flex">
          //       <a 
          //         href="/contact-us">
          //         Click For More
          //       </a>
          //     </div>
          //   </div>
          // </Tooltip>
          // <Tooltip>
          //   <div className='boximage py-10 hover:scale-105 duration-300 rounded-lg'>
          //     <a href='https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme' 
          //       className='justify-center items-center px-3 py-10'>
          //       <img className='px-8 pb-10' src='./gettyimages-2154569604-640x640.jpg'/>
          //       <span className='text-2xl font-semibold pt-5 px-3 border-b border-emerald-600 text-[#136690]'>
          //         Upholstery & Furniture Accessories
          //       </span>
          //       <p className='pt-3 text-sm text-[#B7BDC6] px-3 justify-center mx-5'>
          //         It is important to maintain a substainable paractice and socially responsible prole as a  business these days. As raw materials are scarce..
          //       </p>
          //     </a>
          //     <div className="text-xs fourth mx-auto rounded-full w-48 mt-2 hover:scale-105 hover:px-4 items-center text-[#000] font-light scroll-smooth duration-500 bg-[#136690] relative h-8 tracking-wide uppercase justify-center text-center flex">
          //       <a 
          //         href="/contact-us">
          //         Click For More
          //       </a>
          //     </div>
          //   </div>
          // </Tooltip>
          // <Tooltip>
          //   <div className='boximage py-10 hover:scale-105 duration-300 rounded-lg'>
          //     <a href='https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme' 
          //       className='justify-center items-center px-3 py-10'>
          //       <img className='px-8 pb-10' src='./gettyimages-2154569604-640x640.jpg'/>
          //       <span className='text-2xl font-semibold pt-5 px-3 border-b border-emerald-600 text-[#136690]'>
          //         Mattress Accessories
          //       </span>
          //       <p className='pt-3 text-sm text-[#B7BDC6] px-3 justify-center mx-5'>
          //         Mattress adhesive plays an important role in the mattress and bed making industry. The glue is responsible for keeping the different layers...
          //       </p>
          //     </a>
          //     <div className="text-xs fourth mx-auto rounded-full md:my-5 w-48 hover:scale-105 mt-5 hover:px-4 items-center text-[#000] font-light scroll-smooth duration-500 bg-[#136690] relative h-8 tracking-wide uppercase justify-center text-center flex">
          //       <a 
          //         href="/contact-us">
          //         Click For More
          //       </a>
          //     </div>
          //   </div>
          // </Tooltip>
          // <Tooltip>
          //   <div className='boximage py-10 hover:scale-105 duration-300 rounded-lg'>
          //     <a href='https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme' 
          //       className='justify-center items-center px-3 py-10'>
          //       <img className='px-8 pb-10' src='./gettyimages-2154569604-640x640.jpg'/>
          //       <span className='text-2xl font-semibold pt-5 px-3 border-b border-emerald-600 text-[#136690]'>
          //         Industrial Webbings & Accessories
          //       </span>
          //       <p className='pt-3 text-sm text-[#B7BDC6] px-3 justify-center mx-5'>
          //         About industrial webbings textiles with slow- stretching webbing, safety belts, lifting slings, PE flat ribbon, ratchet straps and reflective...
          //       </p>
          //     </a>
          //     <div className="text-xs fourth mx-auto rounded-full w-48 hover:scale-105 hover:px-4 items-center text-[#000] font-light scroll-smooth duration-500 bg-[#136690] relative h-8 tracking-wide uppercase justify-center text-center flex">
          //       <a 
          //         href="/contact-us">
          //         Click For More
          //       </a>
          //     </div>
          //   </div>
          // </Tooltip>

          // <Tooltip>
          //   <div className='boximage py-10 hover:scale-105 duration-300 rounded-lg'>
          //     <a href='https://cointelegraph.com/news/hashflare-founders-arrested-in-astounding-575m-crypto-fraud-scheme' 
          //       className='justify-center items-center px-3 py-10'>
          //       <img className='px-8 pb-10' src='./gettyimages-2154569604-640x640.jpg'/>
          //       <span className='text-2xl font-semibold pt-5 px-3 border-b border-emerald-600 text-[#136690]'>
          //         Curtain Tape Accessories
          //       </span>
          //       <p className='pt-3 text-sm text-[#B7BDC6] px-3 justify-center mx-5'>
          //         Startech provides complete curtain tape plan and technical consultant. High speed automatic machine produces high-quality curtain tape...
          //       </p>
          //     </a>
          //     <div className="text-xs fourth mx-auto rounded-full md:my-5 w-48 hover:scale-105 mt-5 hover:px-4 items-center text-[#000] font-light scroll-smooth duration-500 bg-[#136690] relative h-8 tracking-wide uppercase justify-center text-center flex">
          //       <a 
          //         href="/contact-us">
          //         Click For More
          //       </a>
          //     </div>
          //   </div>
          // </Tooltip>
//         </Slider>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Post;