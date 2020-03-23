import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import footerStyles from '../styles/footer.module.scss'
import headerStyles from '../styles/header.module.scss'
import banner from '../styles/banner.module.scss'
import { faCertificate, faMapMarkerAlt, faCalendarCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
/*import calendarioCursos from "../templates/calendario_cursos"*/

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const CalendarioContenido = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const data = useStaticQuery( graphql`
    query {
      allContentfulCalendario {
        edges {
          node {
            slug
            lugar
            imagenPrincipal {
              file {
                fileName
                url
              }
            }
            certificadoPor
            nombreCurso
            fechaInicio(formatString:"D/MMMM/YYYY",locale:"es")
            fechaFin(formatString:"D/MMMM/YYYY",locale:"es")
          }
        }
      }
    }
    `)

    return (

        <Layout>
            <Head title="calendario cursos"/>
            <div className={"row "+banner.efectoBanner+' '+banner.imagenBannerCalendarioPage}>
              <p className={"text-white d-inline "+banner.title}>Calendario de Cursos</p>
            </div>

            <div className="row mt-3 mb-3 p-2">
              <div className="col-lg-4 col-md-12">
                <div className="px-0 my-3">
                    <div className="card text-center mx-lg-5">
                        <h5 className="my-3">INFORMES DE CURSOS</h5>
                        <p>¿Te interesa alguno de nuestros cursos?</p>
                        <p>Déjanos tus datos y recibe más información.</p>
                        <button onClick={handleShow} onKeyDown={handleShow} className="btn btn-outline-dark mx-5 mb-4">Información</button>
                    </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                {data.allContentfulCalendario.edges.map((edge) => {
                  return (
                    <ScrollAnimation 
                    animateIn="bounceInRight"
                    animateOut="bounceOutRight"
                    animatePreScroll={false}
                    animateOnce={true}
                    duration={2}>
                      <div className="row  mb-5 pb-3 border-bottom">
                          <img className="fluid col-lg-5 col-md-12 d-inline" src={edge.node.imagenPrincipal.file.url} alt={edge.node.imagenPrincipal.file.fileName}/>
                          <div className="col-lg-7 col-md-12">
                            <p className="h2 bold">{edge.node.nombreCurso}</p>
                            <div>
                              <FontAwesomeIcon className={"d-inline text-primary"} icon={faCalendarCheck} />
                              <p className={"h5 d-inline ml-2 text-primary"}>{edge.node.fechaInicio} a {edge.node.fechaFin}</p>
                            </div>
                            <div className="my-1">
                              <FontAwesomeIcon className="d-inline" icon={faMapMarkerAlt} />
                              <p className="d-inline ml-2">{edge.node.lugar}</p>
                            </div>
                            <div className="my-1">
                              <FontAwesomeIcon className="d-inline text-success" icon={faCheckCircle} />
                              <p className="d-inline ml-2 text-success">Disponible ahora</p>
                            </div>
                            
                            <div className="my-1">
                              <FontAwesomeIcon className="d-inline" icon={faCertificate} />
                              <p className="d-inline ml-2">Certificado por: <span className="bold">{edge.node.certificadoPor}</span></p>
                            </div>
                            <Link to={"/calendario_cursos/"+edge.node.slug}>
                              <button className="btn btn-outline-dark btn-md btn-md-block">Ver curso</button>
                            </Link>
                            
                          </div>
                      </div>
                      </ScrollAnimation>
                  )
                })
                }
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
        </Layout>
    )
}

export default CalendarioContenido 
