import React from 'react'
import VideoEmbed from '../reusable/VideoEmbed'

const SSF_Cohort1 = () => {
    return (
        <div className='my-8'>
            <h1 className='text-center text-3xl pb-4 font-extrabold text-red-800'>SSF Cohort 1</h1>
            <p className='text-justify text-red-900'>A total of 1062 applications were received from across the country (from Jammu & Kashmir,
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
            <div className='flex flex-col md:flex-row gap-5 justify-around my-9'>
                <img src='https://www.psa.gov.in/assets/images/waste/cohort-one-map.jpg' className='max-w-sm' alt="img__1" />
                <div className='md:max-w-md w-[300px] md:w-[60%]'>
                    <h1 className='text-red-800 text-xl font-bold'>Work by Fellows:</h1>
                    <p className='text-justify'>
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
            <div>
                {/* Video Embed */}
                <VideoEmbed url="https://www.youtube.com/embed/-dFtR0sGqmM?si=yHRk7MRANCaH1e5h" width="400" height="315" />

                {/* Text Content */}
                <p>
                    The Swachhta Saarthi Fellowship is a program initiated in July 2021 by the Office of the PSA to the
                    Government of India, under its Waste to Wealth Mission. The program aims at sensitizing the communities towards
                    waste management and offering innovative solutions for the conversion of waste to wealth by recognizing young
                    students from schools and colleges, citizens working in the community through Self Help Groups (SHGs), and
                    sanitation workers.
                </p>

                {/* More Text Content... */}

                {/* Additional Embedded Videos */}
                <VideoEmbed url="https://www.youtube.com/embed/-dFtR0sGqmM?si=yHRk7MRANCaH1e5h" width="400" height="315" />
                <VideoEmbed url="https://www.youtube.com/embed/-dFtR0sGqmM?si=yHRk7MRANCaH1e5h" width="400" height="315" />

                {/* View More Link */}
                <div className="text-center">
                    <a
                        href="https://youtube.com/playlist?list=PLn8gwoB4TkljtHGI7gW3gWdQ7EhAqtVU2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View more videos in the playlist
                    </a>
                </div>

            </div>
        </div>
    )
}

export default SSF_Cohort1