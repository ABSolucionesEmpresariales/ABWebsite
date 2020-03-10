import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import headerStyles from './header.module.scss'
/* import '../styles/header.css' */

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header>
            <Navbar expand="lg" className={headerStyles.border}>
                <Navbar.Brand to="/home"><img src="../media/img/logo.png" alt="ABsoluciones"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex justify-content-end">
                    <Nav className={headerStyles.font}>
                        <Nav.Link to="#">Quienes somos</Nav.Link>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown" className={headerStyles.drop}>
                            <NavDropdown.Item to="#action/3.1" className={headerStyles.item}>Servicios 1</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.2" className={headerStyles.item}>Servicios 2</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.3" className={headerStyles.item}>Servicios 3</NavDropdown.Item>
                            <NavDropdown.Item to="#action/3.4" className={headerStyles.item}>Servicios 4</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Capacitación" id="basic-nav-dropdown">
                            <NavDropdown.Item to="/calendario_cursos">Catalogo de cursos</NavDropdown.Item>
                            <NavDropdown.Item to="/cursos">Calendario de cursos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://escuelaalreves.com/views/mainpage.php" target="_blank">Cursos Online</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Multimedia" id="basic-nav-dropdown">
                            <NavDropdown.Item to="#action/3.1">Blog</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item to="#action/3.2">Canal en YouTube</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1>
                <Link className="text-decoration-none" to="/">{data.site.siteMetadata.title}</Link>
            </h1>
        </header>
    )
}

export default Header
