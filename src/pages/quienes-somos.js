import React from 'react'
import Layout from '../components/layout'
import Parallax from '../components/paralax'
import Video from '../components/video'
import Card from '../components/card'
import ScrollAnimation from 'react-animate-on-scroll';
import quienesCss from '../styles/quienes_somos.module.scss'
import BannerBack from '../media/img/quienes_somos.webp'
import { faCogs, faBrain, faChartPie, faChartLine } from '@fortawesome/free-solid-svg-icons'
import Head from '../components/head'

const QuienesSomos = () => {

    return (
        <Layout>
            <Head title="Quienes somos"/>
            <Parallax title="Quienes Somos"
                subtitle="Te capacitamos a pequeñas y grandes empresas chingon"
                background={BannerBack}
            />

            <div className="row">
                <div className={quienesCss.description + ' col-lg-6 pl-md   -5'}>
                    <h1>Artificial Brain</h1>
                    <p className={quienesCss.paragraph}>           
                        AB Soluciones Empresariales es metafóricamente la imitación de un cerebro artificial, a lo
                        que hace referencia sus siglas en ingles Artificial Brain, el cual se forma por un grupo de
                        personas con distintas capacidades formando nuevas conexiones dando como resultado, una
                        mente maestra.</p>

                    <h4 className={"text-center"}>¿Por qué debes de conocernos?</h4>
                    <p className={quienesCss.paragraph}>
                        AB Soluciones Empresariales cuenta con las personas, procesos y herramientas correctas
                        para ayudarte a lograr tus sueños de emprender, brindar una solución a las dificultades que
                        se originen dentro de tu empresa o, darles un plus a tus servicios/productos mediante una
                        propuesta de valor innovadora.
 
                    </p>
                </div>

                <div className={quienesCss.video + ' col-md-6'}>
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeOut"
                    offset={200}>
                    <Video
                        className={quienesCss.shadow}
                        videoSrcURL="https://www.youtube.com/embed/YKVGVUOL2Rc"
                        videoTitle="Prueba component"
                    />
                </ScrollAnimation>
                </div>
            </div>

            <div>
                <h4 className={"text-center"}>¿Cómo nace AB Soluciones Empresariales?</h4>
                <p>
                    En estos tiempos, con la famosa era del “COMMODITY”, donde todos los productos y
                    servicios son similares, ¿Cómo se puede ofrecer un producto o servicio verdaderamente
                    innovador?</p>
                <p>                    
                    Se ha vuelto algo tan complejo, el poder distinguir una empresa de otra que se requiere un
                    verdadero cambio para poder ser reconocido y aceptado en el mercado; la innovación se ha
                    vuelto secundaria y la mercadotecnia primaria; aunado a eso, los clientes son cada vez son
                    más exigentes, ya no es suficiente con ofrecer un producto o servicio, se requiere un cambio
                    radical, integrar la personalización absoluta en cualquier producto o servicio, pero sobre todo
                    dar solución inmediata a cualquier inquietud que se pueda presentar ya sea con un
                    emprendedor o con una empresa.</p>
                <p> 
                    Los tiempos donde las generalidades dominaban han quedado atrás; las especialidades son el
                    futuro de cualquier profesional, sea cual sea tu área, debes de prepararte en un tema en
                    específico y explotarlo a su máximo potencial. Es aquí donde entran dos variables con un
                    alto grado de complejidad: Generalidad especializada, pero, ¿Qué es eso?; para poder
                    sobresalir debes de ser un especialista en algún área ya sea: finanzas, administración, diseño,
                    ventas, recursos humanos, mercadotecnia, consultoría, programación, etc.; no es que sea
                    imposible serlo, pero aquí entra la segunda variable y aún más compleja, el tiempo.</p>

                <p> Cuando ofreces un servicio o producto, esta demanda tiempo y más si es un servicio, ya que
                    te limita un cierto número de servicios por día con la finalidad de no perder la calidad.</p>

                <p> Por este motivo se tuvo la necesidad de crear una mente maestra, mediante la unión de
                    personas especializadas en distintas áreas estratégicas para cualquier emprendedor o
                    empresa, teniendo una solución a cada problema que se pueda presentar.</p>
                <p> Así es como nace AB Soluciones Empresariales, un movimiento liderado por Deco de Dios
                    (Diego Alonso león de Dios) en el año 2018.</p>                
            </div>

            <section className={quienesCss.cardSection + ' row'}>
            <h4 className={"text-center"}>Principios de AB Soluciones Empresariales:</h4>
                <div className="row">
                    <div className="col-sm-4">
                        <Card title="Sueño"
                            description="Nuestro sueño es generar valor para la humanidad, compartiendo técnicas y
                            herramientas que contribuyan a su desarrollo físico, mental y económico de cualquier
                            persona, emprendedor o empresa."
                            icon={faCogs}
                            iconSize="3x"
                            entrada="bounceInLeft"
                        />
                    </div>

                    <div className="col-sm-4">
                        <Card title="Mente maestra"
                            description="AB es metafóricamente la imitación de un cerebro artificial, en el cual se reúnen un
                            grupo de personas con distintas habilidades técnicas y blandas, generando
                            innovadoras propuestas de valor."
                            icon={faBrain}
                            iconSize="3x"
                            entrada="bounceInDown"
                        />
                    </div>

                    <div className="col-sm-4">
                        <Card title="Filantropía"
                            description="Un 50% de la filosofía de AB está basada en el amor hacia las personas de manera
                            desinteresada, esto es parte fundamental de nuestro sueño; se regalarán cursos para
                            cualquier persona, emprendedor o empresa, para que puedan desarrollarse de manera
                            interna y externa."
                            icon={faBrain}
                            iconSize="3x"
                            entrada="bounceInRight"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <Card title="Modelo de Referencia"
                            description="
                            Cada persona que integra la mente maestra tiene que tener las habilidades técnicas
                            necesarias para poder desempeñar su trabajo con calidad, eficiencia y eficacia,
                            además debe contar con las habilidades blandas que se requieren como:
                            Respeto, Coherencia, Integridad, Capacidad de atención y de escucha,Disposición"
                            icon={faChartPie}
                            iconSize="3x"
                            entrada="bounceInLeft"
                        />
                    </div>
                    <div className="col-sm-4">
                        <Card title="Disciplina"
                            description="Esta es el resultado de: Organización + limpieza + puntualidad; la amalgama perfecta
                            entre estos tres factores estará presentes en cada producto o servicio ofrecido por AB."
                            icon={faChartLine}
                            iconSize="3x"
                            entrada="bounceInUp"
                        />
                    </div>
                    <div className="col-sm-4">
                        <Card title="Capitalismo"
                            description="
                            un 50% de la filosofía de AB está basada en la obtención de recursos; dado que toda
                            empresa y persona requiere un sustento económico para poder subsistir, AB ofrece
                            servicios y productos con el fin de obtener una remuneración por estos; esta parte está
                            dirigida a: Emprendedores, Empresas"
                            icon={faChartLine}
                            iconSize="3x"
                            entrada="bounceInRight"
                        />
                    </div>
                </div>
            </section>
            <div className={"row"}>
                <div className={"col-lg-6"}>
                    <h4 className={"text-center"}>Misión</h4>
                    <p className={"text-center"}>
                    Generamos valor para la humanidad compartiendo técnicas y herramienta que contribuyan a
                    su desarrollo físico, mental y económico de cualquier persona, emprendedor o empresa,
                    ofreciendo servicios de consultoría y asesorías empresariales.</p>
                    <h4 className={"text-center"}>Visión a 2023</h4>
                    <p className={"text-center"}>
                    Ser la consultora integral con el mayor número de colaboradores trabajando para
                    emprendedores y empresas.</p>
                </div>
                <div className={"col-lg-6"}>
                    <h4 className={"text-center"}>Valores</h4>
                    <ul>
                        <li>Respeto: respeto a la ideología de cada persona.</li>
                        <li>Coherencia: relación lógica entre lo que se dice y se hace.</li>
                        <li>Integridad: ser honestos, tener control emocional, respeto por sí mismo, apropiado, que tiene
                            respeto por los demás</li>
                        <li>Capacidad de atención y de escucha: escuchar cuando alguien habla y comprender lo que
                            se está hablando.</li>
                        <li>Disposición: ayudar siempre y cuando se pueda.</li>
                        <li>Pasión: Comprometidos con el corazón y con la razón.</li>
                    </ul>
                </div>
            </div>
        </Layout>

    )
}

export default QuienesSomos