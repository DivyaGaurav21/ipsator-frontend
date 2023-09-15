import React from "react";
const VideoEmbed = ({ url, width, height }) => {
    const iframeStyle = {
        border: "none",
        borderRadius: "20px",
    };
    return (
        <div className="m-auto">
            <iframe
                width={width}
                height={height}
                src={url}
                title="YouTube Video Player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                style={iframeStyle}
                allowfullscreen
            ></iframe>
        </div>
    );
};
export default VideoEmbed