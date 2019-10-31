import React from 'react';

const VideoList = ({ video })=>{

    if(!video){
        return (<div>Loading...</div>);
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (

        <div>
       
            <div className="card mt-2">
                <div className="embed-responsive embed-responsive-21by9">
                <iframe title="videoPlayer" className="embed-responsive-item" src={ videoSrc } />
                </div>

            <div className="card-body">
                <h5 className="card-title">{video.snippet.title}</h5>
                <p className="card-text">{ video.snippet.description }</p>
            </div>
            </div>
        
        </div>

       
    );  
}

export default VideoList;