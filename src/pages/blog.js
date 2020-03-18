import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import { Accordion, Card } from 'react-bootstrap';
const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query  { allContentfulBlog(sort: {fields: fecha, order: DESC}) {
        edges {
          node {
            imagen {
              title
              file {
                url
              }
            }
            fecha  (formatString: "YYYY MMMM,D", locale: "es")
            seccion
            autor
            titulo
            slug
            descripcion{
                descripcion
            }
          }
        }
         secciones:distinct(field:seccion)
      }
    }   
    `)

    const secciones = data.allContentfulBlog.secciones;

    return (
        <Layout>
            <Head title="Blog" />
            <div className="row boder d-block d-lg-flex">
                <div className="col-lg-9">
                    {data.allContentfulBlog.edges.map((edge) => {

                        return (

                            <div className="card col-12 col-lg-12">
                                <div className="card-body">
                                    <div className="row  d-block d-lg-flex text-justify">
                                        <div className="text-center col-lg-5">
                                            <img alt="foto" className="img-fluid" src={edge.node.imagen.file.url} />
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="text-center text-lg-left">
                                                <h3><Link className="text-decoration-none" to={'/blog/' + edge.node.slug}>{edge.node.titulo}</Link></h3>
                                            </div>
                                            <p className="font-weight-bold">{edge.node.fecha + ' - ' + edge.node.seccion + ' ' + edge.node.autor}</p>
                                            <p>{edge.node.descripcion.descripcion}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row card d-none d-lg-flex col-lg-3">
                    <div className="my-4">
                        <Accordion defaultActiveKey="0">
                            {secciones.map((seccion, cont) => {
                                cont++;
                                return (
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey={cont}>
                                            {seccion}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={cont}>
                                            <Card.Body>
                                                <ul>
                                                    {data.allContentfulBlog.edges.map((edge) => {
                                                        if (edge.node.seccion === seccion) {
                                                            return <li style={{ listStyleType: "none" }}><Link className="text-decoration-none" to={'/blog/' + edge.node.slug}>{edge.node.titulo} | {edge.node.fecha}</Link></li>
                                                        }
                                                    })}
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })}
                        </Accordion>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage;