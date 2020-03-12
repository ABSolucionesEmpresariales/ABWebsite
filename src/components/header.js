import React from 'react'
import { Link, graphql, useStaticQuery, } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Modal, Button } from 'react-bootstrap';
import footerStyles from '../styles/footer.module.scss'
import headerStyles from '../styles/header.module.scss'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            fileName: file(relativePath: { eq: "img/logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 60, maxHeight: 60) {
                        src
                    }
                }
            }
        }
    `)

    return (
        <header>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <Navbar expand="lg" className={headerStyles.border}>
                <Navbar.Brand to="/home">
                    <Image src={data.fileName.childImageSharp.fluid.src} alt="ABsoluciones" fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex justify-content-end">
                    <Nav>
                        <li className={'nav-item ' + headerStyles.font}>
                            <Link className={'nav-link ' + headerStyles.font} to="/">Quienes somos</Link>
                        </li>
                        <li className={'nav-item dropdown ' + headerStyles.dropdown + ' ' + headerStyles.font}>
                            <Link className={'nav-link ' + headerStyles.font} to="#" id="navbardrop" data-toggle="dropdown">
                                Servicios
                            <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faAngleDown} /></Link>
                            <div className={'dropdown-menu ' + headerStyles.dropmenu}>
                                <Link className={'dropdown-item ' + headerStyles.item} to="/">Servicio 1</Link>
                                <Link className={'dropdown-item ' + headerStyles.item} to="/">Servicio 2</Link>
                                <Link className={'dropdown-item ' + headerStyles.item} to="/">Servicio 3</Link>
                                <Link className={'dropdown-item ' + headerStyles.item} to="/">Servicio 4</Link>
                            </div>
                        </li>
                        <li className={'nav-item dropdown ' + headerStyles.dropdown + ' ' + headerStyles.font}>
                            <Link className={'nav-link ' + headerStyles.font} to="#" id="navbardrop" data-toggle="dropdown">
                                Capacitación
                            <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faAngleDown} /></Link>
                            <div className={'dropdown-menu ' + headerStyles.dropmenu}>
                                <Link className={'dropdown-item ' + headerStyles.item} to="/cursos">Catalogo de cursos</Link>
                                <Link className={'dropdown-item ' + headerStyles.item} to="/calendario_cursos">Calendario de cursos</Link>
                                <NavDropdown.Divider />
                                <Link className={'dropdown-item ' + headerStyles.item} to="https://escuelaalreves.com/views/mainpage.php" target="_blank">Cursos Online</Link>
                            </div>
                        </li>
                        <li className={'nav-item dropdown ' + headerStyles.dropdown + ' ' + headerStyles.font}>
                            <Link className={'nav-link ' + headerStyles.font} to="#" id="navbardrop" data-toggle="dropdown">
                                Multimedia
                            <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faAngleDown} /></Link>
                            <div className={'dropdown-menu ' + headerStyles.dropmenu}>
                                <Link className={'dropdown-item ' + headerStyles.item} to="/">Blog</Link>
                                <Link className={'dropdown-item ' + headerStyles.item} to="/">Canal YouTube</Link>
                            </div>
                        </li>
                        <li className={'nav-item ' + headerStyles.font}>
                            <p onClick={handleShow} className={'nav-link ' + headerStyles.font}>Contacto</p>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n" }} />
                    <div id="mc_embed_signup">
                        <form action="https://outlook.us19.list-manage.com/subscribe/post?u=ba7ef46081ef599e35a2ccd93&id=c11f4979f2" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                            <div id="mc_embed_signup_scroll">
                                <div className="indicates-required"><span className="asterisk">*</span> Campo requerido</div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-FNAME">Nombre </label>
                                    <input type="text" defaultValue="" name="FNAME" className id="mce-FNAME" />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-EMAIL">Correo electronico  <span className="asterisk">*</span>
                                    </label>
                                    <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-MMERGE3">Numero de telefono </label>
                                    <input type="text" name="MMERGE3" className defaultValue="" id="mce-MMERGE3" />
                                </div>
                                <div className="mc-field-group">
                                    <label htmlFor="mce-MMERGE4">Comentario </label>
                                    <textarea type="text" defaultValue="" name="MMERGE4" className id="mce-MMERGE4" style={{width: "100%", height: "4rem"}} />
                                </div>
                                <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response" style={{display: 'none'}} />
                                    <div className="response" id="mce-success-response" style={{display: 'none'}} />
                                </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_ba7ef46081ef599e35a2ccd93_c11f4979f2" tabIndex={-1} defaultValue="" /></div>
                                <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className={ footerStyles.submit +' '+ headerStyles.submit } /></div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </header>
    )
}

export default Header
