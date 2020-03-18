import React from 'react'
import Layout from '../components/layout'
import Parallax from '../components/paralax'
import Video from '../components/video'
import paralaxCss from '../styles/paralax.module.scss'
import quienesCss from '../styles/quienes_somos.module.scss'



const QuienesSomos = () => {
      

    return (
        <Layout>
            <Parallax 
                title='QUIENES SOMOS'
                subtitle='Capacitamos pequeñas y grandes empresas'
                classNames={paralaxCss}
                url='../media/img/logo.png'
                />

            <div className="row">
                <div className={quienesCss.description + ' col-md-4'}>
                    <h1>ARTIFICIAL BRAIN</h1>
                    <p className={quienesCss.paragraph}>
                        Aliqua reprehenderit mollit aute nostrud irure dolore velit amet. Cillum nulla est Lorem
                        irure aliquip velit exercitation et culpa deserunt eu irure cupidatat esse.
                        Esse aliquip aute aute tempor qui consectetur dolore duis nulla nostrud. Ea sit occaecat
                        occaecat qui nulla ipsum eiusmod laborum est exercitation pariatur excepteur reprehenderit.
                    </p>
                    <p className={quienesCss.paragraph}>
                        Aliqua reprehenderit mollit aute nostrud irure dolore velit amet. Cillum nulla est Lorem
                        irure aliquip velit exercitation et culpa deserunt eu irure cupidatat esse.
                        Esse aliquip aute aute tempor qui consectetur dolore duis nulla nostrud. Ea sit occaecat
                        occaecat qui nulla ipsum eiusmod laborum est exercitation pariatur excepteur reprehenderit.
                    </p>
                </div>

                <div className={quienesCss.video + ' col-md-8'}>
                    <Video
                        className={quienesCss.shadow}
                        videoSrcURL="https://www.youtube.com/embed/YKVGVUOL2Rc"
                        videoTitle="Prueba component"
                        width="520"
                        height="300"
                    />
                </div>
            </div>
        </Layout>

    )
}

export default QuienesSomos