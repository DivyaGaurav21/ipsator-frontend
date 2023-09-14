import React from 'react'
import VideoEmbed from '../reusable/VideoEmbed'

const SSF_Cohort1 = () => {
    return (
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
    )
}

export default SSF_Cohort1