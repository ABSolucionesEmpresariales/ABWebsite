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
import NewsletterNav from '../components/newsletter'

const Header = () => {
    const [show, setShow] = React.useState(true);
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
        <header className="row">

            <Navbar expand="lg" className={'col-12 '+headerStyles.border}>
                <Navbar.Brand to="/home">
                    <Link to="/"><Image src={data.fileName.childImageSharp.fluid.src} alt="ABsoluciones" fluid /></Link>
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
                            <div className={'dropdown-menu ' + headerStyles.dropmenu_servicios}>
                                <div>
                                    <Link className={headerStyles.item} to="/servicios/estructura_organizacional"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faSitemap} />Estructura organizacional</Link>
                                    <Link className={headerStyles.item} to="/servicios/perfiles_de_puesto"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faIdBadge} />Creación de perfiles de puesto</Link>
                                    <Link className={headerStyles.item} to="/servicios/descripcion_de_puesto"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faAddressCard} />Descripciones de puesto</Link>
                                    <Link className={headerStyles.item} to="/servicios/organigramas"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faProjectDiagram} />Organigramas</Link>
                                    <Link className={headerStyles.item} to="/servicios/procesos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCogs} />Procesos</Link>
                                </div>
                                <div>
                                    <Link className={headerStyles.item} to="/servicios/politicas_y_procedimientos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faClipboard} />Politicas y procedimientos</Link>
                                    <Link className={headerStyles.item} to="/servicios/manuales_administrativos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBook} />Manuales administrativos</Link>
                                    <Link className={headerStyles.item} to="/servicios/procesos_con_excel"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faFileExcel} />Mejora de procesos con excel</Link>
                                    <Link className={headerStyles.item} to="/servicios/excel_y_vba"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faFileCsv} />Software en excel y VBA</Link>
                                    <Link className={headerStyles.item} to="/servicios/modelo_de_negocios"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faFileInvoiceDollar} />Creacion de modelo de negocios</Link>
                                </div>
                                <div>
                                    <Link className={headerStyles.item} to="/servicios/plan_de_estrategias"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faChartLine} />Plan de estrategias</Link>
                                    <Link className={headerStyles.item} to="/servicios/plan_servicio_al_cliente"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faHeadset} />Plan servicio al cliente</Link>
                                </div>
                            </div>
                        </li>
                        <li className={'nav-item dropdown ' + headerStyles.dropdown + ' ' + headerStyles.font}>
                            <Link className={'nav-link ' + headerStyles.font} to="#" id="navbardrop" data-toggle="dropdown">
                                Capacitación
                            <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faAngleDown} /></Link>
                            <div className={'dropdown-menu ' + headerStyles.dropmenu_servicios}>
                                <div>
                                    <Link className={headerStyles.item} to="/cursos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faGraduationCap} />Catalogo de cursos</Link>
                                    <Link className={headerStyles.item} to="/calendario_cursos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCalendar} />Calendario de cursos</Link>
                                    <Link className={headerStyles.item} to="/calendario_cursos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faHeadset} />Servicio al cliente</Link>
                                    <Link className={headerStyles.item} to="/calendario_cursos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faClock} />Administración del tiempo y manejo de estrés</Link>
                                </div>
                                <div>
                                    <Link className={headerStyles.item} to="/calendario_cursos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faUsers} />Recursos Humanos (RR.HH.)</Link>
                                    <a className={headerStyles.item} href="https://escuelaalreves.com/views/mainpage.php" target="_blank"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faLaptop} />Cursos Online</a>
                                </div>
                            </div>
                        </li>
                        <li className={'nav-item dropdown ' + headerStyles.dropdown + ' ' + headerStyles.font}>
                            <Link className={'nav-link ' + headerStyles.font} to="#" id="navbardrop" data-toggle="dropdown">
                                Multimedia
                            <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faAngleDown} /></Link>
                            <div className={'dropdown-menu ' + headerStyles.dropmenu}>
                                <Link className={headerStyles.item} to="/"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faComment} />Blog</Link>
                                <Link className={headerStyles.item} to="/"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faYoutube} />Canal YouTube</Link>
                            </div>
                        </li>
                        <li className={'nav-item ' + headerStyles.font}>
                            <p onClick={handleShow} className={'nav-link ' + headerStyles.font}>Contacto</p>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <NewsletterNav/>
        </header>
    )
}


export default Header
