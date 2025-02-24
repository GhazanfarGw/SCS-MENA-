import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Sanctions & Money Laundering
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Trade Sanctions & Money Laundering Compliance, Including Export Control & Dual-Use Goods
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Our team provides comprehensive advisory services on trade-based money laundering (TBML), export controls, and dual-use goods compliance.
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        We assist firms in identifying trade sanctions risks, conducting due diligence, and implementing controls to prevent regulatory breaches.
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Guidance on trade sanctions, export control, and dual-use goods compliance to prevent financial crime risks.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;