import React from 'react'


class Parallax extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {

        return (
            <div className="row">
                <div 
                    className={this.props.classNames.parallax + ' col-sm-12'}>
                    <section style={{backgroundImage:"url("+ this.props.url +")"}} className={this.props.classNames.center}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.subtitle}</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default Parallax