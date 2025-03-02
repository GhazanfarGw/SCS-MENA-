import React from 'react';
// import Banner from './Banner'

export default function Dashboard() {
  return (
    <>
        <div className='duration-500 justify-center mx-auto'>
            <video 
                class="w-full object-cover justify-center mx-auto md:h-[60rem] h-[36rem]" 
                loop autoPlay muted playsinline>
                <source src="65ef0fdd53884ffb2a0c1b0c_home_header (1).mp4" type="video/mp4"/>
            </video>

            <div className='md:px-10 mx-auto justify-center px-5'>
                <div className='text-white top-1/4 absolute md:left-0 md:right-0 justify-center pt-10 md:pt-0'>
                    <div className='max-w-screen-xl justify-center mx-auto'>
                        <h1 className='text-[#A01F1A] second md:text-6xl font-light font-sans text-4xl pt-2 md:pt-0'>
                            Trusted Crypto Compliance <br />& AML Experts
                        </h1>  
                        <p className='text-[#000000] text-lg max-w-xl pt-8'> 
                            SCS MENA provides expert crypto compliance, AML, and risk management solutions, helping businesses navigate global regulations and stay resilient.
                        </p>
                        <a 
                            href="#about" className="fourth md:mt-10 mt-5 hover:px-4 items-center text-[#A01F1A] font-semibold md:text-base text-xs font-light scroll-smooth duration-500 bg-[#fff] relative h-10 tracking-wide w-40 uppercase md:px-4 justify-center flex rounded-sm">
                            Learn More
                        </a>             
                    </div>
                </div>
                {/* <div className='md:max-w-7xl justify-center mx-auto md:-mt-80 md:px-10 mt-5 z-20 mb-0 md:mb-20'>
                    <Banner/>
                </div> */}
            </div>
        </div>
    </>
  )
}

// import React from 'react';
// import Banner from './Banner'

// export default function Dashboard() {
//   return (
//     <>
//         <div className='duration-500 overflow-hidden justify-center mx-auto'>
//             <video 
//                 class="w-full object-cover opacity-50 justify-center mx-auto h-[52rem]" 
//                 loop autoPlay muted playsinline>
//                 <source src="cyber-security-stock-footage.mp4" type="video/mp4"/>
//             </video>

//             <div className='md:px-10 mx-auto justify-center px-5'>
//                 <div className='text-white top-1/4 absolute md:left-0 md:right-0 justify-center pt-5 md:pt-0 md:mx-auto'>
//                     <div className='mx-auto max-w-screen-lg'>
//                         <h1 className='second md:text-6xl md:font-light text-4xl tracking-wider duration-500 text-[#fff]'>
//                             Secure your cyberspace, <br/> secure your digital life
//                         </h1>
//                     </div>
//                     <div className='third md:pt-10 pt-3 md:pb-0 md:text-2xl text-base tracking-wider max-w-screen-lg justify-center mx-auto duration-500'>
//                         <p className='md:font-light text-[#c8ccce]'> 
//                             Experience next-level protection with RockSec Group's security expertise.
//                         </p>
//                         <a 
//                             href="#about" className="fourth md:mt-20 mt-5 hover:px-4 items-center text-[#fff] md:text-base text-xs font-light scroll-smooth duration-500 bg-[#201F52] md:mx-auto relative h-10 tracking-wide w-40 uppercase md:px-4 justify-center text-center flex rounded-sm">
//                             Learn More
//                         </a>
//                     </div>
//                     <div className='md:max-w-7xl justify-center mx-auto md:mt-44 md:px-10 mt-20'>
//                         <Banner/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }