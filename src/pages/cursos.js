import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { useStaticQuery, graphql } from 'gatsby';
import cursoStyles from '../styles/cursos.module.scss'

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
            <div className="row d-block d-lg-flex">
                <div className="col-3">
                    jndjnd
                </div>
                <div className='col-9 d-block d-lg-flex'>
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
                            <div className="card col-4">
                                <div className="card-body text-center">
                                    <img className="img-fluid" src={url}></img>
                                    <h5 className="mt-2">{edge.node.nombre}</h5>
                                    <div className="row d-block d-lg-flex justify-content-center ">
                                        <button className="btn btn-success col-5 mx-1">Mostrar</button>
                                        <button className="btn btn-primary col-5 mx-1 " disabled>${edge.node.costo} MX</button>
                                    </div>

                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>

        </Layout>
    )
}

export default Cursos;