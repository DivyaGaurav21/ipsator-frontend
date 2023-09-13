import React from 'react';
import HoverCard from './HoverCard';
import { visionFocus } from '../staticdata';

const MissionInfo = () => {

    return (
        <div className="bg-inherit p-6">

            <div className="flex flex-col md:flex-row justify-around items-center bg-neutral-100 py-10">
                <div className="mt-4 relative p-8 bg-red-950 rounded-e-3xl">
                    <iframe
                        width="400"
                        height="350"
                        src="https://www.youtube.com/embed/-dFtR0sGqmM?si=yHRk7MRANCaH1e5h"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                </div>
                <h1 className="md:mt-0 mt-4 text-3xl font-serif font-extrabold text-red-600">My-Waste-to-Wealth</h1>
            </div>



            <div className='px-10 md:px-40 my-16'>
                <h1 className="text-2xl font-bold mb-5 text-red-600 text-center">ABOUT THE MISSION</h1>
                <p className='font-semibold font-mono text-gray-500 text-justify'>
                    The Waste to Wealth Mission, spearheaded by the Office of the Principal Scientific Advisor to
                    the Government of India (O/o PSA), aims at strengthening the waste management system in
                    India by identifying and validating innovative technology solutions and models to achieve a
                    zero landfill and zero waste nation. In line with its vision, the Mission has taken several
                    initiatives in different areas of waste management, including technology demonstrations in
                    multiple waste management domains, community engagement, and development of an online
                    portal which will act as a reference for all stakeholders including urban local bodies,
                    government departments, technology companies, investors, and citizens looking for
                    comprehensive information on waste management technologies, policies, and investment
                    opportunities.
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-around gap-2'>
                {
                    visionFocus.map((item) => {
                        return <HoverCard key={item.id}
                            title={item.title}
                            imageUrl={item.imageUrl}
                            description={item.description}
                        />
                    })
                }
            </div>

        </div >
    );
};

export default MissionInfo;
