import React from 'react'
import cardStyle from '../styles/card.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {

        return (

            <ScrollAnimation animateIn={this.props.entrada}
                animateOut={this.props.salida}
                offset={25}
            >
                <div class={'card ' + cardStyle.myCard}>
                    <div class="card-body">
                        <div className="row">

                            <div className={cardStyle.center + ' col-sm-12 col-lg-2 d-flex justify-content-center'}>
                                <div className={cardStyle.box}>
                                    <FontAwesomeIcon size="3x"
                                        icon={this.props.icon}
                                        className={cardStyle.icon}
                                        color="#fff"
                                    />
                                </div>

                            </div>
                            <div className="col-sm-12 col-lg-10">
                                <h4 class="card-title">{this.props.title}</h4>
                                <p class="card-text">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

        )
    }
}

export default Card