import React from 'react';
import HoverCard from './HoverCard';

const MissionInfo = () => {

    return (
        <div className="bg-inherit p-6">

            <div className="flex flex-col md:flex-row justify-around items-center bg-neutral-100 py-10">
                <div className="mt-4 relative p-10 bg-gray-300 rounded-e-3xl">
                    <iframe
                        width="400"
                        height="315"
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
                <HoverCard
                    title="Vision"
                    imageUrl="https://t4.ftcdn.net/jpg/00/67/03/43/360_F_67034378_LXdUuu9N0PUTFspr72ubBeLFoEQH6FZI.jpg"
                    description={[
                        "To identify and validate innovative technologies that can help create a cleaner and greener environment in a sustainable way.",
                        "To boost and augment the Swachh Bharat Mission and Smart Cities Project by leveraging science, technology, and innovation.",
                        "To create ready reckoners for waste management so best practices can be shared.",
                        "To drive community initiatives in the area of waste management to drive behavioral change.",
                    ]}
                />
                <HoverCard
                    title="Focus"
                    imageUrl="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kdXN0cnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60"
                    description={[
                        "The focus of our mission is to provide scientific and technological inputs towards conservation, sustainable use, and restoration of our land, air, and water resources. The technology solutions identified will support Urban Local Bodies (ULBs) to create circular economic models that are financially viable for waste management & streamline waste handling in the country.",
                    ]}
                />
            </div>

        </div >
    );
};

export default MissionInfo;
