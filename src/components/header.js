import React from 'react'
import { Link, graphql, useStaticQuery, } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Modal from './modal'
import headerStyles from './header.module.scss'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faComment, faGraduationCap, faCalendar, faSitemap, faIdBadge,
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
            fileName: file(relativePath: { eq: "img/logo.jpg" }) {
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
            <Navbar expand="md" className={'col-12 ' + headerStyles.fondo}>
                <Navbar.Brand className="py-0" to="/home">
                    <Link to="/"><Image className={headerStyles.imagen} src={data.fileName.childImageSharp.fluid.src} alt="ABsoluciones" fluid /></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={headerStyles.burgerButton} />
                <Navbar.Collapse id="responsive-navbar-nav" className="flex justify-content-end">
                    <Nav className="ml-auto">
                            <Nav.Link href="/quienes-somos/">
                                ¿Quiénes somos?
                            </Nav.Link>

                            <NavDropdown title="Servicios" id="collasible-nav-dropdown" >

                                <NavDropdown.Item href="/servicios/estructura_organizacional">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faSitemap} />
                                        Consultoría en Recursos Humanos
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/servicios/administra_tu_negocio_con_excel">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faFileExcel} />
                                        Creación de Softwares en Excel y VBA
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/servicios/manuales_administrativos">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBook} />
                                        Creación de Manuales Administrativos
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/servicios/modelo_canvas_para_emprender">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faProjectDiagram} />
                                        Creación de Modelos de Negocio
                                </NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item href="/servicios/crea_un_plan_estratégico">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faClipboard} />
                                        Plan Estratégico Empresarial
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/servicios/implementación_de_una_cultura_de_servicio_al_cliente">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBook} />
                                        Plan de Servicio al Cliente
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/servicios/evaluación_y_mejora_de_procesos">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCogs} />
                                        Evaluación y Mejora de Procesos
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/servicios/perfiles_y_descripcion_de_puestos">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faIdBadge} />
                                        Diseño de Perfil y Descripción de Puestos
                                </NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown title="Capacitación" id="collasible-nav-dropdown">

                                <NavDropdown.Item href="/cursos">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faGraduationCap} />
                                        Catálogo de cursos
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/calendario_cursos">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCalendar} />
                                        Calendario de cursos
                                </NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown title="Multimedia" id="collasible-nav-dropdown">

                                <NavDropdown.Item href="/blog">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faComment} />
                                        Blog
                                </NavDropdown.Item>

                                <NavDropdown.Item href="/">
                                        <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faYoutube} />
                                        Canal YouTube
                                </NavDropdown.Item>

                            </NavDropdown>

                            <Nav.Link>
                                <Modal
                                    linkText="Contacto"
                                />
                            </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}


export default Header
