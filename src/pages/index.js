import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faChalkboardTeacher, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import homeStyles from '../styles/home.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <div className={'row '+homeStyles.section}>
                <div className="border col-4 text-center">
                    <div id={homeStyles.leftServiceItem} className="border p-5">
                        <FontAwesomeIcon className={homeStyles.serviceIcons} icon={faArrowUp} size="7x" />
                        <h1 className="mt-4">Couching</h1>
                        <p>Destrezas personales para manejar tu empresa.</p>
                    </div>
                    <p>Slider Frases. Teclado, difuminado o letra por letra.</p>
                    <p>Esta ficha llegara desde abajo</p>
                </div>
                <div className="border col-4 text-center">
                    <div id={homeStyles.centerServiceItem} className="border p-5">
                        <FontAwesomeIcon className={homeStyles.serviceIcons} icon={faCogs} size="7x" />
                        <h1 className="mt-4">Consultoria</h1>
                        <p>Encontrar el verdadero problema es parte de la solucion</p>
                    </div>
                    <p>Slider Frases. Teclado, difuminado o letra por letra.</p>
                    <p>Esta ficha caera de arriba</p>
                </div>
                <div className="border col-4 text-center">
                    <div id={homeStyles.rightServiceItem} className="border p-5">
                        <FontAwesomeIcon className={homeStyles.serviceIcons} icon={faChalkboardTeacher} size="7x" />
                        <h1 className="mt-4">Capacitaciones</h1>
                        <p>Habilidades extraordinarias para crear empleados extraordinarios.</p>
                    </div>
                    <p>Slider Frases. Teclado, difuminado o letra por letra.</p>
                    <p>Esta ficha llegara desde abajo</p>
                </div>
            </div>
            <div className={'bg-danger row '+homeStyles.section}>
                <div className="border col-6 text-center">
                    <Image className="border" src="https://www.designthinkersgroup.us/wp-content/uploads/2018/10/Stakeholder-mapping-image-1184x670.jpg" alt="design_thinking" fluid />
                    <p>Nuestro equipo investiga las mejores metodologias para ser mas efectivos.</p>
                </div>
                <div className="border col-6 text-center">
                    <h1 className="border mt-3">Expertos en encontrar problemas</h1>
                    <p className="border">Nuestro secreto radica en encontrar el verdadero problema. Un metodo probado y comprobado por nosotros mismo que te garantiza encontrar el problema en tu empresa para poder darle la solucion adecuada.</p>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage