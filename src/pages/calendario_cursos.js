import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import banner from '../styles/banner.module.scss'
import { faCertificate, faMapMarkerAlt, faCalendarCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
/*import calendarioCursos from "../templates/calendario_cursos"*/



const CalendarioContenido = () => {

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
            <Head title="calendario_cursos"/>
            <div className={"row "+banner.efectoBanner+' '+banner.imagenBannerCalendarioPage}>
              <p className={"text-white d-inline "+banner.title}>Calendario de Cursos</p>
            </div>

            <div className="row mt-3 mb-3 p-2">
              <div className="col-lg-4 col-md-12">
                
              </div>
              <div className="col-lg-8 col-md-12">
                {data.allContentfulCalendario.edges.map((edge) => {
                  return (
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
                  )
                })
                }
              </div>
          </div>

        </Layout>
    )
}

export default CalendarioContenido
