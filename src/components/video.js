import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Video = ({videoSrcURL, videoTitle, width, height, effect, ...props }) => (

    <ScrollAnimation animateIn="fadeInUp"
        animateOut="fadeOut"
        delay="1">
        <iframe
        classNames={}
            src={videoSrcURL}
            title={videoTitle}
            width={width}
            height={height}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </ScrollAnimation>

)
export default Video

