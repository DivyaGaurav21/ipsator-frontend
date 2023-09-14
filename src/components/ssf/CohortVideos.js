import React from 'react';
import VideoEmbed from '../reusable/VideoEmbed';
import { cohortvideo } from '../../staticdata';

const CohortVideos = () => {
    return (
        <div className='mt-6'>
            <h1 className='text-red-800 text-center text-3xl my-6 font-extrabold'>Videos</h1>
            <div className='flex flex-row gap-3 flex-wrap justify-center'>
                {
                    cohortvideo.map(video => (
                        <div key={video.id} className="bg-neutral-400 rounded-lg shadow-xl p-6 max-w-[400px]">
                            <h1 className="text-xl font-bold mb-4 text-red-800">{video.title}</h1>
                            <div className="aspect-w-16 aspect-h-9">
                                <VideoEmbed
                                    url={video.url}
                                    width="350"
                                    height="350"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default CohortVideos;


