import React from 'react'
import { Link, graphql, useStaticQuery, } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Modal from './modal'
import headerStyles from './header.module.scss'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAngleDown, faComment, faGraduationCap, faCalendar, faLaptop, faSitemap, faIdBadge,
    faProjectDiagram, faCogs, faClipboard, faBook, faFileExcel
} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            fileName: file(relativePath: { eq: "img/logo.png" }) {
                childImageSharp {
                    fluid(maxWidth: 270, maxHeight: 55) {
                        src
                    }
                }
            }
        }
    `)

    return (
        <header className="row">
            <Navbar expand="lg" fixed="top" className={'col-12 ' + headerStyles.fondo}>
                <Navbar.Brand to="/home">
                    <Link to="/"><Image className={headerStyles.imagen} src={data.fileName.childImageSharp.fluid.src} alt="ABsoluciones" fluid /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={headerStyles.burgerButton} />
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
                                    <Link className={headerStyles.item} to="/servicios/estructura_organizacional"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faSitemap} />Consultoría en Recursos Humanos</Link>
                                    <Link className={headerStyles.item} to="/servicios/administra_tu_negocio_con_excel"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faFileExcel} />Creación de Softwares en Excel y VBA</Link>
                                    <Link className={headerStyles.item} to="/servicios/manuales_administrativos"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBook} />Creación de Manuales Administrativos</Link>
                                    <Link className={headerStyles.item} to="/servicios/modelo_canvas_para_emprender"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faProjectDiagram} />Creación de Modelos de Negocio</Link>
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
                            <div className={'dropdown-menu ' + headerStyles.dropmenu}>
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
                            <Modal
                                linkText="Contacto"
                                linkClass={'nav-link ' + headerStyles.font}
                            />
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>



        </header>
    )
}


export default Header
