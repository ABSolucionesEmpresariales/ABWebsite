import React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
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
					activeButton
					activeUser
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
		<div className='row'>
			<Slider classNames={customCss}>
				{data.allContentfulCarousel.edges.map((item, index) => (
					<div
						key={index}
						className={customCss.sliderContent}
						style={{ background: `url('${item.node.image.file.url}') no-repeat center center` }}
					>
						<div className={customCss.inner}>
							<h1>{item.node.title}</h1>
							<p>{item.node.description}</p>
							{(item.node.activeButton) ?
								(<button className={customCss.buttonStyle}>
									{item.node.button}
								</button>) :
								(<div></div>)}

						</div>
						{(item.node.activeUser) ? (
							<section>

								<img src={item.node.activeUser ? item.node.userProfile.file.url : './media/img/logo.png'} alt={item.node.user} />
								<span>
									Posted by <strong>{item.node.user}</strong>
								</span>
							</section>
						) :
							<section></section>
						}

					</div>

				))}
			</Slider>
		</div>
	)
}

export default Carousel