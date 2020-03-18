import React from 'react'
import paralaxCss from '../styles/paralax.module.scss'


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
                    className={paralaxCss.parallax + ' col-sm-12'}>
                    <section className={paralaxCss.center}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.subtitle}</p>
                    </section>
                </div>
            </div>
        );
    }
}

export default Parallax