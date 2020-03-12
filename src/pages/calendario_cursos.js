/* import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import { Link, graphql, useStaticQuery } from 'gatsby'

const CalendarioContenido = () => {

    const data = useStaticQuery(graphql`
    query MyQuery {
        allContentfulCalendario {
          edges {
            node {
              slug
              imagenPrincipal {
                file {
                  fileName
                  url
                }
              }
              certificadoPor
            }
          }
        }
      }

    `)

    return (
        <Layout>
            <Head title="calendario_cursos"/>
            <h1 className="text-center">Calendario de Cursos</h1>
            <div className="row m-3 d-block d-lg-flex">
                {data.CalendarioContenido.edges.map((edge) => {
                  return (
                    <Link to={"/calendario_cursos/"+edge.node.slug}>
                      <img className="fluid" src={edge.node.imagenPrincipal.file} />
                    </Link>
                  )
                })}
            </div>
        </Layout>
    )
}

export default CalendarioContenido */