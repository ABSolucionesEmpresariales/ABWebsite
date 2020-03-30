import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Parallax from '../components/paralax'
import { useStaticQuery, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import footerStyles from '../components/footer.module.scss'
import headerStyles from '../components/header.module.scss'
import { BannerBack } from '../media/img/banner/oferta.jpg'


const Cursos = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mysql = useStaticQuery(graphql`
    query{
        allMysqlCursos{
          edges{
            node{
              idcurso
              nombre
              imagen
              costo
              }
          }
        }
      }
  `);

    return (
        <Layout>
            <Head title="Cursos" />
            <Parallax title="Catalogo de cursos"
                subtitle="Wacha nuestros cursos hommie"
                background={BannerBack}
            />
            <div className="row d-block d-lg-flex">
                <div className="col-lg-3 px-0 my-3">
                    <div className="card text-center mx-lg-5">
                        <h5 className="my-3">INFORMES DE CURSOS</h5>
                        <p>¿Te interesa alguno de nuestros cursos?</p>
                        <p>Déjanos tus datos y recibe más información.</p>
                        <button onClick={handleShow} onKeyDown={handleShow} className="btn btn-outline-dark mx-5 mb-4">Información</button>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row d-block d-lg-flex">
                        {mysql.allMysqlCursos.edges.map((edge) => {
                            {
                                const direccion = 'https://www.escuelaalreves.com/';
                                let ruta = edge.node.imagen;
                                ruta = ruta.split('/');
                                const carpeta = ruta[1];
                                const archivo = 'res_' + ruta[2];
                                var url = direccion + carpeta + "/" + archivo;
                            }
                            return (
                                
                                <div className="card col-lg-3 my-3 ml-lg-5">
                                    <div className="card-body text-center">
                                        <img className="img-fluid" src={url} alt="curso"></img>
                                        <h5 className="mt-2">{edge.node.nombre}</h5>
                                        <div className="row d-block d-lg-flex justify-content-center">
                                            <a className="btn btn-success mx-1" target="_blank" href='https://www.escuelaalreves.com/#all-cursos' rel="noopener noreferrer">Mostrar</a>
                                            <button className="btn btn-primary mx-1 " disabled>${edge.node.costo}MX</button>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        )}
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

export default Cursos;