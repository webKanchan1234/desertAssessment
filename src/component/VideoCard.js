import React from 'react'
import "./home.css"

const VideoCard = ({video}) => {
    return (
        <div>
            <div className="video-box">
                <video width="320" height="240" controls>
                    <source src={video.video} type="video/mp4"/>
                </video>
                <p>{video.description}</p>

            </div>
        </div>
    )
}

export default VideoCard
