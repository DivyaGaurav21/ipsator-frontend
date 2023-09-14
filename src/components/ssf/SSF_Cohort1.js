import React, { useState } from 'react'
import VideoEmbed from '../reusable/VideoEmbed'
import ProblemTechCard from '../annexure-home/ProblemTechCard';
import CohortVideos from './CohortVideos';
import AboutSamaroh from './AboutSamaroh';

const SSF_Cohort1 = () => {

    const initialMaxHeight = '350px'; // Initial height to show
    const [showFullText, setShowFullText] = useState(false);
    const paragraphRef = React.useRef();

    const toggleText = () => {
        const paragraph = paragraphRef.current;
        if (paragraph.style.maxHeight === 'none' || paragraph.style.maxHeight === '') {
            paragraph.style.maxHeight = initialMaxHeight;
            setShowFullText(false);
        } else {
            paragraph.style.maxHeight = 'none'; // Show full text
            setShowFullText(true);
        }
    };

    return (
        <div className='my-8'>
            <h1 className='text-center text-3xl pb-4 font-extrabold text-red-800'>SSF Cohort 1</h1>
            <p className='text-justify text-red-900 font-bold'>A total of 1062 applications were received from across the country (from Jammu & Kashmir,
                Ladakh, Tamil Nadu, Mizoram, Gujarat, the Andaman & Nicobar Islands, and more), for the
                2021 Cohort.
                Out of the 1062 applications, 379 SSFs were selected from 27 States and 6 Union Territories,
                based on their proposed ideas and action plans to tackle the challenge of waste management
                scientifically and sustainably.
                An 8-member expert committee (nominated by the Office of the PSA to the Government of
                India) evaluated a total of 3800 reports submitted by the fellows and provided critical feedback
                on the portal to each fellow for improvements within their specific projects going forward, over
                a course of 12 months. Based on the evaluations and feedback on the individual project reports,
                the respective monthly fellowship amount was disbursed to the fellows across India. </p>

            <div className='flex flex-col md:flex-row gap-5 justify-around my-3'>
                <img src='https://www.psa.gov.in/assets/images/waste/cohort-one-map.jpg' className='md:max-w-md w-full max-h-[500px]' alt="img__1" />
                <div className='md:max-w-md w-full md:w-[400px]'>
                    <h1 className='text-red-800 text-xl font-bold text-center'>Work by Fellows:</h1>
                    <p className='text-justify font-semibold text-slate-400'>
                        The SSF programme has demonstrated that citizens, young and old, have a great deal of interest
                        and enthusiasm for working toward waste management. Numerous fellows have developed new
                        ideas into products, prototypes, and technological innovations. Many of these fellows are eager
                        to take their ideas further towards building their own start-ups. The fellows have demonstrated
                        their entrepreneurial acumen by involving community workers, especially underprivileged
                        people, and generating employment for them.
                        The SSFs have been successful in encouraging their peers and the community to manage their
                        waste by raising awareness through a variety of sensitization campaigns. The fellows have
                        conducted their proposed activities quite actively and consider themselves the torchbearers of
                        this programme because of this sensitisation through the award of the fellowship. The most
                        admirable feature of the programme is the fellows' dedication to transforming "Waste to
                        Wealth" through their modest but honest activities.
                    </p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-5 justify-around mt-10'>
                <div className='md:max-w-lg  w-full md:w-[500px]'>
                    <h1 className='text-red-800 text-xl font-bold text-center'>Work by Fellows:</h1>
                    <p
                        ref={paragraphRef}
                        className={`text-justify font-semibold text-slate-400 overflow-hidden transition-max-h ${showFullText ? '' : 'max-h-[350px]'
                            }`}
                    >
                        Most of the SSFs have emphasised on the significance of waste segregation at source itself and
                        have tried to raise awareness of the advantages of appropriate source segregation in the
                        community. They claim that because of their actions, their friends, family, neighbours, and
                        community members have now actively begun source segregation, which is assisting in the
                        delivery of the segregated waste to the appropriate recycling and composting facilities. To
                        provide solutions for efficient waste management, many SSFs have been collaborating closely
                        with local authorities and other stakeholders from various organisations. The SSFs’ initiatives
                        have also resulted in a considerable change in society in terms of cleanliness.
                        From time to time, fellows have been recognised for their waste-to-wealth initiatives. Many of
                        their activities have also been publicised in the form of pamphlets, posters, and videos on social
                        media platforms and via print media. The programme has reported a significant impact on the
                        community/environment (homes, schools, villages, communities, industries) through increased
                        community involvement which has led to positive behavioural changes of citizens towards
                        effective waste management, a decrease in waste production, and cleanliness.
                        The fellowship has produced a number of products and prototypes that the fellows can now
                        develop further for commercialization and scaling up by utilising the platform and networking
                        opportunities provided under the fellowship.
                        The intention of the fellows to continue working for the cause in society beyond the fellowship
                        term is what is most inspiring. Many of them have plans to advance their innovative
                        ideas/solutions towards validation and towards the start-up level, to make a noticeable
                        difference in society. The most significant accomplishment of this programme is the instillation
                        of a culture of waste management among the fellows
                    </p>
                    <button
                        onClick={toggleText}
                        className='text-red-800 font-bold cursor-pointer'
                    >
                        {showFullText ? 'Show Less' : 'Show More'}
                    </button>
                </div>
                <div className='max-h-[400px] flex justify-center items-center'>
                    <img
                        src="https://i.imgur.com/jBT2MQg.png"
                        className='max-w-md'
                        alt='img__1'
                    />
                    <img
                        src='https://i.imgur.com/VLd2BES.png'
                        className='max-w-md'
                        alt='img__2'
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-around items-center bg-neutral-300 w-full py-10 mt-14">
                <div className="mt-4 relative p-3 bg-red-900 rounded-3xl bordered-text">
                    <VideoEmbed url="https://www.youtube.com/embed/JnpJ0s0uY9Y?si=IeLzu4V4WMARIVZF" width="400" height="315" />
                </div>
                <div className='w-1/2'>
                    <ProblemTechCard
                        problem="Swacchta Saarthi Fellowship"
                        solution="The Swachhta Saarthi Fellowship is a programme initiated in July 2021 by the Office of the PSA to the Government of India, under its Waste to Wealth Mission. The programme aims at sensitizing the communities towards waste management and offering innovative solutions for the conversion of waste to wealth by recognising young students from schools and colleges, citizens working in the community through Self Help Groups (SHGs), and sanitation workers. The fellowship inspires young citizens and community workers to participate in this programme and create value from the waste around them through their innovations, and ultimately form a wide network of waste warriors on the ground as Swachhta Saarthis."
                    />
                </div>
            </div>
            <div>
                <CohortVideos />
                <div className="text-center">
                    <a
                        href="https://youtube.com/playlist?list=PLn8gwoB4TkljtHGI7gW3gWdQ7EhAqtVU2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-900 font-semibold hover:underline"
                    >
                        View more videos in the playlist
                    </a>
                </div>

                <AboutSamaroh />

            </div>
        </div>
    )
}

export default SSF_Cohort1