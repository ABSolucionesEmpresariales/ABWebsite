import React from 'react'
import { Link, graphql, useStaticQuery, } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Modal } from 'react-bootstrap';
import footerStyles from '../styles/footer.module.scss'
import headerStyles from '../styles/header.module.scss'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown, faComment, faGraduationCap, faCalendar, faLaptop, faSitemap, faIdBadge, faAddressCard, faUsers,
    faProjectDiagram, faCogs, faClipboard, faBook, faHeadset, faChartLine, faFileInvoiceDollar, faFileExcel, faFileCsv, faClock
} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

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
                    fluid(maxWidth: 300, maxHeight: 55) {
                        src
                    }
                }
            }
        }
    `)

    return (
        <header className="row">
            <Navbar expand="lg" className={'col-12 '+headerStyles.fondo}>
                <Navbar.Brand to="/home">
                    <Link to="/"><Image className={headerStyles.imagen} src={data.fileName.childImageSharp.fluid.src} alt="ABsoluciones" fluid /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex justify-content-end">
                    <Nav>
                        <li className={'nav-item ' + headerStyles.font}>
                            <Link className={'nav-link ' + headerStyles.font} to="/quienes-somos/">Quienes somos</Link>
                        </li>
                        <li className={'nav-item dropdown ' + headerStyles.dropdown + ' ' + headerStyles.font}>
                            <p className={'nav-link ' + headerStyles.font} id="navbardrop" data-toggle="dropdown">
                                Servicios
                            <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faAngleDown} /></p>
                            <div className={'dropdown-menu ' + headerStyles.dropmenu_servicios}>
                                <div>
                                    <Link className={headerStyles.item} to="/servicios/estructura_organizacional"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faSitemap} />Estructura organizacional</Link>
                                    <Link className={headerStyles.item} to="/servicios/administra_tu_negocio_con_excel"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faIdBadge} />Gestiona tu empresa con EXCEL</Link>
                                    <Link className={headerStyles.item} to="/servicios/manuales_administrativos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBook} />Manuales Administrativos</Link>
                                    <Link className={headerStyles.item} to="/servicios/modelo_canvas_para_emprender"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faProjectDiagram} />Modelo CANVAS</Link>
                                </div>
                                <div>
                                    <Link className={headerStyles.item} to="/servicios/crea_un_plan_estratégico"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faClipboard} />Plan Estratégico Empresarial</Link>
                                    <Link className={headerStyles.item} to="/servicios/implementación_de_una_cultura_de_servicio_al_cliente"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBook} />Plan de Servicio al Cliente</Link>
                                    <Link className={headerStyles.item} to="/servicios/evaluación_y_mejora_de_procesos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCogs} />Evaluación y Mejora de Procesos</Link>
                                    <Link className={headerStyles.item} to="/servicios/perfiles_y_descripcion_de_puestos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faIdBadge} />Diseño de Perfil y Descripción de Puestos</Link>
                                    
                                </div>
                            </div>
                        </li>
                        <li className={'nav-item dropdown ' + headerStyles.dropdown + ' ' + headerStyles.font}>
                            <p className={'nav-link ' + headerStyles.font} id="navbardrop" data-toggle="dropdown">
                                Capacitación
                            <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faAngleDown} /></p>
                            <div className={'dropdown-menu ' + headerStyles.dropmenu_servicios}>
                                <div>
                                    <Link className={headerStyles.item} to="/cursos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faGraduationCap} />Catalogo de cursos</Link>
                                    <Link className={headerStyles.item} to="/calendario_cursos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCalendar} />Calendario de cursos</Link>
                                    <a className={headerStyles.item} href="https://escuelaalreves.com/views/mainpage.php" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faLaptop} />Cursos Online</a>
                                </div>
                            </div>
                        </li>
                        <li className={'nav-item dropdown ' + headerStyles.dropdown + ' ' + headerStyles.font}>
                            <p className={'nav-link ' + headerStyles.font} id="navbardrop" data-toggle="dropdown">
                                Multimedia
                            <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faAngleDown} /></p>
                            <div className={'dropdown-menu ' + headerStyles.dropmenu}>
                                <Link className={headerStyles.item} to="/blog"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faComment} />Blog</Link>
                                <Link className={headerStyles.item} to="/"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faYoutube} />Canal YouTube</Link>
                            </div>
                        </li>
                        <li className={'nav-item ' + headerStyles.font}>
                            <a href onClick={handleShow} onKeyDown={handleShow} className={'nav-link ' + headerStyles.font}>Contacto</a>
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
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t\n" }} />
                    <div id="mc_embed_signup">
                    <form action="https://consultoresrh.us19.list-manage.com/subscribe/post?u=9a34b280f0498e881bbdf0a8a&id=70d4489e90" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
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
        </header>
    )
}


export default Header
