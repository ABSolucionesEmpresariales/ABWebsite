import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'react-bootstrap/Image';
import { Modal } from 'react-bootstrap';
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import headerStyles from '../styles/header.module.scss'
import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            <div className={'mt-1 row ' + footerStyles.ayuda}>
                <h1 className="font-weight-bold col-12 ">¿Como podemos ayudarte?</h1>
                <h3 className="mt-2 mt-0 col-12 ">Ponte en <a href onClick={handleShow} className={footerStyles.ayudaLinks}>contacto</a> con nosotros o encuentra <Link className={footerStyles.ayudaLinks} to="/cursos">nuestra oficina</Link> mas cercana</h3>
            </div>
            <div className="px-0 px-lg-5">
                <div className="row justify-content-between py-5 d-block d-lg-flex">
                    <div className="col-3 text-center d-none d-lg-flex">
                        <Image src={data.fileName.childImageSharp.fluid.src} alt="logo" fluid />
                    </div>
                    <div id="mc_embed_signup" className="col-12 col-lg-4 text-center text-lg-left">
                    <form action="https://consultoresrh.us19.list-manage.com/subscribe/post?u=9a34b280f0498e881bbdf0a8a&id=70d4489e90" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">
                                <p className={footerStyles.textStyle}>Suscribete a nuestro Newsletter:</p>
                                <div className="d-block d-lg-flex">
                                    <input className={footerStyles.input} type="email" defaultValue="" name="EMAIL" id="mce-EMAIL" placeholder="Introduce tu e-mail" />
                                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_ba7ef46081ef599e35a2ccd93_c11f4979f2" tabIndex={-1} defaultValue /></div>
                                    <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={footerStyles.submit} /></div>
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
                <div className={'row justify-content-between d-block d-lg-flex mb-4 mb-lg-0 ' + footerStyles.bottom}>
                    <div className="text-center text-lg-left col-12 col-lg-3">
                        <p><span className={footerStyles.textStyle}>AB Soluciones Empresariales</span>- Inovando tu empresa y tu forma de pensar.</p>
                    </div>
                    <div className="text-center text-lg-right  col-12 col-lg-4">
                        © 2018-2020 AB Soluciones Empresariales
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t\n" }} />
                    <div id="mc_embed_signup">
                    <form action="https://consultoresrh.us19.list-manage.com/subscribe/post?u=9a34b280f0498e881bbdf0a8a&amp;id=70d4489e90" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                                <div className="indicates-required"><span className="asterisk">*</span> Campo requerido</div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-FNAME">Nombre </label>
                                    <input type="text" defaultValue="" name="FNAME" id="mce-FNAME" />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-EMAIL">Correo electronico  <span className="asterisk">*</span>
                                    </label>
                                    <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-MMERGE3">Numero de telefono </label>
                                    <input type="text" name="MMERGE3" defaultValue="" id="mce-MMERGE3" />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-MMERGE4">Comentario </label>
                                    <textarea type="text" defaultValue="" name="MMERGE4" id="mce-MMERGE4" style={{ width: "100%", height: "4rem" }} />
                                </div>
                                <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                                    <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                                </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true"><input type="text" name="b_ba7ef46081ef599e35a2ccd93_c11f4979f2" tabIndex={-1} defaultValue="" /></div>
                                <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={footerStyles.submit + ' ' + headerStyles.submit} /></div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </footer>
    )
}

export default Footer