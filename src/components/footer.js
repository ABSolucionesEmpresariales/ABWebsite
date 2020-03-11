import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }

            fileName: file(relativePath: { eq: "img/logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100, maxHeight: 100) {
                        src
                    }
                }
            }
        }
    `)
    
    return (
        <footer className="border">
            <div className="border row">
                <div className="col-3 border">
                    <div className="border text-center">
                        <Image src={data.fileName.childImageSharp.fluid.src} alt="logo" fluid />
                    </div>
                    <div className="border">
                        <p>Certificación y capacitación con reconocimiento 
                            internacional en ISO 9001, ISO 14001, OHSAS/ISO 45001, 
                            ISO 37001, ISO 21001, HACCP, ISO 22000, FSSC 22000, 
                            SQF, PrimusGFS, GLOBALG.A.P., GFSI Global Markets 
                            Programme, Auditoría a Proveedores y cursos 
                            certificados.
                        </p>
                    </div>
                    <div className="row border">
                        <div className="col-3">
                            <FontAwesomeIcon icon="facebook-f" />
                        </div>
                        <div className="col-3">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <div className="col-3">
                            Facebook
                        </div>
                        <div className="col-3">
                            Youtube
                        </div>
                    </div>
                </div>
                <div className="col-3 border">
                    <h3>¿Conoces AB?</h3>
                    <ul>
                        <li>Conocenos</li>
                        <li>Conoce nuestros clientes</li>
                        <li>Oficinas</li>
                        <li>Uniline</li>
                        <li>Forma parte de AB</li>
                    </ul>
                </div>
                <div className="col-3 border">
                    <h3>Atencion a Clientes</h3>
                    <ul>
                        <li>Preguntas Frecuentes</li>
                        <li>Politicas de Privacidad</li>
                        <li>Terminos y Condiciones</li>
                        <li>Nuestros Servicios</li>
                    </ul>
                </div>
                <div className="col-3 border">
                    <h3>Contacto</h3>
                    <div className="row">

                    </div>
                    <div className="row">

                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
            <div className="border row justify-content-center">
                <p>Created by {data.site.siteMetadata.author}, copyright 2020</p>
            </div>
        </footer>
    )
}

export default Footer