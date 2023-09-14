import React from "react";
import VideoEmbed from "./VideoEmbed";
import { techSolutions } from "../../staticdata";

const VideoTitleCard = () => {
    return (

        <div className="mx-10 flex flex-row flex-wrap gap-6">
            {
                techSolutions.map(item => (
                    <div key={item.id} className="max-w-[325px] rounded-xl overflow-hidden shadow-2xl my-7 flex justify-center flex-col p-3">
                        <h1 className="text-center text-xl text-red-900 font-serif">{item.title}</h1>
                        <p className="text-gray-700 text-sm font-mono">{item.techPara} </p>
                        <div className="mt-4">
                            <VideoEmbed height="300" width="300" url={item.url} />
                        </div>
                    </div>
                ))
            }
        </div>


    );
};

export default VideoTitleCard;
