import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import headerStyles from '../styles/header.module.scss'
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
                    fluid(maxWidth: 60, maxHeight: 60) {
                        src
                    }
                }
            }
        }
    `)

    return (
        <header>
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
                            <Link className={'nav-link ' + headerStyles.font} to="/">Contacto</Link>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
