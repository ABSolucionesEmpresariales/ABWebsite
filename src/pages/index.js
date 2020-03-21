import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import Carousel from '../components/carousel'
import Card from '../components/card'
import { faCogs, faChalkboardTeacher, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import homeStyles from '../styles/home.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <Carousel />
            <div className={'row ' + homeStyles.section}>
                <div className="col-lg-4">
                    <Card
                        title="Couching"
                        description="Destrezas personales para manejar tu empresa."
                        icon={faArrowUp}
                        iconSize="7x"
                        entrada="bounceInLeft"
                        animateOnce={true} />
                </div>

                <div className="col-lg-4">
                    <Card
                        title="Consultoría"
                        description="Encontrar el verdadero problema es parte de la solucion"
                        icon={faCogs}
                        iconSize="7x"
                        entrada="bounceInUp"
                        animateOnce={true} />
                </div>

                <div className="col-lg-4">
                    <Card
                        title="Capacitaciones"
                        description="Habilidades extraordinarias para crear empleados extraordinarios."
                        icon={faChalkboardTeacher}
                        entrada="bounceInRight"
                        animateOnce={true} />
                </div>

            </div>

            <div className={homeStyles.back + ' row'}>

                <div className={homeStyles.rightText + ' col-sm-4 offset-sm-8'}>

                    <h2 className={'align-middle'}>Expertos en encontrar problemas</h2>
                    <p className={'align-middle'}>Nuestro secreto radica en encontrar el verdadero problema. Un metodo probado y comprobado por nosotros mismo que te garantiza encontrar el problema en tu empresa para poder darle la solucion adecuada.</p>

                </div>
<<<<<<< HEAD
                
            </div>

            <Delay wait={25000}>
                <Newsletter />
            </Delay>
=======

            </div>

>>>>>>> 6455412677d495a3069266f54578f11e8518f610
        </Layout >
    )
}

export default IndexPage