import React from 'react'

import videoStyle from './video.module.scss'
import "animate.css/animate.min.css";

const Video = ({ videoSrcURL, videoTitle, width, height }) => (

    
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            className={videoStyle.video}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    

)
export default Video

