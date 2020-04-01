import React from 'react'
import Layout from '../components/layout'
import Parallax from '../components/paralax'
import Video from '../components/video'
import Card from '../components/card'
import ScrollAnimation from 'react-animate-on-scroll';
import quienesCss from '../styles/quienes_somos.module.scss'
import BannerBack from '../media/img/quienes_somos.webp'
import ConocenosBack from '../media/img/banner/oferta.jpg'
import { faCogs, faBrain, faChartPie, faTools, faGlasses, faDollarSign} from '@fortawesome/free-solid-svg-icons'
import Head from '../components/head'

const QuienesSomos = () => {

    return (
        <Layout>
            <Head title="Quienes somos"/>
            <Parallax title="Quienes Somos"
                subtitle="Capacitamos a pequeñas y grandes empresas"
                background={BannerBack}
            />

            <div className="row">
                <div className={quienesCss.description + ' col-sm-12 col-lg-6'}>
                    <h1>Artificial Brain</h1>
                    <p className={quienesCss.paragraph}>           
                        AB Soluciones Empresariales es metafóricamente la imitación de un cerebro artificial, a lo
                        que hace referencia sus siglas en ingles Artificial Brain, el cual se forma por un grupo de
                        personas con distintas capacidades formando nuevas conexiones dando como resultado, una
                        mente maestra.</p>

                </div>

                <div className={quienesCss.video + ' col-lg-6'}>
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeOut"
                    offset={250}>
                    <Video
                        className={quienesCss.shadow}
                        videoSrcURL="https://www.youtube.com/embed/YKVGVUOL2Rc"
                        videoTitle="Prueba component"
                    />
                </ScrollAnimation>
                </div>
            </div>

            <div className={quienesCss.conocenos}>
                <Parallax title="Conócenos"
                    subtitle="AB Soluciones Empresariales cuenta con las personas, procesos y herramientas correctas
                    para ayudarte a lograr tus sueños de emprender, brindar una solución a las dificultades que
                    se originen dentro de tu empresa o, darles un plus a tus servicios/productos mediante una
                    propuesta de valor innovadora."
                    background={ConocenosBack}
                />
            </div>
            
            <div className={' my-5'}>

            <div className={quienesCss.misionVision + ' row h-50'}>

                <div className={"col-lg-4"}>
                    <div className={''}>
                        <div className="card-body">
                            <h2 className="card-title">Misión</h2>
                            <p className="card-text lead">Generamos valor para la humanidad compartiendo técnicas y herramienta que contribuyan a
                            su desarrollo físico, mental y económico de cualquier persona, emprendedor o empresa,
                            ofreciendo servicios de consultoría y asesorías empresariales.</p>
                        </div>
                    </div>
                </div>

                    <div className={' col-lg-4'}>
                        <img src={ConocenosBack} className={'img-fluid'}/>
                    </div>

                <div className={'col-lg-4'}>
                <img src="http://anfec.com/news/wp-content/uploads/Junta-ejecutiva2-1024x768.jpg" className={'img-fluid'}/>
                </div>

            </div>

            <div className={quienesCss.misionVision+ ' row h-50'}>

                <div className={'col-lg-4'}>
                <img src="https://flexi.shoes/blog/wp-content/uploads/sites/7/2015/05/06-blog2-junta-ejecutiva.png" className={'img-fluid'}/>
                </div>

                <div className={'col-lg-4'}>
                    <img src={BannerBack} className={'img-fluid'}/>
                </div>

                <div className={"col-lg-4"}>
                    <div className={''}>
                        <div className="card-body">
                            <h2 className="card-title">Visión a 2023</h2>
                            <p className="card-text lead"> Ser la consultora integral con el mayor número de colaboradores trabajando para
                            emprendedores y empresas.</p>
                        </div>
                    </div>                    
                </div>

            </div>

            </div>
            
            <section className={'row'}>
            {/* <h4 className={"text-center"}>Principios de AB Soluciones Empresariales:</h4> */}
                <div className={'row'}>
                    
                    <div className={quienesCss.cardSection1 + ' col-sm-4'}>

                        <Card title="Sueño"
                            description="Nuestro sueño es generar valor para la humanidad, compartiendo técnicas y
                            herramientas que contribuyan a su desarrollo físico, mental y económico de cualquier
                            persona, emprendedor o empresa."
                            icon={faTools}
                            iconSize="3x"
                           entrada="fadeIn"
                            salida="fadeOut"
                        />

                        <Card title="Filantropía"
                            description="Un 50% de la filosofía de AB está basada en el amor hacia las personas de manera
                            desinteresada, esto es parte fundamental de nuestro sueño; se regalarán cursos para
                            cualquier persona, emprendedor o empresa, para que puedan desarrollarse de manera
                            interna y externa."
                            icon={faGlasses}
                            iconSize="3x"
                            entrada="fadeIn"
                            salida="fadeOut"
                        />

                    </div>
                    
                    <div className={quienesCss.cardSection2 + ' col-sm-4'}>

                        <Card title="Mente maestra"
                            description="AB es metafóricamente la imitación de un cerebro artificial, en el cual se reúnen un
                            grupo de personas con distintas habilidades técnicas y blandas, generando
                            innovadoras propuestas de valor."
                            icon={faBrain}
                            iconSize="3x"
                            visible={true}
                            
                        />

                        <Card title="Modelo de Referencia"
                            description="
                            Cada persona que integra la mente maestra tiene que tener las habilidades técnicas
                            necesarias para poder desempeñar su trabajo con calidad, eficiencia y eficacia,
                            además debe contar con las habilidades blandas que se requieren como:
                            Respeto, Coherencia, Integridad, Capacidad de atención y de escucha,Disposición"
                            icon={faChartPie}
                            iconSize="3x"
                            visible={true}

                        />

                    </div>

                    <div className={quienesCss.cardSection3 + ' col-sm-4'}>
                        
                        <Card title="Disciplina"
                            description="Esta es el resultado de: Organización + limpieza + puntualidad; la amalgama perfecta
                            entre estos tres factores estará presentes en cada producto o servicio ofrecido por AB."
                            icon={faCogs}
                            iconSize="3x"
                            entrada="fadeIn"
                            salida="fadeOut"
                            
                        />

                        <Card title="Capitalismo"
                            description="
                            un 50% de la filosofía de AB está basada en la obtención de recursos; dado que toda
                            empresa y persona requiere un sustento económico para poder subsistir, AB ofrece
                            servicios y productos con el fin de obtener una remuneración por estos; esta parte está
                            dirigida a: Emprendedores, Empresas"
                            icon={faDollarSign}
                            iconSize="3x"
                            entrada="fadeIn"
                            salida="fadeOut"
                        />

                    </div>
                </div>

            </section>
            
        </Layout>

    )
}

export default QuienesSomos