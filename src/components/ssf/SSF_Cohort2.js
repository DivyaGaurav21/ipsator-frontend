import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const SSF_Cohort2 = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 justify-around my-3'>
            <div className="md:max-w-md w-full md:w-[400px]">
                <h1 className='text-red-800 text-3xl font-bold text-center'>SSF Cohort 2</h1>
                <p className='text-justify font-semibold text-slate-400'>
                    The applications for the 2022 Cohort were open between 4th February - 4th May 2022.
                    <br></br>
                    A total of 1290 applications were received from across the country from 28 states and 5 UTs
                    for Cohort 2.
                    <br></br>
                    <br></br>
                    Out of the 1290 applications, 71 SSFs were selected from 20 States and 3 Union Territories,
                    based on their proposed ideas and action plans to tackle the challenge of waste management
                    scientifically and sustainably.
                </p>
                <div className='mt-10'>
                    <p className='font-bold text-slate-500'>
                        <FontAwesomeIcon icon={faUserFriends} className="inline-block mr-2" /> Meet Our Fellows
                    </p>
                    <p className='font-bold text-slate-500'>
                        <FontAwesomeIcon icon={faUserFriends} className="inline-block mr-2" />{' '}
                        <a
                            href="https://www.wastetowealth.gov.in/view-all-fellows"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.wastetowealth.gov.in/view-all-fellows
                        </a>
                    </p>
                </div>
            </div>
            <img src='https://www.psa.gov.in/assets/images/waste/cohort-one-map.jpg' className='md:max-w-md w-full max-h-[500px]' alt="img__1" />
        </div>
    )
}

export default SSF_Cohort2