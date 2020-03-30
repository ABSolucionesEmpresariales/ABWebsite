import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Parallax from '../components/paralax'
import { useStaticQuery, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from '../components/modal';
import { BannerBack } from '../media/img/banner/oferta.jpg'


const Cursos = () => {

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
                        <Modal component='button' linkClass={'btn btn-outline-dark mx-5 mb-4'}/>
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
                                            <a className="btn btn-success mx-1" target="_blank" href='https://www.escuelaalreves.com/#all-cursos'>Mostrar</a>
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
                             
        </Layout>
    )
}

export default Cursos;