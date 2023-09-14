import React from 'react'
import ProblemTechCard from './ProblemTechCard'
import WasteManagement from './WasteManagement'
import VideoEmbed from '../reusable/VideoEmbed'
import VideoTitleCard from '../reusable/VideoTitleCard'

const TechnologyDeployment = () => {
    return (
        <div className='bg-white mt-28 border border-slate-900 p-6 rounded-lg shadow-md w-full md:w-[80%] m-auto relative'>
            <div className=' absolute top-[-38px] flex flex-col md:flex-row justify-around gap-3 md:left-[25%]'>
                <h1 className='text-center text-xl font-bold text-white p-3 rounded-md bg-slate-900 w-[200px]'>Cleaninig Barapullah Drain</h1>
                <h1 className='text-center text-xl font-bold text-slate-900 p-3 rounded-md border bg-white w-[350px] border-slate-900'>Decentralized Waste Management Techgnology Park</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-around items-center bg-neutral-300 w-full py-10 mt-14">
                <div className="mt-4 relative p-3 bg-red-900 rounded-3xl bordered-text">
                    <VideoEmbed url="https://www.youtube.com/embed/4TIl-ysyhe0" width="400" height="315" />
                </div>
                <div className='w-1/2'>
                    <ProblemTechCard
                        problem="Problem Statement:"
                        solution="Cleaning of open drains in congested areas has always been a challenge in India
                        because there is no or limited access for traditional equipment like Joseph Cyril
                        Bamford (JCB) excavator, Poclain, etc. and human settlements on both sides of the
                        drain with narrow passages make it impossible to dispose of the collected waste. The
                        Barapullah drain in South Delhi is one such drain that is blocked at various locations
                        with sewage, trash, and debris, resulting in foul odor, vector-borne diseases, unhygienic
                        conditions, and flooding in the monsoons."
                    />
                </div>
            </div>

            <div className='flex flex-col md:flex-row py-6'>
                <ProblemTechCard
                    problem="Technology Solution:"
                    solution="To address this critical problem, the Waste to Wealth Mission, one of the ten scientific
                    missions of the Office of the Principal Scientific Adviser to the Government of India,
                    collaborated with South Delhi Municipal Corporation (now Municipal Corporation of
                    Delhi) to jointly pilot an indigenous, customized excavator - Drain Master DM-80,
                    designed and developed by M/s Cleantec Infra Pvt. Ltd., Mumbai. The DM-80 unit was
                    selected to address the critical gap area of technologies for cleaning congested urban
                    drains clogged with mixed waste including construction and demolition debris which
                    are very hard to dislodge and remove.It is a self-propelled, transportable, and amphibious machine with multipurposeattachments capable of removing 50-100 m3/day of waste and overcoming the limits of cleaning urban drains (with widths larger than 7 m) making it an importanttechnology for use in urban areas in India."
                />
                <ProblemTechCard
                    problem="Impact"
                    solution="The DM-80 unit was in operation for a duration of one year from 3rdJanuary 2022 to 2nd January 2023. During this period, Cleantec Infraoperated the unit to clean and desilt approximately a 3 km stretch ofthe Barapullah drain starting from Sundial Park to Jangpura, removingapproximately 3000 tons of waste in the process. The MunicipalCorporation of Delhi provided supporting equipment for the disposal ofthe waste removed from the drain."
                />
            </div>

            <div className='mb-8'>
                <div className="bg-gray-100  flex items-center justify-center">
                    <div className="container mx-auto p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img src="https://www.psa.gov.in/assets/images/waste/drainmaster-operation-first.jpg" alt="Image 1" className="w-full h-auto" />
                            </div>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img src="https://www.psa.gov.in/assets/images/waste/drainmaster-operation-second.jpg" alt="Image 2" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='italic text-gray-400'>
                    Prof. Ajay Kumar Sood, the Principal Scientific Adviser (PSA) to the Government of India (GoI) visited the stretch of Barapullah drain near Bhogal Market in South Delhi to witness the indigenously designed drain-cleaning excavator ‘Drainmaster DM-80’ in operation.
                </h3>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                <h1 className='text-3xl text-red-900 font-bold' >Desilting of Barapullah Drain 👉 </h1>
                <div className='flex flex-col md:flex-row  gap-4'>
                    <div>
                        <img src="https://www.psa.gov.in/assets/images/waste/drain-before.jpg" alt='img-1' className='w-[350px] h-auto rounded-2xl border border-red-900' />
                        <span className='font-extrabold'>Before</span>
                    </div>
                    <div>
                        <img src='https://www.psa.gov.in/assets/images/waste/drain-after.jpg' alt='img-2' className='w-[350px] h-auto rounded-2xl border border-red-900'></img>
                        <span className=' font-extrabold'>After</span>
                    </div>
                </div>
            </div>

            {/* ---------------------------------------------------------------- */}
            <WasteManagement />
            <VideoTitleCard />

        </div>
    )
}

export default TechnologyDeployment