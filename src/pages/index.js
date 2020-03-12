import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import Carousel from "../components/carousel"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs, faChalkboardTeacher, faArrowUp } from '@fortawesome/free-solid-svg-icons'

import homeStyles from '../styles/home.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <Carousel/>
            <div className="row">
                <div className="border col-4 text-center py-5">
                    <FontAwesomeIcon className={homeStyles.serviceIcons} icon={faArrowUp} size="7x" />
                    <h2 className="mt-3">Couching</h2>
                    <h5>Aprende destrezas personales que te ayudaran a administrar mejor tu empresa.</h5>
                </div>
                <div className="border col-4 text-center py-5">
                    <FontAwesomeIcon className={homeStyles.serviceIcons} icon={faCogs} size="7x" />
                    <h2 className="mt-3">Consultoria</h2>
                    <h5>Descubrimos que es lo que funciona y lo que no esta funcionando en tu empresa.</h5>
                </div>
                <div className="border col-4 text-center py-5">
                    <FontAwesomeIcon className={homeStyles.serviceIcons} icon={faChalkboardTeacher} size="7x" />
                    <h2 className="mt-3">Capacitaciones</h2>
                    <h5>Capacita a tu empresa y empleados con las habilidades que necesites.</h5>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage