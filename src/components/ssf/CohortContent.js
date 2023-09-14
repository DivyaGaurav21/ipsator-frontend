import React, { useState } from 'react';
import SSF_Cohort1 from './SSF_Cohort1';
import SSF_Cohort2 from './SSF_Cohort2';
import { fellowshipcards } from '../../staticdata';

const CohortContent = () => {
    const [selectedCohort, setSelectedCohort] = useState('SSF_Cohort1');
    console.log(selectedCohort)

    const handleCohortChange = (e) => {
        setSelectedCohort(e.target.value);
    };

    return (
        <div className="min-h-screen p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-red-900">SWACHHTA SAARTHI FELLOWSHIP</h1>

                <div className='flex flex-col md:flex-row gap-3 justify-around bg-white'>
                    {/* Cohort Dropdown */}
                    <div className="mb-6 w-full md:w-[45%]">
                        <label htmlFor="cohortSelect" className="font-bold text-red-800">
                            Select SSF Cohort:
                        </label>
                        <select
                            id="cohortSelect"
                            className="block w-full px-4 py-4 border border-gray-300 bg-white rounded-md focus:outline-none focus:border-red-700"
                            value={selectedCohort}
                            onChange={handleCohortChange}
                        >
                            <option value="SSF_Cohort1">SSF Cohort 1</option>
                            <option value="SSF_Cohort2">SSF Cohort 2</option>
                        </select>
                    </div>
                    <p className='text-md text-gray-500 p-2 w-full md:w-[45%] font-mono text-justify font-bold'>
                        The Swachhta Saarthi Fellowship is a programme initiated in July 2021 by the Office of the
                        PSA to the Government of India, under its Waste to Wealth Mission. The programme aims at
                        sensitizing the communities towards waste management and offering innovative solutions for
                        the conversion of waste to wealth by recognising young students from schools and colleges,
                        citizens working in the community through Self Help Groups (SHGs), and sanitation workers.
                        The fellowship inspires young citizens and community workers to participate in this programme
                        and create value from the waste around them through their innovations, and ultimately form a
                        wide network of waste warriors on the ground as Swachhta Saarthis.
                    </p>
                </div>

                <hr />

                <div className='flex gap-2 flex-row flex-wrap justify-around my-7  bg-neutral-200 py-7'>
                    {
                        fellowshipcards.map(item => (
                            <div key={item.id} className="shadow-md rounded-lg max-w-xs overflow-hidden">
                                <div className="p-4">
                                    <h2 className="text-2xl font-bold mb-2 text-red-800 text-center">{item.title}</h2>
                                    <p className="text-slate-800 font-semibold">{item.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <hr />
                <p className='text-slate-400 font-semibold'>The Swachhta Saarthi Fellows (SSFs) selected under the three categories are supported with monthly fellowships of ₹500/-, ₹1,000/- and ₹2,000/- respectively for a period of one year. </p>
                <hr />

                <div>
                    {
                        selectedCohort === 'SSF_Cohort1' ? <SSF_Cohort1 /> : <SSF_Cohort2 />
                    }
                </div>


            </div>
        </div>
    );
};

export default CohortContent;
