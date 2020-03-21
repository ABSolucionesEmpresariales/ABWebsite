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
                duration={2}
            >
                <div className={'card ' + cardStyle.myCard}>
                    <div className="card-body">
                        <div className="row">

                            <div className={'col-sm-12 col-lg-12 d-flex justify-content-center'}>
                                <div className={cardStyle.box}>
                                    <FontAwesomeIcon
                                        icon={this.props.icon}
                                        className={cardStyle.icon}
                                        color="#fff"
                                    />
                                </div>

                            </div>
                            <div className="col-sm-12 col-lg-12">
                                <h4 className="card-title">{this.props.title}</h4>
                                <p className="card-text">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollAnimation>

        )
    }
}

export default Card