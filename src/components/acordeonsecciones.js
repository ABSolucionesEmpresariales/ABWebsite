import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Accordion, Card } from 'react-bootstrap'

const AcordeonSecciones = () => {
    const data = useStaticQuery(graphql`
    query  { allContentfulBlog(sort: {fields: fecha, order: DESC}) {
        edges {
          node {
            fecha  (formatString: "YYYY MMMM,D", locale: "es")
            seccion
            titulo
            slug
          }
        }
         secciones:distinct(field:seccion)
      }
    }   
    `)
    const secciones = data.allContentfulBlog.secciones;
    return (
        <div className="card col-lg-3">
            <div className="row d-none d-lg-flex">
                <div className="my-4 col-lg-12">
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

                                                {
                                                    (data.allContentfulBlog.edges.filter(edge => edge.node.seccion === seccion)).map((edge) => {
                                                        return <li style={{ listStyleType: "none" }}><Link className="text-decoration-none" to={'/blog/' + edge.node.slug}>{edge.node.titulo} | {edge.node.fecha}</Link></li>
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
    )
}
export default AcordeonSecciones;