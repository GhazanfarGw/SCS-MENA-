import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                    DNFBP AML Compliance
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        DNFBP AML Compliance Advisory & Training
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        We provide AML advisory and training services for Designated Non-Financial Businesses and Professions (DNFBPs), including real estate firms, law firms, and corporate service providers. 
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Our training programs ensure firms meet UAE Central Bank and FIU regulatory requirements, enhancing AML risk management capabilities.
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Helping businesses comply with Anti-Money Laundering (AML) laws through expert advisory and staff training programs.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;