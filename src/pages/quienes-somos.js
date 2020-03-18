import React from 'react'
import Layout from '../components/layout'
import Parallax from '../components/paralax'
import Video from '../components/video'
import Card from '../components/card'
import paralaxCss from '../styles/paralax.module.scss'
import quienesCss from '../styles/quienes_somos.module.scss'
import BannerBack from '../media/img/quienes_somos.jpg'

const QuienesSomos = () => {

    return (
        <Layout>
            <Parallax title="Quienes Somos"
                subtitle="Te capacitamos a pequeñas y grandes empresas chingon"
                classNames={paralaxCss}
                background={BannerBack}
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
            <div className="row">
                <div className="col-sm-4">
                    <Card title="Titulo motivador"
                        description="Tempor sunt eu est nisi consequat eu magna ullamco Lorem voluptate duis. Tempor exercitation dolor consectetur qui aliqua sunt ad aliquip nostrud adipisicing enim aliqua labore quis. Laborum ut dolor ad velit. Dolore pariatur dolore exercitation mollit do occaecat esse consequat adipisicing minim do ad incididunt amet. Do est adipisicing in incididunt tempor irure irure ad voluptate deserunt nisi nulla. Aliqua velit veniam dolore amet excepteur in consectetur sit consectetur fugiat duis."
                    />
                </div>
            </div>
        </Layout>

    )
}

export default QuienesSomos