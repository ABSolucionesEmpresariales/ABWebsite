import React from 'react'
import Layout from '../components/layout'
import Parallax from '../components/paralax'
import QuienesCss from '../styles/quienesSomos.module.scss'


const QuienesSomos = () => {

    return (
        <Layout>
            <Parallax title='QUIENES SOMOS'
                subtitle='Capacitamos pequeñas y grandes empresas'
                classNames={QuienesCss} />

            <div className="row">
                <div className="col-sm-4">
                    <h1>ARTIFICIAL BRAIN</h1>
                    <p>
                        Aliqua reprehenderit mollit aute nostrud irure dolore velit amet. Cillum nulla est Lorem
                        irure aliquip velit exercitation et culpa deserunt eu irure cupidatat esse.
                        Esse aliquip aute aute tempor qui consectetur dolore duis nulla nostrud. Ea sit occaecat
                        occaecat qui nulla ipsum eiusmod laborum est exercitation pariatur excepteur reprehenderit.
                    </p>
                    <p>
                        Aliqua reprehenderit mollit aute nostrud irure dolore velit amet. Cillum nulla est Lorem
                        irure aliquip velit exercitation et culpa deserunt eu irure cupidatat esse.
                        Esse aliquip aute aute tempor qui consectetur dolore duis nulla nostrud. Ea sit occaecat
                        occaecat qui nulla ipsum eiusmod laborum est exercitation pariatur excepteur reprehenderit.
                    </p>
                </div>

                <div className="col-sm-6">
                    <div>
                        
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default QuienesSomos