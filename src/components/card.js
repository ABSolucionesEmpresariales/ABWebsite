import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        
    }

    

    render() {

        return (
            <div className="border col-4 text-center py-5">
                <div class="card text-center">
                    <div class="card-body">
                        <FontAwesomeIcon className={homeStyles.serviceIcons} icon={faArrowUp} size="7x" />
                        <h5 class="card-title">{this.props.title}</h5>
                        <p class="card-text">{this.props.description}</p>
                    </div>
                </div>
            </div>

        )
    }
}