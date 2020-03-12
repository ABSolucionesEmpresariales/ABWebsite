import React from 'react'
import { useStaticQuery } from 'gatsby'
import Slider from './slider'
import customCss from '../styles/carousel.module.scss';

const Carousel = () => {
	const data = useStaticQuery(graphql`
    query carouselQuery {
        allContentfulCarousel {
    		edges {
      			node {
					title
					description
					button
					user
        			image {
          				file {
            				url
          				}
        			}
        			userProfile {
          				file {
						   url
						}
          			}
        		}
      		}
   		}
	}`)
	  

	return (
		<div>
			<Slider classNames={customCss}>
				{data.allContentfulCarousel.edges.map((item, index) => (
					<div
						key={index}
						className={customCss.sliderContent}
						/* style={{ background: `url('${item.node.image.file.url}') no-repeat center center` }} */
					>
						<div className={customCss.inner}>
							<h1>{item.node.title}</h1>
							<p>{item.node.description}</p>
							<button className={customCss.buttonStyle}>
								{item.node.button}
							</button>
						</div>
						<section>
							<img /* src={item.node.userProfile.file.url} alt={item.node.user} */ />
							<span>
								Posted by <strong>{item.node.user}</strong>
							</span>
						</section>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default Carousel