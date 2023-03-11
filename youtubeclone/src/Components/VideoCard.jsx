import React from "react";
import { Avatar } from "@mui/material";
import '../Styles/AllVideos.css'
import '../Styles/Videos.css'

const VideoCard = ({image, title, channel, views, time, logo }) => {
    return(
        <div className="VideoCard">
            <img className="image" src={image} alt="" />
            <div className="videoInfo" >
                <Avatar 
                className="avatar"
                alt={channel}
                src={logo}
                 />
            <div className="videoText">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>
                    {views} . {time}
                </p>
            </div>
            </div>
        </div>
         )
}

export default VideoCard;