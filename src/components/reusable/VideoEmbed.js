import React from "react";
const VideoEmbed = ({ url, width, height }) => {
    return (
        <div className="mb-6">
            <iframe
                width={width}
                height={height}
                src={url}
                title="YouTube Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    );
};
export default VideoEmbed