import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        
    }

    

    render() {

        return (

                <div class="card text-center">
                    <div class="card-body">
                        <FontAwesomeIcon size="7x" />
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">{this.props.description}</p>
                    </div>
                </div>

        )
    }
}

export default Card