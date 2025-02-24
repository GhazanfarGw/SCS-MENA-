import React from 'react';

const Dashboard = () => {
    return (
        <>

            <div className='text-white md:max-w-screen-xl justify-center items-center mx-auto bg-[#0D0D0D]'>
                <div className='md:border md:border-[#136690] md:mx-3 px-5 md:px-10 md:pt-20 pt-10 md:pb-32 pb-10'>
                    <h1 className='text-base font-semibold text-[#136690]'>
                        Crypto Investigation Service
                    </h1>
                    <h1 className='text-white md:text-4xl text-2xl justify-center pt-5 font-semibold'>
                        Crypto Investigation Service & Certified Chainalysis Reactor
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        SCS MENA specializes in crypto investigations, leveraging advanced blockchain analytics tools such as Chainalysis Reactor to track and analyze suspicious transactions.
                    </p>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        We support law enforcement agencies, financial institutions, and VASPs in tracing illicit funds, identifying high-risk wallets, and mitigating crypto-related financial crime risks.
                    </p>
                    <h1 className='text-white md:text-4xl text-2xl justify-center font-semibold pt-10'>
                        Client Outcomes/Benefits
                    </h1>
                    <p className='text-[#C3CDD3] pt-4 max-w-screen-lg'>
                        Certified blockchain forensic analysis to trace illicit transactions and protect clients from fraud and money laundering.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Dashboard;