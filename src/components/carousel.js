import React from 'react'
import Slider from './slider'
import content from '../content/slider-content';
import customCss from '../styles/carousel.module.scss';

const Carousel = () => {
    return (
        <div>
			<Slider classNames={customCss}>
				{content.map((item, index) => (
					<div
						key={index}
						className={customCss.sliderContent}
						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className={customCss.inner}>
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button className={customCss.buttonStyle}>{item.button}</button>
						</div>
						<section>
							<img src={item.userProfile} alt={item.user} />
							<span>
								Posted by <strong>{item.user}</strong>
							</span>
						</section>
					</div>
				))}
			</Slider>
		</div>
    )
}

export default Carousel