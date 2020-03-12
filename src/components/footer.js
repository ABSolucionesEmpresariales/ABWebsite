import React from "react"
import {graphql, useStaticQuery} from 'gatsby'
import Image from 'react-bootstrap/Image';
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

import footerStyles from '../styles/footer.module.scss'

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
        <footer>
            <div className={'mt-5 row '+footerStyles.ayuda}>
                <h1 className="font-weight-bold">¿Como podemos ayudarte?</h1>
                <h3 className="mt-2 mt-0">Ponte en <Link className={footerStyles.ayudaLinks} to="/cursos">contacto</Link> con nosotros o encuentra <Link className={footerStyles.ayudaLinks} to="/cursos">nuestra oficina</Link> mas cercana.</h3>
            </div>
            <div className="px-0 px-lg-5">
                <div className="row justify-content-between py-5 d-block d-lg-flex">
                    <div className="col-3 text-center d-none d-lg-flex">
                        <Image src={data.fileName.childImageSharp.fluid.src} alt="logo" fluid />
                    </div>
                    <div className="col-12 col-lg-4 text-center text-lg-left">
                        <form>
                            <p className={footerStyles.textStyle}>Suscribete a nuestro Newslatter:</p>
                            <div className="d-block d-lg-flex">
                                <input className={footerStyles.input} type="text" name="name" placeholder="Introduce tu e-mail"/>
                                <button className={footerStyles.submit}>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-between d-block d-lg-flex px-5 px-lg-0">
                    <ul className={'col-12 col-lg-10 row d-block d-lg-flex '+footerStyles.ul}>
                        <li className={footerStyles.li}><Link className={footerStyles.links} to="/cursos">Contactanos</Link></li>
                        <li className={footerStyles.li}><Link className={footerStyles.links} to="/cursos">FAQ</Link></li>
                        <li className={footerStyles.li}><Link className={footerStyles.links} to="/cursos">Politica de Privacidad</Link> </li>
                        <li className={footerStyles.li}><Link className={footerStyles.links} to="/cursos">Politica de Cookies</Link></li>
                        <li className={footerStyles.li}><Link className={footerStyles.links} to="/cursos">Terminos y Condiciones</Link></li>
                        <li className={footerStyles.li}><Link className={footerStyles.links} to="/cursos">Conocenos</Link></li>
                    </ul>
                    <div className="col-12 col-lg-2 row mt-5 mt-lg-0">
                        <div className="col-3">
                            <FontAwesomeIcon className={footerStyles.socialIcons} icon={faFacebook} size="2x" />
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon className={footerStyles.socialIcons} icon={faTwitter} size="2x" />
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon className={footerStyles.socialIcons} icon={faYoutube} size="2x" />
                        </div>
                        <div className="col-3">
                            <FontAwesomeIcon className={footerStyles.socialIcons} icon={faInstagram} size="2x" />
                        </div>
                    </div>
                </div>
                <div className={'row justify-content-between d-block d-lg-flex mb-4 mb-lg-0 '+footerStyles.bottom}>
                    <div className="text-center text-lg-left col-12 col-lg-3">
                        <p><span className={footerStyles.textStyle}>AB Soluciones Empresariales</span>- Inovando tu empresa y tu forma de pensar.</p>
                    </div>
                    <div className="text-center text-lg-left  col-12 col-lg-3">
                        © 2018-2020 AB Soluciones Empresariales
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer