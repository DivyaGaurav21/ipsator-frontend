import React, { useState } from 'react';
import SSF_Cohort1 from './SSF_Cohort1';
import SSF_Cohort2 from './SSF_Cohort2';

const CohortContent = () => {
    const [selectedCohort, setSelectedCohort] = useState('SSF_Cohort1');
    console.log(selectedCohort)

    const handleCohortChange = (e) => {
        setSelectedCohort(e.target.value);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-6">SWACHHTA SAARTHI FELLOWSHIP</h1>

                {/* Cohort Dropdown */}
                <div className="mb-6">
                    <label htmlFor="cohortSelect" className="font-bold">
                        Select SSF Cohort:
                    </label>
                    <select
                        id="cohortSelect"
                        className="block w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:border-blue-500"
                        value={selectedCohort}
                        onChange={handleCohortChange}
                    >
                        <option value="SSF_Cohort1">SSF Cohort 1</option>
                        <option value="SSF_Cohort2">SSF Cohort 2</option>
                    </select>
                </div>

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
