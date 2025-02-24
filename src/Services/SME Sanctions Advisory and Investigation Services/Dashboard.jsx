import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Sanctions Advisory
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        SME Sanctions Advisory and Investigation Services
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        As a Subject Matter Expert (SME) in Sanctions, SCS MENA provides specialized advisory and investigative services for OFAC, UN, EU, and UAE sanctions compliance.
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        We assist firms with sanctions screening, transaction due diligence, OFAC and OFSI License and internal investigations, ensuring adherence to global regulatory requirements.
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Specialized guidance for businesses to navigate complex international sanctions and regulatory requirements.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;