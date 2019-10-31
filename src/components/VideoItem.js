import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect })=>{
    return (
        <li onClick={ ()=>{onVideoSelect(video)} } className="media mt-2">
        <img 
        alt={ video.snippet.title } 
        className="img-thumbnail img-fluid" 
        src = { video.snippet.thumbnails.default.url } />
        <div className="media-body ml-2"> 
        <h5>{ video.snippet.title } </h5> 
        </div>
        
        </li>
        
    );
}

export default VideoItem;