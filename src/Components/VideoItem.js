import './VideoItem.css';
import React from 'react';


const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video) } className="video-item item">
            <img alt={video.snippet.title} className="ui image" src = {video.snippet.thumbnails.medium.url} />
            <dv className="content">
           <div className="header"> {video.snippet.title} </div>
            </dv>

        </div>
    );
};

export default VideoItem;