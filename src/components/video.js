import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import videoStyle from './video.module.scss'
import "animate.css/animate.min.css";

const Video = ({ videoSrcURL, videoTitle, width, height }) => (

    <ScrollAnimation 
        animateIn="fadeInUp"
        animateOut="fadeOut"
        offset={100}>
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
    </ScrollAnimation>

)
export default Video

