import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'react-bootstrap/Image';
import Modal from './modal'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import footerStyles from './footer.module.scss'

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

            <div className="px-0 px-lg-5">
                <div className="row justify-content-between py-5 d-block d-lg-flex">
                    <div className="col-3 text-center d-none d-lg-flex">
                        <Image src={data.fileName.childImageSharp.fluid.src} alt="logo" fluid />
                    </div>
                    <div id="mc_embed_signup" className="col-12 col-lg-4 text-center text-lg-left">
                    <form action="https://consultoresrh.us19.list-manage.com/subscribe/post?u=9a34b280f0498e881bbdf0a8a&id=70d4489e90" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">
                                <p className={footerStyles.textStyle}>Suscríbete para recibir informacion de tu interés:</p>
                                <div className="d-block d-lg-flex">
                                    <input className={footerStyles.input} type="email" defaultValue="" name="EMAIL" id="mce-EMAIL" placeholder="Introduce tu e-mail" />
                                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_ba7ef46081ef599e35a2ccd93_c11f4979f2" tabIndex={-1} defaultValue /></div>
                                    <div className="clear"><input type="submit" defaultValue="Subscríbete" name="subscribe" id="mc-embedded-subscribe" className={footerStyles.submit} /></div>
                                </div>
                                <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                                    <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                                </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-between d-block d-lg-flex px-5 px-lg-0">
                    <ul className={'col-12 col-lg-10 row d-block d-lg-flex ' + footerStyles.ul}>
                        <li className={footerStyles.li}><Modal linkText="Contáctanos" linkClass={footerStyles.links}/></li>
                        <li className={footerStyles.li}><Link className={footerStyles.links} to="/aviso_privacidad">Aviso de Privacidad</Link> </li>
                        <li className={footerStyles.li}><Link className={footerStyles.links} to="/quienes-somos">Conócenos</Link></li>
                    </ul>
                    <div className="col-12 col-lg-2 row mt-5 mt-lg-0 mx-auto">
                        <div className="col-4">
                            <a href="https://web.facebook.com/ConsultoresABsolucionesempresariales/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={footerStyles.socialIcons} icon={faFacebook} size="2x" /></a>
                        </div>
                        <div className="col-4">
                        <a href="https://www.youtube.com/channel/UCHCt35rXuC5-QG_mhwfHzow" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={footerStyles.socialIcons} icon={faYoutube} size="2x" /></a>
                        </div>
                        <div className="col-4">
                        <a href="https://www.instagram.com/consultores.artificialbrain/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={footerStyles.socialIcons} icon={faInstagram} size="2x" /></a>
                        </div>
                    </div>
                </div>
                <div className={'row justify-content-between d-block d-lg-flex mb-4 mb-lg-0 ' + footerStyles.bottom}>
                    <div className="text-center text-lg-left col-12 col-lg-3">
                        <p><span className={footerStyles.textStyle}>AB Soluciones Empresariales</span>- Inovando tu empresa y tu forma de pensar.</p>
                    </div>
                    <div className="text-center text-lg-right  col-12 col-lg-4">
                        © 2018-2020 AB Soluciones Empresariales
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer