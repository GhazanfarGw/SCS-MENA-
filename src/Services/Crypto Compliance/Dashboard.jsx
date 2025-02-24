import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Crypto Compliance
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Crypto Compliance
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        SCS MENA provides end-to-end crypto compliance solutions for Virtual Asset Service Providers (VASPs), exchanges, and fintech companies. 
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                    We ensure full compliance with VARA, FSRA, DFSA, and UAE Central Bank regulations, covering risk assessments, AML frameworks, KYC/CDD policies, and transaction monitoring tailored for crypto businesses.
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Ensuring regulatory compliance for crypto businesses to prevent financial crime and secure operational legitimacy.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;