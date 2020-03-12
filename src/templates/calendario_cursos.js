import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import calendarioCursoscss from '../styles/calendario_cursos.module.scss'
import { faCertificate, faMapMarkerAlt, faCalendarCheck, faClock, faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons'

export const query = graphql`
    query($slug: String!){
        contentfulCalendario(slug: {eq:$slug}){
            nombreCurso
            certificadoPor
            fechaInicio(formatString:"D/MMMM/YYYY",locale:"es")
            fechaFin(formatString:"D/MMMM/YYYY",locale:"es")
            lugar
            certificadoPor
            horarioCurso
            horasTotalesCurso
            modalidadCurso
            precioCurso
            descripcion {
                json
            }
            imagenPrincipal {
                file {
                  fileName
                  url
                }
              }
        }
    }
`

const calendarioCursos = (props) => {

    return(
        <Layout>
            <div className={"row"}>
            <div className="col-lg-3 col-md-12"></div>
            
            <div className="col-lg-9 col-md-12">
                <div className={"row"}>
                    <div className={"col-lg-6 col-md-12 pl-4"}>
                        <img className={calendarioCursoscss.imagen} src={props.data.contentfulCalendario.imagenPrincipal.file.url} alt={props.data.contentfulCalendario.imagenPrincipal.file.fileName}/>   
                    </div>
                    <div className={"col-lg-6 col-md-12"}>
                        <div className="h5">
                            <p className={"h2 font-weight-bold"}>{props.data.contentfulCalendario.nombreCurso}</p>
                        </div>
                        <div className="my-3 h5">
                            <FontAwesomeIcon className="d-inline"  icon={faClock} />
                            <p className="d-inline ml-2">De: {props.data.contentfulCalendario.horarioCurso}</p>
                        </div>
                        <div className="my-3 h5">
                            <FontAwesomeIcon className={"d-inline text-primary"} icon={faCalendarCheck} />
                            <p className={"d-inline text-primary ml-2"}>Del:{props.data.contentfulCalendario.fechaInicio} a {props.data.contentfulCalendario.fechaFin}</p>
                        </div>
                        <div className="my-3 h5">
                            <FontAwesomeIcon className="d-inline"  icon={faMapMarkerAlt} />
                            <p className="d-inline ml-2">{props.data.contentfulCalendario.lugar}</p>
                        </div>
                    </div>
                </div>
                <div className={"row text-center m-2"}>
                    <div className="col-lg-3 col-md-6 col-6 mt-2  border-danger py-2">
                        <FontAwesomeIcon className="h4 text-primary"  icon={faClock} />
                        <p>Duracion: <span className={"font-weight-bold"}>{props.data.contentfulCalendario.horasTotalesCurso} Hrs</span></p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mt-2  border-danger py-2">
                        <FontAwesomeIcon className="h4 text-primary" icon={faCertificate} />
                        <p className=" ml-1 ">
                            <p className={"mb-0"}>Certificado por:</p>
                            <p className={" h6"}>{props.data.contentfulCalendario.certificadoPor}</p>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mt-2  border-danger py-2">
                        <FontAwesomeIcon className="h4 text-primary"  icon={faUser} />
                        <p>Modalidad: <span className={"font-weight-bold"}>{props.data.contentfulCalendario.modalidadCurso}</span></p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mt-2  border-danger py-2">
                        <FontAwesomeIcon className="h4 text-primary"  icon={faDollarSign} />
                        <p>Precio: <span className={"font-weight-bold"}>${props.data.contentfulCalendario.precioCurso}</span></p>
                    </div>
                </div>
                <div className={"row m-2"}>
                    <div className={"col-lg-12 col-md-12"}>
                        <p className={"h3 my-3"}>Descripcion</p>
                        <p>
                            {documentToReactComponents(props.data.contentfulCalendario.descripcion.json)}
                        </p>
                    </div>
                </div>
            </div>

            </div>
            
        </Layout>
    )
}

export default calendarioCursos