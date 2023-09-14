import React from 'react'
import ProblemTechCard from './ProblemTechCard'
import VideoEmbed from '../reusable/VideoEmbed'

const WasteManagement = () => {
    return (
        <div className='bg-neutral-300 py-4 my-10'>
            <h1 className='text-center font-bold text-2xl font-sans mb-7 text-red-900'>Decentralized Waste Management Technology Park</h1>
            <div className='flex flex-col md:flex-row gap-1'>
                <VideoEmbed url="https://www.youtube.com/embed/qXO5rjRb9yA" width="350" height="400" />
                <ProblemTechCard
                    problem=" Problem statement:"
                    solution=": Unscientific disposal of mixed waste in open dumpsites
                generates harmful greenhouse emissions and contaminate soil and groundwater causing
                health and environment hazards to the city’s population. Presently, the 469 colonies
                across 64 wards in East Delhi generate on an average about 2200 tons per day of fresh
                municipal solid waste which is disposed unscientifically in five open dumpsites.
                Diverting this fresh waste from entering the landfills will be key to achieve the
                objective of zero landfill."
                />
                <ProblemTechCard
                    problem="Technology Solution:"
                    solution="Considering the challenges faced by urban and rural Local bodies, the Waste to Wealth
                Mission of the Office of the Principal Scientific Adviser to the Government of India, in
                collaboration with the erstwhile East Delhi Municipal Corporation (now MCD) set up
                a Decentralised Waste Management Technology Park in New Jaffrabad, East Delhi for
                onsite processing of fresh Municipal solid waste. Following 4 Technologies are
                deployed at the site:"
                />
            </div>

        </div>
    )
}

export default WasteManagement