import React from 'react'


class Parallax extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div className="row">
                <div style={{backgroundImage: `url('${this.props.background}')`}}
                    className={this.props.classNames.parallax + ' col-sm-12'}>
                    <section className={this.props.classNames.center}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.subtitle}</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default Parallax